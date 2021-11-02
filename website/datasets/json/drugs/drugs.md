---
permalink: /json/drugs/
style: dataset
---

<img class="img-thumbnail float-right"
     src="/images/datasets/drugs-icon.png"
     alt="drugs icon"
     role="presentation">

# Drugs JSON File

<p class='lead'>From the CORGIS Dataset Project</p>

<span class='text-muted'>By Austin Cory Bart <acbart@vt.edu>, Ryan Whitcomb <rwhit94@vt.edu>, Joung Min Choi, Bo Guan</span><br>
<span class='text-muted'>Version 3.0.0, created 10/29/2021</span><br>
<span class='text-muted'>Tags: drugs, substances, drug usage</span>

# Overview

This dataset is about substance abuse (cigarettes, marijuana, cocaine, alcohol) among different age groups and states. Data was collected from individual states as part of the NSDUH study. The data ranges from 2002 to 2018. Both totals (in thousands of people) and rates (as a percentage of the population) are given.



<https://pdas.samhsa.gov/#/>




# Download

Download the following file:

* <a href='../../datasets/json/drugs/drugs.json' download>drugs.json <span class="fas fa-download"></span></a>

# Key Descriptions
    
<table class='table table-condensed table-striped table-bordered table-hover'>
<tr>
    <th class=''>Key</th>
    <th class=''>List of...</th>
    <th class=''>Comment</th>
    <th class=''>Example Value</th>
</tr>

<tr>
    <td>State</td>
    <td>String</td> 
    <td>The state that this report was created for.</td>
    <td><code>"Alabama"</code></td>
</tr>

<tr>
    <td>Year</td>
    <td>Integer</td> 
    <td>The year that this report was created for.</td>
    <td><code>2002</code></td>
</tr>

<tr>
    <td>Population.12-17</td>
    <td>Integer</td> 
    <td>Estimated population for this age group (12 to 17 year olds) in this year from US Census data for this state.</td>
    <td><code>380805</code></td>
</tr>

<tr>
    <td>Population.18-25</td>
    <td>Integer</td> 
    <td>Estimated population for this age group (18 to 25 year olds) in this year from US Census data for this state.</td>
    <td><code>499453</code></td>
</tr>

<tr>
    <td>Population.26+</td>
    <td>Integer</td> 
    <td>Estimated population for this age group (26 years old or older) in this year from US Census data for this state.</td>
    <td><code>2812905</code></td>
</tr>

<tr>
    <td>Totals.Alcohol.Use Disorder Past Year.12-17</td>
    <td>Integer</td> 
    <td>The estimated number of people (in thousands) that have a use disorder on alcohol in the past year among this age group.</td>
    <td><code>18</code></td>
</tr>

<tr>
    <td>Totals.Alcohol.Use Disorder Past Year.18-25</td>
    <td>Integer</td> 
    <td>The estimated number of people (in thousands) that have a use disorder on alcohol in the past year among this age group.</td>
    <td><code>68</code></td>
</tr>

<tr>
    <td>Totals.Alcohol.Use Disorder Past Year.26+</td>
    <td>Integer</td> 
    <td>The estimated number of people (in thousands) that have a use disorder on alcohol in the past year among this age group.</td>
    <td><code>138</code></td>
</tr>

<tr>
    <td>Rates.Alcohol.Use Disorder Past Year.12-17</td>
    <td>Float</td> 
    <td>Percentage of the population that has a use disorder on alcohol in the past year among this age group.</td>
    <td><code>0.048336</code></td>
</tr>

<tr>
    <td>Rates.Alcohol.Use Disorder Past Year.18-25</td>
    <td>Float</td> 
    <td>Percentage of the population that has a use disorder on alcohol in the past year among this age group.</td>
    <td><code>0.13649</code></td>
</tr>

<tr>
    <td>Rates.Alcohol.Use Disorder Past Year.26+</td>
    <td>Float</td> 
    <td>Percentage of the population that has a use disorder on alcohol in the past year among this age group.</td>
    <td><code>0.049068</code></td>
</tr>

<tr>
    <td>Totals.Alcohol.Use Past Month.12-17</td>
    <td>Integer</td> 
    <td>The estimated number of people (in thousands) that have used alcohol in the past month, among this age group.</td>
    <td><code>57</code></td>
</tr>

<tr>
    <td>Totals.Alcohol.Use Past Month.18-25</td>
    <td>Integer</td> 
    <td>The estimated number of people (in thousands) that have used alcohol in the past month, among this age group.</td>
    <td><code>254</code></td>
</tr>

<tr>
    <td>Totals.Alcohol.Use Past Month.26+</td>
    <td>Integer</td> 
    <td>The estimated number of people (in thousands) that have used alcohol in the past month, among this age group.</td>
    <td><code>1048</code></td>
</tr>

<tr>
    <td>Rates.Alcohol.Use Past Month.12-17</td>
    <td>Float</td> 
    <td>Percentage of the population that has used alcohol in the past month, among this age group.</td>
    <td><code>0.150033</code></td>
</tr>

