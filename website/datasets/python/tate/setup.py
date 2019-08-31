from setuptools import setup
import os.path

setup(
    name='tate',
    version='2.0.0',
    py_modules=['tate'],
    data_files=[('', [
        "./tate.data"
    ])]
)

