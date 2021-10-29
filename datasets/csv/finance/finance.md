---
permalink: /csv/finance/
style: dataset
---

<img class="img-thumbnail float-right"
     src="/images/datasets/finance-icon.png"
     alt="finance icon"
     role="presentation">

# Finance CSV File

<p class='lead'>From the CORGIS Dataset Project</p>

<span class='text-muted'>By Austin Cory Bart <acbart@vt.edu>, Joung Min Choi <joungmin@vt.edu>, Bo Guan <jasonguan0107@vt.edu></span><br>
<span class='text-muted'>Version 3.0.0, created 10/7/2021</span><br>
<span class='text-muted'>Tags: finance, government, expenditure, charges, money, united states, us</span>

# Overview

The Annual Survey of State Government Finances provides a comprehensive summary of the annual survey findings for state governments, as well as data for individual states. The data contain detail of revenue by source, expenditure by object and function, indebtedness by term, and assets by purpose. This data goes back for almost two decades across every date. (1992 - 2019) 


<https://www.census.gov/programs-surveys/state.html>




# Download

Download the following file:

* <a href='../../datasets/csv/finance/finance.csv' download>finance.csv <span class="fas fa-download"></span></a>

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
    <td>The state that this report was made for (full name, not the two letter abbreviation).</td>
    <td><code>"ALABAMA"</code></td>
</tr>

<tr>
    <td>Year</td>
    <td>Integer</td> 
    <td>The year that this report was made for.</td>
    <td><code>1992</code></td>
</tr>

<tr>
    <td>Totals.Capital outlay</td>
    <td>Integer</td> 
    <td>Direct expenditure for contract or force account construction of buildings,grounds, and other improvements, and purchase of equipment, land, and existing structures. Includes amounts for additions, replacements, and major alterations to fixed works and structures. However, expenditure for repairs to such works and structures is classified as current operation expenditure.</td>
    <td><code>664748</code></td>
</tr>

<tr>
    <td>Totals.Revenue</td>
    <td>Integer</td> 
    <td>All amounts of money received by a government from external sources--net of refunds and other correcting transactions--other than from issuance of debt, liquidation of investments, and as agency and private trust transactions. Note that revenue excludes noncash transactions such as receipt of services, commodities, or other "receipts in kind."</td>
    <td><code>10536166</code></td>
</tr>

<tr>
    <td>Totals.Expenditure</td>
    <td>Integer</td> 
    <td>All amounts of money paid out by a government--net of recoveries and other correcting transactions--other than for retirement of debt, investment in securities, extension of credit, or as agency transactions. Note that expenditure includes only external transactions of a government and excludes non-cash transactions such as the provision of perquisites or other payments in kind.</td>
    <td><code>9650515</code></td>
</tr>

<tr>
    <td>Totals.General expenditure</td>
    <td>Integer</td> 
    <td>Amounts paid to other governments as fiscal aid in the form of shared revenues and grants-in-aid, as reimbursements for performance of general government activities and for specific services for the paying government, or in lieu of taxes. Excludes amounts paid to other governments for purchase of commodities, property, or utility services, any tax imposed and paid as such, and employer contributions for social insurance - e.g., contributions to the Federal Government for Old Age, Survivors', Disability, and Health Insurance for government employees.</td>
    <td><code>8788293</code></td>
</tr>

<tr>
    <td>Totals.General revenue</td>
    <td>Integer</td> 
    <td>All government revenue except Liquor stores revenue, Insurance trust revenue, and Utility revenue. The basis for distinction is not the fund or administrative unit receiving particular amounts, but rather the nature of the revenue sources concerned.</td>
    <td><code>8910315</code></td>
</tr>

<tr>
    <td>Totals.Insurance trust  revenue</td>
    <td>Integer</td> 
    <td>Revenue from contributions required of employers and employees for financing social insurance programs operated by the government (see Insurance trust system, below) and earnings on assets held for such systems. Excludes any contributions by a government - either as employer contributions or for general financial support - to a social insurance system it administers. Note that tax proceeds, donations, and any forms of revenue other than those enumerated above are classified as general revenue, even though such amounts may be received specifically for insurance trust purposes.</td>
    <td><code>1473217</code></td>
</tr>

