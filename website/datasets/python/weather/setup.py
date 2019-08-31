from setuptools import setup
import os.path

setup(
    name='weather',
    version='2.0.0',
    py_modules=['weather'],
    data_files=[('', [
        "./weather.data"
    ])]
)

