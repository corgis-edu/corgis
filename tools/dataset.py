import csv
from typing import *
from enum import Enum
import codecs

class CorgisType(Enum):
    string = str
    int = int
    boolean = bool
    float = float

class Property:
    def __init__(self, name: str, index: bool, type: CorgisType,
                 description: str):
        self.name = name
        self.index = index
        self.type = type
        self.description = description
    
    @classmethod
    def from_raw_line(cls, line):
        blank, name, type, index, desc = line
        return Property(name, index, CorgisType[type], desc)

class Dataset:

    PREVIEW_LENGTH = 10

    def __init__(self, name: str, author: str, version: str, created: str,
                 data_file: str, overview: str, data_source: str,
                 description: str, tags: List[str], acknowledgement: str,
                 image: str, row: str,
                 properties: List[Property], values: List[Dict]):
        self.name = name
        self.author = author
        self.version = version
        self.created = created
        self.data_file = data_file
        self.overview = overview
        self.data_source = data_source
        self.description = description
        self.tags = tags
        self.acknowledgement = acknowledgement
        self.image = image
        self.row = row
        self.properties = properties
        self.values = values
    
    def load_values(self, csv):
        for line in csv:
            self.values.append({
                field.name: field.type.value(value)
                for field, value in zip(self.properties, line)
            })
    
    def __str__(self):
        title = self.name+"\n"+(len(self.name)*"=")
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

def load_dataset(dataset_name: str) -> Dataset:
    source_path = 'source/{name}/{name}'.format(name=dataset_name)
    
    meta_path = source_path + '-meta.csv'
    with open(meta_path, 'r', encoding='utf-8', errors='replace') as metadata_file:
        metadata_reader = csv.reader(metadata_file)
        dataset = Dataset.from_csv(metadata_reader)
    
    data_path = source_path + '-corgis.csv'
    with open(data_path, 'r', encoding='utf-8', errors='replace') as dataset_file:
        dataset_reader = csv.reader(dataset_file)
        dataset.load_values(dataset_reader)
    
    return dataset