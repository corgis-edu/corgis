---
permalink: /blockpy/electricity/
style: dataset
---

<img class="img-thumbnail float-right"
     src="/images/datasets/power-line-icon.png"
     alt="electricity icon"
     role="presentation">

# Electricity BlockPy Library

<p class='lead'>From the CORGIS Dataset Project</p>

<span class='text-muted'>By Dennis Kafura, Joung Min Choi, and Bo Guan</span><br>
<span class='text-muted'>Version 2.0.0, created 9/7/2021</span><br>
<span class='text-muted'>Tags: elctricity,electric power, utilities, utility revenues</span>

# Overview

The U.S. Energy Information Adminstration collects and curates self-reported information from energy utilities about energy production and usage in the United States. This data set contains information from over 2,000 U.S. utilities in 2017. The information includes sources of energy, its uses in different economic sectors, and the revenues obtained from the sale of electrical energy.


<https://www.eia.gov/electricity/data/eia861/>




# Key Descriptions
    
<table class='table table-condensed table-striped table-bordered table-hover'>
<tr>
    <th class=''>Key</th>
    <th class=''>List of...</th>
    <th class=''>Comment</th>
    <th class=''>Example Value</th>
</tr>

<tr>
    <td>Utility.Number</td>
    <td>Integer</td> 
    <td>Unique identifier for the utility.</td>
    <td><code>34</code></td>
</tr>

<tr>
    <td>Utility.Name</td>
    <td>String</td> 
    <td>Utility Name</td>
    <td><code>"City of Abbeville - (SC)"</code></td>
</tr>

<tr>
    <td>Utility.State</td>
    <td>String</td> 
    <td>A two letter abbreviation for the name of the state (e.g., CA for California)</td>
    <td><code>"SC"</code></td>
</tr>

<tr>
    <td>Utility.Type</td>
    <td>String</td> 
    <td>Business type (e.g, Municipal, Private)</td>
    <td><code>"Municipal"</code></td>
</tr>

<tr>
    <td>Demand.Summer Peak</td>
    <td>Float</td> 
    <td>Peak demand in the summer measured in megawatts</td>
    <td><code>13.7</code></td>
</tr>

<tr>
    <td>Demand.Winter Peak</td>
    <td>Float</td> 
    <td>Peak demand in the winter measured in megawatts</td>
    <td><code>10.8</code></td>
</tr>

<tr>
    <td>Sources.Generation</td>
    <td>Float</td> 
    <td>Net generation of power measured in megawatt hours</td>
    <td><code>7000.0</code></td>
</tr>

<tr>
    <td>Sources.Purchased</td>
    <td>Float</td> 
    <td>Power purchased from other electric utilities measured in megawatt hours</td>
    <td><code>59000.0</code></td>
</tr>

<tr>
    <td>Sources.Other</td>
    <td>Float</td> 
    <td>Power obtained from other sources (e.g., exchanged with other utilities) measured in megawatt hours</td>
    <td><code>0.0</code></td>
</tr>

<tr>
    <td>Sources.Total</td>
    <td>Float</td> 
    <td>Total power from all sources measured in megawatt hours</td>
    <td><code>66000.0</code></td>
</tr>

<tr>
    <td>Uses.Retail</td>
    <td>Float</td> 
    <td>Power sold on the retail market measured in megawatt hours</td>
    <td><code>58000.0</code></td>
</tr>

<tr>
    <td>Uses.Resale</td>
    <td>Float</td> 
    <td>Power sold to other utilities for resale measured in megawatt hours</td>
    <td><code>0.0</code></td>
</tr>

<tr>
    <td>Uses.No Charge</td>
    <td>Float</td> 
    <td>Power furnished without charge measured in megawatt hours</td>
    <td><code>7000.0</code></td>
</tr>

<tr>
    <td>Uses.Consumed</td>
    <td>Float</td> 
    <td>Power consumed by the utility itself measured in megawatt hours</td>
    <td><code>0.0</code></td>
</tr>

<tr>
    <td>Uses.Losses</td>
    <td>Float</td> 
    <td>Power losses of all kinds measured in megawatt hours</td>
    <td><code>1000.0</code></td>
</tr>

<tr>
    <td>Uses.Total</td>
    <td>Float</td> 
    <td>Total power used for all purposes measured in megawatt hours</td>
    <td><code>66000.0</code></td>
</tr>

<tr>
    <td>Revenues.Retail</td>
    <td>Float</td> 
    <td>Revenue from retail power sales measured in thousands of US dolllars</td>
    <td><code>7536.0</code></td>
