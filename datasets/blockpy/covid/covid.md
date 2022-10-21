---
permalink: /blockpy/covid/
style: dataset
---

<img class="img-thumbnail float-right"
     src="/images/datasets/covid-corgis-image.png"
     alt="covid icon"
     role="presentation">

# Covid BlockPy Library

<p class='lead'>From the CORGIS Dataset Project</p>

<span class='text-muted'>By Dennis Kafura, Melanie Sutphin, Joung Min Choi and Bo Guan</span><br>
<span class='text-muted'>Version 2.0.1, created 10/22/2021</span><br>
<span class='text-muted'>Tags: Covid, Covid-19, pandemic, infection, world health</span>

# Overview

Since the beginning of the coronavirus pandemic, the Epidemic INtelligence team of the European Center for Disease Control and Prevention (ECDC) has been collecting on daily basis the number of COVID-19 cases and deaths, based on reports from health authorities worldwide. This helps to monitor and interpret the dynamics of the COVID-19 pandemic not only in the European Union (EU), the European Economic Area (EEA), but also worldwide. Every day a team of epidemiologists screens up to 500 relevant sources to collect the latest figures. The data screening is followed by ECDC standard epidemic intelligence process for which every single data entry is validated and documented in an ECDC database.


<https://data.europa.eu/euodp/en/data/dataset/covid-19-coronavirus-data>




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