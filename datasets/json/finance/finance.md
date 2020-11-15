---
permalink: /json/finance/
style: dataset
---

<img class="img-thumbnail float-right"
     src="/images/datasets/finance-icon.png"
     alt="finance icon"
     role="presentation">

# Finance JSON File

<p class='lead'>From the CORGIS Dataset Project</p>

<span class='text-muted'>By Austin Cory Bart <acbart@vt.edu></span><br>
<span class='text-muted'>Version 2.0.0, created 11/1/2015</span><br>
<span class='text-muted'>Tags: finance, government, expenditure, charges, money, united states, us</span>

# Overview

The Annual Survey of State Government Finances provides a comprehensive summary of the annual survey findings for state governments, as well as data for individual states. The data contain detail of revenue by source, expenditure by object and function, indebtedness by term, and assets by purpose. This data goes back for almost two decades across every date.



<http://www.census.gov//govs/state/about_the_survey.html>




# Download

Download the following file:

* <a href='../../datasets/json/finance/finance.json' download>finance.json <span class="fas fa-download"></span></a>

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
    <td><code>"Oklahoma"</code></td>
</tr>

<tr>
    <td>Year</td>
    <td>Integer</td> 
    <td>The year that this report was made for.</td>
    <td><code>1996</code></td>
</tr>

<tr>
    <td>Totals.Capital outlay</td>
    <td>Integer</td> 
    <td>Direct expenditure for contract or force account construction of buildings,grounds, and other improvements, and purchase of equipment, land, and existing structures. Includes amounts for additions, replacements, and major alterations to fixed works and structures. However, expenditure for repairs to such works and structures is classified as current operation expenditure.</td>
    <td><code>711251</code></td>
</tr>

<tr>
    <td>Totals.Charges</td>
    <td>Integer</td> 
    <td>Charges imposed for providing current services or for the sale of products in connection with general government activities.</td>
    <td><code>933593</code></td>
</tr>

<tr>
    <td>Totals.Construction</td>
    <td>Integer</td> 
    <td>Production of fixed works and structures additions, replacements, and major alterations, including planning and design of specific projects, site improvements, and provision of equipment and facilities that are integral parts of a structure. Includes contract construction, undertaken on a contract basis by private contractors, and force account construction, undertaken with direct use of material and labor by the government.</td>
    <td><code>516787</code></td>
</tr>

<tr>
    <td>Totals.Employee retirement revenue</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>1704971</code></td>
</tr>

<tr>
    <td>Totals.Equipment and land</td>
    <td>Integer</td> 
    <td>Apparatus, furnishings, motor vehicles, office machines, and the like having an expected life of more than 5 years. Equipment expenditure consists only of amounts for purchase of equipment, including both additional equipment and replacements. Expenditures for facilities that are integral parts of structures are classified as expenditure for construction or for purchase of land and existing structures.</td>
    <td><code>194464</code></td>
</tr>

<tr>
    <td>Totals.Expenditure</td>
    <td>Integer</td> 
    <td>All amounts of money paid out by a government--net of recoveries and other correcting transactions--other than for retirement of debt, investment in securities, extension of credit, or as agency transactions. Note that expenditure includes only external transactions of a government and excludes non-cash transactions such as the provision of perquisites or other payments in kind.</td>
    <td><code>9024966</code></td>
</tr>

<tr>
    <td>Totals.Federal intergovernmental</td>
    <td>Integer</td> 
    <td>Intergovernmental revenue received by a government directly from the federal government. For local governments, excludes federal aid channeled through state governments, which is considered as Intergovernmental revenue from state government.</td>
    <td><code>2119474</code></td>
</tr>

<tr>
    <td>Totals.General expenditure</td>
    <td>Integer</td> 
    <td>Amounts paid to other governments as fiscal aid in the form of shared revenues and grants-in-aid, as reimbursements for performance of general government activities and for specific services for the paying government, or in lieu of taxes. Excludes amounts paid to other governments for purchase of commodities, property, or utility services, any tax imposed and paid as such, and employer contributions for social insurance - e.g., contributions to the Federal Government for Old Age, Survivors', Disability, and Health Insurance for government employees.</td>
    <td><code>7752849</code></td>
</tr>

<tr>
    <td>Totals.General revenue</td>
    <td>Integer</td> 
    <td>All government revenue except Liquor stores revenue, Insurance trust revenue, and Utility revenue. The basis for distinction is not the fund or administrative unit receiving particular amounts, but rather the nature of the revenue sources concerned.</td>
    <td><code>8155980</code></td>
</tr>

<tr>
    <td>Totals.Insurance trust  revenue</td>
    <td>Integer</td> 
    <td>Revenue from contributions required of employers and employees for financing social insurance programs operated by the government (see Insurance trust system, below) and earnings on assets held for such systems. Excludes any contributions by a government - either as employer contributions or for general financial support - to a social insurance system it administers. Note that tax proceeds, donations, and any forms of revenue other than those enumerated above are classified as general revenue, even though such amounts may be received specifically for insurance trust purposes.</td>
    <td><code>2206642</code></td>
</tr>

<tr>
    <td>Totals.Intergovernmental</td>
    <td>Integer</td> 
    <td>Amounts received from other governments as fiscal aid in the form of shared revenues and grants-in -aid, as reimbursements for performance of general government functions and specific services for the paying government (e.g., care of prisoners or contractual research), or in lieu of taxes, Excludes amounts received from other governments for sale of property, commodities, and utility services. All intergovernmental revenue is classified as General revenue.</td>
    <td><code>2197345</code></td>
</tr>

<tr>
    <td>Totals.License tax</td>
    <td>Integer</td> 
    <td>Taxes exacted (either for revenue raising or for regulation) as a condition to the exercise of a business or nonbusiness privilege, at a flat rate or measured by such bases as capital stock, capital surplus, number of business units, or capacity. Excludes taxes measured directly by transactions, gross or net income, or value of property except those to which only nominal rates apply. "License" based on these latter measures, other than those at nominal rates, are classified according to the measure concerned. Includes "fees" related to licensing activities - automobile inspection, gasoline and oil inspection, professional examinations and licenses, etc. - as well as license taxes producing substantial revenue.</td>
    <td><code>658486</code></td>
