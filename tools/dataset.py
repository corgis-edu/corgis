from typing import *
from enum import Enum

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

class Dataset:
    def __init__(self, name: str, author: str, version: str, created: str,
                 data_file: str, overview: str, data_source: str,
                 description: str, tags: List[str], image: str,
                 properties: List[Property]):
        self.name = name
        self.author = author
        self.version = version
        self.created = created
        self.data_file = data_file
        self.overview = overview
        self.data_source = data_source
        self.description = description
        self.tags = tags
        self.image = image
        self.properties = properties
