---
permalink: /python/covid-behaviors/
style: dataset
---



<img class="img-thumbnail float-right"
     src="/images/datasets/covid-behaviors-icon.png"
     alt="covid-behaviors icon"
     role="presentation">

# Covid-Behaviors Python Library

<p class='lead'>From the CORGIS Dataset Project</p>

<span class='text-muted'>By Sam Donald</span><br>
<span class='text-muted'>Version 1.0.0, created 9/23/2022</span><br>
<span class='text-muted'>Tags: Covid-19, social response, healthcare</span>

# Overview

Behavioral analysis of how populations are responding to the pandemic - based on a monthly survey where respondents note counts of various activities along with a 0-100 score related to how much they agree with a given statement


<https://github.com/YouGov-Data/covid-19-tracker>




# Explore Structure

Each row represents *covid-report*.



<button type='button'
        class='btn btn-info'
        id='btn-explore'>Explore covid-behaviors data</button>

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
        
        <tr> <td><code>"Country"</code></td>
             <td><span data-toggle="tooltip"
                       title='String (text)'>
                       str</span></td> 
             <td>
             
                <code>"Australia"</code>
             
                
             </td> 
             <td>Nameof country</td> </tr>
        
        <tr> <td><code>"Days since outbreak"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>85</code>
             
                
             </td> 
             <td>Count of days passed since Covid-19 outbreak began</td> </tr>
        
        <tr> <td><code>"Counts"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Counts'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Scores"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Scores'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
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
        
    
    $("#btn-explore-Days-since-outbreak").click(function() {
        $( "#explore-Days-since-outbreak" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Counts").click(function() {
        $( "#explore-Counts" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Scores").click(function() {
        $( "#explore-Scores" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Counts' title='Dictionary (4 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Household contacts"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>2.0</code>
             
                
             </td> 
             <td>Number of household contacts for the previous day (averaged by country)</td> </tr>
        
        <tr> <td><code>"Total contacts"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>8.2</code>
             
                
             </td> 
             <td>Total number of contacts for the previous day (averaged by country)</td> </tr>
        
        <tr> <td><code>"Times left home"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>1.0</code>
             
                
             </td> 
             <td>Number of times the respondent left the house on the previous day (averaged by country)</td> </tr>
        
        <tr> <td><code>"Handwashes"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>11.5</code>
             
                
             </td> 
             <td>Number of times the respondent washed their hands on the previous day (averaged by country)</td> </tr>
        
    </table>
</div>

    

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Counts" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Counts-Household-contacts").click(function() {
        $( "#explore-Counts-Household-contacts" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Counts-Total-contacts").click(function() {
        $( "#explore-Counts-Total-contacts" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Counts-Times-left-home").click(function() {
        $( "#explore-Counts-Times-left-home" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Counts-Handwashes").click(function() {
        $( "#explore-Counts-Handwashes" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Scores' title='Dictionary (5 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Isolate"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Scores-Isolate'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Masks"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Scores-Masks'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Avoidance"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Scores-Avoidance'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Precautions"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Scores-Precautions'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Outlooks"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Scores-Outlooks'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
    </table>
</div>

    

    

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Scores" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Scores-Isolate").click(function() {
        $( "#explore-Scores-Isolate" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Scores-Masks").click(function() {
        $( "#explore-Scores-Masks" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Scores-Avoidance").click(function() {
        $( "#explore-Scores-Avoidance" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Scores-Precautions").click(function() {
        $( "#explore-Scores-Precautions" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Scores-Outlooks").click(function() {
        $( "#explore-Scores-Outlooks" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Scores-Isolate' title='Dictionary (3 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Willingness if symptoms"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>85.8</code>
             
                
             </td> 
             <td>Score (0-100) related to how much the respondent would be willing to isolate if syptomatic (100 = very willing)</td> </tr>
        
        <tr> <td><code>"Willingness if advised"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>14.3</code>
             
                
             </td> 
             <td>Score (0-100) related to how much the respondent would be willing to isolate if advised (100 = very willing)</td> </tr>
        
        <tr> <td><code>"Difficulty"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>91.9</code>
             
                
             </td> 
             <td>Score (0-100) related to how difficult isolating would be (100 = very difficult)</td> </tr>
        
    </table>
</div>

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Scores-Isolate" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Scores-Isolate-Willingness-if-symptoms").click(function() {
        $( "#explore-Scores-Isolate-Willingness-if-symptoms" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Scores-Isolate-Willingness-if-advised").click(function() {
        $( "#explore-Scores-Isolate-Willingness-if-advised" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Scores-Isolate-Difficulty").click(function() {
        $( "#explore-Scores-Isolate-Difficulty" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Scores-Masks' title='Dictionary (5 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Outside home"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>23.9</code>
             
                
             </td> 
             <td>Score (0-100) related to how often the respondent wears a mask outside (100 = all the time)</td> </tr>
        
        <tr> <td><code>"Grocery store"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>0.0</code>
             
                
             </td> 
             <td>Score (0-100) related to how often the respondent wears a mask while at a grocery store (100 = all the time)</td> </tr>
        
        <tr> <td><code>"Clothing store"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>0.0</code>
             
                
             </td> 
             <td>Score (0-100) related to how often the respondent wears a mask while at a clothing store (100 = all the time)</td> </tr>
        
        <tr> <td><code>"Work"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>0.0</code>
             
                
             </td> 
             <td>Score (0-100) related to how often the respondent wears a mask while at work (100 = all the time)</td> </tr>
        
        <tr> <td><code>"Public transport"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>0.0</code>
             
                
             </td> 
             <td>Score (0-100) related to how often the respondent wears a mask while on public transport (100 = all the time)</td> </tr>
        
    </table>
</div>

    

    

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Scores-Masks" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Scores-Masks-Outside-home").click(function() {
        $( "#explore-Scores-Masks-Outside-home" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Scores-Masks-Grocery-store").click(function() {
        $( "#explore-Scores-Masks-Grocery-store" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Scores-Masks-Clothing-store").click(function() {
        $( "#explore-Scores-Masks-Clothing-store" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Scores-Masks-Work").click(function() {
        $( "#explore-Scores-Masks-Work" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Scores-Masks-Public-transport").click(function() {
        $( "#explore-Scores-Masks-Public-transport" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Scores-Avoidance' title='Dictionary (10 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Symptomatic people"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>86.6</code>
             
                
             </td> 
             <td>Score (0-100) related to how much effort the respondent takes to avoid symptomatic people (100 = maximum effort)</td> </tr>
        
        <tr> <td><code>"Going out"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>77.6</code>
             
                
             </td> 
             <td>Score (0-100) related to how much effort the respondent takes to avoid going out (100 = maximum effort)</td> </tr>
        
        <tr> <td><code>"Healthcare settings"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>72.9</code>
             
                
             </td> 
             <td>Score (0-100) related to how much effort the respondent takes to avoid healthcare settings people (100 = maximum effort)</td> </tr>
        
        <tr> <td><code>"Public transport"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>83.3</code>
             
                
             </td> 
             <td>Score (0-100) related to how much effort the respondent takes to avoid public transport (100 = maximum effort)</td> </tr>
        
        <tr> <td><code>"Working outside home"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>59.4</code>
             
                
             </td> 
             <td>Score (0-100) related to how much effort the respondent takes to avoid working outside the home (100 = maximum effort)</td> </tr>
        
        <tr> <td><code>"Children going to school"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>79.1</code>
             
                
             </td> 
             <td>Score (0-100) related to how much effort the respondent and their children takes to avoid school (100 = maximum effort)</td> </tr>
        
        <tr> <td><code>"Having guests"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>87.2</code>
             
                
             </td> 
             <td>Score (0-100) related to how much effort the respondent takes to avoid having guests (100 = maximum effort)</td> </tr>
        
        <tr> <td><code>"Gatherings"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Scores-Avoidance-Gatherings'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Crowded areas"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>89.8</code>
             
                
             </td> 
             <td>Score (0-100) related to how much effort the respondent takes to avoid crowded areas (100 = maximum effort)</td> </tr>
        
        <tr> <td><code>"Shops"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>60.2</code>
             
                
             </td> 
             <td>Score (0-100) related to how much effort the respondent takes to avoid shops (100 = maximum effort)</td> </tr>
        
    </table>
</div>

    

    

    

    

    

    

    

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Scores-Avoidance" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Scores-Avoidance-Symptomatic-people").click(function() {
        $( "#explore-Scores-Avoidance-Symptomatic-people" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Scores-Avoidance-Going-out").click(function() {
        $( "#explore-Scores-Avoidance-Going-out" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Scores-Avoidance-Healthcare-settings").click(function() {
        $( "#explore-Scores-Avoidance-Healthcare-settings" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Scores-Avoidance-Public-transport").click(function() {
        $( "#explore-Scores-Avoidance-Public-transport" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Scores-Avoidance-Working-outside-home").click(function() {
        $( "#explore-Scores-Avoidance-Working-outside-home" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Scores-Avoidance-Children-going-to-school").click(function() {
        $( "#explore-Scores-Avoidance-Children-going-to-school" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Scores-Avoidance-Having-guests").click(function() {
        $( "#explore-Scores-Avoidance-Having-guests" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Scores-Avoidance-Gatherings").click(function() {
        $( "#explore-Scores-Avoidance-Gatherings" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Scores-Avoidance-Crowded-areas").click(function() {
        $( "#explore-Scores-Avoidance-Crowded-areas" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Scores-Avoidance-Shops").click(function() {
        $( "#explore-Scores-Avoidance-Shops" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Scores-Avoidance-Gatherings' title='Dictionary (3 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Small"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>85.7</code>
             
                
             </td> 
             <td>Score (0-100) related to how much effort the respondent takes to avoid small gatherings (100 = maximum effort)</td> </tr>
        
        <tr> <td><code>"Medium"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>90.9</code>
             
                
             </td> 
             <td>Score (0-100) related to how much effort the respondent takes to avoid medium gatherings (100 = maximum effort)</td> </tr>
        
        <tr> <td><code>"Large"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>92.7</code>
             
                
             </td> 
             <td>Score (0-100) related to how much effort the respondent takes to avoid large gatherings (100 = maximum effort)</td> </tr>
        
    </table>
</div>

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Scores-Avoidance-Gatherings" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Scores-Avoidance-Gatherings-Small").click(function() {
        $( "#explore-Scores-Avoidance-Gatherings-Small" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Scores-Avoidance-Gatherings-Medium").click(function() {
        $( "#explore-Scores-Avoidance-Gatherings-Medium" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Scores-Avoidance-Gatherings-Large").click(function() {
        $( "#explore-Scores-Avoidance-Gatherings-Large" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Scores-Precautions' title='Dictionary (3 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Cleaned surfaces"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>64.4</code>
             
                
             </td> 
             <td>Score (0-100) related to how much effort the respondent takes to clean surfaces (100 = maximum effort)</td> </tr>
        
        <tr> <td><code>"Covered mouth sneeze"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>91.8</code>
             
                
             </td> 
             <td>Score (0-100) related to how much effort the respondent takes to cover their mouth while sneezing (100 = maximum effort)</td> </tr>
        
        <tr> <td><code>"Used hand sanitiser"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>72.9</code>
             
                
             </td> 
             <td>Score (0-100) related to how much effort the respondent takes to use hand sanitiser (100 = maximum effort)</td> </tr>
        
    </table>
</div>

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Scores-Precautions" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Scores-Precautions-Cleaned-surfaces").click(function() {
        $( "#explore-Scores-Precautions-Cleaned-surfaces" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Scores-Precautions-Covered-mouth-sneeze").click(function() {
        $( "#explore-Scores-Precautions-Covered-mouth-sneeze" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Scores-Precautions-Used-hand-sanitiser").click(function() {
        $( "#explore-Scores-Precautions-Used-hand-sanitiser" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Scores-Outlooks' title='Dictionary (3 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Covid is dangerous"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>0.0</code>
             
                
             </td> 
             <td>Score (0-100) related to how dangergerous the respondent thinks Covid is (100 = very dangerous)</td> </tr>
        
        <tr> <td><code>"Likely to get covid"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>0.0</code>
             
                
             </td> 
             <td>Score (0-100) related to how likely the respondent thinks they are to contract Covid (100 = certain)</td> </tr>
        
        <tr> <td><code>"Life greatly impacted"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>0.0</code>
             
                
             </td> 
             <td>Score (0-100) related to how much the respondents live is impacted (100 = maximum impact)</td> </tr>
        
    </table>
</div>

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Scores-Outlooks" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Scores-Outlooks-Covid-is-dangerous").click(function() {
        $( "#explore-Scores-Outlooks-Covid-is-dangerous" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Scores-Outlooks-Likely-to-get-covid").click(function() {
        $( "#explore-Scores-Outlooks-Likely-to-get-covid" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Scores-Outlooks-Life-greatly-impacted").click(function() {
        $( "#explore-Scores-Outlooks-Life-greatly-impacted" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>


# Downloads

Download all of the following files.

1. <a href='../../datasets/python/covid-behaviors/covid-behaviors.py' download>covid-behaviors.py <span class="fas fa-download"></span></a>
2. <a href='../../datasets/python/covid-behaviors/covid-behaviors.data' download>covid-behaviors.data <span class="fas fa-download"></span></a>

# Usage

```python
import covid-behaviors
report = covid-behaviors.get_report()
```

# Documentation

<dl>
    <dt><span>get_report()</span></dt>
    <dd>Returns a list of dictionaries representing Report.</dd>
</dl>