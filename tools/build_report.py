from typing import *

class BuildReport:
    def __init__(self, dataset: str, format: str, time: float,
                 created_files: List[str]):
        self.dataset = dataset
        self.format = format
        self.time = time
        self.created_files = created_files