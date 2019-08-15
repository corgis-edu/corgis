---
permalink: /python/earthquakes/
style: dataset
---



<img class="img-thumbnail float-right"
     src="/images/datasets/earthquakes-splash.png"
     alt="earthquakes icon"
     role="presentation">

# Earthquakes Python Library

<p class='lead'>From the CORGIS Dataset Project</p>

<span class='text-muted'>By Ryan Whitcomb</span><br>
<span class='text-muted'>Version 2.0.0, created 6/7/2016</span><br>
<span class='text-muted'>Tags: earthquakes, nature, disaster, magnitude, richter scale, latitude, longitude</span>

# Overview

Earthquake records from around the world collected from the United States Geological Survey.  Important details about the earthquake such as distance, gap, magnitude, depth and significance are included to properly describe the earthquake.  Additionally, data about exact geological coordinates and a relative description of the earthquake's location is included. The earthquakes collected are from the past month.



<http://earthquake.usgs.gov/earthquakes/>




# Explore Structure

Each row represents *$MISSING_FIELD*.



<button type='button'
        class='btn btn-info'
        id='btn-explore'>Explore earthquakes data</button>

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


<div id='explore-' title='Dictionary (4 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"id"</code></td> 
             <td><span data-toggle="tooltip"
                       title='String (text)'>
                       str</span></td> 
             <td>
             
                <code>"nc72666881"</code>
             
                
             </td> 
             <td>$MISSING_FIELD</td> </tr>
        
        <tr> <td><code>"impact"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-impact'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"location"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-location'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"time"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-time'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
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
    
    $("#btn-explore-id").click(function() {
        $( "#explore-id" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-impact").click(function() {
        $( "#explore-impact" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-location").click(function() {
        $( "#explore-location" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-time").click(function() {
        $( "#explore-time" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-impact' title='Dictionary (3 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"gap"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>122.0</code>
             
                
             </td> 
             <td>$MISSING_FIELD</td> </tr>
        
        <tr> <td><code>"magnitude"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>1.43</code>
             
                
             </td> 
             <td>$MISSING_FIELD</td> </tr>
        
        <tr> <td><code>"significance"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>31</code>
             
                
             </td> 
             <td>$MISSING_FIELD</td> </tr>
        
    </table>
</div>

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-impact" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-impact-gap").click(function() {
        $( "#explore-impact-gap" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-impact-magnitude").click(function() {
        $( "#explore-impact-magnitude" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-impact-significance").click(function() {
        $( "#explore-impact-significance" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-location' title='Dictionary (6 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"depth"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>15.12</code>
             
                
             </td> 
             <td>$MISSING_FIELD</td> </tr>
        
        <tr> <td><code>"distance"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>0.1034</code>
             
                
             </td> 
             <td>$MISSING_FIELD</td> </tr>
        
        <tr> <td><code>"full"</code></td> 
             <td><span data-toggle="tooltip"
                       title='String (text)'>
                       str</span></td> 
             <td>
             
                <code>"13km E of Livermore, California"</code>
             
                
             </td> 
             <td>$MISSING_FIELD</td> </tr>
        
        <tr> <td><code>"latitude"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>37.6723333</code>
             
                
             </td> 
             <td>$MISSING_FIELD</td> </tr>
        
        <tr> <td><code>"longitude"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>-121.619</code>
             
                
             </td> 
             <td>$MISSING_FIELD</td> </tr>
        
        <tr> <td><code>"name"</code></td> 
             <td><span data-toggle="tooltip"
                       title='String (text)'>
                       str</span></td> 
             <td>
             
                <code>"California"</code>
             
                
             </td> 
             <td>$MISSING_FIELD</td> </tr>
        
    </table>
</div>

    

    

    

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-location" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-location-depth").click(function() {
        $( "#explore-location-depth" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-location-distance").click(function() {
        $( "#explore-location-distance" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-location-full").click(function() {
        $( "#explore-location-full" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-location-latitude").click(function() {
        $( "#explore-location-latitude" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-location-longitude").click(function() {
        $( "#explore-location-longitude" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-location-name").click(function() {
        $( "#explore-location-name" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-time' title='Dictionary (8 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"day"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>27</code>
             
                
             </td> 
             <td>$MISSING_FIELD</td> </tr>
        
        <tr> <td><code>"epoch"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>1469593183550</code>
             
                
             </td> 
             <td>$MISSING_FIELD</td> </tr>
        
        <tr> <td><code>"full"</code></td> 
             <td><span data-toggle="tooltip"
                       title='String (text)'>
                       str</span></td> 
             <td>
             
                <code>"2016-07-27 00:19:43"</code>
             
                
             </td> 
             <td>$MISSING_FIELD</td> </tr>
        
        <tr> <td><code>"hour"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>0</code>
             
                
             </td> 
             <td>$MISSING_FIELD</td> </tr>
        
        <tr> <td><code>"minute"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>19</code>
             
                
             </td> 
             <td>$MISSING_FIELD</td> </tr>
        
        <tr> <td><code>"month"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>7</code>
             
                
             </td> 
             <td>$MISSING_FIELD</td> </tr>
        
        <tr> <td><code>"second"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>43</code>
             
                
             </td> 
             <td>$MISSING_FIELD</td> </tr>
        
        <tr> <td><code>"year"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>2016</code>
             
                
             </td> 
             <td>$MISSING_FIELD</td> </tr>
        
    </table>
</div>

    

    

    

    

    

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-time" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-time-day").click(function() {
        $( "#explore-time-day" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-time-epoch").click(function() {
        $( "#explore-time-epoch" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-time-full").click(function() {
        $( "#explore-time-full" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-time-hour").click(function() {
        $( "#explore-time-hour" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-time-minute").click(function() {
        $( "#explore-time-minute" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-time-month").click(function() {
        $( "#explore-time-month" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-time-second").click(function() {
        $( "#explore-time-second" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-time-year").click(function() {
        $( "#explore-time-year" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>


# Downloads

Download all of the following files.

1. <a href='../../datasets/python/earthquakes/earthquakes.py' download>earthquakes.py <span class="fas fa-download"></span></a>
2. <a href='../../datasets/python/earthquakes/earthquakes.data' download>earthquakes.data <span class="fas fa-download"></span></a>

# Usage

```python
import earthquakes
earthquake = earthquakes.get_earthquake()
```

# Documentation

<dl>
    <dt><span>get_earthquake()</span></dt>
    <dd>Returns a list of dictionaries representing earthquake.</dd>
</dl>