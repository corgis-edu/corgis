---
permalink: /blockpy/energy/
style: dataset
---

<img class="img-thumbnail float-right"
     src="/images/datasets/energy-icon.png"
     alt="energy icon"
     role="presentation">

# Energy BlockPy Library

<p class='lead'>From the CORGIS Dataset Project</p>

<span class='text-muted'>By Austin Cory Bart <acbart@vt.edu></span><br>
<span class='text-muted'>Version 2.0.0, created 11/1/2015</span><br>
<span class='text-muted'>Tags: energy, renewable, united states, us, nuclear, fossil fuels, power</span>

# Overview

United States Government reports on consumption, production, expenditures, and prices of various fuel sources. This data comes from the US Energy Information Administration, which has historical data from 1960 to 2014. Information was not always available, in which case 0 was reported instead. In some cases, very tiny values were rounded down to zero.



<http://www.eia.gov/tools/faqs/>




# Key Descriptions
    
<table class='table table-condensed table-striped table-bordered table-hover'>
<tr>
    <th class=''>Key</th>
    <th class=''>List of...</th>
    <th class=''>Comment</th>
    <th class=''>Example Value</th>
</tr>

<tr>
    <td>State</td>
    <td>String</td> 
    <td>The state that this report was made for.</td>
    <td><code>"Utah"</code></td>
</tr>

<tr>
    <td>Year</td>
    <td>Integer</td> 
    <td>The year that this report was made.</td>
    <td><code>1960</code></td>
</tr>

<tr>
    <td>Production.Coal</td>
    <td>Float</td> 
    <td>Coal production in billion BTU. Unfortunately, the other energy sources produced by the United States (including Natural Gas and Petroleum) could not be incorporated.</td>
    <td><code>114689.0</code></td>
</tr>

<tr>
    <td>Consumption.Commercial.Coal</td>
    <td>Float</td> 
    <td>Coal consumed by the commercial sector in billion BTU.</td>
    <td><code>2644.0</code></td>
</tr>

<tr>
    <td>Consumption.Commercial.Distillate Fuel Oil</td>
    <td>Float</td> 
    <td>Distillate fuel oil consumed by the commercial sector in billion BTU.</td>
    <td><code>2110.0</code></td>
</tr>

<tr>
    <td>Consumption.Commercial.Geothermal</td>
    <td>Float</td> 
    <td>Geothermal energy consumed by the commercial sector in billion BTU.</td>
    <td><code>0.0</code></td>
</tr>

<tr>
    <td>Consumption.Commercial.Hydropower</td>
    <td>Float</td> 
    <td>Hydropower consumed by the commercial sector in billion BTU.</td>
    <td><code>0.0</code></td>
</tr>

<tr>
    <td>Consumption.Commercial.Kerosene</td>
    <td>Float</td> 
    <td>Kerosene consumed by the commercial sector in billion BTU.</td>
    <td><code>33.0</code></td>
</tr>

<tr>
    <td>Consumption.Commercial.Liquefied Petroleum Gases</td>
    <td>Float</td> 
    <td>LPG consumed by the commercial sector in billion BTU.</td>
    <td><code>450.0</code></td>
</tr>

<tr>
    <td>Consumption.Commercial.Natural Gas</td>
    <td>Float</td> 
    <td>Natural gas consumed by (delivered to) the commercial sector (including supplemental gaseous fuels) in billion BTU.</td>
    <td><code>10482.0</code></td>
</tr>

<tr>
    <td>Consumption.Commercial.Solar</td>
    <td>Float</td> 
    <td>Photovoltaic and solar thermal energy consumed by the commercial sector (except portion included in SOHCB) in billion BTU.</td>
    <td><code>0.0</code></td>
</tr>

<tr>
    <td>Consumption.Commercial.Wind</td>
    <td>Float</td> 
    <td>Wind energy consumed by the commercial sector in billion BTU.</td>
    <td><code>0.0</code></td>
</tr>

<tr>
    <td>Consumption.Commercial.Wood</td>
    <td>Float</td> 
    <td>Wood consumed by the commercial sector in billion BTU.</td>
    <td><code>35.0</code></td>
</tr>

