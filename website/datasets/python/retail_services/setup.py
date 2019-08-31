from setuptools import setup
import os.path

setup(
    name='retail services',
    version='2.0.0',
    py_modules=['retail_services'],
    data_files=[('', [
        "./retail_services.data"
    ])]
)

