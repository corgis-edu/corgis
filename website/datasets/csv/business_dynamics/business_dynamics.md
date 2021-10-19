---
permalink: /csv/business_dynamics/
style: dataset
---

<img class="img-thumbnail float-right"
     src="/images/datasets/business-dynamics-icon.png"
     alt="business dynamics icon"
     role="presentation">

# Business Dynamics CSV File

<p class='lead'>From the CORGIS Dataset Project</p>

<span class='text-muted'>By Austin Cory Bart, Joung Min Choi and Bo Guan</span><br>
<span class='text-muted'>Version 3.0.0, created 9/1/2021</span><br>
<span class='text-muted'>Tags: government, united states, us, usa, business, businesses, firms, establishments, jobs, census</span>

# Overview

<p>The Business Dynamics Statistics (BDS) includes measures of establishment openings and closings, firm startups, job creation and destruction by firm size, age, and industrial sector, and several other statistics on business dynamics. The U.S. economy is comprised of over 6 million establishments with paid employees. The population of these businesses is constantly churning -- some businesses grow, others decline and yet others close. New businesses are constantly replenishing this pool. The BDS series provide annual statistics on gross job gains and losses for the entire economy and by industrial sector, state, and MSA. These data track changes in employment at the establishment level, and thus provide a picture of the dynamics underlying aggregate net employment growth.</p>
<p>There is a longstanding interest in the contribution of small businesses to job and productivity growth in the U.S. Some recent research suggests that it is business age rather than size that is the critical factor. The BDS permits exploring the respective contributions of both firm age and size.</p>
<p>BDS is based on data going back through 1976. This allows business dynamics to be tracked, measured and analyzed for young firms in their first critical years as well as for more mature firms including those that are in the process of reinventing themselves in an ever changing economic environment.</p>
<p>If you need help understanding the terms used, check out <a href='https://www.census.gov/ces/dataproducts/bds/definitions.html' target=_blank>these definitions.</a></p>



<https://www.census.gov/data/tables/time-series/econ/bds/bds-tables.html>




# Download

Download the following file:

* <a href='../../datasets/csv/business_dynamics/business_dynamics.csv' download>business_dynamics.csv <span class="fas fa-download"></span></a>

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
    <td>The state that this report was made for (full name, not the two letter abbreviation).</td>
    <td><code>"Alabama"</code></td>
</tr>

<tr>
    <td>Year</td>
    <td>Integer</td> 
    <td>The year that this report was made for.</td>
    <td><code>1978</code></td>
</tr>

<tr>
    <td>Data.DHS Denominator</td>
    <td>Integer</td> 
    <td>The Davis-Haltiwanger-Schuh (DHS) denominator is the two-period trailing moving average of employment, intended to prevent transitory shocks from distorting net growth. In other words, this value roughly represents the employment for the area, but is resistant to sudden, spiking growth.</td>
    <td><code>972627</code></td>
</tr>

<tr>
    <td>Data.Number of Firms</td>
    <td>Integer</td> 
    <td>The number of firms in this state during this year.</td>
    <td><code>54597</code></td>
</tr>

<tr>
    <td>Data.Calculated.Net Job Creation</td>
    <td>Integer</td> 
    <td>The sum of the Job Creation Rate minus the Job Destruction Rate.</td>
    <td><code>74178</code></td>
</tr>

<tr>
    <td>Data.Calculated.Net Job Creation Rate</td>
    <td>Float</td> 
    <td>The sum of the Job Creation Rate and the Job Destruction Rate, minus the Net Job Creation Rate.</td>
    <td><code>7.627</code></td>
</tr>

<tr>
    <td>Data.Calculated.Reallocation Rate</td>
    <td>Float</td> 
    <td>The sum of the Job Creation Rate and the Job Destruction Rate, minus the absolute Net Job Creation Rate.</td>
    <td><code>29.183</code></td>
</tr>

<tr>
    <td>Data.Establishments.Entered</td>
    <td>Integer</td> 
    <td>The number of establishments that entered during this time. Entering occurs when an establishment did not exist in the previous year.</td>
    <td><code>10457</code></td>
</tr>

