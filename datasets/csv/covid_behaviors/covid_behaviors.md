---
permalink: /csv/covid_behaviors/
style: dataset
---

<img class="img-thumbnail float-right"
     src="/images/datasets/covid-behaviors-icon.png"
     alt="covid-behaviors icon"
     role="presentation">

# Covid-Behaviors CSV File

<p class='lead'>From the CORGIS Dataset Project</p>

<span class='text-muted'>By Sam Donald</span><br>
<span class='text-muted'>Version 1.0.0, created 9/23/2022</span><br>
<span class='text-muted'>Tags: Covid-19, social response, healthcare</span>

# Overview

Behavioral analysis of how populations are responding to the pandemic - based on a monthly survey where respondents note counts of various activities along with a 0-100 score related to how much they agree with a given statement


<https://github.com/YouGov-Data/covid-19-tracker>




# Download

Download the following file:

* <a href='../../datasets/csv/covid_behaviors/covid_behaviors.csv' download>covid_behaviors.csv <span class="fas fa-download"></span></a>

# Key Descriptions
    
<table class='table table-condensed table-striped table-bordered table-hover'>
<tr>
    <th class=''>Key</th>
    <th class=''>List of...</th>
    <th class=''>Comment</th>
    <th class=''>Example Value</th>
</tr>

<tr>
    <td>Country</td>
    <td>String</td> 
    <td>Nameof country</td>
    <td><code>"Australia"</code></td>
</tr>

<tr>
    <td>Days since outbreak</td>
    <td>Integer</td> 
    <td>Count of days passed since Covid-19 outbreak began</td>
    <td><code>85</code></td>
</tr>

<tr>
    <td>Counts.Household contacts</td>
    <td>Float</td> 
    <td>Number of household contacts for the previous day (averaged by country)</td>
    <td><code>2.0</code></td>
</tr>

<tr>
    <td>Counts.Total contacts</td>
    <td>Float</td> 
    <td>Total number of contacts for the previous day (averaged by country)</td>
    <td><code>8.2</code></td>
</tr>

<tr>
    <td>Counts.Times left home</td>
    <td>Float</td> 
    <td>Number of times the respondent left the house on the previous day (averaged by country)</td>
    <td><code>1.0</code></td>
</tr>

<tr>
    <td>Counts.Handwashes</td>
    <td>Float</td> 
    <td>Number of times the respondent washed their hands on the previous day (averaged by country)</td>
    <td><code>11.5</code></td>
</tr>

<tr>
    <td>Scores.Isolate.Willingness if symptoms</td>
    <td>Float</td> 
    <td>Score (0-100) related to how much the respondent would be willing to isolate if syptomatic (100 = very willing)</td>
    <td><code>85.8</code></td>
</tr>

<tr>
    <td>Scores.Isolate.Willingness if advised</td>
    <td>Float</td> 
    <td>Score (0-100) related to how much the respondent would be willing to isolate if advised (100 = very willing)</td>
    <td><code>14.3</code></td>
</tr>

<tr>
    <td>Scores.Isolate.Difficulty</td>
    <td>Float</td> 
    <td>Score (0-100) related to how difficult isolating would be (100 = very difficult)</td>
    <td><code>91.9</code></td>
</tr>

<tr>
    <td>Scores.Masks.Outside home</td>
    <td>Float</td> 
    <td>Score (0-100) related to how often the respondent wears a mask outside (100 = all the time)</td>
    <td><code>23.9</code></td>
</tr>

<tr>
    <td>Scores.Masks.Grocery store</td>
    <td>Float</td> 
    <td>Score (0-100) related to how often the respondent wears a mask while at a grocery store (100 = all the time)</td>
    <td><code>0.0</code></td>
</tr>

<tr>
    <td>Scores.Masks.Clothing store</td>
    <td>Float</td> 
    <td>Score (0-100) related to how often the respondent wears a mask while at a clothing store (100 = all the time)</td>
    <td><code>0.0</code></td>
</tr>

<tr>
    <td>Scores.Masks.Work</td>
    <td>Float</td> 
    <td>Score (0-100) related to how often the respondent wears a mask while at work (100 = all the time)</td>
    <td><code>0.0</code></td>
</tr>

<tr>
    <td>Scores.Masks.Public transport</td>
    <td>Float</td> 
    <td>Score (0-100) related to how often the respondent wears a mask while on public transport (100 = all the time)</td>
    <td><code>0.0</code></td>
</tr>

<tr>
    <td>Scores.Avoidance.Symptomatic people</td>
    <td>Float</td> 
    <td>Score (0-100) related to how much effort the respondent takes to avoid symptomatic people (100 = maximum effort)</td>
    <td><code>86.6</code></td>
