---
permalink: /python/wind_turbines/
---

# Wind Turbines Python Library

<p class='lead'>From the CORGIS Dataset Project</p>

<span class='text-muted'>By Dennis Kafura</span><br>
<span class='text-muted'>Version 0.0.1, created 6/8/2019</span><br>
<span class='text-muted'>Tags: energy, wind, power, air, turbine, utility, location, time</span>

# Overview

This dataset provides locations and technical specifications of wind turbines in the United States, almost all of which are utility-scale. Utility-scale turbines are ones that generate power and feed it into the grid, supplying a utility with energy. They are usually much larger than turbines that would feed a homeowner or business.

<https://www.sciencebase.gov/catalog/item/57bdfd8fe4b03fd6b7df5ff9>

# Explore Structure

<button>Explore</button>

# Downloads

Download all of the following files.

1. [wind_turbines.py](/datasets/python/wind_turbines/wind_turbines.py)
2. [wind_turbines.data](/datasets/python/wind_turbines/wind_turbines.data)

# Usage

# Documentation

```python
import wind_turbines
turbines = wind_turbines.get_turbines()
```