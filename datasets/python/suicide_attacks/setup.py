from setuptools import setup
import os.path

setup(
    name='suicide attacks',
    version='2.0.0',
    py_modules=['suicide_attacks'],
    data_files=[('', [
        "./suicide_attacks.data"
    ])]
)