<tr>
    <td>Consumption.Electric Power.Coal</td>
    <td>Float</td> 
    <td>Coal consumed by the electric power sector in billion BTU.</td>
    <td><code>12840.0</code></td>
</tr>

<tr>
    <td>Consumption.Electric Power.Distillate Fuel Oil</td>
    <td>Float</td> 
    <td>Distillate fuel oil consumed by the electrical power sector in billion BTU.</td>
    <td><code>67.0</code></td>
</tr>

<tr>
    <td>Consumption.Electric Power.Natural Gas</td>
    <td>Float</td> 
    <td>Natural gas consumed by the electric power sector (including supplemental gaseous fuels) in billion BTU.</td>
    <td><code>3806.0</code></td>
</tr>

<tr>
    <td>Consumption.Electric Power.Wood</td>
    <td>Float</td> 
    <td>Wood and waste consumed by the electric power sector in billion BTU.</td>
    <td><code>0.0</code></td>
</tr>

<tr>
    <td>Consumption.Industrial.Coal</td>
    <td>Float</td> 
    <td>Coal consumed by the industrial sector in billion BTU.</td>
    <td><code>70489.0</code></td>
</tr>

<tr>
    <td>Consumption.Industrial.Distillate Fuel Oil</td>
    <td>Float</td> 
    <td>Distillate fuel oil consumed by the industrial sector in billion BTU.</td>
    <td><code>5768.0</code></td>
</tr>

<tr>
    <td>Consumption.Industrial.Geothermal</td>
    <td>Float</td> 
    <td>Geothermal energy consumed by the industrial sector in billion BTU.</td>
    <td><code>0.0</code></td>
</tr>

<tr>
    <td>Consumption.Industrial.Hydropower</td>
    <td>Float</td> 
    <td>Hydropower consumed by the industrial sector in billion BTU.</td>
    <td><code>2.0</code></td>
</tr>

<tr>
    <td>Consumption.Industrial.Kerosene</td>
    <td>Float</td> 
    <td>Kerosene consumed by the industrial sector in billion BTU.</td>
    <td><code>167.0</code></td>
</tr>

<tr>
    <td>Consumption.Industrial.Liquefied Petroleum Gases</td>
    <td>Float</td> 
    <td>LPG consumed by the industrial sector in billion BTU.</td>
    <td><code>515.0</code></td>
</tr>

<tr>
    <td>Consumption.Industrial.Natural Gas</td>
    <td>Float</td> 
    <td>Natural gas consumed by (delivered to) the industrial sector (including supplemental gaseous fuels) in billion BTU.</td>
    <td><code>34662.0</code></td>
</tr>

<tr>
    <td>Consumption.Industrial.Other Petroleum Products</td>
    <td>Float</td> 
    <td>Other petroleum products consumed by the industrial sector in billion BTU.</td>
    <td><code>11571.0</code></td>
</tr>

<tr>
    <td>Consumption.Industrial.Solar</td>
    <td>Float</td> 
    <td>Photovoltaic and solar thermal energy consumed by the industrial sector (except portion included in SOHCB) in billion BTU.</td>
    <td><code>0.0</code></td>
</tr>

<tr>
    <td>Consumption.Industrial.Wind</td>
    <td>Float</td> 
    <td>Wind energy consumed by the industrial sector in billion BTU.</td>
    <td><code>0.0</code></td>
</tr>

<tr>
    <td>Consumption.Industrial.Wood</td>
    <td>Float</td> 
    <td>Wood and waste consumed in the industrial sector, total, in billion BTU.</td>
    <td><code>344.0</code></td>
</tr>

<tr>
    <td>Consumption.Refinery.Coal</td>
    <td>Float</td> 
    <td>Coal consumed as refinery fuel in billion BTU.</td>
    <td><code>0.0</code></td>
</tr>

<tr>
    <td>Consumption.Refinery.Distillate Fuel Oil</td>
    <td>Float</td> 
    <td>Distillate fuel oil consumed as refinery fuel in billion BTU.</td>
    <td><code>0.0</code></td>
</tr>

<tr>
    <td>Consumption.Refinery.Liquefied Petroleum Gases</td>
    <td>Float</td> 
    <td>LPG consumed as refinery fuel in billion BTU.</td>
    <td><code>0.0</code></td>
</tr>

