from setuptools import setup
import os.path

setup(
    name='covid',
    version='2.0.1',
    py_modules=['covid'],
    data_files=[('', [
        "./covid.data"
    ])]
)

