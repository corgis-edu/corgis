from setuptools import setup
import os.path

setup(
    name='suicide attacks',
    version='3.0.0',
    py_modules=['suicide_attacks'],
    data_files=[('', [
        "./suicide_attacks.data"
    ])]
)

