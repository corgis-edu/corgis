from setuptools import setup
import os.path

setup(
    name='consumer price index',
    version='1.0.1',
    py_modules=['consumer_price_index'],
    data_files=[('', [
        "./consumer_price_index.data"
    ])]
)