</tr>

<tr>
    <td>Totals.Local intergovernmental</td>
    <td>Integer</td> 
    <td>Amounts from local governments: for shares in financial support of programs administered by the state; for reimbursements of services performed or expenditures made for them by the state; for application to debt services on state debt issued for their benefit; and for repayment of advances and contingent loans extended to them. Does not include local government contributions to state-administered employee retirement or other insurance trust systems, which are classified as insurance trust revenue, or agency transactions (see Agency and private trust transactions). Excludes proceeds from interest on local government securities held by the state and proceeds from state taxes on local government facilities.</td>
    <td><code>77871</code></td>
</tr>

<tr>
    <td>Totals.Miscellaneous</td>
    <td>Integer</td> 
    <td>General expenditure for purposes and activities not falling within any standard functional category and unallocated amounts relating to two or more functions.</td>
    <td><code>407354</code></td>
</tr>

<tr>
    <td>Totals.Miscellaneous commercial activity</td>
    <td>Integer</td> 
    <td>Provision and operation of commercial facilities not classified under particular functions. Includes a bank (North Dakota), and cement plant, hail insurance systems, and the like.</td>
    <td><code>1968</code></td>
</tr>

<tr>
    <td>Totals.Other insurance trust revenue</td>
    <td>Integer</td> 
    <td>Other revenue related to ITR.</td>
    <td><code>0</code></td>
</tr>

<tr>
    <td>Totals.Revenue</td>
    <td>Integer</td> 
    <td>All amounts of money received by a government from external sources--net of refunds and other correcting transactions--other than from issuance of debt, liquidation of investments, and as agency and private trust transactions. Note that revenue excludes noncash transactions such as receipt of services, commodities, or other "receipts in kind."</td>
    <td><code>10609104</code></td>
</tr>

<tr>
    <td>Totals.Sales tax</td>
    <td>Integer</td> 
    <td>Sales or gross receipts taxes which are applicable with only specified exceptions to all types of goods and services, or all gross income, whether at a single rate or at classified rates. Taxes imposed distinctively upon sales or gross receipts from selected commodities, services, or business are reported separately under categories one through eight below.</td>
    <td><code>1870060</code></td>
</tr>

<tr>
    <td>Totals.Selective sales tax</td>
    <td>Integer</td> 
    <td>Sales and gross receipts taxes imposed on sales of particular commodities or services or gross receipts of particular businesses, separately and apart from the application of general sales and gross receipts taxes. Specific selective sales taxes included are alcoholic beverages, amusements, insurance, motor fuels, parimutuels, public utilities, tobacco products, and others.</td>
    <td><code>659669</code></td>
</tr>

<tr>
    <td>Totals.State intergovernmental</td>
    <td>Integer</td> 
    <td>All intergovernmental revenue received from the state government. For local governments, includes amounts originally from the federal government but channeled through the state.</td>
    <td><code>0</code></td>
</tr>

<tr>
    <td>Totals.Tax</td>
    <td>Integer</td> 
    <td>Compulsory contributions exacted by a government for public purposes except employee and employee assessments for retirement and social insurance purposes, which are classified as insurance trust revenue. All tax revenue is classified as general revenue and comprises amounts received (including interest and penalties but excluding protested amounts and refunds) from all taxes imposed by a government. Note that local government tax revenue excludes any amounts from shares of state-imposed and collected taxes, which are classified as Intergovernmental revenue.</td>
    <td><code>4617688</code></td>
</tr>

<tr>
    <td>Totals.Unemployment comp revenue</td>
    <td>Integer</td> 
    <td>Revenue related to Unemployment Compensation.</td>
    <td><code>206068</code></td>
</tr>

<tr>
    <td>Totals.Utility revenue</td>
    <td>Integer</td> 
    <td>Revenue from sale of utility commodities and services to the public and to other governments. Does not include amounts from sales to the parent government. Also excludes income from utility fund investments and from other nonoperating properties (treated as General revenue). Any monies from taxes, special assessments, and intergovernmental revenue are classified as General revenue, not Utility revenue.</td>
    <td><code>246482</code></td>
</tr>

<tr>
    <td>Totals.Worker's comp revenue</td>
    <td>Integer</td> 
    <td>Revenue related to Worker's Compensation.</td>
    <td><code>295603</code></td>
</tr>

<tr>
    <td>Details.Correction.Correction Institutions Total</td>
    <td>Integer</td> 
    <td>Total amount spent on correctional institutions purposes, especially prisons.</td>
    <td><code>165227</code></td>
</tr>

<tr>
    <td>Details.Correction.Correction Intergovernmental</td>
    <td>Integer</td> 
    <td>Money paid to other governments for correctional purposes, such as prisons.</td>
    <td><code>13529</code></td>
</tr>

<tr>
    <td>Details.Correction.Correction NEC Intergovernmental</td>
    <td>Integer</td> 
    <td>Money paid to other governments for correctional purposes, such as prisons, that is not elsewhere classified.</td>
    <td><code>13529</code></td>
</tr>

<tr>
    <td>Details.Correction.Correction NEC Total</td>
    <td>Integer</td> 
    <td>Total amount spent for correctional purposes, such as prisons, that is not elsewhere classified.</td>
    <td><code>130881</code></td>
</tr>

<tr>
    <td>Details.Correction.Correction Total</td>
    <td>Integer</td> 
    <td>Total amount spent on correctional purposes, such as prisons.</td>
    <td><code>296108</code></td>
</tr>

<tr>
    <td>Details.Education.Edcation Assistance and Subsidies</td>
    <td>Integer</td> 
    <td>Total amount spent on assistance and subsidies for education.</td>
    <td><code>68341</code></td>
