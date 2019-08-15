---
permalink: /blockpy/county_demographics/
style: dataset
---

<img class="img-thumbnail float-right"
     src="/images/datasets/county-demographics-icon.png"
     alt="county demographics icon"
     role="presentation">

# County Demographics BlockPy Library

<p class='lead'>From the CORGIS Dataset Project</p>

<span class='text-muted'>By Ryan Whitcomb</span><br>
<span class='text-muted'>Version 2.0.0, created 6/1/2016</span><br>
<span class='text-muted'>Tags: demographics, population, age, ethnicity, race, language, education, foreign, households, income, employment, unemployment, sales, land area, counties</span>

# Overview

The following data set is information obtained about counties in the United States from 2007 through 2014 through the United States Census Bureau.  Information described in the data includes the age distributions, the education levels, employment statistics, ethnicity percents, houseold information, income, and other miscellneous statistics.



<http://www.census.gov/quickfacts/table/PST045215/00>




# Key Descriptions
    
<table class='table table-condensed table-striped table-bordered table-hover'>
<tr>
    <th class=''>Key</th>
    <th class=''>List of...</th>
    <th class=''>Comment</th>
    <th class=''>Example Value</th>
</tr>

<tr>
    <td>County</td>
    <td>String</td> 
    <td>$MISSING_FIELD</td>
    <td><code>"Autauga County"</code></td>
</tr>

<tr>
    <td>State</td>
    <td>String</td> 
    <td>$MISSING_FIELD</td>
    <td><code>"AL"</code></td>
</tr>

<tr>
    <td>Age.Percent 65 and Older</td>
    <td>Float</td> 
    <td>$MISSING_FIELD</td>
    <td><code>13.8</code></td>
</tr>

<tr>
    <td>Age.Percent Under 18 Years</td>
    <td>Float</td> 
    <td>$MISSING_FIELD</td>
    <td><code>25.2</code></td>
</tr>

<tr>
    <td>Age.Percent Under 5 Years</td>
    <td>Float</td> 
    <td>$MISSING_FIELD</td>
    <td><code>6.0</code></td>
</tr>

<tr>
    <td>Education.Bachelor's Degree or Higher</td>
    <td>Float</td> 
    <td>$MISSING_FIELD</td>
    <td><code>20.9</code></td>
</tr>

<tr>
    <td>Education.High School or Higher</td>
    <td>Float</td> 
    <td>$MISSING_FIELD</td>
    <td><code>85.6</code></td>
</tr>

<tr>
    <td>Employment.Nonemployer Establishments</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>2947</code></td>
</tr>

<tr>
    <td>Employment.Private Non-farm Employment</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>10120</code></td>
</tr>

<tr>
    <td>Employment.Private Non-farm Employment Percent Change</td>
    <td>Float</td> 
    <td>$MISSING_FIELD</td>
    <td><code>2.1</code></td>
</tr>

<tr>
    <td>Employment.Private Non-farm Establishments</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>817</code></td>
</tr>

<tr>
    <td>Ethnicities.American Indian and Alaska Native Alone</td>
    <td>Float</td> 
    <td>$MISSING_FIELD</td>
    <td><code>0.5</code></td>
</tr>

<tr>
    <td>Ethnicities.Asian Alone</td>
    <td>Float</td> 
    <td>$MISSING_FIELD</td>
    <td><code>1.1</code></td>
</tr>

<tr>
    <td>Ethnicities.Black Alone</td>
    <td>Float</td> 
    <td>$MISSING_FIELD</td>
    <td><code>18.7</code></td>
</tr>

<tr>
    <td>Ethnicities.Hispanic or Latino</td>
    <td>Float</td> 
    <td>$MISSING_FIELD</td>
    <td><code>2.7</code></td>
</tr>

<tr>
    <td>Ethnicities.Native Hawaiian and Other Pacific Islander Alone</td>
    <td>Float</td> 
    <td>$MISSING_FIELD</td>
    <td><code>0.1</code></td>
</tr>

<tr>
    <td>Ethnicities.Two or More Races</td>
    <td>Float</td> 
    <td>$MISSING_FIELD</td>
    <td><code>1.8</code></td>
</tr>

<tr>
    <td>Ethnicities.White Alone</td>
    <td>Float</td> 
    <td>$MISSING_FIELD</td>
    <td><code>77.9</code></td>
</tr>

<tr>
    <td>Ethnicities.White Alone, not Hispanic or Latino</td>
    <td>Float</td> 
    <td>$MISSING_FIELD</td>
    <td><code>75.6</code></td>
</tr>

<tr>
    <td>Housing.Homeownership Rate</td>
    <td>Float</td> 
    <td>$MISSING_FIELD</td>
    <td><code>76.8</code></td>
