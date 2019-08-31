from setuptools import setup
import os.path

setup(
    name='business dynamics',
    version='2.0.0',
    py_modules=['business_dynamics'],
    data_files=[('', [
        "./business_dynamics.data"
    ])]
)

