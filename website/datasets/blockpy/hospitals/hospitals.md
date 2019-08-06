---
permalink: /blockpy/hospitals/
style: dataset
---

<img class="img-thumbnail float-right"
     src="../../datasets/blockpy/hospitals/hhs-logo.jpg"
     alt="hospitals icon"
     role="presentation">

# Hospitals BlockPy Library

<p class='lead'>From the CORGIS Dataset Project</p>

<span class='text-muted'>By Dennis Kafura</span><br>
<span class='text-muted'>Version 1.0.0, created 6/10/2019</span><br>
<span class='text-muted'>Tags: hospitals, health care, medical, hospital costs, hospital quality</span>

# Overview

The data set allows consumers to directly compare across hospitals performance measure information related to heart attack, emergency department care, preventive care, stroke care, and other conditions. The data is part of an Administration-wide effort to increase the availability and accessibility of information on quality, utilization, and costs for effective, informed decision-making.

<https://data.medicare.gov/data/hospital-compare>



# Key Descriptions
    
<table class='table table-condensed table-striped table-bordered table-hover'>
<tr>
    <th class=''>Key</th>
    <th class=''>List of...</th>
    <th class=''>Comment</th>
    <th class=''>Example Value</th>
</tr>

<tr>
    <td>Facility.Name</td>
    <td>String</td> 
    <td>Name of the hospital</td>
    <td><code>"Southeast Alabama Medical Center"</code></td>
</tr>

<tr>
    <td>Facility.City</td>
    <td>String</td> 
    <td>City in which the hospital is located</td>
    <td><code>"Dothan"</code></td>
</tr>

<tr>
    <td>Facility.State</td>
    <td>String</td> 
    <td>Two letter capitalized abbreviation of the State in which the hospital is located (e.g., AZ is Arizona)</td>
    <td><code>"AL"</code></td>
</tr>

<tr>
    <td>Facility.Type</td>
    <td>String</td> 
    <td>Kind of organization operating the hospital: one of Government, Private, Proprietary, Church, or Unknown </td>
    <td><code>"Government"</code></td>
</tr>

<tr>
    <td>Rating.Overall</td>
    <td>Integer</td> 
    <td>Overall rating between 1 and 5 stars, with 5 stars being the highest rating; -1 represents no rating.</td>
    <td><code>2</code></td>
</tr>

<tr>
    <td>Rating.Mortality</td>
    <td>String</td> 
    <td>Above, Same, Below, or Unknown comparison to national hospital mortality </td>
    <td><code>"Below"</code></td>
</tr>

<tr>
    <td>Rating.Safety</td>
    <td>String</td> 
    <td>Above, Same, Below, or Unknown comparison to national hospital safety </td>
    <td><code>"Above"</code></td>
</tr>

<tr>
    <td>Rating.Readmission</td>
    <td>String</td> 
    <td>Above, Same, Below, or Unknown comparison to national hospital readmission </td>
    <td><code>"Below"</code></td>
</tr>

<tr>
    <td>Rating.Experience</td>
    <td>String</td> 
    <td>Above, Same, Below, or Unknown comparison to national hospital patience experience </td>
    <td><code>"Below"</code></td>
</tr>

<tr>
    <td>Rating.Effectiveness</td>
    <td>String</td> 
    <td>Above, Same, Below, or Unknown comparison to national hospital effectiveness of care </td>
    <td><code>"Same"</code></td>
</tr>

<tr>
    <td>Rating.Timeliness</td>
    <td>String</td> 
    <td>Above, Same, Below, or Unknown comparison to national hospital timeliness of care </td>
    <td><code>"Above"</code></td>
</tr>

<tr>
    <td>Rating.Imaging</td>
    <td>String</td> 
    <td>Above, Same, Below, or Unknown comparison to national hospital effective use of imaging </td>
    <td><code>"Same"</code></td>
</tr>

<tr>
    <td>Procedure.Heart Attack.Cost</td>
    <td>Integer</td> 
    <td>Average cost of care for heart attacks</td>
    <td><code>23394</code></td>
</tr>

<tr>
    <td>Procedure.Heart Attack.Quality</td>
    <td>String</td> 
    <td>Lower, Average, Worse, or Unknown comparison to national quality of care for heart attacks </td>
    <td><code>"Average"</code></td>
</tr>

<tr>
    <td>Procedure.Heart Attack.Value</td>
    <td>String</td> 
    <td>Lower, Average, Worse, or Unknown comparison to national cost of care for heart attacks </td>
    <td><code>"Average"</code></td>
</tr>

<tr>
    <td>Procedure.Heart Failure.Cost</td>
    <td>Integer</td> 
    <td>Average cost of care for heart failure</td>
    <td><code>17041</code></td>
</tr>

<tr>
    <td>Procedure.Heart Failure.Quality</td>
    <td>String</td> 
    <td>Lower, Average, Worse, or Unknown comparison to national quality of care for heart failures </td>
    <td><code>"Average"</code></td>
</tr>

<tr>
    <td>Procedure.Heart Failure.Value</td>
    <td>String</td> 
    <td>Lower, Average, Worse, or Unknown comparison to national cost of care for heart failures </td>
    <td><code>"Average"</code></td>
</tr>

<tr>
    <td>Procedure.Pneumonia.Cost</td>
    <td>Integer</td> 
    <td>Average cost of care for pneumonia</td>
    <td><code>18281</code></td>
</tr>

<tr>
    <td>Procedure.Pneumonia.Quality</td>
    <td>String</td> 
    <td>Lower, Average, Worse, or Unknown comparison to national quality of care for pneumonia </td>
    <td><code>"Average"</code></td>
</tr>

<tr>
    <td>Procedure.Pneumonia.Value</td>
    <td>String</td> 
    <td>Lower, Average, Worse, or Unknown comparison to national cost of care for pneumonia </td>
    <td><code>"Average"</code></td>
</tr>

<tr>
    <td>Procedure.Hip Knee.Cost</td>
    <td>Integer</td> 
    <td>Average cost of care for hip or knee conditions</td>
    <td><code>25812</code></td>
</tr>

<tr>
    <td>Procedure.Hip Knee.Quality</td>
    <td>String</td> 
    <td>Lower, Average, Worse, or Unknown comparison to national quality of care for hip or knee conditions </td>
    <td><code>"Average"</code></td>
</tr>

<tr>
    <td>Procedure.Hip Knee.Value</td>
    <td>String</td> 
    <td>Lower, Average, Worse, or Unknown comparison to national cost of care for hip or knee conditions </td>
    <td><code>"Higher"</code></td>
</tr>

</table>