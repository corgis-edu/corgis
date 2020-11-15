from setuptools import setup
import os.path

setup(
    name='electricity',
    version='1.0.0',
    py_modules=['electricity'],
    data_files=[('', [
        "./electricity.data"
    ])]
)

