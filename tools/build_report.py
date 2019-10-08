from typing import *

class BuildReport:
    def __init__(self, dataset: str, format: str, time: float,
                 created_files: List[str], result: str):
        self.dataset = dataset
        self.format = format
        self.time = time
        self.created_files = created_files
        self.result = result

    def __str__(self):
        return "Finished {dataset} for {format} in {time}secs: {result} ({files} files created)".format(
            dataset=self.dataset.name,
            format=self.format,
            time=round(self.time, 2),
            result= self.result,
            files=len(self.created_files)
        )