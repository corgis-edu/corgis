from setuptools import setup
import os.path

setup(
    name='global development',
    version='2.0.0',
    py_modules=['global_development'],
    data_files=[('', [
        "./global_development.data"
    ])]
)

