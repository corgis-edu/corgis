from setuptools import setup
import os.path

setup(
    name='airlines',
    version='2.0.0',
    py_modules=['airlines'],
    data_files=[('', [
        "./airlines.data"
    ])]
)