<tr>
    <td>Rates.Alcohol.Use Past Month.18-25</td>
    <td>Float</td> 
    <td>Percentage of the population that has used alcohol in the past month, among this age group.</td>
    <td><code>0.509551</code></td>
</tr>

<tr>
    <td>Rates.Alcohol.Use Past Month.26+</td>
    <td>Float</td> 
    <td>Percentage of the population that has used alcohol in the past month, among this age group.</td>
    <td><code>0.372703</code></td>
</tr>

<tr>
    <td>Totals.Tobacco.Cigarette Past Month.12-17</td>
    <td>Integer</td> 
    <td>The estimated number of people (in thousands) that have used Cigarettes in the past month, among this age group.</td>
    <td><code>52</code></td>
</tr>

<tr>
    <td>Totals.Tobacco.Cigarette Past Month.18-25</td>
    <td>Integer</td> 
    <td>The estimated number of people (in thousands) that have used Cigarettes in the past month, among this age group.</td>
    <td><code>196</code></td>
</tr>

<tr>
    <td>Totals.Tobacco.Cigarette Past Month.26+</td>
    <td>Integer</td> 
    <td>The estimated number of people (in thousands) that have used Cigarettes in the past month, among this age group.</td>
    <td><code>728</code></td>
</tr>

<tr>
    <td>Rates.Tobacco.Cigarette Past Month.12-17</td>
    <td>Float</td> 
    <td>Percentage of the population that has used Cigarettes in the past month, among this age group.</td>
    <td><code>0.136906</code></td>
</tr>

<tr>
    <td>Rates.Tobacco.Cigarette Past Month.18-25</td>
    <td>Float</td> 
    <td>Percentage of the population that has used Cigarettes in the past month, among this age group.</td>
    <td><code>0.392404</code></td>
</tr>

<tr>
    <td>Rates.Tobacco.Cigarette Past Month.26+</td>
    <td>Float</td> 
    <td>Percentage of the population that has used Cigarettes in the past month, among this age group.</td>
    <td><code>0.258844</code></td>
</tr>

<tr>
    <td>Totals.Illicit Drugs.Cocaine Used Past Year.12-17</td>
    <td>Integer</td> 
    <td>The estimated number of people (in thousands) that have used Cocaine in the past year among this age group.</td>
    <td><code>6</code></td>
</tr>

<tr>
    <td>Totals.Illicit Drugs.Cocaine Used Past Year.18-25</td>
    <td>Integer</td> 
    <td>The estimated number of people (in thousands) that have used Cocaine in the past year among this age group.</td>
    <td><code>27</code></td>
</tr>

<tr>
    <td>Totals.Illicit Drugs.Cocaine Used Past Year.26+</td>
    <td>Integer</td> 
    <td>The estimated number of people (in thousands) that have used Cocaine in the past year among this age group.</td>
    <td><code>49</code></td>
</tr>

<tr>
    <td>Rates.Illicit Drugs.Cocaine Used Past Year.12-17</td>
    <td>Float</td> 
    <td>Percentage of the population that has used Cocaine in the past year among this age group.</td>
    <td><code>0.016556</code></td>
</tr>

<tr>
    <td>Rates.Illicit Drugs.Cocaine Used Past Year.18-25</td>
    <td>Float</td> 
    <td>Percentage of the population that has used Cocaine in the past year among this age group.</td>
    <td><code>0.054892</code></td>
</tr>

<tr>
    <td>Rates.Illicit Drugs.Cocaine Used Past Year.26+</td>
    <td>Float</td> 
    <td>Percentage of the population that has used Cocaine in the past year among this age group.</td>
    <td><code>0.017513</code></td>
</tr>

<tr>
    <td>Totals.Marijuana.New Users.12-17</td>
    <td>Integer</td> 
    <td>The estimated number of people (in thousands) that have started using Marijuana in the past year among this age group.</td>
    <td><code>20</code></td>
</tr>

<tr>
    <td>Totals.Marijuana.New Users.18-25</td>
    <td>Integer</td> 
    <td>The estimated number of people (in thousands) that have started using Marijuana in the past year among this age group.</td>
    <td><code>18</code></td>
</tr>

<tr>
    <td>Totals.Marijuana.New Users.26+</td>
    <td>Integer</td> 
    <td>The estimated number of people (in thousands) that have started using Marijuana in the past year among this age group.</td>
    <td><code>2</code></td>
</tr>

<tr>
    <td>Rates.Marijuana.New Users.12-17</td>
    <td>Float</td> 
    <td>Percentage of the population that has started using Marijuana in the past year among this age group.</td>
    <td><code>0.059732</code></td>
</tr>

<tr>
    <td>Rates.Marijuana.New Users.18-25</td>
    <td>Float</td> 
    <td>Percentage of the population that has started using Marijuana in the past year among this age group.</td>
    <td><code>0.062325</code></td>
</tr>

<tr>
    <td>Rates.Marijuana.New Users.26+</td>
    <td>Float</td> 
    <td>Percentage of the population that has started using Marijuana in the past year among this age group.</td>
    <td><code>0.000914</code></td>
</tr>

<tr>
    <td>Totals.Marijuana.Used Past Month.12-17</td>
    <td>Integer</td> 
    <td>The estimated number of people (in thousands) that have used Marijuana in the past month among this age group.</td>
    <td><code>24</code></td>
