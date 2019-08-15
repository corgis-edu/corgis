---
permalink: /python/skyscrapers/
style: dataset
---



<img class="img-thumbnail float-right"
     src="/images/datasets/skyscrapers-icon.png"
     alt="skyscrapers icon"
     role="presentation">

# Skyscrapers Python Library

<p class='lead'>From the CORGIS Dataset Project</p>

<span class='text-muted'>By Austin Cory Bart <acbart@vt.edu></span><br>
<span class='text-muted'>Version 2.0.0, created 3/22/2016</span><br>
<span class='text-muted'>Tags: buildings, construction, building, skyscrapers, international, tall, height, tower</span>

# Overview

Collected statistics about the tallest buildings all over the world, including the materials used to develop them, the purpose of the buildings, and more.



<http://www.skyscrapercenter.com/>




# Explore Structure

Each row represents *$MISSING_FIELD*.



<button type='button'
        class='btn btn-info'
        id='btn-explore'>Explore skyscrapers data</button>

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


<div id='explore-' title='Dictionary (7 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"id"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>12</code>
             
                
             </td> 
             <td>$MISSING_FIELD</td> </tr>
        
        <tr> <td><code>"material"</code></td> 
             <td><span data-toggle="tooltip"
                       title='String (text)'>
                       str</span></td> 
             <td>
             
                <code>"steel"</code>
             
                
             </td> 
             <td>$MISSING_FIELD</td> </tr>
        
        <tr> <td><code>"name"</code></td> 
             <td><span data-toggle="tooltip"
                       title='String (text)'>
                       str</span></td> 
             <td>
             
                <code>"The Illinois"</code>
             
                
             </td> 
             <td>$MISSING_FIELD</td> </tr>
        
        <tr> <td><code>"location"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-location'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"purposes"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-purposes'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"statistics"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-statistics'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"status"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-status'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
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
    
    $("#btn-explore-id").click(function() {
        $( "#explore-id" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-material").click(function() {
        $( "#explore-material" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-name").click(function() {
        $( "#explore-name" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-location").click(function() {
        $( "#explore-location" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-purposes").click(function() {
        $( "#explore-purposes" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-statistics").click(function() {
        $( "#explore-statistics" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-status").click(function() {
        $( "#explore-status" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-location' title='Dictionary (6 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"city"</code></td> 
             <td><span data-toggle="tooltip"
                       title='String (text)'>
                       str</span></td> 
             <td>
             
                <code>"Chicago"</code>
             
                
             </td> 
             <td>$MISSING_FIELD</td> </tr>
        
        <tr> <td><code>"city_id"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>1539</code>
             
                
             </td> 
             <td>$MISSING_FIELD</td> </tr>
        
        <tr> <td><code>"country"</code></td> 
             <td><span data-toggle="tooltip"
                       title='String (text)'>
                       str</span></td> 
             <td>
             
                <code>"US"</code>
             
                
             </td> 
             <td>$MISSING_FIELD</td> </tr>
        
        <tr> <td><code>"country id"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>163</code>
             
                
             </td> 
             <td>$MISSING_FIELD</td> </tr>
        
        <tr> <td><code>"latitude"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>0.0</code>
             
                
             </td> 
             <td>$MISSING_FIELD</td> </tr>
        
        <tr> <td><code>"longitude"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>0.0</code>
             
                
             </td> 
             <td>$MISSING_FIELD</td> </tr>
        
    </table>
</div>

    

    

    

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-location" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-location-city").click(function() {
        $( "#explore-location-city" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-location-city_id").click(function() {
        $( "#explore-location-city_id" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-location-country").click(function() {
        $( "#explore-location-country" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-location-country-id").click(function() {
        $( "#explore-location-country-id" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-location-latitude").click(function() {
        $( "#explore-location-latitude" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-location-longitude").click(function() {
        $( "#explore-location-longitude" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-purposes' title='Dictionary (23 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"abandoned"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Boolean (True or False)'>
                       bool</span></td> 
             <td>
             
                <code>True</code>
             
                
             </td> 
             <td>$MISSING_FIELD</td> </tr>
        
        <tr> <td><code>"air traffic control tower"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Boolean (True or False)'>
                       bool</span></td> 
             <td>
             
                <code>True</code>
             
                
             </td> 
             <td>$MISSING_FIELD</td> </tr>
        
        <tr> <td><code>"belltower"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Boolean (True or False)'>
                       bool</span></td> 
             <td>
             
                <code>True</code>
             
                
             </td> 
             <td>$MISSING_FIELD</td> </tr>
        
        <tr> <td><code>"bridge"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Boolean (True or False)'>
                       bool</span></td> 
             <td>
             
                <code>True</code>
             
                
             </td> 
             <td>$MISSING_FIELD</td> </tr>
        
        <tr> <td><code>"casino"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Boolean (True or False)'>
                       bool</span></td> 
             <td>
             
                <code>True</code>
             
                
             </td> 
             <td>$MISSING_FIELD</td> </tr>
        
        <tr> <td><code>"commercial"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Boolean (True or False)'>
                       bool</span></td> 
             <td>
             
                <code>True</code>
             
                
             </td> 
             <td>$MISSING_FIELD</td> </tr>
        
        <tr> <td><code>"education"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Boolean (True or False)'>
                       bool</span></td> 
             <td>
             
                <code>True</code>
             
                
             </td> 
             <td>$MISSING_FIELD</td> </tr>
        
        <tr> <td><code>"exhibition"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Boolean (True or False)'>
                       bool</span></td> 
             <td>
             
                <code>True</code>
             
                
             </td> 
             <td>$MISSING_FIELD</td> </tr>
        
        <tr> <td><code>"government"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Boolean (True or False)'>
                       bool</span></td> 
             <td>
             
                <code>True</code>
             
                
             </td> 
             <td>$MISSING_FIELD</td> </tr>
        
        <tr> <td><code>"hospital"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Boolean (True or False)'>
                       bool</span></td> 
             <td>
             
                <code>True</code>
             
                
             </td> 
             <td>$MISSING_FIELD</td> </tr>
        
        <tr> <td><code>"hotel"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Boolean (True or False)'>
                       bool</span></td> 
             <td>
             
                <code>True</code>
             
                
             </td> 
             <td>$MISSING_FIELD</td> </tr>
        
        <tr> <td><code>"industrial"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Boolean (True or False)'>
                       bool</span></td> 
             <td>
             
                <code>True</code>
             
                
             </td> 
             <td>$MISSING_FIELD</td> </tr>
        
        <tr> <td><code>"library"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Boolean (True or False)'>
                       bool</span></td> 
             <td>
             
                <code>True</code>
             
                
             </td> 
             <td>$MISSING_FIELD</td> </tr>
        
        <tr> <td><code>"multiple"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Boolean (True or False)'>
                       bool</span></td> 
             <td>
             
                <code>True</code>
             
                
             </td> 
             <td>$MISSING_FIELD</td> </tr>
        
        <tr> <td><code>"museum"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Boolean (True or False)'>
                       bool</span></td> 
             <td>
             
                <code>True</code>
             
                
             </td> 
             <td>$MISSING_FIELD</td> </tr>
        
        <tr> <td><code>"observation"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Boolean (True or False)'>
                       bool</span></td> 
             <td>
             
                <code>True</code>
             
                
             </td> 
             <td>$MISSING_FIELD</td> </tr>
        
        <tr> <td><code>"office"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Boolean (True or False)'>
                       bool</span></td> 
             <td>
             
                <code>True</code>
             
                
             </td> 
             <td>$MISSING_FIELD</td> </tr>
        
        <tr> <td><code>"other"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Boolean (True or False)'>
                       bool</span></td> 
             <td>
             
                <code>True</code>
             
                
             </td> 
             <td>$MISSING_FIELD</td> </tr>
        
        <tr> <td><code>"religious"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Boolean (True or False)'>
                       bool</span></td> 
             <td>
             
                <code>True</code>
             
                
             </td> 
             <td>$MISSING_FIELD</td> </tr>
        
        <tr> <td><code>"residential"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Boolean (True or False)'>
                       bool</span></td> 
             <td>
             
                <code>True</code>
             
                
             </td> 
             <td>$MISSING_FIELD</td> </tr>
        
        <tr> <td><code>"retail"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Boolean (True or False)'>
                       bool</span></td> 
             <td>
             
                <code>True</code>
             
                
             </td> 
             <td>$MISSING_FIELD</td> </tr>
        
        <tr> <td><code>"serviced apartments"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Boolean (True or False)'>
                       bool</span></td> 
             <td>
             
                <code>True</code>
             
                
             </td> 
             <td>$MISSING_FIELD</td> </tr>
        
        <tr> <td><code>"telecommunications"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Boolean (True or False)'>
                       bool</span></td> 
             <td>
             
                <code>True</code>
             
                
             </td> 
             <td>$MISSING_FIELD</td> </tr>
        
    </table>
</div>

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-purposes" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-purposes-abandoned").click(function() {
        $( "#explore-purposes-abandoned" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-purposes-air-traffic-control-tower").click(function() {
        $( "#explore-purposes-air-traffic-control-tower" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-purposes-belltower").click(function() {
        $( "#explore-purposes-belltower" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-purposes-bridge").click(function() {
        $( "#explore-purposes-bridge" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-purposes-casino").click(function() {
        $( "#explore-purposes-casino" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-purposes-commercial").click(function() {
        $( "#explore-purposes-commercial" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-purposes-education").click(function() {
        $( "#explore-purposes-education" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-purposes-exhibition").click(function() {
        $( "#explore-purposes-exhibition" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-purposes-government").click(function() {
        $( "#explore-purposes-government" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-purposes-hospital").click(function() {
        $( "#explore-purposes-hospital" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-purposes-hotel").click(function() {
        $( "#explore-purposes-hotel" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-purposes-industrial").click(function() {
        $( "#explore-purposes-industrial" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-purposes-library").click(function() {
        $( "#explore-purposes-library" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-purposes-multiple").click(function() {
        $( "#explore-purposes-multiple" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-purposes-museum").click(function() {
        $( "#explore-purposes-museum" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-purposes-observation").click(function() {
        $( "#explore-purposes-observation" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-purposes-office").click(function() {
        $( "#explore-purposes-office" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-purposes-other").click(function() {
        $( "#explore-purposes-other" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-purposes-religious").click(function() {
        $( "#explore-purposes-religious" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-purposes-residential").click(function() {
        $( "#explore-purposes-residential" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-purposes-retail").click(function() {
        $( "#explore-purposes-retail" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-purposes-serviced-apartments").click(function() {
        $( "#explore-purposes-serviced-apartments" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-purposes-telecommunications").click(function() {
        $( "#explore-purposes-telecommunications" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-statistics' title='Dictionary (4 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"floors above"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>528</code>
             
                
             </td> 
             <td>$MISSING_FIELD</td> </tr>
        
        <tr> <td><code>"height"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>1609.3599853516</code>
             
                
             </td> 
             <td>$MISSING_FIELD</td> </tr>
        
        <tr> <td><code>"number of purposes"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>4</code>
             
                
             </td> 
             <td>$MISSING_FIELD</td> </tr>
        
        <tr> <td><code>"rank"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>1</code>
             
                
             </td> 
             <td>$MISSING_FIELD</td> </tr>
        
    </table>
</div>

    

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-statistics" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-statistics-floors-above").click(function() {
        $( "#explore-statistics-floors-above" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-statistics-height").click(function() {
        $( "#explore-statistics-height" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-statistics-number-of-purposes").click(function() {
        $( "#explore-statistics-number-of-purposes" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-statistics-rank").click(function() {
        $( "#explore-statistics-rank" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-status' title='Dictionary (3 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"current"</code></td> 
             <td><span data-toggle="tooltip"
                       title='String (text)'>
                       str</span></td> 
             <td>
             
                <code>"vision"</code>
             
                
             </td> 
             <td>$MISSING_FIELD</td> </tr>
        
        <tr> <td><code>"status.completed"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-status-completed'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"status.started"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-status-started'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
    </table>
</div>

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-status" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-status-current").click(function() {
        $( "#explore-status-current" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-status-completed").click(function() {
        $( "#explore-status-completed" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-status-started").click(function() {
        $( "#explore-status-started" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-status-completed' title='Dictionary (2 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"is completed"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Boolean (True or False)'>
                       bool</span></td> 
             <td>
             
                <code>True</code>
             
                
             </td> 
             <td>$MISSING_FIELD</td> </tr>
        
        <tr> <td><code>"year"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>0</code>
             
                
             </td> 
             <td>$MISSING_FIELD</td> </tr>
        
    </table>
</div>

    

    

<script>
$(document).ready(function() {
    $( "#explore-status-completed" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-status-completed-is-completed").click(function() {
        $( "#explore-status-completed-is-completed" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-status-completed-year").click(function() {
        $( "#explore-status-completed-year" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-status-started' title='Dictionary (2 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"is started"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Boolean (True or False)'>
                       bool</span></td> 
             <td>
             
                <code>True</code>
             
                
             </td> 
             <td>$MISSING_FIELD</td> </tr>
        
        <tr> <td><code>"year"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>0</code>
             
                
             </td> 
             <td>$MISSING_FIELD</td> </tr>
        
    </table>
</div>

    

    

<script>
$(document).ready(function() {
    $( "#explore-status-started" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-status-started-is-started").click(function() {
        $( "#explore-status-started-is-started" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-status-started-year").click(function() {
        $( "#explore-status-started-year" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>


# Downloads

Download all of the following files.

1. <a href='../../datasets/python/skyscrapers/skyscrapers.py' download>skyscrapers.py <span class="fas fa-download"></span></a>
2. <a href='../../datasets/python/skyscrapers/skyscrapers.data' download>skyscrapers.data <span class="fas fa-download"></span></a>

# Usage

```python
import skyscrapers
skyscraper = skyscrapers.get_skyscraper()
```

# Documentation

<dl>
    <dt><span>get_skyscraper()</span></dt>
    <dd>Returns a list of dictionaries representing skyscraper.</dd>
</dl>