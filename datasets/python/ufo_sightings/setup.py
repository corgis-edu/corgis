from setuptools import setup
import os.path

setup(
    name='ufo sightings',
    version='1.0.0',
    py_modules=['ufo_sightings'],
    data_files=[('', [
        "./ufo_sightings.data"
    ])]
)

