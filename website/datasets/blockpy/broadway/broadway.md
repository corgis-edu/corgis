---
permalink: /blockpy/broadway/
style: dataset
---

<img class="img-thumbnail float-right"
     src="/images/datasets/broadway-splash.png"
     alt="broadway icon"
     role="presentation">

# Broadway BlockPy Library

<p class='lead'>From the CORGIS Dataset Project</p>

<span class='text-muted'>By Austin Cory Bart <acbart@vt.edu></span><br>
<span class='text-muted'>Version 2.0.0, created 11/1/2015</span><br>
<span class='text-muted'>Tags: broadway, musical, theatre, tickets</span>

# Overview

This library holds data about over Broadway shows, grouped over weeklong periods. Only shows that reported capacity were included, so the dataset stretches back to the 1990s. The dataset is made available by the Broadway League (the national trade association for the Broadway industry), and you can view the data online at http://www.broadwayleague.com/.





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
    <td>The day of the month that this performance's week ended on.</td>
    <td><code>26</code></td>
</tr>

<tr>
    <td>Date.Full</td>
    <td>String</td> 
    <td>The full date representation that this performance's week ended on in "Month/Day/Year" format.</td>
    <td><code>"08/26/1990"</code></td>
</tr>

<tr>
    <td>Date.Month</td>
    <td>Integer</td> 
    <td>The numeric month that this performance's week ended in (1 = January, 2 = February, etc.).</td>
    <td><code>8</code></td>
</tr>

<tr>
    <td>Date.Year</td>
    <td>Integer</td> 
    <td>The year that this week of performances occurred in.</td>
    <td><code>1990</code></td>
</tr>

<tr>
    <td>Show.Name</td>
    <td>String</td> 
    <td>The name of the production.</td>
    <td><code>"Tru"</code></td>
</tr>

<tr>
    <td>Show.Theatre</td>
    <td>String</td> 
    <td>The name of the theatre.</td>
    <td><code>"Booth"</code></td>
</tr>

<tr>
    <td>Show.Type</td>
    <td>String</td> 
    <td>Whether it is a "Musical", "Play", or "Special".</td>
    <td><code>"Play"</code></td>
</tr>

<tr>
    <td>Statistics.Attendance</td>
    <td>Integer</td> 
    <td>The total number of people who attended performances over the week.</td>
    <td><code>5500</code></td>
</tr>

<tr>
    <td>Statistics.Capacity</td>
    <td>Integer</td> 
    <td>The percentage of the theatre that was filled during that week.</td>
    <td><code>88</code></td>
</tr>

<tr>
    <td>Statistics.Gross</td>
    <td>Integer</td> 
    <td>The "Gross Gross" of this performance, or how much it made in total across the entire week. Measured in dollars.</td>
    <td><code>134456</code></td>
</tr>

<tr>
    <td>Statistics.Gross Potential</td>
    <td>Integer</td> 
    <td>The Gross Potential is the maximum amount an engagement can possibly earn based on calculations involving ticket prices, seating capacity, and the number of performances. This number is expressed here as a percentage of what could have been achieved (Gross Gross / Gross Potential). In case the GP could not be calculated, it was replaced with 0%.</td>
    <td><code>0</code></td>
</tr>

<tr>
    <td>Statistics.Performances</td>
    <td>Integer</td> 
    <td>The number of performances that occurred this week.</td>
    <td><code>8</code></td>
</tr>

</table>