---
permalink: /blockpy/cancer/
style: dataset
---

<img class="img-thumbnail float-right"
     src="/images/datasets/cancer-icon.png"
     alt="cancer icon"
     role="presentation">

# Cancer BlockPy Library

<p class='lead'>From the CORGIS Dataset Project</p>

<span class='text-muted'>By Dennis Kafura</span><br>
<span class='text-muted'>Version 1.0.0, created 6/27/2019</span><br>
<span class='text-muted'>Tags: cancer, cancer deaths, medical, health</span>

# Overview

Information about the rates of cancer deaths in each state is reported. The data shows the total rate as well as rates based on sex, age, and race. Rates are also shown for three specific kinds of cancer: breast cancer, colorectal cancer, and lung cancer.


<https://www.socialexplorer.com/explore-tables>




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
    <td>The name of a U.S. State (e.g., Virginia)</td>
    <td><code>"Alabama"</code></td>
</tr>

<tr>
    <td>Total.Rate</td>
    <td>Float</td> 
    <td>Total Cancer Deaths (Rate per 100,000 Population, 2007-2013) 214.2</td>
    <td><code>214.2</code></td>
</tr>

<tr>
    <td>Total.Number</td>
    <td>Float</td> 
    <td>Total Cancer Deaths (2007-2013)</td>
    <td><code>71529.0</code></td>
</tr>

<tr>
    <td>Total.Population</td>
    <td>Float</td> 
    <td>Cumulative Population (Denominator Total_Cancer deaths total_) 2007-2013</td>
    <td><code>33387205.0</code></td>
</tr>

<tr>
    <td>Rates.Age.< 18</td>
    <td>Float</td> 
    <td>Total Cancer Deaths (Under 18 Years, Rate per 100,000 Population, 2007-2013)</td>
    <td><code>2.0</code></td>
</tr>

<tr>
    <td>Rates.Age.18-45</td>
    <td>Float</td> 
    <td>Total Cancer Deaths (18 to 44 Years, Rate per 100,000 Population, 2007-2013)</td>
    <td><code>18.5</code></td>
</tr>

<tr>
    <td>Rates.Age.45-64</td>
    <td>Float</td> 
    <td>Total Cancer Deaths (45 to 64 Years, Rate per 100,000 Population, 2007-2013)</td>
    <td><code>244.7</code></td>
</tr>

<tr>
    <td>Rates.Age.> 64</td>
    <td>Float</td> 
    <td>Total Cancer Deaths (65 Years and Over, Rate per 100,000 Population, 2007-2013)</td>
    <td><code>1017.8</code></td>
</tr>

<tr>
    <td>Rates.Age and Sex.< 18.Female</td>
    <td>Float</td> 
    <td>Female under 18</td>
    <td><code>2.0</code></td>
</tr>

<tr>
    <td>Rates.Age and Sex.< 18.Male</td>
    <td>Float</td> 
    <td>Male   under 18</td>
    <td><code>2.1</code></td>
</tr>

<tr>
    <td>Rates.Age and Sex.18 - 45.Female</td>
    <td>Float</td> 
    <td>Female 18 - 45</td>
    <td><code>20.1</code></td>
</tr>

<tr>
    <td>Rates.Age and Sex.18 - 45.Male</td>
    <td>Float</td> 
    <td>Male   18 - 45</td>
    <td><code>16.8</code></td>
</tr>

<tr>
    <td>Rates.Age and Sex.45 - 64.Female</td>
    <td>Float</td> 
    <td>Female 45 to 64 Years</td>
    <td><code>201.0</code></td>
</tr>

<tr>
    <td>Rates.Age and Sex.45 - 64.Male</td>
    <td>Float</td> 
    <td>Male   45 to 64 Years</td>
    <td><code>291.5</code></td>
</tr>

<tr>
    <td>Rates.Age and Sex.> 64.Female</td>
    <td>Float</td> 
    <td>Female 65 Years and Over</td>
    <td><code>803.6</code></td>
</tr>

<tr>
    <td>Rates.Age and Sex.> 64.Male</td>
    <td>Float</td> 
    <td>Male   65 Years and Over</td>
    <td><code>1308.6</code></td>
