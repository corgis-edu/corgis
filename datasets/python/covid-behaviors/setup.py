from setuptools import setup
import os.path

setup(
    name='covid-behaviors',
    version='1.0.0',
    py_modules=['covid-behaviors'],
    data_files=[('', [
        "./covid-behaviors.data"
    ])]
)

