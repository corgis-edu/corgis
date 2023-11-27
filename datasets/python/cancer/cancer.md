---
permalink: /python/cancer/
style: dataset
---



<img class="img-thumbnail float-right"
     src="/images/datasets/cancer-icon.png"
     alt="cancer icon"
     role="presentation">

# Cancer Python Library

<p class='lead'>From the CORGIS Dataset Project</p>

<span class='text-muted'>By Dennis Kafura</span><br>
<span class='text-muted'>Version 1.0.0, created 6/27/2019</span><br>
<span class='text-muted'>Tags: cancer, cancer deaths, medical, health</span>

# Overview

Information about the rates of cancer deaths in each state is reported. The data shows the total rate as well as rates based on sex, age, and race. Rates are also shown for three specific kinds of cancer: breast cancer, colorectal cancer, and lung cancer.


<https://www.socialexplorer.com/explore-tables>




# Explore Structure

Each row represents *report on cancer for a specific state/time period/demographic subgroup*.



<button type='button'
        class='btn btn-info'
        id='btn-explore'>Explore cancer data</button>

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
        
        <tr> <td><code>"State"</code></td>
             <td><span data-toggle="tooltip"
                       title='String (text)'>
                       str</span></td> 
             <td>
             
                <code>"Alabama"</code>
             
                
             </td> 
             <td>The name of a U.S. State (e.g., Virginia)</td> </tr>
        
        <tr> <td><code>"Total"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Total'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
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
        
        <tr> <td><code>"Types"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Types'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
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
        
    
    $("#btn-explore-Total").click(function() {
        $( "#explore-Total" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Rates").click(function() {
        $( "#explore-Rates" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Types").click(function() {
        $( "#explore-Types" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Total' title='Dictionary (3 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Rate"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>214.2</code>
             
                
             </td> 
             <td>Total Cancer Deaths (Rate per 100,000 Population, 2007-2013) 214.2</td> </tr>
        
        <tr> <td><code>"Number"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>71529.0</code>
             
                
             </td> 
             <td>Total Cancer Deaths (2007-2013)</td> </tr>
        
        <tr> <td><code>"Population"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>33387205.0</code>
             
                
             </td> 
             <td>Cumulative Population (Denominator Total_Cancer deaths total_) 2007-2013</td> </tr>
        
    </table>
</div>

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Total" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Total-Rate").click(function() {
        $( "#explore-Total-Rate" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Total-Number").click(function() {
        $( "#explore-Total-Number" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Total-Population").click(function() {
        $( "#explore-Total-Population" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Rates' title='Dictionary (4 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Age"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Rates-Age'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Age and Sex"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Rates-Age-and-Sex'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Race"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Rates-Race'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Race and Sex"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Rates-Race-and-Sex'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
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
    
    $("#btn-explore-Rates-Age").click(function() {
        $( "#explore-Rates-Age" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Rates-Age-and-Sex").click(function() {
        $( "#explore-Rates-Age-and-Sex" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Rates-Race").click(function() {
        $( "#explore-Rates-Race" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Rates-Race-and-Sex").click(function() {
        $( "#explore-Rates-Race-and-Sex" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Rates-Age' title='Dictionary (4 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"< 18"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>2.0</code>
             
                
             </td> 
             <td>Total Cancer Deaths (Under 18 Years, Rate per 100,000 Population, 2007-2013)</td> </tr>
        
        <tr> <td><code>"18-45"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>18.5</code>
             
                
             </td> 
             <td>Total Cancer Deaths (18 to 44 Years, Rate per 100,000 Population, 2007-2013)</td> </tr>
        
        <tr> <td><code>"45-64"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>244.7</code>
             
                
             </td> 
             <td>Total Cancer Deaths (45 to 64 Years, Rate per 100,000 Population, 2007-2013)</td> </tr>
        
        <tr> <td><code>"> 64"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>1017.8</code>
             
                
             </td> 
             <td>Total Cancer Deaths (65 Years and Over, Rate per 100,000 Population, 2007-2013)</td> </tr>
        
    </table>
</div>

    

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Rates-Age" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Rates-Age-<-18").click(function() {
        $( "#explore-Rates-Age-<-18" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Rates-Age-18-45").click(function() {
        $( "#explore-Rates-Age-18-45" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Rates-Age-45-64").click(function() {
        $( "#explore-Rates-Age-45-64" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Rates-Age->-64").click(function() {
        $( "#explore-Rates-Age->-64" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Rates-Age-and-Sex' title='Dictionary (2 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Female"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Rates-Age-and-Sex-Female'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Male"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Rates-Age-and-Sex-Male'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
    </table>
</div>

    

    

<script>
$(document).ready(function() {
    $( "#explore-Rates-Age-and-Sex" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Rates-Age-and-Sex-Female").click(function() {
        $( "#explore-Rates-Age-and-Sex-Female" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Rates-Age-and-Sex-Male").click(function() {
        $( "#explore-Rates-Age-and-Sex-Male" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Rates-Age-and-Sex-Female' title='Dictionary (4 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"< 18"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>2.0</code>
             
                
             </td> 
             <td>Female under 18</td> </tr>
        
        <tr> <td><code>"18 - 45"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>20.1</code>
             
                
             </td> 
             <td>Female 18 - 45</td> </tr>
        
        <tr> <td><code>"45 - 64"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>201.0</code>
             
                
             </td> 
             <td>Female 45 to 64 Years</td> </tr>
        
        <tr> <td><code>"> 64"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>803.6</code>
             
                
             </td> 
             <td>Female 65 Years and Over</td> </tr>
        
    </table>
</div>

    

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Rates-Age-and-Sex-Female" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Rates-Age-and-Sex-Female-<-18").click(function() {
        $( "#explore-Rates-Age-and-Sex-Female-<-18" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Rates-Age-and-Sex-Female-18---45").click(function() {
        $( "#explore-Rates-Age-and-Sex-Female-18---45" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Rates-Age-and-Sex-Female-45---64").click(function() {
        $( "#explore-Rates-Age-and-Sex-Female-45---64" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Rates-Age-and-Sex-Female->-64").click(function() {
        $( "#explore-Rates-Age-and-Sex-Female->-64" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Rates-Age-and-Sex-Male' title='Dictionary (4 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"< 18"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>2.1</code>
             
                
             </td> 
             <td>Male  under 18</td> </tr>
        
        <tr> <td><code>"18 - 45"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>16.8</code>
             
                
             </td> 
             <td>Male   18 - 45</td> </tr>
        
        <tr> <td><code>"45 - 64"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>291.5</code>
             
                
             </td> 
             <td>Male   45 to 64 Years</td> </tr>
        
        <tr> <td><code>"> 64"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>1308.6</code>
             
                
             </td> 
             <td>Male   65 Years and Over</td> </tr>
        
    </table>
</div>

    

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Rates-Age-and-Sex-Male" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Rates-Age-and-Sex-Male-<-18").click(function() {
        $( "#explore-Rates-Age-and-Sex-Male-<-18" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Rates-Age-and-Sex-Male-18---45").click(function() {
        $( "#explore-Rates-Age-and-Sex-Male-18---45" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Rates-Age-and-Sex-Male-45---64").click(function() {
        $( "#explore-Rates-Age-and-Sex-Male-45---64" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Rates-Age-and-Sex-Male->-64").click(function() {
        $( "#explore-Rates-Age-and-Sex-Male->-64" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Rates-Race' title='Dictionary (6 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"White"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>186.1</code>
             
                
             </td> 
             <td>Total Cancer Deaths (White, Rate per 100,000 Population, 2007-2013)</td> </tr>
        
        <tr> <td><code>"White non-Hispanic"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>187.5</code>
             
                
             </td> 
             <td>Total Cancer Deaths (White non-Hispanic, Rate per 100,000 Population, 2007-2013)</td> </tr>
        
        <tr> <td><code>"Black"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>216.1</code>
             
                
             </td> 
             <td>Total Cancer Deaths (Black or African American, Rate per 100,000 Population, 2007-2013)</td> </tr>
        
        <tr> <td><code>"Asian"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>81.3</code>
             
                
             </td> 
             <td>Total Cancer Deaths (Asian or Pacific Islander, Rate per 100,000 Population, 2007-2013)</td> </tr>
        
        <tr> <td><code>"Indigenous"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>69.9</code>
             
                
             </td> 
             <td>Total Cancer Deaths (American Indian or Alaska Native, Rate per 100,000 Population, 2007-2013)</td> </tr>
        
        <tr> <td><code>"Hispanic"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>66.5</code>
             
                
             </td> 
             <td>Hispanic or Latino</td> </tr>
        
    </table>
</div>

    

    

    

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Rates-Race" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Rates-Race-White").click(function() {
        $( "#explore-Rates-Race-White" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Rates-Race-White-non-Hispanic").click(function() {
        $( "#explore-Rates-Race-White-non-Hispanic" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Rates-Race-Black").click(function() {
        $( "#explore-Rates-Race-Black" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Rates-Race-Asian").click(function() {
        $( "#explore-Rates-Race-Asian" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Rates-Race-Indigenous").click(function() {
        $( "#explore-Rates-Race-Indigenous" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Rates-Race-Hispanic").click(function() {
        $( "#explore-Rates-Race-Hispanic" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Rates-Race-and-Sex' title='Dictionary (2 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Female"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Rates-Race-and-Sex-Female'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Male"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Rates-Race-and-Sex-Male'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
    </table>
</div>

    

    

<script>
$(document).ready(function() {
    $( "#explore-Rates-Race-and-Sex" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Rates-Race-and-Sex-Female").click(function() {
        $( "#explore-Rates-Race-and-Sex-Female" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Rates-Race-and-Sex-Male").click(function() {
        $( "#explore-Rates-Race-and-Sex-Male" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Rates-Race-and-Sex-Female' title='Dictionary (7 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"White"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>149.2</code>
             
                
             </td> 
             <td>Female: White</td> </tr>
        
        <tr> <td><code>"White non-Hispanic"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>150.2</code>
             
                
             </td> 
             <td>Female: White non-Hispanic</td> </tr>
        
        <tr> <td><code>"Black"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>167.2</code>
             
                
             </td> 
             <td>Female: Black or African American</td> </tr>
        
        <tr> <td><code>"Black non-Hispanic"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>167.9</code>
             
                
             </td> 
             <td>Female: Black or African American non-Hispanic</td> </tr>
        
        <tr> <td><code>"Asian"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>84.9</code>
             
                
             </td> 
             <td>Female: Asian or Pacific Islander</td> </tr>
        
        <tr> <td><code>"Indigenous"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>53.8</code>
             
                
             </td> 
             <td>Female: American Indian or Alaska Native</td> </tr>
        
        <tr> <td><code>"Hispanic"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>58.3</code>
             
                
             </td> 
             <td>Female: Hispanic or Latino</td> </tr>
        
    </table>
</div>

    

    

    

    

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Rates-Race-and-Sex-Female" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Rates-Race-and-Sex-Female-White").click(function() {
        $( "#explore-Rates-Race-and-Sex-Female-White" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Rates-Race-and-Sex-Female-White-non-Hispanic").click(function() {
        $( "#explore-Rates-Race-and-Sex-Female-White-non-Hispanic" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Rates-Race-and-Sex-Female-Black").click(function() {
        $( "#explore-Rates-Race-and-Sex-Female-Black" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Rates-Race-and-Sex-Female-Black-non-Hispanic").click(function() {
        $( "#explore-Rates-Race-and-Sex-Female-Black-non-Hispanic" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Rates-Race-and-Sex-Female-Asian").click(function() {
        $( "#explore-Rates-Race-and-Sex-Female-Asian" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Rates-Race-and-Sex-Female-Indigenous").click(function() {
        $( "#explore-Rates-Race-and-Sex-Female-Indigenous" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Rates-Race-and-Sex-Female-Hispanic").click(function() {
        $( "#explore-Rates-Race-and-Sex-Female-Hispanic" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Rates-Race-and-Sex-Male' title='Dictionary (7 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"White"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>237.1</code>
             
                
             </td> 
             <td>Male: White</td> </tr>
        
        <tr> <td><code>"White non-Hispanic"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>239.2</code>
             
                
             </td> 
             <td>Male: White non-Hispanic</td> </tr>
        
        <tr> <td><code>"Black"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>297.9</code>
             
                
             </td> 
             <td>Male: Black or African American</td> </tr>
        
        <tr> <td><code>"Black non-Hispanic"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>299.2</code>
             
                
             </td> 
             <td>Male: Black or African American non-Hispanic</td> </tr>
        
        <tr> <td><code>"Asian"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>75.7</code>
             
                
             </td> 
             <td>Male: Asian or Pacific Islander</td> </tr>
        
        <tr> <td><code>"Indigenous"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>88.3</code>
             
                
             </td> 
             <td>Male: American Indian or Alaska Native</td> </tr>
        
        <tr> <td><code>"Hispanic"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>77.1</code>
             
                
             </td> 
             <td>Male: Hispanic or Latino</td> </tr>
        
    </table>
</div>

    

    

    

    

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Rates-Race-and-Sex-Male" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Rates-Race-and-Sex-Male-White").click(function() {
        $( "#explore-Rates-Race-and-Sex-Male-White" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Rates-Race-and-Sex-Male-White-non-Hispanic").click(function() {
        $( "#explore-Rates-Race-and-Sex-Male-White-non-Hispanic" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Rates-Race-and-Sex-Male-Black").click(function() {
        $( "#explore-Rates-Race-and-Sex-Male-Black" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Rates-Race-and-Sex-Male-Black-non-Hispanic").click(function() {
        $( "#explore-Rates-Race-and-Sex-Male-Black-non-Hispanic" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Rates-Race-and-Sex-Male-Asian").click(function() {
        $( "#explore-Rates-Race-and-Sex-Male-Asian" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Rates-Race-and-Sex-Male-Indigenous").click(function() {
        $( "#explore-Rates-Race-and-Sex-Male-Indigenous" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Rates-Race-and-Sex-Male-Hispanic").click(function() {
        $( "#explore-Rates-Race-and-Sex-Male-Hispanic" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Types' title='Dictionary (3 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Breast"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Types-Breast'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Colorectal"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Types-Colorectal'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Lung"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Types-Lung'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
    </table>
</div>

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Types" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Types-Breast").click(function() {
        $( "#explore-Types-Breast" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Types-Colorectal").click(function() {
        $( "#explore-Types-Colorectal" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Types-Lung").click(function() {
        $( "#explore-Types-Lung" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Types-Breast' title='Dictionary (3 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Total"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>27.4</code>
             
                
             </td> 
             <td>Breast Cancer Deaths (Rate per 100,000 Population, 2007-2013)</td> </tr>
        
        <tr> <td><code>"Age"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Types-Breast-Age'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Race"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Types-Breast-Race'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
    </table>
</div>

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Types-Breast" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Types-Breast-Total").click(function() {
        $( "#explore-Types-Breast-Total" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Types-Breast-Age").click(function() {
        $( "#explore-Types-Breast-Age" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Types-Breast-Race").click(function() {
        $( "#explore-Types-Breast-Race" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Types-Breast-Age' title='Dictionary (3 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"18 - 44"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>5.1</code>
             
                
             </td> 
             <td>18 to 44 Years</td> </tr>
        
        <tr> <td><code>"45 - 64"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>39.8</code>
             
                
             </td> 
             <td>45 to 64 Years</td> </tr>
        
        <tr> <td><code>"> 64"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>95.7</code>
             
                
             </td> 
             <td>65 Years and Over</td> </tr>
        
    </table>
</div>

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Types-Breast-Age" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Types-Breast-Age-18---44").click(function() {
        $( "#explore-Types-Breast-Age-18---44" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Types-Breast-Age-45---64").click(function() {
        $( "#explore-Types-Breast-Age-45---64" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Types-Breast-Age->-64").click(function() {
        $( "#explore-Types-Breast-Age->-64" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Types-Breast-Race' title='Dictionary (7 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"White"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>20.5</code>
             
                
             </td> 
             <td>White</td> </tr>
        
        <tr> <td><code>"White non-Hispanic "</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>20.6</code>
             
                
             </td> 
             <td>White non-Hispanic</td> </tr>
        
        <tr> <td><code>"Black"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>30.3</code>
             
                
             </td> 
             <td>Black or African American</td> </tr>
        
        <tr> <td><code>"Black non-Hispanic"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>30.4</code>
             
                
             </td> 
             <td>Black or African American non-Hispanic</td> </tr>
        
        <tr> <td><code>"Asian"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>0.0</code>
             
                
             </td> 
             <td>Asian or Pacific Islander</td> </tr>
        
        <tr> <td><code>"Indigenous"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>0.0</code>
             
                
             </td> 
             <td>American Indian or Alaska Native</td> </tr>
        
        <tr> <td><code>"Hispanic"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>0.0</code>
             
                
             </td> 
             <td>Hispanic or Latino</td> </tr>
        
    </table>
</div>

    

    

    

    

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Types-Breast-Race" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Types-Breast-Race-White").click(function() {
        $( "#explore-Types-Breast-Race-White" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Types-Breast-Race-White-non-Hispanic-").click(function() {
        $( "#explore-Types-Breast-Race-White-non-Hispanic-" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Types-Breast-Race-Black").click(function() {
        $( "#explore-Types-Breast-Race-Black" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Types-Breast-Race-Black-non-Hispanic").click(function() {
        $( "#explore-Types-Breast-Race-Black-non-Hispanic" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Types-Breast-Race-Asian").click(function() {
        $( "#explore-Types-Breast-Race-Asian" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Types-Breast-Race-Indigenous").click(function() {
        $( "#explore-Types-Breast-Race-Indigenous" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Types-Breast-Race-Hispanic").click(function() {
        $( "#explore-Types-Breast-Race-Hispanic" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Types-Colorectal' title='Dictionary (3 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Total"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>19.4</code>
             
                
             </td> 
             <td>Colorectal Cancer Deaths (Rate per 100,000 Population, 2007-2013)</td> </tr>
        
        <tr> <td><code>"Age and Sex"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Types-Colorectal-Age-and-Sex'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Race"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Types-Colorectal-Race'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
    </table>
</div>

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Types-Colorectal" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Types-Colorectal-Total").click(function() {
        $( "#explore-Types-Colorectal-Total" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Types-Colorectal-Age-and-Sex").click(function() {
        $( "#explore-Types-Colorectal-Age-and-Sex" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Types-Colorectal-Race").click(function() {
        $( "#explore-Types-Colorectal-Race" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Types-Colorectal-Age-and-Sex' title='Dictionary (2 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Female"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Types-Colorectal-Age-and-Sex-Female'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Male"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Types-Colorectal-Age-and-Sex-Male'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
    </table>
</div>

    

    

<script>
$(document).ready(function() {
    $( "#explore-Types-Colorectal-Age-and-Sex" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Types-Colorectal-Age-and-Sex-Female").click(function() {
        $( "#explore-Types-Colorectal-Age-and-Sex-Female" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Types-Colorectal-Age-and-Sex-Male").click(function() {
        $( "#explore-Types-Colorectal-Age-and-Sex-Male" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Types-Colorectal-Age-and-Sex-Female' title='Dictionary (3 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"18 - 44"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>1.6</code>
             
                
             </td> 
             <td>Female 18 to 44 Years</td> </tr>
        
        <tr> <td><code>"45 - 64"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>18.0</code>
             
                
             </td> 
             <td>Female 45 to 64 Years</td> </tr>
        
        <tr> <td><code>"> 64"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>78.4</code>
             
                
             </td> 
             <td>Female 65 Years and Over</td> </tr>
        
    </table>
</div>

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Types-Colorectal-Age-and-Sex-Female" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Types-Colorectal-Age-and-Sex-Female-18---44").click(function() {
        $( "#explore-Types-Colorectal-Age-and-Sex-Female-18---44" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Types-Colorectal-Age-and-Sex-Female-45---64").click(function() {
        $( "#explore-Types-Colorectal-Age-and-Sex-Female-45---64" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Types-Colorectal-Age-and-Sex-Female->-64").click(function() {
        $( "#explore-Types-Colorectal-Age-and-Sex-Female->-64" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Types-Colorectal-Age-and-Sex-Male' title='Dictionary (3 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"18 - 44"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>2.3</code>
             
                
             </td> 
             <td>Male 18 to 44 Years</td> </tr>
        
        <tr> <td><code>"45 - 64"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>28.7</code>
             
                
             </td> 
             <td>Male 45 to 64 Years</td> </tr>
        
        <tr> <td><code>"> 64"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>106.0</code>
             
                
             </td> 
             <td>Male 65 Years and Over</td> </tr>
        
    </table>
</div>

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Types-Colorectal-Age-and-Sex-Male" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Types-Colorectal-Age-and-Sex-Male-18---44").click(function() {
        $( "#explore-Types-Colorectal-Age-and-Sex-Male-18---44" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Types-Colorectal-Age-and-Sex-Male-45---64").click(function() {
        $( "#explore-Types-Colorectal-Age-and-Sex-Male-45---64" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Types-Colorectal-Age-and-Sex-Male->-64").click(function() {
        $( "#explore-Types-Colorectal-Age-and-Sex-Male->-64" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Types-Colorectal-Race' title='Dictionary (7 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"White"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>15.9</code>
             
                
             </td> 
             <td>White</td> </tr>
        
        <tr> <td><code>"White non-Hispanic"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>16.0</code>
             
                
             </td> 
             <td>White non-Hispanic</td> </tr>
        
        <tr> <td><code>"Black"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>24.4</code>
             
                
             </td> 
             <td>Black or African American</td> </tr>
        
        <tr> <td><code>"Black non-Hispanic"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>24.5</code>
             
                
             </td> 
             <td>Black or African American non-Hispanic</td> </tr>
        
        <tr> <td><code>"Asian"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>0.0</code>
             
                
             </td> 
             <td>Asian or Pacific Islander</td> </tr>
        
        <tr> <td><code>"Indigenous"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>0.0</code>
             
                
             </td> 
             <td>American Indian or Alaska Native</td> </tr>
        
        <tr> <td><code>"Hispanic"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>5.7</code>
             
                
             </td> 
             <td>Hispanic or Latino</td> </tr>
        
    </table>
</div>

    

    

    

    

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Types-Colorectal-Race" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Types-Colorectal-Race-White").click(function() {
        $( "#explore-Types-Colorectal-Race-White" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Types-Colorectal-Race-White-non-Hispanic").click(function() {
        $( "#explore-Types-Colorectal-Race-White-non-Hispanic" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Types-Colorectal-Race-Black").click(function() {
        $( "#explore-Types-Colorectal-Race-Black" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Types-Colorectal-Race-Black-non-Hispanic").click(function() {
        $( "#explore-Types-Colorectal-Race-Black-non-Hispanic" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Types-Colorectal-Race-Asian").click(function() {
        $( "#explore-Types-Colorectal-Race-Asian" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Types-Colorectal-Race-Indigenous").click(function() {
        $( "#explore-Types-Colorectal-Race-Indigenous" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Types-Colorectal-Race-Hispanic").click(function() {
        $( "#explore-Types-Colorectal-Race-Hispanic" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Types-Lung' title='Dictionary (3 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Total"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>66.4</code>
             
                
             </td> 
             <td>Lung Cancer Deaths (Rate per 100,000 Population, 2007-2013)</td> </tr>
        
        <tr> <td><code>"Age and Sex"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Types-Lung-Age-and-Sex'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Race"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Types-Lung-Race'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
    </table>
</div>

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Types-Lung" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Types-Lung-Total").click(function() {
        $( "#explore-Types-Lung-Total" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Types-Lung-Age-and-Sex").click(function() {
        $( "#explore-Types-Lung-Age-and-Sex" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Types-Lung-Race").click(function() {
        $( "#explore-Types-Lung-Race" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Types-Lung-Age-and-Sex' title='Dictionary (2 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Female"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Types-Lung-Age-and-Sex-Female'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Male"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Types-Lung-Age-and-Sex-Male'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
    </table>
</div>

    

    

<script>
$(document).ready(function() {
    $( "#explore-Types-Lung-Age-and-Sex" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Types-Lung-Age-and-Sex-Female").click(function() {
        $( "#explore-Types-Lung-Age-and-Sex-Female" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Types-Lung-Age-and-Sex-Male").click(function() {
        $( "#explore-Types-Lung-Age-and-Sex-Male" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Types-Lung-Age-and-Sex-Female' title='Dictionary (3 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"18 - 44"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>1.7</code>
             
                
             </td> 
             <td>Female 18 to 44 Years</td> </tr>
        
        <tr> <td><code>"45 - 64"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>54.8</code>
             
                
             </td> 
             <td>Female 45 to 64 Years</td> </tr>
        
        <tr> <td><code>"> 64"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>221.7</code>
             
                
             </td> 
             <td>Female 65 Years and Over</td> </tr>
        
    </table>
</div>

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Types-Lung-Age-and-Sex-Female" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Types-Lung-Age-and-Sex-Female-18---44").click(function() {
        $( "#explore-Types-Lung-Age-and-Sex-Female-18---44" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Types-Lung-Age-and-Sex-Female-45---64").click(function() {
        $( "#explore-Types-Lung-Age-and-Sex-Female-45---64" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Types-Lung-Age-and-Sex-Female->-64").click(function() {
        $( "#explore-Types-Lung-Age-and-Sex-Female->-64" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Types-Lung-Age-and-Sex-Male' title='Dictionary (3 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"18 - 44"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>2.4</code>
             
                
             </td> 
             <td>Male 18 to 44 Years</td> </tr>
        
        <tr> <td><code>"45 - 64"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>102.9</code>
             
                
             </td> 
             <td>Male 45 to 64 Years</td> </tr>
        
        <tr> <td><code>"> 64"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>457.4</code>
             
                
             </td> 
             <td>Male 65 Years and Over</td> </tr>
        
    </table>
</div>

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Types-Lung-Age-and-Sex-Male" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Types-Lung-Age-and-Sex-Male-18---44").click(function() {
        $( "#explore-Types-Lung-Age-and-Sex-Male-18---44" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Types-Lung-Age-and-Sex-Male-45---64").click(function() {
        $( "#explore-Types-Lung-Age-and-Sex-Male-45---64" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Types-Lung-Age-and-Sex-Male->-64").click(function() {
        $( "#explore-Types-Lung-Age-and-Sex-Male->-64" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Types-Lung-Race' title='Dictionary (7 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"White"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>59.9</code>
             
                
             </td> 
             <td>White</td> </tr>
        
        <tr> <td><code>"White non-Hispanic"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>60.4</code>
             
                
             </td> 
             <td>White non-Hispanic</td> </tr>
        
        <tr> <td><code>"Black"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>52.6</code>
             
                
             </td> 
             <td>Black or African American</td> </tr>
        
        <tr> <td><code>"Black non-Hispanic"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>52.8</code>
             
                
             </td> 
             <td>Black or African American non-Hispanic</td> </tr>
        
        <tr> <td><code>"Asian"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>23.0</code>
             
                
             </td> 
             <td>Asian or Pacific Islander</td> </tr>
        
        <tr> <td><code>"Indigenous"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>22.9</code>
             
                
             </td> 
             <td>American Indian or Alaska Native</td> </tr>
        
        <tr> <td><code>"Hispanic"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>14.8</code>
             
                
             </td> 
             <td>Hispanic or Latino</td> </tr>
        
    </table>
</div>

    

    

    

    

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Types-Lung-Race" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Types-Lung-Race-White").click(function() {
        $( "#explore-Types-Lung-Race-White" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Types-Lung-Race-White-non-Hispanic").click(function() {
        $( "#explore-Types-Lung-Race-White-non-Hispanic" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Types-Lung-Race-Black").click(function() {
        $( "#explore-Types-Lung-Race-Black" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Types-Lung-Race-Black-non-Hispanic").click(function() {
        $( "#explore-Types-Lung-Race-Black-non-Hispanic" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Types-Lung-Race-Asian").click(function() {
        $( "#explore-Types-Lung-Race-Asian" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Types-Lung-Race-Indigenous").click(function() {
        $( "#explore-Types-Lung-Race-Indigenous" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Types-Lung-Race-Hispanic").click(function() {
        $( "#explore-Types-Lung-Race-Hispanic" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>


# Downloads

Download all of the following files.

1. <a href='../../datasets/python/cancer/cancer.py' download>cancer.py <span class="fas fa-download"></span></a>
2. <a href='../../datasets/python/cancer/cancer.data' download>cancer.data <span class="fas fa-download"></span></a>

# Usage

```python
import cancer
cancer_reports = cancer.get_cancer_reports()
```

# Documentation

<dl>
    <dt><span>get_cancer_reports()</span></dt>
    <dd>Returns a list of dictionaries representing Cancer Reports.</dd>
</dl>