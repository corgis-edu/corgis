from setuptools import setup
import os.path

setup(
    name='state crime',
    version='3.0.0',
    py_modules=['state_crime'],
    data_files=[('', [
        "./state_crime.data"
    ])]
)

