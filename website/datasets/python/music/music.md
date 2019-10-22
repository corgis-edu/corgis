---
permalink: /python/music/
style: dataset
---



<img class="img-thumbnail float-right"
     src="/images/datasets/music-icon.png"
     alt="music icon"
     role="presentation">

# Music Python Library

<p class='lead'>From the CORGIS Dataset Project</p>

<span class='text-muted'>By Ryan Whitcomb <rwhit94@vt.edu></span><br>
<span class='text-muted'>Version 2.0.0, created 5-18-16</span><br>
<span class='text-muted'>Tags: music, songs, artists, creativity, media</span>

# Overview

This library comes from the Million Song Dataset, which used a company called the Echo Nest to derive data points about one million popular contemporary songs.  The Million Song Dataset is a collaboration between the Echo Nest and LabROSA, a laboratory working towards intelligent machine listening.  The project was also funded in part by the National Science Foundation of America (NSF) to provide a large data set to evaluate research related to algorithms on a commercial size while promoting further research into the Music Information Retrieval field.  The data contains standard information about the songs such as artist name, title, and year released.  Additionally, the data contains more advanced information; for example, the length of the song, how many musical bars long the song is, and how long the fade in to the song was.



<Thierry Bertin-Mahieux, Daniel P.W. Ellis, Brian Whitman, and Paul Lamere. <br> The Million Song Dataset. In Proceedings of the 12th International Society <br> for Music Information Retrieval Conference (ISMIR 2011), 2011.>




# Explore Structure

Each row represents *$MISSING_FIELD*.



