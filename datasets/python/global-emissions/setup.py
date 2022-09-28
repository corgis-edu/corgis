from setuptools import setup
import os.path

setup(
    name='global-emissions',
    version='1.0.0',
    py_modules=['global-emissions'],
    data_files=[('', [
        "./global-emissions.data"
    ])]
)

