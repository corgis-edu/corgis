# corgis2

The new version of the CORGIS Project, featuring Tabular datasets.

This repository contains the tool that builds datasets, in addition to the raw and built datasets themselves.

# Building Datasets

> pip install -r requirements.txt

Datasets should be built using Python 3.7. Although the datasets themselves are compatible with a wide range of formats and language versions, building the actual datasets is best done with Python 3.7. This is particularly important for the Python destination format, to ensure that the pickled dictionaries are stored in consistent order - this prevents unnecessary clogging of commit history.

## Metadata Format

```
Name,Weather,,,
Version,0.0.1,,,
Author,Dennis Kafura (kafura@vt.edu),,,
...
```

## Dataset Format

```
State,Date.Day,Date.Month,Temperature.Minimum,Temperature.Maximum
Delaware,12,2,45,67
Delaware,13,2,42,64
Virginia,12,2,24,35
```

## Running Builder

> python corgis.py police-shootings python