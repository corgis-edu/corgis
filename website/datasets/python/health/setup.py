from setuptools import setup
import os.path

setup(
    name='health',
    version='2.0.0',
    py_modules=['health'],
    data_files=[('', [
        "./health.data"
    ])]
)

