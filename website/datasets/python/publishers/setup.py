from setuptools import setup
import os.path

setup(
    name='publishers',
    version='2.0.0',
    py_modules=['publishers'],
    data_files=[('', [
        "./publishers.data"
    ])]
)

