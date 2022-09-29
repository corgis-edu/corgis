from setuptools import setup
import os.path

setup(
    name='global emissions',
    version='1.0.0',
    py_modules=['global_emissions'],
    data_files=[('', [
        "./global_emissions.data"
    ])]
)

