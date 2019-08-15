---
permalink: /python/finance/
style: dataset
---



<img class="img-thumbnail float-right"
     src="/images/datasets/finance-icon.png"
     alt="finance icon"
     role="presentation">

# Finance Python Library

<p class='lead'>From the CORGIS Dataset Project</p>

<span class='text-muted'>By Austin Cory Bart <acbart@vt.edu></span><br>
<span class='text-muted'>Version 2.0.0, created 11/1/2015</span><br>
<span class='text-muted'>Tags: finance, government, expenditure, charges, money, united states, us</span>

# Overview

The Annual Survey of State Government Finances provides a comprehensive summary of the annual survey findings for state governments, as well as data for individual states. The data contain detail of revenue by source, expenditure by object and function, indebtedness by term, and assets by purpose. This data goes back for almost two decades across every date.



<http://www.census.gov//govs/state/about_the_survey.html>




# Explore Structure

Each row represents *$MISSING_FIELD*.



<button type='button'
        class='btn btn-info'
        id='btn-explore'>Explore finance data</button>

<script>
$(document).ready(function() {
    $("#btn-explore").click(function() {
        $( "#explore" ).dialog("open")
                       .css({'max-height':"400px", overflow:"auto"});
        $('.ui-dialog :button').blur();
    });
});
</script>

<div id='explore' title='List'>
    <table class='table table-condensed table-striped table-bordered' >
        <tr> <th>Index</th> <th>Type</th> <th>Example Value</th></tr>
        <tr> <td>0</td>
             <td>dict</td>
             <td><a class='dialog-opener' id='btn-explore-'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a></td>
        </tr>
        <tr> <td>1</td> <td>dict</td> <td><em>(same structure)</em></td></tr>
        <tr> <td>2</td> <td>dict</td> <td><em>(same structure)</em></td></tr>
        <tr> <td>...</td> <td>...</td> <td>...</td></tr>
    </table>
</div>

