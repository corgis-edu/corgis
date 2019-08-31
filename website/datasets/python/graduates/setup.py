from setuptools import setup
import os.path

setup(
    name='graduates',
    version='2.0.0',
    py_modules=['graduates'],
    data_files=[('', [
        "./graduates.data"
    ])]
)

