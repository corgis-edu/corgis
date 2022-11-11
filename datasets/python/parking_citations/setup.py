from setuptools import setup
import os.path

setup(
    name='parking citations',
    version='1.0.0',
    py_modules=['parking_citations'],
    data_files=[('', [
        "./parking_citations.data"
    ])]
)

