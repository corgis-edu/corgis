---
permalink: /python/weather/
style: dataset
---



<img class="img-thumbnail float-right"
     src="/images/datasets/weather-splash.png"
     alt="weather icon"
     role="presentation">

# Weather Python Library

<p class='lead'>From the CORGIS Dataset Project</p>

<span class='text-muted'>By Austin Cory Bart, Ryan Whitcomb</span><br>
<span class='text-muted'>Version 2.0.0, created 6/13/2016</span><br>
<span class='text-muted'>Tags: weather, rain, snow, sleet, fog, temperature, wind, climate, environment, geology</span>

# Overview

Under the National Oceanic and Atmospheric Administration, the National Weather Service provides daily weather reports for cities across the county.  This is done through the use of 122 different Weather Forcast Offices throughout the country.  These WFOs are responsible for the daily weather reports for serveral cities throughout their region of coverage.  This data set takes the information from these WFO reports for cities across the country and summarizes it at the weekly level for all of 2016.


<http://w2.weather.gov/climate/>




# Explore Structure

Each row represents *$MISSING_FIELD*.



<button type='button'
        class='btn btn-info'
        id='btn-explore'>Explore weather data</button>

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
        
        <tr> <td><code>"Data"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Data'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Date"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Date'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Station"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Station'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
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
    
    $("#btn-explore-Data").click(function() {
        $( "#explore-Data" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Date").click(function() {
        $( "#explore-Date" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Station").click(function() {
        $( "#explore-Station" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Data' title='Dictionary (3 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Precipitation"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>0.0</code>
             
                
             </td> 
             <td>The average amount of rain, in inches.</td> </tr>
        
        <tr> <td><code>"Data.Temperature"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Data-Temperature'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Data.Wind"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Data-Wind'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
    </table>
</div>

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Data" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Data-Precipitation").click(function() {
        $( "#explore-Data-Precipitation" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Data-Temperature").click(function() {
        $( "#explore-Data-Temperature" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Data-Wind").click(function() {
        $( "#explore-Data-Wind" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Date' title='Dictionary (4 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Full"</code></td> 
             <td><span data-toggle="tooltip"
                       title='String (text)'>
                       str</span></td> 
             <td>
             
                <code>"2016-01-03"</code>
             
                
             </td> 
             <td>A full string representation of the date this report was made.</td> </tr>
        
        <tr> <td><code>"Month"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>1</code>
             
                
             </td> 
             <td>The month of the year that this report was made.</td> </tr>
        
        <tr> <td><code>"Week of"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>3</code>
             
                
             </td> 
             <td>The first day of the week that this report was made.</td> </tr>
        
        <tr> <td><code>"Year"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>2016</code>
             
                
             </td> 
             <td>The year that this report was made.</td> </tr>
        
    </table>
</div>

    

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Date" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Date-Full").click(function() {
        $( "#explore-Date-Full" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Date-Month").click(function() {
        $( "#explore-Date-Month" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Date-Week-of").click(function() {
        $( "#explore-Date-Week-of" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Date-Year").click(function() {
        $( "#explore-Date-Year" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Station' title='Dictionary (4 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"City"</code></td> 
             <td><span data-toggle="tooltip"
                       title='String (text)'>
                       str</span></td> 
             <td>
             
                <code>"Birmingham"</code>
             
                
             </td> 
             <td>The city that the reporting station sends its data to. Note that the recording station itself might actually be in a different city.</td> </tr>
        
        <tr> <td><code>"Code"</code></td> 
             <td><span data-toggle="tooltip"
                       title='String (text)'>
                       str</span></td> 
             <td>
             
                <code>"BHM"</code>
             
                
             </td> 
             <td>The unique code representing this station.</td> </tr>
        
        <tr> <td><code>"Location"</code></td> 
             <td><span data-toggle="tooltip"
                       title='String (text)'>
                       str</span></td> 
             <td>
             
                <code>"Birmingham, AL"</code>
             
                
             </td> 
             <td>The exact location of this recording station. Note that the recording station itself might be in a different location than where it sends its data.</td> </tr>
        
        <tr> <td><code>"State"</code></td> 
             <td><span data-toggle="tooltip"
                       title='String (text)'>
                       str</span></td> 
             <td>
             
                <code>"Alabama"</code>
             
                
             </td> 
             <td>The state that the reporting station sends its data to. Note that the recording station itself might actually be in a different state.</td> </tr>
        
    </table>
</div>

    

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Station" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Station-City").click(function() {
        $( "#explore-Station-City" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Station-Code").click(function() {
        $( "#explore-Station-Code" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Station-Location").click(function() {
        $( "#explore-Station-Location" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Station-State").click(function() {
        $( "#explore-Station-State" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Data-Temperature' title='Dictionary (3 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Avg Temp"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>39</code>
             
                
             </td> 
             <td>The average recorded temperature on this week, in degrees Fahrenheit.</td> </tr>
        
        <tr> <td><code>"Max Temp"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>46</code>
             
                
             </td> 
             <td>The highest recorded temperature on this week, in degrees Fahrenheit.</td> </tr>
        
        <tr> <td><code>"Min Temp"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>32</code>
             
                
             </td> 
             <td>The lowest recorded temperature on this week, in degrees Fahrenheit.</td> </tr>
        
    </table>
</div>

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Data-Temperature" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Data-Temperature-Avg-Temp").click(function() {
        $( "#explore-Data-Temperature-Avg-Temp" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Data-Temperature-Max-Temp").click(function() {
        $( "#explore-Data-Temperature-Max-Temp" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Data-Temperature-Min-Temp").click(function() {
        $( "#explore-Data-Temperature-Min-Temp" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Data-Wind' title='Dictionary (2 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Direction"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>33</code>
             
                
             </td> 
             <td>The average wind direction for that week, in degrees.</td> </tr>
        
        <tr> <td><code>"Speed"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>4.33</code>
             
                
             </td> 
             <td>The average windspeed for that week, in Miles per Hour.</td> </tr>
        
    </table>
</div>

    

    

<script>
$(document).ready(function() {
    $( "#explore-Data-Wind" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Data-Wind-Direction").click(function() {
        $( "#explore-Data-Wind-Direction" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Data-Wind-Speed").click(function() {
        $( "#explore-Data-Wind-Speed" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>


# Downloads

Download all of the following files.

1. <a href='../../datasets/python/weather/weather.py' download>weather.py <span class="fas fa-download"></span></a>
2. <a href='../../datasets/python/weather/weather.data' download>weather.data <span class="fas fa-download"></span></a>

# Usage

```python
import weather
report = weather.get_report()
```

# Documentation

<dl>
    <dt><span>get_report()</span></dt>
    <dd>Returns a list of dictionaries representing report.</dd>
</dl>