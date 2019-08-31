from setuptools import setup
import os.path

setup(
    name='video games',
    version='2.0.0',
    py_modules=['video_games'],
    data_files=[('', [
        "./video_games.data"
    ])]
)

