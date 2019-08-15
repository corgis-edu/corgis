---
permalink: /python/billionaires/
style: dataset
---



<img class="img-thumbnail float-right"
     src="/images/datasets/billionaires-icon.png"
     alt="billionaires icon"
     role="presentation">

# Billionaires Python Library

<p class='lead'>From the CORGIS Dataset Project</p>

<span class='text-muted'>By Ryan Whitcomb <rwhit94></span><br>
<span class='text-muted'>Version 2.0.0, created 5-17-16</span><br>
<span class='text-muted'>Tags: money, rich, wealthy, people, person, billionaire</span>

# Overview

Researchers have compiled a multi-decade database of the super-rich. Building off the Forbes World's Billionaires lists from 1996-2014, scholars at Peterson Institute for International Economics have added a couple dozen more variables about each billionaire - including whether they were self-made or inherited their wealth. (Roughly half of European billionaires and one-third of U.S. billionaires got a significant financial boost from family, the authors estimate.)


<http://www.iie.com/publications/interstitial.cfm?ResearchID=2917>




# Explore Structure

Each row represents *$MISSING_FIELD*.



<button type='button'
        class='btn btn-info'
        id='btn-explore'>Explore billionaires data</button>

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
        
        <tr> <td><code>"name"</code></td> 
             <td><span data-toggle="tooltip"
                       title='String (text)'>
                       str</span></td> 
             <td>
             
                <code>"Bill Gates"</code>
             
                
             </td> 
             <td>The name of the billionaire.</td> </tr>
        
        <tr> <td><code>"rank"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>1</code>
             
                
             </td> 
             <td>The rank of this billionaire compared to the rest of the billionaires reported on. A lower rank means they make more money.</td> </tr>
        
        <tr> <td><code>"year"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>1996</code>
             
                
             </td> 
             <td>The year that data about this billionaire was collected.</td> </tr>
        
        <tr> <td><code>"company"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-company'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"demographics"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-demographics'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
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
        
        <tr> <td><code>"wealth"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-wealth'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
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
    
    $("#btn-explore-name").click(function() {
        $( "#explore-name" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-rank").click(function() {
        $( "#explore-rank" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-year").click(function() {
        $( "#explore-year" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-company").click(function() {
        $( "#explore-company" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-demographics").click(function() {
        $( "#explore-demographics" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-location").click(function() {
        $( "#explore-location" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-wealth").click(function() {
        $( "#explore-wealth" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-company' title='Dictionary (5 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"founded"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>1975</code>
             
                
             </td> 
             <td>The year that the company was founded.</td> </tr>
        
        <tr> <td><code>"name"</code></td> 
             <td><span data-toggle="tooltip"
                       title='String (text)'>
                       str</span></td> 
             <td>
             
                <code>"Microsoft"</code>
             
                
             </td> 
             <td>The name of the company.</td> </tr>
        
        <tr> <td><code>"relationship"</code></td> 
             <td><span data-toggle="tooltip"
                       title='String (text)'>
                       str</span></td> 
             <td>
             
                <code>"founder"</code>
             
                
             </td> 
             <td>The billionaires relationship to the company.</td> </tr>
        
        <tr> <td><code>"sector"</code></td> 
             <td><span data-toggle="tooltip"
                       title='String (text)'>
                       str</span></td> 
             <td>
             
                <code>" Software"</code>
             
                
             </td> 
             <td>The sector of the business, or what segment of the economy they fit into.</td> </tr>
        
        <tr> <td><code>"type"</code></td> 
             <td><span data-toggle="tooltip"
                       title='String (text)'>
                       str</span></td> 
             <td>
             
                <code>"new"</code>
             
                
             </td> 
             <td>The type of business for this company.</td> </tr>
        
    </table>
</div>

    

    

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-company" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-company-founded").click(function() {
        $( "#explore-company-founded" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-company-name").click(function() {
        $( "#explore-company-name" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-company-relationship").click(function() {
        $( "#explore-company-relationship" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-company-sector").click(function() {
        $( "#explore-company-sector" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-company-type").click(function() {
        $( "#explore-company-type" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-demographics' title='Dictionary (2 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"age"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>40</code>
             
                
             </td> 
             <td>The current age of the billionaire. Ages that are represented as -1 stand for ages that were not available in the data that was collected.</td> </tr>
        
        <tr> <td><code>"gender"</code></td> 
             <td><span data-toggle="tooltip"
                       title='String (text)'>
                       str</span></td> 
             <td>
             
                <code>"male"</code>
             
                
             </td> 
             <td>A string representing their gender.</td> </tr>
        
    </table>
</div>

    

    

<script>
$(document).ready(function() {
    $( "#explore-demographics" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-demographics-age").click(function() {
        $( "#explore-demographics-age" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-demographics-gender").click(function() {
        $( "#explore-demographics-gender" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-location' title='Dictionary (4 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"citizenship"</code></td> 
             <td><span data-toggle="tooltip"
                       title='String (text)'>
                       str</span></td> 
             <td>
             
                <code>"United States"</code>
             
                
             </td> 
             <td>The name of the country that this billionaire has citizenship with.</td> </tr>
        
        <tr> <td><code>"country code"</code></td> 
             <td><span data-toggle="tooltip"
                       title='String (text)'>
                       str</span></td> 
             <td>
             
                <code>"USA"</code>
             
                
             </td> 
             <td>the 3-letter country code of the country where this billionaire has citizenship.</td> </tr>
        
        <tr> <td><code>"gdp"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>8100000000000.0</code>
             
                
             </td> 
             <td>The "Gross Domestic Product" of the country where the billionaire has citizenship. This is one of the primary indicators used to gauge the health of a country's economy. It represents the total dollar value of all goods and services produced over a specific time period; you can think of it as the size of the economy.</td> </tr>
        
        <tr> <td><code>"region"</code></td> 
             <td><span data-toggle="tooltip"
                       title='String (text)'>
                       str</span></td> 
             <td>
             
                <code>"North America"</code>
             
                
             </td> 
             <td>The region of the world where this billionaire lives.</td> </tr>
        
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
    
    $("#btn-explore-location-citizenship").click(function() {
        $( "#explore-location-citizenship" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-location-country-code").click(function() {
        $( "#explore-location-country-code" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-location-gdp").click(function() {
        $( "#explore-location-gdp" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-location-region").click(function() {
        $( "#explore-location-region" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-wealth' title='Dictionary (3 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"type"</code></td> 
             <td><span data-toggle="tooltip"
                       title='String (text)'>
                       str</span></td> 
             <td>
             
                <code>"founder non-finance"</code>
             
                
             </td> 
             <td>The type of billionaire that they are.</td> </tr>
        
        <tr> <td><code>"worth in billions"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>18.5</code>
             
                
             </td> 
             <td>The number of billion of dollars that this billionaire is worth.</td> </tr>
        
        <tr> <td><code>"wealth.how"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-wealth-how'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
    </table>
</div>

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-wealth" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-wealth-type").click(function() {
        $( "#explore-wealth-type" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-wealth-worth-in-billions").click(function() {
        $( "#explore-wealth-worth-in-billions" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-wealth-how").click(function() {
        $( "#explore-wealth-how" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-wealth-how' title='Dictionary (6 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"category"</code></td> 
             <td><span data-toggle="tooltip"
                       title='String (text)'>
                       str</span></td> 
             <td>
             
                <code>"New Sectors"</code>
             
                
             </td> 
             <td>A category representing where their money came from.</td> </tr>
        
        <tr> <td><code>"from emerging"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Boolean (True or False)'>
                       bool</span></td> 
             <td>
             
                <code>True</code>
             
                
             </td> 
             <td>Whether the money came from emerging markets.</td> </tr>
        
        <tr> <td><code>"industry"</code></td> 
             <td><span data-toggle="tooltip"
                       title='String (text)'>
                       str</span></td> 
             <td>
             
                <code>"Technology-Computer"</code>
             
                
             </td> 
             <td>The specific industry this billionaire profitted from.</td> </tr>
        
        <tr> <td><code>"inherited"</code></td> 
             <td><span data-toggle="tooltip"
                       title='String (text)'>
                       str</span></td> 
             <td>
             
                <code>"not inherited"</code>
             
                
             </td> 
             <td>The way that this money was inherited (or not inherited). Inheritance can come from a spouse, the father, or from multiple generations within a family (either 3, 4, or 5+).</td> </tr>
        
        <tr> <td><code>"was founder"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Boolean (True or False)'>
                       bool</span></td> 
             <td>
             
                <code>True</code>
             
                
             </td> 
             <td>Whether the billionaire was the founder of their company.</td> </tr>
        
        <tr> <td><code>"was political"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Boolean (True or False)'>
                       bool</span></td> 
             <td>
             
                <code>True</code>
             
                
             </td> 
             <td>Whether the money came from politics.</td> </tr>
        
    </table>
</div>

    

    

    

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-wealth-how" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-wealth-how-category").click(function() {
        $( "#explore-wealth-how-category" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-wealth-how-from-emerging").click(function() {
        $( "#explore-wealth-how-from-emerging" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-wealth-how-industry").click(function() {
        $( "#explore-wealth-how-industry" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-wealth-how-inherited").click(function() {
        $( "#explore-wealth-how-inherited" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-wealth-how-was-founder").click(function() {
        $( "#explore-wealth-how-was-founder" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-wealth-how-was-political").click(function() {
        $( "#explore-wealth-how-was-political" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>


# Downloads

Download all of the following files.

1. <a href='../../datasets/python/billionaires/billionaires.py' download>billionaires.py <span class="fas fa-download"></span></a>
2. <a href='../../datasets/python/billionaires/billionaires.data' download>billionaires.data <span class="fas fa-download"></span></a>

# Usage

```python
import billionaires
billionaire = billionaires.get_billionaire()
```

# Documentation

<dl>
    <dt><span>get_billionaire()</span></dt>
    <dd>Returns a list of dictionaries representing billionaire.</dd>
</dl>