---
permalink: /python/opioids/
style: dataset
---



<img class="img-thumbnail float-right"
     src="/images/datasets/opioid-image.png"
     alt="opioids icon"
     role="presentation">

# Opioids Python Library

<p class='lead'>From the CORGIS Dataset Project</p>

<span class='text-muted'>By Dennis Kafura</span><br>
<span class='text-muted'>Version 1.0.0, created 6/30/2019</span><br>
<span class='text-muted'>Tags: opioids, drug deaths, heroin, cocaine, drug overdose</span>

# Overview

All opioids are chemically related and interact with opioid receptors on nerve cells in the body and brain. Opioid pain relievers  can be misused (taken in a different way or in a larger quantity than prescribed, or taken without a doctor's prescription). Regular use - even as prescribed by a doctor - can lead to dependence and, when misused, opioid pain relievers can lead to addiction, overdose incidents, and deaths. The National Institute on Drug Abuse collects and analyzes data about deaths from opioid abuse. This data set reports on data from 1999-2017.


<https://www.drugabuse.gov/related-topics/trends-statistics/overdose-death-rates>




# Explore Structure

Each row represents *opioid death report*.



<button type='button'
        class='btn btn-info'
        id='btn-explore'>Explore opioids data</button>

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
        
        <tr> <td><code>"Year"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>1999</code>
             
                
             </td> 
             <td>The year for which the data is reported (1999-2017)</td> </tr>
        
        <tr> <td><code>"Number"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Number'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Rate"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Rate'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
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
    
    $("#btn-explore-Year").click(function() {
        $( "#explore-Year" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Number").click(function() {
        $( "#explore-Number" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Rate").click(function() {
        $( "#explore-Rate" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Number' title='Dictionary (2 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"All"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>16849</code>
             
                
             </td> 
             <td>Total number of overdose deaths from all drugs</td> </tr>
        
        <tr> <td><code>"Number.Opioid"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Number-Opioid'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
    </table>
</div>

    

    

<script>
$(document).ready(function() {
    $( "#explore-Number" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Number-All").click(function() {
        $( "#explore-Number-All" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Number-Opioid").click(function() {
        $( "#explore-Number-Opioid" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Number-Opioid' title='Dictionary (5 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Any"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>8048</code>
             
                
             </td> 
             <td>Total number of overdose deaths due to any Opioid drug</td> </tr>
        
        <tr> <td><code>"Prescription"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>3442</code>
             
                
             </td> 
             <td>Total number of overdose deaths due to a prescription Opioid drug</td> </tr>
        
        <tr> <td><code>"Synthetic"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>730</code>
             
                
             </td> 
             <td>Total number of overdose deaths due to a synthetic Opioid drug (e.g. fentanyl)</td> </tr>
        
        <tr> <td><code>"Heroin"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>1960</code>
             
                
             </td> 
             <td>Total number of overdose deaths due to heroin</td> </tr>
        
        <tr> <td><code>"Cocaine"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>3822</code>
             
                
             </td> 
             <td>Total number of overdose deaths due to cocaine</td> </tr>
        
    </table>
</div>

    

    

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Number-Opioid" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Number-Opioid-Any").click(function() {
        $( "#explore-Number-Opioid-Any" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Number-Opioid-Prescription").click(function() {
        $( "#explore-Number-Opioid-Prescription" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Number-Opioid-Synthetic").click(function() {
        $( "#explore-Number-Opioid-Synthetic" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Number-Opioid-Heroin").click(function() {
        $( "#explore-Number-Opioid-Heroin" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Number-Opioid-Cocaine").click(function() {
        $( "#explore-Number-Opioid-Cocaine" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Rate' title='Dictionary (2 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Rate.All"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Rate-All'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Rate.Opioid"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Rate-Opioid'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
    </table>
</div>

    

    

<script>
$(document).ready(function() {
    $( "#explore-Rate" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Rate-All").click(function() {
        $( "#explore-Rate-All" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Rate-Opioid").click(function() {
        $( "#explore-Rate-Opioid" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Rate-All' title='Dictionary (4 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Total"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>6.1</code>
             
                
             </td> 
             <td>The rate of overdose deaths due to all drugs per 100,000 people</td> </tr>
        
        <tr> <td><code>"Rate.All.Sex"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Rate-All-Sex'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Rate.All.Region"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Rate-All-Region'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Rate.All.Race"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Rate-All-Race'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
    </table>
</div>

    

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Rate-All" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Rate-All-Total").click(function() {
        $( "#explore-Rate-All-Total" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Rate-All-Sex").click(function() {
        $( "#explore-Rate-All-Sex" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Rate-All-Region").click(function() {
        $( "#explore-Rate-All-Region" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Rate-All-Race").click(function() {
        $( "#explore-Rate-All-Race" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Rate-All-Sex' title='Dictionary (2 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Male"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>3.9</code>
             
                
             </td> 
             <td>The rate of overdose deaths among mendue to all drugs per 100,000 people</td> </tr>
        
        <tr> <td><code>"Female"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>8.2</code>
             
                
             </td> 
             <td>The rate of overdose deaths among women due to all drugs per 100,000 people</td> </tr>
        
    </table>
</div>

    

    

<script>
$(document).ready(function() {
    $( "#explore-Rate-All-Sex" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Rate-All-Sex-Male").click(function() {
        $( "#explore-Rate-All-Sex-Male" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Rate-All-Sex-Female").click(function() {
        $( "#explore-Rate-All-Sex-Female" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Rate-All-Region' title='Dictionary (3 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Large City"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>6.8</code>
             
                
             </td> 
             <td>The rate of overdose deaths in large metropolitan areas due to all drugs per 100,000 people</td> </tr>
        
        <tr> <td><code>"Small City"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>5.6</code>
             
                
             </td> 
             <td>The rate of overdose deaths in medium-small metropolitan areas due to all drugs per 100,000 people</td> </tr>
        
        <tr> <td><code>"Rural"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>4.0</code>
             
                
             </td> 
             <td>The rate of overdose deaths in non-metropolitan areas  from all drugs per 100,000 people</td> </tr>
        
    </table>
</div>

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Rate-All-Region" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Rate-All-Region-Large-City").click(function() {
        $( "#explore-Rate-All-Region-Large-City" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Rate-All-Region-Small-City").click(function() {
        $( "#explore-Rate-All-Region-Small-City" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Rate-All-Region-Rural").click(function() {
        $( "#explore-Rate-All-Region-Rural" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Rate-All-Race' title='Dictionary (3 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"White"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>6.2</code>
             
                
             </td> 
             <td>The rate of overdose deaths among White non-Hispanic persons due to all drugs per 100,000 people</td> </tr>
        
        <tr> <td><code>"Black"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>7.5</code>
             
                
             </td> 
             <td>The rate of overdose deaths among Black non-Hispanic persons from all drugs per 100,000 people</td> </tr>
        
        <tr> <td><code>"Hispanic"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>5.4</code>
             
                
             </td> 
             <td>The rate of overdose deaths among Hispanic persons due to all drugs per 100,000 people</td> </tr>
        
    </table>
</div>

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Rate-All-Race" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Rate-All-Race-White").click(function() {
        $( "#explore-Rate-All-Race-White" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Rate-All-Race-Black").click(function() {
        $( "#explore-Rate-All-Race-Black" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Rate-All-Race-Hispanic").click(function() {
        $( "#explore-Rate-All-Race-Hispanic" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Rate-Opioid' title='Dictionary (5 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Rate.Opioid.Any"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Rate-Opioid-Any'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Rate.Opioid.Prescription"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Rate-Opioid-Prescription'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Rate.Opioid.Synthetic"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Rate-Opioid-Synthetic'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Rate.Opioid.Heroin"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Rate-Opioid-Heroin'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Rate.Opioid.Cocaine"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Rate-Opioid-Cocaine'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
    </table>
</div>

    

    

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Rate-Opioid" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Rate-Opioid-Any").click(function() {
        $( "#explore-Rate-Opioid-Any" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Rate-Opioid-Prescription").click(function() {
        $( "#explore-Rate-Opioid-Prescription" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Rate-Opioid-Synthetic").click(function() {
        $( "#explore-Rate-Opioid-Synthetic" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Rate-Opioid-Heroin").click(function() {
        $( "#explore-Rate-Opioid-Heroin" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Rate-Opioid-Cocaine").click(function() {
        $( "#explore-Rate-Opioid-Cocaine" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Rate-Opioid-Any' title='Dictionary (4 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Total"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>2.9</code>
             
                
             </td> 
             <td>The rate of overdose deaths due to any Opioid drug per 100,000 people</td> </tr>
        
        <tr> <td><code>"Rate.Opioid.Any.Sex"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Rate-Opioid-Any-Sex'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Rate.Opioid.Any.Region"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Rate-Opioid-Any-Region'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Rate.Opioid.Any.Race"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Rate-Opioid-Any-Race'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
    </table>
</div>

    

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Rate-Opioid-Any" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Rate-Opioid-Any-Total").click(function() {
        $( "#explore-Rate-Opioid-Any-Total" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Rate-Opioid-Any-Sex").click(function() {
        $( "#explore-Rate-Opioid-Any-Sex" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Rate-Opioid-Any-Region").click(function() {
        $( "#explore-Rate-Opioid-Any-Region" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Rate-Opioid-Any-Race").click(function() {
        $( "#explore-Rate-Opioid-Any-Race" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Rate-Opioid-Any-Sex' title='Dictionary (2 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Male"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>1.4</code>
             
                
             </td> 
             <td>The rate of overdose deaths among men due to any Opioid drug per 100,000 people</td> </tr>
        
        <tr> <td><code>"Female"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>4.3</code>
             
                
             </td> 
             <td>The rate of overdose deaths among women due to any Opioid drug per 100,000 people</td> </tr>
        
    </table>
</div>

    

    

<script>
$(document).ready(function() {
    $( "#explore-Rate-Opioid-Any-Sex" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Rate-Opioid-Any-Sex-Male").click(function() {
        $( "#explore-Rate-Opioid-Any-Sex-Male" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Rate-Opioid-Any-Sex-Female").click(function() {
        $( "#explore-Rate-Opioid-Any-Sex-Female" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Rate-Opioid-Any-Region' title='Dictionary (3 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Large City"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>3.5</code>
             
                
             </td> 
             <td>The rate of overdose deaths in large metropolitan areas due to any Opioid drug per 100,000 people</td> </tr>
        
        <tr> <td><code>"Small City"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>2.5</code>
             
                
             </td> 
             <td>The rate of overdose deaths in medium-small metropolitan areas due to any Opioid drug per 100,000 people</td> </tr>
        
        <tr> <td><code>"Rural"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>1.4</code>
             
                
             </td> 
             <td>The rate of overdose deaths in non-metropolitan areas  from all drugs per 100,000 people</td> </tr>
        
    </table>
</div>

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Rate-Opioid-Any-Region" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Rate-Opioid-Any-Region-Large-City").click(function() {
        $( "#explore-Rate-Opioid-Any-Region-Large-City" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Rate-Opioid-Any-Region-Small-City").click(function() {
        $( "#explore-Rate-Opioid-Any-Region-Small-City" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Rate-Opioid-Any-Region-Rural").click(function() {
        $( "#explore-Rate-Opioid-Any-Region-Rural" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Rate-Opioid-Any-Race' title='Dictionary (3 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"White"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>2.8</code>
             
                
             </td> 
             <td>The rate of overdose deaths among White non-Hispanic persons due to any Opioid drug per 100,000 people</td> </tr>
        
        <tr> <td><code>"Black"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>3.5</code>
             
                
             </td> 
             <td>The rate of overdose deaths among Black non-Hispanic persons due to any Opioid drug per 100,000 people</td> </tr>
        
        <tr> <td><code>"Hispanic"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>3.5</code>
             
                
             </td> 
             <td>The rate of overdose deaths among Hispanic persons due to any Opioid drug per 100,000 people</td> </tr>
        
    </table>
</div>

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Rate-Opioid-Any-Race" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Rate-Opioid-Any-Race-White").click(function() {
        $( "#explore-Rate-Opioid-Any-Race-White" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Rate-Opioid-Any-Race-Black").click(function() {
        $( "#explore-Rate-Opioid-Any-Race-Black" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Rate-Opioid-Any-Race-Hispanic").click(function() {
        $( "#explore-Rate-Opioid-Any-Race-Hispanic" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Rate-Opioid-Prescription' title='Dictionary (4 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Total"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>1.2</code>
             
                
             </td> 
             <td>The rate of overdose deaths due to a prescription Opioid drug per 100,000 people</td> </tr>
        
        <tr> <td><code>"Rate.Opioid.Prescription.Sex"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Rate-Opioid-Prescription-Sex'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Rate.Opioid.Prescription.Region"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Rate-Opioid-Prescription-Region'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Rate.Opioid.Prescription.Race"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Rate-Opioid-Prescription-Race'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
    </table>
</div>

    

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Rate-Opioid-Prescription" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Rate-Opioid-Prescription-Total").click(function() {
        $( "#explore-Rate-Opioid-Prescription-Total" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Rate-Opioid-Prescription-Sex").click(function() {
        $( "#explore-Rate-Opioid-Prescription-Sex" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Rate-Opioid-Prescription-Region").click(function() {
        $( "#explore-Rate-Opioid-Prescription-Region" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Rate-Opioid-Prescription-Race").click(function() {
        $( "#explore-Rate-Opioid-Prescription-Race" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Rate-Opioid-Prescription-Sex' title='Dictionary (2 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Male"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>0.7</code>
             
                
             </td> 
             <td>The rate of overdose deaths among men due to a prescription Opioid drug per 100,000 people</td> </tr>
        
        <tr> <td><code>"Female"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>1.7</code>
             
                
             </td> 
             <td>The rate of overdose deaths among women due to a prescription Opioid drug per 100,000 people</td> </tr>
        
    </table>
</div>

    

    

<script>
$(document).ready(function() {
    $( "#explore-Rate-Opioid-Prescription-Sex" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Rate-Opioid-Prescription-Sex-Male").click(function() {
        $( "#explore-Rate-Opioid-Prescription-Sex-Male" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Rate-Opioid-Prescription-Sex-Female").click(function() {
        $( "#explore-Rate-Opioid-Prescription-Sex-Female" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Rate-Opioid-Prescription-Region' title='Dictionary (3 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Large City"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>1.4</code>
             
                
             </td> 
             <td>The rate of overdose deaths in large metropolitan areas due to a prescription Opioid drug per 100,000 people</td> </tr>
        
        <tr> <td><code>"Small City"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>1.1</code>
             
                
             </td> 
             <td>The rate of overdose deaths in medium-small metropolitan areas due to a prescription Opioid drug per 100,000 people</td> </tr>
        
        <tr> <td><code>"Rural"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>0.8</code>
             
                
             </td> 
             <td>The rate of overdose deaths in non-metropolitan areas  from all drugs per 100,000 people</td> </tr>
        
    </table>
</div>

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Rate-Opioid-Prescription-Region" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Rate-Opioid-Prescription-Region-Large-City").click(function() {
        $( "#explore-Rate-Opioid-Prescription-Region-Large-City" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Rate-Opioid-Prescription-Region-Small-City").click(function() {
        $( "#explore-Rate-Opioid-Prescription-Region-Small-City" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Rate-Opioid-Prescription-Region-Rural").click(function() {
        $( "#explore-Rate-Opioid-Prescription-Region-Rural" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Rate-Opioid-Prescription-Race' title='Dictionary (3 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"White"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>1.3</code>
             
                
             </td> 
             <td>The rate of overdose deaths among White non-Hispanic persons due to a prescription Opioid drug per 100,000 people</td> </tr>
        
        <tr> <td><code>"Black"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>0.8</code>
             
                
             </td> 
             <td>The rate of overdose deaths among Black non-Hispanic persons due to a prescription Opioid drug  per 100,000 people</td> </tr>
        
        <tr> <td><code>"Hispanic"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>1.6</code>
             
                
             </td> 
             <td>The rate of overdose deaths among Hispanic persons due to a prescription Opioid drug per 100,000 people</td> </tr>
        
    </table>
</div>

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Rate-Opioid-Prescription-Race" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Rate-Opioid-Prescription-Race-White").click(function() {
        $( "#explore-Rate-Opioid-Prescription-Race-White" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Rate-Opioid-Prescription-Race-Black").click(function() {
        $( "#explore-Rate-Opioid-Prescription-Race-Black" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Rate-Opioid-Prescription-Race-Hispanic").click(function() {
        $( "#explore-Rate-Opioid-Prescription-Race-Hispanic" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Rate-Opioid-Synthetic' title='Dictionary (4 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Total"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>0.3</code>
             
                
             </td> 
             <td>The rate of overdose deaths due to a synthetic Opioid drug per 100,000 people</td> </tr>
        
        <tr> <td><code>"Rate.Opioid.Synthetic.Sex"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Rate-Opioid-Synthetic-Sex'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Rate.Opioid.Synthetic.Region"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Rate-Opioid-Synthetic-Region'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Rate.Opioid.Synthetic.Race"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Rate-Opioid-Synthetic-Race'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
    </table>
</div>

    

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Rate-Opioid-Synthetic" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Rate-Opioid-Synthetic-Total").click(function() {
        $( "#explore-Rate-Opioid-Synthetic-Total" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Rate-Opioid-Synthetic-Sex").click(function() {
        $( "#explore-Rate-Opioid-Synthetic-Sex" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Rate-Opioid-Synthetic-Region").click(function() {
        $( "#explore-Rate-Opioid-Synthetic-Region" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Rate-Opioid-Synthetic-Race").click(function() {
        $( "#explore-Rate-Opioid-Synthetic-Race" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Rate-Opioid-Synthetic-Sex' title='Dictionary (2 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Male"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>0.2</code>
             
                
             </td> 
             <td>The rate of overdose deaths among men due to a synthetic Opioid drug per 100,000 people</td> </tr>
        
        <tr> <td><code>"Female"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>0.3</code>
             
                
             </td> 
             <td>The rate of overdose deaths among women due to a synthetic Opioid drug per 100,000 people</td> </tr>
        
    </table>
</div>

    

    

<script>
$(document).ready(function() {
    $( "#explore-Rate-Opioid-Synthetic-Sex" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Rate-Opioid-Synthetic-Sex-Male").click(function() {
        $( "#explore-Rate-Opioid-Synthetic-Sex-Male" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Rate-Opioid-Synthetic-Sex-Female").click(function() {
        $( "#explore-Rate-Opioid-Synthetic-Sex-Female" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Rate-Opioid-Synthetic-Region' title='Dictionary (3 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Large City"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>0.2</code>
             
                
             </td> 
             <td>The rate of overdose deaths in large metropolitan areas due to a synthetic Opioid drug per 100,000 people</td> </tr>
        
        <tr> <td><code>"Small City"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>0.3</code>
             
                
             </td> 
             <td>The rate of overdose deaths in medium-small metropolitan areas due to a Synthetic Opioid drug per 100,000 people</td> </tr>
        
        <tr> <td><code>"Rural"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>0.3</code>
             
                
             </td> 
             <td>The rate of overdose deaths in non-metropolitan areas due to a synthetic drug per 100,000 people</td> </tr>
        
    </table>
</div>

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Rate-Opioid-Synthetic-Region" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Rate-Opioid-Synthetic-Region-Large-City").click(function() {
        $( "#explore-Rate-Opioid-Synthetic-Region-Large-City" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Rate-Opioid-Synthetic-Region-Small-City").click(function() {
        $( "#explore-Rate-Opioid-Synthetic-Region-Small-City" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Rate-Opioid-Synthetic-Region-Rural").click(function() {
        $( "#explore-Rate-Opioid-Synthetic-Region-Rural" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Rate-Opioid-Synthetic-Race' title='Dictionary (3 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"White"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>0.3</code>
             
                
             </td> 
             <td>The rate of overdose deaths among White non-Hispanic persons due to a synthetic Opioid drug per 100,000 people</td> </tr>
        
        <tr> <td><code>"Black"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>0.1</code>
             
                
             </td> 
             <td>The rate of overdose deaths among Black non-Hispanic persons due to a synthetic Opioid drug per 100,000 people</td> </tr>
        
        <tr> <td><code>"Hispanic"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>0.1</code>
             
                
             </td> 
             <td>The rate of overdose deaths among Hispanic persons due to a synthetic Opioid drug per 100,000 people</td> </tr>
        
    </table>
</div>

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Rate-Opioid-Synthetic-Race" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Rate-Opioid-Synthetic-Race-White").click(function() {
        $( "#explore-Rate-Opioid-Synthetic-Race-White" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Rate-Opioid-Synthetic-Race-Black").click(function() {
        $( "#explore-Rate-Opioid-Synthetic-Race-Black" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Rate-Opioid-Synthetic-Race-Hispanic").click(function() {
        $( "#explore-Rate-Opioid-Synthetic-Race-Hispanic" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Rate-Opioid-Heroin' title='Dictionary (4 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Total"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>0.7</code>
             
                
             </td> 
             <td>The rate of overdose deaths due to heroin per 100,000 people</td> </tr>
        
        <tr> <td><code>"Rate.Opioid.Heroin.Sex"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Rate-Opioid-Heroin-Sex'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Rate.Opioid.Heroin.Region"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Rate-Opioid-Heroin-Region'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Rate.Opioid.Heroin.Race"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Rate-Opioid-Heroin-Race'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
    </table>
</div>

    

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Rate-Opioid-Heroin" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Rate-Opioid-Heroin-Total").click(function() {
        $( "#explore-Rate-Opioid-Heroin-Total" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Rate-Opioid-Heroin-Sex").click(function() {
        $( "#explore-Rate-Opioid-Heroin-Sex" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Rate-Opioid-Heroin-Region").click(function() {
        $( "#explore-Rate-Opioid-Heroin-Region" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Rate-Opioid-Heroin-Race").click(function() {
        $( "#explore-Rate-Opioid-Heroin-Race" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Rate-Opioid-Heroin-Sex' title='Dictionary (2 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Male"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>0.2</code>
             
                
             </td> 
             <td>The rate of overdose deaths among men due to heroin per 100,000 people</td> </tr>
        
        <tr> <td><code>"Female"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>1.2</code>
             
                
             </td> 
             <td>The rate of overdose deaths among women due to heroin per 100,000 people</td> </tr>
        
    </table>
</div>

    

    

<script>
$(document).ready(function() {
    $( "#explore-Rate-Opioid-Heroin-Sex" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Rate-Opioid-Heroin-Sex-Male").click(function() {
        $( "#explore-Rate-Opioid-Heroin-Sex-Male" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Rate-Opioid-Heroin-Sex-Female").click(function() {
        $( "#explore-Rate-Opioid-Heroin-Sex-Female" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Rate-Opioid-Heroin-Region' title='Dictionary (3 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Large City"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>0.9</code>
             
                
             </td> 
             <td>The rate of overdose deaths in large metropolitan areas due to heroin per 100,000 people</td> </tr>
        
        <tr> <td><code>"Small City"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>0.6</code>
             
                
             </td> 
             <td>The rate of overdose deaths in medium-small metropolitan areas due to heroin per 100,000 people</td> </tr>
        
        <tr> <td><code>"Rural"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>0.2</code>
             
                
             </td> 
             <td>The rate of overdose deaths in non-metropolitan areas due to heroin per 100,000 people</td> </tr>
        
    </table>
</div>

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Rate-Opioid-Heroin-Region" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Rate-Opioid-Heroin-Region-Large-City").click(function() {
        $( "#explore-Rate-Opioid-Heroin-Region-Large-City" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Rate-Opioid-Heroin-Region-Small-City").click(function() {
        $( "#explore-Rate-Opioid-Heroin-Region-Small-City" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Rate-Opioid-Heroin-Region-Rural").click(function() {
        $( "#explore-Rate-Opioid-Heroin-Region-Rural" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Rate-Opioid-Heroin-Race' title='Dictionary (3 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"White"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>0.7</code>
             
                
             </td> 
             <td>The rate of overdose deaths among White non-Hispanic persons due to heroin per 100,000 people</td> </tr>
        
        <tr> <td><code>"Black"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>0.8</code>
             
                
             </td> 
             <td>The rate of overdose deaths among Black non-Hispanic persons due to heroin per 100,000 people</td> </tr>
        
        <tr> <td><code>"Hispanic"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>1.1</code>
             
                
             </td> 
             <td>The rate of overdose deaths among Hispanic persons due to heroin per 100,000 people</td> </tr>
        
    </table>
</div>

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Rate-Opioid-Heroin-Race" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Rate-Opioid-Heroin-Race-White").click(function() {
        $( "#explore-Rate-Opioid-Heroin-Race-White" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Rate-Opioid-Heroin-Race-Black").click(function() {
        $( "#explore-Rate-Opioid-Heroin-Race-Black" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Rate-Opioid-Heroin-Race-Hispanic").click(function() {
        $( "#explore-Rate-Opioid-Heroin-Race-Hispanic" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Rate-Opioid-Cocaine' title='Dictionary (4 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Total"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>1.4</code>
             
                
             </td> 
             <td>The rate of overdose deaths due to cocaine per 100,000 people</td> </tr>
        
        <tr> <td><code>"Rate.Opioid.Cocaine.Sex"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Rate-Opioid-Cocaine-Sex'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Rate.Opioid.Cocaine.Region"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Rate-Opioid-Cocaine-Region'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Rate.Opioid.Cocaine.Race"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Rate-Opioid-Cocaine-Race'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
    </table>
</div>

    

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Rate-Opioid-Cocaine" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Rate-Opioid-Cocaine-Total").click(function() {
        $( "#explore-Rate-Opioid-Cocaine-Total" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Rate-Opioid-Cocaine-Sex").click(function() {
        $( "#explore-Rate-Opioid-Cocaine-Sex" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Rate-Opioid-Cocaine-Region").click(function() {
        $( "#explore-Rate-Opioid-Cocaine-Region" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Rate-Opioid-Cocaine-Race").click(function() {
        $( "#explore-Rate-Opioid-Cocaine-Race" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Rate-Opioid-Cocaine-Sex' title='Dictionary (2 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Male"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>0.6</code>
             
                
             </td> 
             <td>The rate of overdose deaths among men due to cocaine per 100,000 people</td> </tr>
        
        <tr> <td><code>"Female"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>2.1</code>
             
                
             </td> 
             <td>The rate of overdose deaths among women due to cocaine per 100,000 people</td> </tr>
        
    </table>
</div>

    

    

<script>
$(document).ready(function() {
    $( "#explore-Rate-Opioid-Cocaine-Sex" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Rate-Opioid-Cocaine-Sex-Male").click(function() {
        $( "#explore-Rate-Opioid-Cocaine-Sex-Male" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Rate-Opioid-Cocaine-Sex-Female").click(function() {
        $( "#explore-Rate-Opioid-Cocaine-Sex-Female" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Rate-Opioid-Cocaine-Region' title='Dictionary (3 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Large City"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>1.8</code>
             
                
             </td> 
             <td>The rate of overdose deaths in large metropolitan areas due to cocaine per 100,000 people</td> </tr>
        
        <tr> <td><code>"Small City"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>1.0</code>
             
                
             </td> 
             <td>The rate of overdose deaths in medium-small metropolitan areas due to cocaine per 100,000 people</td> </tr>
        
        <tr> <td><code>"Rural"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>0.4</code>
             
                
             </td> 
             <td>The rate of overdose deaths in non-metropolitan areas due to cocaine per 100,000 people</td> </tr>
        
    </table>
</div>

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Rate-Opioid-Cocaine-Region" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Rate-Opioid-Cocaine-Region-Large-City").click(function() {
        $( "#explore-Rate-Opioid-Cocaine-Region-Large-City" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Rate-Opioid-Cocaine-Region-Small-City").click(function() {
        $( "#explore-Rate-Opioid-Cocaine-Region-Small-City" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Rate-Opioid-Cocaine-Region-Rural").click(function() {
        $( "#explore-Rate-Opioid-Cocaine-Region-Rural" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Rate-Opioid-Cocaine-Race' title='Dictionary (3 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"White"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>1.0</code>
             
                
             </td> 
             <td>The rate of overdose deaths among White non-Hispanic persons due to cocaine per 100,000 people</td> </tr>
        
        <tr> <td><code>"Black"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>3.7</code>
             
                
             </td> 
             <td>The rate of overdose deaths among Black non-Hispanic persons due to cocaine per 100,000 people</td> </tr>
        
        <tr> <td><code>"Hispanic"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>1.7</code>
             
                
             </td> 
             <td>The rate of overdose deaths among Hispanic persons due to cocaine per 100,000 people</td> </tr>
        
    </table>
</div>

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Rate-Opioid-Cocaine-Race" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Rate-Opioid-Cocaine-Race-White").click(function() {
        $( "#explore-Rate-Opioid-Cocaine-Race-White" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Rate-Opioid-Cocaine-Race-Black").click(function() {
        $( "#explore-Rate-Opioid-Cocaine-Race-Black" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Rate-Opioid-Cocaine-Race-Hispanic").click(function() {
        $( "#explore-Rate-Opioid-Cocaine-Race-Hispanic" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>


# Downloads

Download all of the following files.

1. <a href='../../datasets/python/opioids/opioids.py' download>opioids.py <span class="fas fa-download"></span></a>
2. <a href='../../datasets/python/opioids/opioids.data' download>opioids.data <span class="fas fa-download"></span></a>

# Usage

```python
import opioids
opioid_deaths = opioids.get_opioid_deaths()
```

# Documentation

<dl>
    <dt><span>get_opioid_deaths()</span></dt>
    <dd>Returns a list of dictionaries representing Opioid Deaths.</dd>
</dl>