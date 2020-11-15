from setuptools import setup
import os.path

setup(
    name='finance',
    version='2.0.0',
    py_modules=['finance'],
    data_files=[('', [
        "./finance.data"
    ])]
)

