---
permalink: /python/cancer/
---

# cancer Python Library

<p class='lead'>From the CORGIS Dataset Project</p>

<span class='text-muted'>By Dennis Kafura</span><br>
<span class='text-muted'>Version 1.0.0, created 6/27/2019</span><br>
<span class='text-muted'>Tags: cancer, cancer deaths, medical, health</span>

# Overview

Information about the rates of cancer deaths in each state is reported. The data shows the total rate as well as rates based on sex, age, and race. Rates are also shown for three specific kinds of cancer: breast cancer, colorectal cancer, and lung cancer.

<https://www.socialexplorer.com/explore-tables>

> 

# Explore Structure

<button>Explore</button>

# Downloads

Download all of the following files.

1. [cancer.py](../../datasets/python/cancer/cancer.py)
2. [cancer.data](../../datasets/python/cancer/cancer.data)

# Usage

# Documentation

```python
import cancer
cancer_reports = cancer.get_cancer_reports()
```