<tr>
    <td>Consumption.Refinery.Natural Gas</td>
    <td>Float</td> 
    <td>Natural gas consumed as refinery fuel (including supplemental gaseous fuels) in billion BTU.</td>
    <td><code>0.0</code></td>
</tr>

<tr>
    <td>Consumption.Residential.Coal</td>
    <td>Float</td> 
    <td>Coal consumed by the residential sector in billion BTU.</td>
    <td><code>3805.0</code></td>
</tr>

<tr>
    <td>Consumption.Residential.Distillate Fuel Oil</td>
    <td>Float</td> 
    <td>Distillate fuel oil consumed by the residential sector in billion BTU.</td>
    <td><code>580.0</code></td>
</tr>

<tr>
    <td>Consumption.Residential.Geothermal</td>
    <td>Float</td> 
    <td>Geothermal energy consumed by the residential sector in billion BTU.</td>
    <td><code>0.0</code></td>
</tr>

<tr>
    <td>Consumption.Residential.Kerosene</td>
    <td>Float</td> 
    <td>Kerosene consumed by the residential sector in billion BTU.</td>
    <td><code>5.0</code></td>
</tr>

<tr>
    <td>Consumption.Residential.Liquefied Petroleum Gases</td>
    <td>Float</td> 
    <td>LPG consumed by the residential sector in billion BTU.</td>
    <td><code>673.0</code></td>
</tr>

<tr>
    <td>Consumption.Residential.Natural Gas</td>
    <td>Float</td> 
    <td>Natural gas consumed by (delivered to) the residential sector (including supplemental gaseous fuels) in billion BTU.</td>
    <td><code>23398.0</code></td>
</tr>

<tr>
    <td>Consumption.Residential.Wood</td>
    <td>Float</td> 
    <td>Wood consumed by the residential sector in billion BTU.</td>
    <td><code>1840.0</code></td>
</tr>

<tr>
    <td>Consumption.Transportation.Coal</td>
    <td>Float</td> 
    <td>Coal consumed by the transportation sector in billion BTU.</td>
    <td><code>1188.0</code></td>
</tr>

<tr>
    <td>Consumption.Transportation.Distillate Fuel Oil</td>
    <td>Float</td> 
    <td>Distillate fuel oil consumed by the transportation sector in billion BTU.</td>
    <td><code>13466.0</code></td>
</tr>

<tr>
    <td>Consumption.Transportation.Liquefied Petroleum Gases</td>
    <td>Float</td> 
    <td>LPG consumed by the transportation sector in billion BTU.</td>
    <td><code>134.0</code></td>
</tr>

<tr>
    <td>Consumption.Transportation.Natural Gas</td>
    <td>Float</td> 
    <td>Natural gas consumed by the transportation sector in billion BTU.</td>
    <td><code>92.0</code></td>
</tr>

<tr>
    <td>Expenditure.Commercial.Coal</td>
    <td>Float</td> 
    <td>Coal expenditures in the industrial sector in million dollars.</td>
    <td><code>0.0</code></td>
</tr>

<tr>
    <td>Expenditure.Commercial.Distillate Fuel Oil</td>
    <td>Float</td> 
    <td>Distillate fuel oil expenditures in the industrial sector in million dollars.</td>
    <td><code>0.0</code></td>
</tr>

<tr>
    <td>Expenditure.Commercial.Kerosene</td>
    <td>Float</td> 
    <td>Kerosene expenditures in the industrial sector in million dollars.</td>
    <td><code>0.0</code></td>
</tr>

<tr>
    <td>Expenditure.Commercial.Liquefied Petroleum Gases</td>
    <td>Float</td> 
    <td>LPG expenditures in the industrial sector in million dollars.</td>
    <td><code>0.0</code></td>
</tr>

<tr>
    <td>Expenditure.Commercial.Natural Gas</td>
    <td>Float</td> 
    <td>Natural gas expenditures in the industrial sector (including supplemental gaseous fuels) in million dollars.</td>
    <td><code>0.0</code></td>
</tr>

<tr>
    <td>Expenditure.Electric Power.Coal</td>
    <td>Float</td> 
    <td>Coal expenditures in the electric power sector in million dollars.</td>
    <td><code>0.0</code></td>
</tr>

