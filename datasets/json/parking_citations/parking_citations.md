---
permalink: /json/parking_citations/
style: dataset
---

<img class="img-thumbnail float-right"
     src="/images/datasets/parking-citations-icon.png"
     alt="parking citations icon"
     role="presentation">

# Parking Citations JSON File

<p class='lead'>From the CORGIS Dataset Project</p>

<span class='text-muted'>By Sam Donald</span><br>
<span class='text-muted'>Version 1.0.0, created 10/28/2022</span><br>
<span class='text-muted'>Tags: Parking Fines, Cars, Tickets</span>

# Overview

This dataset provides information about parking citations in the city of Norfolk. Data provided about the citations includes: time and date issued, violation type and code, location, state of vehicle registration, license plate numbers, make, model, and color of the vehicle, amount of parking citation fine.


<https://data.norfolk.gov/Government/Parking-Citations/ei2q-6g8n>




# Download

Download the following file:

* <a href='../../datasets/json/parking_citations/parking_citations.json' download>parking_citations.json <span class="fas fa-download"></span></a>

# Key Descriptions
    
<table class='table table-condensed table-striped table-bordered table-hover'>
<tr>
    <th class=''>Key</th>
    <th class=''>List of...</th>
    <th class=''>Comment</th>
    <th class=''>Example Value</th>
</tr>

<tr>
    <td>Data.Number Plate</td>
    <td>String</td> 
    <td>Car number plate</td>
    <td><code>"UZD5497"</code></td>
</tr>

<tr>
    <td>Data.State</td>
    <td>String</td> 
    <td>State of number plate</td>
    <td><code>"VA"</code></td>
</tr>

<tr>
    <td>Data.Car.Make</td>
    <td>String</td> 
    <td>Car make</td>
    <td><code>"Suzuki"</code></td>
</tr>

<tr>
    <td>Data.Car.Style</td>
    <td>String</td> 
    <td>Car style</td>
    <td><code>"Sports Utility Veh"</code></td>
</tr>

<tr>
    <td>Data.Car.Color</td>
    <td>String</td> 
    <td>Car color</td>
    <td><code>"Blue"</code></td>
</tr>

<tr>
    <td>Data.Location</td>
    <td>String</td> 
    <td>Citation location</td>
    <td><code>"E VIRGINIA BEACH BOULEVARD"</code></td>
</tr>

<tr>
    <td>Data.Violation</td>
    <td>String</td> 
    <td>Violation</td>
    <td><code>"HANDICAPPED PARKING "</code></td>
</tr>

<tr>
    <td>Data.Fine</td>
    <td>Float</td> 
    <td>Fine amount</td>
    <td><code>440.0</code></td>
</tr>

<tr>
    <td>Date.Year</td>
    <td>Integer</td> 
    <td>Year of the citation</td>
    <td><code>2020</code></td>
</tr>

<tr>
    <td>Date.Month</td>
    <td>Integer</td> 
    <td>Month of the citation</td>
    <td><code>8</code></td>
</tr>

<tr>
    <td>Date.Day</td>
    <td>Integer</td> 
    <td>Day of the citation</td>
    <td><code>3</code></td>
</tr>

<tr>
    <td>Date.Time.Hour</td>
    <td>Integer</td> 
    <td>Hour of the citation</td>
    <td><code>7</code></td>
</tr>

<tr>
    <td>Date.Time.Minute</td>
    <td>Integer</td> 
    <td>Minute of the citation</td>
    <td><code>8</code></td>
</tr>

</table>