<script>
$(document).ready(function() {
    $( "#explore" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    $("#btn-explore-").click(function() {
        $( "#explore-" ).dialog("open").css({'max-height':"400px", overflow:"auto"});
        $('.ui-dialog :button').blur();
    });
});
</script>


<div id='explore-' title='Dictionary (4 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"State"</code></td> 
             <td><span data-toggle="tooltip"
                       title='String (text)'>
                       str</span></td> 
             <td>
             
                <code>"Oklahoma"</code>
             
                
             </td> 
             <td>The state that this report was made for (full name, not the two letter abbreviation).</td> </tr>
        
        <tr> <td><code>"Year"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>1996</code>
             
                
             </td> 
             <td>The year that this report was made for.</td> </tr>
        
        <tr> <td><code>"Totals"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Totals'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Details"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Details'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
    </table>
</div>

    

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-State").click(function() {
        $( "#explore-State" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Year").click(function() {
        $( "#explore-Year" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Totals").click(function() {
        $( "#explore-Totals" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Details").click(function() {
        $( "#explore-Details" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Totals' title='Dictionary (24 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Capital outlay"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>711251</code>
             
                
             </td> 
             <td>Direct expenditure for contract or force account construction of buildings,grounds, and other improvements, and purchase of equipment, land, and existing structures. Includes amounts for additions, replacements, and major alterations to fixed works and structures. However, expenditure for repairs to such works and structures is classified as current operation expenditure.</td> </tr>
        
        <tr> <td><code>"Charges"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>933593</code>
             
                
             </td> 
             <td>Charges imposed for providing current services or for the sale of products in connection with general government activities.</td> </tr>
        
        <tr> <td><code>"Construction"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>516787</code>
             
                
             </td> 
             <td>Production of fixed works and structures additions, replacements, and major alterations, including planning and design of specific projects, site improvements, and provision of equipment and facilities that are integral parts of a structure. Includes contract construction, undertaken on a contract basis by private contractors, and force account construction, undertaken with direct use of material and labor by the government.</td> </tr>
        
        <tr> <td><code>"Employee retirement revenue"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>1704971</code>
             
                
             </td> 
             <td>$MISSING_FIELD</td> </tr>
        
        <tr> <td><code>"Equipment and land"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>194464</code>
             
                
             </td> 
             <td>Apparatus, furnishings, motor vehicles, office machines, and the like having an expected life of more than 5 years. Equipment expenditure consists only of amounts for purchase of equipment, including both additional equipment and replacements. Expenditures for facilities that are integral parts of structures are classified as expenditure for construction or for purchase of land and existing structures.</td> </tr>
        
        <tr> <td><code>"Expenditure"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>9024966</code>
             
                
             </td> 
             <td>All amounts of money paid out by a government--net of recoveries and other correcting transactions--other than for retirement of debt, investment in securities, extension of credit, or as agency transactions. Note that expenditure includes only external transactions of a government and excludes non-cash transactions such as the provision of perquisites or other payments in kind.</td> </tr>
        
        <tr> <td><code>"Federal intergovernmental"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>2119474</code>
             
                
             </td> 
             <td>Intergovernmental revenue received by a government directly from the federal government. For local governments, excludes federal aid channeled through state governments, which is considered as Intergovernmental revenue from state government.</td> </tr>
        
        <tr> <td><code>"General expenditure"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>7752849</code>
             
                
             </td> 
             <td>Amounts paid to other governments as fiscal aid in the form of shared revenues and grants-in-aid, as reimbursements for performance of general government activities and for specific services for the paying government, or in lieu of taxes. Excludes amounts paid to other governments for purchase of commodities, property, or utility services, any tax imposed and paid as such, and employer contributions for social insurance - e.g., contributions to the Federal Government for Old Age, Survivors', Disability, and Health Insurance for government employees.</td> </tr>
        
        <tr> <td><code>"General revenue"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>8155980</code>
             
                
             </td> 
             <td>All government revenue except Liquor stores revenue, Insurance trust revenue, and Utility revenue. The basis for distinction is not the fund or administrative unit receiving particular amounts, but rather the nature of the revenue sources concerned.</td> </tr>
        
        <tr> <td><code>"Insurance trust  revenue"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>2206642</code>
             
                
             </td> 
             <td>Revenue from contributions required of employers and employees for financing social insurance programs operated by the government (see Insurance trust system, below) and earnings on assets held for such systems. Excludes any contributions by a government - either as employer contributions or for general financial support - to a social insurance system it administers. Note that tax proceeds, donations, and any forms of revenue other than those enumerated above are classified as general revenue, even though such amounts may be received specifically for insurance trust purposes.</td> </tr>
        
        <tr> <td><code>"Intergovernmental"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>2197345</code>
             
                
             </td> 
             <td>Amounts received from other governments as fiscal aid in the form of shared revenues and grants-in -aid, as reimbursements for performance of general government functions and specific services for the paying government (e.g., care of prisoners or contractual research), or in lieu of taxes, Excludes amounts received from other governments for sale of property, commodities, and utility services. All intergovernmental revenue is classified as General revenue.</td> </tr>
        
        <tr> <td><code>"License tax"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>658486</code>
             
                
             </td> 
             <td>Taxes exacted (either for revenue raising or for regulation) as a condition to the exercise of a business or nonbusiness privilege, at a flat rate or measured by such bases as capital stock, capital surplus, number of business units, or capacity. Excludes taxes measured directly by transactions, gross or net income, or value of property except those to which only nominal rates apply. "License" based on these latter measures, other than those at nominal rates, are classified according to the measure concerned. Includes "fees" related to licensing activities - automobile inspection, gasoline and oil inspection, professional examinations and licenses, etc. - as well as license taxes producing substantial revenue.</td> </tr>
        
        <tr> <td><code>"Local intergovernmental"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>77871</code>
             
                
             </td> 
             <td>Amounts from local governments: for shares in financial support of programs administered by the state; for reimbursements of services performed or expenditures made for them by the state; for application to debt services on state debt issued for their benefit; and for repayment of advances and contingent loans extended to them. Does not include local government contributions to state-administered employee retirement or other insurance trust systems, which are classified as insurance trust revenue, or agency transactions (see Agency and private trust transactions). Excludes proceeds from interest on local government securities held by the state and proceeds from state taxes on local government facilities.</td> </tr>
        
        <tr> <td><code>"Miscellaneous"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>407354</code>
             
                
             </td> 
             <td>General expenditure for purposes and activities not falling within any standard functional category and unallocated amounts relating to two or more functions.</td> </tr>
        
        <tr> <td><code>"Miscellaneous commercial activity"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>1968</code>
             
                
             </td> 
             <td>Provision and operation of commercial facilities not classified under particular functions. Includes a bank (North Dakota), and cement plant, hail insurance systems, and the like.</td> </tr>
        
        <tr> <td><code>"Other insurance trust revenue"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>0</code>
             
                
             </td> 
             <td>Other revenue related to ITR.</td> </tr>
        
        <tr> <td><code>"Revenue"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>10609104</code>
             
                
             </td> 
             <td>All amounts of money received by a government from external sources--net of refunds and other correcting transactions--other than from issuance of debt, liquidation of investments, and as agency and private trust transactions. Note that revenue excludes noncash transactions such as receipt of services, commodities, or other "receipts in kind."</td> </tr>
        
        <tr> <td><code>"Sales tax"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>1870060</code>
             
                
             </td> 
             <td>Sales or gross receipts taxes which are applicable with only specified exceptions to all types of goods and services, or all gross income, whether at a single rate or at classified rates. Taxes imposed distinctively upon sales or gross receipts from selected commodities, services, or business are reported separately under categories one through eight below.</td> </tr>
        
        <tr> <td><code>"Selective sales tax"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>659669</code>
             
                
             </td> 
             <td>Sales and gross receipts taxes imposed on sales of particular commodities or services or gross receipts of particular businesses, separately and apart from the application of general sales and gross receipts taxes. Specific selective sales taxes included are alcoholic beverages, amusements, insurance, motor fuels, parimutuels, public utilities, tobacco products, and others.</td> </tr>
        
        <tr> <td><code>"State intergovernmental"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>0</code>
             
                
             </td> 
             <td>All intergovernmental revenue received from the state government. For local governments, includes amounts originally from the federal government but channeled through the state.</td> </tr>
        
        <tr> <td><code>"Tax"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>4617688</code>
             
                
             </td> 
             <td>Compulsory contributions exacted by a government for public purposes except employee and employee assessments for retirement and social insurance purposes, which are classified as insurance trust revenue. All tax revenue is classified as general revenue and comprises amounts received (including interest and penalties but excluding protested amounts and refunds) from all taxes imposed by a government. Note that local government tax revenue excludes any amounts from shares of state-imposed and collected taxes, which are classified as Intergovernmental revenue.</td> </tr>
        
        <tr> <td><code>"Unemployment comp revenue"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>206068</code>
             
                
             </td> 
             <td>Revenue related to Unemployment Compensation.</td> </tr>
        
        <tr> <td><code>"Utility revenue"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>246482</code>
             
                
             </td> 
             <td>Revenue from sale of utility commodities and services to the public and to other governments. Does not include amounts from sales to the parent government. Also excludes income from utility fund investments and from other nonoperating properties (treated as General revenue). Any monies from taxes, special assessments, and intergovernmental revenue are classified as General revenue, not Utility revenue.</td> </tr>
        
        <tr> <td><code>"Worker's comp revenue"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>295603</code>
             
                
             </td> 
             <td>Revenue related to Worker's Compensation.</td> </tr>
        
    </table>
</div>

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Totals" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Totals-Capital-outlay").click(function() {
        $( "#explore-Totals-Capital-outlay" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Totals-Charges").click(function() {
        $( "#explore-Totals-Charges" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Totals-Construction").click(function() {
        $( "#explore-Totals-Construction" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Totals-Employee-retirement-revenue").click(function() {
        $( "#explore-Totals-Employee-retirement-revenue" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Totals-Equipment-and-land").click(function() {
        $( "#explore-Totals-Equipment-and-land" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Totals-Expenditure").click(function() {
        $( "#explore-Totals-Expenditure" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Totals-Federal-intergovernmental").click(function() {
        $( "#explore-Totals-Federal-intergovernmental" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Totals-General-expenditure").click(function() {
        $( "#explore-Totals-General-expenditure" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Totals-General-revenue").click(function() {
        $( "#explore-Totals-General-revenue" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Totals-Insurance-trust--revenue").click(function() {
        $( "#explore-Totals-Insurance-trust--revenue" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Totals-Intergovernmental").click(function() {
        $( "#explore-Totals-Intergovernmental" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Totals-License-tax").click(function() {
        $( "#explore-Totals-License-tax" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Totals-Local-intergovernmental").click(function() {
        $( "#explore-Totals-Local-intergovernmental" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Totals-Miscellaneous").click(function() {
        $( "#explore-Totals-Miscellaneous" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Totals-Miscellaneous-commercial-activity").click(function() {
        $( "#explore-Totals-Miscellaneous-commercial-activity" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Totals-Other-insurance-trust-revenue").click(function() {
        $( "#explore-Totals-Other-insurance-trust-revenue" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Totals-Revenue").click(function() {
        $( "#explore-Totals-Revenue" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Totals-Sales-tax").click(function() {
        $( "#explore-Totals-Sales-tax" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Totals-Selective-sales-tax").click(function() {
        $( "#explore-Totals-Selective-sales-tax" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Totals-State-intergovernmental").click(function() {
        $( "#explore-Totals-State-intergovernmental" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Totals-Tax").click(function() {
        $( "#explore-Totals-Tax" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Totals-Unemployment-comp-revenue").click(function() {
        $( "#explore-Totals-Unemployment-comp-revenue" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Totals-Utility-revenue").click(function() {
        $( "#explore-Totals-Utility-revenue" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Totals-Worker_s-comp-revenue").click(function() {
        $( "#explore-Totals-Worker_s-comp-revenue" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Details' title='Dictionary (13 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Details.Correction"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Details-Correction'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Details.Education"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Details-Education'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Details.Employment"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Details-Employment'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Details.Financial Aid"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Details-Financial-Aid'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Details.Health"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Details-Health'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Details.Insurance Trust"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Details-Insurance-Trust'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Details.Intergovernmental"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Details-Intergovernmental'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Details.Natural Resources"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Details-Natural-Resources'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Details.Public Welfare"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Details-Public-Welfare'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Details.Transportation"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Details-Transportation'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Details.Utilities"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Details-Utilities'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Details.Waste"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Details-Waste'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Details.Welfare"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Details-Welfare'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
    </table>
</div>

    

    

    

    

    

    

    

    

    

    

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Details" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Details-Correction").click(function() {
        $( "#explore-Details-Correction" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Details-Education").click(function() {
        $( "#explore-Details-Education" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Details-Employment").click(function() {
        $( "#explore-Details-Employment" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Details-Financial-Aid").click(function() {
        $( "#explore-Details-Financial-Aid" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Details-Health").click(function() {
        $( "#explore-Details-Health" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Details-Insurance-Trust").click(function() {
        $( "#explore-Details-Insurance-Trust" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Details-Intergovernmental").click(function() {
        $( "#explore-Details-Intergovernmental" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Details-Natural-Resources").click(function() {
        $( "#explore-Details-Natural-Resources" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Details-Public-Welfare").click(function() {
        $( "#explore-Details-Public-Welfare" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Details-Transportation").click(function() {
        $( "#explore-Details-Transportation" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Details-Utilities").click(function() {
        $( "#explore-Details-Utilities" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Details-Waste").click(function() {
        $( "#explore-Details-Waste" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Details-Welfare").click(function() {
        $( "#explore-Details-Welfare" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Details-Correction' title='Dictionary (5 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Correction Institutions Total"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>165227</code>
             
                
             </td> 
             <td>Total amount spent on correctional institutions purposes, especially prisons.</td> </tr>
        
        <tr> <td><code>"Correction Intergovernmental"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>13529</code>
             
                
             </td> 
             <td>Money paid to other governments for correctional purposes, such as prisons.</td> </tr>
        
        <tr> <td><code>"Correction NEC Intergovernmental"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>13529</code>
             
                
             </td> 
             <td>Money paid to other governments for correctional purposes, such as prisons, that is not elsewhere classified.</td> </tr>
        
        <tr> <td><code>"Correction NEC Total"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>130881</code>
             
                
             </td> 
             <td>Total amount spent for correctional purposes, such as prisons, that is not elsewhere classified.</td> </tr>
        
        <tr> <td><code>"Correction Total"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>296108</code>
             
                
             </td> 
             <td>Total amount spent on correctional purposes, such as prisons.</td> </tr>
        
    </table>
</div>

    

    

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Details-Correction" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Details-Correction-Correction-Institutions-Total").click(function() {
        $( "#explore-Details-Correction-Correction-Institutions-Total" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Details-Correction-Correction-Intergovernmental").click(function() {
        $( "#explore-Details-Correction-Correction-Intergovernmental" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Details-Correction-Correction-NEC-Intergovernmental").click(function() {
        $( "#explore-Details-Correction-Correction-NEC-Intergovernmental" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Details-Correction-Correction-NEC-Total").click(function() {
        $( "#explore-Details-Correction-Correction-NEC-Total" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Details-Correction-Correction-Total").click(function() {
        $( "#explore-Details-Correction-Correction-Total" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Details-Education' title='Dictionary (14 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Edcation Assistance and Subsidies"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>68341</code>
             
                
             </td> 
             <td>Total amount spent on assistance and subsidies for education.</td> </tr>
        
        <tr> <td><code>"Education Construction"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>63357</code>
             
                
             </td> 
             <td>Total amount spent on construction for educational purposes.</td> </tr>
        
        <tr> <td><code>"Education Equipment"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>66084</code>
             
                
             </td> 
             <td>Total amount spent on equipment for educational purposes.</td> </tr>
        
        <tr> <td><code>"Education Equipment and Land"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>69335</code>
             
                
             </td> 
             <td>Total amount spent on equipment and land for educational purposes.</td> </tr>
        
        <tr> <td><code>"Education Intergovernmental"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>2038925</code>
             
                
             </td> 
             <td>Money paid to other governments for educational purposes.</td> </tr>
        
        <tr> <td><code>"Education Other Current Operation"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>1235767</code>
             
                
             </td> 
             <td>Direct expenditure for compensation of own officers and employees and for supplies, materials, and contractual services except amounts for capital outlay related to education.</td> </tr>
        
        <tr> <td><code>"Education Total"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>3475725</code>
             
                
             </td> 
             <td>Total amount spent on schools, colleges, and other educational institutions (e.g., for blind, deaf, and other handicapped individuals), and educational programs for adults, veterans, and other special classes. State institutions of higher education includes activities of institutions operated by the state, except that agricultural extension services and experiment stations are classified under Natural resources and hospitals serving the public are classified under Hospitals. Revenue and expenditure for dormitories, cafeterias, athletic events, bookstores, and other auxiliary enterprises financed mainly through charges for services are reported on a gross basis.</td> </tr>
        
        <tr> <td><code>"Education-NEC Expenditure Total"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>154591</code>
             
                
             </td> 
             <td>Total amount spent on education that is not elsewhere classified.</td> </tr>
        
        <tr> <td><code>"Education-NEC Intergovernmental"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>348</code>
             
                
             </td> 
             <td>Money paid to other governments for education that is not elsewhere classified.</td> </tr>
        
        <tr> <td><code>"Elementary Secondary Intergovernmental"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>2038577</code>
             
                
             </td> 
             <td>Money paid to other governments for elementary schools.</td> </tr>
        
        <tr> <td><code>"Elementary Secondary Total Expenditure"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>2053367</code>
             
                
             </td> 
             <td>Total amount spent on elementary schools.</td> </tr>
        
        <tr> <td><code>"Higher Education-Auxilliary Total Expenditure"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>206486</code>
             
                
             </td> 
             <td>Total amount spent on auxliary higher education enterprises.</td> </tr>
        
        <tr> <td><code>"Higher Education-NEC Intergovernmental"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>0</code>
             
                
             </td> 
             <td>Money paid to other governments for higher education that is not elsewhere classified.</td> </tr>
        
        <tr> <td><code>"Higher Education-NEC Total Expenditure"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>1061281</code>
             
                
             </td> 
             <td>Total amount spent on higher education that is not elsewhere classified.</td> </tr>
        
    </table>
</div>

    

    

    

    

    

    

    

    

    

    

    

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Details-Education" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Details-Education-Edcation-Assistance-and-Subsidies").click(function() {
        $( "#explore-Details-Education-Edcation-Assistance-and-Subsidies" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Details-Education-Education-Construction").click(function() {
        $( "#explore-Details-Education-Education-Construction" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Details-Education-Education-Equipment").click(function() {
        $( "#explore-Details-Education-Education-Equipment" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Details-Education-Education-Equipment-and-Land").click(function() {
        $( "#explore-Details-Education-Education-Equipment-and-Land" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Details-Education-Education-Intergovernmental").click(function() {
        $( "#explore-Details-Education-Education-Intergovernmental" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Details-Education-Education-Other-Current-Operation").click(function() {
        $( "#explore-Details-Education-Education-Other-Current-Operation" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Details-Education-Education-Total").click(function() {
        $( "#explore-Details-Education-Education-Total" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Details-Education-Education-NEC-Expenditure-Total").click(function() {
        $( "#explore-Details-Education-Education-NEC-Expenditure-Total" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Details-Education-Education-NEC-Intergovernmental").click(function() {
        $( "#explore-Details-Education-Education-NEC-Intergovernmental" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Details-Education-Elementary-Secondary-Intergovernmental").click(function() {
        $( "#explore-Details-Education-Elementary-Secondary-Intergovernmental" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Details-Education-Elementary-Secondary-Total-Expenditure").click(function() {
        $( "#explore-Details-Education-Elementary-Secondary-Total-Expenditure" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Details-Education-Higher-Education-Auxilliary-Total-Expenditure").click(function() {
        $( "#explore-Details-Education-Higher-Education-Auxilliary-Total-Expenditure" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Details-Education-Higher-Education-NEC-Intergovernmental").click(function() {
        $( "#explore-Details-Education-Higher-Education-NEC-Intergovernmental" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Details-Education-Higher-Education-NEC-Total-Expenditure").click(function() {
        $( "#explore-Details-Education-Higher-Education-NEC-Total-Expenditure" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Details-Employment' title='Dictionary (6 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Employee Retirement Total Cash and Securities"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>8699175</code>
             
                
             </td> 
             <td>Total cash and securities related to employee retirement.</td> </tr>
        
        <tr> <td><code>"Employee Retirement Total Expenditure"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>712514</code>
             
                
             </td> 
             <td>Total amount spent on cash payments to beneficiaries (including withdrawals of contributions) of government-administered employee-retirement systems, local government contributions to state-administered employee-retirement systems, and noncontributory gratuities paid to former employees; these are classed under General expenditure.</td> </tr>
        
        <tr> <td><code>"Employment Security Administration Expenditure Total"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>37401</code>
             
                
             </td> 
             <td>Total amount spent on administration of unemployment compensation, public employment offices, and related services, and veterans' readjustment allowances.</td> </tr>
        
        <tr> <td><code>"Employment Security Administration Intergovernmental"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>0</code>
             
                
             </td> 
             <td>Money paid to other governments for the administration of unemployment compensation, public employment offices, and related services, and veterans' readjustment allowances.</td> </tr>
        
        <tr> <td><code>"Unemployment Comp Total Cash and Securities"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>544529</code>
             
                
             </td> 
             <td>Total cash and securities related to unemployment compensation.</td> </tr>
        
        <tr> <td><code>"Unemployment Comp Total Expenditure"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>146857</code>
             
                
             </td> 
             <td>Comprises payments made to beneficiaries under basic provisions of unemployment compensation programs and special program payments, such as for extended benefits triggered by economic conditions.</td> </tr>
        
    </table>
</div>

    

    

    

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Details-Employment" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Details-Employment-Employee-Retirement-Total-Cash-and-Securities").click(function() {
        $( "#explore-Details-Employment-Employee-Retirement-Total-Cash-and-Securities" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Details-Employment-Employee-Retirement-Total-Expenditure").click(function() {
        $( "#explore-Details-Employment-Employee-Retirement-Total-Expenditure" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Details-Employment-Employment-Security-Administration-Expenditure-Total").click(function() {
        $( "#explore-Details-Employment-Employment-Security-Administration-Expenditure-Total" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Details-Employment-Employment-Security-Administration-Intergovernmental").click(function() {
        $( "#explore-Details-Employment-Employment-Security-Administration-Intergovernmental" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Details-Employment-Unemployment-Comp-Total-Cash-and-Securities").click(function() {
        $( "#explore-Details-Employment-Unemployment-Comp-Total-Cash-and-Securities" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Details-Employment-Unemployment-Comp-Total-Expenditure").click(function() {
        $( "#explore-Details-Employment-Unemployment-Comp-Total-Expenditure" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Details-Financial-Aid' title='Dictionary (13 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Assistance and Subsidies"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>206533</code>
             
                
             </td> 
             <td>Total amount spent on cash contributions and subsidies to persons, not in payments for goods or services or claims against the government. For local governments, this object category comprises only direct cash assistance payments to public welfare recipients. For states, it includes also veterans' bonuses and direct cash grants for tuition, scholarships, and aid to nonpublic education institutions.</td> </tr>
        
        <tr> <td><code>"Beginning Long Term Debt Total Outstanding"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>0</code>
             
                
             </td> 
             <td>Total amount spent on long term debt. Long-term debt consists of loans and financial obligations lasting over one year.</td> </tr>
        
        <tr> <td><code>"Bond Fund Total"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>250936</code>
             
                
             </td> 
             <td>Total amount spent on funds established to account for the proceeds of bond issues pending their disbursement.</td> </tr>
        
        <tr> <td><code>"Borrowing Total"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>0</code>
             
                
             </td> 
             <td>Total amount borrowed.</td> </tr>
        
        <tr> <td><code>"Cash Assistance Intergovernmental"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>0</code>
             
                
             </td> 
             <td>Money paid to other governments for cash assistance payments to public welfare recipients.</td> </tr>
        
        <tr> <td><code>"Cash Assistance Total Expenditure"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>9074</code>
             
                
             </td> 
             <td>Total amount spent on direct cash payments to beneficiaries of public welfare programs.</td> </tr>
        
        <tr> <td><code>"Cash and Deposits Total"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>6363087</code>
             
                
             </td> 
             <td>Total amount of cash on hand and demand and savings or time deposits.</td> </tr>
        
        <tr> <td><code>"Cash and Securities Total"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>14606637</code>
             
                
             </td> 
             <td>Total amount spent on cash and deposits and governmental and private securities (bonds, notes, mortgages, corporate stocks, etc., including loans and other credit paper held by state loan and investment funds) except holdings of agency and private trust funds. Includes fund investments in securities issued by government concerned but does not include interfund loans, receivables, and the value of real property and other fixed assets.</td> </tr>
        
        <tr> <td><code>"Categorical Assistance Intergovernmental"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>41042</code>
             
                
             </td> 
             <td>Money paid to other governments for Old Age Assistance, Temporary Assistance for Needy Families (TANF), and Medical Assistance.</td> </tr>
        
        <tr> <td><code>"Categorical Assistance Total Expenditure"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>170160</code>
             
                
             </td> 
             <td>Total amount spent on Old Age Assistance, Temporary Assistance for Needy Families (TANF), and Medical Assistance.</td> </tr>
        
        <tr> <td><code>"Federal Agency Securities Total"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>0</code>
             
                
             </td> 
             <td>Total amount spent on stocks and bonds, notes, mortgages, and other formal evidences of indebtedness.</td> </tr>
        
        <tr> <td><code>"Securities Total"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>8112690</code>
             
                
             </td> 
             <td>Total amount spent on stocks and bonds, notes, mortgages, and other formal evidences of indebtedness.</td> </tr>
        
        <tr> <td><code>"Sinking Fund Total"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>1379240</code>
             
                
             </td> 
             <td>Total amount spent on funds established specifically for the redemption of Long-term debt principal.</td> </tr>
        
    </table>
</div>

    

    

    

    

    

    

    

    

    

    

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Details-Financial-Aid" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Details-Financial-Aid-Assistance-and-Subsidies").click(function() {
        $( "#explore-Details-Financial-Aid-Assistance-and-Subsidies" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Details-Financial-Aid-Beginning-Long-Term-Debt-Total-Outstanding").click(function() {
        $( "#explore-Details-Financial-Aid-Beginning-Long-Term-Debt-Total-Outstanding" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Details-Financial-Aid-Bond-Fund-Total").click(function() {
        $( "#explore-Details-Financial-Aid-Bond-Fund-Total" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Details-Financial-Aid-Borrowing-Total").click(function() {
        $( "#explore-Details-Financial-Aid-Borrowing-Total" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Details-Financial-Aid-Cash-Assistance-Intergovernmental").click(function() {
        $( "#explore-Details-Financial-Aid-Cash-Assistance-Intergovernmental" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Details-Financial-Aid-Cash-Assistance-Total-Expenditure").click(function() {
        $( "#explore-Details-Financial-Aid-Cash-Assistance-Total-Expenditure" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Details-Financial-Aid-Cash-and-Deposits-Total").click(function() {
        $( "#explore-Details-Financial-Aid-Cash-and-Deposits-Total" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Details-Financial-Aid-Cash-and-Securities-Total").click(function() {
        $( "#explore-Details-Financial-Aid-Cash-and-Securities-Total" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Details-Financial-Aid-Categorical-Assistance-Intergovernmental").click(function() {
        $( "#explore-Details-Financial-Aid-Categorical-Assistance-Intergovernmental" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Details-Financial-Aid-Categorical-Assistance-Total-Expenditure").click(function() {
        $( "#explore-Details-Financial-Aid-Categorical-Assistance-Total-Expenditure" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Details-Financial-Aid-Federal-Agency-Securities-Total").click(function() {
        $( "#explore-Details-Financial-Aid-Federal-Agency-Securities-Total" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Details-Financial-Aid-Securities-Total").click(function() {
        $( "#explore-Details-Financial-Aid-Securities-Total" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Details-Financial-Aid-Sinking-Fund-Total").click(function() {
        $( "#explore-Details-Financial-Aid-Sinking-Fund-Total" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Details-Health' title='Dictionary (3 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Health Intergovernmental"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>67608</code>
             
                
             </td> 
             <td>Money paid to other governments for the health.</td> </tr>
        
        <tr> <td><code>"Health Total Expenditure"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>309846</code>
             
                
             </td> 
             <td>Total amount spent on outpatient health services, other than hospital care, including: public health administration; research and education; categorical health programs; treatment and immunization clinics; nursing; environmental health activities such as air and water pollution control; ambulance service if provided separately from fire protection services, and other general public health activities such as mosquito abatement. School health services provided by health agencies (rather than school agencies) are included here. Sewage treatment operations are classified under Sewerage.</td> </tr>
        
        <tr> <td><code>"Details.Health.Hospitals"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Details-Health-Hospitals'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
    </table>
</div>

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Details-Health" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Details-Health-Health-Intergovernmental").click(function() {
        $( "#explore-Details-Health-Health-Intergovernmental" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Details-Health-Health-Total-Expenditure").click(function() {
        $( "#explore-Details-Health-Health-Total-Expenditure" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Details-Health-Hospitals").click(function() {
        $( "#explore-Details-Health-Hospitals" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Details-Insurance-Trust' title='Dictionary (9 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Insurance Trust"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>1122612</code>
             
                
             </td> 
             <td>A government-administered plan for compulsory or voluntary social insurance (insurance protection of persons or their survivors against economic hazards arising from retirement, disability, death, accident, illness, unemployment, etc.) through accumulation of assets from contributions, assessments, premiums, and the like collected from employers and employees for use in making cash benefit payments to eligible persons covered by the system. Comprises Employee retirement, Unemployment compensation, Workers' compensation, and Miscellaneous (accident, sickness, and other disability benefit) systems. In exhibit statistics, each insurance trust system is treated as an entity, with its transactions including intragovernmental amounts. However, intragovernmental transactions are excluded from the insurance trust components of revenue and expenditure.</td> </tr>
        
        <tr> <td><code>"Insurance Trust Cash and Deposits"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>1718782</code>
             
                
             </td> 
             <td>Cash and deposits related to insurance trust.</td> </tr>
        
        <tr> <td><code>"Insurance Trust Cash and Securities"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>9962332</code>
             
                
             </td> 
             <td>Cash and securities related to insurance trust.</td> </tr>
        
        <tr> <td><code>"Insurance Trust Federal Agency Securities"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>0</code>
             
                
             </td> 
             <td>Total amount spent on federal agency insurance trust securities.</td> </tr>
        
        <tr> <td><code>"Insurance Trust Federal Securities"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>1883263</code>
             
                
             </td> 
             <td>Federal securities related to insurance trust.</td> </tr>
        
        <tr> <td><code>"Insurance Trust Other Securities"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>6229427</code>
             
                
             </td> 
             <td>Other securities related to insurance trust.</td> </tr>
        
        <tr> <td><code>"Insurance Trust Securities Total"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>8112690</code>
             
                
             </td> 
             <td>Total amount spent on securities for insurance trust.</td> </tr>
        
        <tr> <td><code>"Insurance Trust State and Local Securities Total"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>0</code>
             
                
             </td> 
             <td>Total amount spent on state and local securities for insurance trust.</td> </tr>
        
        <tr> <td><code>"Insurance Trust Total Expenditure"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>1122612</code>
             
                
             </td> 
             <td>Cash payments to beneficiaries (including withdrawals of retirement contributions) of employee retirement, unemployment compensation, workers' compensation, and disability benefit social insurance programs. Excludes cost of administering insurance trust activities, state contributions of programs administered by the state or by the federal government, intergovernmental expenditure for support of locally administered employee-retirement systems, and noncontributory gratuities paid to former employees.</td> </tr>
        
    </table>
</div>

    

    

    

    

    

    

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Details-Insurance-Trust" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Details-Insurance-Trust-Insurance-Trust").click(function() {
        $( "#explore-Details-Insurance-Trust-Insurance-Trust" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Details-Insurance-Trust-Insurance-Trust-Cash-and-Deposits").click(function() {
        $( "#explore-Details-Insurance-Trust-Insurance-Trust-Cash-and-Deposits" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Details-Insurance-Trust-Insurance-Trust-Cash-and-Securities").click(function() {
        $( "#explore-Details-Insurance-Trust-Insurance-Trust-Cash-and-Securities" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Details-Insurance-Trust-Insurance-Trust-Federal-Agency-Securities").click(function() {
        $( "#explore-Details-Insurance-Trust-Insurance-Trust-Federal-Agency-Securities" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Details-Insurance-Trust-Insurance-Trust-Federal-Securities").click(function() {
        $( "#explore-Details-Insurance-Trust-Insurance-Trust-Federal-Securities" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Details-Insurance-Trust-Insurance-Trust-Other-Securities").click(function() {
        $( "#explore-Details-Insurance-Trust-Insurance-Trust-Other-Securities" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Details-Insurance-Trust-Insurance-Trust-Securities-Total").click(function() {
        $( "#explore-Details-Insurance-Trust-Insurance-Trust-Securities-Total" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Details-Insurance-Trust-Insurance-Trust-State-and-Local-Securities-Total").click(function() {
        $( "#explore-Details-Insurance-Trust-Insurance-Trust-State-and-Local-Securities-Total" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Details-Insurance-Trust-Insurance-Trust-Total-Expenditure").click(function() {
        $( "#explore-Details-Insurance-Trust-Insurance-Trust-Total-Expenditure" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Details-Intergovernmental' title='Dictionary (10 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Intergovernmental Expenditure"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>2536908</code>
             
                
             </td> 
             <td>Money paid overall.</td> </tr>
        
        <tr> <td><code>"Intergovernmental to Combined and Unallocable"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>75015</code>
             
                
             </td> 
             <td>Other kinds of money.</td> </tr>
        
        <tr> <td><code>"Intergovernmental to Counties"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>377518</code>
             
                
             </td> 
             <td>Money paid to counties.</td> </tr>
        
        <tr> <td><code>"Intergovernmental to Federal"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>41125</code>
             
                
             </td> 
             <td>Money paid to federal governments.</td> </tr>
        
        <tr> <td><code>"Intergovernmental to Local"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>2495783</code>
             
                
             </td> 
             <td>Money paid to local governments.</td> </tr>
        
        <tr> <td><code>"Intergovernmental to Municipalities"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>0</code>
             
                
             </td> 
             <td>Money paid to municipalities.</td> </tr>
        
        <tr> <td><code>"Intergovernmental to School Districts"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>2037931</code>
             
                
             </td> 
             <td>Money paid to school districts.</td> </tr>
        
        <tr> <td><code>"Intergovernmental to Special Districts"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>5319</code>
             
                
             </td> 
             <td>Money paid to special districts.</td> </tr>
        
        <tr> <td><code>"Intergovernmental to State"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>0</code>
             
                
             </td> 
             <td>Money paid to states.</td> </tr>
        
        <tr> <td><code>"Intergovernmental to Townships"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>0</code>
             
                
             </td> 
             <td>Money paid to townships.</td> </tr>
        
    </table>
</div>

    

    

    

    

    

    

    

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Details-Intergovernmental" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Details-Intergovernmental-Intergovernmental-Expenditure").click(function() {
        $( "#explore-Details-Intergovernmental-Intergovernmental-Expenditure" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Details-Intergovernmental-Intergovernmental-to-Combined-and-Unallocable").click(function() {
        $( "#explore-Details-Intergovernmental-Intergovernmental-to-Combined-and-Unallocable" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Details-Intergovernmental-Intergovernmental-to-Counties").click(function() {
        $( "#explore-Details-Intergovernmental-Intergovernmental-to-Counties" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Details-Intergovernmental-Intergovernmental-to-Federal").click(function() {
        $( "#explore-Details-Intergovernmental-Intergovernmental-to-Federal" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Details-Intergovernmental-Intergovernmental-to-Local").click(function() {
        $( "#explore-Details-Intergovernmental-Intergovernmental-to-Local" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Details-Intergovernmental-Intergovernmental-to-Municipalities").click(function() {
        $( "#explore-Details-Intergovernmental-Intergovernmental-to-Municipalities" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Details-Intergovernmental-Intergovernmental-to-School-Districts").click(function() {
        $( "#explore-Details-Intergovernmental-Intergovernmental-to-School-Districts" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Details-Intergovernmental-Intergovernmental-to-Special-Districts").click(function() {
        $( "#explore-Details-Intergovernmental-Intergovernmental-to-Special-Districts" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Details-Intergovernmental-Intergovernmental-to-State").click(function() {
        $( "#explore-Details-Intergovernmental-Intergovernmental-to-State" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Details-Intergovernmental-Intergovernmental-to-Townships").click(function() {
        $( "#explore-Details-Intergovernmental-Intergovernmental-to-Townships" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Details-Natural-Resources' title='Dictionary (10 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Natural Resources Construction"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>2393</code>
             
                
             </td> 
             <td>Total amount spent on construction for the support of natural resources.</td> </tr>
        
        <tr> <td><code>"Natural Resources Direct"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>121578</code>
             
                
             </td> 
             <td>Payments to employees, suppliers, contractors, beneficiaries, and other final recipients of government payments (i.e., all expenditure other than Intergovernmental expenditure) for conservation, promotion, and development of natural resources, such as soil, water, forests, minerals, and wildlife. Includes irrigation, drainage, flood control, forestry and fire protection, soil reclamation, soil and water conservation, fish and game programs, and agricultural fairs.</td> </tr>
        
        <tr> <td><code>"Natural Resources Equipment and Land"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>9543</code>
             
                
             </td> 
             <td>Total amount spent on equipment and land to support natural resources.</td> </tr>
        
        <tr> <td><code>"Natural Resources Intergovernmental"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>11113</code>
             
                
             </td> 
             <td>Money paid to other governments for the conservation, promotion, and development of natural resources, such as soil, water, forests, minerals, and wildlife. Includes irrigation, drainage, flood control, forestry and fire protection, soil reclamation, soil and water conservation, fish and game programs, and agricultural fairs.</td> </tr>
        
        <tr> <td><code>"Natural Resources NEC Total Expenditure"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>35596</code>
             
                
             </td> 
             <td>Total amount spent (Not elsewhere classified) on the conservation, promotion, and development of natural resources, such as soil, water, forests, minerals, and wildlife. Includes irrigation, drainage, flood control, forestry and fire protection, soil reclamation, soil and water conservation, fish and game programs, and agricultural fairs.</td> </tr>
        
        <tr> <td><code>"Natural Resources Total"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>132691</code>
             
                
             </td> 
             <td>Total amount spent on conservation, promotion, and development of natural resources, such as soil, water, forests, minerals, and wildlife. Includes irrigation, drainage, flood control, forestry and fire protection, soil reclamation, soil and water conservation, fish and game programs, and agricultural fairs.</td> </tr>
        
        <tr> <td><code>"Details.Natural Resources.Agriculture"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Details-Natural-Resources-Agriculture'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Details.Natural Resources.Fish and Game"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Details-Natural-Resources-Fish-and-Game'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Details.Natural Resources.Forestry"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Details-Natural-Resources-Forestry'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Details.Natural Resources.Parks"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Details-Natural-Resources-Parks'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
    </table>
</div>

    

    

    

    

    

    

    

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Details-Natural-Resources" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Details-Natural-Resources-Natural-Resources-Construction").click(function() {
        $( "#explore-Details-Natural-Resources-Natural-Resources-Construction" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Details-Natural-Resources-Natural-Resources-Direct").click(function() {
        $( "#explore-Details-Natural-Resources-Natural-Resources-Direct" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Details-Natural-Resources-Natural-Resources-Equipment-and-Land").click(function() {
        $( "#explore-Details-Natural-Resources-Natural-Resources-Equipment-and-Land" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Details-Natural-Resources-Natural-Resources-Intergovernmental").click(function() {
        $( "#explore-Details-Natural-Resources-Natural-Resources-Intergovernmental" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Details-Natural-Resources-Natural-Resources-NEC-Total-Expenditure").click(function() {
        $( "#explore-Details-Natural-Resources-Natural-Resources-NEC-Total-Expenditure" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Details-Natural-Resources-Natural-Resources-Total").click(function() {
        $( "#explore-Details-Natural-Resources-Natural-Resources-Total" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Details-Natural-Resources-Agriculture").click(function() {
        $( "#explore-Details-Natural-Resources-Agriculture" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Details-Natural-Resources-Fish-and-Game").click(function() {
        $( "#explore-Details-Natural-Resources-Fish-and-Game" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Details-Natural-Resources-Forestry").click(function() {
        $( "#explore-Details-Natural-Resources-Forestry" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Details-Natural-Resources-Parks").click(function() {
        $( "#explore-Details-Natural-Resources-Parks" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Details-Public-Welfare' title='Dictionary (7 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Public Welfare Assistance and Subsidies"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>138192</code>
             
                
             </td> 
             <td>Assistance and subsidies related to public welfare.</td> </tr>
        
        <tr> <td><code>"Public Welfare Construction"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>12382</code>
             
                
             </td> 
             <td>Total amount spent on construction for public welfare.</td> </tr>
        
        <tr> <td><code>"Public Welfare Direct Expenditure"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>1610161</code>
             
                
             </td> 
             <td>Payments to employees, suppliers, contractors, beneficiaries, and other final recipients of government payments (i.e., all expenditure other than Intergovernmental expenditure) for public welfare.</td> </tr>
        
        <tr> <td><code>"Public Welfare Equipment and Land"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>9452</code>
             
                
             </td> 
             <td>Total amount spent on equipment and land for public welfare.</td> </tr>
        
        <tr> <td><code>"Public Welfare Intergovernmental"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>48222</code>
             
                
             </td> 
             <td>Money paid to other governments for the public welfare.</td> </tr>
        
        <tr> <td><code>"Public Welfare Other Current Operation"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>1450135</code>
             
                
             </td> 
             <td>Direct expenditure for compensation of own officers and employees and for supplies, materials, and contractual services except amounts for capital outlay related to public welfare.</td> </tr>
        
        <tr> <td><code>"Public Welfare Total Expenditure"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>1658383</code>
             
                
             </td> 
             <td>Total amount spent on support of and assistance to needy persons contingent upon their need. Excludes pensions to former employees and other benefits not contingent on need. Expenditures under this heading include: Cash assistance paid directly to needy persons under the categorical programs (Old Age Assistance, Temporary Assistance for Needy Families (TANF) and under any other welfare programs; Vendor payments made directly to private purveyors for medical care, burials, and other commodities and services provided under welfare programs; and provision and operation by the government of welfare institutions. Other public welfare includes payments to other governments for welfare purposes, amounts for administration, support of private welfare agencies, and other public welfare services. Health and hospital services provided directly by the government through its own hospitals and health agencies, and any payments to other governments for such purposes are classed under those functional headings rather than here.</td> </tr>
        
    </table>
</div>

    

    

    

    

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Details-Public-Welfare" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Details-Public-Welfare-Public-Welfare-Assistance-and-Subsidies").click(function() {
        $( "#explore-Details-Public-Welfare-Public-Welfare-Assistance-and-Subsidies" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Details-Public-Welfare-Public-Welfare-Construction").click(function() {
        $( "#explore-Details-Public-Welfare-Public-Welfare-Construction" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Details-Public-Welfare-Public-Welfare-Direct-Expenditure").click(function() {
        $( "#explore-Details-Public-Welfare-Public-Welfare-Direct-Expenditure" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Details-Public-Welfare-Public-Welfare-Equipment-and-Land").click(function() {
        $( "#explore-Details-Public-Welfare-Public-Welfare-Equipment-and-Land" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Details-Public-Welfare-Public-Welfare-Intergovernmental").click(function() {
        $( "#explore-Details-Public-Welfare-Public-Welfare-Intergovernmental" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Details-Public-Welfare-Public-Welfare-Other-Current-Operation").click(function() {
        $( "#explore-Details-Public-Welfare-Public-Welfare-Other-Current-Operation" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Details-Public-Welfare-Public-Welfare-Total-Expenditure").click(function() {
        $( "#explore-Details-Public-Welfare-Public-Welfare-Total-Expenditure" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Details-Transportation' title='Dictionary (6 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Transit Subsidy Intergovernmental"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>0</code>
             
                
             </td> 
             <td>Money paid to other governments in support of subway, bus, surface rail and street railroad, and other passenger transportation systems., including public support of a private utility or railroad and intergovernmental subsidy payments. Excludes amounts paid by a parent government to its dependent transit utility.</td> </tr>
        
        <tr> <td><code>"Transit Subsidy Total Expenditure"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>0</code>
             
                
             </td> 
             <td>Total amount spent in support of subway, bus, surface rail and street railroad, and other passenger transportation systems., including public support of a private utility or railroad and intergovernmental subsidy payments. Excludes amounts paid by a parent government to its dependent transit utility.</td> </tr>
        
        <tr> <td><code>"Details.Transportation.Airports"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Details-Transportation-Airports'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Details.Transportation.Highways"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Details-Transportation-Highways'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Details.Transportation.Parking"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Details-Transportation-Parking'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Details.Transportation.Water Transport"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Details-Transportation-Water-Transport'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
    </table>
</div>

    

    

    

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Details-Transportation" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Details-Transportation-Transit-Subsidy-Intergovernmental").click(function() {
        $( "#explore-Details-Transportation-Transit-Subsidy-Intergovernmental" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Details-Transportation-Transit-Subsidy-Total-Expenditure").click(function() {
        $( "#explore-Details-Transportation-Transit-Subsidy-Total-Expenditure" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Details-Transportation-Airports").click(function() {
        $( "#explore-Details-Transportation-Airports" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Details-Transportation-Highways").click(function() {
        $( "#explore-Details-Transportation-Highways" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Details-Transportation-Parking").click(function() {
        $( "#explore-Details-Transportation-Parking" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Details-Transportation-Water-Transport").click(function() {
        $( "#explore-Details-Transportation-Water-Transport" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Details-Utilities' title='Dictionary (9 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Electric Utility Total Expenditure"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>142535</code>
             
                
             </td> 
             <td>Total amount spent on operation and maintenance of electric power system including production or acquisition and distribution of electric power.</td> </tr>
        
        <tr> <td><code>"Gas Utility Total Expenditure"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>4553</code>
             
                
             </td> 
             <td>Total amount spent on the operation and maintenance of gas supply systems including acquisition and distribution of natural gas.</td> </tr>
        
        <tr> <td><code>"Transit Utility Total Expenditure"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>0</code>
             
                
             </td> 
             <td>Total amount spent on the construction, maintenance, and operation of public mass transit systems--bus, commuter rail, light rail, or subway systems. Excludes systems established solely to transport elementary and secondary school pupils. Ferry systems are classified under Highways.</td> </tr>
        
        <tr> <td><code>"Utilities Construction"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>10652</code>
             
                
             </td> 
             <td>Total amount spent on construction for utilities.</td> </tr>
        
        <tr> <td><code>"Utilities Current Operation"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>138479</code>
             
                
             </td> 
             <td>Amount spent on current operation of government owned and operated water supply, electric light and power, gas supply, or transit system. Government revenue, expenditure, and debt relating to utility facilities leased to other governments or persons, and other commercial type activities of governments, such as port facilities, airports, housing projects, radio stations, steam plants, ferries, abattoirs, etc., are classified as general government activities.</td> </tr>
        
        <tr> <td><code>"Utilities Equipment and Land"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>374</code>
             
                
             </td> 
             <td>Total amount spent on equipment and land in support of utilities.</td> </tr>
        
        <tr> <td><code>"Utilities Interest Total"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>0</code>
             
                
             </td> 
             <td>Interest earned on various utilities.</td> </tr>
        
        <tr> <td><code>"Utilities Total Expenditure"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>149505</code>
             
                
             </td> 
             <td>Total amount spent on government owned and operated water supply, electric light and power, gas supply, or transit system. Government revenue, expenditure, and debt relating to utility facilities leased to other governments or persons, and other commercial type activities of governments, such as port facilities, airports, housing projects, radio stations, steam plants, ferries, abattoirs, etc., are classified as general government activities.</td> </tr>
        
        <tr> <td><code>"Water Utility Total Expenditure"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>2417</code>
             
                
             </td> 
             <td>Total amount spent on operation and maintenance of water supply system including acquisition and distribution of water to the general public or to other local governments for domestic or industrial use. Acquisition and distribution of water for irrigation of agricultural lands are classified under Natural resources.</td> </tr>
        
    </table>
</div>

    

    

    

    

    

    

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Details-Utilities" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Details-Utilities-Electric-Utility-Total-Expenditure").click(function() {
        $( "#explore-Details-Utilities-Electric-Utility-Total-Expenditure" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Details-Utilities-Gas-Utility-Total-Expenditure").click(function() {
        $( "#explore-Details-Utilities-Gas-Utility-Total-Expenditure" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Details-Utilities-Transit-Utility-Total-Expenditure").click(function() {
        $( "#explore-Details-Utilities-Transit-Utility-Total-Expenditure" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Details-Utilities-Utilities-Construction").click(function() {
        $( "#explore-Details-Utilities-Utilities-Construction" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Details-Utilities-Utilities-Current-Operation").click(function() {
        $( "#explore-Details-Utilities-Utilities-Current-Operation" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Details-Utilities-Utilities-Equipment-and-Land").click(function() {
        $( "#explore-Details-Utilities-Utilities-Equipment-and-Land" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Details-Utilities-Utilities-Interest-Total").click(function() {
        $( "#explore-Details-Utilities-Utilities-Interest-Total" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Details-Utilities-Utilities-Total-Expenditure").click(function() {
        $( "#explore-Details-Utilities-Utilities-Total-Expenditure" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Details-Utilities-Water-Utility-Total-Expenditure").click(function() {
        $( "#explore-Details-Utilities-Water-Utility-Total-Expenditure" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Details-Waste' title='Dictionary (4 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Sewerage Intergovernmental"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>23940</code>
             
                
             </td> 
             <td>Money paid to other governments for the provision of sanitary and storm sewers and sewage disposal facilities and services, and payments to other governments for such purposes.</td> </tr>
        
        <tr> <td><code>"Sewerage Total Expenditure"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>24316</code>
             
                
             </td> 
             <td>Total amount spent on the provision of sanitary and storm sewers and sewage disposal facilities and services, and payments to other governments for such purposes.</td> </tr>
        
        <tr> <td><code>"Solid Waste Management Intergovernmental"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>169</code>
             
                
             </td> 
             <td>Money paid to other governments for street cleaning, solid waste collection and disposal, and provision of sanitary landfills.</td> </tr>
        
        <tr> <td><code>"Solid Waste Management Total Expenditure"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>3937</code>
             
                
             </td> 
             <td>Total amount spent on the provision of sanitary and storm sewers and sewage disposal facilities and services, and payments to other governments for such purposes.</td> </tr>
        
    </table>
</div>

    

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Details-Waste" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Details-Waste-Sewerage-Intergovernmental").click(function() {
        $( "#explore-Details-Waste-Sewerage-Intergovernmental" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Details-Waste-Sewerage-Total-Expenditure").click(function() {
        $( "#explore-Details-Waste-Sewerage-Total-Expenditure" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Details-Waste-Solid-Waste-Management-Intergovernmental").click(function() {
        $( "#explore-Details-Waste-Solid-Waste-Management-Intergovernmental" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Details-Waste-Solid-Waste-Management-Total-Expenditure").click(function() {
        $( "#explore-Details-Waste-Solid-Waste-Management-Total-Expenditure" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Details-Welfare' title='Dictionary (4 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Welfare Institution Total Expenditure"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>45510</code>
             
                
             </td> 
             <td>Total amount spent on welfare institutions.</td> </tr>
        
        <tr> <td><code>"Welfare NEC Intergovernmental"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>7180</code>
             
                
             </td> 
             <td>Money paid to other governments for welfare not elsewhere classified.</td> </tr>
        
        <tr> <td><code>"Welfare NEC Total Expenditure"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>317854</code>
             
                
             </td> 
             <td>Total amount spent on welfare (not elsewhere classified).</td> </tr>
        
        <tr> <td><code>"Welfare Vendor Payments Total"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>1115785</code>
             
                
             </td> 
             <td>Total amount spent on welfare vendor payments.</td> </tr>
        
    </table>
</div>

    

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Details-Welfare" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Details-Welfare-Welfare-Institution-Total-Expenditure").click(function() {
        $( "#explore-Details-Welfare-Welfare-Institution-Total-Expenditure" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Details-Welfare-Welfare-NEC-Intergovernmental").click(function() {
        $( "#explore-Details-Welfare-Welfare-NEC-Intergovernmental" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Details-Welfare-Welfare-NEC-Total-Expenditure").click(function() {
        $( "#explore-Details-Welfare-Welfare-NEC-Total-Expenditure" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Details-Welfare-Welfare-Vendor-Payments-Total").click(function() {
        $( "#explore-Details-Welfare-Welfare-Vendor-Payments-Total" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Details-Health-Hospitals' title='Dictionary (8 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Hospital-Other Intergovernmental"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>655</code>
             
                
             </td> 
             <td>Money paid to other governments for non-Owned hospitals. These hospitals refer to support for hospital services in private hospitals or other governments.</td> </tr>
        
        <tr> <td><code>"Hospital-Other Total Expenditure"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>655</code>
             
                
             </td> 
             <td>Total amount spent on non-Owned hospitals. These hospitals refer to support for hospital services in private hospitals or other governments.</td> </tr>
        
        <tr> <td><code>"Hospitals Total Construction"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>1233</code>
             
                
             </td> 
             <td>Total amount spent on construction for hospitals.</td> </tr>
        
        <tr> <td><code>"Hospitals Total Current"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>275737</code>
             
                
             </td> 
             <td>Direct expenditure for compensation of own officers and employees and for supplies, materials, and contractual services except amounts for capital outlay related to hospitals.</td> </tr>
        
        <tr> <td><code>"Hospitals Total Equipment and land"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>5502</code>
             
                
             </td> 
             <td>Total amount spent on equipment and land related to hospitals.</td> </tr>
        
        <tr> <td><code>"Hospitals Total Expenditure"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>283127</code>
             
                
             </td> 
             <td>Total amount spent on financing, construction acquisition, maintenance or operation of hospital facilities, provision of hospital care, and support of public or private hospitals.</td> </tr>
        
        <tr> <td><code>"Hospitals Total Intergovernmental"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>655</code>
             
                
             </td> 
             <td>Money paid to other governments for the financing, construction acquisition, maintenance or operation of hospital facilities, provision of hospital care, and support of public or private hospitals.</td> </tr>
        
        <tr> <td><code>"Own Hospitals Total Expenditure"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>282472</code>
             
                
             </td> 
             <td>Total amount spent on own hospitals. Own hospitals are facilities administered directly by the government concerned.</td> </tr>
        
    </table>
</div>

    

    

    

    

    

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Details-Health-Hospitals" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Details-Health-Hospitals-Hospital-Other-Intergovernmental").click(function() {
        $( "#explore-Details-Health-Hospitals-Hospital-Other-Intergovernmental" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Details-Health-Hospitals-Hospital-Other-Total-Expenditure").click(function() {
        $( "#explore-Details-Health-Hospitals-Hospital-Other-Total-Expenditure" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Details-Health-Hospitals-Hospitals-Total-Construction").click(function() {
        $( "#explore-Details-Health-Hospitals-Hospitals-Total-Construction" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Details-Health-Hospitals-Hospitals-Total-Current").click(function() {
        $( "#explore-Details-Health-Hospitals-Hospitals-Total-Current" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Details-Health-Hospitals-Hospitals-Total-Equipment-and-land").click(function() {
        $( "#explore-Details-Health-Hospitals-Hospitals-Total-Equipment-and-land" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Details-Health-Hospitals-Hospitals-Total-Expenditure").click(function() {
        $( "#explore-Details-Health-Hospitals-Hospitals-Total-Expenditure" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Details-Health-Hospitals-Hospitals-Total-Intergovernmental").click(function() {
        $( "#explore-Details-Health-Hospitals-Hospitals-Total-Intergovernmental" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Details-Health-Hospitals-Own-Hospitals-Total-Expenditure").click(function() {
        $( "#explore-Details-Health-Hospitals-Own-Hospitals-Total-Expenditure" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Details-Natural-Resources-Agriculture' title='Dictionary (6 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Agriculture Intergovernmental"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>273</code>
             
                
             </td> 
             <td>Money paid to other governments for the support of agriculture.</td> </tr>
        
        <tr> <td><code>"Agriculture Total Expenditure"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>67855</code>
             
                
             </td> 
             <td>Total amount spent on the support of agriculture.</td> </tr>
        
        <tr> <td><code>"Federal Agriculture Farm Income Intergovernmental"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>0</code>
             
                
             </td> 
             <td>Money paid to other governments for the federal agriculture farm income.</td> </tr>
        
        <tr> <td><code>"Federal Agriculture Farm Income Total"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>0</code>
             
                
             </td> 
             <td>Total amount spent on the federal agriculture farm income.</td> </tr>
        
        <tr> <td><code>"Federal Farm Credit Intergovernmental"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>0</code>
             
                
             </td> 
             <td>Total amount spent on federal farm credit.</td> </tr>
        
        <tr> <td><code>"Federal Farm Credit Total"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>0</code>
             
                
             </td> 
             <td>Total amount spent on federal farm credit.</td> </tr>
        
    </table>
</div>

    

    

    

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Details-Natural-Resources-Agriculture" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Details-Natural-Resources-Agriculture-Agriculture-Intergovernmental").click(function() {
        $( "#explore-Details-Natural-Resources-Agriculture-Agriculture-Intergovernmental" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Details-Natural-Resources-Agriculture-Agriculture-Total-Expenditure").click(function() {
        $( "#explore-Details-Natural-Resources-Agriculture-Agriculture-Total-Expenditure" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Details-Natural-Resources-Agriculture-Federal-Agriculture-Farm-Income-Intergovernmental").click(function() {
        $( "#explore-Details-Natural-Resources-Agriculture-Federal-Agriculture-Farm-Income-Intergovernmental" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Details-Natural-Resources-Agriculture-Federal-Agriculture-Farm-Income-Total").click(function() {
        $( "#explore-Details-Natural-Resources-Agriculture-Federal-Agriculture-Farm-Income-Total" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Details-Natural-Resources-Agriculture-Federal-Farm-Credit-Intergovernmental").click(function() {
        $( "#explore-Details-Natural-Resources-Agriculture-Federal-Farm-Credit-Intergovernmental" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Details-Natural-Resources-Agriculture-Federal-Farm-Credit-Total").click(function() {
        $( "#explore-Details-Natural-Resources-Agriculture-Federal-Farm-Credit-Total" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Details-Natural-Resources-Fish-and-Game' title='Dictionary (2 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Fish and Game Intergovernmental"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>331</code>
             
                
             </td> 
             <td>Money paid to other governments for the conservation, promotion, and development of fish and game.</td> </tr>
        
        <tr> <td><code>"Fish and Game Total Expenditure"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>23231</code>
             
                
             </td> 
             <td>Total amount spent on conservation, promotion, and development of fish and game.</td> </tr>
        
    </table>
</div>

    

    

<script>
$(document).ready(function() {
    $( "#explore-Details-Natural-Resources-Fish-and-Game" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Details-Natural-Resources-Fish-and-Game-Fish-and-Game-Intergovernmental").click(function() {
        $( "#explore-Details-Natural-Resources-Fish-and-Game-Fish-and-Game-Intergovernmental" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Details-Natural-Resources-Fish-and-Game-Fish-and-Game-Total-Expenditure").click(function() {
        $( "#explore-Details-Natural-Resources-Fish-and-Game-Fish-and-Game-Total-Expenditure" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Details-Natural-Resources-Forestry' title='Dictionary (2 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Forestry Intergovernmental"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>3687</code>
             
                
             </td> 
             <td>Money paid to other governments for the support of forestry.</td> </tr>
        
        <tr> <td><code>"Forestry Total Expenditure"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>6009</code>
             
                
             </td> 
             <td>Total amount spent on the support of foresty.</td> </tr>
        
    </table>
</div>

    

    

<script>
$(document).ready(function() {
    $( "#explore-Details-Natural-Resources-Forestry" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Details-Natural-Resources-Forestry-Forestry-Intergovernmental").click(function() {
        $( "#explore-Details-Natural-Resources-Forestry-Forestry-Intergovernmental" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Details-Natural-Resources-Forestry-Forestry-Total-Expenditure").click(function() {
        $( "#explore-Details-Natural-Resources-Forestry-Forestry-Total-Expenditure" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Details-Natural-Resources-Parks' title='Dictionary (2 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Parks Intergovernmental"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>4057</code>
             
                
             </td> 
             <td>Money paid to other governments for the provision and support of recreational and cultural-scientific facilities and activities including golf courses, play fields, playgrounds, public beaches, swimming pools, tennis courts, parks, auditoriums, stadiums, auto camps, recreation piers, marinas, botanical gardens, galleries, museums, and zoos. Also includes building and operation of convention centers and exhibition halls. Public libraries are included under Libraries.</td> </tr>
        
        <tr> <td><code>"Parks Total Expenditure"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>49855</code>
             
                
             </td> 
             <td>Total amount spent on provision and support of recreational and cultural-scientific facilities and activities including golf courses, play fields, playgrounds, public beaches, swimming pools, tennis courts, parks, auditoriums, stadiums, auto camps, recreation piers, marinas, botanical gardens, galleries, museums, and zoos. Also includes building and operation of convention centers and exhibition halls. Public libraries are included under Libraries.</td> </tr>
        
    </table>
</div>

    

    

<script>
$(document).ready(function() {
    $( "#explore-Details-Natural-Resources-Parks" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Details-Natural-Resources-Parks-Parks-Intergovernmental").click(function() {
        $( "#explore-Details-Natural-Resources-Parks-Parks-Intergovernmental" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Details-Natural-Resources-Parks-Parks-Total-Expenditure").click(function() {
        $( "#explore-Details-Natural-Resources-Parks-Parks-Total-Expenditure" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Details-Transportation-Airports' title='Dictionary (2 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Airports Intergovernmental"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>2311</code>
             
                
             </td> 
             <td>Money paid to other governments for the support of airports.</td> </tr>
        
        <tr> <td><code>"Airports Total Expenditure"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>2469</code>
             
                
             </td> 
             <td>Total amount spent on support for airports.</td> </tr>
        
    </table>
</div>

    

    

<script>
$(document).ready(function() {
    $( "#explore-Details-Transportation-Airports" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Details-Transportation-Airports-Airports-Intergovernmental").click(function() {
        $( "#explore-Details-Transportation-Airports-Airports-Intergovernmental" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Details-Transportation-Airports-Airports-Total-Expenditure").click(function() {
        $( "#explore-Details-Transportation-Airports-Airports-Total-Expenditure" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Details-Transportation-Highways' title='Dictionary (8 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Highways Construction Total"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>408413</code>
             
                
             </td> 
             <td>Total amount spent on highway construction.</td> </tr>
        
        <tr> <td><code>"Highways Direct"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>618099</code>
             
                
             </td> 
             <td>Payments to employees, suppliers, contractors, beneficiaries, and other final recipients of government payments (i.e., all expenditure other than Intergovernmental expenditure) for the support of construction, maintenance, and operation of highways, streets, and related structures, including toll highways, bridges, tunnels, ferries, street lighting and snow and ice removal. However, highway policing and traffic control are classed under Police protection.</td> </tr>
        
        <tr> <td><code>"Highways Intergovernmental"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>213859</code>
             
                
             </td> 
             <td>Money paid to other governments for the support of construction, maintenance, and operation of highways, streets, and related structures, including toll highways, bridges, tunnels, ferries, street lighting and snow and ice removal. However, highway policing and traffic control are classed under Police protection.</td> </tr>
        
        <tr> <td><code>"Highways Land and Equipment"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>50890</code>
             
                
             </td> 
             <td>Total amount spent on highways land and equipment.</td> </tr>
        
        <tr> <td><code>"Highways Total Expenditure"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>831958</code>
             
                
             </td> 
             <td>Total amount spent on the support of construction, maintenance, and operation of highways, streets, and related structures, including toll highways, bridges, tunnels, ferries, street lighting and snow and ice removal. However, highway policing and traffic control are classed under Police protection.</td> </tr>
        
        <tr> <td><code>"Regular Highways Intergovernmental"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>213859</code>
             
                
             </td> 
             <td>Money paid to other governments for the construction, maintenance, and operation of highways, streets, and related structures, including toll highways, bridges, tunnels, ferries, street lighting and snow and ice removal. However, highway policing and traffic control are classed under Police protection.</td> </tr>
        
        <tr> <td><code>"Regular Highways Total Expenditure"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>749683</code>
             
                
             </td> 
             <td>Total amount spent on regular highways.</td> </tr>
        
        <tr> <td><code>"Toll Highways Total Expenditure"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>82275</code>
             
                
             </td> 
             <td>Total amount spent on the support of construction, maintenance, and operation toll highways.</td> </tr>
        
    </table>
</div>

    

    

    

    

    

    

    

    

<script>
$(document).ready(function() {
    $( "#explore-Details-Transportation-Highways" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Details-Transportation-Highways-Highways-Construction-Total").click(function() {
        $( "#explore-Details-Transportation-Highways-Highways-Construction-Total" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Details-Transportation-Highways-Highways-Direct").click(function() {
        $( "#explore-Details-Transportation-Highways-Highways-Direct" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Details-Transportation-Highways-Highways-Intergovernmental").click(function() {
        $( "#explore-Details-Transportation-Highways-Highways-Intergovernmental" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Details-Transportation-Highways-Highways-Land-and-Equipment").click(function() {
        $( "#explore-Details-Transportation-Highways-Highways-Land-and-Equipment" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Details-Transportation-Highways-Highways-Total-Expenditure").click(function() {
        $( "#explore-Details-Transportation-Highways-Highways-Total-Expenditure" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Details-Transportation-Highways-Regular-Highways-Intergovernmental").click(function() {
        $( "#explore-Details-Transportation-Highways-Regular-Highways-Intergovernmental" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Details-Transportation-Highways-Regular-Highways-Total-Expenditure").click(function() {
        $( "#explore-Details-Transportation-Highways-Regular-Highways-Total-Expenditure" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Details-Transportation-Highways-Toll-Highways-Total-Expenditure").click(function() {
        $( "#explore-Details-Transportation-Highways-Toll-Highways-Total-Expenditure" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Details-Transportation-Parking' title='Dictionary (2 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Parking Intergovernmental"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>0</code>
             
                
             </td> 
             <td>Money paid to other governments for the construction, purchase, maintenance, and operation of public-use parking lots, garages, parking meters, and other distinctive parking facilities on a commercial basis.</td> </tr>
        
        <tr> <td><code>"Parking Total"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>0</code>
             
                
             </td> 
             <td>Total amount spent on construction, purchase, maintenance, and operation of public-use parking lots, garages, parking meters, and other distinctive parking facilities on a commercial basis.</td> </tr>
        
    </table>
</div>

    

    

<script>
$(document).ready(function() {
    $( "#explore-Details-Transportation-Parking" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Details-Transportation-Parking-Parking-Intergovernmental").click(function() {
        $( "#explore-Details-Transportation-Parking-Parking-Intergovernmental" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Details-Transportation-Parking-Parking-Total").click(function() {
        $( "#explore-Details-Transportation-Parking-Parking-Total" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Details-Transportation-Water-Transport' title='Dictionary (2 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Water Transport Intergovernmental"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>0</code>
             
                
             </td> 
             <td>Money paid to other governments for the construction, maintenance, operation, and support of canals and other waterways, harbors, docks, wharves, and related marine terminal facilities.</td> </tr>
        
        <tr> <td><code>"Water Transport Total Expenditure"</code></td> 
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>10</code>
             
                
             </td> 
             <td>Total amount spent on construction, maintenance, operation, and support of canals and other waterways, harbors, docks, wharves, and related marine terminal facilities.</td> </tr>
        
    </table>
</div>

    

    

<script>
$(document).ready(function() {
    $( "#explore-Details-Transportation-Water-Transport" ).dialog({
      autoOpen: false,
      width: 'auto',
      create: function (event, ui) {
        // Set max-width
        $(this).parent().css("maxWidth", "600px");
      }
    });
    
    $("#btn-explore-Details-Transportation-Water-Transport-Water-Transport-Intergovernmental").click(function() {
        $( "#explore-Details-Transportation-Water-Transport-Water-Transport-Intergovernmental" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Details-Transportation-Water-Transport-Water-Transport-Total-Expenditure").click(function() {
        $( "#explore-Details-Transportation-Water-Transport-Water-Transport-Total-Expenditure" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>


# Downloads

Download all of the following files.

1. <a href='../../datasets/python/finance/finance.py' download>finance.py <span class="fas fa-download"></span></a>
2. <a href='../../datasets/python/finance/finance.data' download>finance.data <span class="fas fa-download"></span></a>

# Usage

```python
import finance
record = finance.get_record()
```

# Documentation

<dl>
    <dt><span>get_record()</span></dt>
    <dd>Returns a list of dictionaries representing record.</dd>
</dl>