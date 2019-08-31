from setuptools import setup
import os.path

setup(
    name='music',
    version='2.0.0',
    py_modules=['music'],
    data_files=[('', [
        "./music.data"
    ])]
)

