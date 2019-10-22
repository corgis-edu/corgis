---
permalink: /python/school_scores/
style: dataset
---



<img class="img-thumbnail float-right"
     src="/images/datasets/school-scores-splash.png"
     alt="school scores icon"
     role="presentation">

# School Scores Python Library

<p class='lead'>From the CORGIS Dataset Project</p>

<span class='text-muted'>By Austin Cory Bart <acbart@vt.edu></span><br>
<span class='text-muted'>Version 2.0.0, created 10/24/2016</span><br>
<span class='text-muted'>Tags: school, education, K-12, kindergarten, learning, teaching, sat</span>

# Overview

SAT Scores from across the country



<<a href='https://nces.ed.gov/ccd/aboutCCD.asp'>https://nces.ed.gov/ccd/aboutCCD.asp</a>>




# Explore Structure

Each row represents *$MISSING_FIELD*.



<button type='button'
        class='btn btn-info'
        id='btn-explore'>Explore school scores data</button>

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


<div id='explore-' title='Dictionary (8 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Year"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>2005</code>
             
                
             </td> 
             <td>The year of this report.</td> </tr>
        
        <tr> <td><code>"State"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-State'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Total"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Total'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Academic Subjects"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Academic-Subjects'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Family Income"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Family-Income'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"GPA"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-GPA'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Gender"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Gender'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Score Ranges"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Score-Ranges'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
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
        
    
    $("#btn-explore-State").click(function() {
        $( "#explore-State" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Total").click(function() {
        $( "#explore-Total" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Academic-Subjects").click(function() {
        $( "#explore-Academic-Subjects" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Family-Income").click(function() {
        $( "#explore-Family-Income" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-GPA").click(function() {
        $( "#explore-GPA" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Gender").click(function() {
        $( "#explore-Gender" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Score-Ranges").click(function() {
        $( "#explore-Score-Ranges" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-State' title='Dictionary (2 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Code"</code></td>
             <td><span data-toggle="tooltip"
                       title='String (text)'>
                       str</span></td> 
             <td>
             
                <code>"AL"</code>
             
                
             </td> 
             <td>The two-letter abbreviation of the state for thsi report.</td> </tr>
        
        <tr> <td><code>"Name"</code></td>
             <td><span data-toggle="tooltip"
                       title='String (text)'>
                       str</span></td> 
             <td>
             
                <code>"Alabama"</code>
             
                
             </td> 
             <td>The full name of the state for this report.</td> </tr>
        
    </table>
</div>

    

    

<script>
$(document).ready(function() {
    $( "#explore-State" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-State-Code").click(function() {
        $( "#explore-State-Code" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-State-Name").click(function() {
        $( "#explore-State-Name" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Total' title='Dictionary (3 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Math"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>559</code>
             
                
             </td> 
             <td>The average Math score of students in this state during this year.</td> </tr>
        
        <tr> <td><code>"Test-takers"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>3985</code>
             
                
             </td> 
             <td>The number of test-takers in this state during this year.</td> </tr>
        
        <tr> <td><code>"Verbal"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>567</code>
             
                
             </td> 
             <td>The average Verbal (Reading, not Writing) score of students in this state during this year.</td> </tr>
        
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
    
    $("#btn-explore-Total-Math").click(function() {
        $( "#explore-Total-Math" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Total-Test-takers").click(function() {
        $( "#explore-Total-Test-takers" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Total-Verbal").click(function() {
        $( "#explore-Total-Verbal" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Academic-Subjects' title='Dictionary (6 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Arts/Music"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Academic-Subjects-Arts_Music'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"English"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Academic-Subjects-English'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Foreign Languages"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Academic-Subjects-Foreign-Languages'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Mathematics"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Academic-Subjects-Mathematics'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Natural Sciences"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Academic-Subjects-Natural-Sciences'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Social Sciences/History"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Academic-Subjects-Social-Sciences_History'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
    </table>
</div>

    

    

    

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Academic-Subjects" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Academic-Subjects-Arts_Music").click(function() {
        $( "#explore-Academic-Subjects-Arts_Music" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Academic-Subjects-English").click(function() {
        $( "#explore-Academic-Subjects-English" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Academic-Subjects-Foreign-Languages").click(function() {
        $( "#explore-Academic-Subjects-Foreign-Languages" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Academic-Subjects-Mathematics").click(function() {
        $( "#explore-Academic-Subjects-Mathematics" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Academic-Subjects-Natural-Sciences").click(function() {
        $( "#explore-Academic-Subjects-Natural-Sciences" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Academic-Subjects-Social-Sciences_History").click(function() {
        $( "#explore-Academic-Subjects-Social-Sciences_History" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Academic-Subjects-Arts_Music' title='Dictionary (2 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Average GPA"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>3.92</code>
             
                
             </td> 
             <td>The average GPA of all students in this state during this year in Arts/Music. Note that this is just the GPA within the subject, not across all academic subjects.</td> </tr>
        
        <tr> <td><code>"Average Years"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>2.2</code>
             
                
             </td> 
             <td>The average number of years that a student has studied Arts/Music when they took the exam.</td> </tr>
        
    </table>
</div>

    

    

<script>
$(document).ready(function() {
    $( "#explore-Academic-Subjects-Arts_Music" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Academic-Subjects-Arts_Music-Average-GPA").click(function() {
        $( "#explore-Academic-Subjects-Arts_Music-Average-GPA" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Academic-Subjects-Arts_Music-Average-Years").click(function() {
        $( "#explore-Academic-Subjects-Arts_Music-Average-Years" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Academic-Subjects-English' title='Dictionary (2 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Average GPA"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>3.53</code>
             
                
             </td> 
             <td>The average GPA of all students in this state during this year in English. Note that this is just the GPA within the subject, not across all academic subjects.</td> </tr>
        
        <tr> <td><code>"Average Years"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>3.9</code>
             
                
             </td> 
             <td>The average number of years that a student has studied English when they took the exam.</td> </tr>
        
    </table>
</div>

    

    

<script>
$(document).ready(function() {
    $( "#explore-Academic-Subjects-English" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Academic-Subjects-English-Average-GPA").click(function() {
        $( "#explore-Academic-Subjects-English-Average-GPA" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Academic-Subjects-English-Average-Years").click(function() {
        $( "#explore-Academic-Subjects-English-Average-Years" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Academic-Subjects-Foreign-Languages' title='Dictionary (2 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Average GPA"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>3.54</code>
             
                
             </td> 
             <td>The average GPA of all students in this state during this year in Foreign Languages. Note that this is just the GPA within the subject, not across all academic subjects.</td> </tr>
        
        <tr> <td><code>"Average Years"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>2.6</code>
             
                
             </td> 
             <td>The average number of years that a student has studied Foreign Languages when they took the exam.</td> </tr>
        
    </table>
</div>

    

    

<script>
$(document).ready(function() {
    $( "#explore-Academic-Subjects-Foreign-Languages" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Academic-Subjects-Foreign-Languages-Average-GPA").click(function() {
        $( "#explore-Academic-Subjects-Foreign-Languages-Average-GPA" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Academic-Subjects-Foreign-Languages-Average-Years").click(function() {
        $( "#explore-Academic-Subjects-Foreign-Languages-Average-Years" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Academic-Subjects-Mathematics' title='Dictionary (2 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Average GPA"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>3.41</code>
             
                
             </td> 
             <td>The average GPA of all students in this state during this year in Math. Note that this is just the GPA within the subject, not across all academic subjects.</td> </tr>
        
        <tr> <td><code>"Average Years"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>4.0</code>
             
                
             </td> 
             <td>The average number of years that a student has studied Math when they took the exam.</td> </tr>
        
    </table>
</div>

    

    

<script>
$(document).ready(function() {
    $( "#explore-Academic-Subjects-Mathematics" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Academic-Subjects-Mathematics-Average-GPA").click(function() {
        $( "#explore-Academic-Subjects-Mathematics-Average-GPA" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Academic-Subjects-Mathematics-Average-Years").click(function() {
        $( "#explore-Academic-Subjects-Mathematics-Average-Years" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Academic-Subjects-Natural-Sciences' title='Dictionary (2 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Average GPA"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>3.52</code>
             
                
             </td> 
             <td>The average GPA of all students in this state during this year in the Natural Sciences. Note that this is just the GPA within the subject, not across all academic subjects.</td> </tr>
        
        <tr> <td><code>"Average Years"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>3.9</code>
             
                
             </td> 
             <td>The average number of years that a student has studied the Natural Sciences when they took the exam.</td> </tr>
        
    </table>
</div>

    

    

<script>
$(document).ready(function() {
    $( "#explore-Academic-Subjects-Natural-Sciences" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Academic-Subjects-Natural-Sciences-Average-GPA").click(function() {
        $( "#explore-Academic-Subjects-Natural-Sciences-Average-GPA" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Academic-Subjects-Natural-Sciences-Average-Years").click(function() {
        $( "#explore-Academic-Subjects-Natural-Sciences-Average-Years" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Academic-Subjects-Social-Sciences_History' title='Dictionary (2 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Average GPA"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>3.59</code>
             
                
             </td> 
             <td>The average GPA of all students in this state during this year in Social Sciences and History. Note that this is just the GPA within the subject, not across all academic subjects.</td> </tr>
        
        <tr> <td><code>"Average Years"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>3.9</code>
             
                
             </td> 
             <td>The average number of years that a student has studied Social Sciences and History when they took the exam.</td> </tr>
        
    </table>
</div>

    

    

<script>
$(document).ready(function() {
    $( "#explore-Academic-Subjects-Social-Sciences_History" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Academic-Subjects-Social-Sciences_History-Average-GPA").click(function() {
        $( "#explore-Academic-Subjects-Social-Sciences_History-Average-GPA" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Academic-Subjects-Social-Sciences_History-Average-Years").click(function() {
        $( "#explore-Academic-Subjects-Social-Sciences_History-Average-Years" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Family-Income' title='Dictionary (6 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Between 20-40k"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Family-Income-Between-20-40k'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Between 40-60k"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Family-Income-Between-40-60k'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Between 60-80k"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Family-Income-Between-60-80k'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Between 80-100k"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Family-Income-Between-80-100k'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Less than 20k"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Family-Income-Less-than-20k'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"More than 100k"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Family-Income-More-than-100k'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
    </table>
</div>

    

    

    

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Family-Income" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Family-Income-Between-20-40k").click(function() {
        $( "#explore-Family-Income-Between-20-40k" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Family-Income-Between-40-60k").click(function() {
        $( "#explore-Family-Income-Between-40-60k" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Family-Income-Between-60-80k").click(function() {
        $( "#explore-Family-Income-Between-60-80k" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Family-Income-Between-80-100k").click(function() {
        $( "#explore-Family-Income-Between-80-100k" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Family-Income-Less-than-20k").click(function() {
        $( "#explore-Family-Income-Less-than-20k" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Family-Income-More-than-100k").click(function() {
        $( "#explore-Family-Income-More-than-100k" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Family-Income-Between-20-40k' title='Dictionary (3 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Math"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>513</code>
             
                
             </td> 
             <td>The average Math score of students in this state during this year who reported that their family income was in this bracket.</td> </tr>
        
        <tr> <td><code>"Test-takers"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>324</code>
             
                
             </td> 
             <td>The number of test-takers in this state during this year who reported that their family income was in this bracket.</td> </tr>
        
        <tr> <td><code>"Verbal"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>527</code>
             
                
             </td> 
             <td>The average Verbal (Reading, not Writing) score of students in this state during this year who reported that their family income was in this bracket.</td> </tr>
        
    </table>
</div>

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Family-Income-Between-20-40k" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Family-Income-Between-20-40k-Math").click(function() {
        $( "#explore-Family-Income-Between-20-40k-Math" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Family-Income-Between-20-40k-Test-takers").click(function() {
        $( "#explore-Family-Income-Between-20-40k-Test-takers" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Family-Income-Between-20-40k-Verbal").click(function() {
        $( "#explore-Family-Income-Between-20-40k-Verbal" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Family-Income-Between-40-60k' title='Dictionary (3 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Math"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>539</code>
             
                
             </td> 
             <td>The average Math score of students in this state during this year who reported that their family income was in this bracket.</td> </tr>
        
        <tr> <td><code>"Test-takers"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>442</code>
             
                
             </td> 
             <td>The number of test-takers in this state during this year who reported that their family income was in this bracket.</td> </tr>
        
        <tr> <td><code>"Verbal"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>551</code>
             
                
             </td> 
             <td>The average Verbal (Reading, not Writing) score of students in this state during this year who reported that their family income was in this bracket.</td> </tr>
        
    </table>
</div>

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Family-Income-Between-40-60k" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Family-Income-Between-40-60k-Math").click(function() {
        $( "#explore-Family-Income-Between-40-60k-Math" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Family-Income-Between-40-60k-Test-takers").click(function() {
        $( "#explore-Family-Income-Between-40-60k-Test-takers" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Family-Income-Between-40-60k-Verbal").click(function() {
        $( "#explore-Family-Income-Between-40-60k-Verbal" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Family-Income-Between-60-80k' title='Dictionary (3 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Math"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>550</code>
             
                
             </td> 
             <td>The average Math score of students in this state during this year who reported that their family income was in this bracket.</td> </tr>
        
        <tr> <td><code>"Test-takers"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>473</code>
             
                
             </td> 
             <td>The number of test-takers in this state during this year who reported that their family income was in this bracket.</td> </tr>
        
        <tr> <td><code>"Verbal"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>564</code>
             
                
             </td> 
             <td>The average Verbal (Reading, not Writing) score of students in this state during this year who reported that their family income was in this bracket.</td> </tr>
        
    </table>
</div>

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Family-Income-Between-60-80k" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Family-Income-Between-60-80k-Math").click(function() {
        $( "#explore-Family-Income-Between-60-80k-Math" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Family-Income-Between-60-80k-Test-takers").click(function() {
        $( "#explore-Family-Income-Between-60-80k-Test-takers" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Family-Income-Between-60-80k-Verbal").click(function() {
        $( "#explore-Family-Income-Between-60-80k-Verbal" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Family-Income-Between-80-100k' title='Dictionary (3 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Math"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>566</code>
             
                
             </td> 
             <td>The average Math score of students in this state during this year who reported that their family income was in this bracket.</td> </tr>
        
        <tr> <td><code>"Test-takers"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>475</code>
             
                
             </td> 
             <td>The number of test-takers in this state during this year who reported that their family income was in this bracket.</td> </tr>
        
        <tr> <td><code>"Verbal"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>577</code>
             
                
             </td> 
             <td>The average Verbal (Reading, not Writing) score of students in this state during this year who reported that their family income was in this bracket.</td> </tr>
        
    </table>
</div>

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Family-Income-Between-80-100k" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Family-Income-Between-80-100k-Math").click(function() {
        $( "#explore-Family-Income-Between-80-100k-Math" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Family-Income-Between-80-100k-Test-takers").click(function() {
        $( "#explore-Family-Income-Between-80-100k-Test-takers" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Family-Income-Between-80-100k-Verbal").click(function() {
        $( "#explore-Family-Income-Between-80-100k-Verbal" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Family-Income-Less-than-20k' title='Dictionary (3 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Math"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>462</code>
             
                
             </td> 
             <td>The average Math score of students in this state during this year who reported that their family income was in this bracket.</td> </tr>
        
        <tr> <td><code>"Test-takers"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>175</code>
             
                
             </td> 
             <td>The number of test-takers in this state during this year who reported that their family income was in this bracket.</td> </tr>
        
        <tr> <td><code>"Verbal"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>474</code>
             
                
             </td> 
             <td>The average Verbal (Reading, not Writing) score of students in this state during this year who reported that their family income was in this bracket.</td> </tr>
        
    </table>
</div>

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Family-Income-Less-than-20k" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Family-Income-Less-than-20k-Math").click(function() {
        $( "#explore-Family-Income-Less-than-20k-Math" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Family-Income-Less-than-20k-Test-takers").click(function() {
        $( "#explore-Family-Income-Less-than-20k-Test-takers" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Family-Income-Less-than-20k-Verbal").click(function() {
        $( "#explore-Family-Income-Less-than-20k-Verbal" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Family-Income-More-than-100k' title='Dictionary (3 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Math"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>588</code>
             
                
             </td> 
             <td>The average Math score of students in this state during this year who reported that their family income was in this bracket.</td> </tr>
        
        <tr> <td><code>"Test-takers"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>980</code>
             
                
             </td> 
             <td>The number of test-takers in this state during this year who reported that their family income was in this bracket.</td> </tr>
        
        <tr> <td><code>"Verbal"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>590</code>
             
                
             </td> 
             <td>The average Verbal (Reading, not Writing) score of students in this state during this year who reported that their family income was in this bracket.</td> </tr>
        
    </table>
</div>

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Family-Income-More-than-100k" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Family-Income-More-than-100k-Math").click(function() {
        $( "#explore-Family-Income-More-than-100k-Math" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Family-Income-More-than-100k-Test-takers").click(function() {
        $( "#explore-Family-Income-More-than-100k-Test-takers" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Family-Income-More-than-100k-Verbal").click(function() {
        $( "#explore-Family-Income-More-than-100k-Verbal" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-GPA' title='Dictionary (7 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"A minus"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-GPA-A-minus'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"A plus"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-GPA-A-plus'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"A"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-GPA-A'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"B"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-GPA-B'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"C"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-GPA-C'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"D or lower"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-GPA-D-or-lower'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"No response"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-GPA-No-response'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
    </table>
</div>

    

    

    

    

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-GPA" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-GPA-A-minus").click(function() {
        $( "#explore-GPA-A-minus" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-GPA-A-plus").click(function() {
        $( "#explore-GPA-A-plus" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-GPA-A").click(function() {
        $( "#explore-GPA-A" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-GPA-B").click(function() {
        $( "#explore-GPA-B" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-GPA-C").click(function() {
        $( "#explore-GPA-C" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-GPA-D-or-lower").click(function() {
        $( "#explore-GPA-D-or-lower" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-GPA-No-response").click(function() {
        $( "#explore-GPA-No-response" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-GPA-A-minus' title='Dictionary (3 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Math"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>569</code>
             
                
             </td> 
             <td>The average Math score of students in this state during this year who reported this for their high school grade point average.</td> </tr>
        
        <tr> <td><code>"Test-takers"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>724</code>
             
                
             </td> 
             <td>The number of test-takers in this state during this year who reported this for their high school grade point average.</td> </tr>
        
        <tr> <td><code>"Verbal"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>575</code>
             
                
             </td> 
             <td>The average Verbal (Reading, not Writing) score of students in this state during this year who reported this for their high school grade point average.</td> </tr>
        
    </table>
</div>

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-GPA-A-minus" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-GPA-A-minus-Math").click(function() {
        $( "#explore-GPA-A-minus-Math" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-GPA-A-minus-Test-takers").click(function() {
        $( "#explore-GPA-A-minus-Test-takers" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-GPA-A-minus-Verbal").click(function() {
        $( "#explore-GPA-A-minus-Verbal" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-GPA-A-plus' title='Dictionary (3 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Math"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>622</code>
             
                
             </td> 
             <td>The average Math score of students in this state during this year who reported this for their high school grade point average.</td> </tr>
        
        <tr> <td><code>"Test-takers"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>563</code>
             
                
             </td> 
             <td>The number of test-takers in this state during this year who reported this for their high school grade point average.</td> </tr>
        
        <tr> <td><code>"Verbal"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>623</code>
             
                
             </td> 
             <td>The average Verbal (Reading, not Writing) score of students in this state during this year who reported this for their high school grade point average.</td> </tr>
        
    </table>
</div>

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-GPA-A-plus" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-GPA-A-plus-Math").click(function() {
        $( "#explore-GPA-A-plus-Math" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-GPA-A-plus-Test-takers").click(function() {
        $( "#explore-GPA-A-plus-Test-takers" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-GPA-A-plus-Verbal").click(function() {
        $( "#explore-GPA-A-plus-Verbal" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-GPA-A' title='Dictionary (3 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Math"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>600</code>
             
                
             </td> 
             <td>The average Math score of students in this state during this year who reported this for their high school grade point average.</td> </tr>
        
        <tr> <td><code>"Test-takers"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>1032</code>
             
                
             </td> 
             <td>The number of test-takers in this state during this year who reported this for their high school grade point average.</td> </tr>
        
        <tr> <td><code>"Verbal"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>608</code>
             
                
             </td> 
             <td>The average Verbal (Reading, not Writing) score of students in this state during this year who reported this for their high school grade point average.</td> </tr>
        
    </table>
</div>

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-GPA-A" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-GPA-A-Math").click(function() {
        $( "#explore-GPA-A-Math" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-GPA-A-Test-takers").click(function() {
        $( "#explore-GPA-A-Test-takers" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-GPA-A-Verbal").click(function() {
        $( "#explore-GPA-A-Verbal" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-GPA-B' title='Dictionary (3 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Math"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>514</code>
             
                
             </td> 
             <td>The average Math score of students in this state during this year who reported this for their high school grade point average.</td> </tr>
        
        <tr> <td><code>"Test-takers"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>1253</code>
             
                
             </td> 
             <td>The number of test-takers in this state during this year who reported this for their high school grade point average.</td> </tr>
        
        <tr> <td><code>"Verbal"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>525</code>
             
                
             </td> 
             <td>The average Verbal (Reading, not Writing) score of students in this state during this year who reported this for their high school grade point average.</td> </tr>
        
    </table>
</div>

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-GPA-B" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-GPA-B-Math").click(function() {
        $( "#explore-GPA-B-Math" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-GPA-B-Test-takers").click(function() {
        $( "#explore-GPA-B-Test-takers" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-GPA-B-Verbal").click(function() {
        $( "#explore-GPA-B-Verbal" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-GPA-C' title='Dictionary (3 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Math"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>436</code>
             
                
             </td> 
             <td>The average Math score of students in this state during this year who reported this for their high school grade point average.</td> </tr>
        
        <tr> <td><code>"Test-takers"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>188</code>
             
                
             </td> 
             <td>The number of test-takers in this state during this year who reported this for their high school grade point average.</td> </tr>
        
        <tr> <td><code>"Verbal"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>451</code>
             
                
             </td> 
             <td>The average Verbal (Reading, not Writing) score of students in this state during this year who reported this for their high school grade point average.</td> </tr>
        
    </table>
</div>

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-GPA-C" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-GPA-C-Math").click(function() {
        $( "#explore-GPA-C-Math" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-GPA-C-Test-takers").click(function() {
        $( "#explore-GPA-C-Test-takers" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-GPA-C-Verbal").click(function() {
        $( "#explore-GPA-C-Verbal" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-GPA-D-or-lower' title='Dictionary (3 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Math"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>0</code>
             
                
             </td> 
             <td>The average Math score of students in this state during this year who reported this for their high school grade point average.</td> </tr>
        
        <tr> <td><code>"Test-takers"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>0</code>
             
                
             </td> 
             <td>The number of test-takers in this state during this year who reported this for their high school grade point average.</td> </tr>
        
        <tr> <td><code>"Verbal"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>0</code>
             
                
             </td> 
             <td>The average Verbal (Reading, not Writing) score of students in this state during this year who reported this for their high school grade point average.</td> </tr>
        
    </table>
</div>

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-GPA-D-or-lower" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-GPA-D-or-lower-Math").click(function() {
        $( "#explore-GPA-D-or-lower-Math" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-GPA-D-or-lower-Test-takers").click(function() {
        $( "#explore-GPA-D-or-lower-Test-takers" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-GPA-D-or-lower-Verbal").click(function() {
        $( "#explore-GPA-D-or-lower-Verbal" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-GPA-No-response' title='Dictionary (3 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Math"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>0</code>
             
                
             </td> 
             <td>The average Math score of students in this state during this year who reported this for their high school grade point average.</td> </tr>
        
        <tr> <td><code>"Test-takers"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>225</code>
             
                
             </td> 
             <td>The number of test-takers in this state during this year who reported this for their high school grade point average.</td> </tr>
        
        <tr> <td><code>"Verbal"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>0</code>
             
                
             </td> 
             <td>The average Verbal (Reading, not Writing) score of students in this state during this year who reported this for their high school grade point average.</td> </tr>
        
    </table>
</div>

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-GPA-No-response" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-GPA-No-response-Math").click(function() {
        $( "#explore-GPA-No-response-Math" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-GPA-No-response-Test-takers").click(function() {
        $( "#explore-GPA-No-response-Test-takers" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-GPA-No-response-Verbal").click(function() {
        $( "#explore-GPA-No-response-Verbal" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Gender' title='Dictionary (2 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Female"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Gender-Female'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Male"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Gender-Male'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
    </table>
</div>

    

    

<script>
$(document).ready(function() {
    $( "#explore-Gender" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Gender-Female").click(function() {
        $( "#explore-Gender-Female" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Gender-Male").click(function() {
        $( "#explore-Gender-Male" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Gender-Female' title='Dictionary (3 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Math"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>538</code>
             
                
             </td> 
             <td>The average Math score of students in this state during this year who identified as Female.</td> </tr>
        
        <tr> <td><code>"Test-takers"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>2072</code>
             
                
             </td> 
             <td>The number of test-takers in this state during this year who identified as Female.</td> </tr>
        
        <tr> <td><code>"Verbal"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>561</code>
             
                
             </td> 
             <td>The average Verbal (Reading, not Writing) score of students in this state during this year who identified as Female.</td> </tr>
        
    </table>
</div>

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Gender-Female" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Gender-Female-Math").click(function() {
        $( "#explore-Gender-Female-Math" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Gender-Female-Test-takers").click(function() {
        $( "#explore-Gender-Female-Test-takers" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Gender-Female-Verbal").click(function() {
        $( "#explore-Gender-Female-Verbal" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Gender-Male' title='Dictionary (3 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Math"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>582</code>
             
                
             </td> 
             <td>The average Math score of students in this state during this year who identified as Male.</td> </tr>
        
        <tr> <td><code>"Test-takers"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>1913</code>
             
                
             </td> 
             <td>The number of test-takers in this state during this year who identified as Male.</td> </tr>
        
        <tr> <td><code>"Verbal"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>574</code>
             
                
             </td> 
             <td>The average Verbal (Reading, not Writing) score of students in this state during this year who identified as Male.</td> </tr>
        
    </table>
</div>

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Gender-Male" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Gender-Male-Math").click(function() {
        $( "#explore-Gender-Male-Math" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Gender-Male-Test-takers").click(function() {
        $( "#explore-Gender-Male-Test-takers" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Gender-Male-Verbal").click(function() {
        $( "#explore-Gender-Male-Verbal" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Score-Ranges' title='Dictionary (6 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Between 200 to 300"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Score-Ranges-Between-200-to-300'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Between 300 to 400"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Score-Ranges-Between-300-to-400'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Between 400 to 500"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Score-Ranges-Between-400-to-500'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Between 500 to 600"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Score-Ranges-Between-500-to-600'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Between 600 to 700"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Score-Ranges-Between-600-to-700'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Between 700 to 800"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Score-Ranges-Between-700-to-800'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
    </table>
</div>

    

    

    

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Score-Ranges" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Score-Ranges-Between-200-to-300").click(function() {
        $( "#explore-Score-Ranges-Between-200-to-300" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Score-Ranges-Between-300-to-400").click(function() {
        $( "#explore-Score-Ranges-Between-300-to-400" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Score-Ranges-Between-400-to-500").click(function() {
        $( "#explore-Score-Ranges-Between-400-to-500" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Score-Ranges-Between-500-to-600").click(function() {
        $( "#explore-Score-Ranges-Between-500-to-600" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Score-Ranges-Between-600-to-700").click(function() {
        $( "#explore-Score-Ranges-Between-600-to-700" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Score-Ranges-Between-700-to-800").click(function() {
        $( "#explore-Score-Ranges-Between-700-to-800" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Score-Ranges-Between-200-to-300' title='Dictionary (2 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Math"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Score-Ranges-Between-200-to-300-Math'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Verbal"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Score-Ranges-Between-200-to-300-Verbal'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
    </table>
</div>

    

    

<script>
$(document).ready(function() {
    $( "#explore-Score-Ranges-Between-200-to-300" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Score-Ranges-Between-200-to-300-Math").click(function() {
        $( "#explore-Score-Ranges-Between-200-to-300-Math" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Score-Ranges-Between-200-to-300-Verbal").click(function() {
        $( "#explore-Score-Ranges-Between-200-to-300-Verbal" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Score-Ranges-Between-200-to-300-Math' title='Dictionary (3 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Females"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>22</code>
             
                
             </td> 
             <td>The number of students in this score range for Math who identified as Female in this state during this year.</td> </tr>
        
        <tr> <td><code>"Males"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>10</code>
             
                
             </td> 
             <td>The number of students in this score range for Math who identified as Male in this state during this year.</td> </tr>
        
        <tr> <td><code>"Total"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>32</code>
             
                
             </td> 
             <td>The number of students in this score range for Math in this state during this year.</td> </tr>
        
    </table>
</div>

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Score-Ranges-Between-200-to-300-Math" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Score-Ranges-Between-200-to-300-Math-Females").click(function() {
        $( "#explore-Score-Ranges-Between-200-to-300-Math-Females" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Score-Ranges-Between-200-to-300-Math-Males").click(function() {
        $( "#explore-Score-Ranges-Between-200-to-300-Math-Males" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Score-Ranges-Between-200-to-300-Math-Total").click(function() {
        $( "#explore-Score-Ranges-Between-200-to-300-Math-Total" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Score-Ranges-Between-200-to-300-Verbal' title='Dictionary (3 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Females"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>14</code>
             
                
             </td> 
             <td>The number of students in this score range for Verbal (Reading, not Writing) who identified as Female in this state during this year.</td> </tr>
        
        <tr> <td><code>"Males"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>17</code>
             
                
             </td> 
             <td>The number of students in this score range for Verbal (Reading, not Writing) who identified as Male in this state during this year.</td> </tr>
        
        <tr> <td><code>"Total"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>31</code>
             
                
             </td> 
             <td>The number of students in this score range for Verbal (Reading, not Writing) in this state during this year.</td> </tr>
        
    </table>
</div>

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Score-Ranges-Between-200-to-300-Verbal" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Score-Ranges-Between-200-to-300-Verbal-Females").click(function() {
        $( "#explore-Score-Ranges-Between-200-to-300-Verbal-Females" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Score-Ranges-Between-200-to-300-Verbal-Males").click(function() {
        $( "#explore-Score-Ranges-Between-200-to-300-Verbal-Males" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Score-Ranges-Between-200-to-300-Verbal-Total").click(function() {
        $( "#explore-Score-Ranges-Between-200-to-300-Verbal-Total" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Score-Ranges-Between-300-to-400' title='Dictionary (2 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Math"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Score-Ranges-Between-300-to-400-Math'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Verbal"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Score-Ranges-Between-300-to-400-Verbal'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
    </table>
</div>

    

    

<script>
$(document).ready(function() {
    $( "#explore-Score-Ranges-Between-300-to-400" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Score-Ranges-Between-300-to-400-Math").click(function() {
        $( "#explore-Score-Ranges-Between-300-to-400-Math" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Score-Ranges-Between-300-to-400-Verbal").click(function() {
        $( "#explore-Score-Ranges-Between-300-to-400-Verbal" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Score-Ranges-Between-300-to-400-Math' title='Dictionary (3 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Females"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>173</code>
             
                
             </td> 
             <td>The number of students in this score range for Math who identified as Female in this state during this year.</td> </tr>
        
        <tr> <td><code>"Males"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>93</code>
             
                
             </td> 
             <td>The number of students in this score range for Math who identified as Male in this state during this year.</td> </tr>
        
        <tr> <td><code>"Total"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>266</code>
             
                
             </td> 
             <td>The number of students in this score range for Math in this state during this year.</td> </tr>
        
    </table>
</div>

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Score-Ranges-Between-300-to-400-Math" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Score-Ranges-Between-300-to-400-Math-Females").click(function() {
        $( "#explore-Score-Ranges-Between-300-to-400-Math-Females" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Score-Ranges-Between-300-to-400-Math-Males").click(function() {
        $( "#explore-Score-Ranges-Between-300-to-400-Math-Males" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Score-Ranges-Between-300-to-400-Math-Total").click(function() {
        $( "#explore-Score-Ranges-Between-300-to-400-Math-Total" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Score-Ranges-Between-300-to-400-Verbal' title='Dictionary (3 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Females"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>123</code>
             
                
             </td> 
             <td>The number of students in this score range for Verbal (Reading, not Writing) who identified as Female in this state during this year.</td> </tr>
        
        <tr> <td><code>"Males"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>84</code>
             
                
             </td> 
             <td>The number of students in this score range for Verbal (Reading, not Writing) who identified as Male in this state during this year.</td> </tr>
        
        <tr> <td><code>"Total"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>207</code>
             
                
             </td> 
             <td>The number of students in this score range for Verbal (Reading, not Writing) in this state during this year.</td> </tr>
        
    </table>
</div>

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Score-Ranges-Between-300-to-400-Verbal" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Score-Ranges-Between-300-to-400-Verbal-Females").click(function() {
        $( "#explore-Score-Ranges-Between-300-to-400-Verbal-Females" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Score-Ranges-Between-300-to-400-Verbal-Males").click(function() {
        $( "#explore-Score-Ranges-Between-300-to-400-Verbal-Males" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Score-Ranges-Between-300-to-400-Verbal-Total").click(function() {
        $( "#explore-Score-Ranges-Between-300-to-400-Verbal-Total" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Score-Ranges-Between-400-to-500' title='Dictionary (2 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Math"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Score-Ranges-Between-400-to-500-Math'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Verbal"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Score-Ranges-Between-400-to-500-Verbal'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
    </table>
</div>

    

    

<script>
$(document).ready(function() {
    $( "#explore-Score-Ranges-Between-400-to-500" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Score-Ranges-Between-400-to-500-Math").click(function() {
        $( "#explore-Score-Ranges-Between-400-to-500-Math" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Score-Ranges-Between-400-to-500-Verbal").click(function() {
        $( "#explore-Score-Ranges-Between-400-to-500-Verbal" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Score-Ranges-Between-400-to-500-Math' title='Dictionary (3 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Females"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>514</code>
             
                
             </td> 
             <td>The number of students in this score range for Math who identified as Female in this state during this year.</td> </tr>
        
        <tr> <td><code>"Males"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>293</code>
             
                
             </td> 
             <td>The number of students in this score range for Math who identified as Male in this state during this year.</td> </tr>
        
        <tr> <td><code>"Total"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>807</code>
             
                
             </td> 
             <td>The number of students in this score range for Math in this state during this year.</td> </tr>
        
    </table>
</div>

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Score-Ranges-Between-400-to-500-Math" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Score-Ranges-Between-400-to-500-Math-Females").click(function() {
        $( "#explore-Score-Ranges-Between-400-to-500-Math-Females" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Score-Ranges-Between-400-to-500-Math-Males").click(function() {
        $( "#explore-Score-Ranges-Between-400-to-500-Math-Males" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Score-Ranges-Between-400-to-500-Math-Total").click(function() {
        $( "#explore-Score-Ranges-Between-400-to-500-Math-Total" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Score-Ranges-Between-400-to-500-Verbal' title='Dictionary (3 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Females"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>430</code>
             
                
             </td> 
             <td>The number of students in this score range for Verbal (Reading, not Writing) who identified as Female in this state during this year.</td> </tr>
        
        <tr> <td><code>"Males"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>332</code>
             
                
             </td> 
             <td>The number of students in this score range for Verbal (Reading, not Writing) who identified as Male in this state during this year.</td> </tr>
        
        <tr> <td><code>"Total"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>762</code>
             
                
             </td> 
             <td>The number of students in this score range for Verbal (Reading, not Writing) in this state during this year.</td> </tr>
        
    </table>
</div>

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Score-Ranges-Between-400-to-500-Verbal" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Score-Ranges-Between-400-to-500-Verbal-Females").click(function() {
        $( "#explore-Score-Ranges-Between-400-to-500-Verbal-Females" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Score-Ranges-Between-400-to-500-Verbal-Males").click(function() {
        $( "#explore-Score-Ranges-Between-400-to-500-Verbal-Males" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Score-Ranges-Between-400-to-500-Verbal-Total").click(function() {
        $( "#explore-Score-Ranges-Between-400-to-500-Verbal-Total" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Score-Ranges-Between-500-to-600' title='Dictionary (2 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Math"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Score-Ranges-Between-500-to-600-Math'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Verbal"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Score-Ranges-Between-500-to-600-Verbal'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
    </table>
</div>

    

    

<script>
$(document).ready(function() {
    $( "#explore-Score-Ranges-Between-500-to-600" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Score-Ranges-Between-500-to-600-Math").click(function() {
        $( "#explore-Score-Ranges-Between-500-to-600-Math" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Score-Ranges-Between-500-to-600-Verbal").click(function() {
        $( "#explore-Score-Ranges-Between-500-to-600-Verbal" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Score-Ranges-Between-500-to-600-Math' title='Dictionary (3 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Females"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>722</code>
             
                
             </td> 
             <td>The number of students in this score range for Math who identified as Female in this state during this year.</td> </tr>
        
        <tr> <td><code>"Males"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>614</code>
             
                
             </td> 
             <td>The number of students in this score range for Math who identified as Male in this state during this year.</td> </tr>
        
        <tr> <td><code>"Total"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>1336</code>
             
                
             </td> 
             <td>The number of students in this score range for Math in this state during this year.</td> </tr>
        
    </table>
</div>

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Score-Ranges-Between-500-to-600-Math" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Score-Ranges-Between-500-to-600-Math-Females").click(function() {
        $( "#explore-Score-Ranges-Between-500-to-600-Math-Females" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Score-Ranges-Between-500-to-600-Math-Males").click(function() {
        $( "#explore-Score-Ranges-Between-500-to-600-Math-Males" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Score-Ranges-Between-500-to-600-Math-Total").click(function() {
        $( "#explore-Score-Ranges-Between-500-to-600-Math-Total" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Score-Ranges-Between-500-to-600-Verbal' title='Dictionary (3 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Females"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>690</code>
             
                
             </td> 
             <td>The number of students in this score range for Verbal (Reading, not Writing) who identified as Female in this state during this year.</td> </tr>
        
        <tr> <td><code>"Males"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>617</code>
             
                
             </td> 
             <td>The number of students in this score range for Verbal (Reading, not Writing) who identified as Male in this state during this year.</td> </tr>
        
        <tr> <td><code>"Total"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>1307</code>
             
                
             </td> 
             <td>The number of students in this score range for Verbal (Reading, not Writing) in this state during this year.</td> </tr>
        
    </table>
</div>

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Score-Ranges-Between-500-to-600-Verbal" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Score-Ranges-Between-500-to-600-Verbal-Females").click(function() {
        $( "#explore-Score-Ranges-Between-500-to-600-Verbal-Females" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Score-Ranges-Between-500-to-600-Verbal-Males").click(function() {
        $( "#explore-Score-Ranges-Between-500-to-600-Verbal-Males" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Score-Ranges-Between-500-to-600-Verbal-Total").click(function() {
        $( "#explore-Score-Ranges-Between-500-to-600-Verbal-Total" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Score-Ranges-Between-600-to-700' title='Dictionary (2 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Math"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Score-Ranges-Between-600-to-700-Math'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Verbal"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Score-Ranges-Between-600-to-700-Verbal'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
    </table>
</div>

    

    

<script>
$(document).ready(function() {
    $( "#explore-Score-Ranges-Between-600-to-700" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Score-Ranges-Between-600-to-700-Math").click(function() {
        $( "#explore-Score-Ranges-Between-600-to-700-Math" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Score-Ranges-Between-600-to-700-Verbal").click(function() {
        $( "#explore-Score-Ranges-Between-600-to-700-Verbal" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Score-Ranges-Between-600-to-700-Math' title='Dictionary (3 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Females"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>485</code>
             
                
             </td> 
             <td>The number of students in this score range for Math who identified as Female in this state during this year.</td> </tr>
        
        <tr> <td><code>"Males"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>611</code>
             
                
             </td> 
             <td>The number of students in this score range for Math who identified as Male in this state during this year.</td> </tr>
        
        <tr> <td><code>"Total"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>1096</code>
             
                
             </td> 
             <td>The number of students in this score range for Math in this state during this year.</td> </tr>
        
    </table>
</div>

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Score-Ranges-Between-600-to-700-Math" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Score-Ranges-Between-600-to-700-Math-Females").click(function() {
        $( "#explore-Score-Ranges-Between-600-to-700-Math-Females" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Score-Ranges-Between-600-to-700-Math-Males").click(function() {
        $( "#explore-Score-Ranges-Between-600-to-700-Math-Males" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Score-Ranges-Between-600-to-700-Math-Total").click(function() {
        $( "#explore-Score-Ranges-Between-600-to-700-Math-Total" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Score-Ranges-Between-600-to-700-Verbal' title='Dictionary (3 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Females"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>596</code>
             
                
             </td> 
             <td>The number of students in this score range for Verbal (Reading, not Writing) who identified as Female in this state during this year.</td> </tr>
        
        <tr> <td><code>"Males"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>613</code>
             
                
             </td> 
             <td>The number of students in this score range for Verbal (Reading, not Writing) who identified as Male in this state during this year.</td> </tr>
        
        <tr> <td><code>"Total"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>1209</code>
             
                
             </td> 
             <td>The number of students in this score range for Verbal (Reading, not Writing) in this state during this year.</td> </tr>
        
    </table>
</div>

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Score-Ranges-Between-600-to-700-Verbal" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Score-Ranges-Between-600-to-700-Verbal-Females").click(function() {
        $( "#explore-Score-Ranges-Between-600-to-700-Verbal-Females" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Score-Ranges-Between-600-to-700-Verbal-Males").click(function() {
        $( "#explore-Score-Ranges-Between-600-to-700-Verbal-Males" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Score-Ranges-Between-600-to-700-Verbal-Total").click(function() {
        $( "#explore-Score-Ranges-Between-600-to-700-Verbal-Total" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Score-Ranges-Between-700-to-800' title='Dictionary (2 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Math"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Score-Ranges-Between-700-to-800-Math'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Verbal"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Score-Ranges-Between-700-to-800-Verbal'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
    </table>
</div>

    

    

<script>
$(document).ready(function() {
    $( "#explore-Score-Ranges-Between-700-to-800" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Score-Ranges-Between-700-to-800-Math").click(function() {
        $( "#explore-Score-Ranges-Between-700-to-800-Math" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Score-Ranges-Between-700-to-800-Verbal").click(function() {
        $( "#explore-Score-Ranges-Between-700-to-800-Verbal" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Score-Ranges-Between-700-to-800-Math' title='Dictionary (3 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Females"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>156</code>
             
                
             </td> 
             <td>The number of students in this score range for Math who identified as Female in this state during this year.</td> </tr>
        
        <tr> <td><code>"Males"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>292</code>
             
                
             </td> 
             <td>The number of students in this score range for Math who identified as Male in this state during this year.</td> </tr>
        
        <tr> <td><code>"Total"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>448</code>
             
                
             </td> 
             <td>The number of students in this score range for Math in this state during this year.</td> </tr>
        
    </table>
</div>

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Score-Ranges-Between-700-to-800-Math" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Score-Ranges-Between-700-to-800-Math-Females").click(function() {
        $( "#explore-Score-Ranges-Between-700-to-800-Math-Females" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Score-Ranges-Between-700-to-800-Math-Males").click(function() {
        $( "#explore-Score-Ranges-Between-700-to-800-Math-Males" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Score-Ranges-Between-700-to-800-Math-Total").click(function() {
        $( "#explore-Score-Ranges-Between-700-to-800-Math-Total" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Score-Ranges-Between-700-to-800-Verbal' title='Dictionary (3 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Females"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>219</code>
             
                
             </td> 
             <td>The number of students in this score range for Verbal (Reading, not Writing) who identified as Female in this state during this year.</td> </tr>
        
        <tr> <td><code>"Males"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>250</code>
             
                
             </td> 
             <td>The number of students in this score range for Verbal (Reading, not Writing) who identified as Male in this state during this year.</td> </tr>
        
        <tr> <td><code>"Total"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>469</code>
             
                
             </td> 
             <td>The number of students in this score range for Verbal (Reading, not Writing) in this state during this year.</td> </tr>
        
    </table>
</div>

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Score-Ranges-Between-700-to-800-Verbal" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Score-Ranges-Between-700-to-800-Verbal-Females").click(function() {
        $( "#explore-Score-Ranges-Between-700-to-800-Verbal-Females" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Score-Ranges-Between-700-to-800-Verbal-Males").click(function() {
        $( "#explore-Score-Ranges-Between-700-to-800-Verbal-Males" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Score-Ranges-Between-700-to-800-Verbal-Total").click(function() {
        $( "#explore-Score-Ranges-Between-700-to-800-Verbal-Total" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>


# Downloads

Download all of the following files.

1. <a href='../../datasets/python/school_scores/school_scores.py' download>school_scores.py <span class="fas fa-download"></span></a>
2. <a href='../../datasets/python/school_scores/school_scores.data' download>school_scores.data <span class="fas fa-download"></span></a>

# Usage

```python
import school_scores
record = school_scores.get_record()
```

# Documentation

<dl>
    <dt><span>get_record()</span></dt>
    <dd>Returns a list of dictionaries representing record.</dd>
</dl>