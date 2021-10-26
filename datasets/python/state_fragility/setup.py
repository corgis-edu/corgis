from setuptools import setup
import os.path

setup(
    name='state fragility',
    version='3.0.0',
    py_modules=['state_fragility'],
    data_files=[('', [
        "./state_fragility.data"
    ])]
)