</tr>

<tr>
    <td>Details.Education.Education Construction</td>
    <td>Integer</td> 
    <td>Total amount spent on construction for educational purposes.</td>
    <td><code>63357</code></td>
</tr>

<tr>
    <td>Details.Education.Education Equipment</td>
    <td>Integer</td> 
    <td>Total amount spent on equipment for educational purposes.</td>
    <td><code>66084</code></td>
</tr>

<tr>
    <td>Details.Education.Education Equipment and Land</td>
    <td>Integer</td> 
    <td>Total amount spent on equipment and land for educational purposes.</td>
    <td><code>69335</code></td>
</tr>

<tr>
    <td>Details.Education.Education Intergovernmental</td>
    <td>Integer</td> 
    <td>Money paid to other governments for educational purposes.</td>
    <td><code>2038925</code></td>
</tr>

<tr>
    <td>Details.Education.Education Other Current Operation</td>
    <td>Integer</td> 
    <td>Direct expenditure for compensation of own officers and employees and for supplies, materials, and contractual services except amounts for capital outlay related to education.</td>
    <td><code>1235767</code></td>
</tr>

<tr>
    <td>Details.Education.Education Total</td>
    <td>Integer</td> 
    <td>Total amount spent on schools, colleges, and other educational institutions (e.g., for blind, deaf, and other handicapped individuals), and educational programs for adults, veterans, and other special classes. State institutions of higher education includes activities of institutions operated by the state, except that agricultural extension services and experiment stations are classified under Natural resources and hospitals serving the public are classified under Hospitals. Revenue and expenditure for dormitories, cafeterias, athletic events, bookstores, and other auxiliary enterprises financed mainly through charges for services are reported on a gross basis.</td>
    <td><code>3475725</code></td>
</tr>

<tr>
    <td>Details.Education.Education-NEC Expenditure Total</td>
    <td>Integer</td> 
    <td>Total amount spent on education that is not elsewhere classified.</td>
    <td><code>154591</code></td>
</tr>

<tr>
    <td>Details.Education.Education-NEC Intergovernmental</td>
    <td>Integer</td> 
    <td>Money paid to other governments for education that is not elsewhere classified.</td>
    <td><code>348</code></td>
</tr>

<tr>
    <td>Details.Education.Elementary Secondary Intergovernmental</td>
    <td>Integer</td> 
    <td>Money paid to other governments for elementary schools.</td>
    <td><code>2038577</code></td>
</tr>

<tr>
    <td>Details.Education.Elementary Secondary Total Expenditure</td>
    <td>Integer</td> 
    <td>Total amount spent on elementary schools.</td>
    <td><code>2053367</code></td>
</tr>

<tr>
    <td>Details.Education.Higher Education-Auxilliary Total Expenditure</td>
    <td>Integer</td> 
    <td>Total amount spent on auxliary higher education enterprises.</td>
    <td><code>206486</code></td>
</tr>

<tr>
    <td>Details.Education.Higher Education-NEC Intergovernmental</td>
    <td>Integer</td> 
    <td>Money paid to other governments for higher education that is not elsewhere classified.</td>
    <td><code>0</code></td>
</tr>

<tr>
    <td>Details.Education.Higher Education-NEC Total Expenditure</td>
    <td>Integer</td> 
    <td>Total amount spent on higher education that is not elsewhere classified.</td>
    <td><code>1061281</code></td>
</tr>

<tr>
    <td>Details.Employment.Employee Retirement Total Cash and Securities</td>
    <td>Integer</td> 
    <td>Total cash and securities related to employee retirement.</td>
    <td><code>8699175</code></td>
</tr>

<tr>
    <td>Details.Employment.Employee Retirement Total Expenditure</td>
    <td>Integer</td> 
    <td>Total amount spent on cash payments to beneficiaries (including withdrawals of contributions) of government-administered employee-retirement systems, local government contributions to state-administered employee-retirement systems, and noncontributory gratuities paid to former employees; these are classed under General expenditure.</td>
    <td><code>712514</code></td>
</tr>

<tr>
    <td>Details.Employment.Employment Security Administration Expenditure Total</td>
    <td>Integer</td> 
    <td>Total amount spent on administration of unemployment compensation, public employment offices, and related services, and veterans' readjustment allowances.</td>
    <td><code>37401</code></td>
</tr>

<tr>
    <td>Details.Employment.Employment Security Administration Intergovernmental</td>
    <td>Integer</td> 
    <td>Money paid to other governments for the administration of unemployment compensation, public employment offices, and related services, and veterans' readjustment allowances.</td>
    <td><code>0</code></td>
</tr>

<tr>
    <td>Details.Employment.Unemployment Comp Total Cash and Securities</td>
    <td>Integer</td> 
    <td>Total cash and securities related to unemployment compensation.</td>
    <td><code>544529</code></td>
</tr>

<tr>
    <td>Details.Employment.Unemployment Comp Total Expenditure</td>
    <td>Integer</td> 
    <td>Comprises payments made to beneficiaries under basic provisions of unemployment compensation programs and special program payments, such as for extended benefits triggered by economic conditions.</td>
    <td><code>146857</code></td>
</tr>

<tr>
    <td>Details.Financial Aid.Assistance and Subsidies</td>
    <td>Integer</td> 
    <td>Total amount spent on cash contributions and subsidies to persons, not in payments for goods or services or claims against the government. For local governments, this object category comprises only direct cash assistance payments to public welfare recipients. For states, it includes also veterans' bonuses and direct cash grants for tuition, scholarships, and aid to nonpublic education institutions.</td>
    <td><code>206533</code></td>
</tr>

<tr>
    <td>Details.Financial Aid.Beginning Long Term Debt Total Outstanding</td>
    <td>Integer</td> 
    <td>Total amount spent on long term debt. Long-term debt consists of loans and financial obligations lasting over one year.</td>
    <td><code>0</code></td>
</tr>

