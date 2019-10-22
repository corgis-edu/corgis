---
permalink: /python/video_games/
style: dataset
---



<img class="img-thumbnail float-right"
     src="/images/datasets/video-games-icon.png"
     alt="video games icon"
     role="presentation">

# Video Games Python Library

<p class='lead'>From the CORGIS Dataset Project</p>

<span class='text-muted'>By Austin Cory Bart <acbart@vt.edu></span><br>
<span class='text-muted'>Version 2.0.0, created 4/13/2017</span><br>
<span class='text-muted'>Tags: video games, games, publishers, console, gaming</span>

# Overview

<i>This dataset requires special permission to use.</i><br><br>
Originally collected by Dr. Joe Cox, this dataset has information about the sales and playtime of over a thousand video games released between 2004 and 2010. The playtime information was collected from crowd-sourced data on "How Long to Beat".<br><br>
Some more information can be found <a href="https://researchportal.port.ac.uk/portal/en/publications/what-makes-a-blockbuster-video-game(a6d848fe-38ae-4584-8c95-a0f735ec9b4c).html">here</a>.


<Cox, Joe. "What makes a blockbuster video game? An empirical analysis of US sales data." Managerial and Decision Economics 35.3 (2014): 189-198.>




# Explore Structure

Each row represents *$MISSING_FIELD*.



<button type='button'
        class='btn btn-info'
        id='btn-explore'>Explore video games data</button>

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


