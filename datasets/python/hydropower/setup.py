from setuptools import setup
import os.path

setup(
    name='hydropower',
    version='2.0.0',
    py_modules=['hydropower'],
    data_files=[('', [
        "./hydropower.data"
    ])]
)

