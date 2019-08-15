---
permalink: /python/state_crime/
style: dataset
---



<img class="img-thumbnail float-right"
     src="/images/datasets/state-crime-splash.png"
     alt="state crime icon"
     role="presentation">

# State Crime Python Library

<p class='lead'>From the CORGIS Dataset Project</p>

<span class='text-muted'>By Ryan Whitcomb</span><br>
<span class='text-muted'>Version 2.0.0, created 6/7/2016</span><br>
<span class='text-muted'>Tags: crime, burglary, larceny, motor, property, violent, assault, murder, rape, robbery</span>

# Overview

From the Unified Crime Reporting Statistics and under the collaboration of the U.S. Department of Justice and the Federal Bureau of Investigation information crime statistics are available for public review.  The following data set has information on the crime rates and totals for states across the United States for a wide range of years.  The crime reports are divided into two main categories: property and violent crime.  Property crime refers to burglary, larceny, and motor related crime while violent crime refers to assault, murder, rape, and robbery. These reports go from 1960 to 2012.



<http://www.ucrdatatool.gov/Search/Crime/Local/JurisbyJurisStepTwo.cfm>




# Explore Structure

Each row represents *$MISSING_FIELD*.



<button type='button'
        class='btn btn-info'
        id='btn-explore'>Explore state crime data</button>

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
             <td>The long name of the state that this report was made for.</td> </tr>
        
        <tr> <td><code>"Year"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>1960</code>
             
                
             </td> 
             <td>The year that this report was made in.</td> </tr>
        
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

