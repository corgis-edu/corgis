import csv
import os
import importlib
from typing import *

from tools.dataset import get_all_datasets, load_dataset, Dataset
from tools.build_report import BuildReport
from tools.config import Config


def get_all_builders():
    return []


def parse_format(format: str) -> List[str]:
    if format.lower() in ('all', '*'):
        return get_all_builders()

    formats = format.split(',')
    for data_format in formats:
        " TODO: Confirm that build_* is there "

    return formats


def build_dataset(dataset: Dataset, format: str, config: Config) -> BuildReport:
    imported = importlib.import_module("tools.build_formats.build_" + format)
    build_report = imported.build(dataset, config)
    config.add_entry(format, dataset)
    return build_report


def build(dataset_name: str, format: str, config: Config) -> List[BuildReport]:
    """
    Loads the desired dataset by its name in the specified format.

    Args:
        dataset_name (str): The name of the dataset (e.g., "police-shootings").
        format (str): The desired output format, e.g., "python" or "json"
        config (Config): The configuration information
    Returns:
        List[BuildReport]: Information about the built datasets
    """
    formats = parse_format(format)
    if dataset_name == "*":
        dataset_names = get_all_datasets()
    else:
        dataset_names = [dataset_name]
    for dataset_name in dataset_names:
        dataset = load_dataset(dataset_name)
        for format in formats:
            yield build_dataset(dataset, format, config)


def build_all(config: Config) -> List[BuildReport]:
    """
    Checks the index for any changed files

    :param config:
    :return:
    """
    try:
        pass
    finally:
        config.save_index()
    return []