<tr>
    <td>Details.Financial Aid.Bond Fund Total</td>
    <td>Integer</td> 
    <td>Total amount spent on funds established to account for the proceeds of bond issues pending their disbursement.</td>
    <td><code>250936</code></td>
</tr>

<tr>
    <td>Details.Financial Aid.Borrowing Total</td>
    <td>Integer</td> 
    <td>Total amount borrowed.</td>
    <td><code>0</code></td>
</tr>

<tr>
    <td>Details.Financial Aid.Cash Assistance Intergovernmental</td>
    <td>Integer</td> 
    <td>Money paid to other governments for cash assistance payments to public welfare recipients.</td>
    <td><code>0</code></td>
</tr>

<tr>
    <td>Details.Financial Aid.Cash Assistance Total Expenditure</td>
    <td>Integer</td> 
    <td>Total amount spent on direct cash payments to beneficiaries of public welfare programs.</td>
    <td><code>9074</code></td>
</tr>

<tr>
    <td>Details.Financial Aid.Cash and Deposits Total</td>
    <td>Integer</td> 
    <td>Total amount of cash on hand and demand and savings or time deposits.</td>
    <td><code>6363087</code></td>
</tr>

<tr>
    <td>Details.Financial Aid.Cash and Securities Total</td>
    <td>Integer</td> 
    <td>Total amount spent on cash and deposits and governmental and private securities (bonds, notes, mortgages, corporate stocks, etc., including loans and other credit paper held by state loan and investment funds) except holdings of agency and private trust funds. Includes fund investments in securities issued by government concerned but does not include interfund loans, receivables, and the value of real property and other fixed assets.</td>
    <td><code>14606637</code></td>
</tr>

<tr>
    <td>Details.Financial Aid.Categorical Assistance Intergovernmental</td>
    <td>Integer</td> 
    <td>Money paid to other governments for Old Age Assistance, Temporary Assistance for Needy Families (TANF), and Medical Assistance.</td>
    <td><code>41042</code></td>
</tr>

<tr>
    <td>Details.Financial Aid.Categorical Assistance Total Expenditure</td>
    <td>Integer</td> 
    <td>Total amount spent on Old Age Assistance, Temporary Assistance for Needy Families (TANF), and Medical Assistance.</td>
    <td><code>170160</code></td>
</tr>

<tr>
    <td>Details.Financial Aid.Federal Agency Securities Total</td>
    <td>Integer</td> 
    <td>Total amount spent on stocks and bonds, notes, mortgages, and other formal evidences of indebtedness.</td>
    <td><code>0</code></td>
</tr>

<tr>
    <td>Details.Financial Aid.Securities Total</td>
    <td>Integer</td> 
    <td>Total amount spent on stocks and bonds, notes, mortgages, and other formal evidences of indebtedness.</td>
    <td><code>8112690</code></td>
</tr>

<tr>
    <td>Details.Financial Aid.Sinking Fund Total</td>
    <td>Integer</td> 
    <td>Total amount spent on funds established specifically for the redemption of Long-term debt principal.</td>
    <td><code>1379240</code></td>
</tr>

<tr>
    <td>Details.Health.Health Intergovernmental</td>
    <td>Integer</td> 
    <td>Money paid to other governments for the health.</td>
    <td><code>67608</code></td>
</tr>

<tr>
    <td>Details.Health.Health Total Expenditure</td>
    <td>Integer</td> 
    <td>Total amount spent on outpatient health services, other than hospital care, including: public health administration; research and education; categorical health programs; treatment and immunization clinics; nursing; environmental health activities such as air and water pollution control; ambulance service if provided separately from fire protection services, and other general public health activities such as mosquito abatement. School health services provided by health agencies (rather than school agencies) are included here. Sewage treatment operations are classified under Sewerage.</td>
    <td><code>309846</code></td>
</tr>

<tr>
    <td>Details.Insurance Trust.Insurance Trust</td>
    <td>Integer</td> 
    <td>A government-administered plan for compulsory or voluntary social insurance (insurance protection of persons or their survivors against economic hazards arising from retirement, disability, death, accident, illness, unemployment, etc.) through accumulation of assets from contributions, assessments, premiums, and the like collected from employers and employees for use in making cash benefit payments to eligible persons covered by the system. Comprises Employee retirement, Unemployment compensation, Workers' compensation, and Miscellaneous (accident, sickness, and other disability benefit) systems. In exhibit statistics, each insurance trust system is treated as an entity, with its transactions including intragovernmental amounts. However, intragovernmental transactions are excluded from the insurance trust components of revenue and expenditure.</td>
    <td><code>1122612</code></td>
</tr>

<tr>
    <td>Details.Insurance Trust.Insurance Trust Cash and Deposits</td>
    <td>Integer</td> 
    <td>Cash and deposits related to insurance trust.</td>
    <td><code>1718782</code></td>
</tr>

<tr>
    <td>Details.Insurance Trust.Insurance Trust Cash and Securities</td>
    <td>Integer</td> 
    <td>Cash and securities related to insurance trust.</td>
    <td><code>9962332</code></td>
</tr>

<tr>
    <td>Details.Insurance Trust.Insurance Trust Federal Agency Securities</td>
    <td>Integer</td> 
    <td>Total amount spent on federal agency insurance trust securities.</td>
    <td><code>0</code></td>
</tr>

<tr>
    <td>Details.Insurance Trust.Insurance Trust Federal Securities</td>
    <td>Integer</td> 
    <td>Federal securities related to insurance trust.</td>
    <td><code>1883263</code></td>
</tr>

<tr>
    <td>Details.Insurance Trust.Insurance Trust Other Securities</td>
    <td>Integer</td> 
    <td>Other securities related to insurance trust.</td>
    <td><code>6229427</code></td>
</tr>

<tr>
    <td>Details.Insurance Trust.Insurance Trust Securities Total</td>
    <td>Integer</td> 
    <td>Total amount spent on securities for insurance trust.</td>
    <td><code>8112690</code></td>
