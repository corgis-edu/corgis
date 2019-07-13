---
permalink: /python/hospitals/
style: dataset
---



<img class="img-thumbnail float-right"
     src="../../datasets/python/hospitals/hhs-logo.jpg"
     alt="hospitals icon"
     role="presentation">

# hospitals Python Library

<p class='lead'>From the CORGIS Dataset Project</p>

<span class='text-muted'>By Dennis Kafura</span><br>
<span class='text-muted'>Version 1.0.0, created 6/10/2019</span><br>
<span class='text-muted'>Tags: hospitals, health care, medical, hospital costs, hospital quality</span>

# Overview

The data set allows consumers to directly compare across hospitals performance measure information related to heart attack, emergency department care, preventive care, stroke care, and other conditions. The data is part of an Administration-wide effort to increase the availability and accessibility of information on quality, utilization, and costs for effective, informed decision-making.

<https://data.medicare.gov/data/hospital-compare>



# Explore Structure

Each row represents *a single hospital in a given US city as of April 2019*.



<button type='button'
        class='btn btn-info'
        id='btn-explore'>Explore hospitals data</button>

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
        
        <tr> <td><code>"Rating"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Rating'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Facility"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Facility'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Procedure"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Procedure'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
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
    
    $("#btn-explore-Rating").click(function() {
        $( "#explore-Rating" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Facility").click(function() {
        $( "#explore-Facility" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Procedure").click(function() {
        $( "#explore-Procedure" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Rating' title='Dictionary (8 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Readmission"</code></td> 
             <td><span data-toggle="tooltip"
                       title='String (text)'>
                       str</span></td> 
             <td>
             
                <code>"Below"</code>
             
                
             </td> 
             <td>Above, Same, Below, or Unknown comparison to national hospital readmission </td> </tr>
        
        <tr> <td><code>"Timeliness"</code></td> 
             <td><span data-toggle="tooltip"
                       title='String (text)'>
                       str</span></td> 
             <td>
             
                <code>"Above"</code>
             
                
             </td> 
             <td>Above, Same, Below, or Unknown comparison to national hospital timeliness of care </td> </tr>
        
        <tr> <td><code>"Overall"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>2</code>
             
                
             </td> 
             <td>Overall rating between 1 and 5 stars, with 5 stars being the highest rating; -1 represents no rating.</td> </tr>
        
        <tr> <td><code>"Experience"</code></td> 
             <td><span data-toggle="tooltip"
                       title='String (text)'>
                       str</span></td> 
             <td>
             
                <code>"Below"</code>
             
                
             </td> 
             <td>Above, Same, Below, or Unknown comparison to national hospital patience experience </td> </tr>
        
        <tr> <td><code>"Effectiveness"</code></td> 
             <td><span data-toggle="tooltip"
                       title='String (text)'>
                       str</span></td> 
             <td>
             
                <code>"Same"</code>
             
                
             </td> 
             <td>Above, Same, Below, or Unknown comparison to national hospital effectiveness of care </td> </tr>
        
        <tr> <td><code>"Mortality"</code></td> 
             <td><span data-toggle="tooltip"
                       title='String (text)'>
                       str</span></td> 
             <td>
             
                <code>"Below"</code>
             
                
             </td> 
             <td>Above, Same, Below, or Unknown comparison to national hospital mortality </td> </tr>
        
        <tr> <td><code>"Safety"</code></td> 
             <td><span data-toggle="tooltip"
                       title='String (text)'>
                       str</span></td> 
             <td>
             
                <code>"Above"</code>
             
                
             </td> 
             <td>Above, Same, Below, or Unknown comparison to national hospital safety </td> </tr>
        
        <tr> <td><code>"Imaging"</code></td> 
             <td><span data-toggle="tooltip"
                       title='String (text)'>
                       str</span></td> 
             <td>
             
                <code>"Same"</code>
             
                
             </td> 
             <td>Above, Same, Below, or Unknown comparison to national hospital effective use of imaging </td> </tr>
        
    </table>
</div>

    

    

    

    

    

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Rating" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Rating-Readmission").click(function() {
        $( "#explore-Rating-Readmission" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Rating-Timeliness").click(function() {
        $( "#explore-Rating-Timeliness" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Rating-Overall").click(function() {
        $( "#explore-Rating-Overall" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Rating-Experience").click(function() {
        $( "#explore-Rating-Experience" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Rating-Effectiveness").click(function() {
        $( "#explore-Rating-Effectiveness" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Rating-Mortality").click(function() {
        $( "#explore-Rating-Mortality" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Rating-Safety").click(function() {
        $( "#explore-Rating-Safety" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Rating-Imaging").click(function() {
        $( "#explore-Rating-Imaging" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Procedure-Hip-Knee' title='Dictionary (3 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Value"</code></td> 
             <td><span data-toggle="tooltip"
                       title='String (text)'>
                       str</span></td> 
             <td>
             
                <code>"Higher"</code>
             
                
             </td> 
             <td>Lower, Average, Worse, or Unknown comparison to national cost of care for hip or knee conditions </td> </tr>
        
        <tr> <td><code>"Cost"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>25812</code>
             
                
             </td> 
             <td>Average cost of care for hip or knee conditions</td> </tr>
        
        <tr> <td><code>"Quality"</code></td> 
             <td><span data-toggle="tooltip"
                       title='String (text)'>
                       str</span></td> 
             <td>
             
                <code>"Average"</code>
             
                
             </td> 
             <td>Lower, Average, Worse, or Unknown comparison to national quality of care for hip or knee conditions </td> </tr>
        
    </table>
</div>

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Procedure-Hip-Knee" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Procedure-Hip-Knee-Value").click(function() {
        $( "#explore-Procedure-Hip-Knee-Value" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Procedure-Hip-Knee-Cost").click(function() {
        $( "#explore-Procedure-Hip-Knee-Cost" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Procedure-Hip-Knee-Quality").click(function() {
        $( "#explore-Procedure-Hip-Knee-Quality" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Procedure-Pneumonia' title='Dictionary (3 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Value"</code></td> 
             <td><span data-toggle="tooltip"
                       title='String (text)'>
                       str</span></td> 
             <td>
             
                <code>"Average"</code>
             
                
             </td> 
             <td>Lower, Average, Worse, or Unknown comparison to national cost of care for pneumonia </td> </tr>
        
        <tr> <td><code>"Cost"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>18281</code>
             
                
             </td> 
             <td>Average cost of care for pneumonia</td> </tr>
        
        <tr> <td><code>"Quality"</code></td> 
             <td><span data-toggle="tooltip"
                       title='String (text)'>
                       str</span></td> 
             <td>
             
                <code>"Average"</code>
             
                
             </td> 
             <td>Lower, Average, Worse, or Unknown comparison to national quality of care for pneumonia </td> </tr>
        
    </table>
</div>

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Procedure-Pneumonia" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Procedure-Pneumonia-Value").click(function() {
        $( "#explore-Procedure-Pneumonia-Value" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Procedure-Pneumonia-Cost").click(function() {
        $( "#explore-Procedure-Pneumonia-Cost" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Procedure-Pneumonia-Quality").click(function() {
        $( "#explore-Procedure-Pneumonia-Quality" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Facility' title='Dictionary (4 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Name"</code></td> 
             <td><span data-toggle="tooltip"
                       title='String (text)'>
                       str</span></td> 
             <td>
             
                <code>"Southeast Alabama Medical Center"</code>
             
                
             </td> 
             <td>Name of the hospital</td> </tr>
        
        <tr> <td><code>"State"</code></td> 
             <td><span data-toggle="tooltip"
                       title='String (text)'>
                       str</span></td> 
             <td>
             
                <code>"AL"</code>
             
                
             </td> 
             <td>Two letter capitalized abbreviation of the State in which the hospital is located (e.g., AZ is Arizona)</td> </tr>
        
        <tr> <td><code>"Type"</code></td> 
             <td><span data-toggle="tooltip"
                       title='String (text)'>
                       str</span></td> 
             <td>
             
                <code>"Government"</code>
             
                
             </td> 
             <td>Kind of organization operating the hospital: one of Government, Private, Proprietary, Church, or Unknown </td> </tr>
        
        <tr> <td><code>"City"</code></td> 
             <td><span data-toggle="tooltip"
                       title='String (text)'>
                       str</span></td> 
             <td>
             
                <code>"Dothan"</code>
             
                
             </td> 
             <td>City in which the hospital is located</td> </tr>
        
    </table>
</div>

    

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Facility" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Facility-Name").click(function() {
        $( "#explore-Facility-Name" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Facility-State").click(function() {
        $( "#explore-Facility-State" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Facility-Type").click(function() {
        $( "#explore-Facility-Type" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Facility-City").click(function() {
        $( "#explore-Facility-City" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Procedure' title='Dictionary (4 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Procedure.Heart Failure"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Procedure-Heart-Failure'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Procedure.Hip Knee"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Procedure-Hip-Knee'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Procedure.Pneumonia"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Procedure-Pneumonia'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Procedure.Heart Attack"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Procedure-Heart-Attack'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
    </table>
</div>

    

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Procedure" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Procedure-Heart-Failure").click(function() {
        $( "#explore-Procedure-Heart-Failure" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Procedure-Hip-Knee").click(function() {
        $( "#explore-Procedure-Hip-Knee" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Procedure-Pneumonia").click(function() {
        $( "#explore-Procedure-Pneumonia" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Procedure-Heart-Attack").click(function() {
        $( "#explore-Procedure-Heart-Attack" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Procedure-Heart-Failure' title='Dictionary (3 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Value"</code></td> 
             <td><span data-toggle="tooltip"
                       title='String (text)'>
                       str</span></td> 
             <td>
             
                <code>"Average"</code>
             
                
             </td> 
             <td>Lower, Average, Worse, or Unknown comparison to national cost of care for heart failures </td> </tr>
        
        <tr> <td><code>"Cost"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>17041</code>
             
                
             </td> 
             <td>Average cost of care for heart failure</td> </tr>
        
        <tr> <td><code>"Quality"</code></td> 
             <td><span data-toggle="tooltip"
                       title='String (text)'>
                       str</span></td> 
             <td>
             
                <code>"Average"</code>
             
                
             </td> 
             <td>Lower, Average, Worse, or Unknown comparison to national quality of care for heart failures </td> </tr>
        
    </table>
</div>

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Procedure-Heart-Failure" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Procedure-Heart-Failure-Value").click(function() {
        $( "#explore-Procedure-Heart-Failure-Value" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Procedure-Heart-Failure-Cost").click(function() {
        $( "#explore-Procedure-Heart-Failure-Cost" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Procedure-Heart-Failure-Quality").click(function() {
        $( "#explore-Procedure-Heart-Failure-Quality" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Procedure-Heart-Attack' title='Dictionary (3 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Value"</code></td> 
             <td><span data-toggle="tooltip"
                       title='String (text)'>
                       str</span></td> 
             <td>
             
                <code>"Average"</code>
             
                
             </td> 
             <td>Lower, Average, Worse, or Unknown comparison to national cost of care for heart attacks </td> </tr>
        
        <tr> <td><code>"Cost"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>23394</code>
             
                
             </td> 
             <td>Average cost of care for heart attacks</td> </tr>
        
        <tr> <td><code>"Quality"</code></td> 
             <td><span data-toggle="tooltip"
                       title='String (text)'>
                       str</span></td> 
             <td>
             
                <code>"Average"</code>
             
                
             </td> 
             <td>Lower, Average, Worse, or Unknown comparison to national quality of care for heart attacks </td> </tr>
        
    </table>
</div>

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Procedure-Heart-Attack" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Procedure-Heart-Attack-Value").click(function() {
        $( "#explore-Procedure-Heart-Attack-Value" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Procedure-Heart-Attack-Cost").click(function() {
        $( "#explore-Procedure-Heart-Attack-Cost" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Procedure-Heart-Attack-Quality").click(function() {
        $( "#explore-Procedure-Heart-Attack-Quality" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>


# Downloads

Download all of the following files.

1. <a href='../../datasets/python/hospitals/hospitals.py' download>hospitals.py <span class="fas fa-download"></span></a>
2. <a href='../../datasets/python/hospitals/hospitals.data' download>hospitals.data <span class="fas fa-download"></span></a>

# Usage

```python
import hospitals
hospitals = hospitals.get_hospitals()
```

# Documentation

<dl>
    <dt><span>get_hospitals()</span></dt>
    <dd>Returns a list of dictionaries representing Hospitals.</dd>
</dl>