<div id='explore-' title='Dictionary (6 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Title"</code></td>
             <td><span data-toggle="tooltip"
                       title='String (text)'>
                       str</span></td> 
             <td>
             
                <code>"Super Mario 64 DS"</code>
             
                
             </td> 
             <td>The full title of this game.</td> </tr>
        
        <tr> <td><code>"Features"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Features'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Metadata"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Metadata'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Metrics"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Metrics'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Release"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Release'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Length"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Length'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
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
    
    $("#btn-explore-Title").click(function() {
        $( "#explore-Title" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Features").click(function() {
        $( "#explore-Features" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Metadata").click(function() {
        $( "#explore-Metadata" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Metrics").click(function() {
        $( "#explore-Metrics" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Release").click(function() {
        $( "#explore-Release" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Length").click(function() {
        $( "#explore-Length" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Features' title='Dictionary (4 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Handheld?"</code></td>
             <td><span data-toggle="tooltip"
                       title='Boolean (True or False)'>
                       bool</span></td> 
             <td>
             
                <code>True</code>
             
                
             </td> 
             <td>Whether this is a hand-held game.</td> </tr>
        
        <tr> <td><code>"Max Players"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>1</code>
             
                
             </td> 
             <td>The maximum number of players that can play this game.</td> </tr>
        
        <tr> <td><code>"Multiplatform?"</code></td>
             <td><span data-toggle="tooltip"
                       title='Boolean (True or False)'>
                       bool</span></td> 
             <td>
             
                <code>True</code>
             
                
             </td> 
             <td>Whether this game is available on multiple platforms.</td> </tr>
        
        <tr> <td><code>"Online?"</code></td>
             <td><span data-toggle="tooltip"
                       title='Boolean (True or False)'>
                       bool</span></td> 
             <td>
             
                <code>True</code>
             
                
             </td> 
             <td>Whether this game supports online play.</td> </tr>
        
    </table>
</div>

    

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Features" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Features-Handheld?").click(function() {
        $( "#explore-Features-Handheld?" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Features-Max-Players").click(function() {
        $( "#explore-Features-Max-Players" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Features-Multiplatform?").click(function() {
        $( "#explore-Features-Multiplatform?" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Features-Online?").click(function() {
        $( "#explore-Features-Online?" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Metadata' title='Dictionary (4 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Genres"</code></td>
             <td><span data-toggle="tooltip"
                       title='String (text)'>
                       str</span></td> 
             <td>
             
                <code>"Action"</code>
             
                
             </td> 
             <td>The list of genres that this game belongs to.</td> </tr>
        
        <tr> <td><code>"Licensed?"</code></td>
             <td><span data-toggle="tooltip"
                       title='Boolean (True or False)'>
                       bool</span></td> 
             <td>
             
                <code>True</code>
             
                
             </td> 
             <td>Whether this game was based off a previously licensed entity.</td> </tr>
        
        <tr> <td><code>"Publishers"</code></td>
             <td><span data-toggle="tooltip"
                       title='String (text)'>
                       str</span></td> 
             <td>
             
                <code>"Nintendo"</code>
             
                
             </td> 
             <td>The list of publishers who created this game</td> </tr>
        
        <tr> <td><code>"Sequel?"</code></td>
             <td><span data-toggle="tooltip"
                       title='Boolean (True or False)'>
                       bool</span></td> 
             <td>
             
                <code>True</code>
             
                
             </td> 
             <td>Whether this game is a sequel to another game.</td> </tr>
        
    </table>
</div>

    

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Metadata" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Metadata-Genres").click(function() {
        $( "#explore-Metadata-Genres" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Metadata-Licensed?").click(function() {
        $( "#explore-Metadata-Licensed?" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Metadata-Publishers").click(function() {
        $( "#explore-Metadata-Publishers" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Metadata-Sequel?").click(function() {
        $( "#explore-Metadata-Sequel?" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Metrics' title='Dictionary (3 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Review Score"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>85</code>
             
                
             </td> 
             <td>a typical review score for this game, out of 100.</td> </tr>
        
        <tr> <td><code>"Sales"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>4.69</code>
             
                
             </td> 
             <td>The total sales made on this game, measured in millions of dollars.</td> </tr>
        
        <tr> <td><code>"Used Price"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>24.95</code>
             
                
             </td> 
             <td>A typical "used" price for this game (i.e. previously returned and sold), measured in dollars. It is unclear where this number originally came from.</td> </tr>
        
    </table>
</div>

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Metrics" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Metrics-Review-Score").click(function() {
        $( "#explore-Metrics-Review-Score" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Metrics-Sales").click(function() {
        $( "#explore-Metrics-Sales" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Metrics-Used-Price").click(function() {
        $( "#explore-Metrics-Used-Price" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Release' title='Dictionary (4 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Console"</code></td>
             <td><span data-toggle="tooltip"
                       title='String (text)'>
                       str</span></td> 
             <td>
             
                <code>"Nintendo DS"</code>
             
                
             </td> 
             <td>The name of the console that this particular game was released for. Note that the dataset contains multiple copies of the same game, released for different consoles.</td> </tr>
        
        <tr> <td><code>"Rating"</code></td>
             <td><span data-toggle="tooltip"
                       title='String (text)'>
                       str</span></td> 
             <td>
             
                <code>"E"</code>
             
                
             </td> 
             <td>The ESRB rating for this game, either E (for Everyone), T (for Teen), or M (for Mature).</td> </tr>
        
        <tr> <td><code>"Re-release?"</code></td>
             <td><span data-toggle="tooltip"
                       title='Boolean (True or False)'>
                       bool</span></td> 
             <td>
             
                <code>True</code>
             
                
             </td> 
             <td>Whether this game is a re-release of an earlier one.</td> </tr>
        
        <tr> <td><code>"Year"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>2004</code>
             
                
             </td> 
             <td>The year that this game was released.</td> </tr>
        
    </table>
</div>

    

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Release" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Release-Console").click(function() {
        $( "#explore-Release-Console" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Release-Rating").click(function() {
        $( "#explore-Release-Rating" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Release-Re-release?").click(function() {
        $( "#explore-Release-Re-release?" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Release-Year").click(function() {
        $( "#explore-Release-Year" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Length' title='Dictionary (4 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"All PlayStyles"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Length-All-PlayStyles'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Completionists"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Length-Completionists'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Main + Extras"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Length-Main-+-Extras'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Main Story"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Length-Main-Story'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
    </table>
</div>

    

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Length" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Length-All-PlayStyles").click(function() {
        $( "#explore-Length-All-PlayStyles" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Length-Completionists").click(function() {
        $( "#explore-Length-Completionists" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Length-Main-+-Extras").click(function() {
        $( "#explore-Length-Main-+-Extras" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Length-Main-Story").click(function() {
        $( "#explore-Length-Main-Story" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Length-All-PlayStyles' title='Dictionary (5 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Average"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>22.716666666666665</code>
             
                
             </td> 
             <td>The mean time that players reported completing the game in any way, in hours. This is the average over all the other categories.</td> </tr>
        
        <tr> <td><code>"Leisure"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>31.9</code>
             
                
             </td> 
             <td>The slowest time that players reported completing the game in any way, in hours. This is the minimum over all the other categories.</td> </tr>
        
        <tr> <td><code>"Median"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>24.483333333333334</code>
             
                
             </td> 
             <td>The median time that players reported completing the game in any way, in hours. This is the median over all the other categories.</td> </tr>
        
        <tr> <td><code>"Polled"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>57</code>
             
                
             </td> 
             <td>The number of players that reported completing the game in any way. This is the count over all the other categories.</td> </tr>
        
        <tr> <td><code>"Rushed"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>14.3</code>
             
                
             </td> 
             <td>The fastest time that players reported completing the game in any way, in hours. This is the maximum over all the other categories.</td> </tr>
        
    </table>
</div>

    

    

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Length-All-PlayStyles" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Length-All-PlayStyles-Average").click(function() {
        $( "#explore-Length-All-PlayStyles-Average" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Length-All-PlayStyles-Leisure").click(function() {
        $( "#explore-Length-All-PlayStyles-Leisure" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Length-All-PlayStyles-Median").click(function() {
        $( "#explore-Length-All-PlayStyles-Median" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Length-All-PlayStyles-Polled").click(function() {
        $( "#explore-Length-All-PlayStyles-Polled" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Length-All-PlayStyles-Rushed").click(function() {
        $( "#explore-Length-All-PlayStyles-Rushed" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Length-Completionists' title='Dictionary (5 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Average"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>29.766666666666666</code>
             
                
             </td> 
             <td>The mean time that players reported completing everything in the game, in hours.</td> </tr>
        
        <tr> <td><code>"Leisure"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>35.03333333333333</code>
             
                
             </td> 
             <td>The slowest time that players reported completing everything in the game, in hours.</td> </tr>
        
        <tr> <td><code>"Median"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>30.0</code>
             
                
             </td> 
             <td>The median time that players reported completing everything in the game, in hours.</td> </tr>
        
        <tr> <td><code>"Polled"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>20</code>
             
                
             </td> 
             <td>The number of players that reported completing everything in the game.</td> </tr>
        
        <tr> <td><code>"Rushed"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>22.016666666666666</code>
             
                
             </td> 
             <td>The fastest time that players reported completing everything in the game, in hours.</td> </tr>
        
    </table>
</div>

    

    

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Length-Completionists" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Length-Completionists-Average").click(function() {
        $( "#explore-Length-Completionists-Average" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Length-Completionists-Leisure").click(function() {
        $( "#explore-Length-Completionists-Leisure" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Length-Completionists-Median").click(function() {
        $( "#explore-Length-Completionists-Median" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Length-Completionists-Polled").click(function() {
        $( "#explore-Length-Completionists-Polled" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Length-Completionists-Rushed").click(function() {
        $( "#explore-Length-Completionists-Rushed" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Length-Main-+-Extras' title='Dictionary (5 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Average"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>24.916666666666668</code>
             
                
             </td> 
             <td>The mean time that players reported completing the main game and major extra parts of the game, in hours.</td> </tr>
        
        <tr> <td><code>"Leisure"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>29.966666666666665</code>
             
                
             </td> 
             <td>The slowest time that players reported completing the main game and major extra parts of the game, in hours.</td> </tr>
        
        <tr> <td><code>"Median"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>25.0</code>
             
                
             </td> 
             <td>The median time that players reported completing the main game and major extra parts of the game, in hours.</td> </tr>
        
        <tr> <td><code>"Polled"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>16</code>
             
                
             </td> 
             <td>The number of players that reported completing the main game and major extra parts of the game.</td> </tr>
        
        <tr> <td><code>"Rushed"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>18.333333333333332</code>
             
                
             </td> 
             <td>The fastest time that players reported completing the main game and major extra parts of the game, in hours.</td> </tr>
        
    </table>
</div>

    

    

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Length-Main-+-Extras" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Length-Main-+-Extras-Average").click(function() {
        $( "#explore-Length-Main-+-Extras-Average" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Length-Main-+-Extras-Leisure").click(function() {
        $( "#explore-Length-Main-+-Extras-Leisure" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Length-Main-+-Extras-Median").click(function() {
        $( "#explore-Length-Main-+-Extras-Median" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Length-Main-+-Extras-Polled").click(function() {
        $( "#explore-Length-Main-+-Extras-Polled" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Length-Main-+-Extras-Rushed").click(function() {
        $( "#explore-Length-Main-+-Extras-Rushed" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Length-Main-Story' title='Dictionary (5 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Average"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>14.333333333333334</code>
             
                
             </td> 
             <td>The mean time that players reported completing the main game storyline, in hours.</td> </tr>
        
        <tr> <td><code>"Leisure"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>18.316666666666666</code>
             
                
             </td> 
             <td>The slowest time that players reported completing the main game storyline, in hours.</td> </tr>
        
        <tr> <td><code>"Median"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>14.5</code>
             
                
             </td> 
             <td>The median time that players reported completing the main game storyline, in hours.</td> </tr>
        
        <tr> <td><code>"Polled"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>21</code>
             
                
             </td> 
             <td>The number of players that reported completing the main game storyline.</td> </tr>
        
        <tr> <td><code>"Rushed"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>9.7</code>
             
                
             </td> 
             <td>The fastest time that players reported completing the main game storyline, in hours.</td> </tr>
        
    </table>
</div>

    

    

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Length-Main-Story" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Length-Main-Story-Average").click(function() {
        $( "#explore-Length-Main-Story-Average" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Length-Main-Story-Leisure").click(function() {
        $( "#explore-Length-Main-Story-Leisure" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Length-Main-Story-Median").click(function() {
        $( "#explore-Length-Main-Story-Median" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Length-Main-Story-Polled").click(function() {
        $( "#explore-Length-Main-Story-Polled" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Length-Main-Story-Rushed").click(function() {
        $( "#explore-Length-Main-Story-Rushed" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>


# Downloads

Download all of the following files.

1. <a href='../../datasets/python/video_games/video_games.py' download>video_games.py <span class="fas fa-download"></span></a>
2. <a href='../../datasets/python/video_games/video_games.data' download>video_games.data <span class="fas fa-download"></span></a>

# Usage

```python
import video_games
video_game = video_games.get_video_game()
```

# Documentation

<dl>
    <dt><span>get_video_game()</span></dt>
    <dd>Returns a list of dictionaries representing video game.</dd>
</dl>