<button type='button'
        class='btn btn-info'
        id='btn-explore'>Explore music data</button>

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
        
        <tr> <td><code>"artist"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-artist'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"release"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-release'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"song"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-song'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
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
    
    $("#btn-explore-artist").click(function() {
        $( "#explore-artist" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-release").click(function() {
        $( "#explore-release" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-song").click(function() {
        $( "#explore-song" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-artist' title='Dictionary (10 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"familiarity"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>0.581793766</code>
             
                
             </td> 
             <td>A measure of 0..1 for how familiar the artist is to listeners.</td> </tr>
        
        <tr> <td><code>"hotttnesss"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>0.401997543</code>
             
                
             </td> 
             <td>A measure of the artists's popularity, when downloaded (in December 2010). Measured on a scale of 0 to 1.</td> </tr>
        
        <tr> <td><code>"id"</code></td>
             <td><span data-toggle="tooltip"
                       title='String (text)'>
                       str</span></td> 
             <td>
             
                <code>"ARD7TVE1187B99BFB1"</code>
             
                
             </td> 
             <td>A unique ID for this artist.</td> </tr>
        
        <tr> <td><code>"latitude"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>0.0</code>
             
                
             </td> 
             <td>The home location's latitude of this artist.</td> </tr>
        
        <tr> <td><code>"location"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>0</code>
             
                
             </td> 
             <td>Unknown.</td> </tr>
        
        <tr> <td><code>"longitude"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>0.0</code>
             
                
             </td> 
             <td>The home location's longitude of this artist.</td> </tr>
        
        <tr> <td><code>"name"</code></td>
             <td><span data-toggle="tooltip"
                       title='String (text)'>
                       str</span></td> 
             <td>
             
                <code>"Casual"</code>
             
                
             </td> 
             <td>The name of the artist.</td> </tr>
        
        <tr> <td><code>"similar"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>0.0</code>
             
                
             </td> 
             <td>Unknown.</td> </tr>
        
        <tr> <td><code>"terms"</code></td>
             <td><span data-toggle="tooltip"
                       title='String (text)'>
                       str</span></td> 
             <td>
             
                <code>"hip hop"</code>
             
                
             </td> 
             <td>The term most associated with this artist.</td> </tr>
        
        <tr> <td><code>"terms_freq"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>1.0</code>
             
                
             </td> 
             <td>The frequency of this term.</td> </tr>
        
    </table>
</div>

    

    

    

    

    

    

    

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-artist" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-artist-familiarity").click(function() {
        $( "#explore-artist-familiarity" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-artist-hotttnesss").click(function() {
        $( "#explore-artist-hotttnesss" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-artist-id").click(function() {
        $( "#explore-artist-id" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-artist-latitude").click(function() {
        $( "#explore-artist-latitude" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-artist-location").click(function() {
        $( "#explore-artist-location" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-artist-longitude").click(function() {
        $( "#explore-artist-longitude" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-artist-name").click(function() {
        $( "#explore-artist-name" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-artist-similar").click(function() {
        $( "#explore-artist-similar" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-artist-terms").click(function() {
        $( "#explore-artist-terms" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-artist-terms_freq").click(function() {
        $( "#explore-artist-terms_freq" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-release' title='Dictionary (2 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"id"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>300848</code>
             
                
             </td> 
             <td>The ID of the release (album) on the service 7digital.com</td> </tr>
        
        <tr> <td><code>"name"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>0</code>
             
                
             </td> 
             <td>Unknown value</td> </tr>
        
    </table>
</div>

    

    

<script>
$(document).ready(function() {
    $( "#explore-release" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-release-id").click(function() {
        $( "#explore-release-id" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-release-name").click(function() {
        $( "#explore-release-name" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-song' title='Dictionary (23 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"artist_mbtags"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>0.0</code>
             
                
             </td> 
             <td>Unknown field.</td> </tr>
        
        <tr> <td><code>"artist_mbtags_count"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>0.0</code>
             
                
             </td> 
             <td>Number of tags for the artist on mbtags.</td> </tr>
        
        <tr> <td><code>"bars_confidence"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>0.643</code>
             
                
             </td> 
             <td>Confidence value (between 0 and 1) associated with each bar.</td> </tr>
        
        <tr> <td><code>"bars_start"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>0.58521</code>
             
                
             </td> 
             <td>Average start time of each bar, measured in bars.</td> </tr>
        
        <tr> <td><code>"beats_confidence"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>0.834</code>
             
                
             </td> 
             <td>Average confidence interval of the beats.</td> </tr>
        
        <tr> <td><code>"beats_start"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>0.58521</code>
             
                
             </td> 
             <td>Average start time of each beat, measured in beats.</td> </tr>
        
        <tr> <td><code>"duration"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>218.93179</code>
             
                
             </td> 
             <td>Duration of the track in seconds.</td> </tr>
        
        <tr> <td><code>"end_of_fade_in"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>0.247</code>
             
                
             </td> 
             <td>Time of the end of the fade in, at the beginning of the song.</td> </tr>
        
        <tr> <td><code>"hotttnesss"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>0.60211999</code>
             
                
             </td> 
             <td>A measure of the song's popularity, when downloaded (in December 2010). Measured on a scale of 0 to 1.</td> </tr>
        
        <tr> <td><code>"id"</code></td>
             <td><span data-toggle="tooltip"
                       title='String (text)'>
                       str</span></td> 
             <td>
             
                <code>"SOMZWCG12A8C13C480"</code>
             
                
             </td> 
             <td>A uniquely identifying number for the song.</td> </tr>
        
        <tr> <td><code>"key"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>1.0</code>
             
                
             </td> 
             <td>Estimation of the key the song is in. Keys can be from 0 to 11.</td> </tr>
        
        <tr> <td><code>"key_confidence"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>0.736</code>
             
                
             </td> 
             <td>Confidence value (between 0 and 1) of the key estimation.</td> </tr>
        
        <tr> <td><code>"loudness"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>-11.197</code>
             
                
             </td> 
             <td>General loudness of the track</td> </tr>
        
        <tr> <td><code>"mode"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>0</code>
             
                
             </td> 
             <td>Estimation of the mode the song.</td> </tr>
        
        <tr> <td><code>"mode_confidence"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>0.636</code>
             
                
             </td> 
             <td>Confidence value (between 0 and 1) of the mode estimation.</td> </tr>
        
        <tr> <td><code>"start_of_fade_out"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>218.932</code>
             
                
             </td> 
             <td>Start time of the fade out, in seconds, at the end of the song.</td> </tr>
        
        <tr> <td><code>"tatums_confidence"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>0.779</code>
             
                
             </td> 
             <td>Confidence value (between 0 and 1) associated with each tatum.</td> </tr>
        
        <tr> <td><code>"tatums_start"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>0.28519</code>
             
                
             </td> 
             <td>Average start time of each tatum, measured in tatums.</td> </tr>
        
        <tr> <td><code>"tempo"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>92.198</code>
             
                
             </td> 
             <td>Tempo in BPM.</td> </tr>
        
        <tr> <td><code>"time_signature"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>4.0</code>
             
                
             </td> 
             <td>Time signature of the song, i.e. usual number of beats per bar.</td> </tr>
        
        <tr> <td><code>"time_signature_confidence"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>0.778</code>
             
                
             </td> 
             <td>Confidence of the time signature estimation</td> </tr>
        
        <tr> <td><code>"title"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>0</code>
             
                
             </td> 
             <td>Name of the song.</td> </tr>
        
        <tr> <td><code>"year"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>0</code>
             
                
             </td> 
             <td>Year when this song was released, according to musicbrainz.org.</td> </tr>
        
    </table>
</div>

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-song" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-song-artist_mbtags").click(function() {
        $( "#explore-song-artist_mbtags" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-song-artist_mbtags_count").click(function() {
        $( "#explore-song-artist_mbtags_count" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-song-bars_confidence").click(function() {
        $( "#explore-song-bars_confidence" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-song-bars_start").click(function() {
        $( "#explore-song-bars_start" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-song-beats_confidence").click(function() {
        $( "#explore-song-beats_confidence" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-song-beats_start").click(function() {
        $( "#explore-song-beats_start" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-song-duration").click(function() {
        $( "#explore-song-duration" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-song-end_of_fade_in").click(function() {
        $( "#explore-song-end_of_fade_in" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-song-hotttnesss").click(function() {
        $( "#explore-song-hotttnesss" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-song-id").click(function() {
        $( "#explore-song-id" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-song-key").click(function() {
        $( "#explore-song-key" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-song-key_confidence").click(function() {
        $( "#explore-song-key_confidence" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-song-loudness").click(function() {
        $( "#explore-song-loudness" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-song-mode").click(function() {
        $( "#explore-song-mode" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-song-mode_confidence").click(function() {
        $( "#explore-song-mode_confidence" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-song-start_of_fade_out").click(function() {
        $( "#explore-song-start_of_fade_out" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-song-tatums_confidence").click(function() {
        $( "#explore-song-tatums_confidence" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-song-tatums_start").click(function() {
        $( "#explore-song-tatums_start" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-song-tempo").click(function() {
        $( "#explore-song-tempo" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-song-time_signature").click(function() {
        $( "#explore-song-time_signature" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-song-time_signature_confidence").click(function() {
        $( "#explore-song-time_signature_confidence" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-song-title").click(function() {
        $( "#explore-song-title" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-song-year").click(function() {
        $( "#explore-song-year" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>


# Downloads

Download all of the following files.

1. <a href='../../datasets/python/music/music.py' download>music.py <span class="fas fa-download"></span></a>
2. <a href='../../datasets/python/music/music.data' download>music.data <span class="fas fa-download"></span></a>

# Usage

```python
import music
music = music.get_music()
```

# Documentation

<dl>
    <dt><span>get_music()</span></dt>
    <dd>Returns a list of dictionaries representing music.</dd>
</dl>