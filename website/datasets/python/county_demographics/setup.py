from setuptools import setup
import os.path

setup(
    name='county demographics',
    version='3.0.0',
    py_modules=['county_demographics'],
    data_files=[('', [
        "./county_demographics.data"
    ])]
)

