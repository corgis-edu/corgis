---
permalink: /csv/injuries/
style: dataset
---

<img class="img-thumbnail float-right"
     src="/images/datasets/injuries-icon.png"
     alt="injuries icon"
     role="presentation">

# Injuries CSV File

<p class='lead'>From the CORGIS Dataset Project</p>

<span class='text-muted'>By Austin Cory Bart <acbart@vt.edu></span><br>
<span class='text-muted'>Version 2.0.0, created 3/22/2016</span><br>
<span class='text-muted'>Tags: osha, united states, us, usa, government, health, safety, injury, injuries, hurt, pain, job, work, industry, career, occuptation, safety, hazard, health</span>

# Overview

The Occupational Safety and Health Administration (OSHA) collected work-related injury and illness data from employers within specific industry and employment size specifications from 2002 through 2011. This data collection is called the OSHA Data Initiative or ODI. The data provided is used by OSHA to calculate establishment specific injury and illness incidence rates. This searchable database contains a table with the name, address, industry, and associated Total Case Rate (TCR), Days Away, Restricted, and Transfer (DART) case rate, and the Days Away From Work (DAFWII) case rate for the establishments that provided OSHA with valid data for calendar years 2002 through 2011.
This data has been sampled down from its original size to 4%. In addition, the original dataset only has data from a small portion of all private sector establishments in the United States (80,000 out of 7.5 million total establishments). Therefore, these data are not representative of all businesses and general conclusions pertaining to all US business should not be overdrawn.
Data quality: While OSHA takes multiple steps to ensure the data collected is accurate, problems and errors invariably exist for a small percentage of establishments. OSHA does not believe the data for the establishments with the highest rates on this file are accurate in absolute terms. Efforts were made during the collection cycle to correct submission errors, however some remain unresolved. It would be a mistake to say establishments with the highest rates on this file are the 'most dangerous' or 'worst' establishments in the Nation.
Rate Calculation: An incidence rate of injuries and illnesses is computed from the following formula: (Number of injuries and illnesses X 200,000) / Employee hours worked = Incidence rate. The Total Case Rate includes all cases recorded on the OSHA Form 300 (Column G + Column H + Column I + Column J). The Days Away/Restriced/Transfer includes cases recorded in Column H + Column I. The Days Away includes cases recorded in Column H. For further information on injury and illness incidence rates, please visit the Bureau of Labor Statistics' webpage at http://www.bls.gov/iif/osheval.htm
State Participation: Not all state plan states participate in the ODI. The following states did not participate in the 2010 ODI (collection of CY 2009 data), establishment data is not available for these states: Alaska; Oregon; Puerto Rico; South Carolina; Washington; Wyoming.



<https://www.osha.gov/pls/odi/establishment_search.html>




# Download

Download the following file:

* <a href='../../datasets/csv/injuries/injuries.csv' download>injuries.csv <span class="fas fa-download"></span></a>

# Key Descriptions
    
<table class='table table-condensed table-striped table-bordered table-hover'>
<tr>
    <th class=''>Key</th>
    <th class=''>List of...</th>
    <th class=''>Comment</th>
    <th class=''>Example Value</th>
</tr>

<tr>
    <td>year</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>2002</code></td>
</tr>

<tr>
    <td>address.city</td>
    <td>String</td> 
    <td>$MISSING_FIELD</td>
    <td><code>"Cherry Hill"</code></td>
</tr>

<tr>
    <td>address.state</td>
    <td>String</td> 
    <td>$MISSING_FIELD</td>
    <td><code>"NJ"</code></td>
</tr>

<tr>
    <td>address.street</td>
    <td>String</td> 
    <td>$MISSING_FIELD</td>
    <td><code>"100 Dobbs Ln Ste 102"</code></td>
</tr>

<tr>
    <td>address.zip</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>8034</code></td>
</tr>

<tr>
    <td>business.name</td>
    <td>String</td> 
    <td>$MISSING_FIELD</td>
    <td><code>"United States Cold Storage"</code></td>
</tr>

<tr>
    <td>business.second name</td>
    <td>String</td> 
    <td>$MISSING_FIELD</td>
    <td><code>"US Cold"</code></td>
</tr>

<tr>
    <td>industry.division</td>
    <td>String</td> 
    <td>$MISSING_FIELD</td>
    <td><code>"Transportation, Communications, Electric, Gas, And Sanitary Services"</code></td>
</tr>

<tr>
    <td>industry.id</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>4222</code></td>
</tr>

<tr>
    <td>industry.label</td>
    <td>String</td> 
    <td>$MISSING_FIELD</td>
    <td><code>"Refrigerated Warehousing and Storage"</code></td>
</tr>

<tr>
    <td>industry.major_group</td>
    <td>String</td> 
    <td>$MISSING_FIELD</td>
    <td><code>"Motor Freight Transportation And Warehousing"</code></td>
</tr>

<tr>
    <td>statistics.days away</td>
    <td>Float</td> 
    <td>$MISSING_FIELD</td>
    <td><code>0.0</code></td>
</tr>

<tr>
    <td>statistics.days away/restricted/transfer</td>
    <td>Float</td> 
    <td>$MISSING_FIELD</td>
    <td><code>0.0</code></td>
</tr>

<tr>
    <td>statistics.total case rate</td>
    <td>Float</td> 
    <td>$MISSING_FIELD</td>
    <td><code>0.0</code></td>
</tr>

</table>