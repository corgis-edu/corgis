import csv
import pickle
import time
from shutil import copyfile
from os import makedirs

from tools.build_report import BuildReport
from tools.common import snake_case, load_templates
from tools.dataset import CorgisType
from tools.tifa import TifaDefinition

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

def build_documentation(dataset, destination):
    pass

def build_data_file(dataset, destination):
    destination += snake_case(dataset.name)+".data"
    with open(destination, 'wb') as data_file:
        pickle.dump(dataset.nested_values, data_file, protocol=2)
    return destination
    
def build_tifa_definitions(dataset):
    return TifaDefinition(dataset.nested_values).result

def build_python_file(dataset, destination):
    destination += snake_case(dataset.name)+".py"
    tifa_definitions = build_tifa_definitions(dataset)
    code = env.get_template('main.py').stream(dataset=dataset,
                                              tifa_definitions=tifa_definitions)
    code.dump(destination)
    return destination
    
def build_website_file(dataset, destination):
    destination += snake_case(dataset.name)+".md"
    md = env.get_template('index.md').stream(dataset=dataset, **LANGUAGE_INFO)
    md.dump(destination)
    return destination

def build_image_files(dataset, destination):
    copyfile(dataset.get_full_path('icon'), destination + dataset.icon)
    if dataset.icon != dataset.splash:
        copyfile(dataset.get_full_path('splash'), destination + dataset.splash)

def build(dataset, configuration):
    # Prelude
    start = time.time()
    
    # Processing
    dataset_name = snake_case(dataset.name)
    destination = configuration.destination.format(dataset=dataset_name,
                                                   format='python')
    makedirs(destination, exist_ok=True)
    files = [build_python_file(dataset, destination),
             build_data_file(dataset, destination),
             build_image_files(dataset, destination),
             build_website_file(dataset, destination)]
    print(dataset)
    
    # Wrap up
    duration = time.time()-start
    return BuildReport(dataset, 'python', duration, files)
