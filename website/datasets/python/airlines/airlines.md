---
permalink: /python/airlines/
style: dataset
---



<img class="img-thumbnail float-right"
     src="/images/datasets/airlines-splash.png"
     alt="airlines icon"
     role="presentation">

# Airlines Python Library

<p class='lead'>From the CORGIS Dataset Project</p>

<span class='text-muted'>By Austin Cory Bart <acbart@vt.edu></span><br>
<span class='text-muted'>Version 2.0.0, created 3/27/2015</span><br>
<span class='text-muted'>Tags: airplane, airports, travel, plane, air, flights, delays, national, united states, transportation</span>

# Overview

This dataset is all about flights in the united states, including information about the number, length, and type of delays. The data is reported for individual months at every major airport for every carrier.
Additional information is available: <a href="http://www.rita.dot.gov/bts/help/aviation/html/understanding.html">http://www.rita.dot.gov/bts/help/aviation/html/understanding.html</a>





# Explore Structure

Each row represents *a report from an airport aggregated over each month since 2003*.



<button type='button'
        class='btn btn-info'
        id='btn-explore'>Explore airlines data</button>

<script>
$(document).ready(function() {
    $("#btn-explore").click(function() {
        $( "#explore" ).dialog("open")
                       .css({'max-height':"400px", overflow:"auto"});
        $('.ui-dialog :button').blur();
    });
});
</script>

<div id='explore' title='List'>
    <table class='table table-condensed table-striped table-bordered' >
        <tr> <th>Index</th> <th>Type</th> <th>Example Value</th></tr>
        <tr> <td>0</td>
             <td>dict</td>
             <td><a class='dialog-opener' id='btn-explore-'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a></td>
        </tr>
        <tr> <td>1</td> <td>dict</td> <td><em>(same structure)</em></td></tr>
        <tr> <td>2</td> <td>dict</td> <td><em>(same structure)</em></td></tr>
        <tr> <td>...</td> <td>...</td> <td>...</td></tr>
    </table>
</div>

