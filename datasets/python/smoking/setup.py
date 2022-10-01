from setuptools import setup
import os.path

setup(
    name='smoking',
    version='1.0.0',
    py_modules=['smoking'],
    data_files=[('', [
        "./smoking.data"
    ])]
)

