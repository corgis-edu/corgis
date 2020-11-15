from setuptools import setup
import os.path

setup(
    name='billionaires',
    version='2.0.0',
    py_modules=['billionaires'],
    data_files=[('', [
        "./billionaires.data"
    ])]
)

