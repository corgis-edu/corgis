from setuptools import setup
import os.path

setup(
    name='construction spending',
    version='2.0.0',
    py_modules=['construction_spending'],
    data_files=[('', [
        "./construction_spending.data"
    ])]
)

