---
permalink: /json/county_demographics/
style: dataset
---

<img class="img-thumbnail float-right"
     src="/images/datasets/county-demographics-icon.png"
     alt="county demographics icon"
     role="presentation">

# County Demographics JSON File

<p class='lead'>From the CORGIS Dataset Project</p>

<span class='text-muted'>By Ryan Whitcomb, Joung Min Choi, Bo Guan</span><br>
<span class='text-muted'>Version 3.0.0, created 11/5/2021</span><br>
<span class='text-muted'>Tags: demographics, population, age, ethnicity, race, language, education, foreign, households, income, employment, unemployment, sales, land area, counties</span>

# Overview

The following data set is information obtained about counties in the United States from 2007 through 2014 through the United States Census Bureau.  Information described in the data includes the age distributions, the education levels, employment statistics, ethnicity percents, houseold information, income, and other miscellneous statistics. (Values are denoted as -1, if the data is not available)


<http://www.census.gov/quickfacts/table/PST045215/00>




# Download

Download the following file:

* <a href='../../datasets/json/county_demographics/county_demographics.json' download>county_demographics.json <span class="fas fa-download"></span></a>

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
    <td>County name</td>
    <td><code>"Acadia Parish"</code></td>
</tr>

<tr>
    <td>State</td>
    <td>String</td> 
    <td>State name</td>
    <td><code>"LA"</code></td>
</tr>

<tr>
    <td>Population.Population Percent Change</td>
    <td>Float</td> 
    <td>The difference between the population of an area from April 1, 2020 to July 1, 2019</td>
    <td><code>0.4</code></td>
</tr>

<tr>
    <td>Population.2020 Population</td>
    <td>Integer</td> 
    <td>The population of people in a specified geographic area on April 1, 2020</td>
    <td><code>57576</code></td>
</tr>

<tr>
    <td>Population.2010 Population</td>
    <td>Integer</td> 
    <td>The population of people in a specified geographic area on April 1, 2010</td>
    <td><code>61773</code></td>
</tr>

<tr>
    <td>Age.Percent Under 5 Years</td>
    <td>Float</td> 
    <td>Estimated percentage of population whose ages are under 5 years old are produced for the United States, states, and counties, as well as for the Commonwealth of Puerto Rico and its municipios (county-equivalents for Puerto Rico).</td>
    <td><code>6.9</code></td>
</tr>

<tr>
    <td>Age.Percent Under 18 Years</td>
    <td>Float</td> 
    <td>Estimated percentage of population whose ages are under 18 years old are produced for the United States, states, and counties, as well as for the Commonwealth of Puerto Rico and its municipios (county-equivalents for Puerto Rico).</td>
    <td><code>25.8</code></td>
</tr>

<tr>
    <td>Age.Percent 65 and Older</td>
    <td>Float</td> 
    <td>Estimated percentage of population whose ages are equal or greater than 65 years old are produced for the United States, states, and counties, as well as for the Commonwealth of Puerto Rico and its municipios (county-equivalents for Puerto Rico).</td>
    <td><code>15.8</code></td>
</tr>

<tr>
    <td>Miscellaneous.Percent Female</td>
    <td>Float</td> 
    <td>Estimated percentage of female population who are produced for the United States, states, and counties, as well as for the Commonwealth of Puerto Rico and its municipios (county-equivalents for Puerto Rico).</td>
    <td><code>51.1</code></td>
</tr>

<tr>
    <td>Ethnicities.White Alone</td>
    <td>Float</td> 
    <td>Estimated percentage of population having origins in any of the original peoples of Europe, the Middle East, or North Africa. It includes people who indicate their race as "White" or report entries such as Irish, German, Italian, Lebanese, Arab, Moroccan, or Caucasian.</td>
    <td><code>79.7</code></td>
</tr>

<tr>
    <td>Ethnicities.Black Alone</td>
    <td>Float</td> 
    <td>Estimated percentage of population having origins in any of the Black racial groups of Africa. It includes people who indicate their race as "Black or African American," or report entries such as African American, Kenyan, Nigerian, or Haitian.</td>
    <td><code>18.0</code></td>
</tr>

