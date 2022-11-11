from setuptools import setup
import os.path

setup(
    name='nuclear explosions',
    version='1.0.0',
    py_modules=['nuclear_explosions'],
    data_files=[('', [
        "./nuclear_explosions.data"
    ])]
)

