from setuptools import setup
import os.path

setup(
    name='nearest earth objects',
    version='1.0.0',
    py_modules=['nearest_earth_objects'],
    data_files=[('', [
        "./nearest_earth_objects.data"
    ])]
)

