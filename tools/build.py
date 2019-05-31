import csv
import os
import importlib
from typing import *

from tools.dataset import Dataset
from tools.build_report import BuildReport

def load_dataset(dataset_name: str) -> Dataset:
    pass
    
def parse_format(format: str) -> List[str]:
    if format.lower() in ('all', '*'):
        return get_all_builders()
    
    formats = format.split(',')
    for format in formats:
        " TODO: Confirm that build_* is there "
    
    return formats
    
def build_dataset(dataset: Dataset, format: str) -> BuildReport:
    imported = importlib.import_module("tools.build_formats.build_"+format)
    build_report = imported.build(dataset)
    return build_report

def build(dataset_name: str, format: str) -> List[BuildReport]:
    '''
    Loads the desired dataset by its name in the specified format.
    
    Args:
        dataset_name (str): The name of the dataset (e.g., "police-shootings").
        format (str): The desired output format, e.g., "python" or "json"
    Returns:
        str: Information about the built datasets
    '''
    dataset = load_dataset(dataset_name)
    formats = parse_format(format)
    for format in formats:
        yield build_dataset(dataset, format)
