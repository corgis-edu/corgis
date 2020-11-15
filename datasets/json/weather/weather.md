---
permalink: /json/weather/
style: dataset
---

<img class="img-thumbnail float-right"
     src="/images/datasets/weather-splash.png"
     alt="weather icon"
     role="presentation">

# Weather JSON File

<p class='lead'>From the CORGIS Dataset Project</p>

<span class='text-muted'>By Austin Cory Bart, Ryan Whitcomb</span><br>
<span class='text-muted'>Version 2.0.0, created 6/13/2016</span><br>
<span class='text-muted'>Tags: weather, rain, snow, sleet, fog, temperature, wind, climate, environment, geology</span>

# Overview

Under the National Oceanic and Atmospheric Administration, the National Weather Service provides daily weather reports for cities across the county.  This is done through the use of 122 different Weather Forcast Offices throughout the country.  These WFOs are responsible for the daily weather reports for serveral cities throughout their region of coverage.  This data set takes the information from these WFO reports for cities across the country and summarizes it at the weekly level for all of 2016.


<http://w2.weather.gov/climate/>




# Download

Download the following file:

* <a href='../../datasets/json/weather/weather.json' download>weather.json <span class="fas fa-download"></span></a>

# Key Descriptions
    
<table class='table table-condensed table-striped table-bordered table-hover'>
<tr>
    <th class=''>Key</th>
    <th class=''>List of...</th>
    <th class=''>Comment</th>
    <th class=''>Example Value</th>
</tr>

<tr>
    <td>Data.Precipitation</td>
    <td>Float</td> 
    <td>The average amount of rain, in inches.</td>
    <td><code>0.0</code></td>
</tr>

<tr>
    <td>Date.Full</td>
    <td>String</td> 
    <td>A full string representation of the date this report was made.</td>
    <td><code>"2016-01-03"</code></td>
</tr>

<tr>
    <td>Date.Month</td>
    <td>Integer</td> 
    <td>The month of the year that this report was made.</td>
    <td><code>1</code></td>
</tr>

<tr>
    <td>Date.Week of</td>
    <td>Integer</td> 
    <td>The first day of the week that this report was made.</td>
    <td><code>3</code></td>
</tr>

<tr>
    <td>Date.Year</td>
    <td>Integer</td> 
    <td>The year that this report was made.</td>
    <td><code>2016</code></td>
</tr>

<tr>
    <td>Station.City</td>
    <td>String</td> 
    <td>The city that the reporting station sends its data to. Note that the recording station itself might actually be in a different city.</td>
    <td><code>"Birmingham"</code></td>
</tr>

<tr>
    <td>Station.Code</td>
    <td>String</td> 
    <td>The unique code representing this station.</td>
    <td><code>"BHM"</code></td>
</tr>

<tr>
    <td>Station.Location</td>
    <td>String</td> 
    <td>The exact location of this recording station. Note that the recording station itself might be in a different location than where it sends its data.</td>
    <td><code>"Birmingham, AL"</code></td>
</tr>

<tr>
    <td>Station.State</td>
    <td>String</td> 
    <td>The state that the reporting station sends its data to. Note that the recording station itself might actually be in a different state.</td>
    <td><code>"Alabama"</code></td>
</tr>

<tr>
    <td>Data.Temperature.Avg Temp</td>
    <td>Integer</td> 
    <td>The average recorded temperature on this week, in degrees Fahrenheit.</td>
    <td><code>39</code></td>
</tr>

<tr>
    <td>Data.Temperature.Max Temp</td>
    <td>Integer</td> 
    <td>The highest recorded temperature on this week, in degrees Fahrenheit.</td>
    <td><code>46</code></td>
</tr>

<tr>
    <td>Data.Temperature.Min Temp</td>
    <td>Integer</td> 
    <td>The lowest recorded temperature on this week, in degrees Fahrenheit.</td>
    <td><code>32</code></td>
</tr>

<tr>
    <td>Data.Wind.Direction</td>
    <td>Integer</td> 
    <td>The average wind direction for that week, in degrees.</td>
    <td><code>33</code></td>
</tr>

<tr>
    <td>Data.Wind.Speed</td>
    <td>Float</td> 
    <td>The average windspeed for that week, in Miles per Hour.</td>
    <td><code>4.33</code></td>
</tr>

</table>