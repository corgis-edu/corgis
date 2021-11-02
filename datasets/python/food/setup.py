from setuptools import setup
import os.path

setup(
    name='food',
    version='3.0.0',
    py_modules=['food'],
    data_files=[('', [
        "./food.data"
    ])]
)

