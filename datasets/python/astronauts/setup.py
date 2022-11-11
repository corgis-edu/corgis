from setuptools import setup
import os.path

setup(
    name='astronauts',
    version='1.0.0',
    py_modules=['astronauts'],
    data_files=[('', [
        "./astronauts.data"
    ])]
)

