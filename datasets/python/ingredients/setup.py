from setuptools import setup
import os.path

setup(
    name='ingredients',
    version='3.0.0',
    py_modules=['ingredients'],
    data_files=[('', [
        "./ingredients.data"
    ])]
)