<tr>
    <td>Ethnicities.American Indian and Alaska Native Alone</td>
    <td>Float</td> 
    <td>Estimated percentage of population having origins in any of the original peoples of North and South America (including Central America) and who maintains tribal affiliation or community attachment. This category includes people who indicate their race as "American Indian or Alaska Native" or report entries such as Navajo, Blackfeet, Inupiat, Yup'ik, or Central American Indian groups or South American Indian groups.</td>
    <td><code>0.4</code></td>
</tr>

<tr>
    <td>Ethnicities.Asian Alone</td>
    <td>Float</td> 
    <td>Estimated percentage of population having origins in any of the original peoples of the Far East, Southeast Asia, or the Indian subcontinent including, for example, Cambodia, China, India, Japan, Korea, Malaysia, Pakistan, the Philippine Islands, Thailand, and Vietnam. This includes people who reported detailed Asian responses such as: "Asian Indian," "Chinese," "Filipino," "Korean," "Japanese," "Vietnamese," and "Other Asian" or provide other detailed Asian responses.</td>
    <td><code>0.3</code></td>
</tr>

<tr>
    <td>Ethnicities.Native Hawaiian and Other Pacific Islander Alone</td>
    <td>Float</td> 
    <td>Estimated percentage of population having origins in any of the Black racial groups of Africa. It includes people who indicate their race as "Black or African American," or report entries such as African American, Kenyan, Nigerian, or Haitian.</td>
    <td><code>0.0</code></td>
</tr>

<tr>
    <td>Ethnicities.Two or More Races</td>
    <td>Float</td> 
    <td>Estimated percentage of population choosing to provide two or more races either by checking two or more race response check boxes, by providing multiple responses, or by some combination of check boxes and other responses. For data product purposes, "Two or More Races" refers to combinations of two or more of the following race categories: "White," "Black or African American," American Indian or Alaska Native," "Asian," Native Hawaiian or Other Pacific Islander," or "Some Other Race"</td>
    <td><code>1.6</code></td>
</tr>

<tr>
    <td>Ethnicities.Hispanic or Latino</td>
    <td>Float</td> 
    <td>Estimated percentage of population of Cuban, Mexican, Puerto Rican, South or Central American, or other Spanish culture or origin regardless of race. This includes people who reported detailed Hispanic or Latino groups</td>
    <td><code>2.8</code></td>
</tr>

<tr>
    <td>Ethnicities.White Alone, not Hispanic or Latino</td>
    <td>Float</td> 
    <td>Estimated percentage of population having origins in any of the original peoples of Europe, the Middle East, or North Africa. It includes people who indicate their race as "White" or report entries such as Irish, German, Italian, Lebanese, Arab, Moroccan, or Caucasian.</td>
    <td><code>77.3</code></td>
</tr>

<tr>
    <td>Miscellaneous.Veterans</td>
    <td>Integer</td> 
    <td>Population of men and women who have served (even for a short time), but are not currently serving, on active duty in the U.S. Army, Navy, Air Force, Marine Corps, or the Coast Guard, or who served in the U.S. Merchant Marine during World War II from 2015 to 2019 </td>
    <td><code>2690</code></td>
</tr>

<tr>
    <td>Miscellaneous.Foreign Born</td>
    <td>Float</td> 
    <td>Estimated percentage of population who was not a U.S. citizen or a U.S. national at birth. This includes respondents who indicated they were a U.S. citizen by naturalization or not a U.S. citizen. from 2015 to 2019 </td>
    <td><code>1.3</code></td>
</tr>

<tr>
    <td>Housing.Housing Units</td>
    <td>Integer</td> 
    <td>Estimated number of housing units, apartments, mobile homes, groups of rooms, or single rooms that are occupied (or if vacant, is intended for occupancy) as separate living quarters beginning with July 1, 2019</td>
    <td><code>26657</code></td>
</tr>

<tr>
    <td>Housing.Homeownership Rate</td>
    <td>Float</td> 
    <td>A housing unit is owner-occupied if the owner or co-owner lives in the unit, even if it is mortgaged or not fully paid for. The owner or co-owner must live in the unit and usually is Person 1 on the questionnaire. This homeownership rate is computed by dividing the number of owner-occupied housing units by the number of occupied housing units or households from 2015 to 2019.</td>
    <td><code>71.1</code></td>
</tr>

<tr>
    <td>Housing.Median Value of Owner-Occupied Units</td>
    <td>Integer</td> 
    <td>Median value of housing units which are owner-occupied if the owner or co-owner lives in the unit, even if it is mortgaged or not fully paid for from 2015 to 2019. Median value calculations are rounded to the nearest hundred dollars.</td>
    <td><code>118000</code></td>
