---
permalink: /python/police_shootings/
---

# Police Shootings Python Library

<p class='lead'>From the CORGIS Dataset Project</p>

<span class='text-muted'>By Dennis Kafura (kafura@vt.edu)</span><br>
<span class='text-muted'>Version 0.0.1, created 5/31/2019</span><br>
<span class='text-muted'>Tags: violence, crime, violent, police, shootings, race, location, time</span>

# Overview

The Washington Post is compiling a database of every fatal shooting in the United States by a police officer in the line of duty since Jan. 1, 2015 by culling local news reports, law enforcement websites and social media and by monitoring independent databases. The Post conducted additional reporting in many cases. 

<https://github.com/washingtonpost/data-police-shootings>

# Explore Structure

<button>Explore</button>

# Downloads

Download all of the following files.

1. [police_shootings.py](/datasets/python/police_shootings/police_shootings.py)
2. [police_shootings.data](/datasets/python/police_shootings/police_shootings.data)

# Usage

# Documentation

```python
import police_shootings
shootings = police_shootings.get_shootings()
```