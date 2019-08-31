from setuptools import setup
import os.path

setup(
    name='energy',
    version='2.0.0',
    py_modules=['energy'],
    data_files=[('', [
        "./energy.data"
    ])]
)

