from setuptools import setup
import os.path

setup(
    name='labor',
    version='2.0.0',
    py_modules=['labor'],
    data_files=[('', [
        "./labor.data"
    ])]
)

