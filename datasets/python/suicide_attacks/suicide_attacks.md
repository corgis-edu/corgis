---
permalink: /python/suicide_attacks/
style: dataset
---



<img class="img-thumbnail float-right"
     src="/images/datasets/suicide-attacks-icon.png"
     alt="suicide attacks icon"
     role="presentation">

# Suicide Attacks Python Library

<p class='lead'>From the CORGIS Dataset Project</p>

<span class='text-muted'>By Austin Cory Bart <acbart@vt.edu>, Joung Min Choi <joungmin@vt.edu>, Bo Guan <jasonguan0107@vt.edu></span><br>
<span class='text-muted'>Version 3.0.0, created 9/20/2021</span><br>
<span class='text-muted'>Tags: global, attack, damage, kill, hurt, destroy, pain, suffering, terror, terrorism, religion, warfare, war, car, bomb, gun, shooting</span>

# Overview

The Chicago Project on Security and Terrorism (CPOST) maintains a searchable database on all suicide attacks from 1982 through October 2020. The database includes information about the location of attacks, the target type, the weapon used, and systematic information on the demographic and general biographical characteristics of suicide attackers. The database expands the breadth of the data available in English using native language sources (e.g., Arabic, Hebrew, Russian, Tamil) that are likely to have the most extensive relevant information.
The current CPOST-SAD release contains the universe of suicide attacks from 1982 through September 2015, a total of 4,814 attacks in over 40 countries. The CPOST Suicide Attack Database (CPOST-SAD) contains data on the universe of suicide attacks. For each attack, the database includes information about the geographic location, target classification, and weapon(s) used, as well as systematic information on the demographic and general biographical characteristics of suicide attackers. More information about the coding and methodology is available on the CPOST website below.
Note that multiple attackers or targets are collapsed into a single record for simplicity's sake.


<Chicago Project on Security and Terrorism (CPOST). 2020. Suicide Attack Database (October, 2020 Release). [Data File]. Retrieved from https://cpost.uchicago.edu/research/suicide_attacks/database_on_suicide_attacks/>




# Explore Structure

Each row represents **.



<button type='button'
        class='btn btn-info'
        id='btn-explore'>Explore suicide attacks data</button>

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


