import json
import sys, os
from shutil import copyfile
from typing import Dict, List, Any

from jinja2 import Environment, FileSystemLoader
import jinja2_highlight

from tools.case_modifiers import camel_case_caps, snake_case, camel_case, kebab_case, flat_case, sluggify
from tools.config import Config
from tools.dataset import Dataset

EXPAND_ICON = '<span class="fas fa-external-link-alt" aria-hidden="true"></span>'


def convert_example_value(data, possible_path=""):
    if isinstance(data, dict):
        return "<a class='dialog-opener' id='{possible_path}'>{{ {E} }}</a>".format(possible_path=possible_path,
                                                                                    E=EXPAND_ICON)
    elif isinstance(data, list):
        return "<a class='dialog-opener' id='{possible_path}'>[ {E} ]</a>".format(possible_path=possible_path,
                                                                                  E=EXPAND_ICON)
    elif isinstance(data, str):
        return "<code>{data}</code>".format(data=wrap_quotes(data))
    else:
        return "<code>{data}</code>".format(data=data)


def wrap_quotes(data):
    if '"' not in data:
        pretty = '"{data}"'.format(data=data)
    elif "'" not in data:
        pretty = "'{data}'".format(data=data)
    else:
        pretty = '"{data}"'.format(data=data.replace('"', '\"'))
    return pretty


def load_templates(format):
    base_directory = os.path.dirname(os.path.realpath(__file__))
    format_templates = os.path.join(base_directory, 'build_formats', format)
    templates = os.path.join(base_directory, 'build_formats', 'templates/')

    env = Environment(extensions=['jinja2_highlight.HighlightExtension'],
                      loader=FileSystemLoader([templates, format_templates]))

    env.filters['camel_case_caps'] = camel_case_caps
    env.filters['camel_case'] = camel_case
    env.filters['snake_case'] = snake_case
    env.filters['kebab_case'] = kebab_case
    env.filters['flat_case'] = flat_case
    env.filters['max'] = max
    env.filters['tojson'] = json.dumps
    env.filters['sluggify'] = sluggify
    env.filters['wrap_quotes'] = wrap_quotes
    env.filters['convert_example_value'] = convert_example_value
    env.filters['to_human_readable_type'] = lambda x: x

    return env


def build_image_files(dataset: Dataset, config: Config):
    copyfile(dataset.get_full_path('icon'), config.image_destination + dataset.icon)
    if dataset.icon != dataset.splash:
        copyfile(dataset.get_full_path('splash'), config.image_destination + dataset.splash)


def build_website_file(dataset, destination, env, language_info):
    destination += snake_case(dataset.name) + ".md"
    md = env.get_template('index.md').stream(dataset=dataset, **language_info)
    md.dump(destination)
    return destination


# {Index Values => {Property Names => [Values]}}
GroupedValues = Dict[str, Dict[str, List[Any]]]


def get_values_grouped_by_index(values, index) -> GroupedValues:
    indexed_values = {}
    for row in values:
        # Retrieve the index's value for this row
        index_value = row[index.name]
        if index_value not in indexed_values:
            indexed_values[index_value] = {}
        # Group this data based on that value
        for property_name, value in row.items():
            if not isinstance(value, (int, float)):
                continue
            if property_name not in indexed_values[index_value]:
                indexed_values[index_value][property_name] = []
            indexed_values[index_value][property_name].append(value)
    return indexed_values
