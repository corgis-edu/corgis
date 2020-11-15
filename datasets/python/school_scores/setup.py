from setuptools import setup
import os.path

setup(
    name='school scores',
    version='2.0.0',
    py_modules=['school_scores'],
    data_files=[('', [
        "./school_scores.data"
    ])]
)

