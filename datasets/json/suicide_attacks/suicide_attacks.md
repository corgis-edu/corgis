---
permalink: /json/suicide_attacks/
style: dataset
---

<img class="img-thumbnail float-right"
     src="/images/datasets/suicide-attacks-icon.png"
     alt="suicide attacks icon"
     role="presentation">

# Suicide Attacks JSON File

<p class='lead'>From the CORGIS Dataset Project</p>

<span class='text-muted'>By Austin Cory Bart <acbart@vt.edu>, Joung Min Choi <joungmin@vt.edu>, Bo Guan <jasonguan0107@vt.edu></span><br>
<span class='text-muted'>Version 3.0.0, created 9/20/2021</span><br>
<span class='text-muted'>Tags: global, attack, damage, kill, hurt, destroy, pain, suffering, terror, terrorism, religion, warfare, war, car, bomb, gun, shooting</span>

# Overview

The Chicago Project on Security and Terrorism (CPOST) maintains a searchable database on all suicide attacks from 1982 through October 2020. The database includes information about the location of attacks, the target type, the weapon used, and systematic information on the demographic and general biographical characteristics of suicide attackers. The database expands the breadth of the data available in English using native language sources (e.g., Arabic, Hebrew, Russian, Tamil) that are likely to have the most extensive relevant information.
The current CPOST-SAD release contains the universe of suicide attacks from 1982 through September 2015, a total of 4,814 attacks in over 40 countries. The CPOST Suicide Attack Database (CPOST-SAD) contains data on the universe of suicide attacks. For each attack, the database includes information about the geographic location, target classification, and weapon(s) used, as well as systematic information on the demographic and general biographical characteristics of suicide attackers. More information about the coding and methodology is available on the CPOST website below.
Note that multiple attackers or targets are collapsed into a single record for simplicity's sake.


<Chicago Project on Security and Terrorism (CPOST). 2020. Suicide Attack Database (October, 2020 Release). [Data File]. Retrieved from https://cpost.uchicago.edu/research/suicide_attacks/database_on_suicide_attacks/>




# Download

Download the following file:

* <a href='../../datasets/json/suicide_attacks/suicide_attacks.json' download>suicide_attacks.json <span class="fas fa-download"></span></a>

# Key Descriptions
    
<table class='table table-condensed table-striped table-bordered table-hover'>
<tr>
    <th class=''>Key</th>
    <th class=''>List of...</th>
    <th class=''>Comment</th>
    <th class=''>Example Value</th>
</tr>

<tr>
    <td>groups</td>
    <td>String</td> 
    <td>Group��s name</td>
    <td><code>"Islamic State"</code></td>
</tr>

<tr>
    <td>claim</td>
    <td>String</td> 
    <td>Claim status: Claimed, Denied, Suspected, Unclaimed</td>
    <td><code>"Suspected"</code></td>
</tr>

<tr>
    <td>status</td>
    <td>String</td> 
    <td>Status of the attack: Confirmed Suicide or Possible</td>
    <td><code>"Confirmed Suicide"</code></td>
</tr>

<tr>
    <td>statistics.sources</td>
    <td>Integer</td> 
    <td>Number of sources found for each attack</td>
    <td><code>2</code></td>
</tr>

<tr>
    <td>date.year</td>
    <td>Integer</td> 
    <td>Year of attack</td>
    <td><code>2015</code></td>
</tr>

<tr>
    <td>date.month</td>
    <td>Integer</td> 
    <td>Month of attack</td>
    <td><code>6</code></td>
</tr>

<tr>
    <td>date.day</td>
    <td>Integer</td> 
    <td>Day of the attack</td>
    <td><code>2</code></td>
</tr>

<tr>
    <td>statistics.# wounded_low</td>
    <td>Integer</td> 
    <td>Low estimate of wounded people</td>
    <td><code>8</code></td>
</tr>

<tr>
    <td>statistics.# wounded_high</td>
    <td>Integer</td> 
    <td>High estimate of wounded people</td>
    <td><code>8</code></td>
</tr>

<tr>
    <td>statistics.# killed_low</td>
    <td>Integer</td> 
    <td>Low estimate of fatalities</td>
    <td><code>5</code></td>
</tr>

<tr>
    <td>statistics.# killed_high</td>
    <td>Integer</td> 
    <td>High estimate of fatalities</td>
    <td><code>5</code></td>
</tr>

<tr>
    <td>statistics.# killed_low_civilian</td>
    <td>Integer</td> 
    <td>Low estimate of civilian fatalities</td>
    <td><code>0</code></td>
</tr>

<tr>
    <td>statistics.# killed_high_civilian</td>
    <td>Integer</td> 
    <td>High estimate of civilian fatalities</td>
    <td><code>0</code></td>
