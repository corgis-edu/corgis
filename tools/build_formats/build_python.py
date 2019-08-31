import pickle
import time
from os import makedirs

from tools.build_report import BuildReport
from tools.case_modifiers import snake_case
from tools.common import load_templates, build_image_files, build_website_file
from tools.dataset import CorgisType
from tools.tifa import TifaDefinition

__version__ = '2.0.0'

env = load_templates('python')

LANGUAGE_TYPE_NAMES = {
    CorgisType.string: 'str',
    CorgisType.int: 'int',
    CorgisType.float: 'float',
    CorgisType.boolean: 'bool',
    CorgisType.dict: 'dict'
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


def build_data_file(dataset, destination):
    destination += snake_case(dataset.name) + ".data"
    with open(destination, 'wb') as data_file:
        pickle.dump(dataset.nested_values, data_file, protocol=2)
    return destination


def build_tifa_definitions(dataset):
    return TifaDefinition(dataset.nested_values).result


def build_python_file(dataset, destination):
    destination += snake_case(dataset.name) + ".py"
    tifa_definitions = build_tifa_definitions(dataset)
    code = env.get_template('main.py').stream(dataset=dataset,
                                              tifa_definitions=tifa_definitions)
    code.dump(destination)
    return destination

def build_setup_file(dataset, destination):
    destination += "setup.py"
    code = env.get_template('setup.py').stream(dataset=dataset)
    code.dump(destination)
    return destination




def build(dataset, configuration):
    # Prelude
    start = time.time()

    # Processing
    dataset_name = snake_case(dataset.name)
    destination = configuration.destination.format(dataset=dataset_name,
                                                   format='python')
    makedirs(destination, exist_ok=True)
    files = [build_python_file(dataset, destination),
             build_setup_file(dataset, destination),
             build_data_file(dataset, destination),
             build_image_files(dataset, configuration),
             build_website_file(dataset, destination, env, LANGUAGE_INFO)]

    # Wrap up
    duration = time.time() - start
    return BuildReport(dataset, 'python', duration, files, 'success')
