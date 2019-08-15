import pickle
import time
from os import makedirs

from tools.build_report import BuildReport
from tools.case_modifiers import snake_case
from tools.common import load_templates, build_image_files, build_website_file, get_values_grouped_by_index
from tools.dataset import CorgisType
from tools.tifa import TifaDefinition

__version__ = '2.0.0'

env = load_templates('blockpy')

LANGUAGE_TYPE_NAMES = {
    CorgisType.string: 'String',
    CorgisType.int: 'Integer',
    CorgisType.float: 'Float',
    CorgisType.boolean: 'Boolean',
    CorgisType.dict: 'Dictionary'
}

LANGUAGE_TYPE_DESCRIPTIONS = {
    CorgisType.string: 'String (text)',
    CorgisType.int: 'Integer (whole number)',
    CorgisType.float: 'Float (decimal number)',
    CorgisType.boolean: 'Boolean (True or False)',
    CorgisType.dict: 'Dictionary'
}

LANGUAGE_INFO = {
    'LANGUAGE_TYPE_NAMES': LANGUAGE_TYPE_NAMES,
    'LANGUAGE_TYPE_DESCRIPTIONS': LANGUAGE_TYPE_DESCRIPTIONS
}


def build_slimmer_file(dataset, destination):
    destination += snake_case(dataset.name) + "_dataset.js"
    data = dataset.as_dictionary_of_lists(LANGUAGE_TYPE_NAMES)
    code = env.get_template('dataset.js').stream(dataset=dataset, data=data)
    code.dump(destination)
    return destination


def build_complete_file(dataset, destination):
    destination += snake_case(dataset.name) + "_complete.js"
    code = env.get_template('complete.js').stream(dataset=dataset)
    code.dump(destination)
    return destination


def build_skulpt_file(dataset, destination):
    destination += snake_case(dataset.name) + "_skulpt.js"
    tifa_definitions = build_tifa_definitions(dataset)
    code = env.get_template('skulpt.js').stream(dataset=dataset, tifa_definitions=tifa_definitions)
    code.dump(destination)
    return destination


def build_tifa_definitions(dataset):
    return TifaDefinition(dataset.nested_values).result


def build_blockly_file(dataset, destination):
    indexed_values = {index: get_values_grouped_by_index(dataset.values, index)
                      for index in dataset.indexes}
    destination += snake_case(dataset.name) + "_blockly.js"
    code = env.get_template('blockly.js').stream(dataset=dataset, indexed_values=indexed_values)
    code.dump(destination)
    return destination


def build(dataset, configuration):
    # Prelude
    start = time.time()

    # Processing
    dataset_name = snake_case(dataset.name)
    destination = configuration.destination.format(dataset=dataset_name,
                                                   format='blockpy')
    makedirs(destination, exist_ok=True)
    files = [build_blockly_file(dataset, destination),
             build_skulpt_file(dataset, destination),
             build_complete_file(dataset, destination),
             build_slimmer_file(dataset, destination),
             build_image_files(dataset, configuration),
             build_website_file(dataset, destination, env, LANGUAGE_INFO)]

    # Wrap up
    duration = time.time() - start
    return BuildReport(dataset, 'blockpy', duration, files, 'success')
