---
permalink: /python/construction_permits/
style: dataset
---



<img class="img-thumbnail float-right"
     src="/images/datasets/construction-permits-icon.png"
     alt="construction permits icon"
     role="presentation">

# Construction Permits Python Library

<p class='lead'>From the CORGIS Dataset Project</p>

<span class='text-muted'>By Austin Cory Bart, Joung Min Choi, Bo Guan, Sam Donald</span><br>
<span class='text-muted'>Version 3.1.0, created 9/1/2022</span><br>
<span class='text-muted'>Tags: construction, permits, us, united states, america, government, buildings, private, units, valuation, housing</span>

# Overview

This dataset provides data on the number and valuation of new housing units authorized by building permits. Data are available monthly at the national, regional, divisional, and state level. The data are from the Building Permits Survey. The United States Code, Title 13, authorizes this survey, provides for voluntary responses, and provides an exception to confidentiality for public records.



<https://www.census.gov/construction/bps/statemonthly.html>




# Explore Structure

Each row represents *Reports of new housing units authorized by building permits in a state on a given month*.



<button type='button'
        class='btn btn-info'
        id='btn-explore'>Explore construction permits data</button>

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
        
        <tr> <td><code>"Name"</code></td>
             <td><span data-toggle="tooltip"
                       title='String (text)'>
                       str</span></td> 
             <td>
             
                <code>"Mississippi"</code>
             
                
             </td> 
             <td>State</td> </tr>
        
        <tr> <td><code>"Number of Permits"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Number-of-Permits'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Period"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Period'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Valuations"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Valuations'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
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
    
    $("#btn-explore-Name").click(function() {
        $( "#explore-Name" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Number-of-Permits").click(function() {
        $( "#explore-Number-of-Permits" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Period").click(function() {
        $( "#explore-Period" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Valuations").click(function() {
        $( "#explore-Valuations" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Number-of-Permits' title='Dictionary (4 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"1 unit"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>789</code>
             
                
             </td> 
             <td>Tne number of new privately owned housing unit authorized for current month  for 1 unit</td> </tr>
        
        <tr> <td><code>"2 units"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>0</code>
             
                
             </td> 
             <td>Tne number of new privately owned housing unit authorized for current month  for 2 units</td> </tr>
        
        <tr> <td><code>"3-4 units"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>4</code>
             
                
             </td> 
             <td>Tne number of new privately owned housing unit authorized for current month  for 3-4 units</td> </tr>
        
        <tr> <td><code>"5+ units"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>82</code>
             
                
             </td> 
             <td>Tne number of new privately owned housing unit authorized for current month  for more than 5 units</td> </tr>
        
    </table>
</div>

    

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Number-of-Permits" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Number-of-Permits-1-unit").click(function() {
        $( "#explore-Number-of-Permits-1-unit" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Number-of-Permits-2-units").click(function() {
        $( "#explore-Number-of-Permits-2-units" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Number-of-Permits-3-4-units").click(function() {
        $( "#explore-Number-of-Permits-3-4-units" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Number-of-Permits-5+-units").click(function() {
        $( "#explore-Number-of-Permits-5+-units" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Period' title='Dictionary (4 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"full"</code></td>
             <td><span data-toggle="tooltip"
                       title='String (text)'>
                       str</span></td> 
             <td>
             
                <code>"Jun.03"</code>
             
                
             </td> 
             <td>The full representation of the time period for this report. The format is "Month.Year".</td> </tr>
        
        <tr> <td><code>"month"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>6</code>
             
                
             </td> 
             <td>Month</td> </tr>
        
        <tr> <td><code>"month name"</code></td>
             <td><span data-toggle="tooltip"
                       title='String (text)'>
                       str</span></td> 
             <td>
             
                <code>"June"</code>
             
                
             </td> 
             <td>Month name</td> </tr>
        
        <tr> <td><code>"year"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>2003</code>
             
                
             </td> 
             <td>4-digit year</td> </tr>
        
    </table>
</div>

    

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Period" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Period-full").click(function() {
        $( "#explore-Period-full" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Period-month").click(function() {
        $( "#explore-Period-month" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Period-month-name").click(function() {
        $( "#explore-Period-month-name" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Period-year").click(function() {
        $( "#explore-Period-year" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Valuations' title='Dictionary (4 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"1 unit"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>83156</code>
             
                
             </td> 
             <td>Estimated value of the residential structure from the permit official for 1 unit</td> </tr>
        
        <tr> <td><code>"2 units"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>0</code>
             
                
             </td> 
             <td>Estimated value of the residential structure from the permit official for 2 units</td> </tr>
        
        <tr> <td><code>"3-4 units"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>146</code>
             
                
             </td> 
             <td>Estimated value of the residential structure from the permit official for 3-4 units</td> </tr>
        
        <tr> <td><code>"5+ units"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>3169</code>
             
                
             </td> 
             <td>Estimated value of the residential structure from the permit official for more than 5 units</td> </tr>
        
    </table>
</div>

    

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Valuations" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Valuations-1-unit").click(function() {
        $( "#explore-Valuations-1-unit" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Valuations-2-units").click(function() {
        $( "#explore-Valuations-2-units" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Valuations-3-4-units").click(function() {
        $( "#explore-Valuations-3-4-units" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Valuations-5+-units").click(function() {
        $( "#explore-Valuations-5+-units" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>


# Downloads

Download all of the following files.

1. <a href='../../datasets/python/construction_permits/construction_permits.py' download>construction_permits.py <span class="fas fa-download"></span></a>
2. <a href='../../datasets/python/construction_permits/construction_permits.data' download>construction_permits.data <span class="fas fa-download"></span></a>

# Usage

```python
import construction_permits
permit = construction_permits.get_permit()
```

# Documentation

<dl>
    <dt><span>get_permit()</span></dt>
    <dd>Returns a list of dictionaries representing permit.</dd>
</dl>