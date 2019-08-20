import os
import csv
from typing import *
from enum import Enum
import codecs

from tools.case_modifiers import snake_case, sluggify

CORGIS_LEVEL_IDENTIFIER = '.'
SOURCE_ROOT = 'source/'
SOURCE_PATH = SOURCE_ROOT + '{dataset}/{filename}'


def get_all_datasets():
    for name in os.listdir(SOURCE_ROOT):
        source_path = SOURCE_PATH.format(dataset=name, filename=name)
        meta_path = source_path + '-meta.csv'
        if os.path.exists(meta_path):
            yield name


class CorgisType(Enum):
    string = str
    int = int
    boolean = bool
    float = float
    dict = dict


class Property:
    def __init__(self, name: str, index: bool, type: CorgisType,
                 description: str):
        self.name = name
        self.index = index
        self.type = type
        self.description = description
        self.preview = []

    def __str__(self):
        return "<{name}: {type}{indexed}>".format(
            name=self.name,
            type=self.type.value.__name__,
            indexed=' (index)' if self.index else ''
        )

    def __repr__(self):
        return str(self)

    def __hash__(self):
        return hash(self.name)

    def __eq__(self, other):
        if not isinstance(other, Property):
            return False
        return self.name == other.name

    @classmethod
    def from_raw_line(cls, line):
        blank, name, type, index, desc = line
        index = index.lower() == "true"
        return Property(name, index, CorgisType[type], desc)


class Dataset:
    PREVIEW_LENGTH = 10

    def __init__(self, name: str, author: str, version: str, created: str,
                 data_file: str, overview: str, data_source: str,
                 description: str, tags: List[str], acknowledgement: str,
                 icon: str, splash: str, row: str, row_explanation: str,
                 properties: List[Property], values: List[Dict]):
        self.name = name.lower()
        self.author = author
        self.version = version
        self.created = created
        self.data_file = data_file
        self.overview = overview
        self.data_source = data_source
        self.description = description
        self.tags = tags
        self.acknowledgement = acknowledgement
        self.icon = icon
        self.splash = splash
        self.row = row
        self.row_explanation = row_explanation
        self.properties = properties
        self.values = values

    def get_full_path(self, attribute):
        filename = getattr(self, attribute)
        return SOURCE_PATH.format(dataset=sluggify(self.name), filename=filename)

    def load_values(self, csv):
        for line in csv:
            row = {}
            try:
                for i, (field, value) in enumerate(zip(self.properties, line)):
                    row[field.name] = field.type.value(value)
            except ValueError:
                raise ValueError("Invalid conversion of {value} to {type} for {field} (column {i})".format(
                    value=value,
                    type=field.type,
                    field=field,
                    i=i
                ))
            self.values.append(row)
        self._build_nested_values()
        self._build_levels_dictionary()

    def __str__(self):
        title = self.name + "\n" + (len(self.name) * "=")
        header = ", ".join([
            property.name for property in self.properties
        ])
        body = "\n".join(", ".join(list(map(str, row.values())))
                         for row in self.values[:self.PREVIEW_LENGTH])
        return "{}\n{}\n{}".format(title, header, body)

    @classmethod
    def make_safe_name(cls, name):
        return name.lower().replace(" ", "_")

    @classmethod
    def header_from_csv(cls, csv):
        for line in csv:
            if not any(line):
                continue
            field_name = line[0]
            if field_name.lower() != 'properties':
                yield (cls.make_safe_name(field_name),
                       line[1])
            else:
                break

    @classmethod
    def fields_from_csv(cls, csv):
        for line in csv:
            if not any(line):
                continue
            yield Property.from_raw_line(line)

    @classmethod
    def from_csv(cls, csv):
        header = dict(cls.header_from_csv(csv))
        fields = list(cls.fields_from_csv(list(csv)))
        return Dataset(**header, properties=fields, values=[])

    @property
    def indexes(self):
        for property in self.properties:
            if property.index:
                yield property

    def as_dictionary_of_lists(self, type_names):
        dictionaries = {property.name: {
            'data': [],
            'name': property.name,
            'comment': property.description,
            'index': property.index,
            'type': type_names.get(property.type),
            'pretty': property.name
        } for property in self.properties}
        for row in self.values:
            for key, value in row.items():
                dictionaries[key]['data'].append(value)
        return dictionaries

    def _build_nested_values(self):
        """
        Produce a new version of the dataset with nested dictionaries.
        """
        self.nested_values = []
        for row in self.values:
            nested_row = {}
            for key, value in row.items():
                key_levels = key.split(CORGIS_LEVEL_IDENTIFIER)
                current_level = nested_row
                for new_level_key in key_levels[:-1]:
                    if new_level_key not in current_level:
                        current_level[new_level_key] = {}
                    current_level = current_level[new_level_key]
                current_level[key_levels[-1]] = value
            self.nested_values.append(nested_row)

    def _build_levels_dictionary(self):
        self.levels = {'': {}}
        for property in self.properties:
            levels = property.name.split(CORGIS_LEVEL_IDENTIFIER)
            # Root
            if levels[0] not in self.levels['']:
                level_dict = Property(levels[0], False, CorgisType.dict, '')
                self.levels[''][levels[0]] = level_dict
            # Intermediate levels
            for index, level in enumerate(levels[:-2]):
                path = CORGIS_LEVEL_IDENTIFIER.join(levels[:index + 1])
                next_path = CORGIS_LEVEL_IDENTIFIER.join(levels[:index + 2])
                if path not in self.levels:
                    self.levels[path] = {}
                level_dict = Property(next_path, False, CorgisType.dict, '')
                self.levels[path][next_path] = level_dict
            # Leaf
            final_path = CORGIS_LEVEL_IDENTIFIER.join(levels[:-1])
            if final_path not in self.levels:
                self.levels[final_path] = {}
            self.levels[final_path][levels[-1]] = property
        #from pprint import pprint
        #pprint(self.levels)


def load_dataset_metadata(meta_path):
    with open(meta_path, 'r', encoding='utf-8', errors='replace') as metadata_file:
        metadata_reader = csv.reader(metadata_file)
        return Dataset.from_csv(metadata_reader)

def load_dataset(name: str) -> Dataset:
    source_path = SOURCE_PATH.format(dataset=name, filename=name)

    meta_path = source_path + '-meta.csv'
    dataset = load_dataset_metadata(meta_path)

    data_path = source_path + '-corgis.csv'
    with open(data_path, 'r', encoding='utf-8', errors='replace') as dataset_file:
        dataset_reader = csv.reader(dataset_file)
        dataset.load_values(dataset_reader)

    return dataset