</tr>

<tr>
    <td>Details.Insurance Trust.Insurance Trust State and Local Securities Total</td>
    <td>Integer</td> 
    <td>Total amount spent on state and local securities for insurance trust.</td>
    <td><code>0</code></td>
</tr>

<tr>
    <td>Details.Insurance Trust.Insurance Trust Total Expenditure</td>
    <td>Integer</td> 
    <td>Cash payments to beneficiaries (including withdrawals of retirement contributions) of employee retirement, unemployment compensation, workers' compensation, and disability benefit social insurance programs. Excludes cost of administering insurance trust activities, state contributions of programs administered by the state or by the federal government, intergovernmental expenditure for support of locally administered employee-retirement systems, and noncontributory gratuities paid to former employees.</td>
    <td><code>1122612</code></td>
</tr>

<tr>
    <td>Details.Intergovernmental.Intergovernmental Expenditure</td>
    <td>Integer</td> 
    <td>Money paid overall.</td>
    <td><code>2536908</code></td>
</tr>

<tr>
    <td>Details.Intergovernmental.Intergovernmental to Combined and Unallocable</td>
    <td>Integer</td> 
    <td>Other kinds of money.</td>
    <td><code>75015</code></td>
</tr>

<tr>
    <td>Details.Intergovernmental.Intergovernmental to Counties</td>
    <td>Integer</td> 
    <td>Money paid to counties.</td>
    <td><code>377518</code></td>
</tr>

<tr>
    <td>Details.Intergovernmental.Intergovernmental to Federal</td>
    <td>Integer</td> 
    <td>Money paid to federal governments.</td>
    <td><code>41125</code></td>
</tr>

<tr>
    <td>Details.Intergovernmental.Intergovernmental to Local</td>
    <td>Integer</td> 
    <td>Money paid to local governments.</td>
    <td><code>2495783</code></td>
</tr>

<tr>
    <td>Details.Intergovernmental.Intergovernmental to Municipalities</td>
    <td>Integer</td> 
    <td>Money paid to municipalities.</td>
    <td><code>0</code></td>
</tr>

<tr>
    <td>Details.Intergovernmental.Intergovernmental to School Districts</td>
    <td>Integer</td> 
    <td>Money paid to school districts.</td>
    <td><code>2037931</code></td>
</tr>

<tr>
    <td>Details.Intergovernmental.Intergovernmental to Special Districts</td>
    <td>Integer</td> 
    <td>Money paid to special districts.</td>
    <td><code>5319</code></td>
</tr>

<tr>
    <td>Details.Intergovernmental.Intergovernmental to State</td>
    <td>Integer</td> 
    <td>Money paid to states.</td>
    <td><code>0</code></td>
</tr>

<tr>
    <td>Details.Intergovernmental.Intergovernmental to Townships</td>
    <td>Integer</td> 
    <td>Money paid to townships.</td>
    <td><code>0</code></td>
</tr>

<tr>
    <td>Details.Natural Resources.Natural Resources Construction</td>
    <td>Integer</td> 
    <td>Total amount spent on construction for the support of natural resources.</td>
    <td><code>2393</code></td>
</tr>

<tr>
    <td>Details.Natural Resources.Natural Resources Direct</td>
    <td>Integer</td> 
    <td>Payments to employees, suppliers, contractors, beneficiaries, and other final recipients of government payments (i.e., all expenditure other than Intergovernmental expenditure) for conservation, promotion, and development of natural resources, such as soil, water, forests, minerals, and wildlife. Includes irrigation, drainage, flood control, forestry and fire protection, soil reclamation, soil and water conservation, fish and game programs, and agricultural fairs.</td>
    <td><code>121578</code></td>
</tr>

<tr>
    <td>Details.Natural Resources.Natural Resources Equipment and Land</td>
    <td>Integer</td> 
    <td>Total amount spent on equipment and land to support natural resources.</td>
    <td><code>9543</code></td>
</tr>

<tr>
    <td>Details.Natural Resources.Natural Resources Intergovernmental</td>
    <td>Integer</td> 
    <td>Money paid to other governments for the conservation, promotion, and development of natural resources, such as soil, water, forests, minerals, and wildlife. Includes irrigation, drainage, flood control, forestry and fire protection, soil reclamation, soil and water conservation, fish and game programs, and agricultural fairs.</td>
    <td><code>11113</code></td>
</tr>

<tr>
    <td>Details.Natural Resources.Natural Resources NEC Total Expenditure</td>
    <td>Integer</td> 
    <td>Total amount spent (Not elsewhere classified) on the conservation, promotion, and development of natural resources, such as soil, water, forests, minerals, and wildlife. Includes irrigation, drainage, flood control, forestry and fire protection, soil reclamation, soil and water conservation, fish and game programs, and agricultural fairs.</td>
    <td><code>35596</code></td>
</tr>

<tr>
    <td>Details.Natural Resources.Natural Resources Total</td>
    <td>Integer</td> 
    <td>Total amount spent on conservation, promotion, and development of natural resources, such as soil, water, forests, minerals, and wildlife. Includes irrigation, drainage, flood control, forestry and fire protection, soil reclamation, soil and water conservation, fish and game programs, and agricultural fairs.</td>
    <td><code>132691</code></td>
</tr>

<tr>
    <td>Details.Public Welfare.Public Welfare Assistance and Subsidies</td>
    <td>Integer</td> 
    <td>Assistance and subsidies related to public welfare.</td>
    <td><code>138192</code></td>
</tr>

<tr>
    <td>Details.Public Welfare.Public Welfare Construction</td>
    <td>Integer</td> 
    <td>Total amount spent on construction for public welfare.</td>
    <td><code>12382</code></td>
</tr>

<tr>
    <td>Details.Public Welfare.Public Welfare Direct Expenditure</td>
    <td>Integer</td> 
    <td>Payments to employees, suppliers, contractors, beneficiaries, and other final recipients of government payments (i.e., all expenditure other than Intergovernmental expenditure) for public welfare.</td>
    <td><code>1610161</code></td>
