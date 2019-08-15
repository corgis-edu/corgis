---
permalink: /python/real_estate/
style: dataset
---



<img class="img-thumbnail float-right"
     src="/images/datasets/real-estate-icon.png"
     alt="real estate icon"
     role="presentation">

# Real Estate Python Library

<p class='lead'>From the CORGIS Dataset Project</p>

<span class='text-muted'>By Austin Cory Bart <acbart@vt.edu></span><br>
<span class='text-muted'>Version 2.0.0, created 2/23/2016</span><br>
<span class='text-muted'>Tags: real, estate, buildings, government, building</span>

# Overview

Real Estate Across the United States (REXUS) is the primary tool used by PBS to track and manage the government's real property assets and to store inventory data, building data, customer data, and lease information. STAR manages aspects of real property space management, including identification of all building space and daily management of 22,000 assignments for all property to its client Federal agencies. This data set contains PBS building inventory that consists of both owned and leased buildings with active and excess status.



<https://catalog.data.gov/dataset/real-estate-across-the-united-states-rexus-inventory-building>




# Explore Structure

Each row represents *$MISSING_FIELD*.



<button type='button'
        class='btn btn-info'
        id='btn-explore'>Explore real estate data</button>

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


<div id='explore-' title='Dictionary (2 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"data"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-data'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"location"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-location'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
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
    
    $("#btn-explore-data").click(function() {
        $( "#explore-data" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-location").click(function() {
        $( "#explore-location" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-data' title='Dictionary (7 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"date"</code></td> 
             <td><span data-toggle="tooltip"
                       title='String (text)'>
                       str</span></td> 
             <td>
             
                <code>"1-Jan-33"</code>
             
                
             </td> 
             <td>$MISSING_FIELD</td> </tr>
        
        <tr> <td><code>"owned or leased"</code></td> 
             <td><span data-toggle="tooltip"
                       title='String (text)'>
                       str</span></td> 
             <td>
             
                <code>"OWNED"</code>
             
                
             </td> 
             <td>$MISSING_FIELD</td> </tr>
        
        <tr> <td><code>"parking spaces"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>29</code>
             
                
             </td> 
             <td>$MISSING_FIELD</td> </tr>
        
        <tr> <td><code>"status"</code></td> 
             <td><span data-toggle="tooltip"
                       title='String (text)'>
                       str</span></td> 
             <td>
             
                <code>"ACTIVE"</code>
             
                
             </td> 
             <td>$MISSING_FIELD</td> </tr>
        
        <tr> <td><code>"type"</code></td> 
             <td><span data-toggle="tooltip"
                       title='String (text)'>
                       str</span></td> 
             <td>
             
                <code>"BUILDING"</code>
             
                
             </td> 
             <td>$MISSING_FIELD</td> </tr>
        
        <tr> <td><code>"data.disabilities"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-data-disabilities'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"data.history"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-data-history'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
    </table>
</div>

    

    

    

    

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-data" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-data-date").click(function() {
        $( "#explore-data-date" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-data-owned-or-leased").click(function() {
        $( "#explore-data-owned-or-leased" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-data-parking-spaces").click(function() {
        $( "#explore-data-parking-spaces" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-data-status").click(function() {
        $( "#explore-data-status" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-data-type").click(function() {
        $( "#explore-data-type" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-data-disabilities").click(function() {
        $( "#explore-data-disabilities" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-data-history").click(function() {
        $( "#explore-data-history" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-location' title='Dictionary (4 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"congressional district"</code></td> 
             <td><span data-toggle="tooltip"
                       title='String (text)'>
                       str</span></td> 
             <td>
             
                <code>"1"</code>
             
                
             </td> 
             <td>$MISSING_FIELD</td> </tr>
        
        <tr> <td><code>"id"</code></td> 
             <td><span data-toggle="tooltip"
                       title='String (text)'>
                       str</span></td> 
             <td>
             
                <code>"CT0013"</code>
             
                
             </td> 
             <td>$MISSING_FIELD</td> </tr>
        
        <tr> <td><code>"region id"</code></td> 
             <td><span data-toggle="tooltip"
                       title='String (text)'>
                       str</span></td> 
             <td>
             
                <code>"1"</code>
             
                
             </td> 
             <td>$MISSING_FIELD</td> </tr>
        
        <tr> <td><code>"location.address"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-location-address'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
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
    
    $("#btn-explore-location-congressional-district").click(function() {
        $( "#explore-location-congressional-district" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-location-id").click(function() {
        $( "#explore-location-id" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-location-region-id").click(function() {
        $( "#explore-location-region-id" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-location-address").click(function() {
        $( "#explore-location-address" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-data-disabilities' title='Dictionary (2 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"ADA Accessible"</code></td> 
             <td><span data-toggle="tooltip"
                       title='String (text)'>
                       str</span></td> 
             <td>
             
                <code>"Will Conform"</code>
             
                
             </td> 
             <td>$MISSING_FIELD</td> </tr>
        
        <tr> <td><code>"ansi usable"</code></td> 
             <td><span data-toggle="tooltip"
                       title='String (text)'>
                       str</span></td> 
             <td>
             
                <code>"97884"</code>
             
                
             </td> 
             <td>$MISSING_FIELD</td> </tr>
        
    </table>
</div>

    

    

<script>
$(document).ready(function() {
    $( "#explore-data-disabilities" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-data-disabilities-ADA-Accessible").click(function() {
        $( "#explore-data-disabilities-ADA-Accessible" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-data-disabilities-ansi-usable").click(function() {
        $( "#explore-data-disabilities-ansi-usable" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-data-history' title='Dictionary (2 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"status"</code></td> 
             <td><span data-toggle="tooltip"
                       title='String (text)'>
                       str</span></td> 
             <td>
             
                <code>"National Register Listed"</code>
             
                
             </td> 
             <td>$MISSING_FIELD</td> </tr>
        
        <tr> <td><code>"type"</code></td> 
             <td><span data-toggle="tooltip"
                       title='String (text)'>
                       str</span></td> 
             <td>
             
                <code>"Field Not In Use"</code>
             
                
             </td> 
             <td>$MISSING_FIELD</td> </tr>
        
    </table>
</div>

    

    

<script>
$(document).ready(function() {
    $( "#explore-data-history" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-data-history-status").click(function() {
        $( "#explore-data-history-status" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-data-history-type").click(function() {
        $( "#explore-data-history-type" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-location-address' title='Dictionary (6 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"city"</code></td> 
             <td><span data-toggle="tooltip"
                       title='String (text)'>
                       str</span></td> 
             <td>
             
                <code>"HARTFORD"</code>
             
                
             </td> 
             <td>$MISSING_FIELD</td> </tr>
        
        <tr> <td><code>"county"</code></td> 
             <td><span data-toggle="tooltip"
                       title='String (text)'>
                       str</span></td> 
             <td>
             
                <code>"HARTFORD"</code>
             
                
             </td> 
             <td>$MISSING_FIELD</td> </tr>
        
        <tr> <td><code>"line 1"</code></td> 
             <td><span data-toggle="tooltip"
                       title='String (text)'>
                       str</span></td> 
             <td>
             
                <code>"135 HIGH ST"</code>
             
                
             </td> 
             <td>$MISSING_FIELD</td> </tr>
        
        <tr> <td><code>"line 2"</code></td> 
             <td><span data-toggle="tooltip"
                       title='String (text)'>
                       str</span></td> 
             <td>
             
                <code>" "</code>
             
                
             </td> 
             <td>$MISSING_FIELD</td> </tr>
        
        <tr> <td><code>"state"</code></td> 
             <td><span data-toggle="tooltip"
                       title='String (text)'>
                       str</span></td> 
             <td>
             
                <code>"CT"</code>
             
                
             </td> 
             <td>$MISSING_FIELD</td> </tr>
        
        <tr> <td><code>"zip"</code></td> 
             <td><span data-toggle="tooltip"
                       title='String (text)'>
                       str</span></td> 
             <td>
             
                <code>"61031125"</code>
             
                
             </td> 
             <td>$MISSING_FIELD</td> </tr>
        
    </table>
</div>

    

    

    

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-location-address" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-location-address-city").click(function() {
        $( "#explore-location-address-city" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-location-address-county").click(function() {
        $( "#explore-location-address-county" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-location-address-line-1").click(function() {
        $( "#explore-location-address-line-1" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-location-address-line-2").click(function() {
        $( "#explore-location-address-line-2" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-location-address-state").click(function() {
        $( "#explore-location-address-state" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-location-address-zip").click(function() {
        $( "#explore-location-address-zip" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>


# Downloads

Download all of the following files.

1. <a href='../../datasets/python/real_estate/real_estate.py' download>real_estate.py <span class="fas fa-download"></span></a>
2. <a href='../../datasets/python/real_estate/real_estate.data' download>real_estate.data <span class="fas fa-download"></span></a>

# Usage

```python
import real_estate
building = real_estate.get_building()
```

# Documentation

<dl>
    <dt><span>get_building()</span></dt>
    <dd>Returns a list of dictionaries representing building.</dd>
</dl>