</tr>

<tr>
    <td>Scores.Avoidance.Going out</td>
    <td>Float</td> 
    <td>Score (0-100) related to how much effort the respondent takes to avoid going out (100 = maximum effort)</td>
    <td><code>77.6</code></td>
</tr>

<tr>
    <td>Scores.Avoidance.Healthcare settings</td>
    <td>Float</td> 
    <td>Score (0-100) related to how much effort the respondent takes to avoid healthcare settings people (100 = maximum effort)</td>
    <td><code>72.9</code></td>
</tr>

<tr>
    <td>Scores.Avoidance.Public transport</td>
    <td>Float</td> 
    <td>Score (0-100) related to how much effort the respondent takes to avoid public transport (100 = maximum effort)</td>
    <td><code>83.3</code></td>
</tr>

<tr>
    <td>Scores.Avoidance.Working outside home</td>
    <td>Float</td> 
    <td>Score (0-100) related to how much effort the respondent takes to avoid working outside the home (100 = maximum effort)</td>
    <td><code>59.4</code></td>
</tr>

<tr>
    <td>Scores.Avoidance.Children going to school</td>
    <td>Float</td> 
    <td>Score (0-100) related to how much effort the respondent and their children takes to avoid school (100 = maximum effort)</td>
    <td><code>79.1</code></td>
</tr>

<tr>
    <td>Scores.Avoidance.Having guests</td>
    <td>Float</td> 
    <td>Score (0-100) related to how much effort the respondent takes to avoid having guests (100 = maximum effort)</td>
    <td><code>87.2</code></td>
</tr>

<tr>
    <td>Scores.Avoidance.Gatherings.Small</td>
    <td>Float</td> 
    <td>Score (0-100) related to how much effort the respondent takes to avoid small gatherings (100 = maximum effort)</td>
    <td><code>85.7</code></td>
</tr>

<tr>
    <td>Scores.Avoidance.Gatherings.Medium</td>
    <td>Float</td> 
    <td>Score (0-100) related to how much effort the respondent takes to avoid medium gatherings (100 = maximum effort)</td>
    <td><code>90.9</code></td>
</tr>

<tr>
    <td>Scores.Avoidance.Gatherings.Large</td>
    <td>Float</td> 
    <td>Score (0-100) related to how much effort the respondent takes to avoid large gatherings (100 = maximum effort)</td>
    <td><code>92.7</code></td>
</tr>

<tr>
    <td>Scores.Avoidance.Crowded areas</td>
    <td>Float</td> 
    <td>Score (0-100) related to how much effort the respondent takes to avoid crowded areas (100 = maximum effort)</td>
    <td><code>89.8</code></td>
</tr>

<tr>
    <td>Scores.Avoidance.Shops</td>
    <td>Float</td> 
    <td>Score (0-100) related to how much effort the respondent takes to avoid shops (100 = maximum effort)</td>
    <td><code>60.2</code></td>
</tr>

<tr>
    <td>Scores.Precautions.Cleaned surfaces</td>
    <td>Float</td> 
    <td>Score (0-100) related to how much effort the respondent takes to clean surfaces (100 = maximum effort)</td>
    <td><code>64.4</code></td>
</tr>

<tr>
    <td>Scores.Precautions.Covered mouth sneeze</td>
    <td>Float</td> 
    <td>Score (0-100) related to how much effort the respondent takes to cover their mouth while sneezing (100 = maximum effort)</td>
    <td><code>91.8</code></td>
</tr>

<tr>
    <td>Scores.Precautions.Used hand sanitiser</td>
    <td>Float</td> 
    <td>Score (0-100) related to how much effort the respondent takes to use hand sanitiser (100 = maximum effort)</td>
    <td><code>72.9</code></td>
</tr>

<tr>
    <td>Scores.Outlooks.Covid is dangerous</td>
    <td>Float</td> 
    <td>Score (0-100) related to how dangergerous the respondent thinks Covid is (100 = very dangerous)</td>
    <td><code>0.0</code></td>
</tr>

<tr>
    <td>Scores.Outlooks.Likely to get covid</td>
    <td>Float</td> 
    <td>Score (0-100) related to how likely the respondent thinks they are to contract Covid (100 = certain)</td>
    <td><code>0.0</code></td>
</tr>

<tr>
    <td>Scores.Outlooks.Life greatly impacted</td>
    <td>Float</td> 
    <td>Score (0-100) related to how much the respondents live is impacted (100 = maximum impact)</td>
    <td><code>0.0</code></td>
</tr>

</table>