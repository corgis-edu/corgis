---
permalink: /python/wind_turbines/
style: dataset
---



<img class="img-thumbnail float-right"
     src="/images/datasets/wind-turbines.png"
     alt="wind turbines icon"
     role="presentation">

# Wind Turbines Python Library

<p class='lead'>From the CORGIS Dataset Project</p>

<span class='text-muted'>By Dennis Kafura</span><br>
<span class='text-muted'>Version 0.0.1, created 6/8/2019</span><br>
<span class='text-muted'>Tags: energy, wind, power, air, turbine, utility, location, time</span>

# Overview

The Open PV Project is a collaborative effort between government, industry, and the public that continues to compile a database of available public data for photovoltaic (PV) installation data for the United States. Data for the project are voluntarily contributed from a variety of sources including solar incentive programs, utilities, installers, and the general public. This database serves as a web-based resource for users to easily explore and understand the current and past trends of the US PV industry. The data collected is actively maintained by the contributors and are always changing to provide an evolving, up-to-date snapshot of the US solar power market.


<https://www.sciencebase.gov/catalog/item/57bdfd8fe4b03fd6b7df5ff9>




# Explore Structure

Each row represents *a turbine in the US*.



<button type='button'
        class='btn btn-info'
        id='btn-explore'>Explore wind turbines data</button>

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
        
        <tr> <td><code>"Site"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Site'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Year"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>2017</code>
             
                
             </td> 
             <td>Year when the turbine's project became operational</td> </tr>
        
        <tr> <td><code>"Turbine"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Turbine'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Project"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Project'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
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
    
    $("#btn-explore-Site").click(function() {
        $( "#explore-Site" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Year").click(function() {
        $( "#explore-Year" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Turbine").click(function() {
        $( "#explore-Turbine" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Project").click(function() {
        $( "#explore-Project" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Site' title='Dictionary (4 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"State"</code></td> 
             <td><span data-toggle="tooltip"
                       title='String (text)'>
                       str</span></td> 
             <td>
             
                <code>"IA"</code>
             
                
             </td> 
             <td>Two letter abbreviation of state where turbine is located (e.g., CA for California)</td> </tr>
        
        <tr> <td><code>"County"</code></td> 
             <td><span data-toggle="tooltip"
                       title='String (text)'>
                       str</span></td> 
             <td>
             
                <code>"Story County"</code>
             
                
             </td> 
             <td>County where the turbine is located.</td> </tr>
        
        <tr> <td><code>"Latitude"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>-93.523651</code>
             
                
             </td> 
             <td>Latitude (decimal degrees - NAD 83 datum) of where turbine is located</td> </tr>
        
        <tr> <td><code>"Longitude"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>42.006813</code>
             
                
             </td> 
             <td>Longitude (decimal degrees - NAD 83 datum)</td> </tr>
        
    </table>
</div>

    

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Site" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Site-State").click(function() {
        $( "#explore-Site-State" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Site-County").click(function() {
        $( "#explore-Site-County" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Site-Latitude").click(function() {
        $( "#explore-Site-Latitude" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Site-Longitude").click(function() {
        $( "#explore-Site-Longitude" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Turbine' title='Dictionary (5 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Capacity"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>3000</code>
             
                
             </td> 
             <td>Electrical generation capacity of the turbine measured in KW (kilo-watts)</td> </tr>
        
        <tr> <td><code>"Hub_Height"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>87.5</code>
             
                
             </td> 
             <td>Height in meters of the turbine's hub</td> </tr>
        
        <tr> <td><code>"Rotor_Diameter"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>125.0</code>
             
                
             </td> 
             <td>Diameter in meters of the turbine's rotor</td> </tr>
        
        <tr> <td><code>"Swept_Area"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>12271.85</code>
             
                
             </td> 
             <td>The area swept on each rotation of the turbine</td> </tr>
        
        <tr> <td><code>"Total_Height"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>150.0</code>
             
                
             </td> 
             <td>Total height of the turbine, in meters</td> </tr>
        
    </table>
</div>

    

    

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Turbine" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Turbine-Capacity").click(function() {
        $( "#explore-Turbine-Capacity" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Turbine-Hub_Height").click(function() {
        $( "#explore-Turbine-Hub_Height" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Turbine-Rotor_Diameter").click(function() {
        $( "#explore-Turbine-Rotor_Diameter" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Turbine-Swept_Area").click(function() {
        $( "#explore-Turbine-Swept_Area" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Turbine-Total_Height").click(function() {
        $( "#explore-Turbine-Total_Height" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Project' title='Dictionary (2 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Capacity"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>30.0</code>
             
                
             </td> 
             <td>Electrical generation capacity of the turbine measured in MW (mega-watts)</td> </tr>
        
        <tr> <td><code>"Number_Turbines"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>10</code>
             
                
             </td> 
             <td>Number of turbines in this project</td> </tr>
        
    </table>
</div>

    

    

<script>
$(document).ready(function() {
    $( "#explore-Project" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Project-Capacity").click(function() {
        $( "#explore-Project-Capacity" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Project-Number_Turbines").click(function() {
        $( "#explore-Project-Number_Turbines" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>


# Downloads

Download all of the following files.

1. <a href='../../datasets/python/wind_turbines/wind_turbines.py' download>wind_turbines.py <span class="fas fa-download"></span></a>
2. <a href='../../datasets/python/wind_turbines/wind_turbines.data' download>wind_turbines.data <span class="fas fa-download"></span></a>

# Usage

```python
import wind_turbines
turbines = wind_turbines.get_turbines()
```

# Documentation

<dl>
    <dt><span>get_turbines()</span></dt>
    <dd>Returns a list of dictionaries representing Turbines.</dd>
</dl>