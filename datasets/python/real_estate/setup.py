from setuptools import setup
import os.path

setup(
    name='real estate',
    version='2.0.0',
    py_modules=['real_estate'],
    data_files=[('', [
        "./real_estate.data"
    ])]
)

