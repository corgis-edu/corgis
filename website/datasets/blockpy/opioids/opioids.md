---
permalink: /blockpy/opioids/
style: dataset
---

<img class="img-thumbnail float-right"
     src="/images/datasets/opioid-image.png"
     alt="opioids icon"
     role="presentation">

# Opioids BlockPy Library

<p class='lead'>From the CORGIS Dataset Project</p>

<span class='text-muted'>By Dennis Kafura, Joung Min Choi, Bo Guan</span><br>
<span class='text-muted'>Version 2.0.0, created 10/27/2021</span><br>
<span class='text-muted'>Tags: opioids, drug deaths, heroin, cocaine, drug overdose</span>

# Overview

All opioids are chemically related and interact with opioid receptors on nerve cells in the body and brain. Opioid pain relievers  can be misused (taken in a different way or in a larger quantity than prescribed, or taken without a doctor's prescription). Regular use - even as prescribed by a doctor - can lead to dependence and, when misused, opioid pain relievers can lead to addiction, overdose incidents, and deaths. The National Institute on Drug Abuse collects and analyzes data about deaths from opioid abuse. This data set reports on data from 1999-2019.


<https://www.drugabuse.gov/related-topics/trends-statistics/overdose-death-rates>




# Key Descriptions
    
<table class='table table-condensed table-striped table-bordered table-hover'>
<tr>
    <th class=''>Key</th>
    <th class=''>List of...</th>
    <th class=''>Comment</th>
    <th class=''>Example Value</th>
</tr>

<tr>
    <td>Year</td>
    <td>Integer</td> 
    <td>The year for which the data is reported (1999-2019)</td>
    <td><code>1999</code></td>
</tr>

<tr>
    <td>Number.All</td>
    <td>Integer</td> 
    <td>Total number of overdose deaths from all drugs</td>
    <td><code>16849</code></td>
</tr>

<tr>
    <td>Number.Opioid.Any</td>
    <td>Integer</td> 
    <td>Total number of overdose deaths due to any Opioid drug</td>
    <td><code>8050</code></td>
</tr>

<tr>
    <td>Number.Opioid.Prescription</td>
    <td>Integer</td> 
    <td>Total number of overdose deaths due to a prescription Opioid drug</td>
    <td><code>3442</code></td>
</tr>

<tr>
    <td>Number.Opioid.Synthetic</td>
    <td>Integer</td> 
    <td>Total number of overdose deaths due to a synthetic Opioid drug (e.g. fentanyl)</td>
    <td><code>730</code></td>
</tr>

<tr>
    <td>Number.Opioid.Heroin</td>
    <td>Integer</td> 
    <td>Total number of overdose deaths due to heroin</td>
    <td><code>1960</code></td>
</tr>

<tr>
    <td>Number.Opioid.Cocaine</td>
    <td>Integer</td> 
    <td>Total number of overdose deaths due to cocaine</td>
    <td><code>3822</code></td>
</tr>

<tr>
    <td>Rate.All.Total</td>
    <td>Float</td> 
    <td>The rate of overdose deaths due to all drugs per 100,000 people</td>
    <td><code>6.1</code></td>
</tr>

<tr>
    <td>Rate.All.Sex.Female</td>
    <td>Float</td> 
    <td>The rate of overdose deaths among women due to all drugs per 100,000 people</td>
    <td><code>3.9</code></td>
</tr>

<tr>
    <td>Rate.All.Sex.Male</td>
    <td>Float</td> 
    <td>The rate of overdose deaths among men due to all drugs per 100,000 people</td>
    <td><code>8.2</code></td>
</tr>

<tr>
    <td>Rate.All.Race.White</td>
    <td>Float</td> 
    <td>The rate of overdose deaths among White non-Hispanic persons due to all drugs per 100,000 people</td>
    <td><code>6.2</code></td>
</tr>

<tr>
    <td>Rate.All.Race.Black</td>
    <td>Float</td> 
    <td>The rate of overdose deaths among Black non-Hispanic persons from all drugs per 100,000 people</td>
    <td><code>7.5</code></td>
</tr>

<tr>
    <td>Rate.All.Race.Asian or Pacific Islander</td>
    <td>Float</td> 
    <td>The rate of overdose deaths among Asian or Pacific Islander non-Hispanic persons from all drugs per 100,000 people</td>
    <td><code>1.2</code></td>
</tr>

<tr>
    <td>Rate.All.Race.Hispanic</td>
    <td>Float</td> 
    <td>The rate of overdose deaths among Hispanic persons due to all drugs per 100,000 people</td>
    <td><code>5.4</code></td>
</tr>

<tr>
    <td>Rate.All.Race.American Indian or Alaska Native</td>
    <td>Float</td> 
    <td>The rate of overdose deaths among American Indian or Alaska Native non-Hispanic persons due to all drugs per 100,000 people</td>
    <td><code>6.0</code></td>
</tr>

<tr>
    <td>Rate.Opioid.Any.Total</td>
    <td>Float</td> 
    <td>The rate of overdose deaths due to any Opioid drug per 100,000 people</td>
    <td><code>2.9</code></td>
</tr>

<tr>
    <td>Rate.Opioid.Any.Sex.Female</td>
    <td>Float</td> 
    <td>The rate of overdose deaths among women due to any Opioid drug per 100,000 people</td>
    <td><code>1.4</code></td>
</tr>

<tr>
    <td>Rate.Opioid.Any.Sex.Male</td>
    <td>Float</td> 
    <td>The rate of overdose deaths among men due to any Opioid drug per 100,000 people</td>
    <td><code>4.3</code></td>
</tr>

<tr>
    <td>Rate.Opioid.Any.Race.White</td>
    <td>Float</td> 
    <td>The rate of overdose deaths among White non-Hispanic persons due to any Opioid drug per 100,000 people</td>
    <td><code>2.8</code></td>
</tr>

<tr>
    <td>Rate.Opioid.Any.Race.Black</td>
    <td>Float</td> 
    <td>The rate of overdose deaths among Asian or Pacific Islander non-Hispanic persons due to any Opioid drug per 100,000 people</td>
    <td><code>3.5</code></td>
</tr>

<tr>
    <td>Rate.Opioid.Any.Race.Asian or Pacific Islander</td>
    <td>Float</td> 
    <td>The rate of overdose deaths among Black non-Hispanic persons due to any Opioid drug per 100,001 people</td>
    <td><code>0.3</code></td>
</tr>

<tr>
    <td>Rate.Opioid.Any.Race.Hispanic</td>
    <td>Float</td> 
    <td>The rate of overdose deaths among Hispanic persons due to any Opioid drug per 100,000 people</td>
    <td><code>3.5</code></td>
</tr>

<tr>
    <td>Rate.Opioid.Any.Race.American Indian or Alaska Native</td>
    <td>Float</td> 
    <td>The rate of overdose deaths among American Indian or Alaska Native non-Hispanic persons due to any Opioid drug per 100,000 people</td>
    <td><code>2.9</code></td>
</tr>

<tr>
    <td>Rate.Opioid.Prescription.Total</td>
    <td>Float</td> 
    <td>The rate of overdose deaths due to a prescription Opioid drug per 100,000 people</td>
    <td><code>1.2</code></td>
</tr>

<tr>
    <td>Rate.Opioid.Prescription.Sex.Female</td>
    <td>Float</td> 
    <td>The rate of overdose deaths among women due to a prescription Opioid drug per 100,000 people</td>
    <td><code>0.7</code></td>
</tr>

<tr>
    <td>Rate.Opioid.Prescription.Sex.Male</td>
    <td>Float</td> 
    <td>The rate of overdose deaths among men due to a prescription Opioid drug per 100,000 people</td>
    <td><code>1.7</code></td>
</tr>

<tr>
    <td>Rate.Opioid.Prescription.Race.White</td>
    <td>Float</td> 
    <td>The rate of overdose deaths among White non-Hispanic persons due to a prescription Opioid drug per 100,000 people</td>
    <td><code>1.3</code></td>
</tr>

<tr>
    <td>Rate.Opioid.Prescription.Race.Black</td>
    <td>Float</td> 
    <td>The rate of overdose deaths among Black non-Hispanic persons due to a prescription Opioid drug  per 100,000 people</td>
    <td><code>0.8</code></td>
</tr>

<tr>
    <td>Rate.Opioid.Prescription.Race.Hispanic</td>
    <td>Float</td> 
    <td>The rate of overdose deaths among Hispanic persons due to a prescription Opioid drug per 100,000 people</td>
    <td><code>1.6</code></td>
</tr>

<tr>
    <td>Rate.Opioid.Prescription.Race.American Indian or Alaska Native</td>
    <td>Float</td> 
    <td>The rate of overdose deaths among American Indian or Alaska Native non-Hispanic persons due to a prescription Opioid drug per 100,001 people</td>
    <td><code>1.3</code></td>
</tr>

<tr>
    <td>Rate.Opioid.Synthetic.Total</td>
    <td>Float</td> 
    <td>The rate of overdose deaths due to a synthetic Opioid drug per 100,000 people</td>
    <td><code>0.3</code></td>
</tr>

<tr>
    <td>Rate.Opioid.Synthetic.Sex.Female</td>
    <td>Float</td> 
    <td>The rate of overdose deaths among women due to a synthetic Opioid drug per 100,000 people</td>
    <td><code>0.2</code></td>
</tr>

<tr>
    <td>Rate.Opioid.Synthetic.Sex.Male</td>
    <td>Float</td> 
    <td>The rate of overdose deaths among men due to a synthetic Opioid drug per 100,000 people</td>
    <td><code>0.3</code></td>
</tr>

<tr>
    <td>Rate.Opioid.Synthetic.Race.White</td>
    <td>Float</td> 
    <td>The rate of overdose deaths among White non-Hispanic persons due to a synthetic Opioid drug per 100,000 people</td>
    <td><code>0.3</code></td>
</tr>

<tr>
    <td>Rate.Opioid.Synthetic.Race.Black</td>
    <td>Float</td> 
    <td>The rate of overdose deaths among Black non-Hispanic persons due to a synthetic Opioid drug per 100,000 people</td>
    <td><code>0.1</code></td>
</tr>

<tr>
    <td>Rate.Opioid.Synthetic.Race.Hispanic</td>
    <td>Float</td> 
    <td>The rate of overdose deaths among Hispanic persons due to a synthetic Opioid drug per 100,000 people</td>
    <td><code>0.1</code></td>
</tr>

<tr>
    <td>Rate.Opioid.Heroin.Total</td>
    <td>Float</td> 
    <td>The rate of overdose deaths due to heroin per 100,000 people</td>
    <td><code>0.7</code></td>
</tr>

<tr>
    <td>Rate.Opioid.Heroin.Sex.Female</td>
    <td>Float</td> 
    <td>The rate of overdose deaths among women due to heroin per 100,000 people</td>
    <td><code>0.2</code></td>
</tr>

<tr>
    <td>Rate.Opioid.Heroin.Sex.Male</td>
    <td>Float</td> 
    <td>The rate of overdose deaths among men due to heroin per 100,000 people</td>
    <td><code>1.2</code></td>
</tr>

<tr>
    <td>Rate.Opioid.Heroin.Race.White</td>
    <td>Float</td> 
    <td>The rate of overdose deaths among White non-Hispanic persons due to heroin per 100,000 people</td>
    <td><code>0.7</code></td>
</tr>

<tr>
    <td>Rate.Opioid.Heroin.Race.Black</td>
    <td>Float</td> 
    <td>The rate of overdose deaths among Black non-Hispanic persons due to heroin per 100,000 people</td>
    <td><code>0.8</code></td>
</tr>

<tr>
    <td>Rate.Opioid.Heroin.Race.Hispanic</td>
    <td>Float</td> 
    <td>The rate of overdose deaths among American Indian or Alaska Native non-Hispanic persons due to heroin per 100,000 people</td>
    <td><code>1.1</code></td>
</tr>

<tr>
    <td>Rate.Opioid.Cocaine.Total</td>
    <td>Float</td> 
    <td>The rate of overdose deaths due to cocaine per 100,000 people</td>
    <td><code>1.4</code></td>
</tr>

<tr>
    <td>Rate.Opioid.Cocaine.Sex.Female</td>
    <td>Float</td> 
    <td>The rate of overdose deaths among women due to cocaine per 100,000 people</td>
    <td><code>0.6</code></td>
</tr>

<tr>
    <td>Rate.Opioid.Cocaine.Sex.Male</td>
    <td>Float</td> 
    <td>The rate of overdose deaths among men due to cocaine per 100,000 people</td>
    <td><code>2.1</code></td>
</tr>

<tr>
    <td>Rate.Opioid.Cocaine.Race.White</td>
    <td>Float</td> 
    <td>The rate of overdose deaths among White non-Hispanic persons due to cocaine per 100,000 people</td>
    <td><code>1.0</code></td>
</tr>

<tr>
    <td>Rate.Opioid.Cocaine.Race.Black</td>
    <td>Float</td> 
    <td>The rate of overdose deaths among Black non-Hispanic persons due to cocaine per 100,000 people</td>
    <td><code>3.7</code></td>
</tr>

<tr>
    <td>Rate.Opioid.Cocaine.Race.Hispanic</td>
    <td>Float</td> 
    <td>The rate of overdose deaths among American Indian or Alaska Native non-Hispanic persons due to cocaine per 100,000 people</td>
    <td><code>1.7</code></td>
</tr>

<tr>
    <td>Rate.Opioid.Cocaine.Race.American Indian or Alaska Native</td>
    <td>Float</td> 
    <td>The rate of overdose deaths among Hispanic persons due to cocaine per 100,001 people</td>
    <td><code>0.9</code></td>
</tr>

</table>