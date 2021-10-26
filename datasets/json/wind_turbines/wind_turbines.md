---
permalink: /json/wind_turbines/
style: dataset
---

<img class="img-thumbnail float-right"
     src="/images/datasets/wind-turbines.png"
     alt="wind turbines icon"
     role="presentation">

# Wind Turbines JSON File

<p class='lead'>From the CORGIS Dataset Project</p>

<span class='text-muted'>By Dennis Kafura, Joung Min Choi, Bo Guan</span><br>
<span class='text-muted'>Version 0.0.2, created 9/17/2021</span><br>
<span class='text-muted'>Tags: energy, wind, power, air, turbine, utility, location, time</span>

# Overview

The Open PV Project is a collaborative effort between government, industry, and the public that continues to compile a database of available public data for photovoltaic (PV) installation data for the United States. Data for the project are voluntarily contributed from a variety of sources including solar incentive programs, utilities, installers, and the general public. This database serves as a web-based resource for users to easily explore and understand the current and past trends of the US PV industry. The data collected is actively maintained by the contributors and are always changing to provide an evolving, up-to-date snapshot of the US solar power market.


<https://www.sciencebase.gov/catalog/item/57bdfd8fe4b03fd6b7df5ff9>




# Download

Download the following file:

* <a href='../../datasets/json/wind_turbines/wind_turbines.json' download>wind_turbines.json <span class="fas fa-download"></span></a>

# Key Descriptions
    
<table class='table table-condensed table-striped table-bordered table-hover'>
<tr>
    <th class=''>Key</th>
    <th class=''>List of...</th>
    <th class=''>Comment</th>
    <th class=''>Example Value</th>
</tr>

<tr>
    <td>Site.State</td>
    <td>String</td> 
    <td>Two letter abbreviation of state where turbine is located (e.g., CA for California)</td>
    <td><code>"IA"</code></td>
</tr>

<tr>
    <td>Site.County</td>
    <td>String</td> 
    <td>County where the turbine is located.</td>
    <td><code>"Story County"</code></td>
</tr>

<tr>
    <td>Year</td>
    <td>Integer</td> 
    <td>Year when the turbine's project became operational</td>
    <td><code>2017</code></td>
</tr>

<tr>
    <td>Turbine.Capacity</td>
    <td>Integer</td> 
    <td>Electrical generation capacity of the turbine measured in KW (kilo-watts)</td>
    <td><code>3000</code></td>
</tr>

<tr>
    <td>Turbine.Hub_Height</td>
    <td>Float</td> 
    <td>Height in meters of the turbine's hub</td>
    <td><code>87.5</code></td>
</tr>

<tr>
    <td>Turbine.Rotor_Diameter</td>
    <td>Float</td> 
    <td>Diameter in meters of the turbine's rotor</td>
    <td><code>125.0</code></td>
</tr>

<tr>
    <td>Turbine.Swept_Area</td>
    <td>Float</td> 
    <td>The area swept on each rotation of the turbine</td>
    <td><code>12271.85</code></td>
</tr>

<tr>
    <td>Turbine.Total_Height</td>
    <td>Float</td> 
    <td>Total height of the turbine, in meters</td>
    <td><code>150.0</code></td>
</tr>

<tr>
    <td>Project.Capacity</td>
    <td>Float</td> 
    <td>Electrical generation capacity of the turbine measured in MW (mega-watts)</td>
    <td><code>30.0</code></td>
</tr>

<tr>
    <td>Project.Number_Turbines</td>
    <td>Integer</td> 
    <td>Number of turbines in this project</td>
    <td><code>10</code></td>
</tr>

<tr>
    <td>Site.Latitude</td>
    <td>Float</td> 
    <td>Latitude (decimal degrees - NAD 83 datum) of where turbine is located</td>
    <td><code>-93.518082</code></td>
</tr>

<tr>
    <td>Site.Longitude</td>
    <td>Float</td> 
    <td>Longitude (decimal degrees - NAD 83 datum)</td>
    <td><code>42.01363</code></td>
</tr>

</table>