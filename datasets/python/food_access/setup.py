from setuptools import setup
import os.path

setup(
    name='food access',
    version='3.0.0',
    py_modules=['food_access'],
    data_files=[('', [
        "./food_access.data"
    ])]
)

