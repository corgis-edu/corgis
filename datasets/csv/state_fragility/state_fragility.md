---
permalink: /csv/state_fragility/
style: dataset
---

<img class="img-thumbnail float-right"
     src="/images/datasets/state-fragility-icon.png"
     alt="state fragility icon"
     role="presentation">

# State Fragility CSV File

<p class='lead'>From the CORGIS Dataset Project</p>

<span class='text-muted'>By Ryan Whitcomb, Joung Min Choi, Bo Guan</span><br>
<span class='text-muted'>Version 3.0.0, created 9/16/2021</span><br>
<span class='text-muted'>Tags: world, countries, security, politics, economy, society, effectiveness, legitimacy</span>

# Overview

The Center for Systemic Peace was founded in 1997 to engage in global systems analysis to minimize the effects of political violence in the world as a whole.  The following data set shows the state fragility for countries with a population greater than 500,000 in 2013.  The State Fragility Index scores countries on two main categories, effectiveness and legitimacy.  These are then broken down into four dimensions: Security, Political, Economic, and Social.  The State Fragility Index score is the sum of the individual country's effectiveness score and their legitimacy score.  Each of these scores are the summation of the four dimensions within the category.


<http://www.systemicpeace.org/inscrdata.html>




# Download

Download the following file:

* <a href='../../datasets/csv/state_fragility/state_fragility.csv' download>state_fragility.csv <span class="fas fa-download"></span></a>

# Key Descriptions
    
<table class='table table-condensed table-striped table-bordered table-hover'>
<tr>
    <th class=''>Key</th>
    <th class=''>List of...</th>
    <th class=''>Comment</th>
    <th class=''>Example Value</th>
</tr>

<tr>
    <td>Country</td>
    <td>String</td> 
    <td>country name</td>
    <td><code>"Afghanistan"</code></td>
</tr>

<tr>
    <td>Year</td>
    <td>Integer</td> 
    <td>year</td>
    <td><code>1995</code></td>
</tr>

<tr>
    <td>Metrics.State Fragility Index</td>
    <td>Integer</td> 
    <td>a score for combining effectiveness score and legitimacy score</td>
    <td><code>25</code></td>
</tr>

<tr>
    <td>Metrics.Effectiveness.Economic Effectiveness</td>
    <td>Integer</td> 
    <td>a score for gross domestic product per capita (4 = less than $500.00; 3 = $500.00 to $1199.99; 2 = $1200.00 to $2999.99; 1 = $3000.00 to $7499.99; and 0 = greater than or equal to $7500)</td>
    <td><code>4</code></td>
</tr>

<tr>
    <td>Metrics.Effectiveness.Effectiveness Score</td>
    <td>Integer</td> 
    <td>Effectiveness score (= Security Effectiveness + Political Effectiveness + Economic Effectiveness + Social Effectiveness)</td>
    <td><code>13</code></td>
</tr>

<tr>
    <td>Metrics.Effectiveness.Political Effectiveness</td>
    <td>Integer</td> 
    <td>a score for regime/governance stability</td>
    <td><code>3</code></td>
</tr>

<tr>
    <td>Metrics.Effectiveness.Security Effectiveness</td>
    <td>Integer</td> 
    <td>a score for general security and vulnerability to political
violence</td>
    <td><code>3</code></td>
</tr>

<tr>
    <td>Metrics.Effectiveness.Social Effectiveness</td>
    <td>Integer</td> 
    <td>a score for social effectiveness. (Reported Human Development Index values are converted according to a four- point fragility scale based on the cut-points of the lower three HDI quintiles in the baseline year, 2004. 3 = less than or equal to .400; 2 = greater than .400 and less than or equal to .600; 1 = greater than .600 and less than or equal to .700; and 0 = greater than .700.)</td>
    <td><code>3</code></td>
</tr>

<tr>
    <td>Metrics.Legitimacy.Economic Legitimacy</td>
    <td>Integer</td> 
    <td>a score for share of export trade in manufactured goods. (The manufacturing percentage of merchandise exports is then converted to a four-point fragility score, where: 3 = less than or equal to 10; 2 = greater than 10 and less than or equal to 25; 1 = greater than 25 and less than or equal to 40; and 0 = greater than 40.)</td>
    <td><code>3</code></td>
</tr>

<tr>
    <td>Metrics.Legitimacy.Legitimacy Score</td>
    <td>Integer</td> 
    <td>Legitimacy score (= Security Legitimacy + Political Legitimacy + Economic Legitimacy + Social Legitimacy)</td>
    <td><code>12</code></td>
</tr>

<tr>
    <td>Metrics.Legitimacy.Political Legitimacy</td>
    <td>Integer</td> 
    <td>a score for regime/governance inclusion</td>
    <td><code>3</code></td>
</tr>

<tr>
    <td>Metrics.Legitimacy.Security Legitimacy</td>
    <td>Integer</td> 
    <td>a score for state repression (1: "no repression" to 5: "systemic, collective repression.")</td>
    <td><code>3</code></td>
</tr>

<tr>
    <td>Metrics.Legitimacy.Social Legitimacy</td>
    <td>Integer</td> 
    <td>a score for social legitimacy (This indicator is based on the infant mortality rate (number of deaths of infants under one year of age from a cohort of 1,000 live births), with values converted to a four-point fragility scale based on the upper cut-points of the lower three quintiles of the infant mortality rates in the baseline year, 2004. The Social Legitimacy Score is assigned as follows: 3 = greater than 75.00; 2 = less than or equal to 75.00 and greater than 45.00; 1 = less than or equal to 45.00 and greater than 20.00; and 0 = less than or equal to 20.00.)</td>
    <td><code>3</code></td>
</tr>

</table>