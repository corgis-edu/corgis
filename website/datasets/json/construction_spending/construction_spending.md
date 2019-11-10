---
permalink: /json/construction_spending/
style: dataset
---

<img class="img-thumbnail float-right"
     src="/images/datasets/construction-spending-splash.png"
     alt="construction spending icon"
     role="presentation">

# Construction Spending JSON File

<p class='lead'>From the CORGIS Dataset Project</p>

<span class='text-muted'>By Austin Cory Bart <acbart@vt.edu></span><br>
<span class='text-muted'>Version 2.0.0, created 3/20/2016</span><br>
<span class='text-muted'>Tags: construction, spending, us, united states, america, government, buildings, residential, non-residential, private, public</span>

# Overview

The Value of Construction Put in Place Survey (VIP) provides monthly estimates of the total dollar value of construction work done in the U.S. The United States Code, Title 13, authorizes this program. The survey covers construction work done each month on new structures or improvements to existing structures for private and public sectors. Data estimates include the cost of labor and materials, cost of architectural and engineering work, overhead costs, interest and taxes paid during construction, and contractor's profits. Data collection and estimation activities begin on the first day after the reference month and continue for about three weeks. Reported data and estimates are for activity taking place during the previous calendar month. The survey has been conducted monthly since 1964. <br><br><b>Why isn't the 'total construction' the sum of the other categories?</b> It is! the trick is that the 'residential' and "nonresidential" categories are supposed to be below the 'total construction' level, and the other categories are below those two categories. This example of the data should make it more clear: <a href='http://www.census.gov/construction/c30/pdf/tot.pdf'>http://www.census.gov/construction/c30/pdf/tot.pdf</a>.<br><br>More information about the nature of the construction projects is also <a href='https://www.census.gov/construction/c30/definitions.html'>available.</a>



<http://www.census.gov/construction/c30/c30index.html>




# Download

Download the following file:

* <a href='../../datasets/json/construction_spending/construction_spending.json' download>construction_spending.json <span class="fas fa-download"></span></a>

# Key Descriptions
    
<table class='table table-condensed table-striped table-bordered table-hover'>
<tr>
    <th class=''>Key</th>
    <th class=''>List of...</th>
    <th class=''>Comment</th>
    <th class=''>Example Value</th>
</tr>

<tr>
    <td>time.index</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>1</code></td>
</tr>

<tr>
    <td>time.month</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>1</code></td>
</tr>

<tr>
    <td>time.month name</td>
    <td>String</td> 
    <td>$MISSING_FIELD</td>
    <td><code>"Jan"</code></td>
</tr>

<tr>
    <td>time.period</td>
    <td>String</td> 
    <td>$MISSING_FIELD</td>
    <td><code>"Jan2002"</code></td>
</tr>

<tr>
    <td>time.year</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>2002</code></td>
</tr>

<tr>
    <td>annual.combined.amusement and recreation</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>17866</code></td>
</tr>

<tr>
    <td>annual.combined.commercial</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>68254</code></td>
</tr>

<tr>
    <td>annual.combined.communication</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>18873</code></td>
</tr>

<tr>
    <td>annual.combined.conservation and development</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>3603</code></td>
</tr>

<tr>
    <td>annual.combined.educational</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>72357</code></td>
</tr>

<tr>
    <td>annual.combined.health care</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>25746</code></td>
</tr>

<tr>
    <td>annual.combined.highway and street</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>62723</code></td>
</tr>

<tr>
    <td>annual.combined.lodging</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>11862</code></td>
</tr>

<tr>
    <td>annual.combined.manufacturing</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>28318</code></td>
</tr>

<tr>
    <td>annual.combined.nonresidential</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>475704</code></td>
</tr>

<tr>
    <td>annual.combined.office</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>49140</code></td>
</tr>

<tr>
    <td>annual.combined.power</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>46050</code></td>
</tr>

<tr>
    <td>annual.combined.public safety</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>8468</code></td>
</tr>

<tr>
    <td>annual.combined.religious</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>8745</code></td>
</tr>

<tr>
    <td>annual.combined.residential</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>382979</code></td>