</tr>

<tr>
    <td>Housing.Households</td>
    <td>Integer</td> 
    <td>Number of households including all the persons who occupy a housing unit as their usual place of residence from 2015 to 2019</td>
    <td><code>22236</code></td>
</tr>

<tr>
    <td>Housing.Persons per Household</td>
    <td>Float</td> 
    <td>Percentage for the number of people per household, or average household size from 2015 to 2019</td>
    <td><code>2.76</code></td>
</tr>

<tr>
    <td>Miscellaneous.Living in Same House +1 Years</td>
    <td>Float</td> 
    <td>Percentage for the residence in conjunction with location of current residence to determine the extent of residential mobility of the population and the resulting redistribution of the population across the various states, metropolitan areas, and regions of the country from 2015 to 2019</td>
    <td><code>89.8</code></td>
</tr>

<tr>
    <td>Miscellaneous.Language Other than English at Home</td>
    <td>Float</td> 
    <td>Percentage for the number of people who knew languages other than English but did not use them at home, who only used them elsewhere, or whose usage was limited to a few expressions or slang were excluded from 2015 to 2019. Tabulations of language spoken at home include only the responses of persons 5 years old and over. </td>
    <td><code>10.0</code></td>
</tr>

<tr>
    <td>Education.High School or Higher</td>
    <td>Float</td> 
    <td>Percentage of people whose highest degree was a high school diploma or its equivalent, people who attended college but did not receive a degree, and people who received an associate's, bachelor's, master's, or professional or doctorate degree. These data include only persons 25 years old and over. The percentages are obtained by dividing the counts of graduates by the total number of persons 25 years old and over. Tha data is collected from 2015 to 2019</td>
    <td><code>79.0</code></td>
</tr>

<tr>
    <td>Education.Bachelor's Degree or Higher</td>
    <td>Float</td> 
    <td>Percentage for the people who attended college but did not receive a degree, and people who received an associate's, bachelor's, master's, or professional or doctorate degree. These data include only persons 25 years old and over. The percentages are obtained by dividing the counts of graduates by the total number of persons 25 years old and over. Tha data is collected from 2015 to 2019.</td>
    <td><code>13.3</code></td>
</tr>

<tr>
    <td>Sales.Accommodation and Food Services Sales</td>
    <td>Integer</td> 
    <td>The Accommodation and Food Services Sales sector comprises establishments providing customers with lodging and/or prepared meals, snacks, and beverages for immediate consumption. The 2012 Economic Census classifies businesses according to the North American Industry Classification System (NAICS), 2012. Sales includes payments from customers for services rendered, from the use of facilities and from merchandise sold. If tax-exempt, sales includes dues and assessments from members and affiliates.</td>
    <td><code>52706</code></td>
</tr>

<tr>
    <td>Miscellaneous.Manufacturers Shipments</td>
    <td>Integer</td> 
    <td>The manufacturing sector comprises establishments engaged in the mechanical, physical, or chemical transformation of materials, substances, or components into new products. The 2012 Economic Census classifies businesses according to the North American Industry Classification System (NAICS), 2012.</td>
    <td><code>-11</code></td>
</tr>

<tr>
    <td>Sales.Retail Sales</td>
    <td>Integer</td> 
    <td>The retail trade sector comprises establishments engaged in retailing merchandise, generally without transformation, and rendering services incidental to the sale of merchandise. The 2007 Economic Census classifies businesses according to the North American Industry Classification System (NAICS), 2012. Sales include merchandise sold for cash or credit at retail and wholesale by establishments primarily engaged in retail trade</td>
    <td><code>602739</code></td>
</tr>

<tr>
    <td>Miscellaneous.Mean Travel Time to Work</td>
    <td>Float</td> 
    <td>Travel time to work refers to the total number of minutes that it usually took the person to get from home to work each day during the reference week. The elapsed time includes time spent waiting for public transportation, picking up passengers in carpools, and time spent in other activities related to getting to work. Mean travel time to work is obtained by dividing the total number of minutes by the number of workers 16 years old and over who did not work at home. Mean travel time to work is rounded to the nearest tenth of a minute. The data was collected from 2015 to 2019</td>
    <td><code>28.9</code></td>
</tr>