</tr>

<tr>
    <td>Revenue.Delivery</td>
    <td>Float</td> 
    <td>Revenue from customers who delivered power measured in thousands of US dollars</td>
    <td><code>0.0</code></td>
</tr>

<tr>
    <td>Revenue.Resale</td>
    <td>Float</td> 
    <td>Revenue from sale of power to other utilities for resale measured in thousands of US dollars</td>
    <td><code>0.0</code></td>
</tr>

<tr>
    <td>Revenue.Adjustments</td>
    <td>Float</td> 
    <td>Revnue from credits or other adjustments measured in thousands of US dollars</td>
    <td><code>0.0</code></td>
</tr>

<tr>
    <td>Revenue.Transmission</td>
    <td>Float</td> 
    <td>Revenue from transmission of power measured in thousands of US dollars</td>
    <td><code>0.0</code></td>
</tr>

<tr>
    <td>Revenue.Other</td>
    <td>Float</td> 
    <td>Revenue of all other kinds measured in thousands of US dollars</td>
    <td><code>0.0</code></td>
</tr>

<tr>
    <td>Revenue.Total</td>
    <td>Float</td> 
    <td>Total revenue from all sources measured in thousands of US dollars</td>
    <td><code>7536.0</code></td>
</tr>

<tr>
    <td>Retail.Residential.Revenue</td>
    <td>Float</td> 
    <td>Revenue from retail sales to residential customers measured in thousands of US dollars</td>
    <td><code>4563.0</code></td>
</tr>

<tr>
    <td>Retail.Residential.Sales</td>
    <td>Float</td> 
    <td>Power delivered to residential customers measured in meagawatt hours</td>
    <td><code>33000.0</code></td>
</tr>

<tr>
    <td>Retail.Residential.Customers</td>
    <td>Float</td> 
    <td>Number of residential customers</td>
    <td><code>3384.0</code></td>
</tr>

<tr>
    <td>Retail.Commercial.Revenue</td>
    <td>Float</td> 
    <td>Revenue from retail sales to commerical customers measured in thousands of US dollars</td>
    <td><code>2973.0</code></td>
</tr>

<tr>
    <td>Retail.Commercial.Sales</td>
    <td>Float</td> 
    <td>Power delivered to commercial customers measured in meagawatt hours</td>
    <td><code>25000.0</code></td>
</tr>

<tr>
    <td>Retail.Commercial.Customers</td>
    <td>Float</td> 
    <td>Number of commercial customers</td>
    <td><code>460.0</code></td>
</tr>

<tr>
    <td>Retail.Industrial.Revenue</td>
    <td>Float</td> 
    <td>Revenue from retail sales to industrial customers measured in thousands of US dollars</td>
    <td><code>0.0</code></td>
</tr>

<tr>
    <td>Retail.Industrial.Sales</td>
    <td>Float</td> 
    <td>Power delivered to industrial customers measured in meagawatt hours</td>
    <td><code>0.0</code></td>
</tr>

<tr>
    <td>Retail.Industrial.Customers</td>
    <td>Float</td> 
    <td>Number of industrial customers</td>
    <td><code>0.0</code></td>
</tr>

<tr>
    <td>Retail.Transportation.Revenue</td>
    <td>Float</td> 
    <td>Revenue from retail sales to transportation customers measured in thousands of US dollars</td>
    <td><code>0.0</code></td>
</tr>

<tr>
    <td>Retail.Transportation.Sales</td>
    <td>Float</td> 
    <td>Power delivered to transportation customers measured in meagawatt hours</td>
    <td><code>0.0</code></td>
</tr>

<tr>
    <td>Retail.Transportation.Customers</td>
    <td>Float</td> 
    <td>Number of transportation customers</td>
    <td><code>0.0</code></td>
</tr>

<tr>
    <td>Retail.Total.Revenue</td>
    <td>Float</td> 
    <td>Total revenue from all retail customers measured in thousands of US dollars</td>
    <td><code>7536.0</code></td>
</tr>

<tr>
    <td>Retail.Total.Sales</td>
    <td>Float</td> 
    <td>Total power delivered to all retail customers measured in megawatt hours</td>
    <td><code>58000.0</code></td>
</tr>

<tr>
    <td>Retail.Total.Customers</td>
    <td>Float</td> 
    <td>Total number of retail customers</td>
    <td><code>3844.0</code></td>
</tr>

</table>