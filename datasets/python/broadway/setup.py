from setuptools import setup
import os.path

setup(
    name='broadway',
    version='2.0.0',
    py_modules=['broadway'],
    data_files=[('', [
        "./broadway.data"
    ])]
)