</tr>

<tr>
    <td>statistics.# killed_low_political</td>
    <td>Integer</td> 
    <td>Low estimate of political fatalities</td>
    <td><code>0</code></td>
</tr>

<tr>
    <td>statistics.# killed_high_political</td>
    <td>Integer</td> 
    <td>High estimate of political fatalities</td>
    <td><code>0</code></td>
</tr>

<tr>
    <td>statistics.# killed_low_security</td>
    <td>Integer</td> 
    <td>Low estimate of security fatalities</td>
    <td><code>5</code></td>
</tr>

<tr>
    <td>statistics.# killed_high_security</td>
    <td>Integer</td> 
    <td>High estimate of security fatalities</td>
    <td><code>5</code></td>
</tr>

<tr>
    <td>statistics.# belt_bomb</td>
    <td>Integer</td> 
    <td>Number of belt bombs used</td>
    <td><code>0</code></td>
</tr>

<tr>
    <td>statistics.# truck_bomb</td>
    <td>Integer</td> 
    <td>Number of truck bombs used</td>
    <td><code>0</code></td>
</tr>

<tr>
    <td>statistics.# car_bomb</td>
    <td>Integer</td> 
    <td>Number of car bombs used</td>
    <td><code>1</code></td>
</tr>

<tr>
    <td>statistics.# weapon_oth</td>
    <td>Integer</td> 
    <td>Number of other weapons used</td>
    <td><code>0</code></td>
</tr>

<tr>
    <td>statistics.# weapon_unk</td>
    <td>Integer</td> 
    <td>Number of unknown weapons used</td>
    <td><code>0</code></td>
</tr>

<tr>
    <td>target.weapon</td>
    <td>String</td> 
    <td>Weapon (car bomb, belt bomb etc.) used</td>
    <td><code>"Car bomb"</code></td>
</tr>

<tr>
    <td>target.region</td>
    <td>String</td> 
    <td>Region where attack took place</td>
    <td><code>"Asia"</code></td>
</tr>

<tr>
    <td>target.subregion</td>
    <td>String</td> 
    <td>Subregion where attack took place</td>
    <td><code>"Western Asia"</code></td>
</tr>

<tr>
    <td>target.country</td>
    <td>String</td> 
    <td>Country where attack took place</td>
    <td><code>"Syria"</code></td>
</tr>

<tr>
    <td>target.province</td>
    <td>String</td> 
    <td>Province/State where attack took place</td>
    <td><code>"Hasaka (Al Haksa)"</code></td>
</tr>

<tr>
    <td>target.city</td>
    <td>String</td> 
    <td>City, village or district where attack took place</td>
    <td><code>"Al Hasakah"</code></td>
</tr>

<tr>
    <td>target.location</td>
    <td>String</td> 
    <td>Specific location targeted</td>
    <td><code>"close to a children's hospital"</code></td>
</tr>

<tr>
    <td>target.latitude</td>
    <td>String</td> 
    <td>City��s Latitude</td>
    <td><code>"36.483333"</code></td>
</tr>

<tr>
    <td>target.longtitude</td>
    <td>String</td> 
    <td>City��s Longitude</td>
    <td><code>"40.75"</code></td>
</tr>

<tr>
    <td>target.desc</td>
    <td>String</td> 
    <td>The intended target of the attack</td>
    <td><code>"Syrian Army checkpoint"</code></td>
</tr>

<tr>
    <td>target.type</td>
    <td>String</td> 
    <td>Type of target attacked (Civilian, Political, Security)</td>
    <td><code>"Security"</code></td>
</tr>

<tr>
    <td>target.nationality</td>
    <td>String</td> 
    <td>Target��s nationality</td>
    <td><code>"Syrian"</code></td>
</tr>

<tr>
    <td>statistics.# attackers</td>
    <td>Integer</td> 
    <td>Number of suicide attackers involved</td>
    <td><code>1</code></td>
</tr>

<tr>
    <td>statistics.# female_attackers</td>
    <td>Integer</td> 
    <td>Number of female attackers</td>
    <td><code>0</code></td>
</tr>

<tr>
    <td>statistics.# male_attackers</td>
    <td>Integer</td> 
    <td>Number of male attackers</td>
    <td><code>0</code></td>
</tr>

<tr>
    <td>statistics.# unknown_attackers</td>
    <td>Integer</td> 
    <td>Number of attackers where gender is unknown </td>
    <td><code>1</code></td>
</tr>

<tr>
    <td>attacker.gender</td>
    <td>String</td> 
    <td>Attacker��s gender</td>
    <td><code>"Unknown"</code></td>
</tr>

</table>