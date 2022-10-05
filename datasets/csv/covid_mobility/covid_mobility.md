---
permalink: /csv/covid_mobility/
style: dataset
---

<img class="img-thumbnail float-right"
     src="/images/datasets/covid-mobility-icon.png"
     alt="covid mobility icon"
     role="presentation">

# Covid Mobility CSV File

<p class='lead'>From the CORGIS Dataset Project</p>

<span class='text-muted'>By Sam Donald</span><br>
<span class='text-muted'>Version 1.0.0, created 9/28/2022</span><br>
<span class='text-muted'>Tags: Covid-19, social response, healthcare</span>

# Overview

Mobility analysis on how different populations are responding to the pandemic sourced from Google. A baseline day represents a normal value for that day of the week. The baseline day is the median value from the 5?week period Jan 3 � Feb 6, 2020.


<https://github.com/owid/owid-datasets/tree/master/datasets/Google%20Mobility%20Trends%20(2020)>




# Download

Download the following file:

* <a href='../../datasets/csv/covid_mobility/covid_mobility.csv' download>covid_mobility.csv <span class="fas fa-download"></span></a>

# Key Descriptions
    
<table class='table table-condensed table-striped table-bordered table-hover'>
<tr>
    <th class=''>Key</th>
    <th class=''>List of...</th>
    <th class=''>Comment</th>
    <th class=''>Example Value</th>
</tr>

<tr>
    <td>Country</td>
    <td>String</td> 
    <td>Nameof country</td>
    <td><code>"Afghanistan"</code></td>
</tr>

<tr>
    <td>Days since outbreak</td>
    <td>Integer</td> 
    <td>Count of days passed since Covid-19 outbreak began</td>
    <td><code>47</code></td>
</tr>

<tr>
    <td>Location.Retail</td>
    <td>Float</td> 
    <td>Change in retail activity from baseline (January average)</td>
    <td><code>0.0</code></td>
</tr>

<tr>
    <td>Location.Grocery</td>
    <td>Float</td> 
    <td>Change in grocery activity from baseline (January average)</td>
    <td><code>4.0</code></td>
</tr>

<tr>
    <td>Location.Parks</td>
    <td>Float</td> 
    <td>Change in park activity from baseline (January average)</td>
    <td><code>1.0</code></td>
</tr>

<tr>
    <td>Location.Public transport</td>
    <td>Float</td> 
    <td>Change in public transport activity from baseline (January average)</td>
    <td><code>5.667</code></td>
</tr>

<tr>
    <td>Location.Workplace</td>
    <td>Float</td> 
    <td>Change in workplace activity from baseline (January average)</td>
    <td><code>-6.333</code></td>
</tr>

<tr>
    <td>Location.Residential</td>
    <td>Float</td> 
    <td>Change in residential activity from baseline (January average)</td>
    <td><code>1.333</code></td>
</tr>

</table>