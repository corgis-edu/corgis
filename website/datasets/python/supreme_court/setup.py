from setuptools import setup
import os.path

setup(
    name='supreme court',
    version='3.0.0',
    py_modules=['supreme_court'],
    data_files=[('', [
        "./supreme_court.data"
    ])]
)

