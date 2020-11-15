---
permalink: /python/energy/
style: dataset
---



<img class="img-thumbnail float-right"
     src="/images/datasets/energy-icon.png"
     alt="energy icon"
     role="presentation">

# Energy Python Library

<p class='lead'>From the CORGIS Dataset Project</p>

<span class='text-muted'>By Austin Cory Bart <acbart@vt.edu></span><br>
<span class='text-muted'>Version 2.0.0, created 11/1/2015</span><br>
<span class='text-muted'>Tags: energy, renewable, united states, us, nuclear, fossil fuels, power</span>

# Overview

United States Government reports on consumption, production, expenditures, and prices of various fuel sources. This data comes from the US Energy Information Administration, which has historical data from 1960 to 2014. Information was not always available, in which case 0 was reported instead. In some cases, very tiny values were rounded down to zero.



<http://www.eia.gov/tools/faqs/>




# Explore Structure

Each row represents *$MISSING_FIELD*.



<button type='button'
        class='btn btn-info'
        id='btn-explore'>Explore energy data</button>

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
        
        <tr> <td><code>"State"</code></td>
             <td><span data-toggle="tooltip"
                       title='String (text)'>
                       str</span></td> 
             <td>
             
                <code>"Utah"</code>
             
                
             </td> 
             <td>The state that this report was made for.</td> </tr>
        
        <tr> <td><code>"Year"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>1960</code>
             
                
             </td> 
             <td>The year that this report was made.</td> </tr>
        
        <tr> <td><code>"Production"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Production'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Consumption"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Consumption'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Expenditure"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Expenditure'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Price"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Price'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
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
        
    
    $("#btn-explore-Production").click(function() {
        $( "#explore-Production" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Consumption").click(function() {
        $( "#explore-Consumption" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Expenditure").click(function() {
        $( "#explore-Expenditure" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Price").click(function() {
        $( "#explore-Price" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Production' title='Dictionary (1 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Coal"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>114689.0</code>
             
                
             </td> 
             <td>Coal production in billion BTU. Unfortunately, the other energy sources produced by the United States (including Natural Gas and Petroleum) could not be incorporated.</td> </tr>
        
    </table>
</div>

    

<script>
$(document).ready(function() {
    $( "#explore-Production" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Production-Coal").click(function() {
        $( "#explore-Production-Coal" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Consumption' title='Dictionary (6 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Commercial"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Consumption-Commercial'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Electric Power"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Consumption-Electric-Power'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Industrial"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Consumption-Industrial'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Refinery"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Consumption-Refinery'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Residential"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Consumption-Residential'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Transportation"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Consumption-Transportation'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
    </table>
</div>

    

    

    

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Consumption" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Consumption-Commercial").click(function() {
        $( "#explore-Consumption-Commercial" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Consumption-Electric-Power").click(function() {
        $( "#explore-Consumption-Electric-Power" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Consumption-Industrial").click(function() {
        $( "#explore-Consumption-Industrial" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Consumption-Refinery").click(function() {
        $( "#explore-Consumption-Refinery" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Consumption-Residential").click(function() {
        $( "#explore-Consumption-Residential" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Consumption-Transportation").click(function() {
        $( "#explore-Consumption-Transportation" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Consumption-Commercial' title='Dictionary (10 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Coal"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>2644.0</code>
             
                
             </td> 
             <td>Coal consumed by the commercial sector in billion BTU.</td> </tr>
        
        <tr> <td><code>"Distillate Fuel Oil"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>2110.0</code>
             
                
             </td> 
             <td>Distillate fuel oil consumed by the commercial sector in billion BTU.</td> </tr>
        
        <tr> <td><code>"Geothermal"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>0.0</code>
             
                
             </td> 
             <td>Geothermal energy consumed by the commercial sector in billion BTU.</td> </tr>
        
        <tr> <td><code>"Hydropower"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>0.0</code>
             
                
             </td> 
             <td>Hydropower consumed by the commercial sector in billion BTU.</td> </tr>
        
        <tr> <td><code>"Kerosene"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>33.0</code>
             
                
             </td> 
             <td>Kerosene consumed by the commercial sector in billion BTU.</td> </tr>
        
        <tr> <td><code>"Liquefied Petroleum Gases"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>450.0</code>
             
                
             </td> 
             <td>LPG consumed by the commercial sector in billion BTU.</td> </tr>
        
        <tr> <td><code>"Natural Gas"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>10482.0</code>
             
                
             </td> 
             <td>Natural gas consumed by (delivered to) the commercial sector (including supplemental gaseous fuels) in billion BTU.</td> </tr>
        
        <tr> <td><code>"Solar"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>0.0</code>
             
                
             </td> 
             <td>Photovoltaic and solar thermal energy consumed by the commercial sector (except portion included in SOHCB) in billion BTU.</td> </tr>
        
        <tr> <td><code>"Wind"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>0.0</code>
             
                
             </td> 
             <td>Wind energy consumed by the commercial sector in billion BTU.</td> </tr>
        
        <tr> <td><code>"Wood"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>35.0</code>
             
                
             </td> 
             <td>Wood consumed by the commercial sector in billion BTU.</td> </tr>
        
    </table>
</div>

    

    

    

    

    

    

    

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Consumption-Commercial" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Consumption-Commercial-Coal").click(function() {
        $( "#explore-Consumption-Commercial-Coal" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Consumption-Commercial-Distillate-Fuel-Oil").click(function() {
        $( "#explore-Consumption-Commercial-Distillate-Fuel-Oil" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Consumption-Commercial-Geothermal").click(function() {
        $( "#explore-Consumption-Commercial-Geothermal" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Consumption-Commercial-Hydropower").click(function() {
        $( "#explore-Consumption-Commercial-Hydropower" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Consumption-Commercial-Kerosene").click(function() {
        $( "#explore-Consumption-Commercial-Kerosene" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Consumption-Commercial-Liquefied-Petroleum-Gases").click(function() {
        $( "#explore-Consumption-Commercial-Liquefied-Petroleum-Gases" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Consumption-Commercial-Natural-Gas").click(function() {
        $( "#explore-Consumption-Commercial-Natural-Gas" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Consumption-Commercial-Solar").click(function() {
        $( "#explore-Consumption-Commercial-Solar" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Consumption-Commercial-Wind").click(function() {
        $( "#explore-Consumption-Commercial-Wind" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Consumption-Commercial-Wood").click(function() {
        $( "#explore-Consumption-Commercial-Wood" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Consumption-Electric-Power' title='Dictionary (4 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Coal"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>12840.0</code>
             
                
             </td> 
             <td>Coal consumed by the electric power sector in billion BTU.</td> </tr>
        
        <tr> <td><code>"Distillate Fuel Oil"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>67.0</code>
             
                
             </td> 
             <td>Distillate fuel oil consumed by the electrical power sector in billion BTU.</td> </tr>
        
        <tr> <td><code>"Natural Gas"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>3806.0</code>
             
                
             </td> 
             <td>Natural gas consumed by the electric power sector (including supplemental gaseous fuels) in billion BTU.</td> </tr>
        
        <tr> <td><code>"Wood"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>0.0</code>
             
                
             </td> 
             <td>Wood and waste consumed by the electric power sector in billion BTU.</td> </tr>
        
    </table>
</div>

    

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Consumption-Electric-Power" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Consumption-Electric-Power-Coal").click(function() {
        $( "#explore-Consumption-Electric-Power-Coal" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Consumption-Electric-Power-Distillate-Fuel-Oil").click(function() {
        $( "#explore-Consumption-Electric-Power-Distillate-Fuel-Oil" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Consumption-Electric-Power-Natural-Gas").click(function() {
        $( "#explore-Consumption-Electric-Power-Natural-Gas" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Consumption-Electric-Power-Wood").click(function() {
        $( "#explore-Consumption-Electric-Power-Wood" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Consumption-Industrial' title='Dictionary (11 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Coal"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>70489.0</code>
             
                
             </td> 
             <td>Coal consumed by the industrial sector in billion BTU.</td> </tr>
        
        <tr> <td><code>"Distillate Fuel Oil"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>5768.0</code>
             
                
             </td> 
             <td>Distillate fuel oil consumed by the industrial sector in billion BTU.</td> </tr>
        
        <tr> <td><code>"Geothermal"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>0.0</code>
             
                
             </td> 
             <td>Geothermal energy consumed by the industrial sector in billion BTU.</td> </tr>
        
        <tr> <td><code>"Hydropower"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>2.0</code>
             
                
             </td> 
             <td>Hydropower consumed by the industrial sector in billion BTU.</td> </tr>
        
        <tr> <td><code>"Kerosene"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>167.0</code>
             
                
             </td> 
             <td>Kerosene consumed by the industrial sector in billion BTU.</td> </tr>
        
        <tr> <td><code>"Liquefied Petroleum Gases"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>515.0</code>
             
                
             </td> 
             <td>LPG consumed by the industrial sector in billion BTU.</td> </tr>
        
        <tr> <td><code>"Natural Gas"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>34662.0</code>
             
                
             </td> 
             <td>Natural gas consumed by (delivered to) the industrial sector (including supplemental gaseous fuels) in billion BTU.</td> </tr>
        
        <tr> <td><code>"Other Petroleum Products"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>11571.0</code>
             
                
             </td> 
             <td>Other petroleum products consumed by the industrial sector in billion BTU.</td> </tr>
        
        <tr> <td><code>"Solar"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>0.0</code>
             
                
             </td> 
             <td>Photovoltaic and solar thermal energy consumed by the industrial sector (except portion included in SOHCB) in billion BTU.</td> </tr>
        
        <tr> <td><code>"Wind"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>0.0</code>
             
                
             </td> 
             <td>Wind energy consumed by the industrial sector in billion BTU.</td> </tr>
        
        <tr> <td><code>"Wood"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>344.0</code>
             
                
             </td> 
             <td>Wood and waste consumed in the industrial sector, total, in billion BTU.</td> </tr>
        
    </table>
</div>

    

    

    

    

    

    

    

    

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Consumption-Industrial" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Consumption-Industrial-Coal").click(function() {
        $( "#explore-Consumption-Industrial-Coal" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Consumption-Industrial-Distillate-Fuel-Oil").click(function() {
        $( "#explore-Consumption-Industrial-Distillate-Fuel-Oil" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Consumption-Industrial-Geothermal").click(function() {
        $( "#explore-Consumption-Industrial-Geothermal" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Consumption-Industrial-Hydropower").click(function() {
        $( "#explore-Consumption-Industrial-Hydropower" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Consumption-Industrial-Kerosene").click(function() {
        $( "#explore-Consumption-Industrial-Kerosene" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Consumption-Industrial-Liquefied-Petroleum-Gases").click(function() {
        $( "#explore-Consumption-Industrial-Liquefied-Petroleum-Gases" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Consumption-Industrial-Natural-Gas").click(function() {
        $( "#explore-Consumption-Industrial-Natural-Gas" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Consumption-Industrial-Other-Petroleum-Products").click(function() {
        $( "#explore-Consumption-Industrial-Other-Petroleum-Products" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Consumption-Industrial-Solar").click(function() {
        $( "#explore-Consumption-Industrial-Solar" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Consumption-Industrial-Wind").click(function() {
        $( "#explore-Consumption-Industrial-Wind" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Consumption-Industrial-Wood").click(function() {
        $( "#explore-Consumption-Industrial-Wood" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Consumption-Refinery' title='Dictionary (4 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Coal"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>0.0</code>
             
                
             </td> 
             <td>Coal consumed as refinery fuel in billion BTU.</td> </tr>
        
        <tr> <td><code>"Distillate Fuel Oil"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>0.0</code>
             
                
             </td> 
             <td>Distillate fuel oil consumed as refinery fuel in billion BTU.</td> </tr>
        
        <tr> <td><code>"Liquefied Petroleum Gases"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>0.0</code>
             
                
             </td> 
             <td>LPG consumed as refinery fuel in billion BTU.</td> </tr>
        
        <tr> <td><code>"Natural Gas"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>0.0</code>
             
                
             </td> 
             <td>Natural gas consumed as refinery fuel (including supplemental gaseous fuels) in billion BTU.</td> </tr>
        
    </table>
</div>

    

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Consumption-Refinery" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Consumption-Refinery-Coal").click(function() {
        $( "#explore-Consumption-Refinery-Coal" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Consumption-Refinery-Distillate-Fuel-Oil").click(function() {
        $( "#explore-Consumption-Refinery-Distillate-Fuel-Oil" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Consumption-Refinery-Liquefied-Petroleum-Gases").click(function() {
        $( "#explore-Consumption-Refinery-Liquefied-Petroleum-Gases" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Consumption-Refinery-Natural-Gas").click(function() {
        $( "#explore-Consumption-Refinery-Natural-Gas" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Consumption-Residential' title='Dictionary (7 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Coal"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>3805.0</code>
             
                
             </td> 
             <td>Coal consumed by the residential sector in billion BTU.</td> </tr>
        
        <tr> <td><code>"Distillate Fuel Oil"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>580.0</code>
             
                
             </td> 
             <td>Distillate fuel oil consumed by the residential sector in billion BTU.</td> </tr>
        
        <tr> <td><code>"Geothermal"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>0.0</code>
             
                
             </td> 
             <td>Geothermal energy consumed by the residential sector in billion BTU.</td> </tr>
        
        <tr> <td><code>"Kerosene"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>5.0</code>
             
                
             </td> 
             <td>Kerosene consumed by the residential sector in billion BTU.</td> </tr>
        
        <tr> <td><code>"Liquefied Petroleum Gases"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>673.0</code>
             
                
             </td> 
             <td>LPG consumed by the residential sector in billion BTU.</td> </tr>
        
        <tr> <td><code>"Natural Gas"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>23398.0</code>
             
                
             </td> 
             <td>Natural gas consumed by (delivered to) the residential sector (including supplemental gaseous fuels) in billion BTU.</td> </tr>
        
        <tr> <td><code>"Wood"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>1840.0</code>
             
                
             </td> 
             <td>Wood consumed by the residential sector in billion BTU.</td> </tr>
        
    </table>
</div>

    

    

    

    

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Consumption-Residential" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Consumption-Residential-Coal").click(function() {
        $( "#explore-Consumption-Residential-Coal" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Consumption-Residential-Distillate-Fuel-Oil").click(function() {
        $( "#explore-Consumption-Residential-Distillate-Fuel-Oil" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Consumption-Residential-Geothermal").click(function() {
        $( "#explore-Consumption-Residential-Geothermal" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Consumption-Residential-Kerosene").click(function() {
        $( "#explore-Consumption-Residential-Kerosene" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Consumption-Residential-Liquefied-Petroleum-Gases").click(function() {
        $( "#explore-Consumption-Residential-Liquefied-Petroleum-Gases" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Consumption-Residential-Natural-Gas").click(function() {
        $( "#explore-Consumption-Residential-Natural-Gas" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Consumption-Residential-Wood").click(function() {
        $( "#explore-Consumption-Residential-Wood" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Consumption-Transportation' title='Dictionary (4 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Coal"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>1188.0</code>
             
                
             </td> 
             <td>Coal consumed by the transportation sector in billion BTU.</td> </tr>
        
        <tr> <td><code>"Distillate Fuel Oil"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>13466.0</code>
             
                
             </td> 
             <td>Distillate fuel oil consumed by the transportation sector in billion BTU.</td> </tr>
        
        <tr> <td><code>"Liquefied Petroleum Gases"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>134.0</code>
             
                
             </td> 
             <td>LPG consumed by the transportation sector in billion BTU.</td> </tr>
        
        <tr> <td><code>"Natural Gas"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>92.0</code>
             
                
             </td> 
             <td>Natural gas consumed by the transportation sector in billion BTU.</td> </tr>
        
    </table>
</div>

    

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Consumption-Transportation" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Consumption-Transportation-Coal").click(function() {
        $( "#explore-Consumption-Transportation-Coal" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Consumption-Transportation-Distillate-Fuel-Oil").click(function() {
        $( "#explore-Consumption-Transportation-Distillate-Fuel-Oil" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Consumption-Transportation-Liquefied-Petroleum-Gases").click(function() {
        $( "#explore-Consumption-Transportation-Liquefied-Petroleum-Gases" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Consumption-Transportation-Natural-Gas").click(function() {
        $( "#explore-Consumption-Transportation-Natural-Gas" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Expenditure' title='Dictionary (5 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Commercial"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Expenditure-Commercial'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Electric Power"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Expenditure-Electric-Power'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Industrial"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Expenditure-Industrial'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Residential"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Expenditure-Residential'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Transportation"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Expenditure-Transportation'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
    </table>
</div>

    

    

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Expenditure" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Expenditure-Commercial").click(function() {
        $( "#explore-Expenditure-Commercial" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Expenditure-Electric-Power").click(function() {
        $( "#explore-Expenditure-Electric-Power" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Expenditure-Industrial").click(function() {
        $( "#explore-Expenditure-Industrial" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Expenditure-Residential").click(function() {
        $( "#explore-Expenditure-Residential" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Expenditure-Transportation").click(function() {
        $( "#explore-Expenditure-Transportation" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Expenditure-Commercial' title='Dictionary (5 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Coal"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>0.0</code>
             
                
             </td> 
             <td>Coal expenditures in the industrial sector in million dollars.</td> </tr>
        
        <tr> <td><code>"Distillate Fuel Oil"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>0.0</code>
             
                
             </td> 
             <td>Distillate fuel oil expenditures in the industrial sector in million dollars.</td> </tr>
        
        <tr> <td><code>"Kerosene"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>0.0</code>
             
                
             </td> 
             <td>Kerosene expenditures in the industrial sector in million dollars.</td> </tr>
        
        <tr> <td><code>"Liquefied Petroleum Gases"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>0.0</code>
             
                
             </td> 
             <td>LPG expenditures in the industrial sector in million dollars.</td> </tr>
        
        <tr> <td><code>"Natural Gas"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>0.0</code>
             
                
             </td> 
             <td>Natural gas expenditures in the industrial sector (including supplemental gaseous fuels) in million dollars.</td> </tr>
        
    </table>
</div>

    

    

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Expenditure-Commercial" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Expenditure-Commercial-Coal").click(function() {
        $( "#explore-Expenditure-Commercial-Coal" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Expenditure-Commercial-Distillate-Fuel-Oil").click(function() {
        $( "#explore-Expenditure-Commercial-Distillate-Fuel-Oil" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Expenditure-Commercial-Kerosene").click(function() {
        $( "#explore-Expenditure-Commercial-Kerosene" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Expenditure-Commercial-Liquefied-Petroleum-Gases").click(function() {
        $( "#explore-Expenditure-Commercial-Liquefied-Petroleum-Gases" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Expenditure-Commercial-Natural-Gas").click(function() {
        $( "#explore-Expenditure-Commercial-Natural-Gas" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Expenditure-Electric-Power' title='Dictionary (3 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Coal"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>0.0</code>
             
                
             </td> 
             <td>Coal expenditures in the electric power sector in million dollars.</td> </tr>
        
        <tr> <td><code>"Distillate Fuel Oil"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>0.0</code>
             
                
             </td> 
             <td>Distillate fuel oil expenditures in the electric power sector in million dollars.</td> </tr>
        
        <tr> <td><code>"Natural Gas"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>0.0</code>
             
                
             </td> 
             <td>Natural gas expenditures in the electric power sector (including supplemental gaseous fuels) in million dollars.</td> </tr>
        
    </table>
</div>

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Expenditure-Electric-Power" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Expenditure-Electric-Power-Coal").click(function() {
        $( "#explore-Expenditure-Electric-Power-Coal" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Expenditure-Electric-Power-Distillate-Fuel-Oil").click(function() {
        $( "#explore-Expenditure-Electric-Power-Distillate-Fuel-Oil" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Expenditure-Electric-Power-Natural-Gas").click(function() {
        $( "#explore-Expenditure-Electric-Power-Natural-Gas" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Expenditure-Industrial' title='Dictionary (6 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Coal"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>0.0</code>
             
                
             </td> 
             <td>Coal expenditures in the industrial sector in million dollars.</td> </tr>
        
        <tr> <td><code>"Distillate Fuel Oil"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>0.0</code>
             
                
             </td> 
             <td>Distillate fuel oil expenditures in the industrial sector in million dollars.</td> </tr>
        
        <tr> <td><code>"Kerosene"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>0.0</code>
             
                
             </td> 
             <td>Kerosene expenditures in the industrial sector in million dollars.</td> </tr>
        
        <tr> <td><code>"Liquefied Petroleum Gases"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>0.0</code>
             
                
             </td> 
             <td>LPG expenditures in the industrial sector in million dollars.</td> </tr>
        
        <tr> <td><code>"Natural Gas"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>0.0</code>
             
                
             </td> 
             <td>Natural gas expenditures in the industrial sector (including supplemental gaseous fuels) in million dollars.</td> </tr>
        
        <tr> <td><code>"Other Petroleum Products"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>0.0</code>
             
                
             </td> 
             <td>Other petroleum products total expenditures in the industrial sector in million dollars.</td> </tr>
        
    </table>
</div>

    

    

    

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Expenditure-Industrial" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Expenditure-Industrial-Coal").click(function() {
        $( "#explore-Expenditure-Industrial-Coal" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Expenditure-Industrial-Distillate-Fuel-Oil").click(function() {
        $( "#explore-Expenditure-Industrial-Distillate-Fuel-Oil" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Expenditure-Industrial-Kerosene").click(function() {
        $( "#explore-Expenditure-Industrial-Kerosene" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Expenditure-Industrial-Liquefied-Petroleum-Gases").click(function() {
        $( "#explore-Expenditure-Industrial-Liquefied-Petroleum-Gases" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Expenditure-Industrial-Natural-Gas").click(function() {
        $( "#explore-Expenditure-Industrial-Natural-Gas" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Expenditure-Industrial-Other-Petroleum-Products").click(function() {
        $( "#explore-Expenditure-Industrial-Other-Petroleum-Products" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Expenditure-Residential' title='Dictionary (6 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Coal"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>0.0</code>
             
                
             </td> 
             <td>Coal expenditures in the residential sector in million dollars.</td> </tr>
        
        <tr> <td><code>"Distillate Fuel Oil"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>0.0</code>
             
                
             </td> 
             <td>Distillate fuel oil expenditures in the residential sector in million dollars.</td> </tr>
        
        <tr> <td><code>"Kerosene"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>0.0</code>
             
                
             </td> 
             <td>Kerosene expenditures in the residential sector in million dollars.</td> </tr>
        
        <tr> <td><code>"Liquefied Petroleum Gases"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>0.0</code>
             
                
             </td> 
             <td>LPG expenditures in the residential sector in million dollars.</td> </tr>
        
        <tr> <td><code>"Natural Gas"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>0.0</code>
             
                
             </td> 
             <td>Natural gas expenditures in the residential sector (including supplemental gaseous fuels) in million dollars.</td> </tr>
        
        <tr> <td><code>"Wood"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>0.0</code>
             
                
             </td> 
             <td>Wood expenditures in the residential sector in million dollars.</td> </tr>
        
    </table>
</div>

    

    

    

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Expenditure-Residential" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Expenditure-Residential-Coal").click(function() {
        $( "#explore-Expenditure-Residential-Coal" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Expenditure-Residential-Distillate-Fuel-Oil").click(function() {
        $( "#explore-Expenditure-Residential-Distillate-Fuel-Oil" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Expenditure-Residential-Kerosene").click(function() {
        $( "#explore-Expenditure-Residential-Kerosene" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Expenditure-Residential-Liquefied-Petroleum-Gases").click(function() {
        $( "#explore-Expenditure-Residential-Liquefied-Petroleum-Gases" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Expenditure-Residential-Natural-Gas").click(function() {
        $( "#explore-Expenditure-Residential-Natural-Gas" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Expenditure-Residential-Wood").click(function() {
        $( "#explore-Expenditure-Residential-Wood" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Expenditure-Transportation' title='Dictionary (4 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Coal"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>0.0</code>
             
                
             </td> 
             <td>Coal expenditures in the transportation sector in million dollars.</td> </tr>
        
        <tr> <td><code>"Distillate Fuel Oil"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>0.0</code>
             
                
             </td> 
             <td>Distillate fuel oil expenditures in the transportation sector in million dollars.</td> </tr>
        
        <tr> <td><code>"Liquefied Petroleum Gases"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>0.0</code>
             
                
             </td> 
             <td>LPG expenditures in the transportation sector in million dollars.</td> </tr>
        
        <tr> <td><code>"Natural Gas"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>0.0</code>
             
                
             </td> 
             <td>Natural gas expenditures in the transportation sector in million dollars.</td> </tr>
        
    </table>
</div>

    

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Expenditure-Transportation" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Expenditure-Transportation-Coal").click(function() {
        $( "#explore-Expenditure-Transportation-Coal" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Expenditure-Transportation-Distillate-Fuel-Oil").click(function() {
        $( "#explore-Expenditure-Transportation-Distillate-Fuel-Oil" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Expenditure-Transportation-Liquefied-Petroleum-Gases").click(function() {
        $( "#explore-Expenditure-Transportation-Liquefied-Petroleum-Gases" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Expenditure-Transportation-Natural-Gas").click(function() {
        $( "#explore-Expenditure-Transportation-Natural-Gas" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Price' title='Dictionary (4 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Commercial"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Price-Commercial'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Electric Power"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Price-Electric-Power'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Industrial"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Price-Industrial'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Transportation"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Price-Transportation'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
    </table>
</div>

    

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Price" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Price-Commercial").click(function() {
        $( "#explore-Price-Commercial" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Price-Electric-Power").click(function() {
        $( "#explore-Price-Electric-Power" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Price-Industrial").click(function() {
        $( "#explore-Price-Industrial" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Price-Transportation").click(function() {
        $( "#explore-Price-Transportation" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Price-Commercial' title='Dictionary (5 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Coal"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>0.0</code>
             
                
             </td> 
             <td>Coal price in the commercial sector in dollars per million BTU.</td> </tr>
        
        <tr> <td><code>"Distillate Fuel Oil"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>0.0</code>
             
                
             </td> 
             <td>Distillate fuel oil price in the commercial sector in dollars per million BTU.</td> </tr>
        
        <tr> <td><code>"Kerosene"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>0.0</code>
             
                
             </td> 
             <td>Kerosene price in the commercial sector in dollars per million BTU.</td> </tr>
        
        <tr> <td><code>"Liquefied Petroleum Gases"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>0.0</code>
             
                
             </td> 
             <td>LPG price in the commercial sector in dollars per million BTU.</td> </tr>
        
        <tr> <td><code>"Natural Gas"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>0.0</code>
             
                
             </td> 
             <td>Natural gas price in the commercial sector (including supplemental gaseous fuels) in dollars per million BTU.</td> </tr>
        
    </table>
</div>

    

    

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Price-Commercial" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Price-Commercial-Coal").click(function() {
        $( "#explore-Price-Commercial-Coal" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Price-Commercial-Distillate-Fuel-Oil").click(function() {
        $( "#explore-Price-Commercial-Distillate-Fuel-Oil" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Price-Commercial-Kerosene").click(function() {
        $( "#explore-Price-Commercial-Kerosene" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Price-Commercial-Liquefied-Petroleum-Gases").click(function() {
        $( "#explore-Price-Commercial-Liquefied-Petroleum-Gases" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Price-Commercial-Natural-Gas").click(function() {
        $( "#explore-Price-Commercial-Natural-Gas" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Price-Electric-Power' title='Dictionary (3 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Coal"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>0.0</code>
             
                
             </td> 
             <td>Coal price in the electric power sector in dollars per million BTU.</td> </tr>
        
        <tr> <td><code>"Distillate Fuel Oil"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>0.0</code>
             
                
             </td> 
             <td>Distillate fuel oil price in the electric power sector in dollars per million BTU.</td> </tr>
        
        <tr> <td><code>"Natural Gas"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>0.0</code>
             
                
             </td> 
             <td>Natural gas price in the electric power sector (including supplemental gaseous fuels) in dollars per million BTU.</td> </tr>
        
    </table>
</div>

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Price-Electric-Power" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Price-Electric-Power-Coal").click(function() {
        $( "#explore-Price-Electric-Power-Coal" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Price-Electric-Power-Distillate-Fuel-Oil").click(function() {
        $( "#explore-Price-Electric-Power-Distillate-Fuel-Oil" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Price-Electric-Power-Natural-Gas").click(function() {
        $( "#explore-Price-Electric-Power-Natural-Gas" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Price-Industrial' title='Dictionary (6 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Coal"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>0.0</code>
             
                
             </td> 
             <td>Coal price in the industrial sector in dollars per million BTU.</td> </tr>
        
        <tr> <td><code>"Distillate Fuel Oil"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>0.0</code>
             
                
             </td> 
             <td>Distillate fuel oil price in the industrial sector in dollars per million BTU.</td> </tr>
        
        <tr> <td><code>"Kerosene"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>0.0</code>
             
                
             </td> 
             <td>Kerosene price in the industrial sector in dollars per million BTU.</td> </tr>
        
        <tr> <td><code>"Liquefied Petroleum Gases"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>0.0</code>
             
                
             </td> 
             <td>LPG price in the industrial sector in dollars per million BTU.</td> </tr>
        
        <tr> <td><code>"Natural Gas"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>0.0</code>
             
                
             </td> 
             <td>Natural gas price in the industrial sector (including supplemental gaseous fuels) in dollars per million BTU.</td> </tr>
        
        <tr> <td><code>"Other Petroleum Products"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>0.0</code>
             
                
             </td> 
             <td>Other petroleum products average price in the industrial sector in dollars per million BTU.</td> </tr>
        
    </table>
</div>

    

    

    

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Price-Industrial" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Price-Industrial-Coal").click(function() {
        $( "#explore-Price-Industrial-Coal" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Price-Industrial-Distillate-Fuel-Oil").click(function() {
        $( "#explore-Price-Industrial-Distillate-Fuel-Oil" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Price-Industrial-Kerosene").click(function() {
        $( "#explore-Price-Industrial-Kerosene" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Price-Industrial-Liquefied-Petroleum-Gases").click(function() {
        $( "#explore-Price-Industrial-Liquefied-Petroleum-Gases" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Price-Industrial-Natural-Gas").click(function() {
        $( "#explore-Price-Industrial-Natural-Gas" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Price-Industrial-Other-Petroleum-Products").click(function() {
        $( "#explore-Price-Industrial-Other-Petroleum-Products" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Price-Transportation' title='Dictionary (4 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Coal"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>0.0</code>
             
                
             </td> 
             <td>Coal price in the transportation sector in dollars per million BTU.</td> </tr>
        
        <tr> <td><code>"Distillate Fuel Oil"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>0.0</code>
             
                
             </td> 
             <td>Distillate fuel oil price in the transportation sector in dollars per million BTU.</td> </tr>
        
        <tr> <td><code>"Liquefied Petroleum Gases"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>0.0</code>
             
                
             </td> 
             <td>LPG price in the transportation sector in dollars per million BTU.</td> </tr>
        
        <tr> <td><code>"Natural Gas"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>0.0</code>
             
                
             </td> 
             <td>Natural gas price in the transportation sector in dollars per million BTU.</td> </tr>
        
    </table>
</div>

    

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Price-Transportation" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Price-Transportation-Coal").click(function() {
        $( "#explore-Price-Transportation-Coal" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Price-Transportation-Distillate-Fuel-Oil").click(function() {
        $( "#explore-Price-Transportation-Distillate-Fuel-Oil" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Price-Transportation-Liquefied-Petroleum-Gases").click(function() {
        $( "#explore-Price-Transportation-Liquefied-Petroleum-Gases" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Price-Transportation-Natural-Gas").click(function() {
        $( "#explore-Price-Transportation-Natural-Gas" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>


# Downloads

Download all of the following files.

1. <a href='../../datasets/python/energy/energy.py' download>energy.py <span class="fas fa-download"></span></a>
2. <a href='../../datasets/python/energy/energy.data' download>energy.data <span class="fas fa-download"></span></a>

# Usage

```python
import energy
report = energy.get_report()
```

# Documentation

<dl>
    <dt><span>get_report()</span></dt>
    <dd>Returns a list of dictionaries representing report.</dd>
</dl>