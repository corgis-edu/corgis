---
permalink: /python/food_access/
style: dataset
---



<img class="img-thumbnail float-right"
     src="/images/datasets/food-access-icon.png"
     alt="food access icon"
     role="presentation">

# Food Access Python Library

<p class='lead'>From the CORGIS Dataset Project</p>

<span class='text-muted'>By Ryan Whitcomb, Joung Min Choi, Bo Guan</span><br>
<span class='text-muted'>Version 3.0.0, created 9/14/2021</span><br>
<span class='text-muted'>Tags: counties, states, food, access, availability, supermarket, rural, urban, population, vehicles</span>

# Overview

From the United States Department of Agriculture's Economic Research Service, the dataset contains information about US county's ability to access supermarkets, supercenters, grocery stores, or other sources of healthy and affordable food.  Most measures of how individuals and neighborhoods are able to access food are based on the following indicators: 
    - Accessibility to sources of healthy food, as measured by distance to a store or by the number of stores in an area.
    - Individual-level resources that may affect accessibility, such as family income or vehicle availability.
    - Neighborhood-level indicators of resources, such as the average income of the neighborhood and the availability of public transportation.  



<https://www.ers.usda.gov/data-products/food-access-research-atlas/download-the-data/>




# Explore Structure

Each row represents *Information about each state's ability to access food *.



