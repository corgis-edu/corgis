---
permalink: /python/business_dynamics/
style: dataset
---



<img class="img-thumbnail float-right"
     src="/images/datasets/business-dynamics-icon.png"
     alt="business dynamics icon"
     role="presentation">

# Business Dynamics Python Library

<p class='lead'>From the CORGIS Dataset Project</p>

<span class='text-muted'>By Austin Cory Bart <acbart@vt.edu></span><br>
<span class='text-muted'>Version 2.0.0, created 2/26/2017</span><br>
<span class='text-muted'>Tags: government, united states, us, usa, business, businesses, firms, establishments, jobs, census</span>

# Overview

<p>The Business Dynamics Statistics (BDS) includes measures of establishment openings and closings, firm startups, job creation and destruction by firm size, age, and industrial sector, and several other statistics on business dynamics. The U.S. economy is comprised of over 6 million establishments with paid employees. The population of these businesses is constantly churning -- some businesses grow, others decline and yet others close. New businesses are constantly replenishing this pool. The BDS series provide annual statistics on gross job gains and losses for the entire economy and by industrial sector, state, and MSA. These data track changes in employment at the establishment level, and thus provide a picture of the dynamics underlying aggregate net employment growth.</p>
<p>There is a longstanding interest in the contribution of small businesses to job and productivity growth in the U.S. Some recent research suggests that it is business age rather than size that is the critical factor. The BDS permits exploring the respective contributions of both firm age and size.</p>
<p>BDS is based on data going back through 1976. This allows business dynamics to be tracked, measured and analyzed for young firms in their first critical years as well as for more mature firms including those that are in the process of reinventing themselves in an ever changing economic environment.</p>
<p>If you need help understanding the terms used, check out <a href='https://www.census.gov/ces/dataproducts/bds/definitions.html' target=_blank>these definitions.</a></p>



<https://www.census.gov/data/developers/data-sets/business-dynamics.html>




# Explore Structure

Each row represents *$MISSING_FIELD*.