<div id='explore-' title='Dictionary (7 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"groups"</code></td>
             <td><span data-toggle="tooltip"
                       title='String (text)'>
                       str</span></td> 
             <td>
             
                <code>"Islamic State"</code>
             
                
             </td> 
             <td>Group��s name</td> </tr>
        
        <tr> <td><code>"claim"</code></td>
             <td><span data-toggle="tooltip"
                       title='String (text)'>
                       str</span></td> 
             <td>
             
                <code>"Suspected"</code>
             
                
             </td> 
             <td>Claim status: Claimed, Denied, Suspected, Unclaimed</td> </tr>
        
        <tr> <td><code>"status"</code></td>
             <td><span data-toggle="tooltip"
                       title='String (text)'>
                       str</span></td> 
             <td>
             
                <code>"Confirmed Suicide"</code>
             
                
             </td> 
             <td>Status of the attack: Confirmed Suicide or Possible</td> </tr>
        
        <tr> <td><code>"statistics"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-statistics'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"date"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-date'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"target"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-target'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"attacker"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-attacker'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
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
    
    $("#btn-explore-groups").click(function() {
        $( "#explore-groups" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-claim").click(function() {
        $( "#explore-claim" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-status").click(function() {
        $( "#explore-status" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-statistics").click(function() {
        $( "#explore-statistics" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-date").click(function() {
        $( "#explore-date" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-target").click(function() {
        $( "#explore-target" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-attacker").click(function() {
        $( "#explore-attacker" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-statistics' title='Dictionary (20 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"sources"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>2</code>
             
                
             </td> 
             <td>Number of sources found for each attack</td> </tr>
        
        <tr> <td><code>"# wounded_low"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>8</code>
             
                
             </td> 
             <td>Low estimate of wounded people</td> </tr>
        
        <tr> <td><code>"# wounded_high"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>8</code>
             
                
             </td> 
             <td>High estimate of wounded people</td> </tr>
        
        <tr> <td><code>"# killed_low"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>5</code>
             
                
             </td> 
             <td>Low estimate of fatalities</td> </tr>
        
        <tr> <td><code>"# killed_high"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>5</code>
             
                
             </td> 
             <td>High estimate of fatalities</td> </tr>
        
        <tr> <td><code>"# killed_low_civilian"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>0</code>
             
                
             </td> 
             <td>Low estimate of civilian fatalities</td> </tr>
        
        <tr> <td><code>"# killed_high_civilian"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>0</code>
             
                
             </td> 
             <td>High estimate of civilian fatalities</td> </tr>
        
        <tr> <td><code>"# killed_low_political"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>0</code>
             
                
             </td> 
             <td>Low estimate of political fatalities</td> </tr>
        
        <tr> <td><code>"# killed_high_political"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>0</code>
             
                
             </td> 
             <td>High estimate of political fatalities</td> </tr>
        
        <tr> <td><code>"# killed_low_security"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>5</code>
             
                
             </td> 
             <td>Low estimate of security fatalities</td> </tr>
        
        <tr> <td><code>"# killed_high_security"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>5</code>
             
                
             </td> 
             <td>High estimate of security fatalities</td> </tr>
        
        <tr> <td><code>"# belt_bomb"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>0</code>
             
                
             </td> 
             <td>Number of belt bombs used</td> </tr>
        
        <tr> <td><code>"# truck_bomb"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>0</code>
             
                
             </td> 
             <td>Number of truck bombs used</td> </tr>
        
        <tr> <td><code>"# car_bomb"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>1</code>
             
                
             </td> 
             <td>Number of car bombs used</td> </tr>
        
        <tr> <td><code>"# weapon_oth"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>0</code>
             
                
             </td> 
             <td>Number of other weapons used</td> </tr>
        
        <tr> <td><code>"# weapon_unk"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>0</code>
             
                
             </td> 
             <td>Number of unknown weapons used</td> </tr>
        
        <tr> <td><code>"# attackers"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>1</code>
             
                
             </td> 
             <td>Number of suicide attackers involved</td> </tr>
        
        <tr> <td><code>"# female_attackers"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>0</code>
             
                
             </td> 
             <td>Number of female attackers</td> </tr>
        
        <tr> <td><code>"# male_attackers"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>0</code>
             
                
             </td> 
             <td>Number of male attackers</td> </tr>
        
        <tr> <td><code>"# unknown_attackers"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>1</code>
             
                
             </td> 
             <td>Number of attackers where gender is unknown </td> </tr>
        
    </table>
</div>

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-statistics" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-statistics-sources").click(function() {
        $( "#explore-statistics-sources" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-statistics-_-wounded_low").click(function() {
        $( "#explore-statistics-_-wounded_low" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-statistics-_-wounded_high").click(function() {
        $( "#explore-statistics-_-wounded_high" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-statistics-_-killed_low").click(function() {
        $( "#explore-statistics-_-killed_low" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-statistics-_-killed_high").click(function() {
        $( "#explore-statistics-_-killed_high" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-statistics-_-killed_low_civilian").click(function() {
        $( "#explore-statistics-_-killed_low_civilian" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-statistics-_-killed_high_civilian").click(function() {
        $( "#explore-statistics-_-killed_high_civilian" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-statistics-_-killed_low_political").click(function() {
        $( "#explore-statistics-_-killed_low_political" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-statistics-_-killed_high_political").click(function() {
        $( "#explore-statistics-_-killed_high_political" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-statistics-_-killed_low_security").click(function() {
        $( "#explore-statistics-_-killed_low_security" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-statistics-_-killed_high_security").click(function() {
        $( "#explore-statistics-_-killed_high_security" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-statistics-_-belt_bomb").click(function() {
        $( "#explore-statistics-_-belt_bomb" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-statistics-_-truck_bomb").click(function() {
        $( "#explore-statistics-_-truck_bomb" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-statistics-_-car_bomb").click(function() {
        $( "#explore-statistics-_-car_bomb" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-statistics-_-weapon_oth").click(function() {
        $( "#explore-statistics-_-weapon_oth" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-statistics-_-weapon_unk").click(function() {
        $( "#explore-statistics-_-weapon_unk" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-statistics-_-attackers").click(function() {
        $( "#explore-statistics-_-attackers" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-statistics-_-female_attackers").click(function() {
        $( "#explore-statistics-_-female_attackers" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-statistics-_-male_attackers").click(function() {
        $( "#explore-statistics-_-male_attackers" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-statistics-_-unknown_attackers").click(function() {
        $( "#explore-statistics-_-unknown_attackers" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-date' title='Dictionary (3 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"year"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>2015</code>
             
                
             </td> 
             <td>Year of attack</td> </tr>
        
        <tr> <td><code>"month"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>6</code>
             
                
             </td> 
             <td>Month of attack</td> </tr>
        
        <tr> <td><code>"day"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>2</code>
             
                
             </td> 
             <td>Day of the attack</td> </tr>
        
    </table>
</div>

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-date" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-date-year").click(function() {
        $( "#explore-date-year" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-date-month").click(function() {
        $( "#explore-date-month" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-date-day").click(function() {
        $( "#explore-date-day" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-target' title='Dictionary (12 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"weapon"</code></td>
             <td><span data-toggle="tooltip"
                       title='String (text)'>
                       str</span></td> 
             <td>
             
                <code>"Car bomb"</code>
             
                
             </td> 
             <td>Weapon (car bomb, belt bomb etc.) used</td> </tr>
        
        <tr> <td><code>"region"</code></td>
             <td><span data-toggle="tooltip"
                       title='String (text)'>
                       str</span></td> 
             <td>
             
                <code>"Asia"</code>
             
                
             </td> 
             <td>Region where attack took place</td> </tr>
        
        <tr> <td><code>"subregion"</code></td>
             <td><span data-toggle="tooltip"
                       title='String (text)'>
                       str</span></td> 
             <td>
             
                <code>"Western Asia"</code>
             
                
             </td> 
             <td>Subregion where attack took place</td> </tr>
        
        <tr> <td><code>"country"</code></td>
             <td><span data-toggle="tooltip"
                       title='String (text)'>
                       str</span></td> 
             <td>
             
                <code>"Syria"</code>
             
                
             </td> 
             <td>Country where attack took place</td> </tr>
        
        <tr> <td><code>"province"</code></td>
             <td><span data-toggle="tooltip"
                       title='String (text)'>
                       str</span></td> 
             <td>
             
                <code>"Hasaka (Al Haksa)"</code>
             
                
             </td> 
             <td>Province/State where attack took place</td> </tr>
        
        <tr> <td><code>"city"</code></td>
             <td><span data-toggle="tooltip"
                       title='String (text)'>
                       str</span></td> 
             <td>
             
                <code>"Al Hasakah"</code>
             
                
             </td> 
             <td>City, village or district where attack took place</td> </tr>
        
        <tr> <td><code>"location"</code></td>
             <td><span data-toggle="tooltip"
                       title='String (text)'>
                       str</span></td> 
             <td>
             
                <code>"close to a children's hospital"</code>
             
                
             </td> 
             <td>Specific location targeted</td> </tr>
        
        <tr> <td><code>"latitude"</code></td>
             <td><span data-toggle="tooltip"
                       title='String (text)'>
                       str</span></td> 
             <td>
             
                <code>"36.483333"</code>
             
                
             </td> 
             <td>City��s Latitude</td> </tr>
        
        <tr> <td><code>"longtitude"</code></td>
             <td><span data-toggle="tooltip"
                       title='String (text)'>
                       str</span></td> 
             <td>
             
                <code>"40.75"</code>
             
                
             </td> 
             <td>City��s Longitude</td> </tr>
        
        <tr> <td><code>"desc"</code></td>
             <td><span data-toggle="tooltip"
                       title='String (text)'>
                       str</span></td> 
             <td>
             
                <code>"Syrian Army checkpoint"</code>
             
                
             </td> 
             <td>The intended target of the attack</td> </tr>
        
        <tr> <td><code>"type"</code></td>
             <td><span data-toggle="tooltip"
                       title='String (text)'>
                       str</span></td> 
             <td>
             
                <code>"Security"</code>
             
                
             </td> 
             <td>Type of target attacked (Civilian, Political, Security)</td> </tr>
        
        <tr> <td><code>"nationality"</code></td>
             <td><span data-toggle="tooltip"
                       title='String (text)'>
                       str</span></td> 
             <td>
             
                <code>"Syrian"</code>
             
                
             </td> 
             <td>Target��s nationality</td> </tr>
        
    </table>
</div>

    

    

    

    

    

    

    

    

    

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-target" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-target-weapon").click(function() {
        $( "#explore-target-weapon" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-target-region").click(function() {
        $( "#explore-target-region" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-target-subregion").click(function() {
        $( "#explore-target-subregion" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-target-country").click(function() {
        $( "#explore-target-country" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-target-province").click(function() {
        $( "#explore-target-province" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-target-city").click(function() {
        $( "#explore-target-city" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-target-location").click(function() {
        $( "#explore-target-location" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-target-latitude").click(function() {
        $( "#explore-target-latitude" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-target-longtitude").click(function() {
        $( "#explore-target-longtitude" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-target-desc").click(function() {
        $( "#explore-target-desc" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-target-type").click(function() {
        $( "#explore-target-type" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-target-nationality").click(function() {
        $( "#explore-target-nationality" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-attacker' title='Dictionary (1 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"gender"</code></td>
             <td><span data-toggle="tooltip"
                       title='String (text)'>
                       str</span></td> 
             <td>
             
                <code>"Unknown"</code>
             
                
             </td> 
             <td>Attacker��s gender</td> </tr>
        
    </table>
</div>

    

<script>
$(document).ready(function() {
    $( "#explore-attacker" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-attacker-gender").click(function() {
        $( "#explore-attacker-gender" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>


# Downloads

Download all of the following files.

1. <a href='../../datasets/python/suicide_attacks/suicide_attacks.py' download>suicide_attacks.py <span class="fas fa-download"></span></a>
2. <a href='../../datasets/python/suicide_attacks/suicide_attacks.data' download>suicide_attacks.data <span class="fas fa-download"></span></a>

# Usage

```python
import suicide_attacks
attack = suicide_attacks.get_attack()
```

# Documentation

<dl>
    <dt><span>get_attack()</span></dt>
    <dd>Returns a list of dictionaries representing attack.</dd>
</dl>