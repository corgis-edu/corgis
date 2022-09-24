from setuptools import setup
import os.path

setup(
    name='construction permits',
    version='3.1.0',
    py_modules=['construction_permits'],
    data_files=[('', [
        "./construction_permits.data"
    ])]
)

