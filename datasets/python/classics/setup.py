from setuptools import setup
import os.path

setup(
    name='classics',
    version='2.0.0',
    py_modules=['classics'],
    data_files=[('', [
        "./classics.data"
    ])]
)