</tr>

<tr>
    <td>Totals.Marijuana.Used Past Month.18-25</td>
    <td>Integer</td> 
    <td>The estimated number of people (in thousands) that have used Marijuana in the past month among this age group.</td>
    <td><code>62</code></td>
</tr>

<tr>
    <td>Totals.Marijuana.Used Past Month.26+</td>
    <td>Integer</td> 
    <td>The estimated number of people (in thousands) that have used Marijuana in the past month among this age group.</td>
    <td><code>73</code></td>
</tr>

<tr>
    <td>Rates.Marijuana.Used Past Month.12-17</td>
    <td>Float</td> 
    <td>Percentage of the population that has used Marijuana in the past month among this age group.</td>
    <td><code>0.063662</code></td>
</tr>

<tr>
    <td>Rates.Marijuana.Used Past Month.18-25</td>
    <td>Float</td> 
    <td>Percentage of the population that has used Marijuana in the past month among this age group.</td>
    <td><code>0.124672</code></td>
</tr>

<tr>
    <td>Rates.Marijuana.Used Past Month.26+</td>
    <td>Float</td> 
    <td>Percentage of the population that has used Marijuana in the past month among this age group.</td>
    <td><code>0.025967</code></td>
</tr>

<tr>
    <td>Totals.Marijuana.Used Past Year.12-17</td>
    <td>Integer</td> 
    <td>The estimated number of people (in thousands) that have used Marijuana in the past year among this age group.</td>
    <td><code>49</code></td>
</tr>

<tr>
    <td>Totals.Marijuana.Used Past Year.18-25</td>
    <td>Integer</td> 
    <td>The estimated number of people (in thousands) that have used Marijuana in the past year among this age group.</td>
    <td><code>119</code></td>
</tr>

<tr>
    <td>Totals.Marijuana.Used Past Year.26+</td>
    <td>Integer</td> 
    <td>The estimated number of people (in thousands) that have used Marijuana in the past year among this age group.</td>
    <td><code>141</code></td>
</tr>

<tr>
    <td>Rates.Marijuana.Used Past Year.12-17</td>
    <td>Float</td> 
    <td>Percentage of the population that has used Marijuana in the past year among this age group.</td>
    <td><code>0.127535</code></td>
</tr>

<tr>
    <td>Rates.Marijuana.Used Past Year.18-25</td>
    <td>Float</td> 
    <td>Percentage of the population that has used Marijuana in the past year among this age group.</td>
    <td><code>0.23788</code></td>
</tr>

<tr>
    <td>Rates.Marijuana.Used Past Year.26+</td>
    <td>Float</td> 
    <td>Percentage of the population that has used Marijuana in the past year among this age group.</td>
    <td><code>0.050275</code></td>
</tr>

<tr>
    <td>Totals.Tobacco.Use Past Month.12-17</td>
    <td>Integer</td> 
    <td>The estimated number of people (in thousands) that have used Tobacco products in the past month, among this age group. Tobacco Products include cigarettes, smokeless tobacco (i.e., chewing tobacco or snuff), cigars, or pipe tobacco.</td>
    <td><code>63</code></td>
</tr>

<tr>
    <td>Totals.Tobacco.Use Past Month.18-25</td>
    <td>Integer</td> 
    <td>The estimated number of people (in thousands) that have used Tobacco products in the past month, among this age group. Tobacco Products include cigarettes, smokeless tobacco (i.e., chewing tobacco or snuff), cigars, or pipe tobacco.</td>
    <td><code>226</code></td>
</tr>

<tr>
    <td>Totals.Tobacco.Use Past Month.26+</td>
    <td>Integer</td> 
    <td>The estimated number of people (in thousands) that have used Tobacco products in the past month, among this age group. Tobacco Products include cigarettes, smokeless tobacco (i.e., chewing tobacco or snuff), cigars, or pipe tobacco.</td>
    <td><code>930</code></td>
</tr>

<tr>
    <td>Rates.Tobacco.Use Past Month.12-17</td>
    <td>Float</td> 
    <td>Percentage of the population that has used Tobacco products in the past month, among this age group. Tobacco Products include cigarettes, smokeless tobacco (i.e., chewing tobacco or snuff), cigars, or pipe tobacco.</td>
    <td><code>0.166578</code></td>
</tr>

<tr>
    <td>Rates.Tobacco.Use Past Month.18-25</td>
    <td>Float</td> 
    <td>Percentage of the population that has used Tobacco products in the past month, among this age group. Tobacco Products include cigarettes, smokeless tobacco (i.e., chewing tobacco or snuff), cigars, or pipe tobacco.</td>
    <td><code>0.451976</code></td>
</tr>

<tr>
    <td>Rates.Tobacco.Use Past Month.26+</td>
    <td>Float</td> 
    <td>Percentage of the population that has used Tobacco products in the past month, among this age group. Tobacco Products include cigarettes, smokeless tobacco (i.e., chewing tobacco or snuff), cigars, or pipe tobacco.</td>
    <td><code>0.330659</code></td>
</tr>

</table>