</tr>

<tr>
    <td>Rates.Race.White</td>
    <td>Float</td> 
    <td>Total Cancer Deaths (White, Rate per 100,000 Population, 2007-2013)</td>
    <td><code>186.1</code></td>
</tr>

<tr>
    <td>Rates.Race.White non-Hispanic</td>
    <td>Float</td> 
    <td>Total Cancer Deaths (White non-Hispanic, Rate per 100,000 Population, 2007-2013)</td>
    <td><code>187.5</code></td>
</tr>

<tr>
    <td>Rates.Race.Black</td>
    <td>Float</td> 
    <td>Total Cancer Deaths (Black or African American, Rate per 100,000 Population, 2007-2013)</td>
    <td><code>216.1</code></td>
</tr>

<tr>
    <td>Rates.Race.Asian</td>
    <td>Float</td> 
    <td>Total Cancer Deaths (Asian or Pacific Islander, Rate per 100,000 Population, 2007-2013)</td>
    <td><code>81.3</code></td>
</tr>

<tr>
    <td>Rates.Race.Indigenous</td>
    <td>Float</td> 
    <td>Total Cancer Deaths (American Indian or Alaska Native, Rate per 100,000 Population, 2007-2013)</td>
    <td><code>69.9</code></td>
</tr>

<tr>
    <td>Rates.Race and Sex.Female.White</td>
    <td>Float</td> 
    <td>Female: White</td>
    <td><code>149.2</code></td>
</tr>

<tr>
    <td>Rates.Race and Sex.Female.White non-Hispanic</td>
    <td>Float</td> 
    <td>Female: White non-Hispanic</td>
    <td><code>150.2</code></td>
</tr>

<tr>
    <td>Rates.Race and Sex.Female.Black</td>
    <td>Float</td> 
    <td>Female: Black or African American</td>
    <td><code>167.2</code></td>
</tr>

<tr>
    <td>Rates.Race and Sex.Female.Black non-Hispanic</td>
    <td>Float</td> 
    <td>Female: Black or African American non-Hispanic</td>
    <td><code>167.9</code></td>
</tr>

<tr>
    <td>Rates.Race and Sex.Female.Asian</td>
    <td>Float</td> 
    <td>Female: Asian or Pacific Islander</td>
    <td><code>84.9</code></td>
</tr>

<tr>
    <td>Rates.Race and Sex.Female.Indigenous</td>
    <td>Float</td> 
    <td>Female: American Indian or Alaska Native</td>
    <td><code>53.8</code></td>
</tr>

<tr>
    <td>Rates.Race and Sex.Male.White</td>
    <td>Float</td> 
    <td>Male: White</td>
    <td><code>237.1</code></td>
</tr>

<tr>
    <td>Rates.Race and Sex.Male.White non-Hispanic</td>
    <td>Float</td> 
    <td>Male: White non-Hispanic</td>
    <td><code>239.2</code></td>
</tr>

<tr>
    <td>Rates.Race and Sex.Male.Black</td>
    <td>Float</td> 
    <td>Male: Black or African American</td>
    <td><code>297.9</code></td>
</tr>

<tr>
    <td>Rates.Race and Sex.Male.Black non-Hispanic</td>
    <td>Float</td> 
    <td>Male: Black or African American non-Hispanic</td>
    <td><code>299.2</code></td>
</tr>

<tr>
    <td>Rates.Race and Sex.Male.Asian</td>
    <td>Float</td> 
    <td>Male: Asian or Pacific Islander</td>
    <td><code>75.7</code></td>
</tr>

<tr>
    <td>Rates.Race and Sex.Male.Indigenous</td>
    <td>Float</td> 
    <td>Male: American Indian or Alaska Native</td>
    <td><code>88.3</code></td>
</tr>

<tr>
    <td>Rates.Race.Hispanic</td>
    <td>Float</td> 
    <td>Hispanic or Latino</td>
    <td><code>66.5</code></td>
</tr>

