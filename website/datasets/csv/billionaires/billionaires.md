---
permalink: /csv/billionaires/
style: dataset
---

<img class="img-thumbnail float-right"
     src="/images/datasets/billionaires-icon.png"
     alt="billionaires icon"
     role="presentation">

# Billionaires CSV File

<p class='lead'>From the CORGIS Dataset Project</p>

<span class='text-muted'>By Ryan Whitcomb <rwhit94></span><br>
<span class='text-muted'>Version 2.0.0, created 5-17-16</span><br>
<span class='text-muted'>Tags: money, rich, wealthy, people, person, billionaire</span>

# Overview

Researchers have compiled a multi-decade database of the super-rich. Building off the Forbes World's Billionaires lists from 1996-2014, scholars at Peterson Institute for International Economics have added a couple dozen more variables about each billionaire - including whether they were self-made or inherited their wealth. (Roughly half of European billionaires and one-third of U.S. billionaires got a significant financial boost from family, the authors estimate.)


<http://www.iie.com/publications/interstitial.cfm?ResearchID=2917>




# Download

Download the following file:

* <a href='../../datasets/csv/billionaires/billionaires.csv' download>billionaires.csv <span class="fas fa-download"></span></a>

# Key Descriptions
    
<table class='table table-condensed table-striped table-bordered table-hover'>
<tr>
    <th class=''>Key</th>
    <th class=''>List of...</th>
    <th class=''>Comment</th>
    <th class=''>Example Value</th>
</tr>

<tr>
    <td>name</td>
    <td>String</td> 
    <td>The name of the billionaire.</td>
    <td><code>"Bill Gates"</code></td>
</tr>

<tr>
    <td>rank</td>
    <td>Integer</td> 
    <td>The rank of this billionaire compared to the rest of the billionaires reported on. A lower rank means they make more money.</td>
    <td><code>1</code></td>
</tr>

<tr>
    <td>year</td>
    <td>Integer</td> 
    <td>The year that data about this billionaire was collected.</td>
    <td><code>1996</code></td>
</tr>

<tr>
    <td>company.founded</td>
    <td>Integer</td> 
    <td>The year that the company was founded.</td>
    <td><code>1975</code></td>
</tr>

<tr>
    <td>company.name</td>
    <td>String</td> 
    <td>The name of the company.</td>
    <td><code>"Microsoft"</code></td>
</tr>

<tr>
    <td>company.relationship</td>
    <td>String</td> 
    <td>The billionaires relationship to the company.</td>
    <td><code>"founder"</code></td>
</tr>

<tr>
    <td>company.sector</td>
    <td>String</td> 
    <td>The sector of the business, or what segment of the economy they fit into.</td>
    <td><code>" Software"</code></td>
</tr>

<tr>
    <td>company.type</td>
    <td>String</td> 
    <td>The type of business for this company.</td>
    <td><code>"new"</code></td>
</tr>

<tr>
    <td>demographics.age</td>
    <td>Integer</td> 
    <td>The current age of the billionaire. Ages that are represented as -1 stand for ages that were not available in the data that was collected.</td>
    <td><code>40</code></td>
</tr>

<tr>
    <td>demographics.gender</td>
    <td>String</td> 
    <td>A string representing their gender.</td>
    <td><code>"male"</code></td>
</tr>

<tr>
    <td>location.citizenship</td>
    <td>String</td> 
    <td>The name of the country that this billionaire has citizenship with.</td>
    <td><code>"United States"</code></td>
</tr>

<tr>
    <td>location.country code</td>
    <td>String</td> 
    <td>the 3-letter country code of the country where this billionaire has citizenship.</td>
    <td><code>"USA"</code></td>
</tr>

<tr>
    <td>location.gdp</td>
    <td>Float</td> 
    <td>The "Gross Domestic Product" of the country where the billionaire has citizenship. This is one of the primary indicators used to gauge the health of a country's economy. It represents the total dollar value of all goods and services produced over a specific time period; you can think of it as the size of the economy.</td>
    <td><code>8100000000000.0</code></td>
</tr>

<tr>
    <td>location.region</td>
    <td>String</td> 
    <td>The region of the world where this billionaire lives.</td>
    <td><code>"North America"</code></td>
</tr>

<tr>
    <td>wealth.type</td>
    <td>String</td> 
    <td>The type of billionaire that they are.</td>
    <td><code>"founder non-finance"</code></td>
</tr>

<tr>
    <td>wealth.worth in billions</td>
    <td>Float</td> 
    <td>The number of billion of dollars that this billionaire is worth.</td>
    <td><code>18.5</code></td>
</tr>

<tr>
    <td>wealth.how.category</td>
    <td>String</td> 
    <td>A category representing where their money came from.</td>
    <td><code>"New Sectors"</code></td>
</tr>

<tr>
    <td>wealth.how.from emerging</td>
    <td>Boolean</td> 
    <td>Whether the money came from emerging markets.</td>
    <td><code>True</code></td>
</tr>

<tr>
    <td>wealth.how.industry</td>
    <td>String</td> 
    <td>The specific industry this billionaire profitted from.</td>
    <td><code>"Technology-Computer"</code></td>
</tr>

<tr>
    <td>wealth.how.inherited</td>
    <td>String</td> 
    <td>The way that this money was inherited (or not inherited). Inheritance can come from a spouse, the father, or from multiple generations within a family (either 3, 4, or 5+).</td>
    <td><code>"not inherited"</code></td>
</tr>

<tr>
    <td>wealth.how.was founder</td>
    <td>Boolean</td> 
    <td>Whether the billionaire was the founder of their company.</td>
    <td><code>True</code></td>
</tr>

<tr>
    <td>wealth.how.was political</td>
    <td>Boolean</td> 
    <td>Whether the money came from politics.</td>
    <td><code>True</code></td>
</tr>

</table>