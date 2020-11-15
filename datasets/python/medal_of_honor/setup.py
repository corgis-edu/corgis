from setuptools import setup
import os.path

setup(
    name='medal of honor',
    version='2.0.0',
    py_modules=['medal_of_honor'],
    data_files=[('', [
        "./medal_of_honor.data"
    ])]
)

