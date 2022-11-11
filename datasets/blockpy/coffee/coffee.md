---
permalink: /blockpy/coffee/
style: dataset
---

<img class="img-thumbnail float-right"
     src="/images/datasets/coffee-icon.png"
     alt="coffee icon"
     role="presentation">

# Coffee BlockPy Library

<p class='lead'>From the CORGIS Dataset Project</p>

<span class='text-muted'>By Sam Donald</span><br>
<span class='text-muted'>Version 1.0.0, created 10/28/2022</span><br>
<span class='text-muted'>Tags: Coffee, Cupping</span>

# Overview

There is data for both Arabica and Robusta beans, across many countries and professionally rated on a 0-100 scale. All sorts of scoring/ratings for things like acidity, sweetness, fragrance, balance, etc.


<https://github.com/rfordatascience/tidytuesday/tree/2e9bd5a67e09b14d01f616b00f7f7e0931515d24/data/2020/2020-07-07>




# Key Descriptions
    
<table class='table table-condensed table-striped table-bordered table-hover'>
<tr>
    <th class=''>Key</th>
    <th class=''>List of...</th>
    <th class=''>Comment</th>
    <th class=''>Example Value</th>
</tr>

<tr>
    <td>Location.Country</td>
    <td>String</td> 
    <td>Country where the coffee was produced</td>
    <td><code>"United States"</code></td>
</tr>

<tr>
    <td>Location.Region</td>
    <td>String</td> 
    <td>Region where the coffee was produced</td>
    <td><code>"kona"</code></td>
</tr>

<tr>
    <td>Location.Altitude.Min</td>
    <td>Integer</td> 
    <td>Min altitude of the farm</td>
    <td><code>0</code></td>
</tr>

<tr>
    <td>Location.Altitude.Max</td>
    <td>Integer</td> 
    <td>Max altitude of the farm</td>
    <td><code>0</code></td>
</tr>

<tr>
    <td>Location.Altitude.Average</td>
    <td>Integer</td> 
    <td>Average altitude of the farm</td>
    <td><code>0</code></td>
</tr>

<tr>
    <td>Year</td>
    <td>Integer</td> 
    <td>Production year</td>
    <td><code>2010</code></td>
</tr>

<tr>
    <td>Data.Owner</td>
    <td>String</td> 
    <td>Owner of the coffee</td>
    <td><code>"kona pacific farmers cooperative"</code></td>
</tr>

<tr>
    <td>Data.Type.Species</td>
    <td>String</td> 
    <td>Species of the coffee</td>
    <td><code>"Arabica"</code></td>
</tr>

<tr>
    <td>Data.Type.Variety</td>
    <td>String</td> 
    <td>Variety of the coffee</td>
    <td><code>"nan"</code></td>
</tr>

<tr>
    <td>Data.Type.Processing method</td>
    <td>String</td> 
    <td>Processing method used</td>
    <td><code>"nan"</code></td>
</tr>

<tr>
    <td>Data.Production.Number of bags</td>
    <td>Integer</td> 
    <td>Number of bags tested</td>
    <td><code>25</code></td>
</tr>

<tr>
    <td>Data.Production.Bag weight</td>
    <td>Float</td> 
    <td>Bag weight tested</td>
    <td><code>45.3592</code></td>
</tr>

<tr>
    <td>Data.Scores.Aroma</td>
    <td>Float</td> 
    <td>Aroma score 0-10</td>
    <td><code>8.25</code></td>
</tr>

<tr>
    <td>Data.Scores.Flavor</td>
    <td>Float</td> 
    <td>Flavor score 0-10</td>
    <td><code>8.42</code></td>
</tr>

<tr>
    <td>Data.Scores.Aftertaste</td>
    <td>Float</td> 
    <td>Aftertaste score 0-10</td>
    <td><code>8.08</code></td>
</tr>

<tr>
    <td>Data.Scores.Acidity</td>
    <td>Float</td> 
    <td>Acidity score 0-10</td>
    <td><code>7.75</code></td>
</tr>

<tr>
    <td>Data.Scores.Body</td>
    <td>Float</td> 
    <td>Body score 0-10</td>
    <td><code>7.67</code></td>
</tr>

<tr>
    <td>Data.Scores.Balance</td>
    <td>Float</td> 
    <td>Balance score 0-10</td>
    <td><code>7.83</code></td>
</tr>

<tr>
    <td>Data.Scores.Uniformity</td>
    <td>Float</td> 
    <td>Uniformity score 0-10</td>
    <td><code>10.0</code></td>
</tr>

<tr>
    <td>Data.Scores.Sweetness</td>
    <td>Float</td> 
    <td>Sweetness score 0-10</td>
    <td><code>10.0</code></td>
</tr>

<tr>
    <td>Data.Scores.Moisture</td>
    <td>Float</td> 
    <td>Moisture score 0-10</td>
    <td><code>0.0</code></td>
</tr>

<tr>
    <td>Data.Scores.Total</td>
    <td>Float</td> 
    <td>Total score</td>
    <td><code>86.25</code></td>
</tr>

<tr>
    <td>Data.Color</td>
    <td>String</td> 
    <td>Bean color</td>
    <td><code>"Unknown"</code></td>
</tr>

</table>