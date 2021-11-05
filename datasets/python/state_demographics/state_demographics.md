---
permalink: /python/state_demographics/
style: dataset
---



<img class="img-thumbnail float-right"
     src="/images/datasets/state-demographics-splash.png"
     alt="state demographics icon"
     role="presentation">

# State Demographics Python Library

<p class='lead'>From the CORGIS Dataset Project</p>

<span class='text-muted'>By Ryan Whitcomb, Joung Min Choi, Bo Guan</span><br>
<span class='text-muted'>Version 3.0.0, created 11/5/2021</span><br>
<span class='text-muted'>Tags: demographics, population, age, ethnicity, race, language, education, foreign, households, income, employment, unemployment, sales, land area, states</span>

# Overview

The following data set is summarized information obtained about states in the United States from 2015 through 2019 through the United States Census Bureau. However, this data is not available for these years; just the summarized data as of 2019. Information described in the data includes the age distributions, the education levels, employment statistics, ethnicity percents, houseold information, income, and other miscellneous statistics. (Values are denoted as -1, if the data is not available)



<http://www.census.gov/quickfacts/table/PST045215/00>




# Explore Structure

Each row represents *Demographic report for each individual state*.



<button type='button'
        class='btn btn-info'
        id='btn-explore'>Explore state demographics data</button>

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


