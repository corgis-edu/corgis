from setuptools import setup
import os.path

setup(
    name='injuries',
    version='2.0.0',
    py_modules=['injuries'],
    data_files=[('', [
        "./injuries.data"
    ])]
)

