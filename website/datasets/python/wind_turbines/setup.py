from setuptools import setup
import os.path

setup(
    name='wind turbines',
    version='0.0.2',
    py_modules=['wind_turbines'],
    data_files=[('', [
        "./wind_turbines.data"
    ])]
)