<tr>
    <td>Expenditure.Electric Power.Distillate Fuel Oil</td>
    <td>Float</td> 
    <td>Distillate fuel oil expenditures in the electric power sector in million dollars.</td>
    <td><code>0.0</code></td>
</tr>

<tr>
    <td>Expenditure.Electric Power.Natural Gas</td>
    <td>Float</td> 
    <td>Natural gas expenditures in the electric power sector (including supplemental gaseous fuels) in million dollars.</td>
    <td><code>0.0</code></td>
</tr>

<tr>
    <td>Expenditure.Industrial.Coal</td>
    <td>Float</td> 
    <td>Coal expenditures in the industrial sector in million dollars.</td>
    <td><code>0.0</code></td>
</tr>

<tr>
    <td>Expenditure.Industrial.Distillate Fuel Oil</td>
    <td>Float</td> 
    <td>Distillate fuel oil expenditures in the industrial sector in million dollars.</td>
    <td><code>0.0</code></td>
</tr>

<tr>
    <td>Expenditure.Industrial.Kerosene</td>
    <td>Float</td> 
    <td>Kerosene expenditures in the industrial sector in million dollars.</td>
    <td><code>0.0</code></td>
</tr>

<tr>
    <td>Expenditure.Industrial.Liquefied Petroleum Gases</td>
    <td>Float</td> 
    <td>LPG expenditures in the industrial sector in million dollars.</td>
    <td><code>0.0</code></td>
</tr>

<tr>
    <td>Expenditure.Industrial.Natural Gas</td>
    <td>Float</td> 
    <td>Natural gas expenditures in the industrial sector (including supplemental gaseous fuels) in million dollars.</td>
    <td><code>0.0</code></td>
</tr>

<tr>
    <td>Expenditure.Industrial.Other Petroleum Products</td>
    <td>Float</td> 
    <td>Other petroleum products total expenditures in the industrial sector in million dollars.</td>
    <td><code>0.0</code></td>
</tr>

<tr>
    <td>Expenditure.Residential.Coal</td>
    <td>Float</td> 
    <td>Coal expenditures in the residential sector in million dollars.</td>
    <td><code>0.0</code></td>
</tr>

<tr>
    <td>Expenditure.Residential.Distillate Fuel Oil</td>
    <td>Float</td> 
    <td>Distillate fuel oil expenditures in the residential sector in million dollars.</td>
    <td><code>0.0</code></td>
</tr>

<tr>
    <td>Expenditure.Residential.Kerosene</td>
    <td>Float</td> 
    <td>Kerosene expenditures in the residential sector in million dollars.</td>
    <td><code>0.0</code></td>
</tr>

<tr>
    <td>Expenditure.Residential.Liquefied Petroleum Gases</td>
    <td>Float</td> 
    <td>LPG expenditures in the residential sector in million dollars.</td>
    <td><code>0.0</code></td>
</tr>

<tr>
    <td>Expenditure.Residential.Natural Gas</td>
    <td>Float</td> 
    <td>Natural gas expenditures in the residential sector (including supplemental gaseous fuels) in million dollars.</td>
    <td><code>0.0</code></td>
</tr>

<tr>
    <td>Expenditure.Residential.Wood</td>
    <td>Float</td> 
    <td>Wood expenditures in the residential sector in million dollars.</td>
    <td><code>0.0</code></td>
</tr>

<tr>
    <td>Expenditure.Transportation.Coal</td>
    <td>Float</td> 
    <td>Coal expenditures in the transportation sector in million dollars.</td>
    <td><code>0.0</code></td>
</tr>

<tr>
    <td>Expenditure.Transportation.Distillate Fuel Oil</td>
    <td>Float</td> 
    <td>Distillate fuel oil expenditures in the transportation sector in million dollars.</td>
    <td><code>0.0</code></td>
</tr>

<tr>
    <td>Expenditure.Transportation.Liquefied Petroleum Gases</td>
    <td>Float</td> 
    <td>LPG expenditures in the transportation sector in million dollars.</td>
    <td><code>0.0</code></td>
</tr>

<tr>
    <td>Expenditure.Transportation.Natural Gas</td>
    <td>Float</td> 
    <td>Natural gas expenditures in the transportation sector in million dollars.</td>
    <td><code>0.0</code></td>
</tr>