<tr>
    <td>Rates.Race and Sex.Female.Hispanic</td>
    <td>Float</td> 
    <td>Female: Hispanic or Latino</td>
    <td><code>58.3</code></td>
</tr>

<tr>
    <td>Rates.Race and Sex.Male.Hispanic</td>
    <td>Float</td> 
    <td>Male: Hispanic or Latino</td>
    <td><code>77.1</code></td>
</tr>

<tr>
    <td>Types.Breast.Total</td>
    <td>Float</td> 
    <td>Breast Cancer Deaths (Rate per 100,000 Population, 2007-2013)</td>
    <td><code>27.4</code></td>
</tr>

<tr>
    <td>Types.Breast.Age.18 - 44</td>
    <td>Float</td> 
    <td>18 to 44 Years</td>
    <td><code>5.1</code></td>
</tr>

<tr>
    <td>Types.Breast.Age.45 - 64</td>
    <td>Float</td> 
    <td>45 to 64 Years</td>
    <td><code>39.8</code></td>
</tr>

<tr>
    <td>Types.Breast.Age.> 64</td>
    <td>Float</td> 
    <td>65 Years and Over</td>
    <td><code>95.7</code></td>
</tr>

<tr>
    <td>Types.Breast.Race.White</td>
    <td>Float</td> 
    <td>White</td>
    <td><code>20.5</code></td>
</tr>

<tr>
    <td>Types.Breast.Race.White non-Hispanic </td>
    <td>Float</td> 
    <td>White non-Hispanic</td>
    <td><code>20.6</code></td>
</tr>

<tr>
    <td>Types.Breast.Race.Black</td>
    <td>Float</td> 
    <td>Black or African American</td>
    <td><code>30.3</code></td>
</tr>

<tr>
    <td>Types.Breast.Race.Black non-Hispanic</td>
    <td>Float</td> 
    <td>Black or African American non-Hispanic</td>
    <td><code>30.4</code></td>
</tr>

<tr>
    <td>Types.Breast.Race.Asian</td>
    <td>Float</td> 
    <td>Asian or Pacific Islander</td>
    <td><code>0.0</code></td>
</tr>

<tr>
    <td>Types.Breast.Race.Indigenous</td>
    <td>Float</td> 
    <td>American Indian or Alaska Native</td>
    <td><code>0.0</code></td>
</tr>

<tr>
    <td>Types.Breast.Race.Hispanic</td>
    <td>Float</td> 
    <td>Hispanic or Latino</td>
    <td><code>0.0</code></td>
</tr>

<tr>
    <td>Types.Colorectal.Total</td>
    <td>Float</td> 
    <td>Colorectal Cancer Deaths (Rate per 100,000 Population, 2007-2013)</td>
    <td><code>19.4</code></td>
</tr>

<tr>
    <td>Types.Colorectal.Age and Sex.Female.18 - 44</td>
    <td>Float</td> 
    <td>Female 18 to 44 Years</td>
    <td><code>1.6</code></td>
</tr>

<tr>
    <td>Types.Colorectal.Age and Sex.Male.18 - 44</td>
    <td>Float</td> 
    <td>Male 18 to 44 Years</td>
    <td><code>2.3</code></td>
</tr>

<tr>
    <td>Types.Colorectal.Age and Sex.Female.45 - 64</td>
    <td>Float</td> 
    <td>Female 45 to 64 Years</td>
    <td><code>18.0</code></td>
</tr>

<tr>
    <td>Types.Colorectal.Age and Sex.Male.45 - 64</td>
    <td>Float</td> 
    <td>Male 45 to 64 Years</td>
    <td><code>28.7</code></td>
</tr>

<tr>
    <td>Types.Colorectal.Age and Sex.Female.> 64</td>
    <td>Float</td> 
    <td>Female 65 Years and Over</td>
    <td><code>78.4</code></td>
</tr>

<tr>
    <td>Types.Colorectal.Age and Sex.Male.> 64</td>
    <td>Float</td> 
    <td>Male 65 Years and Over</td>
    <td><code>106.0</code></td>
</tr>

<tr>
    <td>Types.Colorectal.Race.White</td>
    <td>Float</td> 
    <td>White</td>
    <td><code>15.9</code></td>