<tr>
    <td>Totals.Intergovernmental</td>
    <td>Integer</td> 
    <td>Amounts received from other governments as fiscal aid in the form of shared revenues and grants-in -aid, as reimbursements for performance of general government functions and specific services for the paying government (e.g., care of prisoners or contractual research), or in lieu of taxes, Excludes amounts received from other governments for sale of property, commodities, and utility services. All intergovernmental revenue is classified as General revenue.</td>
    <td><code>2737180</code></td>
</tr>

<tr>
    <td>Totals.License tax</td>
    <td>Integer</td> 
    <td>Taxes exacted (either for revenue raising or for regulation) as a condition to the exercise of a business or nonbusiness privilege, at a flat rate or measured by such bases as capital stock, capital surplus, number of business units, or capacity. Excludes taxes measured directly by transactions, gross or net income, or value of property except those to which only nominal rates apply. "License" based on these latter measures, other than those at nominal rates, are classified according to the measure concerned. Includes "fees" related to licensing activities - automobile inspection, gasoline and oil inspection, professional examinations and licenses, etc. - as well as license taxes producing substantial revenue.</td>
    <td><code>395202</code></td>
</tr>

<tr>
    <td>Totals.Selective sales tax</td>
    <td>Integer</td> 
    <td>Sales and gross receipts taxes imposed on sales of particular commodities or services or gross receipts of particular businesses, separately and apart from the application of general sales and gross receipts taxes. Specific selective sales taxes included are alcoholic beverages, amusements, insurance, motor fuels, parimutuels, public utilities, tobacco products, and others.</td>
    <td><code>1103368</code></td>
</tr>

<tr>
    <td>Totals.Tax</td>
    <td>Integer</td> 
    <td>Compulsory contributions exacted by a government for public purposes except employee and employee assessments for retirement and social insurance purposes, which are classified as insurance trust revenue. All tax revenue is classified as general revenue and comprises amounts received (including interest and penalties but excluding protested amounts and refunds) from all taxes imposed by a government. Note that local government tax revenue excludes any amounts from shares of state-imposed and collected taxes, which are classified as Intergovernmental revenue.</td>
    <td><code>4217916</code></td>
</tr>

<tr>
    <td>Details.Correction.Correction Total</td>
    <td>Integer</td> 
    <td>Total amount spent on correctional purposes, such as prisons.</td>
    <td><code>182698</code></td>
</tr>

<tr>
    <td>Details.Education.Education Total</td>
    <td>Integer</td> 
    <td>Total amount spent on schools, colleges, and other educational institutions (e.g., for blind, deaf, and other handicapped individuals), and educational programs for adults, veterans, and other special classes. State institutions of higher education includes activities of institutions operated by the state, except that agricultural extension services and experiment stations are classified under Natural resources and hospitals serving the public are classified under Hospitals. Revenue and expenditure for dormitories, cafeterias, athletic events, bookstores, and other auxiliary enterprises financed mainly through charges for services are reported on a gross basis.</td>
    <td><code>3570524</code></td>
</tr>

<tr>
    <td>Details.Financial Aid.Assistance and Subsidies</td>
    <td>Integer</td> 
    <td>Total amount spent on cash contributions and subsidies to persons, not in payments for goods or services or claims against the government. For local governments, this object category comprises only direct cash assistance payments to public welfare recipients. For states, it includes also veterans' bonuses and direct cash grants for tuition, scholarships, and aid to nonpublic education institutions.</td>
    <td><code>273050</code></td>
</tr>

<tr>
    <td>Details.Financial Aid.Cash and Securities Total</td>
    <td>Integer</td> 
    <td>Total amount spent on cash and deposits and governmental and private securities (bonds, notes, mortgages, corporate stocks, etc., including loans and other credit paper held by state loan and investment funds) except holdings of agency and private trust funds. Includes fund investments in securities issued by government concerned but does not include interfund loans, receivables, and the value of real property and other fixed assets.</td>
    <td><code>14594322</code></td>
</tr>