</tr>

<tr>
    <td>Housing.Households</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>20071</code></td>
</tr>

<tr>
    <td>Housing.Housing Units</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>22751</code></td>
</tr>

<tr>
    <td>Housing.Median Value of Owner-Occupied Units</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>136200</code></td>
</tr>

<tr>
    <td>Housing.Persons per Household</td>
    <td>Float</td> 
    <td>$MISSING_FIELD</td>
    <td><code>2.71</code></td>
</tr>

<tr>
    <td>Housing.Units in Multi-Unit Structures</td>
    <td>Float</td> 
    <td>$MISSING_FIELD</td>
    <td><code>8.3</code></td>
</tr>

<tr>
    <td>Income.Median Houseold Income</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>53682</code></td>
</tr>

<tr>
    <td>Income.Per Capita Income</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>24571</code></td>
</tr>

<tr>
    <td>Income.Persons Below Poverty Level</td>
    <td>Float</td> 
    <td>$MISSING_FIELD</td>
    <td><code>12.1</code></td>
</tr>

<tr>
    <td>Miscellaneous.Building Permits</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>131</code></td>
</tr>

<tr>
    <td>Miscellaneous.Foreign Born</td>
    <td>Float</td> 
    <td>$MISSING_FIELD</td>
    <td><code>1.6</code></td>
</tr>

<tr>
    <td>Miscellaneous.Land Area</td>
    <td>Float</td> 
    <td>$MISSING_FIELD</td>
    <td><code>594.44</code></td>
</tr>

<tr>
    <td>Miscellaneous.Language Other than English at Home</td>
    <td>Float</td> 
    <td>$MISSING_FIELD</td>
    <td><code>3.5</code></td>
</tr>

<tr>
    <td>Miscellaneous.Living in Same House +1 Years</td>
    <td>Float</td> 
    <td>$MISSING_FIELD</td>
    <td><code>85.0</code></td>
</tr>

<tr>
    <td>Miscellaneous.Manufacturers Shipments</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>0</code></td>
</tr>

<tr>
    <td>Miscellaneous.Mean Travel Time to Work</td>
    <td>Float</td> 
    <td>$MISSING_FIELD</td>
    <td><code>26.2</code></td>
</tr>

<tr>
    <td>Miscellaneous.Percent Female</td>
    <td>Float</td> 
    <td>$MISSING_FIELD</td>
    <td><code>51.4</code></td>
</tr>

<tr>
    <td>Miscellaneous.Veterans</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>5922</code></td>
</tr>

<tr>
    <td>Population.2010 Population</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>54571</code></td>
</tr>

<tr>
    <td>Population.2014 Population</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>55395</code></td>
</tr>

<tr>
    <td>Population.Population Percent Change</td>
    <td>Float</td> 
    <td>$MISSING_FIELD</td>
    <td><code>1.5</code></td>
</tr>

<tr>
    <td>Population.Population per Square Mile</td>
    <td>Float</td> 
    <td>$MISSING_FIELD</td>
    <td><code>91.8</code></td>
</tr>

<tr>
    <td>Sales.Accommodation and Food Services Sales</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>881</code></td>
</tr>

<tr>
    <td>Sales.Merchant Wholesaler Sales</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>0</code></td>
</tr>

<tr>
    <td>Sales.Retail Sales</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>5981</code></td>
</tr>

<tr>
    <td>Sales.Retail Sales per Capita</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>12003</code></td>
</tr>

<tr>
    <td>Employment.Firms.American Indian-Owned</td>
    <td>Float</td> 
    <td>$MISSING_FIELD</td>
    <td><code>0.0</code></td>
</tr>

<tr>
    <td>Employment.Firms.Asian-Owned</td>
    <td>Float</td> 
    <td>$MISSING_FIELD</td>
    <td><code>1.3</code></td>
</tr>

<tr>
    <td>Employment.Firms.Black-Owned</td>
    <td>Float</td> 
    <td>$MISSING_FIELD</td>
    <td><code>15.2</code></td>
</tr>

<tr>
    <td>Employment.Firms.Hispanic-Owned</td>
    <td>Float</td> 
    <td>$MISSING_FIELD</td>
    <td><code>0.7</code></td>
</tr>

<tr>
    <td>Employment.Firms.Native Hawaiian and Other Pacific Islander-Owned</td>
    <td>Float</td> 
    <td>$MISSING_FIELD</td>
    <td><code>0.0</code></td>
</tr>

<tr>
    <td>Employment.Firms.Total</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>4067</code></td>
</tr>

<tr>
    <td>Employment.Firms.Women-Owned</td>
    <td>Float</td> 
    <td>$MISSING_FIELD</td>
    <td><code>31.7</code></td>
</tr>

</table>