</tr>

<tr>
    <td>Types.Colorectal.Race.White non-Hispanic</td>
    <td>Float</td> 
    <td>White non-Hispanic</td>
    <td><code>16.0</code></td>
</tr>

<tr>
    <td>Types.Colorectal.Race.Black</td>
    <td>Float</td> 
    <td>Black or African American</td>
    <td><code>24.4</code></td>
</tr>

<tr>
    <td>Types.Colorectal.Race.Black non-Hispanic</td>
    <td>Float</td> 
    <td>Black or African American non-Hispanic</td>
    <td><code>24.5</code></td>
</tr>

<tr>
    <td>Types.Colorectal.Race.Asian</td>
    <td>Float</td> 
    <td>Asian or Pacific Islander</td>
    <td><code>0.0</code></td>
</tr>

<tr>
    <td>Types.Colorectal.Race.Indigenous</td>
    <td>Float</td> 
    <td>American Indian or Alaska Native</td>
    <td><code>0.0</code></td>
</tr>

<tr>
    <td>Types.Colorectal.Race.Hispanic</td>
    <td>Float</td> 
    <td>Hispanic or Latino</td>
    <td><code>5.7</code></td>
</tr>

<tr>
    <td>Types.Lung.Total</td>
    <td>Float</td> 
    <td>Lung Cancer Deaths (Rate per 100,000 Population, 2007-2013)</td>
    <td><code>66.4</code></td>
</tr>

<tr>
    <td>Types.Lung.Age and Sex.Female.18 - 44</td>
    <td>Float</td> 
    <td>Female 18 to 44 Years</td>
    <td><code>1.7</code></td>
</tr>

<tr>
    <td>Types.Lung.Age and Sex.Male.18 - 44</td>
    <td>Float</td> 
    <td>Male 18 to 44 Years</td>
    <td><code>2.4</code></td>
</tr>

<tr>
    <td>Types.Lung.Age and Sex.Female.45 - 64</td>
    <td>Float</td> 
    <td>Female 45 to 64 Years</td>
    <td><code>54.8</code></td>
</tr>

<tr>
    <td>Types.Lung.Age and Sex.Male.45 - 64</td>
    <td>Float</td> 
    <td>Male 45 to 64 Years</td>
    <td><code>102.9</code></td>
</tr>

<tr>
    <td>Types.Lung.Age and Sex.Female.> 64</td>
    <td>Float</td> 
    <td>Female 65 Years and Over</td>
    <td><code>221.7</code></td>
</tr>

<tr>
    <td>Types.Lung.Age and Sex.Male.> 64</td>
    <td>Float</td> 
    <td>Male 65 Years and Over</td>
    <td><code>457.4</code></td>
</tr>

<tr>
    <td>Types.Lung.Race.White</td>
    <td>Float</td> 
    <td>White</td>
    <td><code>59.9</code></td>
</tr>

<tr>
    <td>Types.Lung.Race.White non-Hispanic</td>
    <td>Float</td> 
    <td>White non-Hispanic</td>
    <td><code>60.4</code></td>
</tr>

<tr>
    <td>Types.Lung.Race.Black</td>
    <td>Float</td> 
    <td>Black or African American</td>
    <td><code>52.6</code></td>
</tr>

<tr>
    <td>Types.Lung.Race.Black non-Hispanic</td>
    <td>Float</td> 
    <td>Black or African American non-Hispanic</td>
    <td><code>52.8</code></td>
</tr>

<tr>
    <td>Types.Lung.Race.Asian</td>
    <td>Float</td> 
    <td>Asian or Pacific Islander</td>
    <td><code>23.0</code></td>
</tr>

<tr>
    <td>Types.Lung.Race.Indigenous</td>
    <td>Float</td> 
    <td>American Indian or Alaska Native</td>
    <td><code>22.9</code></td>
</tr>

<tr>
    <td>Types.Lung.Race.Hispanic</td>
    <td>Float</td> 
    <td>Hispanic or Latino</td>
    <td><code>14.8</code></td>
</tr>

</table>