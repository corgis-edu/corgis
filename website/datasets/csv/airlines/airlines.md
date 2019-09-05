---
permalink: /csv/airlines/
style: dataset
---

<img class="img-thumbnail float-right"
     src="/images/datasets/airlines-splash.png"
     alt="airlines icon"
     role="presentation">

# Airlines CSV File

<p class='lead'>From the CORGIS Dataset Project</p>

<span class='text-muted'>By Austin Cory Bart <acbart@vt.edu></span><br>
<span class='text-muted'>Version 2.0.0, created 3/27/2015</span><br>
<span class='text-muted'>Tags: airplane, airports, travel, plane, air, flights, delays, national, united states, transportation</span>

# Overview

This dataset is all about flights in the united states, including information about the number, length, and type of delays. The data is reported for individual months at every major airport for every carrier.
Additional information is available: <a href="http://www.rita.dot.gov/bts/help/aviation/html/understanding.html">http://www.rita.dot.gov/bts/help/aviation/html/understanding.html</a>





# Download

Download the following file:

* <a href='../../datasets/csv/airlines/airlines.csv' download>airlines.csv <span class="fas fa-download"></span></a>

# Key Descriptions
    
<table class='table table-condensed table-striped table-bordered table-hover'>
<tr>
    <th class=''>Key</th>
    <th class=''>List of...</th>
    <th class=''>Comment</th>
    <th class=''>Example Value</th>
</tr>

<tr>
    <td>Airport.Code</td>
    <td>String</td> 
    <td>The 3 letter code for this airport, assigned by IATA. For more information, consult this <a href='https://en.wikipedia.org/wiki/List_of_airports_by_IATA_code'>List of Airport Codes</a>.</td>
    <td><code>"ATL"</code></td>
</tr>

<tr>
    <td>Airport.Name</td>
    <td>String</td> 
    <td>The full name of this airport.</td>
    <td><code>"Atlanta, GA: Hartsfield-Jackson Atlanta International"</code></td>
</tr>

<tr>
    <td>Time.Label</td>
    <td>String</td> 
    <td>The "year/month" reported as a string, to make it easier to sort by time periods.</td>
    <td><code>"2003/06"</code></td>
</tr>

<tr>
    <td>Time.Month</td>
    <td>Integer</td> 
    <td>The reported month as a number. 0 is January, 1 is February, etc.</td>
    <td><code>6</code></td>
</tr>

<tr>
    <td>Time.Month Name</td>
    <td>String</td> 
    <td>$MISSING_FIELD</td>
    <td><code>"June"</code></td>
</tr>

<tr>
    <td>Time.Year</td>
    <td>Integer</td> 
    <td>The reported year as a 4-digit number.</td>
    <td><code>2003</code></td>
</tr>

<tr>
    <td>Statistics.# of Delays.Carrier</td>
    <td>Integer</td> 
    <td>The number of delays and cancellations due to circumstances within the airline's control (e.g. maintenance or crew problems, aircraft cleaning, baggage loading, fueling, etc.) in this month.</td>
    <td><code>1009</code></td>
</tr>

<tr>
    <td>Statistics.# of Delays.Late Aircraft</td>
    <td>Integer</td> 
    <td>The number of delays and cancellations caused by a previous flight with the same aircraft arriving late, causing the present flight to depart late in this month.</td>
    <td><code>1275</code></td>
</tr>

<tr>
    <td>Statistics.# of Delays.National Aviation System</td>
    <td>Integer</td> 
    <td>The number of delays and cancellations attributable to the national aviation system that refer to a broad set of conditions, such as non-extreme weather conditions, airport operations, heavy traffic volume, and air traffic control in this month.</td>
    <td><code>3217</code></td>
</tr>

<tr>
    <td>Statistics.# of Delays.Security</td>
    <td>Integer</td> 
    <td>Number of delays or cancellations caused by evacuation of a terminal or concourse, re-boarding of aircraft because of security breach, inoperative screening equipment and/or long lines in excess of 29 minutes at screening areas in this month.</td>
    <td><code>17</code></td>