</tr>

<tr>
    <td>annual.combined.sewage and waste disposal</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>16392</code></td>
</tr>

<tr>
    <td>annual.combined.total construction</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>858654</code></td>
</tr>

<tr>
    <td>annual.combined.transportation</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>25547</code></td>
</tr>

<tr>
    <td>annual.combined.water supply</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>11760</code></td>
</tr>

<tr>
    <td>annual.private.amusement and recreation</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>7822</code></td>
</tr>

<tr>
    <td>annual.private.commercial</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>63972</code></td>
</tr>

<tr>
    <td>annual.private.communication</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>18843</code></td>
</tr>

<tr>
    <td>annual.private.conservation and development</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>0</code></td>
</tr>

<tr>
    <td>annual.private.educational</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>13616</code></td>
</tr>

<tr>
    <td>annual.private.health care</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>20888</code></td>
</tr>

<tr>
    <td>annual.private.highway and street</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>0</code></td>
</tr>

<tr>
    <td>annual.private.lodging</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>11669</code></td>
</tr>

<tr>
    <td>annual.private.manufacturing</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>28116</code></td>
</tr>

<tr>
    <td>annual.private.nonresidential</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>263731</code></td>
</tr>

<tr>
    <td>annual.private.office</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>40176</code></td>
</tr>

<tr>
    <td>annual.private.power</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>42407</code></td>
</tr>

<tr>
    <td>annual.private.public safety</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>0</code></td>
</tr>

<tr>
    <td>annual.private.religious</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>8742</code></td>
</tr>

<tr>
    <td>annual.private.residential</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>377631</code></td>
</tr>

<tr>
    <td>annual.private.sewage and waste disposal</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>0</code></td>
</tr>

<tr>
    <td>annual.private.total construction</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>641333</code></td>
</tr>

<tr>
    <td>annual.private.transportation</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>6512</code></td>
</tr>

<tr>
    <td>annual.private.water supply</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>0</code></td>
</tr>

<tr>
    <td>annual.public.amusement and recreation</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>10044</code></td>
</tr>

<tr>
    <td>annual.public.commercial</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>4282</code></td>
</tr>

<tr>
    <td>annual.public.communication</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>0</code></td>
</tr>

<tr>
    <td>annual.public.conservation and development</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>3578</code></td>
</tr>

<tr>
    <td>annual.public.educational</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>58742</code></td>
</tr>

<tr>
    <td>annual.public.health care</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>4859</code></td>
</tr>

<tr>
    <td>annual.public.highway and street</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>62553</code></td>
</tr>

<tr>
    <td>annual.public.lodging</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>0</code></td>
</tr>

<tr>
    <td>annual.public.manufacturing</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>0</code></td>
</tr>

<tr>
    <td>annual.public.nonresidential</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>211973</code></td>
</tr>

<tr>
    <td>annual.public.office</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>8964</code></td>
</tr>

<tr>
    <td>annual.public.power</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>3643</code></td>
</tr>

<tr>
    <td>annual.public.public safety</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>8356</code></td>
</tr>

<tr>
    <td>annual.public.religious</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>0</code></td>
</tr>

<tr>
    <td>annual.public.residential</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>5348</code></td>
</tr>

<tr>
    <td>annual.public.sewage and waste disposal</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>16077</code></td>
</tr>

<tr>
    <td>annual.public.total construction</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>217321</code></td>
</tr>

<tr>
    <td>annual.public.transportation</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>19035</code></td>
</tr>

<tr>
    <td>annual.public.water supply</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>11412</code></td>
</tr>

<tr>
    <td>current.combined.amusement and recreation</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>1328</code></td>
</tr>

<tr>
    <td>current.combined.commercial</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>4887</code></td>
</tr>

<tr>
    <td>current.combined.communication</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>1416</code></td>
</tr>

<tr>
    <td>current.combined.conservation and development</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>271</code></td>
</tr>

<tr>
    <td>current.combined.educational</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>5125</code></td>
</tr>

<tr>
    <td>current.combined.health care</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>2013</code></td>
</tr>

<tr>
    <td>current.combined.highway and street</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>3180</code></td>
