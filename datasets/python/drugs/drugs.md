---
permalink: /python/drugs/
style: dataset
---



<img class="img-thumbnail float-right"
     src="/images/datasets/drugs-icon.png"
     alt="drugs icon"
     role="presentation">

# Drugs Python Library

<p class='lead'>From the CORGIS Dataset Project</p>

<span class='text-muted'>By Austin Cory Bart <acbart@vt.edu>, Ryan Whitcomb <rwhit94@vt.edu></span><br>
<span class='text-muted'>Version 2.0.0, created 5-18-16</span><br>
<span class='text-muted'>Tags: drugs, substances, drug usage</span>

# Overview

This dataset is about substance abuse (cigarettes, marijuana, cocaine, alcohol) among different age groups and states. Data was collected from individual states as part of the NSDUH study. The data ranges from 2002 to 2014. Some values were <i>imputed</i>, meaning that they are estimated. Both totals (in thousands of people) and rates (as a percentage of the population) are given.



<<a href='https://nsduhweb.rti.org/respweb/homepage.cfm'>https://nsduhweb.rti.org/respweb/homepage.cfm</a>>




# Explore Structure

Each row represents *$MISSING_FIELD*.



<button type='button'
        class='btn btn-info'
        id='btn-explore'>Explore drugs data</button>

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


