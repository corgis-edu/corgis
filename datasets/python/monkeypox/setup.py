from setuptools import setup
import os.path

setup(
    name='monkeypox',
    version='1.0.0',
    py_modules=['monkeypox'],
    data_files=[('', [
        "./monkeypox.data"
    ])]
)

