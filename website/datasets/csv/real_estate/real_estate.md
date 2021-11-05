---
permalink: /csv/real_estate/
style: dataset
---

<img class="img-thumbnail float-right"
     src="/images/datasets/real-estate-icon.png"
     alt="real estate icon"
     role="presentation">

# Real Estate CSV File

<p class='lead'>From the CORGIS Dataset Project</p>

<span class='text-muted'>By Austin Cory Bart <acbart@vt.edu>, Joung Min Choi, Bo Guan</span><br>
<span class='text-muted'>Version 3.0.0, created 11/05/2021</span><br>
<span class='text-muted'>Tags: real, estate, buildings, government, building</span>

# Overview

Real Estate Across the United States (REXUS) is the primary tool used by PBS to track and manage the government's real property assets and to store inventory data, building data, customer data, and lease information. STAR manages aspects of real property space management, including identification of all building space and daily management of 22,000 assignments for all property to its client Federal agencies. This data set contains PBS building inventory that consists of both owned and leased buildings with active and excess status.



<https://catalog.data.gov/dataset/real-estate-across-the-united-states-rexus-inventory-building>




# Download

Download the following file:

* <a href='../../datasets/csv/real_estate/real_estate.csv' download>real_estate.csv <span class="fas fa-download"></span></a>

# Key Descriptions
    
<table class='table table-condensed table-striped table-bordered table-hover'>
<tr>
    <th class=''>Key</th>
    <th class=''>List of...</th>
    <th class=''>Comment</th>
    <th class=''>Example Value</th>
</tr>

<tr>
    <td>data.date</td>
    <td>String</td> 
    <td>The construction date (Denoted as 0 for unknown)</td>
    <td><code>"1933.1.1"</code></td>
</tr>

<tr>
    <td>data.owned or leased</td>
    <td>String</td> 
    <td>The leasing status of the building</td>
    <td><code>"OWNED"</code></td>
</tr>

<tr>
    <td>data.parking spaces</td>
    <td>Integer</td> 
    <td>The number of spaces in the parking lot</td>
    <td><code>29</code></td>
</tr>

<tr>
    <td>data.status</td>
    <td>String</td> 
    <td>The status of the building for whether it is still active, excess, or decomissioned</td>
    <td><code>"ACTIVE"</code></td>
</tr>

<tr>
    <td>data.type</td>
    <td>String</td> 
    <td>The property type</td>
    <td><code>"BUILDING"</code></td>
</tr>

<tr>
    <td>location.congressional district</td>
    <td>String</td> 
    <td>The number of the congressional district in the area of the building</td>
    <td><code>"1"</code></td>
</tr>

<tr>
    <td>location.id</td>
    <td>String</td> 
    <td>The location code for the area of the building</td>
    <td><code>"CT0013"</code></td>
</tr>

<tr>
    <td>location.region id</td>
    <td>String</td> 
    <td>The region code for the area of the building</td>
    <td><code>"1"</code></td>
</tr>

<tr>
    <td>data.disabilities.ADA Accessible</td>
    <td>String</td> 
    <td>The status whether the building follows the ADA (Americans with Disabilities Act) accessibility standarads</td>
    <td><code>"Will Conform"</code></td>
</tr>

<tr>
    <td>data.disabilities.ansi usable</td>
    <td>String</td> 
    <td>The building code for ANSI (the American National StandardInstitute) standard</td>
    <td><code>"97072"</code></td>
</tr>

<tr>
    <td>location.address.city</td>
    <td>String</td> 
    <td>The city address of the building</td>
    <td><code>"HARTFORD"</code></td>
</tr>

<tr>
    <td>location.address.county</td>
    <td>String</td> 
    <td>The county address of the building</td>
    <td><code>"HARTFORD COUNTY"</code></td>
</tr>

<tr>
    <td>location.address.line 1</td>
    <td>String</td> 
    <td>The line 1 address of the building</td>
    <td><code>"135 HIGH ST"</code></td>
</tr>

<tr>
    <td>location.address.state</td>
    <td>String</td> 
    <td>The state address of the building</td>
    <td><code>"CT"</code></td>
</tr>

<tr>
    <td>location.address.zip</td>
    <td>String</td> 
    <td>The zipcode of the building</td>
    <td><code>"61031125"</code></td>
</tr>

</table>