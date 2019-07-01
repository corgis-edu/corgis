import csv
from typing import *

class Config:
    DEFAULT_DESTINATION = 'website/datasets/{format}/{dataset}/'
    
    def __init__(self, destination):
        self.destination = destination
    