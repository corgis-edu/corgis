from setuptools import setup
import os.path

setup(
    name='earthquakes',
    version='2.0.0',
    py_modules=['earthquakes'],
    data_files=[('', [
        "./earthquakes.data"
    ])]
)