<div id='explore-Data' title='Dictionary (3 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Population"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>3266740</code>
             
                
             </td> 
             <td>The number of people living in this state at the time the report was created.</td> </tr>
        
        <tr> <td><code>"Data.Rates"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Data-Rates'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Data.Totals"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Data-Totals'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
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
    
    $("#btn-explore-Data-Population").click(function() {
        $( "#explore-Data-Population" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Data-Rates").click(function() {
        $( "#explore-Data-Rates" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Data-Totals").click(function() {
        $( "#explore-Data-Totals" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Data-Rates' title='Dictionary (2 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Data.Rates.Property"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Data-Rates-Property'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Data.Rates.Violent"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Data-Rates-Violent'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
    </table>
</div>

    

    

<script>
$(document).ready(function() {
    $( "#explore-Data-Rates" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Data-Rates-Property").click(function() {
        $( "#explore-Data-Rates-Property" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Data-Rates-Violent").click(function() {
        $( "#explore-Data-Rates-Violent" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Data-Rates-Property' title='Dictionary (4 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"All"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>1035.4</code>
             
                
             </td> 
             <td>Rates are the number of reported offenses per 100,000 population. This property reflects all of the Property-related crimes, including burglaries, larcenies, and motor crimes.</td> </tr>
        
        <tr> <td><code>"Burglary"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>355.9</code>
             
                
             </td> 
             <td>Rates are the number of reported offenses per 100,000 population. This property reflects the number of burglaries, or entry into a building illegally with intent to commit a crime, especially theft.</td> </tr>
        
        <tr> <td><code>"Larceny"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>592.1</code>
             
                
             </td> 
             <td>Rates are the number of reported offenses per 100,000 population. This property reflects the number of burglaries, or theft of personal property.</td> </tr>
        
        <tr> <td><code>"Motor"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>87.3</code>
             
                
             </td> 
             <td>Rates are the number of reported offenses per 100,000 population. This property reflects the number of crimes where a motor vehicle was stolen.</td> </tr>
        
    </table>
</div>

    

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Data-Rates-Property" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Data-Rates-Property-All").click(function() {
        $( "#explore-Data-Rates-Property-All" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Data-Rates-Property-Burglary").click(function() {
        $( "#explore-Data-Rates-Property-Burglary" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Data-Rates-Property-Larceny").click(function() {
        $( "#explore-Data-Rates-Property-Larceny" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Data-Rates-Property-Motor").click(function() {
        $( "#explore-Data-Rates-Property-Motor" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Data-Rates-Violent' title='Dictionary (5 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"All"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>186.6</code>
             
                
             </td> 
             <td>Rates are the number of reported offenses per 100,000 population. This property reflects all of the Violent crimes, including assaults, murders, rapes, and robberies.</td> </tr>
        
        <tr> <td><code>"Assault"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>138.1</code>
             
                
             </td> 
             <td>Rates are the number of reported offenses per 100,000 population. This property reflects the number of crimes where someone made an attempt to initiate harmful or offensive contact with a person, or made a threat to do so.</td> </tr>
        
        <tr> <td><code>"Murder"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>12.4</code>
             
                
             </td> 
             <td>Rates are the number of reported offenses per 100,000 population. This property reflects the number of crimes where someone committed the unlawful killing of another human being without justification.</td> </tr>
        
        <tr> <td><code>"Rape"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>8.6</code>
             
                
             </td> 
             <td>Rates are the number of reported offenses per 100,000 population. This property reflects the number of crimes where someone committed rape. The FBI UCR definition of rape, before 2013, is the carnal knowledge of a female forcibly and against her will.</td> </tr>
        
        <tr> <td><code>"Robbery"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>27.5</code>
             
                
             </td> 
             <td>Rates are the number of reported offenses per 100,000 population. This property reflects the number of crimes where someone took or attempted to take anything of value by force or threat of force or by putting the victim in fear.</td> </tr>
        
    </table>
</div>

    

    

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Data-Rates-Violent" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Data-Rates-Violent-All").click(function() {
        $( "#explore-Data-Rates-Violent-All" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Data-Rates-Violent-Assault").click(function() {
        $( "#explore-Data-Rates-Violent-Assault" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Data-Rates-Violent-Murder").click(function() {
        $( "#explore-Data-Rates-Violent-Murder" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Data-Rates-Violent-Rape").click(function() {
        $( "#explore-Data-Rates-Violent-Rape" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Data-Rates-Violent-Robbery").click(function() {
        $( "#explore-Data-Rates-Violent-Robbery" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Data-Totals' title='Dictionary (2 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Data.Totals.Property"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Data-Totals-Property'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Data.Totals.Violent"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Data-Totals-Violent'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
    </table>
</div>

    

    

<script>
$(document).ready(function() {
    $( "#explore-Data-Totals" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Data-Totals-Property").click(function() {
        $( "#explore-Data-Totals-Property" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Data-Totals-Violent").click(function() {
        $( "#explore-Data-Totals-Violent" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Data-Totals-Property' title='Dictionary (4 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"All"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>33823</code>
             
                
             </td> 
             <td>This property reflects all of the Property-related crimes, including burglaries, larcenies, and motor crimes.</td> </tr>
        
        <tr> <td><code>"Burglary"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>11626</code>
             
                
             </td> 
             <td>This property reflects the number of burglaries, or entry into a building illegally with intent to commit a crime, especially theft.</td> </tr>
        
        <tr> <td><code>"Larceny"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>19344</code>
             
                
             </td> 
             <td>This property reflects the number of burglaries, or theft of personal property.</td> </tr>
        
        <tr> <td><code>"Motor"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>2853</code>
             
                
             </td> 
             <td>This property reflects the number of crimes where a motor vehicle was stolen.</td> </tr>
        
    </table>
</div>

    

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Data-Totals-Property" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Data-Totals-Property-All").click(function() {
        $( "#explore-Data-Totals-Property-All" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Data-Totals-Property-Burglary").click(function() {
        $( "#explore-Data-Totals-Property-Burglary" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Data-Totals-Property-Larceny").click(function() {
        $( "#explore-Data-Totals-Property-Larceny" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Data-Totals-Property-Motor").click(function() {
        $( "#explore-Data-Totals-Property-Motor" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Data-Totals-Violent' title='Dictionary (5 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"All"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>6097</code>
             
                
             </td> 
             <td>This property reflects all of the Violent crimes, including assaults, murders, rapes, and robberies.</td> </tr>
        
        <tr> <td><code>"Assault"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>4512</code>
             
                
             </td> 
             <td>This property reflects the number of crimes where someone made an attempt to initiate harmful or offensive contact with a person, or made a threat to do so.</td> </tr>
        
        <tr> <td><code>"Murder"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>406</code>
             
                
             </td> 
             <td>This property reflects the number of crimes where someone committed the unlawful killing of another human being without justification.</td> </tr>
        
        <tr> <td><code>"Rape"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>281</code>
             
                
             </td> 
             <td>This property reflects the number of crimes where someone committed rape. The FBI UCR definition of rape, before 2013, is the carnal knowledge of a female forcibly and against her will.</td> </tr>
        
        <tr> <td><code>"Robbery"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>898</code>
             
                
             </td> 
             <td>This property reflects the number of crimes where someone took or attempted to take anything of value by force or threat of force or by putting the victim in fear.</td> </tr>
        
    </table>
</div>

    

    

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Data-Totals-Violent" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Data-Totals-Violent-All").click(function() {
        $( "#explore-Data-Totals-Violent-All" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Data-Totals-Violent-Assault").click(function() {
        $( "#explore-Data-Totals-Violent-Assault" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Data-Totals-Violent-Murder").click(function() {
        $( "#explore-Data-Totals-Violent-Murder" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Data-Totals-Violent-Rape").click(function() {
        $( "#explore-Data-Totals-Violent-Rape" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Data-Totals-Violent-Robbery").click(function() {
        $( "#explore-Data-Totals-Violent-Robbery" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>


# Downloads

Download all of the following files.

1. <a href='../../datasets/python/state_crime/state_crime.py' download>state_crime.py <span class="fas fa-download"></span></a>
2. <a href='../../datasets/python/state_crime/state_crime.data' download>state_crime.data <span class="fas fa-download"></span></a>

# Usage

```python
import state_crime
report = state_crime.get_report()
```

# Documentation

<dl>
    <dt><span>get_report()</span></dt>
    <dd>Returns a list of dictionaries representing report.</dd>
</dl>