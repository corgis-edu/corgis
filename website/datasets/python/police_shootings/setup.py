from setuptools import setup
import os.path

setup(
    name='police shootings',
    version='0.0.1',
    py_modules=['police_shootings'],
    data_files=[('', [
        "./police_shootings.data"
    ])]
)

