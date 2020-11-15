---
permalink: /json/police_shootings/
style: dataset
---

<img class="img-thumbnail float-right"
     src="/images/datasets/police-shootings-icon.png"
     alt="police shootings icon"
     role="presentation">

# Police Shootings JSON File

<p class='lead'>From the CORGIS Dataset Project</p>

<span class='text-muted'>By Dennis Kafura (kafura@vt.edu)</span><br>
<span class='text-muted'>Version 0.0.1, created 5/31/2019</span><br>
<span class='text-muted'>Tags: violence, crime, violent, police, shootings, race, location, time</span>

# Overview

https://www.washingtonpost.com/national/how-the-washington-post-is-examining-police-shootings-in-the-united-states/2016/07/07/d9c52238-43ad-11e6-8856-f26de2537a9d_story.html


<https://github.com/washingtonpost/data-police-shootings>




# Download

Download the following file:

* <a href='../../datasets/json/police_shootings/police_shootings.json' download>police_shootings.json <span class="fas fa-download"></span></a>

# Key Descriptions
    
<table class='table table-condensed table-striped table-bordered table-hover'>
<tr>
    <th class=''>Key</th>
    <th class=''>List of...</th>
    <th class=''>Comment</th>
    <th class=''>Example Value</th>
</tr>

<tr>
    <td>Person.Name</td>
    <td>String</td> 
    <td>Full name of the individual or "Unknown" if not reported</td>
    <td><code>"Tim Elliot"</code></td>
</tr>

<tr>
    <td>Person.Age</td>
    <td>Integer</td> 
    <td>Age in years of the individual or 0 (zero) if not reported</td>
    <td><code>53</code></td>
</tr>

<tr>
    <td>Person.Gender</td>
    <td>String</td> 
    <td>One of Male, Female, or Unknown</td>
    <td><code>"Male"</code></td>
</tr>

<tr>
    <td>Person.Race</td>
    <td>String</td> 
    <td>One of Asian, African American, White, Hispanic, Native American, Other, or Unknown.</td>
    <td><code>"Asian"</code></td>
</tr>

<tr>
    <td>Incident.Date.Month</td>
    <td>Integer</td> 
    <td>Month (1-12) in which the shooting occurred</td>
    <td><code>1</code></td>
</tr>

<tr>
    <td>Incident.Date.Day</td>
    <td>Integer</td> 
    <td>Day (1-31) in which the shooting occurred</td>
    <td><code>2</code></td>
</tr>

<tr>
    <td>Incident.Date.Year</td>
    <td>Integer</td> 
    <td>Year (2015-2019) in which the shooting occurred</td>
    <td><code>2015</code></td>
</tr>

<tr>
    <td>Incident.Date.Full</td>
    <td>String</td> 
    <td>Date in which shooting occurred (Year/Month/Day)</td>
    <td><code>"2015/01/02"</code></td>
</tr>

<tr>
    <td>Incident.Location.City</td>
    <td>String</td> 
    <td>Name of city in which the shooting occurred</td>
    <td><code>"Shelton"</code></td>
</tr>

<tr>
    <td>Incident.Location.State</td>
    <td>String</td> 
    <td>Name of U.S. State in which the shooting occurred</td>
    <td><code>"WA"</code></td>
</tr>

<tr>
    <td>Factors.Armed</td>
    <td>String</td> 
    <td>Description of any weapon carried by the person (.e., "gun", "knife", "unarmed"); value is "unknown" if not reported.</td>
    <td><code>"gun"</code></td>
</tr>

<tr>
    <td>Factors.Mental-Illness</td>
    <td>Boolean</td> 
    <td>True if factors of mental illness were perceived in the person; False otherwise</td>
    <td><code>True</code></td>
</tr>

<tr>
    <td>Factors.Threat-Level</td>
    <td>String</td> 
    <td>Threat of person as perceived by police. One of "attack", "undetermined", or "other"; value is "unknown" if not reported.</td>
    <td><code>"attack"</code></td>
</tr>

<tr>
    <td>Factors.Fleeing</td>
    <td>String</td> 
    <td>Means by which person was fleeing (e.g., "Car", "Foot") or "Not fleeing"; value is "unknown" if not reported.</td>
    <td><code>"Not fleeing"</code></td>
</tr>

<tr>
    <td>Shooting.Manner</td>
    <td>String</td> 
    <td>Manner of person's death: one of "shot" or "shot and Tasered".</td>
    <td><code>"shot"</code></td>
</tr>

<tr>
    <td>Shooting.Body-Camera</td>
    <td>Boolean</td> 
    <td>True if police body camera recorded incident; False otherwise.</td>
    <td><code>True</code></td>
</tr>

</table>