<tr>
    <td>Details.Health.Health Total Expenditure</td>
    <td>Integer</td> 
    <td>Total amount spent on outpatient health services, other than hospital care, including: public health administration; research and education; categorical health programs; treatment and immunization clinics; nursing; environmental health activities such as air and water pollution control; ambulance service if provided separately from fire protection services, and other general public health activities such as mosquito abatement. School health services provided by health agencies (rather than school agencies) are included here. Sewage treatment operations are classified under Sewerage.</td>
    <td><code>394119</code></td>
</tr>

<tr>
    <td>Details.Intergovernmental.Intergovernmental Expenditure</td>
    <td>Integer</td> 
    <td>Money paid overall.</td>
    <td><code>2143312</code></td>
</tr>

<tr>
    <td>Details.Intergovernmental.Intergovernmental to Combined and Unallocable</td>
    <td>Integer</td> 
    <td>Other kinds of money.</td>
    <td><code>518611</code></td>
</tr>

<tr>
    <td>Details.Natural Resources.Natural Resources Construction</td>
    <td>Integer</td> 
    <td>Total amount spent on construction for the support of natural resources.</td>
    <td><code>151432</code></td>
</tr>

<tr>
    <td>Details.Utilities.Utilities Current Operation</td>
    <td>Integer</td> 
    <td>Amount spent on current operation of government owned and operated water supply, electric light and power, gas supply, or transit system. Government revenue, expenditure, and debt relating to utility facilities leased to other governments or persons, and other commercial type activities of governments, such as port facilities, airports, housing projects, radio stations, steam plants, ferries, abattoirs, etc., are classified as general government activities.</td>
    <td><code>5564374</code></td>
</tr>

<tr>
    <td>Details.Welfare.Welfare Institution Total Expenditure</td>
    <td>Integer</td> 
    <td>Total amount spent on welfare institutions.</td>
    <td><code>1853436</code></td>
</tr>

<tr>
    <td>Details.Natural Resources.Parks.Parks Total Expenditure</td>
    <td>Integer</td> 
    <td>Total amount spent on provision and support of recreational and cultural-scientific facilities and activities including golf courses, play fields, playgrounds, public beaches, swimming pools, tennis courts, parks, auditoriums, stadiums, auto camps, recreation piers, marinas, botanical gardens, galleries, museums, and zoos. Also includes building and operation of convention centers and exhibition halls. Public libraries are included under Libraries.</td>
    <td><code>9728</code></td>
</tr>

<tr>
    <td>Details.Transportation.Highways.Highways Total Expenditure</td>
    <td>Integer</td> 
    <td>Total amount spent on the support of construction, maintenance, and operation of highways, streets, and related structures, including toll highways, bridges, tunnels, ferries, street lighting and snow and ice removal. However, highway policing and traffic control are classed under Police protection.</td>
    <td><code>694874</code></td>
</tr>

<tr>
    <td>Totals. Debt at end of fiscal year</td>
    <td>Integer</td> 
    <td>Amount of debt in the 12-month period at the end of which the government or any government agency determines its financial condition and the results of its operations and closes its books</td>
    <td><code>4128724</code></td>
</tr>

<tr>
    <td>Details.Insurance benefits and repayments</td>
    <td>Integer</td> 
    <td>Amount of social insurance payments to beneficiaries, employee-retirement annuities and other benefits, and withdrawals of insurance or employee retirement contributions</td>
    <td><code>724852</code></td>
</tr>

<tr>
    <td>Details.Interest on debt</td>
    <td>Integer</td> 
    <td>Amount of interest from all the debt</td>
    <td><code>280179</code></td>
</tr>

<tr>
    <td>Details.Interest on general debt</td>
    <td>Integer</td> 
    <td>Amount of interest from all debt other than that identified as having been issued specifically for utility purposes</td>
    <td><code>280179</code></td>
</tr>

<tr>
    <td>Details.Miscellaneous general revenue</td>
    <td>Integer</td> 
    <td>General revenue other than taxes and intergovernmental revenue</td>
    <td><code>607453</code></td>
</tr>

<tr>
    <td>Details.Other taxes</td>
    <td>Integer</td> 
    <td>Amount of taxes not listed separately</td>
    <td><code>205227</code></td>
</tr>

<tr>
    <td>Details.Police protection</td>
    <td>Integer</td> 
    <td>Amounts of money spent on preservation of law and order and traffic safety</td>
    <td><code>77789</code></td>
</tr>

</table>