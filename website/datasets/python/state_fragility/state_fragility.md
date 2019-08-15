---
permalink: /python/state_fragility/
style: dataset
---



<img class="img-thumbnail float-right"
     src="/images/datasets/state-fragility-icon.png"
     alt="state fragility icon"
     role="presentation">

# State Fragility Python Library

<p class='lead'>From the CORGIS Dataset Project</p>

<span class='text-muted'>By Ryan Whitcomb</span><br>
<span class='text-muted'>Version 2.0.0, created 7/12/2016</span><br>
<span class='text-muted'>Tags: world, countries, security, politics, economy, society, effectiveness, legitimacy</span>

# Overview

The Center for Systemic Peace was founded in 1997 to engage in global systems analysis to minimize the effects of political violence in the world as a whole.  The following data set shows the state fragility for countries with a population greater than 500,000 in 2013.  The State Fragility Index scores countries on two main categories, effectiveness and legitimacy.  These are then broken down into four dimensions: Security, Political, Economic, and Social.  The State Fragility Index score is the sum of the individual country's effectiveness score and their legitimacy score.  Each of these scores are the summation of the four dimensions within the category.


<http://www.systemicpeace.org/inscrdata.html>




# Explore Structure

Each row represents *$MISSING_FIELD*.



<button type='button'
        class='btn btn-info'
        id='btn-explore'>Explore state fragility data</button>

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
             
                <code>"Afghanistan"</code>
             
                
             </td> 
             <td>$MISSING_FIELD</td> </tr>
        
        <tr> <td><code>"Year"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>1995</code>
             
                
             </td> 
             <td>$MISSING_FIELD</td> </tr>
        
        <tr> <td><code>"Metrics"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Metrics'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
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
        
    
    $("#btn-explore-Metrics").click(function() {
        $( "#explore-Metrics" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Metrics' title='Dictionary (3 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"State Fragility Index"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>25</code>
             
                
             </td> 
             <td>$MISSING_FIELD</td> </tr>
        
        <tr> <td><code>"Metrics.Effectiveness"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Metrics-Effectiveness'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Metrics.Legitimacy"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Metrics-Legitimacy'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
    </table>
</div>

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Metrics" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Metrics-State-Fragility-Index").click(function() {
        $( "#explore-Metrics-State-Fragility-Index" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Metrics-Effectiveness").click(function() {
        $( "#explore-Metrics-Effectiveness" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Metrics-Legitimacy").click(function() {
        $( "#explore-Metrics-Legitimacy" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Metrics-Effectiveness' title='Dictionary (5 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Economic Effectiveness"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>4</code>
             
                
             </td> 
             <td>$MISSING_FIELD</td> </tr>
        
        <tr> <td><code>"Effectiveness Score"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>13</code>
             
                
             </td> 
             <td>$MISSING_FIELD</td> </tr>
        
        <tr> <td><code>"Political Effectiveness"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>3</code>
             
                
             </td> 
             <td>$MISSING_FIELD</td> </tr>
        
        <tr> <td><code>"Security Effectiveness"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>3</code>
             
                
             </td> 
             <td>$MISSING_FIELD</td> </tr>
        
        <tr> <td><code>"Social Effectiveness"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>3</code>
             
                
             </td> 
             <td>$MISSING_FIELD</td> </tr>
        
    </table>
</div>

    

    

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Metrics-Effectiveness" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Metrics-Effectiveness-Economic-Effectiveness").click(function() {
        $( "#explore-Metrics-Effectiveness-Economic-Effectiveness" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Metrics-Effectiveness-Effectiveness-Score").click(function() {
        $( "#explore-Metrics-Effectiveness-Effectiveness-Score" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Metrics-Effectiveness-Political-Effectiveness").click(function() {
        $( "#explore-Metrics-Effectiveness-Political-Effectiveness" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Metrics-Effectiveness-Security-Effectiveness").click(function() {
        $( "#explore-Metrics-Effectiveness-Security-Effectiveness" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Metrics-Effectiveness-Social-Effectiveness").click(function() {
        $( "#explore-Metrics-Effectiveness-Social-Effectiveness" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Metrics-Legitimacy' title='Dictionary (5 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Economic Legitimacy"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>3</code>
             
                
             </td> 
             <td>$MISSING_FIELD</td> </tr>
        
        <tr> <td><code>"Legitimacy Score"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>12</code>
             
                
             </td> 
             <td>$MISSING_FIELD</td> </tr>
        
        <tr> <td><code>"Political Legitimacy"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>3</code>
             
                
             </td> 
             <td>$MISSING_FIELD</td> </tr>
        
        <tr> <td><code>"Security Legitimacy"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>3</code>
             
                
             </td> 
             <td>$MISSING_FIELD</td> </tr>
        
        <tr> <td><code>"Social Legitimacy"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>3</code>
             
                
             </td> 
             <td>$MISSING_FIELD</td> </tr>
        
    </table>
</div>

    

    

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Metrics-Legitimacy" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Metrics-Legitimacy-Economic-Legitimacy").click(function() {
        $( "#explore-Metrics-Legitimacy-Economic-Legitimacy" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Metrics-Legitimacy-Legitimacy-Score").click(function() {
        $( "#explore-Metrics-Legitimacy-Legitimacy-Score" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Metrics-Legitimacy-Political-Legitimacy").click(function() {
        $( "#explore-Metrics-Legitimacy-Political-Legitimacy" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Metrics-Legitimacy-Security-Legitimacy").click(function() {
        $( "#explore-Metrics-Legitimacy-Security-Legitimacy" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Metrics-Legitimacy-Social-Legitimacy").click(function() {
        $( "#explore-Metrics-Legitimacy-Social-Legitimacy" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>


# Downloads

Download all of the following files.

1. <a href='../../datasets/python/state_fragility/state_fragility.py' download>state_fragility.py <span class="fas fa-download"></span></a>
2. <a href='../../datasets/python/state_fragility/state_fragility.data' download>state_fragility.data <span class="fas fa-download"></span></a>

# Usage

```python
import state_fragility
score = state_fragility.get_score()
```

# Documentation

<dl>
    <dt><span>get_score()</span></dt>
    <dd>Returns a list of dictionaries representing score.</dd>
</dl>