</tr>

<tr>
    <td>Details.Public Welfare.Public Welfare Equipment and Land</td>
    <td>Integer</td> 
    <td>Total amount spent on equipment and land for public welfare.</td>
    <td><code>9452</code></td>
</tr>

<tr>
    <td>Details.Public Welfare.Public Welfare Intergovernmental</td>
    <td>Integer</td> 
    <td>Money paid to other governments for the public welfare.</td>
    <td><code>48222</code></td>
</tr>

<tr>
    <td>Details.Public Welfare.Public Welfare Other Current Operation</td>
    <td>Integer</td> 
    <td>Direct expenditure for compensation of own officers and employees and for supplies, materials, and contractual services except amounts for capital outlay related to public welfare.</td>
    <td><code>1450135</code></td>
</tr>

<tr>
    <td>Details.Public Welfare.Public Welfare Total Expenditure</td>
    <td>Integer</td> 
    <td>Total amount spent on support of and assistance to needy persons contingent upon their need. Excludes pensions to former employees and other benefits not contingent on need. Expenditures under this heading include: Cash assistance paid directly to needy persons under the categorical programs (Old Age Assistance, Temporary Assistance for Needy Families (TANF) and under any other welfare programs; Vendor payments made directly to private purveyors for medical care, burials, and other commodities and services provided under welfare programs; and provision and operation by the government of welfare institutions. Other public welfare includes payments to other governments for welfare purposes, amounts for administration, support of private welfare agencies, and other public welfare services. Health and hospital services provided directly by the government through its own hospitals and health agencies, and any payments to other governments for such purposes are classed under those functional headings rather than here.</td>
    <td><code>1658383</code></td>
</tr>

<tr>
    <td>Details.Transportation.Transit Subsidy Intergovernmental</td>
    <td>Integer</td> 
    <td>Money paid to other governments in support of subway, bus, surface rail and street railroad, and other passenger transportation systems., including public support of a private utility or railroad and intergovernmental subsidy payments. Excludes amounts paid by a parent government to its dependent transit utility.</td>
    <td><code>0</code></td>
</tr>

<tr>
    <td>Details.Transportation.Transit Subsidy Total Expenditure</td>
    <td>Integer</td> 
    <td>Total amount spent in support of subway, bus, surface rail and street railroad, and other passenger transportation systems., including public support of a private utility or railroad and intergovernmental subsidy payments. Excludes amounts paid by a parent government to its dependent transit utility.</td>
    <td><code>0</code></td>
</tr>

<tr>
    <td>Details.Utilities.Electric Utility Total Expenditure</td>
    <td>Integer</td> 
    <td>Total amount spent on operation and maintenance of electric power system including production or acquisition and distribution of electric power.</td>
    <td><code>142535</code></td>
</tr>

<tr>
    <td>Details.Utilities.Gas Utility Total Expenditure</td>
    <td>Integer</td> 
    <td>Total amount spent on the operation and maintenance of gas supply systems including acquisition and distribution of natural gas.</td>
    <td><code>4553</code></td>
</tr>

<tr>
    <td>Details.Utilities.Transit Utility Total Expenditure</td>
    <td>Integer</td> 
    <td>Total amount spent on the construction, maintenance, and operation of public mass transit systems--bus, commuter rail, light rail, or subway systems. Excludes systems established solely to transport elementary and secondary school pupils. Ferry systems are classified under Highways.</td>
    <td><code>0</code></td>
</tr>

<tr>
    <td>Details.Utilities.Utilities Construction</td>
    <td>Integer</td> 
    <td>Total amount spent on construction for utilities.</td>
    <td><code>10652</code></td>
</tr>

<tr>
    <td>Details.Utilities.Utilities Current Operation</td>
    <td>Integer</td> 
    <td>Amount spent on current operation of government owned and operated water supply, electric light and power, gas supply, or transit system. Government revenue, expenditure, and debt relating to utility facilities leased to other governments or persons, and other commercial type activities of governments, such as port facilities, airports, housing projects, radio stations, steam plants, ferries, abattoirs, etc., are classified as general government activities.</td>
    <td><code>138479</code></td>
</tr>

<tr>
    <td>Details.Utilities.Utilities Equipment and Land</td>
    <td>Integer</td> 
    <td>Total amount spent on equipment and land in support of utilities.</td>
    <td><code>374</code></td>
</tr>

<tr>
    <td>Details.Utilities.Utilities Interest Total</td>
    <td>Integer</td> 
    <td>Interest earned on various utilities.</td>
    <td><code>0</code></td>
</tr>

<tr>
    <td>Details.Utilities.Utilities Total Expenditure</td>
    <td>Integer</td> 
    <td>Total amount spent on government owned and operated water supply, electric light and power, gas supply, or transit system. Government revenue, expenditure, and debt relating to utility facilities leased to other governments or persons, and other commercial type activities of governments, such as port facilities, airports, housing projects, radio stations, steam plants, ferries, abattoirs, etc., are classified as general government activities.</td>
    <td><code>149505</code></td>
</tr>

<tr>
    <td>Details.Utilities.Water Utility Total Expenditure</td>
    <td>Integer</td> 
    <td>Total amount spent on operation and maintenance of water supply system including acquisition and distribution of water to the general public or to other local governments for domestic or industrial use. Acquisition and distribution of water for irrigation of agricultural lands are classified under Natural resources.</td>
    <td><code>2417</code></td>
</tr>

<tr>
    <td>Details.Waste.Sewerage Intergovernmental</td>
    <td>Integer</td> 
    <td>Money paid to other governments for the provision of sanitary and storm sewers and sewage disposal facilities and services, and payments to other governments for such purposes.</td>
    <td><code>23940</code></td>
</tr>

<tr>
    <td>Details.Waste.Sewerage Total Expenditure</td>
    <td>Integer</td> 
    <td>Total amount spent on the provision of sanitary and storm sewers and sewage disposal facilities and services, and payments to other governments for such purposes.</td>
    <td><code>24316</code></td>
</tr>

<tr>
    <td>Details.Waste.Solid Waste Management Intergovernmental</td>
    <td>Integer</td> 
    <td>Money paid to other governments for street cleaning, solid waste collection and disposal, and provision of sanitary landfills.</td>
    <td><code>169</code></td>
</tr>

<tr>
    <td>Details.Waste.Solid Waste Management Total Expenditure</td>
    <td>Integer</td> 
    <td>Total amount spent on the provision of sanitary and storm sewers and sewage disposal facilities and services, and payments to other governments for such purposes.</td>
    <td><code>3937</code></td>
</tr>

<tr>
    <td>Details.Welfare.Welfare Institution Total Expenditure</td>
    <td>Integer</td> 
    <td>Total amount spent on welfare institutions.</td>
    <td><code>45510</code></td>
</tr>

<tr>
    <td>Details.Welfare.Welfare NEC Intergovernmental</td>
    <td>Integer</td> 
    <td>Money paid to other governments for welfare not elsewhere classified.</td>
    <td><code>7180</code></td>
</tr>

<tr>
    <td>Details.Welfare.Welfare NEC Total Expenditure</td>
    <td>Integer</td> 
    <td>Total amount spent on welfare (not elsewhere classified).</td>
    <td><code>317854</code></td>
</tr>

<tr>
    <td>Details.Welfare.Welfare Vendor Payments Total</td>
    <td>Integer</td> 
    <td>Total amount spent on welfare vendor payments.</td>
    <td><code>1115785</code></td>
</tr>

<tr>
    <td>Details.Health.Hospitals.Hospital-Other Intergovernmental</td>
    <td>Integer</td> 
    <td>Money paid to other governments for non-Owned hospitals. These hospitals refer to support for hospital services in private hospitals or other governments.</td>
    <td><code>655</code></td>
</tr>

<tr>
    <td>Details.Health.Hospitals.Hospital-Other Total Expenditure</td>
    <td>Integer</td> 
    <td>Total amount spent on non-Owned hospitals. These hospitals refer to support for hospital services in private hospitals or other governments.</td>
    <td><code>655</code></td>
</tr>

<tr>
    <td>Details.Health.Hospitals.Hospitals Total Construction</td>
    <td>Integer</td> 
    <td>Total amount spent on construction for hospitals.</td>
    <td><code>1233</code></td>
</tr>

<tr>
    <td>Details.Health.Hospitals.Hospitals Total Current</td>
    <td>Integer</td> 
    <td>Direct expenditure for compensation of own officers and employees and for supplies, materials, and contractual services except amounts for capital outlay related to hospitals.</td>
    <td><code>275737</code></td>
</tr>

<tr>
    <td>Details.Health.Hospitals.Hospitals Total Equipment and land</td>
    <td>Integer</td> 
    <td>Total amount spent on equipment and land related to hospitals.</td>
    <td><code>5502</code></td>
</tr>

<tr>
    <td>Details.Health.Hospitals.Hospitals Total Expenditure</td>
    <td>Integer</td> 
    <td>Total amount spent on financing, construction acquisition, maintenance or operation of hospital facilities, provision of hospital care, and support of public or private hospitals.</td>
    <td><code>283127</code></td>
</tr>

<tr>
    <td>Details.Health.Hospitals.Hospitals Total Intergovernmental</td>
    <td>Integer</td> 
    <td>Money paid to other governments for the financing, construction acquisition, maintenance or operation of hospital facilities, provision of hospital care, and support of public or private hospitals.</td>
    <td><code>655</code></td>
</tr>

<tr>
    <td>Details.Health.Hospitals.Own Hospitals Total Expenditure</td>
    <td>Integer</td> 
    <td>Total amount spent on own hospitals. Own hospitals are facilities administered directly by the government concerned.</td>
    <td><code>282472</code></td>
</tr>

<tr>
    <td>Details.Natural Resources.Agriculture.Agriculture Intergovernmental</td>
    <td>Integer</td> 
    <td>Money paid to other governments for the support of agriculture.</td>
    <td><code>273</code></td>
</tr>

<tr>
    <td>Details.Natural Resources.Agriculture.Agriculture Total Expenditure</td>
    <td>Integer</td> 
    <td>Total amount spent on the support of agriculture.</td>
    <td><code>67855</code></td>
</tr>

<tr>
    <td>Details.Natural Resources.Agriculture.Federal Agriculture Farm Income Intergovernmental</td>
    <td>Integer</td> 
    <td>Money paid to other governments for the federal agriculture farm income.</td>
    <td><code>0</code></td>
</tr>

<tr>
    <td>Details.Natural Resources.Agriculture.Federal Agriculture Farm Income Total</td>
    <td>Integer</td> 
    <td>Total amount spent on the federal agriculture farm income.</td>
    <td><code>0</code></td>
</tr>

<tr>
    <td>Details.Natural Resources.Agriculture.Federal Farm Credit Intergovernmental</td>
    <td>Integer</td> 
    <td>Total amount spent on federal farm credit.</td>
    <td><code>0</code></td>
</tr>

<tr>
    <td>Details.Natural Resources.Agriculture.Federal Farm Credit Total</td>
    <td>Integer</td> 
    <td>Total amount spent on federal farm credit.</td>
    <td><code>0</code></td>
</tr>

<tr>
    <td>Details.Natural Resources.Fish and Game.Fish and Game Intergovernmental</td>
    <td>Integer</td> 
    <td>Money paid to other governments for the conservation, promotion, and development of fish and game.</td>
    <td><code>331</code></td>
</tr>

<tr>
    <td>Details.Natural Resources.Fish and Game.Fish and Game Total Expenditure</td>
    <td>Integer</td> 
    <td>Total amount spent on conservation, promotion, and development of fish and game.</td>
    <td><code>23231</code></td>
</tr>

<tr>
    <td>Details.Natural Resources.Forestry.Forestry Intergovernmental</td>
    <td>Integer</td> 
    <td>Money paid to other governments for the support of forestry.</td>
    <td><code>3687</code></td>
</tr>

<tr>
    <td>Details.Natural Resources.Forestry.Forestry Total Expenditure</td>
    <td>Integer</td> 
    <td>Total amount spent on the support of foresty.</td>
    <td><code>6009</code></td>
</tr>

<tr>
    <td>Details.Natural Resources.Parks.Parks Intergovernmental</td>
    <td>Integer</td> 
    <td>Money paid to other governments for the provision and support of recreational and cultural-scientific facilities and activities including golf courses, play fields, playgrounds, public beaches, swimming pools, tennis courts, parks, auditoriums, stadiums, auto camps, recreation piers, marinas, botanical gardens, galleries, museums, and zoos. Also includes building and operation of convention centers and exhibition halls. Public libraries are included under Libraries.</td>
    <td><code>4057</code></td>
</tr>

<tr>
    <td>Details.Natural Resources.Parks.Parks Total Expenditure</td>
    <td>Integer</td> 
    <td>Total amount spent on provision and support of recreational and cultural-scientific facilities and activities including golf courses, play fields, playgrounds, public beaches, swimming pools, tennis courts, parks, auditoriums, stadiums, auto camps, recreation piers, marinas, botanical gardens, galleries, museums, and zoos. Also includes building and operation of convention centers and exhibition halls. Public libraries are included under Libraries.</td>
    <td><code>49855</code></td>
</tr>

<tr>
    <td>Details.Transportation.Airports.Airports Intergovernmental</td>
    <td>Integer</td> 
    <td>Money paid to other governments for the support of airports.</td>
    <td><code>2311</code></td>
</tr>

<tr>
    <td>Details.Transportation.Airports.Airports Total Expenditure</td>
    <td>Integer</td> 
    <td>Total amount spent on support for airports.</td>
    <td><code>2469</code></td>
</tr>

<tr>
    <td>Details.Transportation.Highways.Highways Construction Total</td>
    <td>Integer</td> 
    <td>Total amount spent on highway construction.</td>
    <td><code>408413</code></td>
</tr>

<tr>
    <td>Details.Transportation.Highways.Highways Direct</td>
    <td>Integer</td> 
    <td>Payments to employees, suppliers, contractors, beneficiaries, and other final recipients of government payments (i.e., all expenditure other than Intergovernmental expenditure) for the support of construction, maintenance, and operation of highways, streets, and related structures, including toll highways, bridges, tunnels, ferries, street lighting and snow and ice removal. However, highway policing and traffic control are classed under Police protection.</td>
    <td><code>618099</code></td>
</tr>

<tr>
    <td>Details.Transportation.Highways.Highways Intergovernmental</td>
    <td>Integer</td> 
    <td>Money paid to other governments for the support of construction, maintenance, and operation of highways, streets, and related structures, including toll highways, bridges, tunnels, ferries, street lighting and snow and ice removal. However, highway policing and traffic control are classed under Police protection.</td>
    <td><code>213859</code></td>
</tr>

<tr>
    <td>Details.Transportation.Highways.Highways Land and Equipment</td>
    <td>Integer</td> 
    <td>Total amount spent on highways land and equipment.</td>
    <td><code>50890</code></td>
</tr>

<tr>
    <td>Details.Transportation.Highways.Highways Total Expenditure</td>
    <td>Integer</td> 
    <td>Total amount spent on the support of construction, maintenance, and operation of highways, streets, and related structures, including toll highways, bridges, tunnels, ferries, street lighting and snow and ice removal. However, highway policing and traffic control are classed under Police protection.</td>
    <td><code>831958</code></td>
</tr>

<tr>
    <td>Details.Transportation.Highways.Regular Highways Intergovernmental</td>
    <td>Integer</td> 
    <td>Money paid to other governments for the construction, maintenance, and operation of highways, streets, and related structures, including toll highways, bridges, tunnels, ferries, street lighting and snow and ice removal. However, highway policing and traffic control are classed under Police protection.</td>
    <td><code>213859</code></td>
</tr>

<tr>
    <td>Details.Transportation.Highways.Regular Highways Total Expenditure</td>
    <td>Integer</td> 
    <td>Total amount spent on regular highways.</td>
    <td><code>749683</code></td>
</tr>

<tr>
    <td>Details.Transportation.Highways.Toll Highways Total Expenditure</td>
    <td>Integer</td> 
    <td>Total amount spent on the support of construction, maintenance, and operation toll highways.</td>
    <td><code>82275</code></td>
</tr>

<tr>
    <td>Details.Transportation.Parking.Parking Intergovernmental</td>
    <td>Integer</td> 
    <td>Money paid to other governments for the construction, purchase, maintenance, and operation of public-use parking lots, garages, parking meters, and other distinctive parking facilities on a commercial basis.</td>
    <td><code>0</code></td>
</tr>

<tr>
    <td>Details.Transportation.Parking.Parking Total</td>
    <td>Integer</td> 
    <td>Total amount spent on construction, purchase, maintenance, and operation of public-use parking lots, garages, parking meters, and other distinctive parking facilities on a commercial basis.</td>
    <td><code>0</code></td>
</tr>

<tr>
    <td>Details.Transportation.Water Transport.Water Transport Intergovernmental</td>
    <td>Integer</td> 
    <td>Money paid to other governments for the construction, maintenance, operation, and support of canals and other waterways, harbors, docks, wharves, and related marine terminal facilities.</td>
    <td><code>0</code></td>
</tr>

<tr>
    <td>Details.Transportation.Water Transport.Water Transport Total Expenditure</td>
    <td>Integer</td> 
    <td>Total amount spent on construction, maintenance, operation, and support of canals and other waterways, harbors, docks, wharves, and related marine terminal facilities.</td>
    <td><code>10</code></td>
</tr>

</table>