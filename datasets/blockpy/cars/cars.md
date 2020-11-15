---
permalink: /blockpy/cars/
style: dataset
---

<img class="img-thumbnail float-right"
     src="/images/datasets/cars-icon.png"
     alt="cars icon"
     role="presentation">

# Cars BlockPy Library

<p class='lead'>From the CORGIS Dataset Project</p>

<span class='text-muted'>By Austin Cory Bart <acbart@vt.edu></span><br>
<span class='text-muted'>Version 2.0.0, created 11/3/2015</span><br>
<span class='text-muted'>Tags: cars, vehicles, fuel</span>

# Overview

This is a dataset about cars and how much fuel they use.






# Key Descriptions
    
<table class='table table-condensed table-striped table-bordered table-hover'>
<tr>
    <th class=''>Key</th>
    <th class=''>List of...</th>
    <th class=''>Comment</th>
    <th class=''>Example Value</th>
</tr>

<tr>
    <td>Dimensions.Height</td>
    <td>Integer</td> 
    <td>Unknown values are stored as 0. Unfortunately, many cars do not report this data.</td>
    <td><code>140</code></td>
</tr>

<tr>
    <td>Dimensions.Length</td>
    <td>Integer</td> 
    <td>Unknown values are stored as 0. Unfortunately, many cars do not report this data.</td>
    <td><code>143</code></td>
</tr>

<tr>
    <td>Dimensions.Width</td>
    <td>Integer</td> 
    <td>Unknown values are stored as 0. Unfortunately, many cars do not report this data.</td>
    <td><code>202</code></td>
</tr>

<tr>
    <td>Engine Information.Driveline</td>
    <td>String</td> 
    <td>A string representing whether this is "Rear-wheel drive", "Front-wheel drive", or "All-wheel drive".</td>
    <td><code>"All-wheel drive"</code></td>
</tr>

<tr>
    <td>Engine Information.Engine Type</td>
    <td>String</td> 
    <td>How many cylinders are in this engine. Most cars are either a 6-cylinder or an 8-cylinder.</td>
    <td><code>"Audi 3.2L 6 cylinder 250hp 236ft-lbs"</code></td>
</tr>

<tr>
    <td>Engine Information.Hybrid</td>
    <td>Boolean</td> 
    <td>Whether this is a hybrid engine or not - that is, if it uses both an internal combustion engine and an electric motor.</td>
    <td><code>True</code></td>
</tr>

<tr>
    <td>Engine Information.Number of Forward Gears</td>
    <td>Integer</td> 
    <td>The number of forward gears. If no information is available, it is coded as 0.</td>
    <td><code>6</code></td>
</tr>

<tr>
    <td>Engine Information.Transmission</td>
    <td>String</td> 
    <td>The full name of this type of transmission, based on its Classification and number of forward gears.</td>
    <td><code>"6 Speed Automatic Select Shift"</code></td>
</tr>

<tr>
    <td>Fuel Information.City mpg</td>
    <td>Integer</td> 
    <td>The miles-per-gallon this car gets on average in cities.</td>
    <td><code>18</code></td>
</tr>

<tr>
    <td>Fuel Information.Fuel Type</td>
    <td>String</td> 
    <td>Whether this car takes "Gasoline", "Diesel fuel", "Electricity", "Compressed natural gas", or "E85" (a term that refers to high-level ethanol-gasoline blends containing 51%-83% ethanol). If it is unknown, it is left blank.</td>
    <td><code>"Gasoline"</code></td>
</tr>

<tr>
    <td>Fuel Information.Highway mpg</td>
    <td>Integer</td> 
    <td>The miles-per-gallon this car gets on average on highways.</td>
    <td><code>25</code></td>
</tr>

<tr>
    <td>Identification.Classification</td>
    <td>String</td> 
    <td>Whether this is a "Manual transmission" or an "Automatic transmission". If it is unknown, it is left blank.</td>
    <td><code>"Automatic transmission"</code></td>
</tr>

<tr>
    <td>Identification.ID</td>
    <td>String</td> 
    <td>A unique ID for this particular car, using the year, make, model, and transmission type.</td>
    <td><code>"2009 Audi A3 3.2"</code></td>
</tr>

<tr>
    <td>Identification.Make</td>
    <td>String</td> 
    <td>The maker for this car.</td>
    <td><code>"Audi"</code></td>
</tr>

<tr>
    <td>Identification.Model Year</td>
    <td>String</td> 
    <td>The specific name/year for this car.</td>
    <td><code>"2009 Audi A3"</code></td>
</tr>

<tr>
    <td>Identification.Year</td>
    <td>Integer</td> 
    <td>The year that this car was released.</td>
    <td><code>2009</code></td>
</tr>

<tr>
    <td>Engine Information.Engine Statistics.Horsepower</td>
    <td>Integer</td> 
    <td>A measure of the engine's power. A unit of power equal to 550 foot-pounds per second (745.7 watts).</td>
    <td><code>250</code></td>
</tr>

<tr>
    <td>Engine Information.Engine Statistics.Torque</td>
    <td>Integer</td> 
    <td>The torque of the engine, measured in lb/ft. When an engine is said to make "200 lb-ft of torque", it means that 200 pounds of force on a 1-foot lever is needed to stop its motion.</td>
    <td><code>236</code></td>
</tr>

</table>