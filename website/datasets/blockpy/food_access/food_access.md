---
permalink: /blockpy/food_access/
style: dataset
---

<img class="img-thumbnail float-right"
     src="/images/datasets/food-access-icon.png"
     alt="food access icon"
     role="presentation">

# Food Access BlockPy Library

<p class='lead'>From the CORGIS Dataset Project</p>

<span class='text-muted'>By Ryan Whitcomb, Joung Min Choi, Bo Guan</span><br>
<span class='text-muted'>Version 3.0.0, created 9/14/2021</span><br>
<span class='text-muted'>Tags: counties, states, food, access, availability, supermarket, rural, urban, population, vehicles</span>

# Overview

From the United States Department of Agriculture's Economic Research Service, the dataset contains information about US county's ability to access supermarkets, supercenters, grocery stores, or other sources of healthy and affordable food.  Most measures of how individuals and neighborhoods are able to access food are based on the following indicators: 
    - Accessibility to sources of healthy food, as measured by distance to a store or by the number of stores in an area.
    - Individual-level resources that may affect accessibility, such as family income or vehicle availability.
    - Neighborhood-level indicators of resources, such as the average income of the neighborhood and the availability of public transportation.  



<https://www.ers.usda.gov/data-products/food-access-research-atlas/download-the-data/>




# Key Descriptions
    
<table class='table table-condensed table-striped table-bordered table-hover'>
<tr>
    <th class=''>Key</th>
    <th class=''>List of...</th>
    <th class=''>Comment</th>
    <th class=''>Example Value</th>
</tr>

<tr>
    <td>County</td>
    <td>String</td> 
    <td>County name</td>
    <td><code>"Autauga County"</code></td>
</tr>

<tr>
    <td>Population</td>
    <td>Integer</td> 
    <td>Population count from 2010 census</td>
    <td><code>54571</code></td>
</tr>

<tr>
    <td>State</td>
    <td>String</td> 
    <td>State name</td>
    <td><code>"Alabama"</code></td>
</tr>

<tr>
    <td>Housing Data.Residing in Group Quarters</td>
    <td>Float</td> 
    <td>Count of tract population residing in group quarters</td>
    <td><code>455.0</code></td>
</tr>

<tr>
    <td>Housing Data.Total Housing Units</td>
    <td>Integer</td> 
    <td>Occupied housing unit count from 2010 census</td>
    <td><code>20221</code></td>
</tr>

<tr>
    <td>Vehicle Access.1 Mile</td>
    <td>Float</td> 
    <td>Housing units without vehicle count beyond 1 mile from supermarket</td>
    <td><code>834.0</code></td>
</tr>

<tr>
    <td>Vehicle Access.1/2 Mile</td>
    <td>Float</td> 
    <td>Housing units without vehicle count beyond 1/2 mile from supermarket</td>
    <td><code>1045.0</code></td>
</tr>

<tr>
    <td>Vehicle Access.10 Miles</td>
    <td>Float</td> 
    <td>Housing units without vehicle count beyond 10 miles from supermarket</td>
    <td><code>222.0</code></td>
</tr>

<tr>
    <td>Vehicle Access.20 Miles</td>
    <td>Float</td> 
    <td>Housing units without vehicle count beyond 20 miles from supermarket</td>
    <td><code>0.0</code></td>
</tr>

<tr>
    <td>Low Access Numbers.Children.1 Mile</td>
    <td>Float</td> 
    <td>Kids population count beyond 1 mile from supermarket</td>
    <td><code>9973.0</code></td>
</tr>

<tr>
    <td>Low Access Numbers.Children.1/2 Mile</td>
    <td>Float</td> 
    <td>Kids population count beyond 1/2 mile from supermarket</td>
    <td><code>13281.0</code></td>
</tr>

<tr>
    <td>Low Access Numbers.Children.10 Miles</td>
    <td>Float</td> 
    <td>Kids population count beyond 10 miles from supermarket</td>
    <td><code>1199.0</code></td>
</tr>

<tr>
    <td>Low Access Numbers.Children.20 Miles</td>
    <td>Float</td> 
    <td>Kids population count beyond 20 miles from supermarket</td>
    <td><code>0.0</code></td>
</tr>

<tr>
    <td>Low Access Numbers.Low Income People.1 Mile</td>
    <td>Float</td> 
    <td>Low income population count beyond 1 mile from supermarket</td>
    <td><code>12067.0</code></td>
</tr>

<tr>
    <td>Low Access Numbers.Low Income People.1/2 Mile</td>
    <td>Float</td> 
    <td>Low income population count beyond 1/2 mile from supermarket</td>
    <td><code>15518.0</code></td>
</tr>

<tr>
    <td>Low Access Numbers.Low Income People.10 Miles</td>
    <td>Float</td> 
    <td>Low income population count beyond 10 miles from supermarket</td>
    <td><code>2307.0</code></td>
</tr>

<tr>
    <td>Low Access Numbers.Low Income People.20 Miles</td>
    <td>Float</td> 
    <td>Low income population count beyond 20 miles from supermarket</td>
    <td><code>0.0</code></td>
</tr>

<tr>
    <td>Low Access Numbers.People.1 Mile</td>
    <td>Float</td> 
    <td>Population count beyond 1 mile from supermarket</td>
    <td><code>37424.0</code></td>
</tr>

<tr>
    <td>Low Access Numbers.People.1/2 Mile</td>
    <td>Float</td> 
    <td>Population count beyond 1/2 mile from supermarket</td>
    <td><code>49497.0</code></td>
</tr>

<tr>
    <td>Low Access Numbers.People.10 Miles</td>
    <td>Float</td> 
    <td>Population count beyond 10 miles from supermarket</td>
    <td><code>5119.0</code></td>
</tr>

<tr>
    <td>Low Access Numbers.People.20 Miles</td>
    <td>Float</td> 
    <td>Population count beyond 20 miles from supermarket</td>
    <td><code>0.0</code></td>
</tr>

<tr>
    <td>Low Access Numbers.Seniors.1 Mile</td>
    <td>Float</td> 
    <td>Seniors population count beyond 1 mile from supermarket</td>
    <td><code>4393.0</code></td>
</tr>

<tr>
    <td>Low Access Numbers.Seniors.1/2 Mile</td>
    <td>Float</td> 
    <td>Seniors population count beyond 1/2 mile from supermarket</td>
    <td><code>5935.0</code></td>
</tr>

<tr>
    <td>Low Access Numbers.Seniors.10 Miles</td>
    <td>Float</td> 
    <td>Seniors population count beyond 10 miles from supermarket</td>
    <td><code>707.0</code></td>
</tr>

<tr>
    <td>Low Access Numbers.Seniors.20 Miles</td>
    <td>Float</td> 
    <td>Seniors population count beyond 20 miles from supermarket</td>
    <td><code>0.0</code></td>
</tr>

</table>