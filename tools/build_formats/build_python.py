import csv
import time

from tools.build_report import BuildReport

def build(dataset):
    start = time.time()
    print(dataset)
    end_time = time.time()-start
    report = BuildReport(dataset, 'python', end_time, [])
    return report