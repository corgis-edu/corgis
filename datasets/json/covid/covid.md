---
permalink: /json/covid/
style: dataset
---

<img class="img-thumbnail float-right"
     src="/images/datasets/covid-corgis-image.png"
     alt="covid icon"
     role="presentation">

# Covid JSON File

<p class='lead'>From the CORGIS Dataset Project</p>

<span class='text-muted'>By Dennis Kafura, Melanie Sutphin, Joung Min Choi and Bo Guan</span><br>
<span class='text-muted'>Version 2.0.0, created 10/22/2021</span><br>
<span class='text-muted'>Tags: Covid, Covid-19, pandemic, infection, world health</span>

# Overview

The data set contains daily reports of Covid-19 cases and deaths in countries worldwide. The data also shows the country's population and the number of cases per 100,000 people on a rolling 14 day average. 


<https://data.europa.eu/euodp/en/data/dataset/covid-19-coronavirus-data>




# Download

Download the following file:

* <a href='../../datasets/json/covid/covid.json' download>covid.json <span class="fas fa-download"></span></a>

# Key Descriptions
    
<table class='table table-condensed table-striped table-bordered table-hover'>
<tr>
    <th class=''>Key</th>
    <th class=''>List of...</th>
    <th class=''>Comment</th>
    <th class=''>Example Value</th>
</tr>

<tr>
    <td>Date.Day</td>
    <td>Integer</td> 
    <td>The day of the month for this report</td>
    <td><code>31</code></td>
</tr>

<tr>
    <td>Date.Month</td>
    <td>Integer</td> 
    <td>The month of the year for this report</td>
    <td><code>12</code></td>
</tr>

<tr>
    <td>Date.Year</td>
    <td>Integer</td> 
    <td>The year of this report</td>
    <td><code>2019</code></td>
</tr>

<tr>
    <td>Data.Cases</td>
    <td>Integer</td> 
    <td>Number of new cases reported</td>
    <td><code>0</code></td>
</tr>

<tr>
    <td>Data.Deaths</td>
    <td>Integer</td> 
    <td>Number of new deaths reported</td>
    <td><code>0</code></td>
</tr>

<tr>
    <td>Location.Country</td>
    <td>String</td> 
    <td>Name of country for this report (e.g., "United_States_of_America")</td>
    <td><code>"Afghanistan"</code></td>
</tr>

<tr>
    <td>Location.Code</td>
    <td>String</td> 
    <td>Three letter country code (e.g., :USA")</td>
    <td><code>"AFG"</code></td>
</tr>

<tr>
    <td>Data.Population</td>
    <td>Integer</td> 
    <td>Population of the country in 2019</td>
    <td><code>38041757</code></td>
</tr>

<tr>
    <td>Location.Continent</td>
    <td>String</td> 
    <td>Continent of country (e.g., "Asia", "Europe", "America")</td>
    <td><code>"Asia"</code></td>
</tr>

<tr>
    <td>Data.Rate</td>
    <td>Float</td> 
    <td>Cumulative number of cases reported for 14 days per 100000 people</td>
    <td><code>0.0</code></td>
</tr>

</table>