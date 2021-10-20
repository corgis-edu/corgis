---
permalink: /blockpy/state_crime/
style: dataset
---

<img class="img-thumbnail float-right"
     src="/images/datasets/state-crime-splash.png"
     alt="state crime icon"
     role="presentation">

# State Crime BlockPy Library

<p class='lead'>From the CORGIS Dataset Project</p>

<span class='text-muted'>By Ryan Whitcomb, Joung Min Choi and Bo Guan</span><br>
<span class='text-muted'>Version 3.0.0, created 10/19/2021</span><br>
<span class='text-muted'>Tags: crime, burglary, larceny, motor, property, violent, assault, murder, rape, robbery</span>

# Overview

From the Unified Crime Reporting Statistics and under the collaboration of the U.S. Department of Justice and the Federal Bureau of Investigation information crime statistics are available for public review.  The following data set has information on the crime rates and totals for states across the United States for a wide range of years.  The crime reports are divided into two main categories: property and violent crime.  Property crime refers to burglary, larceny, and motor related crime while violent crime refers to assault, murder, rape, and robbery. These reports go from 1960 to 2019.



<https://ucr.fbi.gov/crime-in-the-u.s/2019/crime-in-the-u.s.-2019/downloads/download-printable-files >




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
    <td>The long name of the state that this report was made for.</td>
    <td><code>"Alabama"</code></td>
</tr>

<tr>
    <td>Year</td>
    <td>Integer</td> 
    <td>The year that this report was made in.</td>
    <td><code>1960</code></td>
</tr>

<tr>
    <td>Data.Population</td>
    <td>Integer</td> 
    <td>The number of people living in this state at the time the report was created.</td>
    <td><code>3266740</code></td>
</tr>

<tr>
    <td>Data.Rates.Property.All</td>
    <td>Float</td> 
    <td>Rates are the number of reported offenses per 100,000 population. This property reflects all of the Property-related crimes, including burglaries, larcenies, and motor crimes.</td>
    <td><code>1035.4</code></td>
</tr>

<tr>
    <td>Data.Rates.Property.Burglary</td>
    <td>Float</td> 
    <td>Rates are the number of reported offenses per 100,000 population. This property reflects the number of burglaries, or entry into a building illegally with intent to commit a crime, especially theft.</td>
    <td><code>355.9</code></td>
</tr>

<tr>
    <td>Data.Rates.Property.Larceny</td>
    <td>Float</td> 
    <td>Rates are the number of reported offenses per 100,000 population. This property reflects the number of burglaries, or theft of personal property.</td>
    <td><code>592.1</code></td>
</tr>

<tr>
    <td>Data.Rates.Property.Motor</td>
    <td>Float</td> 
    <td>Rates are the number of reported offenses per 100,000 population. This property reflects the number of crimes where a motor vehicle was stolen.</td>
    <td><code>87.3</code></td>
</tr>

<tr>
    <td>Data.Rates.Violent.All</td>
    <td>Float</td> 
    <td>Rates are the number of reported offenses per 100,000 population. This property reflects all of the Violent crimes, including assaults, murders, rapes, and robberies.</td>
    <td><code>186.6</code></td>
</tr>

<tr>
    <td>Data.Rates.Violent.Assault</td>
    <td>Float</td> 
    <td>Rates are the number of reported offenses per 100,000 population. This property reflects the number of crimes where someone made an attempt to initiate harmful or offensive contact with a person, or made a threat to do so.</td>
    <td><code>138.1</code></td>
</tr>

<tr>
    <td>Data.Rates.Violent.Murder</td>
    <td>Float</td> 
    <td>Rates are the number of reported offenses per 100,000 population. This property reflects the number of crimes where someone committed the unlawful killing of another human being without justification.</td>
    <td><code>12.4</code></td>
</tr>

<tr>
    <td>Data.Rates.Violent.Rape</td>
    <td>Float</td> 
    <td>Rates are the number of reported offenses per 100,000 population. This property reflects the number of crimes where someone committed rape. The FBI UCR definition of rape, before 2013, is the carnal knowledge of a female forcibly and against her will.</td>
    <td><code>8.6</code></td>
</tr>

<tr>
    <td>Data.Rates.Violent.Robbery</td>
    <td>Float</td> 
    <td>Rates are the number of reported offenses per 100,000 population. This property reflects the number of crimes where someone took or attempted to take anything of value by force or threat of force or by putting the victim in fear.</td>
    <td><code>27.5</code></td>
</tr>

<tr>
    <td>Data.Totals.Property.All</td>
    <td>Integer</td> 
    <td>This property reflects all of the Property-related crimes, including burglaries, larcenies, and motor crimes.</td>
    <td><code>33823</code></td>
</tr>

<tr>
    <td>Data.Totals.Property.Burglary</td>
    <td>Integer</td> 
    <td>This property reflects the number of burglaries, or entry into a building illegally with intent to commit a crime, especially theft.</td>
    <td><code>11626</code></td>
</tr>

<tr>
    <td>Data.Totals.Property.Larceny</td>
    <td>Integer</td> 
    <td>This property reflects the number of burglaries, or theft of personal property.</td>
    <td><code>19344</code></td>
</tr>

<tr>
    <td>Data.Totals.Property.Motor</td>
    <td>Integer</td> 
    <td>This property reflects the number of crimes where a motor vehicle was stolen.</td>
    <td><code>2853</code></td>
</tr>

<tr>
    <td>Data.Totals.Violent.All</td>
    <td>Integer</td> 
    <td>This property reflects all of the Violent crimes, including assaults, murders, rapes, and robberies.</td>
    <td><code>6097</code></td>
</tr>

<tr>
    <td>Data.Totals.Violent.Assault</td>
    <td>Integer</td> 
    <td>This property reflects the number of crimes where someone made an attempt to initiate harmful or offensive contact with a person, or made a threat to do so.</td>
    <td><code>4512</code></td>
</tr>

<tr>
    <td>Data.Totals.Violent.Murder</td>
    <td>Integer</td> 
    <td>This property reflects the number of crimes where someone committed the unlawful killing of another human being without justification.</td>
    <td><code>406</code></td>
</tr>

<tr>
    <td>Data.Totals.Violent.Rape</td>
    <td>Integer</td> 
    <td>This property reflects the number of crimes where someone committed rape. The FBI UCR definition of rape, before 2013, is the carnal knowledge of a female forcibly and against her will.</td>
    <td><code>281</code></td>
</tr>

<tr>
    <td>Data.Totals.Violent.Robbery</td>
    <td>Integer</td> 
    <td>This property reflects the number of crimes where someone took or attempted to take anything of value by force or threat of force or by putting the victim in fear.</td>
    <td><code>898</code></td>
</tr>

</table>