<button type='button'
        class='btn btn-info'
        id='btn-explore'>Explore food access data</button>

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
        
        <tr> <td><code>"County"</code></td>
             <td><span data-toggle="tooltip"
                       title='String (text)'>
                       str</span></td> 
             <td>
             
                <code>"Autauga County"</code>
             
                
             </td> 
             <td>County name</td> </tr>
        
        <tr> <td><code>"Population"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>54571</code>
             
                
             </td> 
             <td>Population count from 2010 census</td> </tr>
        
        <tr> <td><code>"State"</code></td>
             <td><span data-toggle="tooltip"
                       title='String (text)'>
                       str</span></td> 
             <td>
             
                <code>"Alabama"</code>
             
                
             </td> 
             <td>State name</td> </tr>
        
        <tr> <td><code>"Housing Data"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Housing-Data'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Vehicle Access"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Vehicle-Access'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Low Access Numbers"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Low-Access-Numbers'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
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
    
    $("#btn-explore-County").click(function() {
        $( "#explore-County" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Population").click(function() {
        $( "#explore-Population" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-State").click(function() {
        $( "#explore-State" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Housing-Data").click(function() {
        $( "#explore-Housing-Data" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Vehicle-Access").click(function() {
        $( "#explore-Vehicle-Access" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Low-Access-Numbers").click(function() {
        $( "#explore-Low-Access-Numbers" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Housing-Data' title='Dictionary (2 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Residing in Group Quarters"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>455.0</code>
             
                
             </td> 
             <td>Count of tract population residing in group quarters</td> </tr>
        
        <tr> <td><code>"Total Housing Units"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>20221</code>
             
                
             </td> 
             <td>Occupied housing unit count from 2010 census</td> </tr>
        
    </table>
</div>

    

    

<script>
$(document).ready(function() {
    $( "#explore-Housing-Data" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Housing-Data-Residing-in-Group-Quarters").click(function() {
        $( "#explore-Housing-Data-Residing-in-Group-Quarters" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Housing-Data-Total-Housing-Units").click(function() {
        $( "#explore-Housing-Data-Total-Housing-Units" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Vehicle-Access' title='Dictionary (4 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"1 Mile"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>834.0</code>
             
                
             </td> 
             <td>Housing units without vehicle count beyond 1 mile from supermarket</td> </tr>
        
        <tr> <td><code>"1/2 Mile"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>1045.0</code>
             
                
             </td> 
             <td>Housing units without vehicle count beyond 1/2 mile from supermarket</td> </tr>
        
        <tr> <td><code>"10 Miles"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>222.0</code>
             
                
             </td> 
             <td>Housing units without vehicle count beyond 10 miles from supermarket</td> </tr>
        
        <tr> <td><code>"20 Miles"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>0.0</code>
             
                
             </td> 
             <td>Housing units without vehicle count beyond 20 miles from supermarket</td> </tr>
        
    </table>
</div>

    

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Vehicle-Access" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Vehicle-Access-1-Mile").click(function() {
        $( "#explore-Vehicle-Access-1-Mile" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Vehicle-Access-1_2-Mile").click(function() {
        $( "#explore-Vehicle-Access-1_2-Mile" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Vehicle-Access-10-Miles").click(function() {
        $( "#explore-Vehicle-Access-10-Miles" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Vehicle-Access-20-Miles").click(function() {
        $( "#explore-Vehicle-Access-20-Miles" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Low-Access-Numbers' title='Dictionary (4 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Children"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Low-Access-Numbers-Children'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Low Income People"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Low-Access-Numbers-Low-Income-People'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"People"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Low-Access-Numbers-People'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Seniors"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Low-Access-Numbers-Seniors'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
    </table>
</div>

    

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Low-Access-Numbers" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Low-Access-Numbers-Children").click(function() {
        $( "#explore-Low-Access-Numbers-Children" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Low-Access-Numbers-Low-Income-People").click(function() {
        $( "#explore-Low-Access-Numbers-Low-Income-People" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Low-Access-Numbers-People").click(function() {
        $( "#explore-Low-Access-Numbers-People" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Low-Access-Numbers-Seniors").click(function() {
        $( "#explore-Low-Access-Numbers-Seniors" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Low-Access-Numbers-Children' title='Dictionary (4 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"1 Mile"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>9973.0</code>
             
                
             </td> 
             <td>Kids population count beyond 1 mile from supermarket</td> </tr>
        
        <tr> <td><code>"1/2 Mile"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>13281.0</code>
             
                
             </td> 
             <td>Kids population count beyond 1/2 mile from supermarket</td> </tr>
        
        <tr> <td><code>"10 Miles"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>1199.0</code>
             
                
             </td> 
             <td>Kids population count beyond 10 miles from supermarket</td> </tr>
        
        <tr> <td><code>"20 Miles"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>0.0</code>
             
                
             </td> 
             <td>Kids population count beyond 20 miles from supermarket</td> </tr>
        
    </table>
</div>

    

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Low-Access-Numbers-Children" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Low-Access-Numbers-Children-1-Mile").click(function() {
        $( "#explore-Low-Access-Numbers-Children-1-Mile" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Low-Access-Numbers-Children-1_2-Mile").click(function() {
        $( "#explore-Low-Access-Numbers-Children-1_2-Mile" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Low-Access-Numbers-Children-10-Miles").click(function() {
        $( "#explore-Low-Access-Numbers-Children-10-Miles" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Low-Access-Numbers-Children-20-Miles").click(function() {
        $( "#explore-Low-Access-Numbers-Children-20-Miles" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Low-Access-Numbers-Low-Income-People' title='Dictionary (4 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"1 Mile"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>12067.0</code>
             
                
             </td> 
             <td>Low income population count beyond 1 mile from supermarket</td> </tr>
        
        <tr> <td><code>"1/2 Mile"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>15518.0</code>
             
                
             </td> 
             <td>Low income population count beyond 1/2 mile from supermarket</td> </tr>
        
        <tr> <td><code>"10 Miles"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>2307.0</code>
             
                
             </td> 
             <td>Low income population count beyond 10 miles from supermarket</td> </tr>
        
        <tr> <td><code>"20 Miles"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>0.0</code>
             
                
             </td> 
             <td>Low income population count beyond 20 miles from supermarket</td> </tr>
        
    </table>
</div>

    

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Low-Access-Numbers-Low-Income-People" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Low-Access-Numbers-Low-Income-People-1-Mile").click(function() {
        $( "#explore-Low-Access-Numbers-Low-Income-People-1-Mile" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Low-Access-Numbers-Low-Income-People-1_2-Mile").click(function() {
        $( "#explore-Low-Access-Numbers-Low-Income-People-1_2-Mile" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Low-Access-Numbers-Low-Income-People-10-Miles").click(function() {
        $( "#explore-Low-Access-Numbers-Low-Income-People-10-Miles" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Low-Access-Numbers-Low-Income-People-20-Miles").click(function() {
        $( "#explore-Low-Access-Numbers-Low-Income-People-20-Miles" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Low-Access-Numbers-People' title='Dictionary (4 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"1 Mile"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>37424.0</code>
             
                
             </td> 
             <td>Population count beyond 1 mile from supermarket</td> </tr>
        
        <tr> <td><code>"1/2 Mile"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>49497.0</code>
             
                
             </td> 
             <td>Population count beyond 1/2 mile from supermarket</td> </tr>
        
        <tr> <td><code>"10 Miles"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>5119.0</code>
             
                
             </td> 
             <td>Population count beyond 10 miles from supermarket</td> </tr>
        
        <tr> <td><code>"20 Miles"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>0.0</code>
             
                
             </td> 
             <td>Population count beyond 20 miles from supermarket</td> </tr>
        
    </table>
</div>

    

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Low-Access-Numbers-People" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Low-Access-Numbers-People-1-Mile").click(function() {
        $( "#explore-Low-Access-Numbers-People-1-Mile" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Low-Access-Numbers-People-1_2-Mile").click(function() {
        $( "#explore-Low-Access-Numbers-People-1_2-Mile" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Low-Access-Numbers-People-10-Miles").click(function() {
        $( "#explore-Low-Access-Numbers-People-10-Miles" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Low-Access-Numbers-People-20-Miles").click(function() {
        $( "#explore-Low-Access-Numbers-People-20-Miles" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Low-Access-Numbers-Seniors' title='Dictionary (4 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"1 Mile"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>4393.0</code>
             
                
             </td> 
             <td>Seniors population count beyond 1 mile from supermarket</td> </tr>
        
        <tr> <td><code>"1/2 Mile"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>5935.0</code>
             
                
             </td> 
             <td>Seniors population count beyond 1/2 mile from supermarket</td> </tr>
        
        <tr> <td><code>"10 Miles"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>707.0</code>
             
                
             </td> 
             <td>Seniors population count beyond 10 miles from supermarket</td> </tr>
        
        <tr> <td><code>"20 Miles"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>0.0</code>
             
                
             </td> 
             <td>Seniors population count beyond 20 miles from supermarket</td> </tr>
        
    </table>
</div>

    

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Low-Access-Numbers-Seniors" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Low-Access-Numbers-Seniors-1-Mile").click(function() {
        $( "#explore-Low-Access-Numbers-Seniors-1-Mile" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Low-Access-Numbers-Seniors-1_2-Mile").click(function() {
        $( "#explore-Low-Access-Numbers-Seniors-1_2-Mile" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Low-Access-Numbers-Seniors-10-Miles").click(function() {
        $( "#explore-Low-Access-Numbers-Seniors-10-Miles" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Low-Access-Numbers-Seniors-20-Miles").click(function() {
        $( "#explore-Low-Access-Numbers-Seniors-20-Miles" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>


# Downloads

Download all of the following files.

1. <a href='../../datasets/python/food_access/food_access.py' download>food_access.py <span class="fas fa-download"></span></a>
2. <a href='../../datasets/python/food_access/food_access.data' download>food_access.data <span class="fas fa-download"></span></a>

# Usage

```python
import food_access
record = food_access.get_record()
```

# Documentation

<dl>
    <dt><span>get_record()</span></dt>
    <dd>Returns a list of dictionaries representing record.</dd>
</dl>