<script>
$(document).ready(function() {
    $( "#explore" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    $("#btn-explore-").click(function() {
        $( "#explore-" ).dialog("open").css({'max-height':"400px", overflow:"auto"});
        $('.ui-dialog :button').blur();
    });
});
</script>


<div id='explore-' title='Dictionary (3 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Airport"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Airport'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Time"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Time'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Statistics"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Statistics'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
    </table>
</div>

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Airport").click(function() {
        $( "#explore-Airport" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Time").click(function() {
        $( "#explore-Time" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Statistics").click(function() {
        $( "#explore-Statistics" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Airport' title='Dictionary (2 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Code"</code></td> 
             <td><span data-toggle="tooltip"
                       title='String (text)'>
                       str</span></td> 
             <td>
             
                <code>"ATL"</code>
             
                
             </td> 
             <td>The 3 letter code for this airport, assigned by IATA. For more information, consult this <a href='https://en.wikipedia.org/wiki/List_of_airports_by_IATA_code'>List of Airport Codes</a>.</td> </tr>
        
        <tr> <td><code>"Name"</code></td> 
             <td><span data-toggle="tooltip"
                       title='String (text)'>
                       str</span></td> 
             <td>
             
                <code>"Atlanta, GA: Hartsfield-Jackson Atlanta International"</code>
             
                
             </td> 
             <td>The full name of this airport.</td> </tr>
        
    </table>
</div>

    

    

<script>
$(document).ready(function() {
    $( "#explore-Airport" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Airport-Code").click(function() {
        $( "#explore-Airport-Code" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Airport-Name").click(function() {
        $( "#explore-Airport-Name" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Time' title='Dictionary (4 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Label"</code></td> 
             <td><span data-toggle="tooltip"
                       title='String (text)'>
                       str</span></td> 
             <td>
             
                <code>"2003/06"</code>
             
                
             </td> 
             <td>The "year/month" reported as a string, to make it easier to sort by time periods.</td> </tr>
        
        <tr> <td><code>"Month"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>6</code>
             
                
             </td> 
             <td>The reported month as a number. 0 is January, 1 is February, etc.</td> </tr>
        
        <tr> <td><code>"Month Name"</code></td> 
             <td><span data-toggle="tooltip"
                       title='String (text)'>
                       str</span></td> 
             <td>
             
                <code>"June"</code>
             
                
             </td> 
             <td>$MISSING_FIELD</td> </tr>
        
        <tr> <td><code>"Year"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>2003</code>
             
                
             </td> 
             <td>The reported year as a 4-digit number.</td> </tr>
        
    </table>
</div>

    

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Time" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Time-Label").click(function() {
        $( "#explore-Time-Label" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Time-Month").click(function() {
        $( "#explore-Time-Month" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Time-Month-Name").click(function() {
        $( "#explore-Time-Month-Name" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Time-Year").click(function() {
        $( "#explore-Time-Year" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Statistics' title='Dictionary (4 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Statistics.# of Delays"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Statistics-_-of-Delays'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Statistics.Carriers"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Statistics-Carriers'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Statistics.Flights"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Statistics-Flights'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Statistics.Minutes Delayed"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Statistics-Minutes-Delayed'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
    </table>
</div>

    

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Statistics" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Statistics-_-of-Delays").click(function() {
        $( "#explore-Statistics-_-of-Delays" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Statistics-Carriers").click(function() {
        $( "#explore-Statistics-Carriers" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Statistics-Flights").click(function() {
        $( "#explore-Statistics-Flights" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Statistics-Minutes-Delayed").click(function() {
        $( "#explore-Statistics-Minutes-Delayed" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Statistics-_-of-Delays' title='Dictionary (5 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Carrier"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>1009</code>
             
                
             </td> 
             <td>The number of delays and cancellations due to circumstances within the airline's control (e.g. maintenance or crew problems, aircraft cleaning, baggage loading, fueling, etc.) in this month.</td> </tr>
        
        <tr> <td><code>"Late Aircraft"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>1275</code>
             
                
             </td> 
             <td>The number of delays and cancellations caused by a previous flight with the same aircraft arriving late, causing the present flight to depart late in this month.</td> </tr>
        
        <tr> <td><code>"National Aviation System"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>3217</code>
             
                
             </td> 
             <td>The number of delays and cancellations attributable to the national aviation system that refer to a broad set of conditions, such as non-extreme weather conditions, airport operations, heavy traffic volume, and air traffic control in this month.</td> </tr>
        
        <tr> <td><code>"Security"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>17</code>
             
                
             </td> 
             <td>Number of delays or cancellations caused by evacuation of a terminal or concourse, re-boarding of aircraft because of security breach, inoperative screening equipment and/or long lines in excess of 29 minutes at screening areas in this month.</td> </tr>
        
        <tr> <td><code>"Weather"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>328</code>
             
                
             </td> 
             <td>Number of delays or cancellations caused by significant meteorological conditions (actual or forecasted) that, in the judgment of the carrier, delays or prevents the operation of a flight such as tornado, blizzard or hurricane in this month.</td> </tr>
        
    </table>
</div>

    

    

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Statistics-_-of-Delays" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Statistics-_-of-Delays-Carrier").click(function() {
        $( "#explore-Statistics-_-of-Delays-Carrier" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Statistics-_-of-Delays-Late-Aircraft").click(function() {
        $( "#explore-Statistics-_-of-Delays-Late-Aircraft" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Statistics-_-of-Delays-National-Aviation-System").click(function() {
        $( "#explore-Statistics-_-of-Delays-National-Aviation-System" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Statistics-_-of-Delays-Security").click(function() {
        $( "#explore-Statistics-_-of-Delays-Security" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Statistics-_-of-Delays-Weather").click(function() {
        $( "#explore-Statistics-_-of-Delays-Weather" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Statistics-Carriers' title='Dictionary (2 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Names"</code></td> 
             <td><span data-toggle="tooltip"
                       title='String (text)'>
                       str</span></td> 
             <td>
             
                <code>"American Airlines Inc.,JetBlue Airways,Continental Air Lines Inc.,Delta Air Lines Inc.,Atlantic Southeast Airlines,AirTran Airways Corporation,America West Airlines Inc.,Northwest Airlines Inc.,ExpressJet Airlines Inc.,United Air Lines Inc.,US Airways Inc."</code>
             
                
             </td> 
             <td>The full names of the carriers that reported in.</td> </tr>
        
        <tr> <td><code>"Total"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>11</code>
             
                
             </td> 
             <td>The number of carriers that reported flight information during this time period and at this location.</td> </tr>
        
    </table>
</div>

    

    

<script>
$(document).ready(function() {
    $( "#explore-Statistics-Carriers" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Statistics-Carriers-Names").click(function() {
        $( "#explore-Statistics-Carriers-Names" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Statistics-Carriers-Total").click(function() {
        $( "#explore-Statistics-Carriers-Total" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Statistics-Flights' title='Dictionary (5 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Cancelled"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>216</code>
             
                
             </td> 
             <td>The number of flights that were cancelled in this month.</td> </tr>
        
        <tr> <td><code>"Delayed"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>5843</code>
             
                
             </td> 
             <td>The number of flights that were delayed in this month.</td> </tr>
        
        <tr> <td><code>"Diverted"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>27</code>
             
                
             </td> 
             <td>The number of flights that were diverted in this month.</td> </tr>
        
        <tr> <td><code>"On Time"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>23974</code>
             
                
             </td> 
             <td>The number of flights that were on time in this month.</td> </tr>
        
        <tr> <td><code>"Total"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>30060</code>
             
                
             </td> 
             <td>The total number of flights in this month.</td> </tr>
        
    </table>
</div>

    

    

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Statistics-Flights" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Statistics-Flights-Cancelled").click(function() {
        $( "#explore-Statistics-Flights-Cancelled" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Statistics-Flights-Delayed").click(function() {
        $( "#explore-Statistics-Flights-Delayed" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Statistics-Flights-Diverted").click(function() {
        $( "#explore-Statistics-Flights-Diverted" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Statistics-Flights-On-Time").click(function() {
        $( "#explore-Statistics-Flights-On-Time" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Statistics-Flights-Total").click(function() {
        $( "#explore-Statistics-Flights-Total" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Statistics-Minutes-Delayed' title='Dictionary (6 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Carrier"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>61606</code>
             
                
             </td> 
             <td>The number of minutes delayed due to circumstances within the airline's control (e.g. maintenance or crew problems, aircraft cleaning, baggage loading, fueling, etc.) in this month.</td> </tr>
        
        <tr> <td><code>"Late Aircraft"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>68335</code>
             
                
             </td> 
             <td>The number of minutes delayed caused by a previous flight with the same aircraft arriving late, causing the present flight to depart late in this month.</td> </tr>
        
        <tr> <td><code>"National Aviation System"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>118831</code>
             
                
             </td> 
             <td>The number of minutes delayed attributable to the national aviation system that refer to a broad set of conditions, such as non-extreme weather conditions, airport operations, heavy traffic volume, and air traffic control in this month.</td> </tr>
        
        <tr> <td><code>"Security"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>518</code>
             
                
             </td> 
             <td>Number of minutes delayed caused by evacuation of a terminal or concourse, re-boarding of aircraft because of security breach, inoperative screening equipment and/or long lines in excess of 29 minutes at screening areas in this month.</td> </tr>
        
        <tr> <td><code>"Total"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>268764</code>
             
                
             </td> 
             <td>$MISSING_FIELD</td> </tr>
        
        <tr> <td><code>"Weather"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>19474</code>
             
                
             </td> 
             <td>Number of of minutes delayed caused by significant meteorological conditions (actual or forecasted) that, in the judgment of the carrier, delays or prevents the operation of a flight such as tornado, blizzard or hurricane in this month.</td> </tr>
        
    </table>
</div>

    

    

    

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Statistics-Minutes-Delayed" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Statistics-Minutes-Delayed-Carrier").click(function() {
        $( "#explore-Statistics-Minutes-Delayed-Carrier" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Statistics-Minutes-Delayed-Late-Aircraft").click(function() {
        $( "#explore-Statistics-Minutes-Delayed-Late-Aircraft" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Statistics-Minutes-Delayed-National-Aviation-System").click(function() {
        $( "#explore-Statistics-Minutes-Delayed-National-Aviation-System" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Statistics-Minutes-Delayed-Security").click(function() {
        $( "#explore-Statistics-Minutes-Delayed-Security" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Statistics-Minutes-Delayed-Total").click(function() {
        $( "#explore-Statistics-Minutes-Delayed-Total" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Statistics-Minutes-Delayed-Weather").click(function() {
        $( "#explore-Statistics-Minutes-Delayed-Weather" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>


# Downloads

Download all of the following files.

1. <a href='../../datasets/python/airlines/airlines.py' download>airlines.py <span class="fas fa-download"></span></a>
2. <a href='../../datasets/python/airlines/airlines.data' download>airlines.data <span class="fas fa-download"></span></a>

# Usage

```python
import airlines
airports = airlines.get_airports()
```

# Documentation

<dl>
    <dt><span>get_airports()</span></dt>
    <dd>Returns a list of dictionaries representing airports.</dd>
</dl>