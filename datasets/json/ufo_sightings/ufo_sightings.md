---
permalink: /json/ufo_sightings/
style: dataset
---

<img class="img-thumbnail float-right"
     src="/images/datasets/ufo-sightings-icon.png"
     alt="ufo sightings icon"
     role="presentation">

# Ufo Sightings JSON File

<p class='lead'>From the CORGIS Dataset Project</p>

<span class='text-muted'>By Sam Donald</span><br>
<span class='text-muted'>Version 1.0.0, created 10/28/2022</span><br>
<span class='text-muted'>Tags: UFO, Sightings</span>

# Overview

This data includes >80,000 recorded UFO "sightings" around the world, including the UFO shape, lat/long and state/country of where the sighting occurred, duration of the "event" and the data_time when it occurred.


<https://github.com/rfordatascience/tidytuesday/tree/2e9bd5a67e09b14d01f616b00f7f7e0931515d24/data/2019/2019-06-25>




# Download

Download the following file:

* <a href='../../datasets/json/ufo_sightings/ufo_sightings.json' download>ufo_sightings.json <span class="fas fa-download"></span></a>

# Key Descriptions
    
<table class='table table-condensed table-striped table-bordered table-hover'>
<tr>
    <th class=''>Key</th>
    <th class=''>List of...</th>
    <th class=''>Comment</th>
    <th class=''>Example Value</th>
</tr>

<tr>
    <td>Location.City</td>
    <td>String</td> 
    <td>City or area of sighting</td>
    <td><code>"anchor point"</code></td>
</tr>

<tr>
    <td>Location.State</td>
    <td>String</td> 
    <td>state/region of sighting</td>
    <td><code>"AK"</code></td>
</tr>

<tr>
    <td>Location.Country</td>
    <td>String</td> 
    <td>Country of sighting</td>
    <td><code>"US"</code></td>
</tr>

<tr>
    <td>Data.Shape</td>
    <td>String</td> 
    <td>UFO Shape</td>
    <td><code>"disk"</code></td>
</tr>

<tr>
    <td>Data.Encounter duration</td>
    <td>Float</td> 
    <td>Encounter length in seconds</td>
    <td><code>300.0</code></td>
</tr>

<tr>
    <td>Data.Description excerpt</td>
    <td>String</td> 
    <td>Description of encounter</td>
    <td><code>"Large UFO over Mt. ILIAMNA Alaska.  ((NUFORC Note:  Possible contrail behind a high-altitude jet??  PD))"</code></td>
</tr>

<tr>
    <td>Location.Coordinates.Latitude </td>
    <td>Float</td> 
    <td>Latitude</td>
    <td><code>59.7766667</code></td>
</tr>

<tr>
    <td>Location.Coordinates.Longitude </td>
    <td>Float</td> 
    <td>Longitude</td>
    <td><code>-151.8313889</code></td>
</tr>

<tr>
    <td>Dates.Sighted.Year</td>
    <td>Integer</td> 
    <td>Year of sighting</td>
    <td><code>2005</code></td>
</tr>

<tr>
    <td>Dates.Sighted.Month</td>
    <td>Integer</td> 
    <td>Month of sighting</td>
    <td><code>5</code></td>
</tr>

<tr>
    <td>Date.Sighted.Day</td>
    <td>Integer</td> 
    <td>Day of sighting</td>
    <td><code>24</code></td>
</tr>

<tr>
    <td>Dates.Sighted.Hour</td>
    <td>Integer</td> 
    <td>Hour of sighting</td>
    <td><code>18</code></td>
</tr>

<tr>
    <td>Dates.Sighted.Minute</td>
    <td>Integer</td> 
    <td>Minute of sighting</td>
    <td><code>30</code></td>
</tr>

<tr>
    <td>Dates.Documented.Year</td>
    <td>Integer</td> 
    <td>Year of Documentation</td>
    <td><code>2005</code></td>
</tr>

<tr>
    <td>Dates.Documented.Month</td>
    <td>Integer</td> 
    <td>Month of Documentation</td>
    <td><code>5</code></td>
</tr>

<tr>
    <td>Dates.Documented.Day</td>
    <td>Integer</td> 
    <td>Day of Documentation</td>
    <td><code>28</code></td>
</tr>

</table>