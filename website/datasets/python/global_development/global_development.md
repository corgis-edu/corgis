---
permalink: /python/global_development/
style: dataset
---



<img class="img-thumbnail float-right"
     src="/images/datasets/global-development-splash.png"
     alt="global development icon"
     role="presentation">

# Global Development Python Library

<p class='lead'>From the CORGIS Dataset Project</p>

<span class='text-muted'>By Ryan Whitcomb</span><br>
<span class='text-muted'>Version 2.0.0, created 6/28/2016</span><br>
<span class='text-muted'>Tags: world, countries, development, health, population, urban, rural, agriculture, infrastructure</span>

# Overview

The following data contains records collected on different countries and geographic locations from 1980 - 2013 from the World Bank.  Included is different data about urban development, agriculture and rural development, health, and infrastructure.   



<https://ndb.nal.usda.gov/>




# Explore Structure

Each row represents *$MISSING_FIELD*.



<button type='button'
        class='btn btn-info'
        id='btn-explore'>Explore global development data</button>

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
        
        <tr> <td><code>"Country"</code></td> 
             <td><span data-toggle="tooltip"
                       title='String (text)'>
                       str</span></td> 
             <td>
             
                <code>"Canada"</code>
             
                
             </td> 
             <td>$MISSING_FIELD</td> </tr>
        
        <tr> <td><code>"Year"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>1980</code>
             
                
             </td> 
             <td>$MISSING_FIELD</td> </tr>
        
        <tr> <td><code>"Data"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Data'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
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
    
    $("#btn-explore-Country").click(function() {
        $( "#explore-Country" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Year").click(function() {
        $( "#explore-Year" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Data").click(function() {
        $( "#explore-Data" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Data' title='Dictionary (4 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Data.Health"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Data-Health'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Data.Infrastructure"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Data-Infrastructure'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Data.Rural Development"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Data-Rural-Development'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Data.Urban Development"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Data-Urban-Development'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
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
    
    $("#btn-explore-Data-Health").click(function() {
        $( "#explore-Data-Health" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Data-Infrastructure").click(function() {
        $( "#explore-Data-Infrastructure" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Data-Rural-Development").click(function() {
        $( "#explore-Data-Rural-Development" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Data-Urban-Development").click(function() {
        $( "#explore-Data-Urban-Development" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Data-Health' title='Dictionary (8 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Birth Rate"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>15.4</code>
             
                
             </td> 
             <td>$MISSING_FIELD</td> </tr>
        
        <tr> <td><code>"Death Rate"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>7.0</code>
             
                
             </td> 
             <td>$MISSING_FIELD</td> </tr>
        
        <tr> <td><code>"Fertility Rate"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>1.754</code>
             
                
             </td> 
             <td>$MISSING_FIELD</td> </tr>
        
        <tr> <td><code>"Life Expectancy at Birth, Female"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>78.59</code>
             
                
             </td> 
             <td>$MISSING_FIELD</td> </tr>
        
        <tr> <td><code>"Life Expectancy at Birth, Male"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>71.32</code>
             
                
             </td> 
             <td>$MISSING_FIELD</td> </tr>
        
        <tr> <td><code>"Life Expectancy at Birth, Total"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>74.8663414634146</code>
             
                
             </td> 
             <td>$MISSING_FIELD</td> </tr>
        
        <tr> <td><code>"Population Growth"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>0.997669360128831</code>
             
                
             </td> 
             <td>$MISSING_FIELD</td> </tr>
        
        <tr> <td><code>"Total Population"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>24277000.0</code>
             
                
             </td> 
             <td>$MISSING_FIELD</td> </tr>
        
    </table>
</div>

    

    

    

    

    

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Data-Health" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Data-Health-Birth-Rate").click(function() {
        $( "#explore-Data-Health-Birth-Rate" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Data-Health-Death-Rate").click(function() {
        $( "#explore-Data-Health-Death-Rate" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Data-Health-Fertility-Rate").click(function() {
        $( "#explore-Data-Health-Fertility-Rate" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Data-Health-Life-Expectancy-at-Birth,-Female").click(function() {
        $( "#explore-Data-Health-Life-Expectancy-at-Birth,-Female" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Data-Health-Life-Expectancy-at-Birth,-Male").click(function() {
        $( "#explore-Data-Health-Life-Expectancy-at-Birth,-Male" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Data-Health-Life-Expectancy-at-Birth,-Total").click(function() {
        $( "#explore-Data-Health-Life-Expectancy-at-Birth,-Total" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Data-Health-Population-Growth").click(function() {
        $( "#explore-Data-Health-Population-Growth" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Data-Health-Total-Population").click(function() {
        $( "#explore-Data-Health-Total-Population" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Data-Infrastructure' title='Dictionary (4 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Mobile Cellular Subscriptions"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>0.0</code>
             
                
             </td> 
             <td>$MISSING_FIELD</td> </tr>
        
        <tr> <td><code>"Mobile Cellular Subscriptions per 100 People"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>0.0</code>
             
                
             </td> 
             <td>$MISSING_FIELD</td> </tr>
        
        <tr> <td><code>"Telephone Lines"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>9595000.0</code>
             
                
             </td> 
             <td>$MISSING_FIELD</td> </tr>
        
        <tr> <td><code>"Telephone Lines per 100 People"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>39.5623509247736</code>
             
                
             </td> 
             <td>$MISSING_FIELD</td> </tr>
        
    </table>
</div>

    

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Data-Infrastructure" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Data-Infrastructure-Mobile-Cellular-Subscriptions").click(function() {
        $( "#explore-Data-Infrastructure-Mobile-Cellular-Subscriptions" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Data-Infrastructure-Mobile-Cellular-Subscriptions-per-100-People").click(function() {
        $( "#explore-Data-Infrastructure-Mobile-Cellular-Subscriptions-per-100-People" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Data-Infrastructure-Telephone-Lines").click(function() {
        $( "#explore-Data-Infrastructure-Telephone-Lines" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Data-Infrastructure-Telephone-Lines-per-100-People").click(function() {
        $( "#explore-Data-Infrastructure-Telephone-Lines-per-100-People" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Data-Rural-Development' title='Dictionary (8 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Agricultural Land"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>669030.0</code>
             
                
             </td> 
             <td>$MISSING_FIELD</td> </tr>
        
        <tr> <td><code>"Agricultural Land Percent"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>7.35722509789949</code>
             
                
             </td> 
             <td>$MISSING_FIELD</td> </tr>
        
        <tr> <td><code>"Arable Land"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>1.82782057091074</code>
             
                
             </td> 
             <td>$MISSING_FIELD</td> </tr>
        
        <tr> <td><code>"Arable Land Percent"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>4.8797439052687</code>
             
                
             </td> 
             <td>$MISSING_FIELD</td> </tr>
        
        <tr> <td><code>"Land Area"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>9093510.0</code>
             
                
             </td> 
             <td>$MISSING_FIELD</td> </tr>
        
        <tr> <td><code>"Rural Population"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>5918004</code>
             
                
             </td> 
             <td>$MISSING_FIELD</td> </tr>
        
        <tr> <td><code>"Rural Population Growth"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>0.833711883207287</code>
             
                
             </td> 
             <td>$MISSING_FIELD</td> </tr>
        
        <tr> <td><code>"Surface Area"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>9984670.0</code>
             
                
             </td> 
             <td>$MISSING_FIELD</td> </tr>
        
    </table>
</div>

    

    

    

    

    

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Data-Rural-Development" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Data-Rural-Development-Agricultural-Land").click(function() {
        $( "#explore-Data-Rural-Development-Agricultural-Land" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Data-Rural-Development-Agricultural-Land-Percent").click(function() {
        $( "#explore-Data-Rural-Development-Agricultural-Land-Percent" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Data-Rural-Development-Arable-Land").click(function() {
        $( "#explore-Data-Rural-Development-Arable-Land" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Data-Rural-Development-Arable-Land-Percent").click(function() {
        $( "#explore-Data-Rural-Development-Arable-Land-Percent" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Data-Rural-Development-Land-Area").click(function() {
        $( "#explore-Data-Rural-Development-Land-Area" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Data-Rural-Development-Rural-Population").click(function() {
        $( "#explore-Data-Rural-Development-Rural-Population" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Data-Rural-Development-Rural-Population-Growth").click(function() {
        $( "#explore-Data-Rural-Development-Rural-Population-Growth" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Data-Rural-Development-Surface-Area").click(function() {
        $( "#explore-Data-Rural-Development-Surface-Area" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Data-Urban-Development' title='Dictionary (3 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Population Density"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>2.66970619705702</code>
             
                
             </td> 
             <td>$MISSING_FIELD</td> </tr>
        
        <tr> <td><code>"Urban Population Percent"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>75.623</code>
             
                
             </td> 
             <td>$MISSING_FIELD</td> </tr>
        
        <tr> <td><code>"Urban Population Percent Growth"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>1.05057823382459</code>
             
                
             </td> 
             <td>$MISSING_FIELD</td> </tr>
        
    </table>
</div>

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Data-Urban-Development" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Data-Urban-Development-Population-Density").click(function() {
        $( "#explore-Data-Urban-Development-Population-Density" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Data-Urban-Development-Urban-Population-Percent").click(function() {
        $( "#explore-Data-Urban-Development-Urban-Population-Percent" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Data-Urban-Development-Urban-Population-Percent-Growth").click(function() {
        $( "#explore-Data-Urban-Development-Urban-Population-Percent-Growth" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>


# Downloads

Download all of the following files.

1. <a href='../../datasets/python/global_development/global_development.py' download>global_development.py <span class="fas fa-download"></span></a>
2. <a href='../../datasets/python/global_development/global_development.data' download>global_development.data <span class="fas fa-download"></span></a>

# Usage

```python
import global_development
report = global_development.get_report()
```

# Documentation

<dl>
    <dt><span>get_report()</span></dt>
    <dd>Returns a list of dictionaries representing report.</dd>
</dl>