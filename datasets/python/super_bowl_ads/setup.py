from setuptools import setup
import os.path

setup(
    name='super bowl ads',
    version='1.0.0',
    py_modules=['super_bowl_ads'],
    data_files=[('', [
        "./super_bowl_ads.data"
    ])]
)