<button type='button'
        class='btn btn-info'
        id='btn-explore'>Explore business dynamics data</button>

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
        
        <tr> <td><code>"State"</code></td> 
             <td><span data-toggle="tooltip"
                       title='String (text)'>
                       str</span></td> 
             <td>
             
                <code>"Alabama"</code>
             
                
             </td> 
             <td>The state that this report was made for (full name, not the two letter abbreviation).</td> </tr>
        
        <tr> <td><code>"Year"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>1977</code>
             
                
             </td> 
             <td>The year that this report was made for.</td> </tr>
        
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
    
    $("#btn-explore-State").click(function() {
        $( "#explore-State" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
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

<div id='explore-Data' title='Dictionary (7 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"DHS Denominator"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>933909</code>
             
                
             </td> 
             <td>The Davis-Haltiwanger-Schuh (DHS) denominator is the two-period trailing moving average of employment, intended to prevent transitory shocks from distorting net growth. In other words, this value roughly represents the employment for the area, but is resistant to sudden, spiking growth.</td> </tr>
        
        <tr> <td><code>"Number of Firms"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>52371</code>
             
                
             </td> 
             <td>The number of firms in this state during this year.</td> </tr>
        
        <tr> <td><code>"Data.Calculated"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Data-Calculated'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Data.Establishments"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Data-Establishments'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Data.Firm Exits"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Data-Firm-Exits'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Data.Job Creation"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Data-Job-Creation'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Data.Job Destruction"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Data-Job-Destruction'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
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
    
    $("#btn-explore-Data-DHS-Denominator").click(function() {
        $( "#explore-Data-DHS-Denominator" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Data-Number-of-Firms").click(function() {
        $( "#explore-Data-Number-of-Firms" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Data-Calculated").click(function() {
        $( "#explore-Data-Calculated" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Data-Establishments").click(function() {
        $( "#explore-Data-Establishments" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Data-Firm-Exits").click(function() {
        $( "#explore-Data-Firm-Exits" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Data-Job-Creation").click(function() {
        $( "#explore-Data-Job-Creation" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Data-Job-Destruction").click(function() {
        $( "#explore-Data-Job-Destruction" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Data-Calculated' title='Dictionary (3 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Net Job Creation"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>46776</code>
             
                
             </td> 
             <td>The sum of the Job Creation Rate minus the Job Destruction Rate.</td> </tr>
        
        <tr> <td><code>"Net Job Creation Rate"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>5.0</code>
             
                
             </td> 
             <td>The sum of the Job Creation Rate and the Job Destruction Rate, minus the Net Job Creation Rate.</td> </tr>
        
        <tr> <td><code>"Reallocation Rate"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>31.0</code>
             
                
             </td> 
             <td>The sum of the Job Creation Rate and the Job Destruction Rate, minus the absolute Net Job Creation Rate.</td> </tr>
        
    </table>
</div>

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Data-Calculated" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Data-Calculated-Net-Job-Creation").click(function() {
        $( "#explore-Data-Calculated-Net-Job-Creation" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Data-Calculated-Net-Job-Creation-Rate").click(function() {
        $( "#explore-Data-Calculated-Net-Job-Creation-Rate" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Data-Calculated-Reallocation-Rate").click(function() {
        $( "#explore-Data-Calculated-Reallocation-Rate" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Data-Establishments' title='Dictionary (5 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Entered"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>10634</code>
             
                
             </td> 
             <td>The number of establishments that entered during this time. Entering occurs when an establishment did not exist in the previous year.</td> </tr>
        
        <tr> <td><code>"Entered Rate"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>17.2</code>
             
                
             </td> 
             <td>The number of establishments that entered during this time divided by the number of establishments. Entering occurs when an establishment did not exist in the previous year.</td> </tr>
        
        <tr> <td><code>"Exited"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>8057</code>
             
                
             </td> 
             <td>The number of establishments that exited during this time. Exiting occurs when an establishment has positive employment in the previous year and zero this year.</td> </tr>
        
        <tr> <td><code>"Exited Rate"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>13.1</code>
             
                
             </td> 
             <td>The number of establishments that exited during this time divided by the number of establishments. Exiting occurs when an establishment has positive employment in the previous year and zero this year.</td> </tr>
        
        <tr> <td><code>"Physical Locations"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>62852</code>
             
                
             </td> 
             <td>The number of establishments in this region during this time.</td> </tr>
        
    </table>
</div>

    

    

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Data-Establishments" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Data-Establishments-Entered").click(function() {
        $( "#explore-Data-Establishments-Entered" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Data-Establishments-Entered-Rate").click(function() {
        $( "#explore-Data-Establishments-Entered-Rate" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Data-Establishments-Exited").click(function() {
        $( "#explore-Data-Establishments-Exited" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Data-Establishments-Exited-Rate").click(function() {
        $( "#explore-Data-Establishments-Exited-Rate" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Data-Establishments-Physical-Locations").click(function() {
        $( "#explore-Data-Establishments-Physical-Locations" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Data-Firm-Exits' title='Dictionary (3 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Count"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>5623</code>
             
                
             </td> 
             <td>The number of firms that exited this year.</td> </tr>
        
        <tr> <td><code>"Establishment Exit"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>5641</code>
             
                
             </td> 
             <td>The number of establishments exited because of firm deaths.</td> </tr>
        
        <tr> <td><code>"Job Destruction"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>36602</code>
             
                
             </td> 
             <td>The number of jobs destroyed as a result of firm deaths.</td> </tr>
        
    </table>
</div>

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Data-Firm-Exits" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Data-Firm-Exits-Count").click(function() {
        $( "#explore-Data-Firm-Exits-Count" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Data-Firm-Exits-Establishment-Exit").click(function() {
        $( "#explore-Data-Firm-Exits-Establishment-Exit" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Data-Firm-Exits-Job-Destruction").click(function() {
        $( "#explore-Data-Firm-Exits-Job-Destruction" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Data-Job-Creation' title='Dictionary (5 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Births"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>89869</code>
             
                
             </td> 
             <td>The number of jobs that were created because of firm births in the past year.</td> </tr>
        
        <tr> <td><code>"Continuers"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>101653</code>
             
                
             </td> 
             <td>The number of jobs at continuing establishments that were created in the last yaer.</td> </tr>
        
        <tr> <td><code>"Count"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>191522</code>
             
                
             </td> 
             <td>The number of jobs that were created in the last year.</td> </tr>
        
        <tr> <td><code>"Rate"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>20.5</code>
             
                
             </td> 
             <td>The number of jobs that were created in the last year divided by the DHS denominator. The result is the rate at which jobs have been created.</td> </tr>
        
        <tr> <td><code>"Rate/Births"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>9.6</code>
             
                
             </td> 
             <td>The number of jobs that were created because a new firm born in the past year, divided by the DHS denominator. The result is the rate at which jobs have been created because of firm births.</td> </tr>
        
    </table>
</div>

    

    

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Data-Job-Creation" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Data-Job-Creation-Births").click(function() {
        $( "#explore-Data-Job-Creation-Births" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Data-Job-Creation-Continuers").click(function() {
        $( "#explore-Data-Job-Creation-Continuers" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Data-Job-Creation-Count").click(function() {
        $( "#explore-Data-Job-Creation-Count" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Data-Job-Creation-Rate").click(function() {
        $( "#explore-Data-Job-Creation-Rate" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Data-Job-Creation-Rate_Births").click(function() {
        $( "#explore-Data-Job-Creation-Rate_Births" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Data-Job-Destruction' title='Dictionary (5 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Continuers"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>85855</code>
             
                
             </td> 
             <td>The number of jobs at continuing establishments that were destroyed in the last year.</td> </tr>
        
        <tr> <td><code>"Count"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>144746</code>
             
                
             </td> 
             <td>The number of jobs that were destroyed in the last year.</td> </tr>
        
        <tr> <td><code>"Deaths"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>58891</code>
             
                
             </td> 
             <td>The number of jobs that were destroyed because of firm deaths that were destroyed in the last year.</td> </tr>
        
        <tr> <td><code>"Rate"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>15.5</code>
             
                
             </td> 
             <td>The number of jobs that were destroyed in the last year divided by the DHS denominator. The result is the rate at which jobs have been destroyed.</td> </tr>
        
        <tr> <td><code>"Rate/Deaths"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>6.3</code>
             
                
             </td> 
             <td>The number of jobs that were destroyed because of firm deaths that were destroyed in the last year divided by the DHS denominator. The result is the rate at which jobs have been destroyed because of firm death.</td> </tr>
        
    </table>
</div>

    

    

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Data-Job-Destruction" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Data-Job-Destruction-Continuers").click(function() {
        $( "#explore-Data-Job-Destruction-Continuers" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Data-Job-Destruction-Count").click(function() {
        $( "#explore-Data-Job-Destruction-Count" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Data-Job-Destruction-Deaths").click(function() {
        $( "#explore-Data-Job-Destruction-Deaths" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Data-Job-Destruction-Rate").click(function() {
        $( "#explore-Data-Job-Destruction-Rate" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Data-Job-Destruction-Rate_Deaths").click(function() {
        $( "#explore-Data-Job-Destruction-Rate_Deaths" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>


# Downloads

Download all of the following files.

1. <a href='../../datasets/python/business_dynamics/business_dynamics.py' download>business_dynamics.py <span class="fas fa-download"></span></a>
2. <a href='../../datasets/python/business_dynamics/business_dynamics.data' download>business_dynamics.data <span class="fas fa-download"></span></a>

# Usage

```python
import business_dynamics
record = business_dynamics.get_record()
```

# Documentation

<dl>
    <dt><span>get_record()</span></dt>
    <dd>Returns a list of dictionaries representing record.</dd>
</dl>