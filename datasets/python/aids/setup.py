from setuptools import setup
import os.path

setup(
    name='aids',
    version='2.0.0',
    py_modules=['aids'],
    data_files=[('', [
        "./aids.data"
    ])]
)

