---
permalink: /blockpy/earthquakes/
style: dataset
---

<img class="img-thumbnail float-right"
     src="/images/datasets/earthquakes-splash.png"
     alt="earthquakes icon"
     role="presentation">

# Earthquakes BlockPy Library

<p class='lead'>From the CORGIS Dataset Project</p>

<span class='text-muted'>By Ryan Whitcomb</span><br>
<span class='text-muted'>Version 2.0.0, created 6/7/2016</span><br>
<span class='text-muted'>Tags: earthquakes, nature, disaster, magnitude, richter scale, latitude, longitude</span>

# Overview

Earthquake records from around the world collected from the United States Geological Survey.  Important details about the earthquake such as distance, gap, magnitude, depth and significance are included to properly describe the earthquake.  Additionally, data about exact geological coordinates and a relative description of the earthquake's location is included. The earthquakes collected are from the past month.



<http://earthquake.usgs.gov/earthquakes/>




# Key Descriptions
    
<table class='table table-condensed table-striped table-bordered table-hover'>
<tr>
    <th class=''>Key</th>
    <th class=''>List of...</th>
    <th class=''>Comment</th>
    <th class=''>Example Value</th>
</tr>

<tr>
    <td>id</td>
    <td>String</td> 
    <td>$MISSING_FIELD</td>
    <td><code>"nc72666881"</code></td>
</tr>

<tr>
    <td>impact.gap</td>
    <td>Float</td> 
    <td>In general, the smaller this number, the more reliable is the calculated horizontal position of the earthquake. Specifically, this means the largest azimuthal gap between azimuthally adjacent stations (in degrees). Earthquake locations in which the azimuthal gap exceeds 180 degrees typically have large location and depth uncertainties. Ranges from 0 to 180.</td>
    <td><code>122.0</code></td>
</tr>

<tr>
    <td>impact.magnitude</td>
    <td>Float</td> 
    <td>Earthquake magnitude is a measure of the size of an earthquake at its source. It is a logarithmic measure. At the same distance from the earthquake, the amplitude of the seismic waves from which the magnitude is determined are approximately 10 times as large during a magnitude 5 earthquake as during a magnitude 4 earthquake. The total amount of energy released by the earthquake usually goes up by a larger factor; for many commonly used magnitude types, the total energy of an average earthquake goes up by a factor of approximately 32 for each unit increase in magnitude. Typically ranges from -1 (very tiny) to 10 (incredibly powerful).</td>
    <td><code>1.43</code></td>
</tr>

<tr>
    <td>impact.significance</td>
    <td>Integer</td> 
    <td>A number describing how significant the event is. Larger numbers indicate a more significant event. This value is determined on a number of factors, including magnitude, maximum MMI, felt reports, and estimated impact. Ranges from 0 to 1000.</td>
    <td><code>31</code></td>
</tr>

<tr>
    <td>location.depth</td>
    <td>Float</td> 
    <td>Depth of the event in kilometers.</td>
    <td><code>15.12</code></td>
</tr>

<tr>
    <td>location.distance</td>
    <td>Float</td> 
    <td>The rough distance that this earthquake occurred away from the reporting station, measured in degrees between. 1 degree is approximately 111.2 kilometers. In general, the smaller this number, the more reliable is the calculated depth of the earthquake. In general, this number is between 0.4-7.1.</td>
    <td><code>0.1034</code></td>
</tr>

<tr>
    <td>location.full</td>
    <td>String</td> 
    <td>The full name of this location.</td>
    <td><code>"13km E of Livermore, California"</code></td>
</tr>

<tr>
    <td>location.latitude</td>
    <td>Float</td> 
    <td>Decimal degrees latitude (up and down on the globe). Negative values for southern latitudes. Ranges from -90 to 90.</td>
    <td><code>37.6723333</code></td>
</tr>

<tr>
    <td>location.longitude</td>
    <td>Float</td> 
    <td>Decimal degrees longitude (east and west on the globe). Negative values for western latitudes. Ranges from -180 to 180.</td>
    <td><code>-121.619</code></td>
</tr>

<tr>
    <td>location.name</td>
    <td>String</td> 
    <td>A best guess for the name of the state (or country, in some cases) that this earthquake was reported in.</td>
    <td><code>"California"</code></td>
</tr>

<tr>
    <td>time.day</td>
    <td>Integer</td> 
    <td>Day of the month for this earthquake.</td>
    <td><code>27</code></td>
</tr>

<tr>
    <td>time.epoch</td>
    <td>Integer</td> 
    <td>A number that represents the time that this earthquake occurred. Epoch's are the number of seconds since a particular date (January 1st, 1970), and are a convenient way to store date/times.</td>
    <td><code>1469593183550</code></td>
</tr>

<tr>
    <td>time.full</td>
    <td>String</td> 
    <td>The full date/time representation for when this earthquake occurred.</td>
    <td><code>"2016-07-27 00:19:43"</code></td>
</tr>

<tr>
    <td>time.hour</td>
    <td>Integer</td> 
    <td>The hour that this earthquake occurred.</td>
    <td><code>0</code></td>
</tr>

<tr>
    <td>time.minute</td>
    <td>Integer</td> 
    <td>The minute that this earthquake occurred.</td>
    <td><code>19</code></td>
</tr>

<tr>
    <td>time.month</td>
    <td>Integer</td> 
    <td>The month that this earthquake occurred.</td>
    <td><code>7</code></td>
</tr>

<tr>
    <td>time.second</td>
    <td>Integer</td> 
    <td>The second that this earthquake occurred.</td>
    <td><code>43</code></td>
</tr>

<tr>
    <td>time.year</td>
    <td>Integer</td> 
    <td>The year that this earthquake occurred.</td>
    <td><code>2016</code></td>
</tr>

</table>