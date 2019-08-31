from setuptools import setup
import os.path

setup(
    name='skyscrapers',
    version='2.0.0',
    py_modules=['skyscrapers'],
    data_files=[('', [
        "./skyscrapers.data"
    ])]
)

