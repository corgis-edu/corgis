from setuptools import setup
import os.path

setup(
    name='covid-mobility',
    version='1.0.0',
    py_modules=['covid-mobility'],
    data_files=[('', [
        "./covid-mobility.data"
    ])]
)

