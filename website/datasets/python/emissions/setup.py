from setuptools import setup
import os.path

setup(
    name='emissions',
    version='1.0.0',
    py_modules=['emissions'],
    data_files=[('', [
        "./emissions.data"
    ])]
)

