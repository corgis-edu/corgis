from setuptools import setup
import os.path

setup(
    name='hospitals',
    version='1.0.0',
    py_modules=['hospitals'],
    data_files=[('', [
        "./hospitals.data"
    ])]
)

