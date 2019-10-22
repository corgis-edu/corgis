---
permalink: /python/cars/
style: dataset
---



<img class="img-thumbnail float-right"
     src="/images/datasets/cars-icon.png"
     alt="cars icon"
     role="presentation">

# Cars Python Library

<p class='lead'>From the CORGIS Dataset Project</p>

<span class='text-muted'>By Austin Cory Bart <acbart@vt.edu></span><br>
<span class='text-muted'>Version 2.0.0, created 11/3/2015</span><br>
<span class='text-muted'>Tags: cars, vehicles, fuel</span>

# Overview

This is a dataset about cars and how much fuel they use.






# Explore Structure

Each row represents *$MISSING_FIELD*.



<button type='button'
        class='btn btn-info'
        id='btn-explore'>Explore cars data</button>

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
        
        <tr> <td><code>"Dimensions"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Dimensions'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Engine Information"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Engine-Information'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Fuel Information"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Fuel-Information'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Identification"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Identification'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
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
    
    $("#btn-explore-Dimensions").click(function() {
        $( "#explore-Dimensions" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Engine-Information").click(function() {
        $( "#explore-Engine-Information" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Fuel-Information").click(function() {
        $( "#explore-Fuel-Information" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Identification").click(function() {
        $( "#explore-Identification" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Dimensions' title='Dictionary (3 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Height"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>140</code>
             
                
             </td> 
             <td>Unknown values are stored as 0. Unfortunately, many cars do not report this data.</td> </tr>
        
        <tr> <td><code>"Length"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>143</code>
             
                
             </td> 
             <td>Unknown values are stored as 0. Unfortunately, many cars do not report this data.</td> </tr>
        
        <tr> <td><code>"Width"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>202</code>
             
                
             </td> 
             <td>Unknown values are stored as 0. Unfortunately, many cars do not report this data.</td> </tr>
        
    </table>
</div>

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Dimensions" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Dimensions-Height").click(function() {
        $( "#explore-Dimensions-Height" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Dimensions-Length").click(function() {
        $( "#explore-Dimensions-Length" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Dimensions-Width").click(function() {
        $( "#explore-Dimensions-Width" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Engine-Information' title='Dictionary (6 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Driveline"</code></td>
             <td><span data-toggle="tooltip"
                       title='String (text)'>
                       str</span></td> 
             <td>
             
                <code>"All-wheel drive"</code>
             
                
             </td> 
             <td>A string representing whether this is "Rear-wheel drive", "Front-wheel drive", or "All-wheel drive".</td> </tr>
        
        <tr> <td><code>"Engine Type"</code></td>
             <td><span data-toggle="tooltip"
                       title='String (text)'>
                       str</span></td> 
             <td>
             
                <code>"Audi 3.2L 6 cylinder 250hp 236ft-lbs"</code>
             
                
             </td> 
             <td>How many cylinders are in this engine. Most cars are either a 6-cylinder or an 8-cylinder.</td> </tr>
        
        <tr> <td><code>"Hybrid"</code></td>
             <td><span data-toggle="tooltip"
                       title='Boolean (True or False)'>
                       bool</span></td> 
             <td>
             
                <code>True</code>
             
                
             </td> 
             <td>Whether this is a hybrid engine or not - that is, if it uses both an internal combustion engine and an electric motor.</td> </tr>
        
        <tr> <td><code>"Number of Forward Gears"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>6</code>
             
                
             </td> 
             <td>The number of forward gears. If no information is available, it is coded as 0.</td> </tr>
        
        <tr> <td><code>"Transmission"</code></td>
             <td><span data-toggle="tooltip"
                       title='String (text)'>
                       str</span></td> 
             <td>
             
                <code>"6 Speed Automatic Select Shift"</code>
             
                
             </td> 
             <td>The full name of this type of transmission, based on its Classification and number of forward gears.</td> </tr>
        
        <tr> <td><code>"Engine Statistics"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Engine-Information-Engine-Statistics'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
    </table>
</div>

    

    

    

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Engine-Information" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Engine-Information-Driveline").click(function() {
        $( "#explore-Engine-Information-Driveline" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Engine-Information-Engine-Type").click(function() {
        $( "#explore-Engine-Information-Engine-Type" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Engine-Information-Hybrid").click(function() {
        $( "#explore-Engine-Information-Hybrid" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Engine-Information-Number-of-Forward-Gears").click(function() {
        $( "#explore-Engine-Information-Number-of-Forward-Gears" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Engine-Information-Transmission").click(function() {
        $( "#explore-Engine-Information-Transmission" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Engine-Information-Engine-Statistics").click(function() {
        $( "#explore-Engine-Information-Engine-Statistics" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Fuel-Information' title='Dictionary (3 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"City mpg"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>18</code>
             
                
             </td> 
             <td>The miles-per-gallon this car gets on average in cities.</td> </tr>
        
        <tr> <td><code>"Fuel Type"</code></td>
             <td><span data-toggle="tooltip"
                       title='String (text)'>
                       str</span></td> 
             <td>
             
                <code>"Gasoline"</code>
             
                
             </td> 
             <td>Whether this car takes "Gasoline", "Diesel fuel", "Electricity", "Compressed natural gas", or "E85" (a term that refers to high-level ethanol-gasoline blends containing 51%-83% ethanol). If it is unknown, it is left blank.</td> </tr>
        
        <tr> <td><code>"Highway mpg"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>25</code>
             
                
             </td> 
             <td>The miles-per-gallon this car gets on average on highways.</td> </tr>
        
    </table>
</div>

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Fuel-Information" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Fuel-Information-City-mpg").click(function() {
        $( "#explore-Fuel-Information-City-mpg" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Fuel-Information-Fuel-Type").click(function() {
        $( "#explore-Fuel-Information-Fuel-Type" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Fuel-Information-Highway-mpg").click(function() {
        $( "#explore-Fuel-Information-Highway-mpg" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Identification' title='Dictionary (5 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Classification"</code></td>
             <td><span data-toggle="tooltip"
                       title='String (text)'>
                       str</span></td> 
             <td>
             
                <code>"Automatic transmission"</code>
             
                
             </td> 
             <td>Whether this is a "Manual transmission" or an "Automatic transmission". If it is unknown, it is left blank.</td> </tr>
        
        <tr> <td><code>"ID"</code></td>
             <td><span data-toggle="tooltip"
                       title='String (text)'>
                       str</span></td> 
             <td>
             
                <code>"2009 Audi A3 3.2"</code>
             
                
             </td> 
             <td>A unique ID for this particular car, using the year, make, model, and transmission type.</td> </tr>
        
        <tr> <td><code>"Make"</code></td>
             <td><span data-toggle="tooltip"
                       title='String (text)'>
                       str</span></td> 
             <td>
             
                <code>"Audi"</code>
             
                
             </td> 
             <td>The maker for this car.</td> </tr>
        
        <tr> <td><code>"Model Year"</code></td>
             <td><span data-toggle="tooltip"
                       title='String (text)'>
                       str</span></td> 
             <td>
             
                <code>"2009 Audi A3"</code>
             
                
             </td> 
             <td>The specific name/year for this car.</td> </tr>
        
        <tr> <td><code>"Year"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>2009</code>
             
                
             </td> 
             <td>The year that this car was released.</td> </tr>
        
    </table>
</div>

    

    

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Identification" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Identification-Classification").click(function() {
        $( "#explore-Identification-Classification" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Identification-ID").click(function() {
        $( "#explore-Identification-ID" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Identification-Make").click(function() {
        $( "#explore-Identification-Make" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Identification-Model-Year").click(function() {
        $( "#explore-Identification-Model-Year" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Identification-Year").click(function() {
        $( "#explore-Identification-Year" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Engine-Information-Engine-Statistics' title='Dictionary (2 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Horsepower"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>250</code>
             
                
             </td> 
             <td>A measure of the engine's power. A unit of power equal to 550 foot-pounds per second (745.7 watts).</td> </tr>
        
        <tr> <td><code>"Torque"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>236</code>
             
                
             </td> 
             <td>The torque of the engine, measured in lb/ft. When an engine is said to make "200 lb-ft of torque", it means that 200 pounds of force on a 1-foot lever is needed to stop its motion.</td> </tr>
        
    </table>
</div>

    

    

<script>
$(document).ready(function() {
    $( "#explore-Engine-Information-Engine-Statistics" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Engine-Information-Engine-Statistics-Horsepower").click(function() {
        $( "#explore-Engine-Information-Engine-Statistics-Horsepower" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Engine-Information-Engine-Statistics-Torque").click(function() {
        $( "#explore-Engine-Information-Engine-Statistics-Torque" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>


# Downloads

Download all of the following files.

1. <a href='../../datasets/python/cars/cars.py' download>cars.py <span class="fas fa-download"></span></a>
2. <a href='../../datasets/python/cars/cars.data' download>cars.data <span class="fas fa-download"></span></a>

# Usage

```python
import cars
car = cars.get_car()
```

# Documentation

<dl>
    <dt><span>get_car()</span></dt>
    <dd>Returns a list of dictionaries representing car.</dd>
</dl>