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

<span class='text-muted'>By Austin Cory Bart <acbart@vt.edu>, Ryan Whitcomb <rwhit94@vt.edu>, Joung Min Choi, Bo Guan</span><br>
<span class='text-muted'>Version 3.0.0, created 10/29/2021</span><br>
<span class='text-muted'>Tags: drugs, substances, drug usage</span>

# Overview

This dataset is about substance abuse (cigarettes, marijuana, cocaine, alcohol) among different age groups and states. Data was collected from individual states as part of the NSDUH study. The data ranges from 2002 to 2018. Both totals (in thousands of people) and rates (as a percentage of the population) are given.



<https://pdas.samhsa.gov/#/>




# Explore Structure

Each row represents *Reports of drug use in a state on a given state.*.



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
        
        <tr> <td><code>"Totals"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Totals'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
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
        
    
    $("#btn-explore-Totals").click(function() {
        $( "#explore-Totals" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Rates").click(function() {
        $( "#explore-Rates" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Population' title='Dictionary (3 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"12-17"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>380805</code>
             
                
             </td> 
             <td>Estimated population for this age group (12 to 17 year olds) in this year from US Census data for this state.</td> </tr>
        
        <tr> <td><code>"18-25"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>499453</code>
             
                
             </td> 
             <td>Estimated population for this age group (18 to 25 year olds) in this year from US Census data for this state.</td> </tr>
        
        <tr> <td><code>"26+"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>2812905</code>
             
                
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

<div id='explore-Totals' title='Dictionary (4 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Alcohol"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Totals-Alcohol'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
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
    
    $("#btn-explore-Totals-Alcohol").click(function() {
        $( "#explore-Totals-Alcohol" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Totals-Tobacco").click(function() {
        $( "#explore-Totals-Tobacco" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
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
        
    
});
</script>

<div id='explore-Totals-Alcohol' title='Dictionary (2 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Use Disorder Past Year"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Totals-Alcohol-Use-Disorder-Past-Year'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
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
    
    $("#btn-explore-Totals-Alcohol-Use-Disorder-Past-Year").click(function() {
        $( "#explore-Totals-Alcohol-Use-Disorder-Past-Year" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Totals-Alcohol-Use-Past-Month").click(function() {
        $( "#explore-Totals-Alcohol-Use-Past-Month" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Totals-Alcohol-Use-Disorder-Past-Year' title='Dictionary (3 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"12-17"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>18</code>
             
                
             </td> 
             <td>The estimated number of people (in thousands) that have a use disorder on alcohol in the past year among this age group.</td> </tr>
        
        <tr> <td><code>"18-25"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>68</code>
             
                
             </td> 
             <td>The estimated number of people (in thousands) that have a use disorder on alcohol in the past year among this age group.</td> </tr>
        
        <tr> <td><code>"26+"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>138</code>
             
                
             </td> 
             <td>The estimated number of people (in thousands) that have a use disorder on alcohol in the past year among this age group.</td> </tr>
        
    </table>
</div>

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Totals-Alcohol-Use-Disorder-Past-Year" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Totals-Alcohol-Use-Disorder-Past-Year-12-17").click(function() {
        $( "#explore-Totals-Alcohol-Use-Disorder-Past-Year-12-17" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Totals-Alcohol-Use-Disorder-Past-Year-18-25").click(function() {
        $( "#explore-Totals-Alcohol-Use-Disorder-Past-Year-18-25" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Totals-Alcohol-Use-Disorder-Past-Year-26+").click(function() {
        $( "#explore-Totals-Alcohol-Use-Disorder-Past-Year-26+" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Rates' title='Dictionary (4 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Alcohol"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Rates-Alcohol'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
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
    
    $("#btn-explore-Rates-Alcohol").click(function() {
        $( "#explore-Rates-Alcohol" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Rates-Tobacco").click(function() {
        $( "#explore-Rates-Tobacco" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
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
        
    
});
</script>

<div id='explore-Rates-Alcohol' title='Dictionary (2 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Use Disorder Past Year"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Rates-Alcohol-Use-Disorder-Past-Year'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
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
    
    $("#btn-explore-Rates-Alcohol-Use-Disorder-Past-Year").click(function() {
        $( "#explore-Rates-Alcohol-Use-Disorder-Past-Year" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Rates-Alcohol-Use-Past-Month").click(function() {
        $( "#explore-Rates-Alcohol-Use-Past-Month" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Rates-Alcohol-Use-Disorder-Past-Year' title='Dictionary (3 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"12-17"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>48.336</code>
             
                
             </td> 
             <td>Amount per 1000 people that has a use disorder on alcohol in the past year among this age group.</td> </tr>
        
        <tr> <td><code>"18-25"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>136.49</code>
             
                
             </td> 
             <td>Amount per 1000 people that has a use disorder on alcohol in the past year among this age group.</td> </tr>
        
        <tr> <td><code>"26+"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>49.068</code>
             
                
             </td> 
             <td>Amount per 1000 people that has a use disorder on alcohol in the past year among this age group.</td> </tr>
        
    </table>
</div>

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Rates-Alcohol-Use-Disorder-Past-Year" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Rates-Alcohol-Use-Disorder-Past-Year-12-17").click(function() {
        $( "#explore-Rates-Alcohol-Use-Disorder-Past-Year-12-17" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Rates-Alcohol-Use-Disorder-Past-Year-18-25").click(function() {
        $( "#explore-Rates-Alcohol-Use-Disorder-Past-Year-18-25" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Rates-Alcohol-Use-Disorder-Past-Year-26+").click(function() {
        $( "#explore-Rates-Alcohol-Use-Disorder-Past-Year-26+" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
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
             
                <code>57</code>
             
                
             </td> 
             <td>The estimated number of people (in thousands) that have used alcohol in the past month, among this age group.</td> </tr>
        
        <tr> <td><code>"18-25"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>254</code>
             
                
             </td> 
             <td>The estimated number of people (in thousands) that have used alcohol in the past month, among this age group.</td> </tr>
        
        <tr> <td><code>"26+"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>1048</code>
             
                
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

<div id='explore-Rates-Alcohol-Use-Past-Month' title='Dictionary (3 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"12-17"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>150.033</code>
             
                
             </td> 
             <td>Amount per 1000 people that has used alcohol in the past month, among this age group.</td> </tr>
        
        <tr> <td><code>"18-25"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>509.551</code>
             
                
             </td> 
             <td>Amount per 1000 people that has used alcohol in the past month, among this age group.</td> </tr>
        
        <tr> <td><code>"26+"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>372.70300000000003</code>
             
                
             </td> 
             <td>Amount per 1000 people that has used alcohol in the past month, among this age group.</td> </tr>
        
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

<div id='explore-Totals-Tobacco' title='Dictionary (2 keys)'>
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
             
                <code>52</code>
             
                
             </td> 
             <td>The estimated number of people (in thousands) that have used Cigarettes in the past month, among this age group.</td> </tr>
        
        <tr> <td><code>"18-25"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>196</code>
             
                
             </td> 
             <td>The estimated number of people (in thousands) that have used Cigarettes in the past month, among this age group.</td> </tr>
        
        <tr> <td><code>"26+"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>728</code>
             
                
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

<div id='explore-Rates-Tobacco' title='Dictionary (2 keys)'>
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
             
                <code>136.906</code>
             
                
             </td> 
             <td>Amount per 1000 people that has used Cigarettes in the past month, among this age group.</td> </tr>
        
        <tr> <td><code>"18-25"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>392.404</code>
             
                
             </td> 
             <td>Amount per 1000 people that has used Cigarettes in the past month, among this age group.</td> </tr>
        
        <tr> <td><code>"26+"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>258.844</code>
             
                
             </td> 
             <td>Amount per 1000 people that has used Cigarettes in the past month, among this age group.</td> </tr>
        
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

<div id='explore-Totals-Illicit-Drugs' title='Dictionary (1 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Cocaine Used Past Year"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Totals-Illicit-Drugs-Cocaine-Used-Past-Year'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
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
    
    $("#btn-explore-Totals-Illicit-Drugs-Cocaine-Used-Past-Year").click(function() {
        $( "#explore-Totals-Illicit-Drugs-Cocaine-Used-Past-Year" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
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
             
                <code>6</code>
             
                
             </td> 
             <td>The estimated number of people (in thousands) that have used Cocaine in the past year among this age group.</td> </tr>
        
        <tr> <td><code>"18-25"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>27</code>
             
                
             </td> 
             <td>The estimated number of people (in thousands) that have used Cocaine in the past year among this age group.</td> </tr>
        
        <tr> <td><code>"26+"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>49</code>
             
                
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

<div id='explore-Rates-Illicit-Drugs' title='Dictionary (1 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Cocaine Used Past Year"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Rates-Illicit-Drugs-Cocaine-Used-Past-Year'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
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
    
    $("#btn-explore-Rates-Illicit-Drugs-Cocaine-Used-Past-Year").click(function() {
        $( "#explore-Rates-Illicit-Drugs-Cocaine-Used-Past-Year" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
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
             
                <code>16.556</code>
             
                
             </td> 
             <td>Amount per 1000 people that has used Cocaine in the past year among this age group.</td> </tr>
        
        <tr> <td><code>"18-25"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>54.892</code>
             
                
             </td> 
             <td>Amount per 1000 people that has used Cocaine in the past year among this age group.</td> </tr>
        
        <tr> <td><code>"26+"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>17.513</code>
             
                
             </td> 
             <td>Amount per 1000 people that has used Cocaine in the past year among this age group.</td> </tr>
        
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

<div id='explore-Totals-Marijuana' title='Dictionary (3 keys)'>
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
             
                <code>20</code>
             
                
             </td> 
             <td>The estimated number of people (in thousands) that have started using Marijuana in the past year among this age group.</td> </tr>
        
        <tr> <td><code>"18-25"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>18</code>
             
                
             </td> 
             <td>The estimated number of people (in thousands) that have started using Marijuana in the past year among this age group.</td> </tr>
        
        <tr> <td><code>"26+"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>2</code>
             
                
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

<div id='explore-Rates-Marijuana' title='Dictionary (3 keys)'>
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
             
                <code>59.732</code>
             
                
             </td> 
             <td>Amount per 1000 people that has started using Marijuana in the past year among this age group.</td> </tr>
        
        <tr> <td><code>"18-25"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>62.324999999999996</code>
             
                
             </td> 
             <td>Amount per 1000 people that has started using Marijuana in the past year among this age group.</td> </tr>
        
        <tr> <td><code>"26+"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>0.914</code>
             
                
             </td> 
             <td>Amount per 1000 people that has started using Marijuana in the past year among this age group.</td> </tr>
        
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

<div id='explore-Totals-Marijuana-Used-Past-Month' title='Dictionary (3 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"12-17"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>24</code>
             
                
             </td> 
             <td>The estimated number of people (in thousands) that have used Marijuana in the past month among this age group.</td> </tr>
        
        <tr> <td><code>"18-25"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>62</code>
             
                
             </td> 
             <td>The estimated number of people (in thousands) that have used Marijuana in the past month among this age group.</td> </tr>
        
        <tr> <td><code>"26+"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>73</code>
             
                
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

<div id='explore-Rates-Marijuana-Used-Past-Month' title='Dictionary (3 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"12-17"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>63.662</code>
             
                
             </td> 
             <td>Amount per 1000 people that has used Marijuana in the past month among this age group.</td> </tr>
        
        <tr> <td><code>"18-25"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>124.67200000000001</code>
             
                
             </td> 
             <td>Amount per 1000 people that has used Marijuana in the past month among this age group.</td> </tr>
        
        <tr> <td><code>"26+"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>25.967</code>
             
                
             </td> 
             <td>Amount per 1000 people that has used Marijuana in the past month among this age group.</td> </tr>
        
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

<div id='explore-Totals-Marijuana-Used-Past-Year' title='Dictionary (3 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"12-17"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>49</code>
             
                
             </td> 
             <td>The estimated number of people (in thousands) that have used Marijuana in the past year among this age group.</td> </tr>
        
        <tr> <td><code>"18-25"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>119</code>
             
                
             </td> 
             <td>The estimated number of people (in thousands) that have used Marijuana in the past year among this age group.</td> </tr>
        
        <tr> <td><code>"26+"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>141</code>
             
                
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

<div id='explore-Rates-Marijuana-Used-Past-Year' title='Dictionary (3 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"12-17"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>127.53500000000001</code>
             
                
             </td> 
             <td>Amount per 1000 people that has used Marijuana in the past year among this age group.</td> </tr>
        
        <tr> <td><code>"18-25"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>237.88</code>
             
                
             </td> 
             <td>Amount per 1000 people that has used Marijuana in the past year among this age group.</td> </tr>
        
        <tr> <td><code>"26+"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>50.275</code>
             
                
             </td> 
             <td>Amount per 1000 people that has used Marijuana in the past year among this age group.</td> </tr>
        
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

<div id='explore-Totals-Tobacco-Use-Past-Month' title='Dictionary (3 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"12-17"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>63</code>
             
                
             </td> 
             <td>The estimated number of people (in thousands) that have used Tobacco products in the past month, among this age group. Tobacco Products include cigarettes, smokeless tobacco (i.e., chewing tobacco or snuff), cigars, or pipe tobacco.</td> </tr>
        
        <tr> <td><code>"18-25"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>226</code>
             
                
             </td> 
             <td>The estimated number of people (in thousands) that have used Tobacco products in the past month, among this age group. Tobacco Products include cigarettes, smokeless tobacco (i.e., chewing tobacco or snuff), cigars, or pipe tobacco.</td> </tr>
        
        <tr> <td><code>"26+"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>930</code>
             
                
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

<div id='explore-Rates-Tobacco-Use-Past-Month' title='Dictionary (3 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"12-17"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>166.578</code>
             
                
             </td> 
             <td>Amount per 1000 people that has used Tobacco products in the past month, among this age group. Tobacco Products include cigarettes, smokeless tobacco (i.e., chewing tobacco or snuff), cigars, or pipe tobacco.</td> </tr>
        
        <tr> <td><code>"18-25"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>451.976</code>
             
                
             </td> 
             <td>Amount per 1000 people that has used Tobacco products in the past month, among this age group. Tobacco Products include cigarettes, smokeless tobacco (i.e., chewing tobacco or snuff), cigars, or pipe tobacco.</td> </tr>
        
        <tr> <td><code>"26+"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>330.659</code>
             
                
             </td> 
             <td>Amount per 1000 people that has used Tobacco products in the past month, among this age group. Tobacco Products include cigarettes, smokeless tobacco (i.e., chewing tobacco or snuff), cigars, or pipe tobacco.</td> </tr>
        
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