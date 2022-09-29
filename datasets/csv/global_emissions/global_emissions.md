---
permalink: /csv/global_emissions/
style: dataset
---

<img class="img-thumbnail float-right"
     src="/images/datasets/global-emissions-icon.png"
     alt="global emissions icon"
     role="presentation">

# Global Emissions CSV File

<p class='lead'>From the CORGIS Dataset Project</p>

<span class='text-muted'>By Sam Donald</span><br>
<span class='text-muted'>Version 1.0.0, created 9/23/2022</span><br>
<span class='text-muted'>Tags: emissions, CO2, CO2 share, N2O, CH4</span>

# Overview

The dataset allows for comparisons of various countries and regions in relation to overall emission trends along with their sources


<https://github.com/owid/co2-data>




# Download

Download the following file:

* <a href='../../datasets/csv/global_emissions/global_emissions.csv' download>global_emissions.csv <span class="fas fa-download"></span></a>

# Key Descriptions
    
<table class='table table-condensed table-striped table-bordered table-hover'>
<tr>
    <th class=''>Key</th>
    <th class=''>List of...</th>
    <th class=''>Comment</th>
    <th class=''>Example Value</th>
</tr>

<tr>
    <td>Year</td>
    <td>Integer</td> 
    <td>The year of the emission report</td>
    <td><code>1992</code></td>
</tr>

<tr>
    <td>Country.Name</td>
    <td>String</td> 
    <td>The name of a country</td>
    <td><code>"Afghanistan"</code></td>
</tr>

<tr>
    <td>Country.Code</td>
    <td>String</td> 
    <td>Abbreviation of country</td>
    <td><code>"AFG"</code></td>
</tr>

<tr>
    <td>Country.GDP</td>
    <td>Float</td> 
    <td>A countries gross domestic product for a given year</td>
    <td><code>12677538816.0</code></td>
</tr>

<tr>
    <td>Country.Population</td>
    <td>Integer</td> 
    <td>A countries population for a given year</td>
    <td><code>14485543</code></td>
</tr>

<tr>
    <td>Emissions.Production.CH4</td>
    <td>Float</td> 
    <td>The total amount of CH4 produced (kilotons) </td>
    <td><code>7.13</code></td>
</tr>

<tr>
    <td>Emissions.Production.N2O</td>
    <td>Float</td> 
    <td>The total amount of N2O produced (kilotons) </td>
    <td><code>2.89</code></td>
</tr>

<tr>
    <td>Emissions.Production.CO2.Cement</td>
    <td>Float</td> 
    <td>The total amount of CO2 produced (kilotons) related to the cement production</td>
    <td><code>0.046</code></td>
</tr>

<tr>
    <td>Emissions.Production.CO2.Coal</td>
    <td>Float</td> 
    <td>The total amount of CO2 produced (kilotons) related to the coal industry</td>
    <td><code>0.022</code></td>
</tr>

<tr>
    <td>Emissions.Production.CO2.Gas</td>
    <td>Float</td> 
    <td>The total amount of CO2 produced (kilotons) related to gas consumption</td>
    <td><code>0.363</code></td>
</tr>

<tr>
    <td>Emissions.Production.CO2.Oil</td>
    <td>Float</td> 
    <td>The total amount of CO2 produced (kilotons) related to oil consumption</td>
    <td><code>0.927</code></td>
</tr>

<tr>
    <td>Emissions.Production.CO2.Flaring</td>
    <td>Float</td> 
    <td>The total amount of CO2 produced (kilotons) related to flaring</td>
    <td><code>0.022</code></td>
</tr>

<tr>
    <td>Emissions.Production.CO2.Other</td>
    <td>Float</td> 
    <td>The total amount of CO2 produced (kilotons) related to flaring other areas (such that CO2 total is sum of components)</td>
    <td><code>0.0</code></td>
</tr>

<tr>
    <td>Emissions.Production.CO2.Total</td>
    <td>Float</td> 
    <td>The total amount of CO2 produced (kilotons) </td>
    <td><code>1.379</code></td>
</tr>

<tr>
    <td>Emissions.Global Share.CO2.Cement</td>
    <td>Float</td> 
    <td>The share of global CO2 produced (kilotons) related to the cement production</td>
    <td><code>0.01</code></td>
</tr>

<tr>
    <td>Emissions.Global Share.CO2.Coal</td>
    <td>Float</td> 
    <td>The share of global CO2 produced (kilotons) related to the coal industry</td>
    <td><code>0.0</code></td>
</tr>

<tr>
    <td>Emissions.Global Share.CO2.Gas</td>
    <td>Float</td> 
    <td>The share of global CO2 produced (kilotons) related to gas consumption</td>
    <td><code>0.01</code></td>
</tr>

<tr>
    <td>Emissions.Global Share.CO2.Oil</td>
    <td>Float</td> 
    <td>The share of global CO2 produced (kilotons) related to oil consumption</td>
    <td><code>0.01</code></td>
</tr>

<tr>
    <td>Emissions.Global Share.CO2.Flaring</td>
    <td>Float</td> 
    <td>The share of global CO2 produced (kilotons) related to flaring</td>
    <td><code>0.01</code></td>
</tr>

<tr>
    <td>Emissions.Global Share.CO2.Total</td>
    <td>Float</td> 
    <td>The share of global CO2 produced (kilotons) </td>
    <td><code>0.01</code></td>
</tr>

</table>