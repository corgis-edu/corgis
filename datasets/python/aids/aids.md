---
permalink: /python/aids/
style: dataset
---



<img class="img-thumbnail float-right"
     src="/images/datasets/aids-icon.png"
     alt="aids icon"
     role="presentation">

# Aids Python Library

<p class='lead'>From the CORGIS Dataset Project</p>

<span class='text-muted'>By Ryan Whitcomb, Joung Min Choi, Bo Guan</span><br>
<span class='text-muted'>Version 3.0.0, created 8/31/2021</span><br>
<span class='text-muted'>Tags: aids, death, disease, hiv, orphans, health, countries, world, gender, united nations, un</span>

# Overview

The UNAIDS Organization is an entity of the United Nations that looks to reduce the transmission of AIDS and provide resources to those currently affected by the disease.  The following data set contains information on the number of those affected by the disease, new cases of the disease being reported, and AIDS-related deaths for a large set of countries over the course of 1990 - 2015.



<http://aidsinfo.unaids.org/>




# Explore Structure

Each row represents *AIDS information for each country at each year*.



<button type='button'
        class='btn btn-info'
        id='btn-explore'>Explore aids data</button>

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
             <td>The name of the country.</td> </tr>
        
        <tr> <td><code>"Year"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>1990</code>
             
                
             </td> 
             <td>4-digit year</td> </tr>
        
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
        
        <tr> <td><code>"AIDS-Related Deaths"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Data-AIDS-Related-Deaths'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"HIV Prevalence"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Data-HIV-Prevalence'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"New HIV Infections"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Data-New-HIV-Infections'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"People Living with HIV"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Data-People-Living-with-HIV'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
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
    
    $("#btn-explore-Data-AIDS-Related-Deaths").click(function() {
        $( "#explore-Data-AIDS-Related-Deaths" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Data-HIV-Prevalence").click(function() {
        $( "#explore-Data-HIV-Prevalence" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Data-New-HIV-Infections").click(function() {
        $( "#explore-Data-New-HIV-Infections" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Data-People-Living-with-HIV").click(function() {
        $( "#explore-Data-People-Living-with-HIV" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Data-AIDS-Related-Deaths' title='Dictionary (6 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"AIDS Orphans"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>100</code>
             
                
             </td> 
             <td>Children who have been orphaned from AIDS (parents died of AIDS) below 17 years of age.</td> </tr>
        
        <tr> <td><code>"Adults"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>100</code>
             
                
             </td> 
             <td>All adults (older than 15 years of age) who have died of aids.</td> </tr>
        
        <tr> <td><code>"All Ages"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>100</code>
             
                
             </td> 
             <td>The total number of deaths caused by AIDS in this year.</td> </tr>
        
        <tr> <td><code>"Children"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>100</code>
             
                
             </td> 
             <td>Children who have died of AIDS below 14 years of age.</td> </tr>
        
        <tr> <td><code>"Female Adults"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>100</code>
             
                
             </td> 
             <td>Female adults (older than 15 years of age) who have died of aids.</td> </tr>
        
        <tr> <td><code>"Male Adults"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>100</code>
             
                
             </td> 
             <td>Male adults (older than 15 years of age) who have died of aids.</td> </tr>
        
    </table>
</div>

    

    

    

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Data-AIDS-Related-Deaths" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Data-AIDS-Related-Deaths-AIDS-Orphans").click(function() {
        $( "#explore-Data-AIDS-Related-Deaths-AIDS-Orphans" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Data-AIDS-Related-Deaths-Adults").click(function() {
        $( "#explore-Data-AIDS-Related-Deaths-Adults" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Data-AIDS-Related-Deaths-All-Ages").click(function() {
        $( "#explore-Data-AIDS-Related-Deaths-All-Ages" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Data-AIDS-Related-Deaths-Children").click(function() {
        $( "#explore-Data-AIDS-Related-Deaths-Children" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Data-AIDS-Related-Deaths-Female-Adults").click(function() {
        $( "#explore-Data-AIDS-Related-Deaths-Female-Adults" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Data-AIDS-Related-Deaths-Male-Adults").click(function() {
        $( "#explore-Data-AIDS-Related-Deaths-Male-Adults" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Data-HIV-Prevalence' title='Dictionary (3 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Adults"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>0.1</code>
             
                
             </td> 
             <td>The percentage of the population of Young Men (15-49 years old) suffering from AIDS in this year.</td> </tr>
        
        <tr> <td><code>"Young Men"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>0.1</code>
             
                
             </td> 
             <td>The percentage of the population of Young Men (15-24 years old) suffering from AIDS in this year.</td> </tr>
        
        <tr> <td><code>"Young Women"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>0.1</code>
             
                
             </td> 
             <td>The percentage of the population of Young Women (15-24 years old) suffering from AIDS in this year.</td> </tr>
        
    </table>
</div>

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Data-HIV-Prevalence" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Data-HIV-Prevalence-Adults").click(function() {
        $( "#explore-Data-HIV-Prevalence-Adults" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Data-HIV-Prevalence-Young-Men").click(function() {
        $( "#explore-Data-HIV-Prevalence-Young-Men" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Data-HIV-Prevalence-Young-Women").click(function() {
        $( "#explore-Data-HIV-Prevalence-Young-Women" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Data-New-HIV-Infections' title='Dictionary (7 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Young Adults"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>100</code>
             
                
             </td> 
             <td>The number of reported cases of AIDS in adults (15-49 years old).</td> </tr>
        
        <tr> <td><code>"Male Adults"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>100</code>
             
                
             </td> 
             <td>The number of reported cases of AIDS in male adults (15+ years old).</td> </tr>
        
        <tr> <td><code>"Female Adults"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>100</code>
             
                
             </td> 
             <td>The number of reported cases of AIDS in female adults (15+ years old).</td> </tr>
        
        <tr> <td><code>"Children"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>100</code>
             
                
             </td> 
             <td>The number of reported cases of AIDS in children (0-14 years old).</td> </tr>
        
        <tr> <td><code>"All Ages"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>100</code>
             
                
             </td> 
             <td>The total number of reported cases of AIDS in this year.</td> </tr>
        
        <tr> <td><code>"Adults"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>100</code>
             
                
             </td> 
             <td>The number of reported cases of AIDS in all adults (15+ years old).</td> </tr>
        
        <tr> <td><code>"Incidence Rate Among Adults"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>0.01</code>
             
                
             </td> 
             <td>Incidence rate for HIV incidence per 1000 population in all adults (15+ years old)</td> </tr>
        
    </table>
</div>

    

    

    

    

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Data-New-HIV-Infections" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Data-New-HIV-Infections-Young-Adults").click(function() {
        $( "#explore-Data-New-HIV-Infections-Young-Adults" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Data-New-HIV-Infections-Male-Adults").click(function() {
        $( "#explore-Data-New-HIV-Infections-Male-Adults" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Data-New-HIV-Infections-Female-Adults").click(function() {
        $( "#explore-Data-New-HIV-Infections-Female-Adults" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Data-New-HIV-Infections-Children").click(function() {
        $( "#explore-Data-New-HIV-Infections-Children" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Data-New-HIV-Infections-All-Ages").click(function() {
        $( "#explore-Data-New-HIV-Infections-All-Ages" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Data-New-HIV-Infections-Adults").click(function() {
        $( "#explore-Data-New-HIV-Infections-Adults" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Data-New-HIV-Infections-Incidence-Rate-Among-Adults").click(function() {
        $( "#explore-Data-New-HIV-Infections-Incidence-Rate-Among-Adults" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Data-People-Living-with-HIV' title='Dictionary (5 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Total"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>500</code>
             
                
             </td> 
             <td>The total number of people suffering from AIDS in this year.</td> </tr>
        
        <tr> <td><code>"Male Adults"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>500</code>
             
                
             </td> 
             <td>The number of Adult Men (greater than 15 years old) suffering from AIDS in this year.</td> </tr>
        
        <tr> <td><code>"Female Adults"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>100</code>
             
                
             </td> 
             <td>The number of Adult Women (greater than 15 years old) suffering from AIDS in this year.</td> </tr>
        
        <tr> <td><code>"Children"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>100</code>
             
                
             </td> 
             <td>The number of Children (less than 15 years old) suffering from AIDS in this year.</td> </tr>
        
        <tr> <td><code>"Adults"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>500</code>
             
                
             </td> 
             <td>The number of Adults (greater than 15 years old) suffering from AIDS in this year.</td> </tr>
        
    </table>
</div>

    

    

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Data-People-Living-with-HIV" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Data-People-Living-with-HIV-Total").click(function() {
        $( "#explore-Data-People-Living-with-HIV-Total" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Data-People-Living-with-HIV-Male-Adults").click(function() {
        $( "#explore-Data-People-Living-with-HIV-Male-Adults" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Data-People-Living-with-HIV-Female-Adults").click(function() {
        $( "#explore-Data-People-Living-with-HIV-Female-Adults" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Data-People-Living-with-HIV-Children").click(function() {
        $( "#explore-Data-People-Living-with-HIV-Children" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Data-People-Living-with-HIV-Adults").click(function() {
        $( "#explore-Data-People-Living-with-HIV-Adults" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>


# Downloads

Download all of the following files.

1. <a href='../../datasets/python/aids/aids.py' download>aids.py <span class="fas fa-download"></span></a>
2. <a href='../../datasets/python/aids/aids.data' download>aids.data <span class="fas fa-download"></span></a>

# Usage

```python
import aids
report = aids.get_report()
```

# Documentation

<dl>
    <dt><span>get_report()</span></dt>
    <dd>Returns a list of dictionaries representing report.</dd>
</dl>