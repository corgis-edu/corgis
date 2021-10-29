from setuptools import setup
import os.path

setup(
    name='opioids',
    version='2.0.0',
    py_modules=['opioids'],
    data_files=[('', [
        "./opioids.data"
    ])]
)

