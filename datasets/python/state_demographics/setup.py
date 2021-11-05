from setuptools import setup
import os.path

setup(
    name='state demographics',
    version='3.0.0',
    py_modules=['state_demographics'],
    data_files=[('', [
        "./state_demographics.data"
    ])]
)

