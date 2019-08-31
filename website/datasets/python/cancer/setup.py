from setuptools import setup
import os.path

setup(
    name='cancer',
    version='1.0.0',
    py_modules=['cancer'],
    data_files=[('', [
        "./cancer.data"
    ])]
)