<tr>
    <td>Price.Commercial.Coal</td>
    <td>Float</td> 
    <td>Coal price in the commercial sector in dollars per million BTU.</td>
    <td><code>0.0</code></td>
</tr>

<tr>
    <td>Price.Commercial.Distillate Fuel Oil</td>
    <td>Float</td> 
    <td>Distillate fuel oil price in the commercial sector in dollars per million BTU.</td>
    <td><code>0.0</code></td>
</tr>

<tr>
    <td>Price.Commercial.Kerosene</td>
    <td>Float</td> 
    <td>Kerosene price in the commercial sector in dollars per million BTU.</td>
    <td><code>0.0</code></td>
</tr>

<tr>
    <td>Price.Commercial.Liquefied Petroleum Gases</td>
    <td>Float</td> 
    <td>LPG price in the commercial sector in dollars per million BTU.</td>
    <td><code>0.0</code></td>
</tr>

<tr>
    <td>Price.Commercial.Natural Gas</td>
    <td>Float</td> 
    <td>Natural gas price in the commercial sector (including supplemental gaseous fuels) in dollars per million BTU.</td>
    <td><code>0.0</code></td>
</tr>

<tr>
    <td>Price.Electric Power.Coal</td>
    <td>Float</td> 
    <td>Coal price in the electric power sector in dollars per million BTU.</td>
    <td><code>0.0</code></td>
</tr>

<tr>
    <td>Price.Electric Power.Distillate Fuel Oil</td>
    <td>Float</td> 
    <td>Distillate fuel oil price in the electric power sector in dollars per million BTU.</td>
    <td><code>0.0</code></td>
</tr>

<tr>
    <td>Price.Electric Power.Natural Gas</td>
    <td>Float</td> 
    <td>Natural gas price in the electric power sector (including supplemental gaseous fuels) in dollars per million BTU.</td>
    <td><code>0.0</code></td>
</tr>

<tr>
    <td>Price.Industrial.Coal</td>
    <td>Float</td> 
    <td>Coal price in the industrial sector in dollars per million BTU.</td>
    <td><code>0.0</code></td>
</tr>

<tr>
    <td>Price.Industrial.Distillate Fuel Oil</td>
    <td>Float</td> 
    <td>Distillate fuel oil price in the industrial sector in dollars per million BTU.</td>
    <td><code>0.0</code></td>
</tr>

<tr>
    <td>Price.Industrial.Kerosene</td>
    <td>Float</td> 
    <td>Kerosene price in the industrial sector in dollars per million BTU.</td>
    <td><code>0.0</code></td>
</tr>

<tr>
    <td>Price.Industrial.Liquefied Petroleum Gases</td>
    <td>Float</td> 
    <td>LPG price in the industrial sector in dollars per million BTU.</td>
    <td><code>0.0</code></td>
</tr>

<tr>
    <td>Price.Industrial.Natural Gas</td>
    <td>Float</td> 
    <td>Natural gas price in the industrial sector (including supplemental gaseous fuels) in dollars per million BTU.</td>
    <td><code>0.0</code></td>
</tr>

<tr>
    <td>Price.Industrial.Other Petroleum Products</td>
    <td>Float</td> 
    <td>Other petroleum products average price in the industrial sector in dollars per million BTU.</td>
    <td><code>0.0</code></td>
</tr>

<tr>
    <td>Price.Transportation.Coal</td>
    <td>Float</td> 
    <td>Coal price in the transportation sector in dollars per million BTU.</td>
    <td><code>0.0</code></td>
</tr>

<tr>
    <td>Price.Transportation.Distillate Fuel Oil</td>
    <td>Float</td> 
    <td>Distillate fuel oil price in the transportation sector in dollars per million BTU.</td>
    <td><code>0.0</code></td>
</tr>

<tr>
    <td>Price.Transportation.Liquefied Petroleum Gases</td>
    <td>Float</td> 
    <td>LPG price in the transportation sector in dollars per million BTU.</td>
    <td><code>0.0</code></td>
</tr>

<tr>
    <td>Price.Transportation.Natural Gas</td>
    <td>Float</td> 
    <td>Natural gas price in the transportation sector in dollars per million BTU.</td>
    <td><code>0.0</code></td>
</tr>

</table>