<div id='explore-' title='Dictionary (10 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"State"</code></td>
             <td><span data-toggle="tooltip"
                       title='String (text)'>
                       str</span></td> 
             <td>
             
                <code>"Connecticut"</code>
             
                
             </td> 
             <td>$MISSING_FIELD</td> </tr>
        
        <tr> <td><code>"Population"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Population'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Age"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Age'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Miscellaneous"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Miscellaneous'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Ethnicities"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Ethnicities'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Housing"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Housing'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
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
        
        <tr> <td><code>"Sales"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Sales'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Income"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Income'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
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
    
    $("#btn-explore-State").click(function() {
        $( "#explore-State" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Population").click(function() {
        $( "#explore-Population" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Age").click(function() {
        $( "#explore-Age" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Miscellaneous").click(function() {
        $( "#explore-Miscellaneous" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Ethnicities").click(function() {
        $( "#explore-Ethnicities" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Housing").click(function() {
        $( "#explore-Housing" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Education").click(function() {
        $( "#explore-Education" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Sales").click(function() {
        $( "#explore-Sales" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Income").click(function() {
        $( "#explore-Income" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Employment").click(function() {
        $( "#explore-Employment" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Population' title='Dictionary (4 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Population Percent Change"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>-10.2</code>
             
                
             </td> 
             <td>The difference between the population of an area from April 1, 2020 to July 1, 2019</td> </tr>
        
        <tr> <td><code>"2014 Population"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>3605944</code>
             
                
             </td> 
             <td>The population of people in a specified geographic area on April 1, 2020</td> </tr>
        
        <tr> <td><code>"2010 Population"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>3574097</code>
             
                
             </td> 
             <td>The population of people in a specified geographic area on April 1, 2010</td> </tr>
        
        <tr> <td><code>"Population per Square Mile"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>738.1</code>
             
                
             </td> 
             <td>Population and housing unit density computed by dividing the total population or number of housing units within a geographic entity by the land area of that entity measured in square miles or in square kilometers in 2010</td> </tr>
        
    </table>
</div>

    

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Population" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Population-Population-Percent-Change").click(function() {
        $( "#explore-Population-Population-Percent-Change" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Population-2014-Population").click(function() {
        $( "#explore-Population-2014-Population" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Population-2010-Population").click(function() {
        $( "#explore-Population-2010-Population" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Population-Population-per-Square-Mile").click(function() {
        $( "#explore-Population-Population-per-Square-Mile" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Age' title='Dictionary (3 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Percent Under 5 Years"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>5.1</code>
             
                
             </td> 
             <td>Estimated percentage of population whose ages are under 5 years old are produced for the United States, states, and counties, as well as for the Commonwealth of Puerto Rico and its municipios (county-equivalents for Puerto Rico).</td> </tr>
        
        <tr> <td><code>"Percent Under 18 Years"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>20.4</code>
             
                
             </td> 
             <td>Estimated percentage of population whose ages are under 18 years old are produced for the United States, states, and counties, as well as for the Commonwealth of Puerto Rico and its municipios (county-equivalents for Puerto Rico).</td> </tr>
        
        <tr> <td><code>"Percent 65 and Older"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>17.7</code>
             
                
             </td> 
             <td>Estimated percentage of population whose ages are equal or greater than 65 years old are produced for the United States, states, and counties, as well as for the Commonwealth of Puerto Rico and its municipios (county-equivalents for Puerto Rico).</td> </tr>
        
    </table>
</div>

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Age" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Age-Percent-Under-5-Years").click(function() {
        $( "#explore-Age-Percent-Under-5-Years" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Age-Percent-Under-18-Years").click(function() {
        $( "#explore-Age-Percent-Under-18-Years" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Age-Percent-65-and-Older").click(function() {
        $( "#explore-Age-Percent-65-and-Older" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Miscellaneous' title='Dictionary (10 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Percent Female"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>51.2</code>
             
                
             </td> 
             <td>Estimated percentage of female population who are produced for the United States, states, and counties, as well as for the Commonwealth of Puerto Rico and its municipios (county-equivalents for Puerto Rico).</td> </tr>
        
        <tr> <td><code>"Veterans"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>167521</code>
             
                
             </td> 
             <td>Population of men and women who have served (even for a short time), but are not currently serving, on active duty in the U.S. Army, Navy, Air Force, Marine Corps, or the Coast Guard, or who served in the U.S. Merchant Marine during World War II from 2015 to 2019 </td> </tr>
        
        <tr> <td><code>"Foreign Born"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>14.6</code>
             
                
             </td> 
             <td>Estimated percentage of population who was not a U.S. citizen or a U.S. national at birth. This includes respondents who indicated they were a U.S. citizen by naturalization or not a U.S. citizen. from 2015 to 2019 </td> </tr>
        
        <tr> <td><code>"Living in Same House +1 Years"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>87.9</code>
             
                
             </td> 
             <td>Percentage for the residence in conjunction with location of current residence to determine the extent of residential mobility of the population and the resulting redistribution of the population across the various states, metropolitan areas, and regions of the country from 2015 to 2019</td> </tr>
        
        <tr> <td><code>"Language Other than English at Home"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>22.3</code>
             
                
             </td> 
             <td>Percentage for the number of people who knew languages other than English but did not use them at home, who only used them elsewhere, or whose usage was limited to a few expressions or slang were excluded from 2015 to 2019. Tabulations of language spoken at home include only the responses of persons 5 years old and over. </td> </tr>
        
        <tr> <td><code>"Percent Under 66 Years With a Disability"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>7.4</code>
             
                
             </td> 
             <td>Percentage for the people under age of 65 years with a disability from 2015 to 2019</td> </tr>
        
        <tr> <td><code>"Percent Under 65 Years Witout Health insurance"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>7.0</code>
             
                
             </td> 
             <td>Percentage for the people under age of 65 years without health insurance from 2015 to 2019</td> </tr>
        
        <tr> <td><code>"Manufacturers Shipments"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>55160095</code>
             
                
             </td> 
             <td>The manufacturing sector comprises establishments engaged in the mechanical, physical, or chemical transformation of materials, substances, or components into new products. The 2012 Economic Census classifies businesses according to the North American Industry Classification System (NAICS), 2012.</td> </tr>
        
        <tr> <td><code>"Mean Travel Time to Work"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>26.6</code>
             
                
             </td> 
             <td>Travel time to work refers to the total number of minutes that it usually took the person to get from home to work each day during the reference week. The elapsed time includes time spent waiting for public transportation, picking up passengers in carpools, and time spent in other activities related to getting to work. Mean travel time to work is obtained by dividing the total number of minutes by the number of workers 16 years old and over who did not work at home. Mean travel time to work is rounded to the nearest tenth of a minute. The data was collected from 2015 to 2019</td> </tr>
        
        <tr> <td><code>"Land Area"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>4842.36</code>
             
                
             </td> 
             <td>Land area measurements are originally recorded as whole square meters (to convert square meters to square kilometers, divide by 1,000,000; to convert square kilometers to square miles, divide by 2.58999; to convert square meters to square miles, divide by 2,589,988) in 2010.</td> </tr>
        
    </table>
</div>

    

    

    

    

    

    

    

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Miscellaneous" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Miscellaneous-Percent-Female").click(function() {
        $( "#explore-Miscellaneous-Percent-Female" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Miscellaneous-Veterans").click(function() {
        $( "#explore-Miscellaneous-Veterans" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Miscellaneous-Foreign-Born").click(function() {
        $( "#explore-Miscellaneous-Foreign-Born" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Miscellaneous-Living-in-Same-House-+1-Years").click(function() {
        $( "#explore-Miscellaneous-Living-in-Same-House-+1-Years" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Miscellaneous-Language-Other-than-English-at-Home").click(function() {
        $( "#explore-Miscellaneous-Language-Other-than-English-at-Home" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Miscellaneous-Percent-Under-66-Years-With-a-Disability").click(function() {
        $( "#explore-Miscellaneous-Percent-Under-66-Years-With-a-Disability" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Miscellaneous-Percent-Under-65-Years-Witout-Health-insurance").click(function() {
        $( "#explore-Miscellaneous-Percent-Under-65-Years-Witout-Health-insurance" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Miscellaneous-Manufacturers-Shipments").click(function() {
        $( "#explore-Miscellaneous-Manufacturers-Shipments" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Miscellaneous-Mean-Travel-Time-to-Work").click(function() {
        $( "#explore-Miscellaneous-Mean-Travel-Time-to-Work" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Miscellaneous-Land-Area").click(function() {
        $( "#explore-Miscellaneous-Land-Area" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Ethnicities' title='Dictionary (8 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"White Alone"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>79.7</code>
             
                
             </td> 
             <td>Estimated percentage of population having origins in any of the original peoples of Europe, the Middle East, or North Africa. It includes people who indicate their race as "White" or report entries such as Irish, German, Italian, Lebanese, Arab, Moroccan, or Caucasian.</td> </tr>
        
        <tr> <td><code>"Black Alone"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>12.2</code>
             
                
             </td> 
             <td>Estimated percentage of population having origins in any of the Black racial groups of Africa. It includes people who indicate their race as "Black or African American," or report entries such as African American, Kenyan, Nigerian, or Haitian.</td> </tr>
        
        <tr> <td><code>"American Indian and Alaska Native Alone"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>0.6</code>
             
                
             </td> 
             <td>Estimated percentage of population having origins in any of the original peoples of North and South America (including Central America) and who maintains tribal affiliation or community attachment. This category includes people who indicate their race as "American Indian or Alaska Native" or report entries such as Navajo, Blackfeet, Inupiat, Yup'ik, or Central American Indian groups or South American Indian groups.</td> </tr>
        
        <tr> <td><code>"Asian Alone"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>5.0</code>
             
                
             </td> 
             <td>Estimated percentage of population having origins in any of the original peoples of the Far East, Southeast Asia, or the Indian subcontinent including, for example, Cambodia, China, India, Japan, Korea, Malaysia, Pakistan, the Philippine Islands, Thailand, and Vietnam. This includes people who reported detailed Asian responses such as: "Asian Indian," "Chinese," "Filipino," "Korean," "Japanese," "Vietnamese," and "Other Asian" or provide other detailed Asian responses.</td> </tr>
        
        <tr> <td><code>"Native Hawaiian and Other Pacific Islander Alone"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>0.1</code>
             
                
             </td> 
             <td>Estimated percentage of population having origins in any of the Black racial groups of Africa. It includes people who indicate their race as "Black or African American," or report entries such as African American, Kenyan, Nigerian, or Haitian.</td> </tr>
        
        <tr> <td><code>"Two or More Races"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>2.5</code>
             
                
             </td> 
             <td>Estimated percentage of population choosing to provide two or more races either by checking two or more race response check boxes, by providing multiple responses, or by some combination of check boxes and other responses. For data product purposes, "Two or More Races" refers to combinations of two or more of the following race categories: "White," "Black or African American," American Indian or Alaska Native," "Asian," Native Hawaiian or Other Pacific Islander," or "Some Other Race"</td> </tr>
        
        <tr> <td><code>"Hispanic or Latino"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>16.9</code>
             
                
             </td> 
             <td>Estimated percentage of population of Cuban, Mexican, Puerto Rican, South or Central American, or other Spanish culture or origin regardless of race. This includes people who reported detailed Hispanic or Latino groups</td> </tr>
        
        <tr> <td><code>"White Alone, not Hispanic or Latino"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>65.9</code>
             
                
             </td> 
             <td>Estimated percentage of population having origins in any of the original peoples of Europe, the Middle East, or North Africa. It includes people who indicate their race as "White" or report entries such as Irish, German, Italian, Lebanese, Arab, Moroccan, or Caucasian.</td> </tr>
        
    </table>
</div>

    

    

    

    

    

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Ethnicities" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Ethnicities-White-Alone").click(function() {
        $( "#explore-Ethnicities-White-Alone" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Ethnicities-Black-Alone").click(function() {
        $( "#explore-Ethnicities-Black-Alone" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Ethnicities-American-Indian-and-Alaska-Native-Alone").click(function() {
        $( "#explore-Ethnicities-American-Indian-and-Alaska-Native-Alone" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Ethnicities-Asian-Alone").click(function() {
        $( "#explore-Ethnicities-Asian-Alone" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Ethnicities-Native-Hawaiian-and-Other-Pacific-Islander-Alone").click(function() {
        $( "#explore-Ethnicities-Native-Hawaiian-and-Other-Pacific-Islander-Alone" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Ethnicities-Two-or-More-Races").click(function() {
        $( "#explore-Ethnicities-Two-or-More-Races" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Ethnicities-Hispanic-or-Latino").click(function() {
        $( "#explore-Ethnicities-Hispanic-or-Latino" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Ethnicities-White-Alone,-not-Hispanic-or-Latino").click(function() {
        $( "#explore-Ethnicities-White-Alone,-not-Hispanic-or-Latino" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Housing' title='Dictionary (7 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Housing Units"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>1524992</code>
             
                
             </td> 
             <td>Estimated number of housing units, apartments, mobile homes, groups of rooms, or single rooms that are occupied (or if vacant, is intended for occupancy) as separate living quarters beginning with July 1, 2019</td> </tr>
        
        <tr> <td><code>"Homeownership Rate"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>66.1</code>
             
                
             </td> 
             <td>A housing unit is owner-occupied if the owner or co-owner lives in the unit, even if it is mortgaged or not fully paid for. The owner or co-owner must live in the unit and usually is Person 1 on the questionnaire. This homeownership rate is computed by dividing the number of owner-occupied housing units by the number of occupied housing units or households from 2015 to 2019.</td> </tr>
        
        <tr> <td><code>"Median Value of Owner-Occupied Units"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>275400</code>
             
                
             </td> 
             <td>Median value of housing units which are owner-occupied if the owner or co-owner lives in the unit, even if it is mortgaged or not fully paid for from 2015 to 2019. Median value calculations are rounded to the nearest hundred dollars.</td> </tr>
        
        <tr> <td><code>"Households"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>1370746</code>
             
                
             </td> 
             <td>Number of households including all the persons who occupy a housing unit as their usual place of residence from 2015 to 2019</td> </tr>
        
        <tr> <td><code>"Persons per Household"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>2.53</code>
             
                
             </td> 
             <td>Percentage for the number of people per household, or average household size from 2015 to 2019</td> </tr>
        
        <tr> <td><code>"Households with a computer"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>90.8</code>
             
                
             </td> 
             <td>Percentage for the households having a computer from 2015-2019</td> </tr>
        
        <tr> <td><code>"Households with a Internet"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>85.5</code>
             
                
             </td> 
             <td>Percentage for the households with a broadband Internet subscription, percent from 2015 to 2019</td> </tr>
        
    </table>
</div>

    

    

    

    

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Housing" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Housing-Housing-Units").click(function() {
        $( "#explore-Housing-Housing-Units" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Housing-Homeownership-Rate").click(function() {
        $( "#explore-Housing-Homeownership-Rate" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Housing-Median-Value-of-Owner-Occupied-Units").click(function() {
        $( "#explore-Housing-Median-Value-of-Owner-Occupied-Units" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Housing-Households").click(function() {
        $( "#explore-Housing-Households" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Housing-Persons-per-Household").click(function() {
        $( "#explore-Housing-Persons-per-Household" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Housing-Households-with-a-computer").click(function() {
        $( "#explore-Housing-Households-with-a-computer" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Housing-Households-with-a-Internet").click(function() {
        $( "#explore-Housing-Households-with-a-Internet" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Education' title='Dictionary (2 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"High School or Higher"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>90.6</code>
             
                
             </td> 
             <td>Percentage of the people whose highest degree was a high school diploma or its equivalent, people who attended college but did not receive a degree, and people who received an associate's, bachelor's, master's, or professional or doctorate degree. These data include only persons 25 years old and over. The percentages are obtained by dividing the counts of graduates by the total number of persons 25 years old and over. Tha data is collected from 2015 to 2019</td> </tr>
        
        <tr> <td><code>"Bachelor's Degree or Higher"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>39.3</code>
             
                
             </td> 
             <td>Percentage for the people who attended college but did not receive a degree, and people who received an associate's, bachelor's, master's, or professional or doctorate degree. These data include only persons 25 years old and over. The percentages are obtained by dividing the counts of graduates by the total number of persons 25 years old and over. Tha data is collected from 2015 to 2019.</td> </tr>
        
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
    
    $("#btn-explore-Education-High-School-or-Higher").click(function() {
        $( "#explore-Education-High-School-or-Higher" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Education-Bachelor_s-Degree-or-Higher").click(function() {
        $( "#explore-Education-Bachelor_s-Degree-or-Higher" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Sales' title='Dictionary (2 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Accommodation and Food Services Sales"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>9542068</code>
             
                
             </td> 
             <td>The Accommodation and Food Services Sales sector comprises establishments providing customers with lodging and/or prepared meals, snacks, and beverages for immediate consumption. The 2012 Economic Census classifies businesses according to the North American Industry Classification System (NAICS), 2012. Sales includes payments from customers for services rendered, from the use of facilities and from merchandise sold. If tax-exempt, sales includes dues and assessments from members and affiliates.</td> </tr>
        
        <tr> <td><code>"Retail Sales"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>51632467</code>
             
                
             </td> 
             <td>The retail trade sector comprises establishments engaged in retailing merchandise, generally without transformation, and rendering services incidental to the sale of merchandise. The 2007 Economic Census classifies businesses according to the North American Industry Classification System (NAICS), 2012. Sales include merchandise sold for cash or credit at retail and wholesale by establishments primarily engaged in retail trade</td> </tr>
        
    </table>
</div>

    

    

<script>
$(document).ready(function() {
    $( "#explore-Sales" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Sales-Accommodation-and-Food-Services-Sales").click(function() {
        $( "#explore-Sales-Accommodation-and-Food-Services-Sales" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Sales-Retail-Sales").click(function() {
        $( "#explore-Sales-Retail-Sales" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Income' title='Dictionary (3 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Median Houseold Income"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>78444</code>
             
                
             </td> 
             <td>Median of income in the Past 12 Months collected from 2015 to 2019 - Income of Households: This includes the income of the householder and all other individuals 15 years old and over in the household, whether they are related to the householder or not. Because many households consist of only one person, average household income is usually less than average family income.</td> </tr>
        
        <tr> <td><code>"Per Capita Income"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>44496</code>
             
                
             </td> 
             <td>Per capita income is the mean income computed for every man, woman, and child in a particular group including those living in group quarters. It is derived by dividing the aggregate income of a particular group by the total population in that group. This measure is rounded to the nearest whole dollar. For the complete definition, go to ACS subject definitions "Income in the Past 12 Months, Per Capita Income." The data is collected from 2015 to 2019.</td> </tr>
        
        <tr> <td><code>"Persons Below Poverty Level"</code></td>
             <td><span data-toggle="tooltip"
                       title='Float (decimal number)'>
                       float</span></td> 
             <td>
             
                <code>10.0</code>
             
                
             </td> 
             <td>Percentage of the income from the persons in poverty</td> </tr>
        
    </table>
</div>

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Income" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Income-Median-Houseold-Income").click(function() {
        $( "#explore-Income-Median-Houseold-Income" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Income-Per-Capita-Income").click(function() {
        $( "#explore-Income-Per-Capita-Income" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Income-Persons-Below-Poverty-Level").click(function() {
        $( "#explore-Income-Persons-Below-Poverty-Level" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Employment' title='Dictionary (2 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Nonemployer Establishments"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>286874</code>
             
                
             </td> 
             <td>An establishment is a single physical location at which business is conducted or where services or industrial operations are performed. It is not necessarily identical with a company or enterprise, which may consist of one establishment or more. The data was collected from 2018.</td> </tr>
        
        <tr> <td><code>"Firms"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Employment-Firms'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
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
    
    $("#btn-explore-Employment-Nonemployer-Establishments").click(function() {
        $( "#explore-Employment-Nonemployer-Establishments" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Employment-Firms").click(function() {
        $( "#explore-Employment-Firms" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Employment-Firms' title='Dictionary (7 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Total"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>326693</code>
             
                
             </td> 
             <td>All nonfarm businesses filing Internal Revenue Service tax forms as individual proprietorships, partnerships, or any type of corporation, and with receipts of $1,000 or more. The data was collected in 2012.</td> </tr>
        
        <tr> <td><code>"Men-Owned"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>187845</code>
             
                
             </td> 
             <td>All men-owned nonfarm businesses filing Internal Revenue Service tax forms as individual proprietorships, partnerships, or any type of corporation, and with receipts of $1,000 or more. The data was collected in 2012.</td> </tr>
        
        <tr> <td><code>"Women-Owned"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>106678</code>
             
                
             </td> 
             <td>All women-owned nonfarm businesses filing Internal Revenue Service tax forms as individual proprietorships, partnerships, or any type of corporation, and with receipts of $1,000 or more. The data was collected in 2012.</td> </tr>
        
        <tr> <td><code>"Minority-Owned"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>56113</code>
             
                
             </td> 
             <td>All nonfarm businesses owned by equally minority filing Internal Revenue Service tax forms as individual proprietorships, partnerships, or any type of corporation, and with receipts of $1,000 or more. The data was collected in 2012.</td> </tr>
        
        <tr> <td><code>"Nonminority-Owned"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>259614</code>
             
                
             </td> 
             <td>All nonfarm businesses owned by equally nonminority filing Internal Revenue Service tax forms as individual proprietorships, partnerships, or any type of corporation, and with receipts of $1,000 or more. The data was collected in 2012.</td> </tr>
        
        <tr> <td><code>"Veteran-Owned"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>31056</code>
             
                
             </td> 
             <td>All nonfarm businesses owned by veteran filing Internal Revenue Service tax forms as individual proprietorships, partnerships, or any type of corporation, and with receipts of $1,000 or more. The data was collected in 2012.</td> </tr>
        
        <tr> <td><code>"Nonveteran-Owned"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>281182</code>
             
                
             </td> 
             <td>All nonfarm businesses owned by non-veteran filing Internal Revenue Service tax forms as individual proprietorships, partnerships, or any type of corporation, and with receipts of $1,000 or more. The data was collected in 2012.</td> </tr>
        
    </table>
</div>

    

    

    

    

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Employment-Firms" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Employment-Firms-Total").click(function() {
        $( "#explore-Employment-Firms-Total" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Employment-Firms-Men-Owned").click(function() {
        $( "#explore-Employment-Firms-Men-Owned" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Employment-Firms-Women-Owned").click(function() {
        $( "#explore-Employment-Firms-Women-Owned" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Employment-Firms-Minority-Owned").click(function() {
        $( "#explore-Employment-Firms-Minority-Owned" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Employment-Firms-Nonminority-Owned").click(function() {
        $( "#explore-Employment-Firms-Nonminority-Owned" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Employment-Firms-Veteran-Owned").click(function() {
        $( "#explore-Employment-Firms-Veteran-Owned" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Employment-Firms-Nonveteran-Owned").click(function() {
        $( "#explore-Employment-Firms-Nonveteran-Owned" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>


# Downloads

Download all of the following files.

1. <a href='../../datasets/python/state_demographics/state_demographics.py' download>state_demographics.py <span class="fas fa-download"></span></a>
2. <a href='../../datasets/python/state_demographics/state_demographics.data' download>state_demographics.data <span class="fas fa-download"></span></a>

# Usage

```python
import state_demographics
report = state_demographics.get_report()
```

# Documentation

<dl>
    <dt><span>get_report()</span></dt>
    <dd>Returns a list of dictionaries representing report.</dd>
</dl>