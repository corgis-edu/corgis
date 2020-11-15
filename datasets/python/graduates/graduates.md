---
permalink: /python/graduates/
style: dataset
---



<img class="img-thumbnail float-right"
     src="/images/datasets/graduates-icon.png"
     alt="graduates icon"
     role="presentation">

# Graduates Python Library

<p class='lead'>From the CORGIS Dataset Project</p>

<span class='text-muted'>By Austin Cory Bart <acbart@vt.edu></span><br>
<span class='text-muted'>Version 2.0.0, created 11/1/2015</span><br>
<span class='text-muted'>Tags: graduation, grads, majors, education, college, university, higher education, jobs, careers</span>

# Overview

The data in this library comes from the National Survey of Recent College Graduates.  Included is information about employment numbers, major information, and the earnings of different majors. Many majors were not available before 2010, so their values have been recorded as 0 (note that this may affect the averages shown in the bar charts).



<https://www.nsf.gov/statistics/srvyrecentgrads/>




# Explore Structure

Each row represents *$MISSING_FIELD*.



<button type='button'
        class='btn btn-info'
        id='btn-explore'>Explore graduates data</button>

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
        
        <tr> <td><code>"Year"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>1993</code>
             
                
             </td> 
             <td>The year that this report was made for.</td> </tr>
        
        <tr> <td><code>"Demographics"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Demographics'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Education"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Education'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Salaries"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Salaries'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Employment"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Employment'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
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
        
    
    $("#btn-explore-Demographics").click(function() {
        $( "#explore-Demographics" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Education").click(function() {
        $( "#explore-Education" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Salaries").click(function() {
        $( "#explore-Salaries" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Employment").click(function() {
        $( "#explore-Employment" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Demographics' title='Dictionary (3 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Total"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>1295598</code>
             
                
             </td> 
             <td>The estimated number of people awarded degrees in this major during this year.</td> </tr>
        
        <tr> <td><code>"Ethnicity"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Demographics-Ethnicity'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Gender"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Demographics-Gender'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
    </table>
</div>

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Demographics" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Demographics-Total").click(function() {
        $( "#explore-Demographics-Total" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Demographics-Ethnicity").click(function() {
        $( "#explore-Demographics-Ethnicity" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Demographics-Gender").click(function() {
        $( "#explore-Demographics-Gender" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Education' title='Dictionary (2 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Major"</code></td>
             <td><span data-toggle="tooltip"
                       title='String (text)'>
                       str</span></td> 
             <td>
             
                <code>"Biological Sciences"</code>
             
                
             </td> 
             <td>The name of the major for these graduated students.</td> </tr>
        
        <tr> <td><code>"Degrees"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Education-Degrees'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
    </table>
</div>

    

    

<script>
$(document).ready(function() {
    $( "#explore-Education" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Education-Major").click(function() {
        $( "#explore-Education-Major" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Education-Degrees").click(function() {
        $( "#explore-Education-Degrees" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Salaries' title='Dictionary (6 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Highest"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>999999.0</code>
             
                
             </td> 
             <td>The highest recorded salary reported for employed people with this degree during this year.</td> </tr>
        
        <tr> <td><code>"Lowest"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>0.0</code>
             
                
             </td> 
             <td>The lowest recorded salary reported for employed people with this degree during this year.</td> </tr>
        
        <tr> <td><code>"Mean"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>160585.73</code>
             
                
             </td> 
             <td>The average (mean) recorded salary reported for employed people with this degree during this year.</td> </tr>
        
        <tr> <td><code>"Median"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>51000.0</code>
             
                
             </td> 
             <td>The median recorded salary reported for employed people with this degree during this year.</td> </tr>
        
        <tr> <td><code>"Quantity"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>13432</code>
             
                
             </td> 
             <td>The number of salaries reported for employed people with this degree during this year.</td> </tr>
        
        <tr> <td><code>"Standard Deviation"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>297818.25</code>
             
                
             </td> 
             <td>The standard deviation (which gives the amount of variance) of salaries reported for employed people with this degree during this year.</td> </tr>
        
    </table>
</div>

    

    

    

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Salaries" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Salaries-Highest").click(function() {
        $( "#explore-Salaries-Highest" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Salaries-Lowest").click(function() {
        $( "#explore-Salaries-Lowest" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Salaries-Mean").click(function() {
        $( "#explore-Salaries-Mean" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Salaries-Median").click(function() {
        $( "#explore-Salaries-Median" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Salaries-Quantity").click(function() {
        $( "#explore-Salaries-Quantity" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Salaries-Standard-Deviation").click(function() {
        $( "#explore-Salaries-Standard-Deviation" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Demographics-Ethnicity' title='Dictionary (3 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Asians"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>84495</code>
             
                
             </td> 
             <td>The estimated number of people identifying as Asian that were awarded degrees in this major during this year.</td> </tr>
        
        <tr> <td><code>"Minorities"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>115016</code>
             
                
             </td> 
             <td>The estimated number of people identifying as a minority (e.g., Black, African American, Native American) that were awarded degrees in this major during this year.</td> </tr>
        
        <tr> <td><code>"Whites"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>1094775</code>
             
                
             </td> 
             <td>The estimated number of people identifying as White that were awarded degrees in this major during this year.</td> </tr>
        
    </table>
</div>

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Demographics-Ethnicity" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Demographics-Ethnicity-Asians").click(function() {
        $( "#explore-Demographics-Ethnicity-Asians" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Demographics-Ethnicity-Minorities").click(function() {
        $( "#explore-Demographics-Ethnicity-Minorities" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Demographics-Ethnicity-Whites").click(function() {
        $( "#explore-Demographics-Ethnicity-Whites" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Demographics-Gender' title='Dictionary (2 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Females"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>551695</code>
             
                
             </td> 
             <td>The estimated number of women awarded degrees in this major during this year.</td> </tr>
        
        <tr> <td><code>"Males"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>743903</code>
             
                
             </td> 
             <td>The estimated number of women awarded degrees in this major during this year.</td> </tr>
        
    </table>
</div>

    

    

<script>
$(document).ready(function() {
    $( "#explore-Demographics-Gender" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Demographics-Gender-Females").click(function() {
        $( "#explore-Demographics-Gender-Females" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Demographics-Gender-Males").click(function() {
        $( "#explore-Demographics-Gender-Males" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Education-Degrees' title='Dictionary (4 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Bachelors"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>671374</code>
             
                
             </td> 
             <td>The estimated number of bachelor degrees awarded in this for major during this year.</td> </tr>
        
        <tr> <td><code>"Doctorates"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>90543</code>
             
                
             </td> 
             <td>The estimated number of doctoral degrees awarded in this for major during this year.</td> </tr>
        
        <tr> <td><code>"Masters"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>248813</code>
             
                
             </td> 
             <td>The estimated number of Masters awarded in this for major during this year.</td> </tr>
        
        <tr> <td><code>"Professionals"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>284869</code>
             
                
             </td> 
             <td>The estimated number of professional degrees awarded in this for major during this year.</td> </tr>
        
    </table>
</div>

    

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Education-Degrees" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Education-Degrees-Bachelors").click(function() {
        $( "#explore-Education-Degrees-Bachelors" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Education-Degrees-Doctorates").click(function() {
        $( "#explore-Education-Degrees-Doctorates" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Education-Degrees-Masters").click(function() {
        $( "#explore-Education-Degrees-Masters" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Education-Degrees-Professionals").click(function() {
        $( "#explore-Education-Degrees-Professionals" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Employment' title='Dictionary (5 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Employer Type"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Employment-Employer-Type'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Reason Working Outside Field"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Employment-Reason-Working-Outside-Field'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Reason for Not Working"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Employment-Reason-for-Not-Working'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Status"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Employment-Status'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Work Activity"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Employment-Work-Activity'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
    </table>
</div>

    

    

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Employment" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Employment-Employer-Type").click(function() {
        $( "#explore-Employment-Employer-Type" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Employment-Reason-Working-Outside-Field").click(function() {
        $( "#explore-Employment-Reason-Working-Outside-Field" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Employment-Reason-for-Not-Working").click(function() {
        $( "#explore-Employment-Reason-for-Not-Working" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Employment-Status").click(function() {
        $( "#explore-Employment-Status" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Employment-Work-Activity").click(function() {
        $( "#explore-Employment-Work-Activity" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Employment-Employer-Type' title='Dictionary (3 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Business/Industry"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>669270</code>
             
                
             </td> 
             <td>The number of people with a degree in this major during this year who described their Employer Type as "Business/Industry".</td> </tr>
        
        <tr> <td><code>"Educational Institution"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>300468</code>
             
                
             </td> 
             <td>The number of people with a degree in this major during this year who described their Employer Type as an "Educational Institution".</td> </tr>
        
        <tr> <td><code>"Government"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>121117</code>
             
                
             </td> 
             <td>The number of people with a degree in this major during this year who described their Employer Type as "Government".</td> </tr>
        
    </table>
</div>

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Employment-Employer-Type" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Employment-Employer-Type-Business_Industry").click(function() {
        $( "#explore-Employment-Employer-Type-Business_Industry" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Employment-Employer-Type-Educational-Institution").click(function() {
        $( "#explore-Employment-Employer-Type-Educational-Institution" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Employment-Employer-Type-Government").click(function() {
        $( "#explore-Employment-Employer-Type-Government" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Employment-Reason-Working-Outside-Field' title='Dictionary (7 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Career Change"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>98112</code>
             
                
             </td> 
             <td>The number of people with a degree in this major during this year, who are working outside of the field associated with their major, and who did so because they wanted a career change.</td> </tr>
        
        <tr> <td><code>"Family-related"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>65619</code>
             
                
             </td> 
             <td>The number of people with a degree in this major during this year, who are working outside of the field associated with their major, and who did so because of family-related issues.</td> </tr>
        
        <tr> <td><code>"Job Location"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>90842</code>
             
                
             </td> 
             <td>The number of people with a degree in this major during this year, who are working outside of the field associated with their major, and who did so because of the job location.</td> </tr>
        
        <tr> <td><code>"No Job Available"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>76598</code>
             
                
             </td> 
             <td>The number of people with a degree in this major during this year, who are working outside of the field associated with their major, and who did so because there was no job available in their field.</td> </tr>
        
        <tr> <td><code>"Other"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>24821</code>
             
                
             </td> 
             <td>The number of people with a degree in this major during this year, who are working outside of the field associated with their major, and who did so because of other reasons.</td> </tr>
        
        <tr> <td><code>"Pay/Promotion"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>111962</code>
             
                
             </td> 
             <td>The number of people with a degree in this major during this year, who are working outside of the field associated with their major, and who did so because of pay or promotion opportunities.</td> </tr>
        
        <tr> <td><code>"Working Conditions"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>100886</code>
             
                
             </td> 
             <td>The number of people with a degree in this major during this year, who are working outside of the field associated with their major, and who did so because of working conditions.</td> </tr>
        
    </table>
</div>

    

    

    

    

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Employment-Reason-Working-Outside-Field" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Employment-Reason-Working-Outside-Field-Career-Change").click(function() {
        $( "#explore-Employment-Reason-Working-Outside-Field-Career-Change" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Employment-Reason-Working-Outside-Field-Family-related").click(function() {
        $( "#explore-Employment-Reason-Working-Outside-Field-Family-related" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Employment-Reason-Working-Outside-Field-Job-Location").click(function() {
        $( "#explore-Employment-Reason-Working-Outside-Field-Job-Location" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Employment-Reason-Working-Outside-Field-No-Job-Available").click(function() {
        $( "#explore-Employment-Reason-Working-Outside-Field-No-Job-Available" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Employment-Reason-Working-Outside-Field-Other").click(function() {
        $( "#explore-Employment-Reason-Working-Outside-Field-Other" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Employment-Reason-Working-Outside-Field-Pay_Promotion").click(function() {
        $( "#explore-Employment-Reason-Working-Outside-Field-Pay_Promotion" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Employment-Reason-Working-Outside-Field-Working-Conditions").click(function() {
        $( "#explore-Employment-Reason-Working-Outside-Field-Working-Conditions" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Employment-Reason-for-Not-Working' title='Dictionary (5 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Family"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>45962</code>
             
                
             </td> 
             <td>The number of people with a degree in this major during this year, who are not working because of their family.</td> </tr>
        
        <tr> <td><code>"Layoff"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>7457</code>
             
                
             </td> 
             <td>The number of people with a degree in this major during this year, who are not working because they were laid off.</td> </tr>
        
        <tr> <td><code>"No Job Available"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>14976</code>
             
                
             </td> 
             <td>The number of people with a degree in this major during this year, who are not working because there was no job available.</td> </tr>
        
        <tr> <td><code>"No need/want"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>30989</code>
             
                
             </td> 
             <td>The number of people with a degree in this major during this year, who are not working because they either did not need a job and/or did not want a job.</td> </tr>
        
        <tr> <td><code>"Student"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>51891</code>
             
                
             </td> 
             <td>The number of people with a degree in this major during this year, who are not working because they were still a student.</td> </tr>
        
    </table>
</div>

    

    

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Employment-Reason-for-Not-Working" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Employment-Reason-for-Not-Working-Family").click(function() {
        $( "#explore-Employment-Reason-for-Not-Working-Family" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Employment-Reason-for-Not-Working-Layoff").click(function() {
        $( "#explore-Employment-Reason-for-Not-Working-Layoff" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Employment-Reason-for-Not-Working-No-Job-Available").click(function() {
        $( "#explore-Employment-Reason-for-Not-Working-No-Job-Available" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Employment-Reason-for-Not-Working-No-need_want").click(function() {
        $( "#explore-Employment-Reason-for-Not-Working-No-need_want" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Employment-Reason-for-Not-Working-Student").click(function() {
        $( "#explore-Employment-Reason-for-Not-Working-Student" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Employment-Status' title='Dictionary (3 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Employed"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>1090855</code>
             
                
             </td> 
             <td>The number of people with a degree in this major during this year, who are employed.</td> </tr>
        
        <tr> <td><code>"Not in Labor Force"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>181940</code>
             
                
             </td> 
             <td>The number of people with a degree in this major during this year, who are not in the labor force (e.g., retired, students, those taking care of children).</td> </tr>
        
        <tr> <td><code>"Unemployed"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>22803</code>
             
                
             </td> 
             <td>The number of people with a degree in this major during this year, who are unemployed.</td> </tr>
        
    </table>
</div>

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Employment-Status" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Employment-Status-Employed").click(function() {
        $( "#explore-Employment-Status-Employed" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Employment-Status-Not-in-Labor-Force").click(function() {
        $( "#explore-Employment-Status-Not-in-Labor-Force" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Employment-Status-Unemployed").click(function() {
        $( "#explore-Employment-Status-Unemployed" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Employment-Work-Activity' title='Dictionary (14 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Accounting/Finance/Contracts"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>793888</code>
             
                
             </td> 
             <td>The number of people with a degree in this major during this year, who describe their primary work activity (more than 10% of their time) as involving Accounting, Finance, or Contracts.</td> </tr>
        
        <tr> <td><code>"Applied Research"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>341238</code>
             
                
             </td> 
             <td>The number of people with a degree in this major during this year, who describe their primary work activity (more than 10% of their time) as involving Applied Research.</td> </tr>
        
        <tr> <td><code>"Basic Research"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>224277</code>
             
                
             </td> 
             <td>The number of people with a degree in this major during this year, who describe their primary work activity (more than 10% of their time) as involving Basic Research.</td> </tr>
        
        <tr> <td><code>"Computer Applications"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>297235</code>
             
                
             </td> 
             <td>The number of people with a degree in this major during this year, who describe their primary work activity (more than 10% of their time) as involving Computer Applications.</td> </tr>
        
        <tr> <td><code>"Design"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>118772</code>
             
                
             </td> 
             <td>The number of people with a degree in this major during this year, who describe their primary work activity (more than 10% of their time) as involving Design.</td> </tr>
        
        <tr> <td><code>"Development"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>191867</code>
             
                
             </td> 
             <td>The number of people with a degree in this major during this year, who describe their primary work activity (more than 10% of their time) as involving Development.</td> </tr>
        
        <tr> <td><code>"Human Resources"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>365049</code>
             
                
             </td> 
             <td>The number of people with a degree in this major during this year, who describe their primary work activity (more than 10% of their time) as involving Human Resources.</td> </tr>
        
        <tr> <td><code>"Managing/Supervising People/Projects"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>539430</code>
             
                
             </td> 
             <td>The number of people with a degree in this major during this year, who describe their primary work activity (more than 10% of their time) as involving managing or supervising either people or projects.</td> </tr>
        
        <tr> <td><code>"Other"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>99749</code>
             
                
             </td> 
             <td>The number of people with a degree in this major during this year, who describe their primary work activity (more than 10% of their time) as involving something not involved in any of the other categories.</td> </tr>
        
        <tr> <td><code>"Productions/Operations/Maintenance"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>103385</code>
             
                
             </td> 
             <td>The number of people with a degree in this major during this year, who describe their primary work activity (more than 10% of their time) as involving productions, operations, or maintenance.</td> </tr>
        
        <tr> <td><code>"Professional Service"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>506252</code>
             
                
             </td> 
             <td>The number of people with a degree in this major during this year, who describe their primary work activity (more than 10% of their time) as involving professional service.</td> </tr>
        
        <tr> <td><code>"Qualitity/Productivity Management"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>269042</code>
             
                
             </td> 
             <td>The number of people with a degree in this major during this year, who describe their primary work activity (more than 10% of their time) as involving qualitity or productivity management.</td> </tr>
        
        <tr> <td><code>"Sales, Purchasing, Marketing"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>215169</code>
             
                
             </td> 
             <td>The number of people with a degree in this major during this year, who describe their primary work activity (more than 10% of their time) as involving sales, purchasing, or marketing.</td> </tr>
        
        <tr> <td><code>"Teaching"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>381908</code>
             
                
             </td> 
             <td>The number of people with a degree in this major during this year, who describe their primary work activity (more than 10% of their time) as involving teaching.</td> </tr>
        
    </table>
</div>

    

    

    

    

    

    

    

    

    

    

    

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Employment-Work-Activity" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Employment-Work-Activity-Accounting_Finance_Contracts").click(function() {
        $( "#explore-Employment-Work-Activity-Accounting_Finance_Contracts" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Employment-Work-Activity-Applied-Research").click(function() {
        $( "#explore-Employment-Work-Activity-Applied-Research" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Employment-Work-Activity-Basic-Research").click(function() {
        $( "#explore-Employment-Work-Activity-Basic-Research" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Employment-Work-Activity-Computer-Applications").click(function() {
        $( "#explore-Employment-Work-Activity-Computer-Applications" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Employment-Work-Activity-Design").click(function() {
        $( "#explore-Employment-Work-Activity-Design" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Employment-Work-Activity-Development").click(function() {
        $( "#explore-Employment-Work-Activity-Development" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Employment-Work-Activity-Human-Resources").click(function() {
        $( "#explore-Employment-Work-Activity-Human-Resources" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Employment-Work-Activity-Managing_Supervising-People_Projects").click(function() {
        $( "#explore-Employment-Work-Activity-Managing_Supervising-People_Projects" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Employment-Work-Activity-Other").click(function() {
        $( "#explore-Employment-Work-Activity-Other" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Employment-Work-Activity-Productions_Operations_Maintenance").click(function() {
        $( "#explore-Employment-Work-Activity-Productions_Operations_Maintenance" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Employment-Work-Activity-Professional-Service").click(function() {
        $( "#explore-Employment-Work-Activity-Professional-Service" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Employment-Work-Activity-Qualitity_Productivity-Management").click(function() {
        $( "#explore-Employment-Work-Activity-Qualitity_Productivity-Management" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Employment-Work-Activity-Sales,-Purchasing,-Marketing").click(function() {
        $( "#explore-Employment-Work-Activity-Sales,-Purchasing,-Marketing" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Employment-Work-Activity-Teaching").click(function() {
        $( "#explore-Employment-Work-Activity-Teaching" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>


# Downloads

Download all of the following files.

1. <a href='../../datasets/python/graduates/graduates.py' download>graduates.py <span class="fas fa-download"></span></a>
2. <a href='../../datasets/python/graduates/graduates.data' download>graduates.data <span class="fas fa-download"></span></a>

# Usage

```python
import graduates
grad_major = graduates.get_grad_major()
```

# Documentation

<dl>
    <dt><span>get_grad_major()</span></dt>
    <dd>Returns a list of dictionaries representing grad major.</dd>
</dl>