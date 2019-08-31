from setuptools import setup
import os.path

setup(
    name='{{ dataset.name }}',
    version='{{ dataset.version }}',
    py_modules=['{{ dataset.name | snake_case }}'],
    data_files=[('', [
        "./{{ dataset.name|snake_case }}.data"
    ])]
)