<tr>
    <td>Income.Median Houseold Income</td>
    <td>Integer</td> 
    <td>Median of income in the Past 12 Months collected from 2015 to 2019 - Income of Households: This includes the income of the householder and all other individuals 15 years old and over in the household, whether they are related to the householder or not. Because many households consist of only one person, average household income is usually less than average family income.</td>
    <td><code>43396</code></td>
</tr>

<tr>
    <td>Income.Per Capita Income</td>
    <td>Integer</td> 
    <td>Per capita income is the mean income computed for every man, woman, and child in a particular group including those living in group quarters. It is derived by dividing the aggregate income of a particular group by the total population in that group. This measure is rounded to the nearest whole dollar. For the complete definition, go to ACS subject definitions "Income in the Past 12 Months, Per Capita Income." The data is collected from 2015 to 2019.</td>
    <td><code>23122</code></td>
</tr>

<tr>
    <td>Employment.Nonemployer Establishments</td>
    <td>Integer</td> 
    <td>An establishment is a single physical location at which business is conducted or where services or industrial operations are performed. It is not necessarily identical with a company or enterprise, which may consist of one establishment or more. The data was collected from 2018.</td>
    <td><code>4533</code></td>
</tr>

<tr>
    <td>Employment.Firms.Total</td>
    <td>Integer</td> 
    <td>All nonfarm businesses filing Internal Revenue Service tax forms as individual proprietorships, partnerships, or any type of corporation, and with receipts of $1,000 or more. The data was collected in 2012.</td>
    <td><code>4664</code></td>
</tr>

<tr>
    <td>Employment.Firms.Men-Owned</td>
    <td>Integer</td> 
    <td>All men-owned nonfarm businesses filing Internal Revenue Service tax forms as individual proprietorships, partnerships, or any type of corporation, and with receipts of $1,000 or more. The data was collected in 2012.</td>
    <td><code>2629</code></td>
</tr>

<tr>
    <td>Employment.Firms.Women-Owned</td>
    <td>Integer</td> 
    <td>All women-owned nonfarm businesses filing Internal Revenue Service tax forms as individual proprietorships, partnerships, or any type of corporation, and with receipts of $1,000 or more. The data was collected in 2012.</td>
    <td><code>1516</code></td>
</tr>

<tr>
    <td>Employment.Firms.Minority-Owned</td>
    <td>Integer</td> 
    <td>All nonfarm businesses owned by equally minority filing Internal Revenue Service tax forms as individual proprietorships, partnerships, or any type of corporation, and with receipts of $1,000 or more. The data was collected in 2012.</td>
    <td><code>705</code></td>
</tr>

<tr>
    <td>Employment.Firms.Nonminority-Owned</td>
    <td>Integer</td> 
    <td>All nonfarm businesses owned by equally nonminority filing Internal Revenue Service tax forms as individual proprietorships, partnerships, or any type of corporation, and with receipts of $1,000 or more. The data was collected in 2012.</td>
    <td><code>3734</code></td>
</tr>

<tr>
    <td>Employment.Firms.Veteran-Owned</td>
    <td>Integer</td> 
    <td>All nonfarm businesses owned by veteran filing Internal Revenue Service tax forms as individual proprietorships, partnerships, or any type of corporation, and with receipts of $1,000 or more. The data was collected in 2012.</td>
    <td><code>388</code></td>
</tr>

<tr>
    <td>Employment.Firms.Nonveteran-Owned</td>
    <td>Integer</td> 
    <td>All nonfarm businesses owned by non-veteran filing Internal Revenue Service tax forms as individual proprietorships, partnerships, or any type of corporation, and with receipts of $1,000 or more. The data was collected in 2012.</td>
    <td><code>4007</code></td>
</tr>

<tr>
    <td>Population.Population per Square Mile</td>
    <td>Float</td> 
    <td>Population and housing unit density computed by dividing the total population or number of housing units within a geographic entity by the land area of that entity measured in square miles or in square kilometers in 2010</td>
    <td><code>94.3</code></td>
</tr>

<tr>
    <td>Miscellaneous.Land Area</td>
    <td>Float</td> 
    <td>Land area measurements are originally recorded as whole square meters (to convert square meters to square kilometers, divide by 1,000,000; to convert square kilometers to square miles, divide by 2.58999; to convert square meters to square miles, divide by 2,589,988) in 2010.</td>
    <td><code>655.12</code></td>
</tr>

</table>