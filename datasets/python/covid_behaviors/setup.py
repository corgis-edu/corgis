from setuptools import setup
import os.path

setup(
    name='covid behaviors',
    version='1.0.0',
    py_modules=['covid_behaviors'],
    data_files=[('', [
        "./covid_behaviors.data"
    ])]
)

