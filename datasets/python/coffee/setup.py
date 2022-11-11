from setuptools import setup
import os.path

setup(
    name='coffee',
    version='1.0.0',
    py_modules=['coffee'],
    data_files=[('', [
        "./coffee.data"
    ])]
)