</tr>

<tr>
    <td>Statistics.# of Delays.Weather</td>
    <td>Integer</td> 
    <td>Number of delays or cancellations caused by significant meteorological conditions (actual or forecasted) that, in the judgment of the carrier, delays or prevents the operation of a flight such as tornado, blizzard or hurricane in this month.</td>
    <td><code>328</code></td>
</tr>

<tr>
    <td>Statistics.Carriers.Names</td>
    <td>String</td> 
    <td>The full names of the carriers that reported in.</td>
    <td><code>"American Airlines Inc.,JetBlue Airways,Continental Air Lines Inc.,Delta Air Lines Inc.,Atlantic Southeast Airlines,AirTran Airways Corporation,America West Airlines Inc.,Northwest Airlines Inc.,ExpressJet Airlines Inc.,United Air Lines Inc.,US Airways Inc."</code></td>
</tr>

<tr>
    <td>Statistics.Carriers.Total</td>
    <td>Integer</td> 
    <td>The number of carriers that reported flight information during this time period and at this location.</td>
    <td><code>11</code></td>
</tr>

<tr>
    <td>Statistics.Flights.Cancelled</td>
    <td>Integer</td> 
    <td>The number of flights that were cancelled in this month.</td>
    <td><code>216</code></td>
</tr>

<tr>
    <td>Statistics.Flights.Delayed</td>
    <td>Integer</td> 
    <td>The number of flights that were delayed in this month.</td>
    <td><code>5843</code></td>
</tr>

<tr>
    <td>Statistics.Flights.Diverted</td>
    <td>Integer</td> 
    <td>The number of flights that were diverted in this month.</td>
    <td><code>27</code></td>
</tr>

<tr>
    <td>Statistics.Flights.On Time</td>
    <td>Integer</td> 
    <td>The number of flights that were on time in this month.</td>
    <td><code>23974</code></td>
</tr>

<tr>
    <td>Statistics.Flights.Total</td>
    <td>Integer</td> 
    <td>The total number of flights in this month.</td>
    <td><code>30060</code></td>
</tr>

<tr>
    <td>Statistics.Minutes Delayed.Carrier</td>
    <td>Integer</td> 
    <td>The number of minutes delayed due to circumstances within the airline's control (e.g. maintenance or crew problems, aircraft cleaning, baggage loading, fueling, etc.) in this month.</td>
    <td><code>61606</code></td>
</tr>

<tr>
    <td>Statistics.Minutes Delayed.Late Aircraft</td>
    <td>Integer</td> 
    <td>The number of minutes delayed caused by a previous flight with the same aircraft arriving late, causing the present flight to depart late in this month.</td>
    <td><code>68335</code></td>
</tr>

<tr>
    <td>Statistics.Minutes Delayed.National Aviation System</td>
    <td>Integer</td> 
    <td>The number of minutes delayed attributable to the national aviation system that refer to a broad set of conditions, such as non-extreme weather conditions, airport operations, heavy traffic volume, and air traffic control in this month.</td>
    <td><code>118831</code></td>
</tr>

<tr>
    <td>Statistics.Minutes Delayed.Security</td>
    <td>Integer</td> 
    <td>Number of minutes delayed caused by evacuation of a terminal or concourse, re-boarding of aircraft because of security breach, inoperative screening equipment and/or long lines in excess of 29 minutes at screening areas in this month.</td>
    <td><code>518</code></td>
</tr>

<tr>
    <td>Statistics.Minutes Delayed.Total</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>268764</code></td>
</tr>

<tr>
    <td>Statistics.Minutes Delayed.Weather</td>
    <td>Integer</td> 
    <td>Number of of minutes delayed caused by significant meteorological conditions (actual or forecasted) that, in the judgment of the carrier, delays or prevents the operation of a flight such as tornado, blizzard or hurricane in this month.</td>
    <td><code>19474</code></td>
</tr>

</table>