</tr>

<tr>
    <td>current.combined.lodging</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>989</code></td>
</tr>

<tr>
    <td>current.combined.manufacturing</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>2134</code></td>
</tr>

<tr>
    <td>current.combined.nonresidential</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>33545</code></td>
</tr>

<tr>
    <td>current.combined.office</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>3763</code></td>
</tr>

<tr>
    <td>current.combined.power</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>3402</code></td>
</tr>

<tr>
    <td>current.combined.public safety</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>647</code></td>
</tr>

<tr>
    <td>current.combined.religious</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>667</code></td>
</tr>

<tr>
    <td>current.combined.residential</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>25972</code></td>
</tr>

<tr>
    <td>current.combined.sewage and waste disposal</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>1150</code></td>
</tr>

<tr>
    <td>current.combined.total construction</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>59516</code></td>
</tr>

<tr>
    <td>current.combined.transportation</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>1729</code></td>
</tr>

<tr>
    <td>current.combined.water supply</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>846</code></td>
</tr>

<tr>
    <td>current.private.amusement and recreation</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>609</code></td>
</tr>

<tr>
    <td>current.private.commercial</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>4588</code></td>
</tr>

<tr>
    <td>current.private.communication</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>1414</code></td>
</tr>

<tr>
    <td>current.private.conservation and development</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>0</code></td>
</tr>

<tr>
    <td>current.private.educational</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>1000</code></td>
</tr>

<tr>
    <td>current.private.health care</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>1629</code></td>
</tr>

<tr>
    <td>current.private.highway and street</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>0</code></td>
</tr>

<tr>
    <td>current.private.lodging</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>972</code></td>
</tr>

<tr>
    <td>current.private.manufacturing</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>2117</code></td>
</tr>

<tr>
    <td>current.private.nonresidential</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>19701</code></td>
</tr>

<tr>
    <td>current.private.office</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>3066</code></td>
</tr>

<tr>
    <td>current.private.power</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>3129</code></td>
</tr>

<tr>
    <td>current.private.public safety</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>0</code></td>
</tr>

<tr>
    <td>current.private.religious</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>667</code></td>
</tr>

<tr>
    <td>current.private.residential</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>25572</code></td>
</tr>

<tr>
    <td>current.private.sewage and waste disposal</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>0</code></td>
</tr>

<tr>
    <td>current.private.total construction</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>45273</code></td>
</tr>

<tr>
    <td>current.private.transportation</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>444</code></td>
</tr>

<tr>
    <td>current.private.water supply</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>0</code></td>
</tr>

<tr>
    <td>current.public.amusement and recreation</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>719</code></td>
</tr>

<tr>
    <td>current.public.commercial</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>299</code></td>
</tr>

<tr>
    <td>current.public.communication</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>0</code></td>
</tr>

<tr>
    <td>current.public.conservation and development</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>268</code></td>
</tr>

<tr>
    <td>current.public.educational</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>4126</code></td>
</tr>

<tr>
    <td>current.public.health care</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>384</code></td>
</tr>

<tr>
    <td>current.public.highway and street</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>3168</code></td>
</tr>

<tr>
    <td>current.public.lodging</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>0</code></td>
</tr>

<tr>
    <td>current.public.manufacturing</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>0</code></td>
</tr>

<tr>
    <td>current.public.nonresidential</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>13844</code></td>
</tr>

<tr>
    <td>current.public.office</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>697</code></td>
</tr>

<tr>
    <td>current.public.power</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>273</code></td>
</tr>

<tr>
    <td>current.public.public safety</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>637</code></td>
</tr>

<tr>
    <td>current.public.religious</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>0</code></td>
</tr>

<tr>
    <td>current.public.residential</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>400</code></td>
</tr>

<tr>
    <td>current.public.sewage and waste disposal</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>1127</code></td>
</tr>

<tr>
    <td>current.public.total construction</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>14243</code></td>
</tr>

<tr>
    <td>current.public.transportation</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>1285</code></td>
</tr>

<tr>
    <td>current.public.water supply</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>826</code></td>
</tr>

</table>