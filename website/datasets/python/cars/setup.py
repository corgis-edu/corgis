from setuptools import setup
import os.path

setup(
    name='cars',
    version='2.0.0',
    py_modules=['cars'],
    data_files=[('', [
        "./cars.data"
    ])]
)