<div id='explore-' title='Dictionary (5 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"State"</code></td>
             <td><span data-toggle="tooltip"
                       title='String (text)'>
                       str</span></td> 
             <td>
             
                <code>"Alabama"</code>
             
                
             </td> 
             <td>The state that this report was created for.</td> </tr>
        
        <tr> <td><code>"Year"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>2002</code>
             
                
             </td> 
             <td>The year that this report was created for.</td> </tr>
        
        <tr> <td><code>"Population"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Population'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Rates"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Rates'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Totals"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Totals'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
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
    
    $("#btn-explore-State").click(function() {
        $( "#explore-State" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Year").click(function() {
        $( "#explore-Year" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Population").click(function() {
        $( "#explore-Population" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Rates").click(function() {
        $( "#explore-Rates" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Totals").click(function() {
        $( "#explore-Totals" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Population' title='Dictionary (4 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"12-17"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>384241</code>
             
                
             </td> 
             <td>Estimated population for this age group (12 to 17 year olds) in this year from US Census data for this state.</td> </tr>
        
        <tr> <td><code>"12-20"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>582609</code>
             
                
             </td> 
             <td>Estimated population for this age group (12 to 20 year olds) in this year from US Census data for this state.</td> </tr>
        
        <tr> <td><code>"18-25"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>498410</code>
             
                
             </td> 
             <td>Estimated population for this age group (18 to 25 year olds) in this year from US Census data for this state.</td> </tr>
        
        <tr> <td><code>"26+"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>2801413</code>
             
                
             </td> 
             <td>Estimated population for this age group (26 years old or older) in this year from US Census data for this state.</td> </tr>
        
    </table>
</div>

    

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Population" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Population-12-17").click(function() {
        $( "#explore-Population-12-17" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Population-12-20").click(function() {
        $( "#explore-Population-12-20" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Population-18-25").click(function() {
        $( "#explore-Population-18-25" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Population-26+").click(function() {
        $( "#explore-Population-26+" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Rates' title='Dictionary (5 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Pain Relievers Abuse Past Year"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Rates-Pain-Relievers-Abuse-Past-Year'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Alcohol"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Rates-Alcohol'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Illicit Drugs"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Rates-Illicit-Drugs'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Marijuana"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Rates-Marijuana'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Tobacco"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Rates-Tobacco'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
    </table>
</div>

    

    

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Rates" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Rates-Pain-Relievers-Abuse-Past-Year").click(function() {
        $( "#explore-Rates-Pain-Relievers-Abuse-Past-Year" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Rates-Alcohol").click(function() {
        $( "#explore-Rates-Alcohol" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Rates-Illicit-Drugs").click(function() {
        $( "#explore-Rates-Illicit-Drugs" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Rates-Marijuana").click(function() {
        $( "#explore-Rates-Marijuana" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Rates-Tobacco").click(function() {
        $( "#explore-Rates-Tobacco" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Rates-Pain-Relievers-Abuse-Past-Year' title='Dictionary (3 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"12-17"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>8.01</code>
             
                
             </td> 
             <td>Percentage of the population that has used pain-relievers in the past year for non-medical purposes, among this age group.</td> </tr>
        
        <tr> <td><code>"18-25"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>12.98</code>
             
                
             </td> 
             <td>Percentage of the population that has used pain-relievers in the past year for non-medical purposes, among this age group.</td> </tr>
        
        <tr> <td><code>"26+"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>3.03</code>
             
                
             </td> 
             <td>Percentage of the population that has used pain-relievers in the past year for non-medical purposes, among this age group.</td> </tr>
        
    </table>
</div>

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Rates-Pain-Relievers-Abuse-Past-Year" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Rates-Pain-Relievers-Abuse-Past-Year-12-17").click(function() {
        $( "#explore-Rates-Pain-Relievers-Abuse-Past-Year-12-17" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Rates-Pain-Relievers-Abuse-Past-Year-18-25").click(function() {
        $( "#explore-Rates-Pain-Relievers-Abuse-Past-Year-18-25" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Rates-Pain-Relievers-Abuse-Past-Year-26+").click(function() {
        $( "#explore-Rates-Pain-Relievers-Abuse-Past-Year-26+" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Totals' title='Dictionary (5 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Pain Relievers Abuse Past Year"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Totals-Pain-Relievers-Abuse-Past-Year'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Alcohol"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Totals-Alcohol'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Illicit Drugs"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Totals-Illicit-Drugs'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Marijuana"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Totals-Marijuana'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Tobacco"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Totals-Tobacco'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
    </table>
</div>

    

    

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Totals" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Totals-Pain-Relievers-Abuse-Past-Year").click(function() {
        $( "#explore-Totals-Pain-Relievers-Abuse-Past-Year" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Totals-Alcohol").click(function() {
        $( "#explore-Totals-Alcohol" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Totals-Illicit-Drugs").click(function() {
        $( "#explore-Totals-Illicit-Drugs" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Totals-Marijuana").click(function() {
        $( "#explore-Totals-Marijuana" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Totals-Tobacco").click(function() {
        $( "#explore-Totals-Tobacco" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Totals-Pain-Relievers-Abuse-Past-Year' title='Dictionary (3 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"12-17"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>3077</code>
             
                
             </td> 
             <td>The estimated number of people (in thousands) that have used pain-relievers in the past year for non-medical purposes, among this age group.</td> </tr>
        
        <tr> <td><code>"18-25"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>6469</code>
             
                
             </td> 
             <td>The estimated number of people (in thousands) that have used pain-relievers in the past year for non-medical purposes, among this age group.</td> </tr>
        
        <tr> <td><code>"26+"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>8488</code>
             
                
             </td> 
             <td>The estimated number of people (in thousands) that have used pain-relievers in the past year for non-medical purposes, among this age group.</td> </tr>
        
    </table>
</div>

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Totals-Pain-Relievers-Abuse-Past-Year" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Totals-Pain-Relievers-Abuse-Past-Year-12-17").click(function() {
        $( "#explore-Totals-Pain-Relievers-Abuse-Past-Year-12-17" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Totals-Pain-Relievers-Abuse-Past-Year-18-25").click(function() {
        $( "#explore-Totals-Pain-Relievers-Abuse-Past-Year-18-25" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Totals-Pain-Relievers-Abuse-Past-Year-26+").click(function() {
        $( "#explore-Totals-Pain-Relievers-Abuse-Past-Year-26+" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Rates-Alcohol' title='Dictionary (7 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Abuse Past Year"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Rates-Alcohol-Abuse-Past-Year'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Binge Past Month"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Rates-Alcohol-Binge-Past-Month'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Dependence Past Year"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Rates-Alcohol-Dependence-Past-Year'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"In Minors"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Rates-Alcohol-In-Minors'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Need Treatment Past Year"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Rates-Alcohol-Need-Treatment-Past-Year'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Perceptions of Risk"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Rates-Alcohol-Perceptions-of-Risk'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Use Past Month"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Rates-Alcohol-Use-Past-Month'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
    </table>
</div>

    

    

    

    

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Rates-Alcohol" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Rates-Alcohol-Abuse-Past-Year").click(function() {
        $( "#explore-Rates-Alcohol-Abuse-Past-Year" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Rates-Alcohol-Binge-Past-Month").click(function() {
        $( "#explore-Rates-Alcohol-Binge-Past-Month" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Rates-Alcohol-Dependence-Past-Year").click(function() {
        $( "#explore-Rates-Alcohol-Dependence-Past-Year" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Rates-Alcohol-In-Minors").click(function() {
        $( "#explore-Rates-Alcohol-In-Minors" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Rates-Alcohol-Need-Treatment-Past-Year").click(function() {
        $( "#explore-Rates-Alcohol-Need-Treatment-Past-Year" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Rates-Alcohol-Perceptions-of-Risk").click(function() {
        $( "#explore-Rates-Alcohol-Perceptions-of-Risk" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Rates-Alcohol-Use-Past-Month").click(function() {
        $( "#explore-Rates-Alcohol-Use-Past-Month" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Rates-Alcohol-Abuse-Past-Year' title='Dictionary (3 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"12-17"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>4.83</code>
             
                
             </td> 
             <td>Percentage of the population that has a dependence on or abused alcohol in the past year among this age group. Dependence or abuse is based on definitions found in the 4th edition of the Diagnostic and Statistical Manual of Mental Disorders (DSM-IV).</td> </tr>
        
        <tr> <td><code>"18-25"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>13.65</code>
             
                
             </td> 
             <td>Percentage of the population that has a dependence on or abused alcohol in the past year among this age group. Dependence or abuse is based on definitions found in the 4th edition of the Diagnostic and Statistical Manual of Mental Disorders (DSM-IV).</td> </tr>
        
        <tr> <td><code>"26+"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>4.91</code>
             
                
             </td> 
             <td>Percentage of the population that has a dependence on or abused alcohol in the past year among this age group. Dependence or abuse is based on definitions found in the 4th edition of the Diagnostic and Statistical Manual of Mental Disorders (DSM-IV).</td> </tr>
        
    </table>
</div>

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Rates-Alcohol-Abuse-Past-Year" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Rates-Alcohol-Abuse-Past-Year-12-17").click(function() {
        $( "#explore-Rates-Alcohol-Abuse-Past-Year-12-17" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Rates-Alcohol-Abuse-Past-Year-18-25").click(function() {
        $( "#explore-Rates-Alcohol-Abuse-Past-Year-18-25" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Rates-Alcohol-Abuse-Past-Year-26+").click(function() {
        $( "#explore-Rates-Alcohol-Abuse-Past-Year-26+" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Rates-Alcohol-Binge-Past-Month' title='Dictionary (3 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"12-17"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>8.23</code>
             
                
             </td> 
             <td>Percentage of the population that has binged on alcohol in the past month among this age group. Binge Alcohol Use is defined as drinking five or more drinks on the same occasion (i.e., at the same time or within a couple of hours of each other) on at least 1 day in the past 30 days.</td> </tr>
        
        <tr> <td><code>"18-25"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>34.97</code>
             
                
             </td> 
             <td>Percentage of the population that has binged on alcohol in the past month among this age group. Binge Alcohol Use is defined as drinking five or more drinks on the same occasion (i.e., at the same time or within a couple of hours of each other) on at least 1 day in the past 30 days.</td> </tr>
        
        <tr> <td><code>"26+"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>16.45</code>
             
                
             </td> 
             <td>Percentage of the population that has binged on alcohol in the past month among this age group. Binge Alcohol Use is defined as drinking five or more drinks on the same occasion (i.e., at the same time or within a couple of hours of each other) on at least 1 day in the past 30 days.</td> </tr>
        
    </table>
</div>

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Rates-Alcohol-Binge-Past-Month" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Rates-Alcohol-Binge-Past-Month-12-17").click(function() {
        $( "#explore-Rates-Alcohol-Binge-Past-Month-12-17" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Rates-Alcohol-Binge-Past-Month-18-25").click(function() {
        $( "#explore-Rates-Alcohol-Binge-Past-Month-18-25" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Rates-Alcohol-Binge-Past-Month-26+").click(function() {
        $( "#explore-Rates-Alcohol-Binge-Past-Month-26+" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Rates-Alcohol-Dependence-Past-Year' title='Dictionary (3 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"12-17"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>1.67</code>
             
                
             </td> 
             <td>Percentage of the population that has a dependence on alcohol in the past year among this age group. Dependence is based on the definition found in the 4th edition of the Diagnostic and Statistical Manual of Mental Disorders (DSM-IV).</td> </tr>
        
        <tr> <td><code>"18-25"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>5.54</code>
             
                
             </td> 
             <td>Percentage of the population that has a dependence on alcohol in the past year among this age group. Dependence is based on the definition found in the 4th edition of the Diagnostic and Statistical Manual of Mental Disorders (DSM-IV).</td> </tr>
        
        <tr> <td><code>"26+"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>2.41</code>
             
                
             </td> 
             <td>Percentage of the population that has a dependence on alcohol in the past year among this age group. Dependence is based on the definition found in the 4th edition of the Diagnostic and Statistical Manual of Mental Disorders (DSM-IV).</td> </tr>
        
    </table>
</div>

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Rates-Alcohol-Dependence-Past-Year" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Rates-Alcohol-Dependence-Past-Year-12-17").click(function() {
        $( "#explore-Rates-Alcohol-Dependence-Past-Year-12-17" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Rates-Alcohol-Dependence-Past-Year-18-25").click(function() {
        $( "#explore-Rates-Alcohol-Dependence-Past-Year-18-25" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Rates-Alcohol-Dependence-Past-Year-26+").click(function() {
        $( "#explore-Rates-Alcohol-Dependence-Past-Year-26+" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Rates-Alcohol-In-Minors' title='Dictionary (2 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Abuse"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>16.45</code>
             
                
             </td> 
             <td>The percentage of the population of minors (12-20 years old) who have binged alcohol in the past month. Binge Alcohol Use is defined as drinking five or more drinks on the same occasion (i.e., at the same time or within a couple of hours of each other) on at least 1 day in the past 30 days.</td> </tr>
        
        <tr> <td><code>"Use"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>24.88</code>
             
                
             </td> 
             <td>The percentage of the population of minors (12-20 years old) who have drank alcohol in the past month.</td> </tr>
        
    </table>
</div>

    

    

<script>
$(document).ready(function() {
    $( "#explore-Rates-Alcohol-In-Minors" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Rates-Alcohol-In-Minors-Abuse").click(function() {
        $( "#explore-Rates-Alcohol-In-Minors-Abuse" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Rates-Alcohol-In-Minors-Use").click(function() {
        $( "#explore-Rates-Alcohol-In-Minors-Use" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Rates-Alcohol-Need-Treatment-Past-Year' title='Dictionary (3 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"12-17"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>4.65</code>
             
                
             </td> 
             <td>Percentage of the population that has needs but has not recieved treatment for alcohol use in the past year among this age group. Needing But Not Receiving Treatment refers to respondents classified as needing treatment for alcohol, but not receiving treatment for an alcohol problem at a specialty facility (i.e., drug and alcohol rehabilitation facilities [inpatient or outpatient], hospitals [inpatient only], and mental health centers).</td> </tr>
        
        <tr> <td><code>"18-25"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>13.2</code>
             
                
             </td> 
             <td>Percentage of the population that has needs but has not recieved treatment for alcohol use in the past year among this age group. Needing But Not Receiving Treatment refers to respondents classified as needing treatment for alcohol, but not receiving treatment for an alcohol problem at a specialty facility (i.e., drug and alcohol rehabilitation facilities [inpatient or outpatient], hospitals [inpatient only], and mental health centers).</td> </tr>
        
        <tr> <td><code>"26+"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>4.65</code>
             
                
             </td> 
             <td>Percentage of the population that has needs but has not recieved treatment for alcohol use in the past year among this age group. Needing But Not Receiving Treatment refers to respondents classified as needing treatment for alcohol, but not receiving treatment for an alcohol problem at a specialty facility (i.e., drug and alcohol rehabilitation facilities [inpatient or outpatient], hospitals [inpatient only], and mental health centers).</td> </tr>
        
    </table>
</div>

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Rates-Alcohol-Need-Treatment-Past-Year" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Rates-Alcohol-Need-Treatment-Past-Year-12-17").click(function() {
        $( "#explore-Rates-Alcohol-Need-Treatment-Past-Year-12-17" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Rates-Alcohol-Need-Treatment-Past-Year-18-25").click(function() {
        $( "#explore-Rates-Alcohol-Need-Treatment-Past-Year-18-25" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Rates-Alcohol-Need-Treatment-Past-Year-26+").click(function() {
        $( "#explore-Rates-Alcohol-Need-Treatment-Past-Year-26+" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Rates-Alcohol-Perceptions-of-Risk' title='Dictionary (3 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"12-17"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>42.74</code>
             
                
             </td> 
             <td>Percentage of the population that perceives of great risk in having five or more drinks of an alcoholic beverage once or twice a week, among this age group.</td> </tr>
        
        <tr> <td><code>"18-25"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>37.64</code>
             
                
             </td> 
             <td>Percentage of the population that perceives of great risk in having five or more drinks of an alcoholic beverage once or twice a week, among this age group.</td> </tr>
        
        <tr> <td><code>"26+"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>48.17</code>
             
                
             </td> 
             <td>Percentage of the population that perceives of great risk in having five or more drinks of an alcoholic beverage once or twice a week, among this age group.</td> </tr>
        
    </table>
</div>

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Rates-Alcohol-Perceptions-of-Risk" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Rates-Alcohol-Perceptions-of-Risk-12-17").click(function() {
        $( "#explore-Rates-Alcohol-Perceptions-of-Risk-12-17" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Rates-Alcohol-Perceptions-of-Risk-18-25").click(function() {
        $( "#explore-Rates-Alcohol-Perceptions-of-Risk-18-25" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Rates-Alcohol-Perceptions-of-Risk-26+").click(function() {
        $( "#explore-Rates-Alcohol-Perceptions-of-Risk-26+" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Rates-Alcohol-Use-Past-Month' title='Dictionary (3 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"12-17"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>15.0</code>
             
                
             </td> 
             <td>Percentage of the population that has used alcohol in the past month, among this age group.</td> </tr>
        
        <tr> <td><code>"18-25"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>50.96</code>
             
                
             </td> 
             <td>Percentage of the population that has used alcohol in the past month, among this age group.</td> </tr>
        
        <tr> <td><code>"26+"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>37.27</code>
             
                
             </td> 
             <td>Percentage of the population that has used alcohol in the past month, among this age group.</td> </tr>
        
    </table>
</div>

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Rates-Alcohol-Use-Past-Month" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Rates-Alcohol-Use-Past-Month-12-17").click(function() {
        $( "#explore-Rates-Alcohol-Use-Past-Month-12-17" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Rates-Alcohol-Use-Past-Month-18-25").click(function() {
        $( "#explore-Rates-Alcohol-Use-Past-Month-18-25" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Rates-Alcohol-Use-Past-Month-26+").click(function() {
        $( "#explore-Rates-Alcohol-Use-Past-Month-26+" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Rates-Illicit-Drugs' title='Dictionary (6 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Abuse Past Year"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Rates-Illicit-Drugs-Abuse-Past-Year'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"All Except Marijuana Used Past Month"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Rates-Illicit-Drugs-All-Except-Marijuana-Used-Past-Month'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Cocaine Used Past Year"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Rates-Illicit-Drugs-Cocaine-Used-Past-Year'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Dependence Past Year"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Rates-Illicit-Drugs-Dependence-Past-Year'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Need Treatment Past Year"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Rates-Illicit-Drugs-Need-Treatment-Past-Year'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Used Past Month"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Rates-Illicit-Drugs-Used-Past-Month'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
    </table>
</div>

    

    

    

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Rates-Illicit-Drugs" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Rates-Illicit-Drugs-Abuse-Past-Year").click(function() {
        $( "#explore-Rates-Illicit-Drugs-Abuse-Past-Year" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Rates-Illicit-Drugs-All-Except-Marijuana-Used-Past-Month").click(function() {
        $( "#explore-Rates-Illicit-Drugs-All-Except-Marijuana-Used-Past-Month" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Rates-Illicit-Drugs-Cocaine-Used-Past-Year").click(function() {
        $( "#explore-Rates-Illicit-Drugs-Cocaine-Used-Past-Year" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Rates-Illicit-Drugs-Dependence-Past-Year").click(function() {
        $( "#explore-Rates-Illicit-Drugs-Dependence-Past-Year" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Rates-Illicit-Drugs-Need-Treatment-Past-Year").click(function() {
        $( "#explore-Rates-Illicit-Drugs-Need-Treatment-Past-Year" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Rates-Illicit-Drugs-Used-Past-Month").click(function() {
        $( "#explore-Rates-Illicit-Drugs-Used-Past-Month" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Rates-Illicit-Drugs-Abuse-Past-Year' title='Dictionary (3 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"12-17"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>4.67</code>
             
                
             </td> 
             <td>Percentage of the population that has a dependence on or abuse illicit drugs in the past year. Illicit Drugs include marijuana/hashish, cocaine (including crack), heroin, hallucinogens, inhalants, or prescription-type psychotherapeutics used nonmedically. Dependence or abuse is based on definitions found in the 4th edition of the Diagnostic and Statistical Manual of Mental Disorders (DSM-IV).</td> </tr>
        
        <tr> <td><code>"18-25"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>6.53</code>
             
                
             </td> 
             <td>Percentage of the population that has a dependence on or abuse illicit drugs in the past year. Illicit Drugs include marijuana/hashish, cocaine (including crack), heroin, hallucinogens, inhalants, or prescription-type psychotherapeutics used nonmedically. Dependence or abuse is based on definitions found in the 4th edition of the Diagnostic and Statistical Manual of Mental Disorders (DSM-IV).</td> </tr>
        
        <tr> <td><code>"26+"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>1.73</code>
             
                
             </td> 
             <td>Percentage of the population that has a dependence on or abuse illicit drugs in the past year. Illicit Drugs include marijuana/hashish, cocaine (including crack), heroin, hallucinogens, inhalants, or prescription-type psychotherapeutics used nonmedically. Dependence or abuse is based on definitions found in the 4th edition of the Diagnostic and Statistical Manual of Mental Disorders (DSM-IV).</td> </tr>
        
    </table>
</div>

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Rates-Illicit-Drugs-Abuse-Past-Year" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Rates-Illicit-Drugs-Abuse-Past-Year-12-17").click(function() {
        $( "#explore-Rates-Illicit-Drugs-Abuse-Past-Year-12-17" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Rates-Illicit-Drugs-Abuse-Past-Year-18-25").click(function() {
        $( "#explore-Rates-Illicit-Drugs-Abuse-Past-Year-18-25" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Rates-Illicit-Drugs-Abuse-Past-Year-26+").click(function() {
        $( "#explore-Rates-Illicit-Drugs-Abuse-Past-Year-26+" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Rates-Illicit-Drugs-All-Except-Marijuana-Used-Past-Month' title='Dictionary (3 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"12-17"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>5.36</code>
             
                
             </td> 
             <td>Percentage of the population that has used illicit drugs (except Marijuana) in the past month among this age group. Illicit Drugs Other Than Marijuana include cocaine (including crack), heroin, hallucinogens, inhalants, or prescription-type psychotherapeutics used nonmedically.</td> </tr>
        
        <tr> <td><code>"18-25"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>8.06</code>
             
                
             </td> 
             <td>Percentage of the population that has used illicit drugs (except Marijuana) in the past month among this age group. Illicit Drugs Other Than Marijuana include cocaine (including crack), heroin, hallucinogens, inhalants, or prescription-type psychotherapeutics used nonmedically.</td> </tr>
        
        <tr> <td><code>"26+"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>2.73</code>
             
                
             </td> 
             <td>Percentage of the population that has used illicit drugs (except Marijuana) in the past month among this age group. Illicit Drugs Other Than Marijuana include cocaine (including crack), heroin, hallucinogens, inhalants, or prescription-type psychotherapeutics used nonmedically.</td> </tr>
        
    </table>
</div>

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Rates-Illicit-Drugs-All-Except-Marijuana-Used-Past-Month" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Rates-Illicit-Drugs-All-Except-Marijuana-Used-Past-Month-12-17").click(function() {
        $( "#explore-Rates-Illicit-Drugs-All-Except-Marijuana-Used-Past-Month-12-17" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Rates-Illicit-Drugs-All-Except-Marijuana-Used-Past-Month-18-25").click(function() {
        $( "#explore-Rates-Illicit-Drugs-All-Except-Marijuana-Used-Past-Month-18-25" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Rates-Illicit-Drugs-All-Except-Marijuana-Used-Past-Month-26+").click(function() {
        $( "#explore-Rates-Illicit-Drugs-All-Except-Marijuana-Used-Past-Month-26+" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Rates-Illicit-Drugs-Cocaine-Used-Past-Year' title='Dictionary (3 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"12-17"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>1.66</code>
             
                
             </td> 
             <td>Percentage of the population that has used Cocaine in the past year among this age group.</td> </tr>
        
        <tr> <td><code>"18-25"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>5.49</code>
             
                
             </td> 
             <td>Percentage of the population that has used Cocaine in the past year among this age group.</td> </tr>
        
        <tr> <td><code>"26+"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>1.75</code>
             
                
             </td> 
             <td>Percentage of the population that has used Cocaine in the past year among this age group.</td> </tr>
        
    </table>
</div>

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Rates-Illicit-Drugs-Cocaine-Used-Past-Year" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Rates-Illicit-Drugs-Cocaine-Used-Past-Year-12-17").click(function() {
        $( "#explore-Rates-Illicit-Drugs-Cocaine-Used-Past-Year-12-17" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Rates-Illicit-Drugs-Cocaine-Used-Past-Year-18-25").click(function() {
        $( "#explore-Rates-Illicit-Drugs-Cocaine-Used-Past-Year-18-25" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Rates-Illicit-Drugs-Cocaine-Used-Past-Year-26+").click(function() {
        $( "#explore-Rates-Illicit-Drugs-Cocaine-Used-Past-Year-26+" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Rates-Illicit-Drugs-Dependence-Past-Year' title='Dictionary (3 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"12-17"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>2.56</code>
             
                
             </td> 
             <td>Percentage of the population that has a dependence on illicit drugs in the past year in this age group. Illicit Drugs include marijuana/hashish, cocaine (including crack), heroin, hallucinogens, inhalants, or prescription-type psychotherapeutics used non-medically. Dependence is based on the definition found in the 4th edition of the Diagnostic and Statistical Manual of Mental Disorders (DSM-IV).</td> </tr>
        
        <tr> <td><code>"18-25"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>4.65</code>
             
                
             </td> 
             <td>Percentage of the population that has a dependence on illicit drugs in the past year in this age group. Illicit Drugs include marijuana/hashish, cocaine (including crack), heroin, hallucinogens, inhalants, or prescription-type psychotherapeutics used non-medically. Dependence is based on the definition found in the 4th edition of the Diagnostic and Statistical Manual of Mental Disorders (DSM-IV).</td> </tr>
        
        <tr> <td><code>"26+"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>1.15</code>
             
                
             </td> 
             <td>Percentage of the population that has a dependence on illicit drugs in the past year in this age group. Illicit Drugs include marijuana/hashish, cocaine (including crack), heroin, hallucinogens, inhalants, or prescription-type psychotherapeutics used non-medically. Dependence is based on the definition found in the 4th edition of the Diagnostic and Statistical Manual of Mental Disorders (DSM-IV).</td> </tr>
        
    </table>
</div>

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Rates-Illicit-Drugs-Dependence-Past-Year" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Rates-Illicit-Drugs-Dependence-Past-Year-12-17").click(function() {
        $( "#explore-Rates-Illicit-Drugs-Dependence-Past-Year-12-17" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Rates-Illicit-Drugs-Dependence-Past-Year-18-25").click(function() {
        $( "#explore-Rates-Illicit-Drugs-Dependence-Past-Year-18-25" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Rates-Illicit-Drugs-Dependence-Past-Year-26+").click(function() {
        $( "#explore-Rates-Illicit-Drugs-Dependence-Past-Year-26+" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Rates-Illicit-Drugs-Need-Treatment-Past-Year' title='Dictionary (3 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"12-17"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>4.25</code>
             
                
             </td> 
             <td>Percentage of the population that needs but has not received treatment for illicit drugs in the past year among this age group. Needing But Not Receiving Treatment refers to respondents classified as needing treatment for illicit drugs, but not receiving treatment for an illicit drug problem at a specialty facility (i.e., drug and alcohol rehabilitation facilities [inpatient or outpatient], hospitals [inpatient only], and mental health centers). Illicit Drugs include marijuana/hashish, cocaine (including crack), inhalants, hallucinogens, heroin, or prescription-type psychotherapeutics used nonmedically.</td> </tr>
        
        <tr> <td><code>"18-25"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>5.94</code>
             
                
             </td> 
             <td>Percentage of the population that needs but has not received treatment for illicit drugs in the past year among this age group. Needing But Not Receiving Treatment refers to respondents classified as needing treatment for illicit drugs, but not receiving treatment for an illicit drug problem at a specialty facility (i.e., drug and alcohol rehabilitation facilities [inpatient or outpatient], hospitals [inpatient only], and mental health centers). Illicit Drugs include marijuana/hashish, cocaine (including crack), inhalants, hallucinogens, heroin, or prescription-type psychotherapeutics used nonmedically.</td> </tr>
        
        <tr> <td><code>"26+"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>1.28</code>
             
                
             </td> 
             <td>Percentage of the population that needs but has not received treatment for illicit drugs in the past year among this age group. Needing But Not Receiving Treatment refers to respondents classified as needing treatment for illicit drugs, but not receiving treatment for an illicit drug problem at a specialty facility (i.e., drug and alcohol rehabilitation facilities [inpatient or outpatient], hospitals [inpatient only], and mental health centers). Illicit Drugs include marijuana/hashish, cocaine (including crack), inhalants, hallucinogens, heroin, or prescription-type psychotherapeutics used nonmedically.</td> </tr>
        
    </table>
</div>

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Rates-Illicit-Drugs-Need-Treatment-Past-Year" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Rates-Illicit-Drugs-Need-Treatment-Past-Year-12-17").click(function() {
        $( "#explore-Rates-Illicit-Drugs-Need-Treatment-Past-Year-12-17" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Rates-Illicit-Drugs-Need-Treatment-Past-Year-18-25").click(function() {
        $( "#explore-Rates-Illicit-Drugs-Need-Treatment-Past-Year-18-25" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Rates-Illicit-Drugs-Need-Treatment-Past-Year-26+").click(function() {
        $( "#explore-Rates-Illicit-Drugs-Need-Treatment-Past-Year-26+" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Rates-Illicit-Drugs-Used-Past-Month' title='Dictionary (3 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"12-17"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>9.65</code>
             
                
             </td> 
             <td>Percentage of the population that has used illicit drugs in the past month among this age group. Illicit Drugs include marijuana/hashish, cocaine (including crack), heroin, hallucinogens, inhalants, or prescription-type psychotherapeutics used nonmedically.</td> </tr>
        
        <tr> <td><code>"18-25"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>15.94</code>
             
                
             </td> 
             <td>Percentage of the population that has used illicit drugs in the past month among this age group. Illicit Drugs include marijuana/hashish, cocaine (including crack), heroin, hallucinogens, inhalants, or prescription-type psychotherapeutics used nonmedically.</td> </tr>
        
        <tr> <td><code>"26+"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>4.57</code>
             
                
             </td> 
             <td>Percentage of the population that has used illicit drugs in the past month among this age group. Illicit Drugs include marijuana/hashish, cocaine (including crack), heroin, hallucinogens, inhalants, or prescription-type psychotherapeutics used nonmedically.</td> </tr>
        
    </table>
</div>

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Rates-Illicit-Drugs-Used-Past-Month" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Rates-Illicit-Drugs-Used-Past-Month-12-17").click(function() {
        $( "#explore-Rates-Illicit-Drugs-Used-Past-Month-12-17" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Rates-Illicit-Drugs-Used-Past-Month-18-25").click(function() {
        $( "#explore-Rates-Illicit-Drugs-Used-Past-Month-18-25" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Rates-Illicit-Drugs-Used-Past-Month-26+").click(function() {
        $( "#explore-Rates-Illicit-Drugs-Used-Past-Month-26+" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Rates-Marijuana' title='Dictionary (4 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"New Users"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Rates-Marijuana-New-Users'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Perceptions of Risk"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Rates-Marijuana-Perceptions-of-Risk'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Used Past Month"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Rates-Marijuana-Used-Past-Month'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Used Past Year"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Rates-Marijuana-Used-Past-Year'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
    </table>
</div>

    

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Rates-Marijuana" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Rates-Marijuana-New-Users").click(function() {
        $( "#explore-Rates-Marijuana-New-Users" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Rates-Marijuana-Perceptions-of-Risk").click(function() {
        $( "#explore-Rates-Marijuana-Perceptions-of-Risk" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Rates-Marijuana-Used-Past-Month").click(function() {
        $( "#explore-Rates-Marijuana-Used-Past-Month" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Rates-Marijuana-Used-Past-Year").click(function() {
        $( "#explore-Rates-Marijuana-Used-Past-Year" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Rates-Marijuana-New-Users' title='Dictionary (3 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"12-17"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>5.97</code>
             
                
             </td> 
             <td>Percentage of the population that has started using Marijuana in the past year among this age group.</td> </tr>
        
        <tr> <td><code>"18-25"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>6.23</code>
             
                
             </td> 
             <td>Percentage of the population that has started using Marijuana in the past year among this age group.</td> </tr>
        
        <tr> <td><code>"26+"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>0.09</code>
             
                
             </td> 
             <td>Percentage of the population that has started using Marijuana in the past year among this age group.</td> </tr>
        
    </table>
</div>

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Rates-Marijuana-New-Users" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Rates-Marijuana-New-Users-12-17").click(function() {
        $( "#explore-Rates-Marijuana-New-Users-12-17" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Rates-Marijuana-New-Users-18-25").click(function() {
        $( "#explore-Rates-Marijuana-New-Users-18-25" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Rates-Marijuana-New-Users-26+").click(function() {
        $( "#explore-Rates-Marijuana-New-Users-26+" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Rates-Marijuana-Perceptions-of-Risk' title='Dictionary (3 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"12-17"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>39.58</code>
             
                
             </td> 
             <td>Percentage of the population that perceives great risk in Smoking Marijuana once a month, among this age group.</td> </tr>
        
        <tr> <td><code>"18-25"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>30.97</code>
             
                
             </td> 
             <td>Percentage of the population that perceives great risk in Smoking Marijuana once a month, among this age group.</td> </tr>
        
        <tr> <td><code>"26+"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>52.76</code>
             
                
             </td> 
             <td>Percentage of the population that perceives great risk in Smoking Marijuana once a month, among this age group.</td> </tr>
        
    </table>
</div>

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Rates-Marijuana-Perceptions-of-Risk" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Rates-Marijuana-Perceptions-of-Risk-12-17").click(function() {
        $( "#explore-Rates-Marijuana-Perceptions-of-Risk-12-17" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Rates-Marijuana-Perceptions-of-Risk-18-25").click(function() {
        $( "#explore-Rates-Marijuana-Perceptions-of-Risk-18-25" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Rates-Marijuana-Perceptions-of-Risk-26+").click(function() {
        $( "#explore-Rates-Marijuana-Perceptions-of-Risk-26+" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Rates-Marijuana-Used-Past-Month' title='Dictionary (3 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"12-17"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>6.37</code>
             
                
             </td> 
             <td>Percentage of the population that has used Marijuana in the past month among this age group.</td> </tr>
        
        <tr> <td><code>"18-25"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>12.47</code>
             
                
             </td> 
             <td>Percentage of the population that has used Marijuana in the past month among this age group.</td> </tr>
        
        <tr> <td><code>"26+"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>2.6</code>
             
                
             </td> 
             <td>Percentage of the population that has used Marijuana in the past month among this age group.</td> </tr>
        
    </table>
</div>

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Rates-Marijuana-Used-Past-Month" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Rates-Marijuana-Used-Past-Month-12-17").click(function() {
        $( "#explore-Rates-Marijuana-Used-Past-Month-12-17" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Rates-Marijuana-Used-Past-Month-18-25").click(function() {
        $( "#explore-Rates-Marijuana-Used-Past-Month-18-25" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Rates-Marijuana-Used-Past-Month-26+").click(function() {
        $( "#explore-Rates-Marijuana-Used-Past-Month-26+" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Rates-Marijuana-Used-Past-Year' title='Dictionary (3 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"12-17"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>12.75</code>
             
                
             </td> 
             <td>Percentage of the population that has used Marijuana in the past year among this age group.</td> </tr>
        
        <tr> <td><code>"18-25"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>23.79</code>
             
                
             </td> 
             <td>Percentage of the population that has used Marijuana in the past year among this age group.</td> </tr>
        
        <tr> <td><code>"26+"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>5.03</code>
             
                
             </td> 
             <td>Percentage of the population that has used Marijuana in the past year among this age group.</td> </tr>
        
    </table>
</div>

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Rates-Marijuana-Used-Past-Year" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Rates-Marijuana-Used-Past-Year-12-17").click(function() {
        $( "#explore-Rates-Marijuana-Used-Past-Year-12-17" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Rates-Marijuana-Used-Past-Year-18-25").click(function() {
        $( "#explore-Rates-Marijuana-Used-Past-Year-18-25" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Rates-Marijuana-Used-Past-Year-26+").click(function() {
        $( "#explore-Rates-Marijuana-Used-Past-Year-26+" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Rates-Tobacco' title='Dictionary (3 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Cigarette Past Month"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Rates-Tobacco-Cigarette-Past-Month'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Perceptions of Risk"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Rates-Tobacco-Perceptions-of-Risk'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Use Past Month"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Rates-Tobacco-Use-Past-Month'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
    </table>
</div>

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Rates-Tobacco" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Rates-Tobacco-Cigarette-Past-Month").click(function() {
        $( "#explore-Rates-Tobacco-Cigarette-Past-Month" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Rates-Tobacco-Perceptions-of-Risk").click(function() {
        $( "#explore-Rates-Tobacco-Perceptions-of-Risk" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Rates-Tobacco-Use-Past-Month").click(function() {
        $( "#explore-Rates-Tobacco-Use-Past-Month" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Rates-Tobacco-Cigarette-Past-Month' title='Dictionary (3 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"12-17"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>13.69</code>
             
                
             </td> 
             <td>Percentage of the population that has used Cigarettes in the past month, among this age group.</td> </tr>
        
        <tr> <td><code>"18-25"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>39.24</code>
             
                
             </td> 
             <td>Percentage of the population that has used Cigarettes in the past month, among this age group.</td> </tr>
        
        <tr> <td><code>"26+"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>25.88</code>
             
                
             </td> 
             <td>Percentage of the population that has used Cigarettes in the past month, among this age group.</td> </tr>
        
    </table>
</div>

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Rates-Tobacco-Cigarette-Past-Month" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Rates-Tobacco-Cigarette-Past-Month-12-17").click(function() {
        $( "#explore-Rates-Tobacco-Cigarette-Past-Month-12-17" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Rates-Tobacco-Cigarette-Past-Month-18-25").click(function() {
        $( "#explore-Rates-Tobacco-Cigarette-Past-Month-18-25" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Rates-Tobacco-Cigarette-Past-Month-26+").click(function() {
        $( "#explore-Rates-Tobacco-Cigarette-Past-Month-26+" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Rates-Tobacco-Perceptions-of-Risk' title='Dictionary (3 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"12-17"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>62.18</code>
             
                
             </td> 
             <td>Percentage of the population that perceives great risk in smoking one or more packs of cigarettes per day, among this age group.</td> </tr>
        
        <tr> <td><code>"18-25"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>62.28</code>
             
                
             </td> 
             <td>Percentage of the population that perceives great risk in smoking one or more packs of cigarettes per day, among this age group.</td> </tr>
        
        <tr> <td><code>"26+"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>70.21</code>
             
                
             </td> 
             <td>Percentage of the population that perceives great risk in smoking one or more packs of cigarettes per day, among this age group.</td> </tr>
        
    </table>
</div>

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Rates-Tobacco-Perceptions-of-Risk" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Rates-Tobacco-Perceptions-of-Risk-12-17").click(function() {
        $( "#explore-Rates-Tobacco-Perceptions-of-Risk-12-17" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Rates-Tobacco-Perceptions-of-Risk-18-25").click(function() {
        $( "#explore-Rates-Tobacco-Perceptions-of-Risk-18-25" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Rates-Tobacco-Perceptions-of-Risk-26+").click(function() {
        $( "#explore-Rates-Tobacco-Perceptions-of-Risk-26+" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Rates-Tobacco-Use-Past-Month' title='Dictionary (3 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"12-17"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>16.66</code>
             
                
             </td> 
             <td>Percentage of the population that has used Tobacco products in the past month, among this age group. Tobacco Products include cigarettes, smokeless tobacco (i.e., chewing tobacco or snuff), cigars, or pipe tobacco.</td> </tr>
        
        <tr> <td><code>"18-25"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>45.2</code>
             
                
             </td> 
             <td>Percentage of the population that has used Tobacco products in the past month, among this age group. Tobacco Products include cigarettes, smokeless tobacco (i.e., chewing tobacco or snuff), cigars, or pipe tobacco.</td> </tr>
        
        <tr> <td><code>"26+"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>33.07</code>
             
                
             </td> 
             <td>Percentage of the population that has used Tobacco products in the past month, among this age group. Tobacco Products include cigarettes, smokeless tobacco (i.e., chewing tobacco or snuff), cigars, or pipe tobacco.</td> </tr>
        
    </table>
</div>

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Rates-Tobacco-Use-Past-Month" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Rates-Tobacco-Use-Past-Month-12-17").click(function() {
        $( "#explore-Rates-Tobacco-Use-Past-Month-12-17" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Rates-Tobacco-Use-Past-Month-18-25").click(function() {
        $( "#explore-Rates-Tobacco-Use-Past-Month-18-25" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Rates-Tobacco-Use-Past-Month-26+").click(function() {
        $( "#explore-Rates-Tobacco-Use-Past-Month-26+" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Totals-Alcohol' title='Dictionary (7 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Abuse Past Year"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Totals-Alcohol-Abuse-Past-Year'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Binge Past Month"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Totals-Alcohol-Binge-Past-Month'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Dependence Past Year"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Totals-Alcohol-Dependence-Past-Year'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"In Minors"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Totals-Alcohol-In-Minors'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Need Treatment Past Year"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Totals-Alcohol-Need-Treatment-Past-Year'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Perceptions of Risk"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Totals-Alcohol-Perceptions-of-Risk'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Use Past Month"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Totals-Alcohol-Use-Past-Month'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
    </table>
</div>

    

    

    

    

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Totals-Alcohol" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Totals-Alcohol-Abuse-Past-Year").click(function() {
        $( "#explore-Totals-Alcohol-Abuse-Past-Year" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Totals-Alcohol-Binge-Past-Month").click(function() {
        $( "#explore-Totals-Alcohol-Binge-Past-Month" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Totals-Alcohol-Dependence-Past-Year").click(function() {
        $( "#explore-Totals-Alcohol-Dependence-Past-Year" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Totals-Alcohol-In-Minors").click(function() {
        $( "#explore-Totals-Alcohol-In-Minors" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Totals-Alcohol-Need-Treatment-Past-Year").click(function() {
        $( "#explore-Totals-Alcohol-Need-Treatment-Past-Year" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Totals-Alcohol-Perceptions-of-Risk").click(function() {
        $( "#explore-Totals-Alcohol-Perceptions-of-Risk" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Totals-Alcohol-Use-Past-Month").click(function() {
        $( "#explore-Totals-Alcohol-Use-Past-Month" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Totals-Alcohol-Abuse-Past-Year' title='Dictionary (3 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"12-17"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>1855</code>
             
                
             </td> 
             <td>The estimated number of people (in thousands) that have a dependence on or abused alcohol in the past year among this age group. Dependence or abuse is based on definitions found in the 4th edition of the Diagnostic and Statistical Manual of Mental Disorders (DSM-IV).</td> </tr>
        
        <tr> <td><code>"18-25"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>6803</code>
             
                
             </td> 
             <td>The estimated number of people (in thousands) that have a dependence on or abused alcohol in the past year among this age group. Dependence or abuse is based on definitions found in the 4th edition of the Diagnostic and Statistical Manual of Mental Disorders (DSM-IV).</td> </tr>
        
        <tr> <td><code>"26+"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>13754</code>
             
                
             </td> 
             <td>The estimated number of people (in thousands) that have a dependence on or abused alcohol in the past year among this age group. Dependence or abuse is based on definitions found in the 4th edition of the Diagnostic and Statistical Manual of Mental Disorders (DSM-IV).</td> </tr>
        
    </table>
</div>

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Totals-Alcohol-Abuse-Past-Year" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Totals-Alcohol-Abuse-Past-Year-12-17").click(function() {
        $( "#explore-Totals-Alcohol-Abuse-Past-Year-12-17" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Totals-Alcohol-Abuse-Past-Year-18-25").click(function() {
        $( "#explore-Totals-Alcohol-Abuse-Past-Year-18-25" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Totals-Alcohol-Abuse-Past-Year-26+").click(function() {
        $( "#explore-Totals-Alcohol-Abuse-Past-Year-26+" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Totals-Alcohol-Binge-Past-Month' title='Dictionary (3 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"12-17"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>3162</code>
             
                
             </td> 
             <td>The estimated number of people (in thousands) that have binged on alcohol in the past month among this age group. Binge Alcohol Use is defined as drinking five or more drinks on the same occasion (i.e., at the same time or within a couple of hours of each other) on at least 1 day in the past 30 days.</td> </tr>
        
        <tr> <td><code>"18-25"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>17429</code>
             
                
             </td> 
             <td>The estimated number of people (in thousands) that have binged on alcohol in the past month among this age group. Binge Alcohol Use is defined as drinking five or more drinks on the same occasion (i.e., at the same time or within a couple of hours of each other) on at least 1 day in the past 30 days.</td> </tr>
        
        <tr> <td><code>"26+"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>46083</code>
             
                
             </td> 
             <td>The estimated number of people (in thousands) that have binged on alcohol in the past month among this age group. Binge Alcohol Use is defined as drinking five or more drinks on the same occasion (i.e., at the same time or within a couple of hours of each other) on at least 1 day in the past 30 days.</td> </tr>
        
    </table>
</div>

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Totals-Alcohol-Binge-Past-Month" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Totals-Alcohol-Binge-Past-Month-12-17").click(function() {
        $( "#explore-Totals-Alcohol-Binge-Past-Month-12-17" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Totals-Alcohol-Binge-Past-Month-18-25").click(function() {
        $( "#explore-Totals-Alcohol-Binge-Past-Month-18-25" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Totals-Alcohol-Binge-Past-Month-26+").click(function() {
        $( "#explore-Totals-Alcohol-Binge-Past-Month-26+" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Totals-Alcohol-Dependence-Past-Year' title='Dictionary (3 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"12-17"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>641</code>
             
                
             </td> 
             <td>The estimated number of people (in thousands) that have a dependence on alcohol in the past year among this age group. Dependence is based on the definition found in the 4th edition of the Diagnostic and Statistical Manual of Mental Disorders (DSM-IV).</td> </tr>
        
        <tr> <td><code>"18-25"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>2761</code>
             
                
             </td> 
             <td>The estimated number of people (in thousands) that have a dependence on alcohol in the past year among this age group. Dependence is based on the definition found in the 4th edition of the Diagnostic and Statistical Manual of Mental Disorders (DSM-IV).</td> </tr>
        
        <tr> <td><code>"26+"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>6751</code>
             
                
             </td> 
             <td>The estimated number of people (in thousands) that have a dependence on alcohol in the past year among this age group. Dependence is based on the definition found in the 4th edition of the Diagnostic and Statistical Manual of Mental Disorders (DSM-IV).</td> </tr>
        
    </table>
</div>

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Totals-Alcohol-Dependence-Past-Year" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Totals-Alcohol-Dependence-Past-Year-12-17").click(function() {
        $( "#explore-Totals-Alcohol-Dependence-Past-Year-12-17" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Totals-Alcohol-Dependence-Past-Year-18-25").click(function() {
        $( "#explore-Totals-Alcohol-Dependence-Past-Year-18-25" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Totals-Alcohol-Dependence-Past-Year-26+").click(function() {
        $( "#explore-Totals-Alcohol-Dependence-Past-Year-26+" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Totals-Alcohol-In-Minors' title='Dictionary (2 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Abuse"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>9583</code>
             
                
             </td> 
             <td>The estimated number of minors (12-20 years old) who have binged alcohol in the past month. Binge Alcohol Use is defined as drinking five or more drinks on the same occasion (i.e., at the same time or within a couple of hours of each other) on at least 1 day in the past 30 days.</td> </tr>
        
        <tr> <td><code>"Use"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>14495</code>
             
                
             </td> 
             <td>The estimated number of minors (12-20 years old) who have drank alcohol in the past month.</td> </tr>
        
    </table>
</div>

    

    

<script>
$(document).ready(function() {
    $( "#explore-Totals-Alcohol-In-Minors" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Totals-Alcohol-In-Minors-Abuse").click(function() {
        $( "#explore-Totals-Alcohol-In-Minors-Abuse" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Totals-Alcohol-In-Minors-Use").click(function() {
        $( "#explore-Totals-Alcohol-In-Minors-Use" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Totals-Alcohol-Need-Treatment-Past-Year' title='Dictionary (3 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"12-17"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>1786</code>
             
                
             </td> 
             <td>The estimated number of people (in thousands) that have needs but has not recieved treatment for alcohol use in the past year among this age group. Needing But Not Receiving Treatment refers to respondents classified as needing treatment for alcohol, but not receiving treatment for an alcohol problem at a specialty facility (i.e., drug and alcohol rehabilitation facilities [inpatient or outpatient], hospitals [inpatient only], and mental health centers).</td> </tr>
        
        <tr> <td><code>"18-25"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>6579</code>
             
                
             </td> 
             <td>The estimated number of people (in thousands) that have needs but has not recieved treatment for alcohol use in the past year among this age group. Needing But Not Receiving Treatment refers to respondents classified as needing treatment for alcohol, but not receiving treatment for an alcohol problem at a specialty facility (i.e., drug and alcohol rehabilitation facilities [inpatient or outpatient], hospitals [inpatient only], and mental health centers).</td> </tr>
        
        <tr> <td><code>"26+"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>13026</code>
             
                
             </td> 
             <td>The estimated number of people (in thousands) that have needs but has not recieved treatment for alcohol use in the past year among this age group. Needing But Not Receiving Treatment refers to respondents classified as needing treatment for alcohol, but not receiving treatment for an alcohol problem at a specialty facility (i.e., drug and alcohol rehabilitation facilities [inpatient or outpatient], hospitals [inpatient only], and mental health centers).</td> </tr>
        
    </table>
</div>

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Totals-Alcohol-Need-Treatment-Past-Year" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Totals-Alcohol-Need-Treatment-Past-Year-12-17").click(function() {
        $( "#explore-Totals-Alcohol-Need-Treatment-Past-Year-12-17" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Totals-Alcohol-Need-Treatment-Past-Year-18-25").click(function() {
        $( "#explore-Totals-Alcohol-Need-Treatment-Past-Year-18-25" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Totals-Alcohol-Need-Treatment-Past-Year-26+").click(function() {
        $( "#explore-Totals-Alcohol-Need-Treatment-Past-Year-26+" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Totals-Alcohol-Perceptions-of-Risk' title='Dictionary (3 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"12-17"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>16422</code>
             
                
             </td> 
             <td>The estimated number of people (in thousands) that perceive of great risk in having five or more drinks of an alcoholic beverage once or twice a week, among this age group.</td> </tr>
        
        <tr> <td><code>"18-25"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>18760</code>
             
                
             </td> 
             <td>The estimated number of people (in thousands) that perceive of great risk in having five or more drinks of an alcoholic beverage once or twice a week, among this age group.</td> </tr>
        
        <tr> <td><code>"26+"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>134944</code>
             
                
             </td> 
             <td>The estimated number of people (in thousands) that perceive of great risk in having five or more drinks of an alcoholic beverage once or twice a week, among this age group.</td> </tr>
        
    </table>
</div>

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Totals-Alcohol-Perceptions-of-Risk" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Totals-Alcohol-Perceptions-of-Risk-12-17").click(function() {
        $( "#explore-Totals-Alcohol-Perceptions-of-Risk-12-17" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Totals-Alcohol-Perceptions-of-Risk-18-25").click(function() {
        $( "#explore-Totals-Alcohol-Perceptions-of-Risk-18-25" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Totals-Alcohol-Perceptions-of-Risk-26+").click(function() {
        $( "#explore-Totals-Alcohol-Perceptions-of-Risk-26+" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Totals-Alcohol-Use-Past-Month' title='Dictionary (3 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"12-17"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>5763</code>
             
                
             </td> 
             <td>The estimated number of people (in thousands) that have used alcohol in the past month, among this age group.</td> </tr>
        
        <tr> <td><code>"18-25"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>25398</code>
             
                
             </td> 
             <td>The estimated number of people (in thousands) that have used alcohol in the past month, among this age group.</td> </tr>
        
        <tr> <td><code>"26+"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>104408</code>
             
                
             </td> 
             <td>The estimated number of people (in thousands) that have used alcohol in the past month, among this age group.</td> </tr>
        
    </table>
</div>

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Totals-Alcohol-Use-Past-Month" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Totals-Alcohol-Use-Past-Month-12-17").click(function() {
        $( "#explore-Totals-Alcohol-Use-Past-Month-12-17" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Totals-Alcohol-Use-Past-Month-18-25").click(function() {
        $( "#explore-Totals-Alcohol-Use-Past-Month-18-25" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Totals-Alcohol-Use-Past-Month-26+").click(function() {
        $( "#explore-Totals-Alcohol-Use-Past-Month-26+" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Totals-Illicit-Drugs' title='Dictionary (6 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Abuse Past Year"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Totals-Illicit-Drugs-Abuse-Past-Year'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"All Except Marijuana Used Past Month"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Totals-Illicit-Drugs-All-Except-Marijuana-Used-Past-Month'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Cocaine Used Past Year"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Totals-Illicit-Drugs-Cocaine-Used-Past-Year'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Dependence Past Year"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Totals-Illicit-Drugs-Dependence-Past-Year'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Need Treatment Past Year"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Totals-Illicit-Drugs-Need-Treatment-Past-Year'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Used Past Month"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Totals-Illicit-Drugs-Used-Past-Month'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
    </table>
</div>

    

    

    

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Totals-Illicit-Drugs" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Totals-Illicit-Drugs-Abuse-Past-Year").click(function() {
        $( "#explore-Totals-Illicit-Drugs-Abuse-Past-Year" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Totals-Illicit-Drugs-All-Except-Marijuana-Used-Past-Month").click(function() {
        $( "#explore-Totals-Illicit-Drugs-All-Except-Marijuana-Used-Past-Month" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Totals-Illicit-Drugs-Cocaine-Used-Past-Year").click(function() {
        $( "#explore-Totals-Illicit-Drugs-Cocaine-Used-Past-Year" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Totals-Illicit-Drugs-Dependence-Past-Year").click(function() {
        $( "#explore-Totals-Illicit-Drugs-Dependence-Past-Year" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Totals-Illicit-Drugs-Need-Treatment-Past-Year").click(function() {
        $( "#explore-Totals-Illicit-Drugs-Need-Treatment-Past-Year" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Totals-Illicit-Drugs-Used-Past-Month").click(function() {
        $( "#explore-Totals-Illicit-Drugs-Used-Past-Month" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Totals-Illicit-Drugs-Abuse-Past-Year' title='Dictionary (3 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"12-17"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>1794</code>
             
                
             </td> 
             <td>The estimated number of people (in thousands) that have a dependence on or abuse illicit drugs in the past year. Illicit Drugs include marijuana/hashish, cocaine (including crack), heroin, hallucinogens, inhalants, or prescription-type psychotherapeutics used nonmedically. Dependence or abuse is based on definitions found in the 4th edition of the Diagnostic and Statistical Manual of Mental Disorders (DSM-IV).</td> </tr>
        
        <tr> <td><code>"18-25"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>3254</code>
             
                
             </td> 
             <td>The estimated number of people (in thousands) that have a dependence on or abuse illicit drugs in the past year. Illicit Drugs include marijuana/hashish, cocaine (including crack), heroin, hallucinogens, inhalants, or prescription-type psychotherapeutics used nonmedically. Dependence or abuse is based on definitions found in the 4th edition of the Diagnostic and Statistical Manual of Mental Disorders (DSM-IV).</td> </tr>
        
        <tr> <td><code>"26+"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>4846</code>
             
                
             </td> 
             <td>The estimated number of people (in thousands) that have a dependence on or abuse illicit drugs in the past year. Illicit Drugs include marijuana/hashish, cocaine (including crack), heroin, hallucinogens, inhalants, or prescription-type psychotherapeutics used nonmedically. Dependence or abuse is based on definitions found in the 4th edition of the Diagnostic and Statistical Manual of Mental Disorders (DSM-IV).</td> </tr>
        
    </table>
</div>

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Totals-Illicit-Drugs-Abuse-Past-Year" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Totals-Illicit-Drugs-Abuse-Past-Year-12-17").click(function() {
        $( "#explore-Totals-Illicit-Drugs-Abuse-Past-Year-12-17" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Totals-Illicit-Drugs-Abuse-Past-Year-18-25").click(function() {
        $( "#explore-Totals-Illicit-Drugs-Abuse-Past-Year-18-25" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Totals-Illicit-Drugs-Abuse-Past-Year-26+").click(function() {
        $( "#explore-Totals-Illicit-Drugs-Abuse-Past-Year-26+" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Totals-Illicit-Drugs-All-Except-Marijuana-Used-Past-Month' title='Dictionary (3 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"12-17"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>2059</code>
             
                
             </td> 
             <td>The estimated number of people (in thousands) that have used illicit drugs (except Marijuana) in the past month among this age group. Illicit Drugs Other Than Marijuana include cocaine (including crack), heroin, hallucinogens, inhalants, or prescription-type psychotherapeutics used nonmedically.</td> </tr>
        
        <tr> <td><code>"18-25"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>4017</code>
             
                
             </td> 
             <td>The estimated number of people (in thousands) that have used illicit drugs (except Marijuana) in the past month among this age group. Illicit Drugs Other Than Marijuana include cocaine (including crack), heroin, hallucinogens, inhalants, or prescription-type psychotherapeutics used nonmedically.</td> </tr>
        
        <tr> <td><code>"26+"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>7647</code>
             
                
             </td> 
             <td>The estimated number of people (in thousands) that have used illicit drugs (except Marijuana) in the past month among this age group. Illicit Drugs Other Than Marijuana include cocaine (including crack), heroin, hallucinogens, inhalants, or prescription-type psychotherapeutics used nonmedically.</td> </tr>
        
    </table>
</div>

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Totals-Illicit-Drugs-All-Except-Marijuana-Used-Past-Month" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Totals-Illicit-Drugs-All-Except-Marijuana-Used-Past-Month-12-17").click(function() {
        $( "#explore-Totals-Illicit-Drugs-All-Except-Marijuana-Used-Past-Month-12-17" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Totals-Illicit-Drugs-All-Except-Marijuana-Used-Past-Month-18-25").click(function() {
        $( "#explore-Totals-Illicit-Drugs-All-Except-Marijuana-Used-Past-Month-18-25" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Totals-Illicit-Drugs-All-Except-Marijuana-Used-Past-Month-26+").click(function() {
        $( "#explore-Totals-Illicit-Drugs-All-Except-Marijuana-Used-Past-Month-26+" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Totals-Illicit-Drugs-Cocaine-Used-Past-Year' title='Dictionary (3 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"12-17"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>637</code>
             
                
             </td> 
             <td>The estimated number of people (in thousands) that have used Cocaine in the past year among this age group.</td> </tr>
        
        <tr> <td><code>"18-25"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>2736</code>
             
                
             </td> 
             <td>The estimated number of people (in thousands) that have used Cocaine in the past year among this age group.</td> </tr>
        
        <tr> <td><code>"26+"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>4902</code>
             
                
             </td> 
             <td>The estimated number of people (in thousands) that have used Cocaine in the past year among this age group.</td> </tr>
        
    </table>
</div>

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Totals-Illicit-Drugs-Cocaine-Used-Past-Year" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Totals-Illicit-Drugs-Cocaine-Used-Past-Year-12-17").click(function() {
        $( "#explore-Totals-Illicit-Drugs-Cocaine-Used-Past-Year-12-17" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Totals-Illicit-Drugs-Cocaine-Used-Past-Year-18-25").click(function() {
        $( "#explore-Totals-Illicit-Drugs-Cocaine-Used-Past-Year-18-25" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Totals-Illicit-Drugs-Cocaine-Used-Past-Year-26+").click(function() {
        $( "#explore-Totals-Illicit-Drugs-Cocaine-Used-Past-Year-26+" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Totals-Illicit-Drugs-Dependence-Past-Year' title='Dictionary (3 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"12-17"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>983</code>
             
                
             </td> 
             <td>The estimated number of people (in thousands) that have a dependence on illicit drugs in the past year in this age group. Illicit Drugs include marijuana/hashish, cocaine (including crack), heroin, hallucinogens, inhalants, or prescription-type psychotherapeutics used non-medically. Dependence is based on the definition found in the 4th edition of the Diagnostic and Statistical Manual of Mental Disorders (DSM-IV).</td> </tr>
        
        <tr> <td><code>"18-25"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>2317</code>
             
                
             </td> 
             <td>The estimated number of people (in thousands) that have a dependence on illicit drugs in the past year in this age group. Illicit Drugs include marijuana/hashish, cocaine (including crack), heroin, hallucinogens, inhalants, or prescription-type psychotherapeutics used non-medically. Dependence is based on the definition found in the 4th edition of the Diagnostic and Statistical Manual of Mental Disorders (DSM-IV).</td> </tr>
        
        <tr> <td><code>"26+"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>3221</code>
             
                
             </td> 
             <td>The estimated number of people (in thousands) that have a dependence on illicit drugs in the past year in this age group. Illicit Drugs include marijuana/hashish, cocaine (including crack), heroin, hallucinogens, inhalants, or prescription-type psychotherapeutics used non-medically. Dependence is based on the definition found in the 4th edition of the Diagnostic and Statistical Manual of Mental Disorders (DSM-IV).</td> </tr>
        
    </table>
</div>

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Totals-Illicit-Drugs-Dependence-Past-Year" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Totals-Illicit-Drugs-Dependence-Past-Year-12-17").click(function() {
        $( "#explore-Totals-Illicit-Drugs-Dependence-Past-Year-12-17" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Totals-Illicit-Drugs-Dependence-Past-Year-18-25").click(function() {
        $( "#explore-Totals-Illicit-Drugs-Dependence-Past-Year-18-25" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Totals-Illicit-Drugs-Dependence-Past-Year-26+").click(function() {
        $( "#explore-Totals-Illicit-Drugs-Dependence-Past-Year-26+" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Totals-Illicit-Drugs-Need-Treatment-Past-Year' title='Dictionary (3 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"12-17"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>1633</code>
             
                
             </td> 
             <td>The estimated number of people (in thousands) that need but has not received treatment for illicit drugs in the past year among this age group. Needing But Not Receiving Treatment refers to respondents classified as needing treatment for illicit drugs, but not receiving treatment for an illicit drug problem at a specialty facility (i.e., drug and alcohol rehabilitation facilities [inpatient or outpatient], hospitals [inpatient only], and mental health centers). Illicit Drugs include marijuana/hashish, cocaine (including crack), inhalants, hallucinogens, heroin, or prescription-type psychotherapeutics used nonmedically.</td> </tr>
        
        <tr> <td><code>"18-25"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>2960</code>
             
                
             </td> 
             <td>The estimated number of people (in thousands) that need but has not received treatment for illicit drugs in the past year among this age group. Needing But Not Receiving Treatment refers to respondents classified as needing treatment for illicit drugs, but not receiving treatment for an illicit drug problem at a specialty facility (i.e., drug and alcohol rehabilitation facilities [inpatient or outpatient], hospitals [inpatient only], and mental health centers). Illicit Drugs include marijuana/hashish, cocaine (including crack), inhalants, hallucinogens, heroin, or prescription-type psychotherapeutics used nonmedically.</td> </tr>
        
        <tr> <td><code>"26+"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>3585</code>
             
                
             </td> 
             <td>The estimated number of people (in thousands) that need but has not received treatment for illicit drugs in the past year among this age group. Needing But Not Receiving Treatment refers to respondents classified as needing treatment for illicit drugs, but not receiving treatment for an illicit drug problem at a specialty facility (i.e., drug and alcohol rehabilitation facilities [inpatient or outpatient], hospitals [inpatient only], and mental health centers). Illicit Drugs include marijuana/hashish, cocaine (including crack), inhalants, hallucinogens, heroin, or prescription-type psychotherapeutics used nonmedically.</td> </tr>
        
    </table>
</div>

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Totals-Illicit-Drugs-Need-Treatment-Past-Year" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Totals-Illicit-Drugs-Need-Treatment-Past-Year-12-17").click(function() {
        $( "#explore-Totals-Illicit-Drugs-Need-Treatment-Past-Year-12-17" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Totals-Illicit-Drugs-Need-Treatment-Past-Year-18-25").click(function() {
        $( "#explore-Totals-Illicit-Drugs-Need-Treatment-Past-Year-18-25" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Totals-Illicit-Drugs-Need-Treatment-Past-Year-26+").click(function() {
        $( "#explore-Totals-Illicit-Drugs-Need-Treatment-Past-Year-26+" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Totals-Illicit-Drugs-Used-Past-Month' title='Dictionary (3 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"12-17"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>3707</code>
             
                
             </td> 
             <td>The estimated number of people (in thousands) that have used illicit drugs in the past month among this age group. Illicit Drugs include marijuana/hashish, cocaine (including crack), heroin, hallucinogens, inhalants, or prescription-type psychotherapeutics used nonmedically.</td> </tr>
        
        <tr> <td><code>"18-25"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>7944</code>
             
                
             </td> 
             <td>The estimated number of people (in thousands) that have used illicit drugs in the past month among this age group. Illicit Drugs include marijuana/hashish, cocaine (including crack), heroin, hallucinogens, inhalants, or prescription-type psychotherapeutics used nonmedically.</td> </tr>
        
        <tr> <td><code>"26+"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>12802</code>
             
                
             </td> 
             <td>The estimated number of people (in thousands) that have used illicit drugs in the past month among this age group. Illicit Drugs include marijuana/hashish, cocaine (including crack), heroin, hallucinogens, inhalants, or prescription-type psychotherapeutics used nonmedically.</td> </tr>
        
    </table>
</div>

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Totals-Illicit-Drugs-Used-Past-Month" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Totals-Illicit-Drugs-Used-Past-Month-12-17").click(function() {
        $( "#explore-Totals-Illicit-Drugs-Used-Past-Month-12-17" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Totals-Illicit-Drugs-Used-Past-Month-18-25").click(function() {
        $( "#explore-Totals-Illicit-Drugs-Used-Past-Month-18-25" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Totals-Illicit-Drugs-Used-Past-Month-26+").click(function() {
        $( "#explore-Totals-Illicit-Drugs-Used-Past-Month-26+" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Totals-Marijuana' title='Dictionary (4 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"New Users"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Totals-Marijuana-New-Users'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Perceptions of Risk"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Totals-Marijuana-Perceptions-of-Risk'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Used Past Month"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Totals-Marijuana-Used-Past-Month'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Used Past Year"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Totals-Marijuana-Used-Past-Year'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
    </table>
</div>

    

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Totals-Marijuana" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Totals-Marijuana-New-Users").click(function() {
        $( "#explore-Totals-Marijuana-New-Users" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Totals-Marijuana-Perceptions-of-Risk").click(function() {
        $( "#explore-Totals-Marijuana-Perceptions-of-Risk" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Totals-Marijuana-Used-Past-Month").click(function() {
        $( "#explore-Totals-Marijuana-Used-Past-Month" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Totals-Marijuana-Used-Past-Year").click(function() {
        $( "#explore-Totals-Marijuana-Used-Past-Year" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Totals-Marijuana-New-Users' title='Dictionary (3 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"12-17"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>2293</code>
             
                
             </td> 
             <td>The estimated number of people (in thousands) that have started using Marijuana in the past year among this age group.</td> </tr>
        
        <tr> <td><code>"18-25"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>3105</code>
             
                
             </td> 
             <td>The estimated number of people (in thousands) that have started using Marijuana in the past year among this age group.</td> </tr>
        
        <tr> <td><code>"26+"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>252</code>
             
                
             </td> 
             <td>The estimated number of people (in thousands) that have started using Marijuana in the past year among this age group.</td> </tr>
        
    </table>
</div>

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Totals-Marijuana-New-Users" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Totals-Marijuana-New-Users-12-17").click(function() {
        $( "#explore-Totals-Marijuana-New-Users-12-17" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Totals-Marijuana-New-Users-18-25").click(function() {
        $( "#explore-Totals-Marijuana-New-Users-18-25" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Totals-Marijuana-New-Users-26+").click(function() {
        $( "#explore-Totals-Marijuana-New-Users-26+" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Totals-Marijuana-Perceptions-of-Risk' title='Dictionary (3 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"12-17"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>15208</code>
             
                
             </td> 
             <td>The estimated number of people (in thousands) that perceive great risk in Smoking Marijuana once a month, among this age group.</td> </tr>
        
        <tr> <td><code>"18-25"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>15435</code>
             
                
             </td> 
             <td>The estimated number of people (in thousands) that perceive great risk in Smoking Marijuana once a month, among this age group.</td> </tr>
        
        <tr> <td><code>"26+"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>147802</code>
             
                
             </td> 
             <td>The estimated number of people (in thousands) that perceive great risk in Smoking Marijuana once a month, among this age group.</td> </tr>
        
    </table>
</div>

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Totals-Marijuana-Perceptions-of-Risk" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Totals-Marijuana-Perceptions-of-Risk-12-17").click(function() {
        $( "#explore-Totals-Marijuana-Perceptions-of-Risk-12-17" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Totals-Marijuana-Perceptions-of-Risk-18-25").click(function() {
        $( "#explore-Totals-Marijuana-Perceptions-of-Risk-18-25" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Totals-Marijuana-Perceptions-of-Risk-26+").click(function() {
        $( "#explore-Totals-Marijuana-Perceptions-of-Risk-26+" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Totals-Marijuana-Used-Past-Month' title='Dictionary (3 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"12-17"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>2447</code>
             
                
             </td> 
             <td>The estimated number of people (in thousands) that have used Marijuana in the past month among this age group.</td> </tr>
        
        <tr> <td><code>"18-25"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>6215</code>
             
                
             </td> 
             <td>The estimated number of people (in thousands) that have used Marijuana in the past month among this age group.</td> </tr>
        
        <tr> <td><code>"26+"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>7283</code>
             
                
             </td> 
             <td>The estimated number of people (in thousands) that have used Marijuana in the past month among this age group.</td> </tr>
        
    </table>
</div>

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Totals-Marijuana-Used-Past-Month" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Totals-Marijuana-Used-Past-Month-12-17").click(function() {
        $( "#explore-Totals-Marijuana-Used-Past-Month-12-17" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Totals-Marijuana-Used-Past-Month-18-25").click(function() {
        $( "#explore-Totals-Marijuana-Used-Past-Month-18-25" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Totals-Marijuana-Used-Past-Month-26+").click(function() {
        $( "#explore-Totals-Marijuana-Used-Past-Month-26+" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Totals-Marijuana-Used-Past-Year' title='Dictionary (3 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"12-17"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>4899</code>
             
                
             </td> 
             <td>The estimated number of people (in thousands) that have used Marijuana in the past year among this age group.</td> </tr>
        
        <tr> <td><code>"18-25"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>11857</code>
             
                
             </td> 
             <td>The estimated number of people (in thousands) that have used Marijuana in the past year among this age group.</td> </tr>
        
        <tr> <td><code>"26+"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>14091</code>
             
                
             </td> 
             <td>The estimated number of people (in thousands) that have used Marijuana in the past year among this age group.</td> </tr>
        
    </table>
</div>

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Totals-Marijuana-Used-Past-Year" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Totals-Marijuana-Used-Past-Year-12-17").click(function() {
        $( "#explore-Totals-Marijuana-Used-Past-Year-12-17" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Totals-Marijuana-Used-Past-Year-18-25").click(function() {
        $( "#explore-Totals-Marijuana-Used-Past-Year-18-25" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Totals-Marijuana-Used-Past-Year-26+").click(function() {
        $( "#explore-Totals-Marijuana-Used-Past-Year-26+" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Totals-Tobacco' title='Dictionary (3 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Cigarette Past Month"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Totals-Tobacco-Cigarette-Past-Month'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Perceptions of Risk"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Totals-Tobacco-Perceptions-of-Risk'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Use Past Month"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Totals-Tobacco-Use-Past-Month'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
    </table>
</div>

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Totals-Tobacco" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Totals-Tobacco-Cigarette-Past-Month").click(function() {
        $( "#explore-Totals-Tobacco-Cigarette-Past-Month" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Totals-Tobacco-Perceptions-of-Risk").click(function() {
        $( "#explore-Totals-Tobacco-Perceptions-of-Risk" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Totals-Tobacco-Use-Past-Month").click(function() {
        $( "#explore-Totals-Tobacco-Use-Past-Month" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Totals-Tobacco-Cigarette-Past-Month' title='Dictionary (3 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"12-17"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>5260</code>
             
                
             </td> 
             <td>The estimated number of people (in thousands) that have used Cigarettes in the past month, among this age group.</td> </tr>
        
        <tr> <td><code>"18-25"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>19557</code>
             
                
             </td> 
             <td>The estimated number of people (in thousands) that have used Cigarettes in the past month, among this age group.</td> </tr>
        
        <tr> <td><code>"26+"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>72500</code>
             
                
             </td> 
             <td>The estimated number of people (in thousands) that have used Cigarettes in the past month, among this age group.</td> </tr>
        
    </table>
</div>

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Totals-Tobacco-Cigarette-Past-Month" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Totals-Tobacco-Cigarette-Past-Month-12-17").click(function() {
        $( "#explore-Totals-Tobacco-Cigarette-Past-Month-12-17" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Totals-Tobacco-Cigarette-Past-Month-18-25").click(function() {
        $( "#explore-Totals-Tobacco-Cigarette-Past-Month-18-25" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Totals-Tobacco-Cigarette-Past-Month-26+").click(function() {
        $( "#explore-Totals-Tobacco-Cigarette-Past-Month-26+" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Totals-Tobacco-Perceptions-of-Risk' title='Dictionary (3 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"12-17"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>23892</code>
             
                
             </td> 
             <td>The estimated number of people (in thousands) that perceive great risk in smoking one or more packs of cigarettes per day, among this age group.</td> </tr>
        
        <tr> <td><code>"18-25"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>31040</code>
             
                
             </td> 
             <td>The estimated number of people (in thousands) that perceive great risk in smoking one or more packs of cigarettes per day, among this age group.</td> </tr>
        
        <tr> <td><code>"26+"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>196687</code>
             
                
             </td> 
             <td>The estimated number of people (in thousands) that perceive great risk in smoking one or more packs of cigarettes per day, among this age group.</td> </tr>
        
    </table>
</div>

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Totals-Tobacco-Perceptions-of-Risk" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Totals-Tobacco-Perceptions-of-Risk-12-17").click(function() {
        $( "#explore-Totals-Tobacco-Perceptions-of-Risk-12-17" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Totals-Tobacco-Perceptions-of-Risk-18-25").click(function() {
        $( "#explore-Totals-Tobacco-Perceptions-of-Risk-18-25" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Totals-Tobacco-Perceptions-of-Risk-26+").click(function() {
        $( "#explore-Totals-Tobacco-Perceptions-of-Risk-26+" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Totals-Tobacco-Use-Past-Month' title='Dictionary (3 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"12-17"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>6401</code>
             
                
             </td> 
             <td>The estimated number of people (in thousands) that have used Tobacco products in the past month, among this age group. Tobacco Products include cigarettes, smokeless tobacco (i.e., chewing tobacco or snuff), cigars, or pipe tobacco.</td> </tr>
        
        <tr> <td><code>"18-25"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>22528</code>
             
                
             </td> 
             <td>The estimated number of people (in thousands) that have used Tobacco products in the past month, among this age group. Tobacco Products include cigarettes, smokeless tobacco (i.e., chewing tobacco or snuff), cigars, or pipe tobacco.</td> </tr>
        
        <tr> <td><code>"26+"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>92642</code>
             
                
             </td> 
             <td>The estimated number of people (in thousands) that have used Tobacco products in the past month, among this age group. Tobacco Products include cigarettes, smokeless tobacco (i.e., chewing tobacco or snuff), cigars, or pipe tobacco.</td> </tr>
        
    </table>
</div>

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Totals-Tobacco-Use-Past-Month" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Totals-Tobacco-Use-Past-Month-12-17").click(function() {
        $( "#explore-Totals-Tobacco-Use-Past-Month-12-17" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Totals-Tobacco-Use-Past-Month-18-25").click(function() {
        $( "#explore-Totals-Tobacco-Use-Past-Month-18-25" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Totals-Tobacco-Use-Past-Month-26+").click(function() {
        $( "#explore-Totals-Tobacco-Use-Past-Month-26+" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>


# Downloads

Download all of the following files.

1. <a href='../../datasets/python/drugs/drugs.py' download>drugs.py <span class="fas fa-download"></span></a>
2. <a href='../../datasets/python/drugs/drugs.data' download>drugs.data <span class="fas fa-download"></span></a>

# Usage

```python
import drugs
report = drugs.get_report()
```

# Documentation

<dl>
    <dt><span>get_report()</span></dt>
    <dd>Returns a list of dictionaries representing report.</dd>
</dl>