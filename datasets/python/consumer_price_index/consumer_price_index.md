---
permalink: /python/consumer_price_index/
style: dataset
---



<img class="img-thumbnail float-right"
     src="/images/datasets/consumer-price-index-icon.png"
     alt="consumer price index icon"
     role="presentation">

# Consumer Price Index Python Library

<p class='lead'>From the CORGIS Dataset Project</p>

<span class='text-muted'>By Sam Donald</span><br>
<span class='text-muted'>Version 1.0.1, created 9/27/2022</span><br>
<span class='text-muted'>Tags: consumer goods, price trends</span>

# Overview

Data related to USA consumer price index from 1900 onwards (normalized to 1900)


<https://github.com/owid/owid-datasets/tree/master/datasets>




# Explore Structure

Each row represents *Yearly report of normalized prices*.



<button type='button'
        class='btn btn-info'
        id='btn-explore'>Explore consumer price index data</button>

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
        
        <tr> <td><code>"Year"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>1900</code>
             
                
             </td> 
             <td>Year</td> </tr>
        
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

<div id='explore-Data' title='Dictionary (5 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Meat"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Data-Meat'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Fuel"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Data-Fuel'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Grain"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Data-Grain'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Metal"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Data-Metal'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Plant extract"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Data-Plant-extract'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
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
    
    $("#btn-explore-Data-Meat").click(function() {
        $( "#explore-Data-Meat" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Data-Fuel").click(function() {
        $( "#explore-Data-Fuel" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Data-Grain").click(function() {
        $( "#explore-Data-Grain" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Data-Metal").click(function() {
        $( "#explore-Data-Metal" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Data-Plant-extract").click(function() {
        $( "#explore-Data-Plant-extract" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Data-Meat' title='Dictionary (4 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Beef"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>100.0</code>
             
                
             </td> 
             <td>Normalized price of good based on 1900 price</td> </tr>
        
        <tr> <td><code>"Lamb"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>100.0</code>
             
                
             </td> 
             <td>Normalized price of good based on 1900 price</td> </tr>
        
        <tr> <td><code>"Pork"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>100.0</code>
             
                
             </td> 
             <td>Normalized price of good based on 1900 price</td> </tr>
        
        <tr> <td><code>"Average"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>100.0</code>
             
                
             </td> 
             <td>Average normalized price of good based on 1900 price</td> </tr>
        
    </table>
</div>

    

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Data-Meat" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Data-Meat-Beef").click(function() {
        $( "#explore-Data-Meat-Beef" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Data-Meat-Lamb").click(function() {
        $( "#explore-Data-Meat-Lamb" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Data-Meat-Pork").click(function() {
        $( "#explore-Data-Meat-Pork" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Data-Meat-Average").click(function() {
        $( "#explore-Data-Meat-Average" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Data-Fuel' title='Dictionary (4 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Coal"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>100.0</code>
             
                
             </td> 
             <td>Normalized price of good based on 1900 price</td> </tr>
        
        <tr> <td><code>"Natural gas"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>100.0</code>
             
                
             </td> 
             <td>Normalized price of good based on 1900 price</td> </tr>
        
        <tr> <td><code>"Petroleum"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>100.0</code>
             
                
             </td> 
             <td>Normalized price of good based on 1900 price</td> </tr>
        
        <tr> <td><code>"Average"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>100.0</code>
             
                
             </td> 
             <td>Average normalized price of good based on 1900 price</td> </tr>
        
    </table>
</div>

    

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Data-Fuel" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Data-Fuel-Coal").click(function() {
        $( "#explore-Data-Fuel-Coal" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Data-Fuel-Natural-gas").click(function() {
        $( "#explore-Data-Fuel-Natural-gas" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Data-Fuel-Petroleum").click(function() {
        $( "#explore-Data-Fuel-Petroleum" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Data-Fuel-Average").click(function() {
        $( "#explore-Data-Fuel-Average" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Data-Grain' title='Dictionary (5 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Corn"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>100.0</code>
             
                
             </td> 
             <td>Normalized price of good based on 1900 price</td> </tr>
        
        <tr> <td><code>"Rice"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>100.0</code>
             
                
             </td> 
             <td>Normalized price of good based on 1900 price</td> </tr>
        
        <tr> <td><code>"Rye"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>100.0</code>
             
                
             </td> 
             <td>Normalized price of good based on 1900 price</td> </tr>
        
        <tr> <td><code>"Wheat"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>100.0</code>
             
                
             </td> 
             <td>Normalized price of good based on 1900 price</td> </tr>
        
        <tr> <td><code>"Average"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>100.0</code>
             
                
             </td> 
             <td>Average normalized price of good based on 1900 price</td> </tr>
        
    </table>
</div>

    

    

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Data-Grain" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Data-Grain-Corn").click(function() {
        $( "#explore-Data-Grain-Corn" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Data-Grain-Rice").click(function() {
        $( "#explore-Data-Grain-Rice" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Data-Grain-Rye").click(function() {
        $( "#explore-Data-Grain-Rye" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Data-Grain-Wheat").click(function() {
        $( "#explore-Data-Grain-Wheat" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Data-Grain-Average").click(function() {
        $( "#explore-Data-Grain-Average" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Data-Metal' title='Dictionary (14 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Aluminum"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>100.0</code>
             
                
             </td> 
             <td>Normalized price of good based on 1900 price</td> </tr>
        
        <tr> <td><code>"Chromium"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>100.0</code>
             
                
             </td> 
             <td>Normalized price of good based on 1900 price</td> </tr>
        
        <tr> <td><code>"Copper"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>100.0</code>
             
                
             </td> 
             <td>Normalized price of good based on 1900 price</td> </tr>
        
        <tr> <td><code>"Lead"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>100.0</code>
             
                
             </td> 
             <td>Normalized price of good based on 1900 price</td> </tr>
        
        <tr> <td><code>"Manganese"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>100.0</code>
             
                
             </td> 
             <td>Normalized price of good based on 1900 price</td> </tr>
        
        <tr> <td><code>"Nickel"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>100.0</code>
             
                
             </td> 
             <td>Normalized price of good based on 1900 price</td> </tr>
        
        <tr> <td><code>"Steel"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>100.0</code>
             
                
             </td> 
             <td>Normalized price of good based on 1900 price</td> </tr>
        
        <tr> <td><code>"Tin"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>100.0</code>
             
                
             </td> 
             <td>Normalized price of good based on 1900 price</td> </tr>
        
        <tr> <td><code>"Zinc"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>100.0</code>
             
                
             </td> 
             <td>Normalized price of good based on 1900 price</td> </tr>
        
        <tr> <td><code>"Iron ore"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>100.0</code>
             
                
             </td> 
             <td>Normalized price of good based on 1900 price</td> </tr>
        
        <tr> <td><code>"Gold"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>100.0</code>
             
                
             </td> 
             <td>Normalized price of good based on 1900 price</td> </tr>
        
        <tr> <td><code>"Platinum"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>100.0</code>
             
                
             </td> 
             <td>Normalized price of good based on 1900 price</td> </tr>
        
        <tr> <td><code>"Silver"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>100.0</code>
             
                
             </td> 
             <td>Normalized price of good based on 1900 price</td> </tr>
        
        <tr> <td><code>"Average"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>100.0</code>
             
                
             </td> 
             <td>Average normalized price of good based on 1900 price</td> </tr>
        
    </table>
</div>

    

    

    

    

    

    

    

    

    

    

    

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Data-Metal" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Data-Metal-Aluminum").click(function() {
        $( "#explore-Data-Metal-Aluminum" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Data-Metal-Chromium").click(function() {
        $( "#explore-Data-Metal-Chromium" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Data-Metal-Copper").click(function() {
        $( "#explore-Data-Metal-Copper" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Data-Metal-Lead").click(function() {
        $( "#explore-Data-Metal-Lead" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Data-Metal-Manganese").click(function() {
        $( "#explore-Data-Metal-Manganese" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Data-Metal-Nickel").click(function() {
        $( "#explore-Data-Metal-Nickel" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Data-Metal-Steel").click(function() {
        $( "#explore-Data-Metal-Steel" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Data-Metal-Tin").click(function() {
        $( "#explore-Data-Metal-Tin" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Data-Metal-Zinc").click(function() {
        $( "#explore-Data-Metal-Zinc" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Data-Metal-Iron-ore").click(function() {
        $( "#explore-Data-Metal-Iron-ore" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Data-Metal-Gold").click(function() {
        $( "#explore-Data-Metal-Gold" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Data-Metal-Platinum").click(function() {
        $( "#explore-Data-Metal-Platinum" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Data-Metal-Silver").click(function() {
        $( "#explore-Data-Metal-Silver" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Data-Metal-Average").click(function() {
        $( "#explore-Data-Metal-Average" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Data-Plant-extract' title='Dictionary (10 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Cocoa"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>100.0</code>
             
                
             </td> 
             <td>Normalized price of good based on 1900 price</td> </tr>
        
        <tr> <td><code>"Coffee"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>100.0</code>
             
                
             </td> 
             <td>Normalized price of good based on 1900 price</td> </tr>
        
        <tr> <td><code>"Cotton"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>100.0</code>
             
                
             </td> 
             <td>Normalized price of good based on 1900 price</td> </tr>
        
        <tr> <td><code>"Cottonseed"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>100.0</code>
             
                
             </td> 
             <td>Normalized price of good based on 1900 price</td> </tr>
        
        <tr> <td><code>"Palm oil"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>100.0</code>
             
                
             </td> 
             <td>Normalized price of good based on 1900 price</td> </tr>
        
        <tr> <td><code>"Rubber"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>100.0</code>
             
                
             </td> 
             <td>Normalized price of good based on 1900 price</td> </tr>
        
        <tr> <td><code>"Sugar"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>100.0</code>
             
                
             </td> 
             <td>Normalized price of good based on 1900 price</td> </tr>
        
        <tr> <td><code>"Tea"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>100.0</code>
             
                
             </td> 
             <td>Normalized price of good based on 1900 price</td> </tr>
        
        <tr> <td><code>"Tobacco"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>100.0</code>
             
                
             </td> 
             <td>Normalized price of good based on 1900 price</td> </tr>
        
        <tr> <td><code>"Average"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>100.0</code>
             
                
             </td> 
             <td>Average normalized price of good based on 1900 price</td> </tr>
        
    </table>
</div>

    

    

    

    

    

    

    

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Data-Plant-extract" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Data-Plant-extract-Cocoa").click(function() {
        $( "#explore-Data-Plant-extract-Cocoa" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Data-Plant-extract-Coffee").click(function() {
        $( "#explore-Data-Plant-extract-Coffee" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Data-Plant-extract-Cotton").click(function() {
        $( "#explore-Data-Plant-extract-Cotton" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Data-Plant-extract-Cottonseed").click(function() {
        $( "#explore-Data-Plant-extract-Cottonseed" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Data-Plant-extract-Palm-oil").click(function() {
        $( "#explore-Data-Plant-extract-Palm-oil" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Data-Plant-extract-Rubber").click(function() {
        $( "#explore-Data-Plant-extract-Rubber" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Data-Plant-extract-Sugar").click(function() {
        $( "#explore-Data-Plant-extract-Sugar" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Data-Plant-extract-Tea").click(function() {
        $( "#explore-Data-Plant-extract-Tea" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Data-Plant-extract-Tobacco").click(function() {
        $( "#explore-Data-Plant-extract-Tobacco" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Data-Plant-extract-Average").click(function() {
        $( "#explore-Data-Plant-extract-Average" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>


# Downloads

Download all of the following files.

1. <a href='../../datasets/python/consumer_price_index/consumer_price_index.py' download>consumer_price_index.py <span class="fas fa-download"></span></a>
2. <a href='../../datasets/python/consumer_price_index/consumer_price_index.data' download>consumer_price_index.data <span class="fas fa-download"></span></a>

# Usage

```python
import consumer_price_index
report = consumer_price_index.get_report()
```

# Documentation

<dl>
    <dt><span>get_report()</span></dt>
    <dd>Returns a list of dictionaries representing Report.</dd>
</dl>