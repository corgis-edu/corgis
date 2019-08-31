from setuptools import setup
import os.path

setup(
    name='election',
    version='2.0.0',
    py_modules=['election'],
    data_files=[('', [
        "./election.data"
    ])]
)

