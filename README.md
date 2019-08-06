# corgis2

The new version of the CORGIS Project, featuring Tabular datasets.

This repository contains the tool that builds datasets, in addition to the raw and
built datasets themselves.

# Building Datasets

```
>>> pip install -r requirements.txt
```

Datasets should be built using Python 3.7. Although the datasets themselves
are compatible with a wide range of formats and language versions, building the
actual datasets is best done with Python 3.7. This is particularly important for
the Python destination format, to ensure that the pickled dictionaries are stored
in consistent order - this prevents unnecessary clogging of commit history.

## The Directory Format

A new dataset should be placed into the `source/` directory in a folder with a unique
`name`. All datasets must be given a unique `name`, which will influence the names of
the files that belong in that directory:

* `<name>-metadata.csv`: Metadata file
* `<name>-corgis.csv`: Dataset file

Additionally, you are encouraged to use the following conventions for additional files:

* `<name>-icon.png`: The icon that will be associated with this dataset.
* `<name>-splash.png`: The splash page image that will be associated with this dataset (a bigger, more fun picture).
* `<name>-script.py`: The primary program used to synthesize the Dataset file.
* `raw/`: A folder for storing raw data files used to generate the Dataset file.

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

## Automatically Running Builder

Dataset versions are tracked via the `index.json` file in configured build directory.

There are two things that trigger a build of a dataset:

* Updating the version of a builder
* Creating a new folder in `source/`, with the appropriate files and structure.
* Incrementing the version number in a Metadata file, following Semver rules (X.Y.Z):
  * Patch (Z): When making bug fixes, not changing layout or structure.
  * Minor (Y): When new, backwards compatible functionality is introduced.
  * Major (X): When any backwards incompatible changes are introduced to the public API
  
Whenever you push to the repo, a Travis script will scan the `source/` directory
and compare the information there with the current information in the `index.json`. Any
out-of-date libraries are rebuilt and placed in the configured build directory.

## Manually Running Builder

```
>>> python corgis.py police-shootings python
```