<tr>
    <td>Data.Establishments.Entered Rate</td>
    <td>Float</td> 
    <td>The number of establishments that entered during this time divided by the number of establishments. Entering occurs when an establishment did not exist in the previous year.</td>
    <td><code>16.375</code></td>
</tr>

<tr>
    <td>Data.Establishments.Exited</td>
    <td>Integer</td> 
    <td>The number of establishments that exited during this time. Exiting occurs when an establishment has positive employment in the previous year and zero this year.</td>
    <td><code>7749</code></td>
</tr>

<tr>
    <td>Data.Establishments.Exited Rate</td>
    <td>Float</td> 
    <td>The number of establishments that exited during this time divided by the number of establishments. Exiting occurs when an establishment has positive employment in the previous year and zero this year.</td>
    <td><code>12.135</code></td>
</tr>

<tr>
    <td>Data.Establishments.Physical Locations</td>
    <td>Integer</td> 
    <td>The number of establishments in this region during this time.</td>
    <td><code>65213</code></td>
</tr>

<tr>
    <td>Data.Firm Exits.Count</td>
    <td>Integer</td> 
    <td>The number of firms that exited this year.</td>
    <td><code>5248</code></td>
</tr>

<tr>
    <td>Data.Firm Exits.Establishment Exit</td>
    <td>Integer</td> 
    <td>The number of establishments exited because of firm deaths.</td>
    <td><code>5329</code></td>
</tr>

<tr>
    <td>Data.Firm Exits.Employments</td>
    <td>Integer</td> 
    <td>The number of employments destroyed as a result of firm deaths.</td>
    <td><code>28257</code></td>
</tr>

<tr>
    <td>Data.Job Creation.Births</td>
    <td>Integer</td> 
    <td>The number of jobs that were created because of firm births in the past year.</td>
    <td><code>76167</code></td>
</tr>

<tr>
    <td>Data.Job Creation.Continuers</td>
    <td>Integer</td> 
    <td>The number of jobs at continuing establishments that were created in the last yaer.</td>
    <td><code>139930</code></td>
</tr>

<tr>
    <td>Data.Job Creation.Count</td>
    <td>Integer</td> 
    <td>The number of jobs that were created in the last year.</td>
    <td><code>216097</code></td>
</tr>

<tr>
    <td>Data.Job Creation.Rate</td>
    <td>Float</td> 
    <td>The number of jobs that were created in the last year divided by the DHS denominator. The result is the rate at which jobs have been created.</td>
    <td><code>22.218</code></td>
</tr>

<tr>
    <td>Data.Job Creation.Rate/Births</td>
    <td>Float</td> 
    <td>The number of jobs that were created because a new firm born in the past year, divided by the DHS denominator. The result is the rate at which jobs have been created because of firm births.</td>
    <td><code>7.831</code></td>
</tr>

<tr>
    <td>Data.Job Destruction.Continuers</td>
    <td>Integer</td> 
    <td>The number of jobs at continuing establishments that were destroyed in the last year.</td>
    <td><code>81829</code></td>
</tr>

<tr>
    <td>Data.Job Destruction.Count</td>
    <td>Integer</td> 
    <td>The number of jobs that were destroyed in the last year.</td>
    <td><code>141919</code></td>
</tr>

<tr>
    <td>Data.Job Destruction.Deaths</td>
    <td>Integer</td> 
    <td>The number of jobs that were destroyed because of firm deaths that were destroyed in the last year.</td>
    <td><code>60090</code></td>
</tr>

<tr>
    <td>Data.Job Destruction.Rate</td>
    <td>Float</td> 
    <td>The number of jobs that were destroyed in the last year divided by the DHS denominator. The result is the rate at which jobs have been destroyed.</td>
    <td><code>14.591</code></td>
</tr>

<tr>
    <td>Data.Job Destruction.Rate/Deaths</td>
    <td>Float</td> 
    <td>The number of jobs that were destroyed because of firm deaths that were destroyed in the last year divided by the DHS denominator. The result is the rate at which jobs have been destroyed because of firm death.</td>
    <td><code>6.178</code></td>
</tr>

</table>