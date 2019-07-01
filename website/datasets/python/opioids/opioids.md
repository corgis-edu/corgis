---
permalink: /python/opioids/
---

# opioids Python Library

<p class='lead'>From the CORGIS Dataset Project</p>

<span class='text-muted'>By Dennis Kafura</span><br>
<span class='text-muted'>Version 1.0.0, created 6/30/2019</span><br>
<span class='text-muted'>Tags: opioids, drug deaths, heroin, cocaine, drug overdose</span>

# Overview

All opioids are chemically related and interact with opioid receptors on nerve cells in the body and brain. Opioid pain relievers  can be misused (taken in a different way or in a larger quantity than prescribed, or taken without a doctor's prescription). Regular use - even as prescribed by a doctor - can lead to dependence and, when misused, opioid pain relievers can lead to addiction, overdose incidents, and deaths. The National Institute on Drug Abuse collects and analyzes data about deaths from opioid abuse. This data set reports on data from 1999-2017.

<https://www.drugabuse.gov/related-topics/trends-statistics/overdose-death-rates>

# Explore Structure

<button>Explore</button>

# Downloads

Download all of the following files.

1. [opioids.py](/datasets/python/opioids/opioids.py)
2. [opioids.data](/datasets/python/opioids/opioids.data)

# Usage

# Documentation

```python
import opioids
opioid_deaths = opioids.get_opioid_deaths()
```