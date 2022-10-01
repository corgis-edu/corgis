---
permalink: /blockpy/monkeypox/
style: dataset
---

<img class="img-thumbnail float-right"
     src="/images/datasets/monkeypox-icon.JPG"
     alt="monkeypox icon"
     role="presentation">

# Monkeypox BlockPy Library

<p class='lead'>From the CORGIS Dataset Project</p>

<span class='text-muted'>By Sam Donald</span><br>
<span class='text-muted'>Version 1.0.0, created 9/27/2022</span><br>
<span class='text-muted'>Tags: pandemic, global health, death, monkey pox</span>

# Overview

Data on the 2022 monkeypox outbreak is collated by the World Health Organization, and is updated as new information is reported.


<https://github.com/owid/monkeypox>




# Key Descriptions
    
<table class='table table-condensed table-striped table-bordered table-hover'>
<tr>
    <th class=''>Key</th>
    <th class=''>List of...</th>
    <th class=''>Comment</th>
    <th class=''>Example Value</th>
</tr>

<tr>
    <td>Country.Iso code</td>
    <td>String</td> 
    <td>Country code</td>
    <td><code>"AND"</code></td>
</tr>

<tr>
    <td>Country.Full</td>
    <td>String</td> 
    <td>The name of a country</td>
    <td><code>"Andorra"</code></td>
</tr>

<tr>
    <td>Date.Full</td>
    <td>String</td> 
    <td>Full date (YYYY-MM-DD)</td>
    <td><code>"2022-07-25"</code></td>
</tr>

<tr>
    <td>Date.Year</td>
    <td>Integer</td> 
    <td>Year</td>
    <td><code>2022</code></td>
</tr>

<tr>
    <td>Date.Month</td>
    <td>Integer</td> 
    <td>Month</td>
    <td><code>7</code></td>
</tr>

<tr>
    <td>Date.Day</td>
    <td>Integer</td> 
    <td>Day</td>
    <td><code>25</code></td>
</tr>

<tr>
    <td>Data.Cases.New</td>
    <td>Integer</td> 
    <td>New cases reported on the given day</td>
    <td><code>1</code></td>
</tr>

<tr>
    <td>Data.Cases.Total</td>
    <td>Integer</td> 
    <td>Total cases reported prior to the given day</td>
    <td><code>1</code></td>
</tr>

<tr>
    <td>Data.Cases.New per million</td>
    <td>Float</td> 
    <td>New cases per million people in the country reported on the given day</td>
    <td><code>12.653</code></td>
</tr>

<tr>
    <td>Data.Cases.Total per million</td>
    <td>Float</td> 
    <td>Total cases per million people in the country prior to the given day</td>
    <td><code>12.653</code></td>
</tr>

<tr>
    <td>Data.Deaths.New</td>
    <td>Integer</td> 
    <td>New deaths reported on the given day</td>
    <td><code>0</code></td>
</tr>

<tr>
    <td>Data.Deaths.Total</td>
    <td>Integer</td> 
    <td>Total deaths reported prior to the given day</td>
    <td><code>0</code></td>
</tr>

<tr>
    <td>Data.Deaths.New per million</td>
    <td>Float</td> 
    <td>New deaths per million people in the country reported on the given day</td>
    <td><code>0.0</code></td>
</tr>

<tr>
    <td>Data.Deaths.Total per million</td>
    <td>Float</td> 
    <td>Total deaths per million people in the country prior to the given day</td>
    <td><code>0.0</code></td>
</tr>

</table>