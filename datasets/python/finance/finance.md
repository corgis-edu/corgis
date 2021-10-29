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

<span class='text-muted'>By Austin Cory Bart <acbart@vt.edu>, Joung Min Choi <joungmin@vt.edu>, Bo Guan <jasonguan0107@vt.edu></span><br>
<span class='text-muted'>Version 3.0.0, created 10/7/2021</span><br>
<span class='text-muted'>Tags: finance, government, expenditure, charges, money, united states, us</span>

# Overview

The Annual Survey of State Government Finances provides a comprehensive summary of the annual survey findings for state governments, as well as data for individual states. The data contain detail of revenue by source, expenditure by object and function, indebtedness by term, and assets by purpose. This data goes back for almost two decades across every date. (1992 - 2019) 


<https://www.census.gov/programs-surveys/state.html>




# Explore Structure

Each row represents *Government finance report for each state in a given year*.



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
             
                <code>"ALABAMA"</code>
             
                
             </td> 
             <td>The state that this report was made for (full name, not the two letter abbreviation).</td> </tr>
        
        <tr> <td><code>"Year"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>1992</code>
             
                
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

<div id='explore-Totals' title='Dictionary (11 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Capital outlay"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>664748</code>
             
                
             </td> 
             <td>Direct expenditure for contract or force account construction of buildings,grounds, and other improvements, and purchase of equipment, land, and existing structures. Includes amounts for additions, replacements, and major alterations to fixed works and structures. However, expenditure for repairs to such works and structures is classified as current operation expenditure.</td> </tr>
        
        <tr> <td><code>"Revenue"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>10536166</code>
             
                
             </td> 
             <td>All amounts of money received by a government from external sources--net of refunds and other correcting transactions--other than from issuance of debt, liquidation of investments, and as agency and private trust transactions. Note that revenue excludes noncash transactions such as receipt of services, commodities, or other "receipts in kind."</td> </tr>
        
        <tr> <td><code>"Expenditure"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>9650515</code>
             
                
             </td> 
             <td>All amounts of money paid out by a government--net of recoveries and other correcting transactions--other than for retirement of debt, investment in securities, extension of credit, or as agency transactions. Note that expenditure includes only external transactions of a government and excludes non-cash transactions such as the provision of perquisites or other payments in kind.</td> </tr>
        
        <tr> <td><code>"General expenditure"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>8788293</code>
             
                
             </td> 
             <td>Amounts paid to other governments as fiscal aid in the form of shared revenues and grants-in-aid, as reimbursements for performance of general government activities and for specific services for the paying government, or in lieu of taxes. Excludes amounts paid to other governments for purchase of commodities, property, or utility services, any tax imposed and paid as such, and employer contributions for social insurance - e.g., contributions to the Federal Government for Old Age, Survivors', Disability, and Health Insurance for government employees.</td> </tr>
        
        <tr> <td><code>"General revenue"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>8910315</code>
             
                
             </td> 
             <td>All government revenue except Liquor stores revenue, Insurance trust revenue, and Utility revenue. The basis for distinction is not the fund or administrative unit receiving particular amounts, but rather the nature of the revenue sources concerned.</td> </tr>
        
        <tr> <td><code>"Insurance trust  revenue"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>1473217</code>
             
                
             </td> 
             <td>Revenue from contributions required of employers and employees for financing social insurance programs operated by the government (see Insurance trust system, below) and earnings on assets held for such systems. Excludes any contributions by a government - either as employer contributions or for general financial support - to a social insurance system it administers. Note that tax proceeds, donations, and any forms of revenue other than those enumerated above are classified as general revenue, even though such amounts may be received specifically for insurance trust purposes.</td> </tr>
        
        <tr> <td><code>"Intergovernmental"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>2737180</code>
             
                
             </td> 
             <td>Amounts received from other governments as fiscal aid in the form of shared revenues and grants-in -aid, as reimbursements for performance of general government functions and specific services for the paying government (e.g., care of prisoners or contractual research), or in lieu of taxes, Excludes amounts received from other governments for sale of property, commodities, and utility services. All intergovernmental revenue is classified as General revenue.</td> </tr>
        
        <tr> <td><code>"License tax"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>395202</code>
             
                
             </td> 
             <td>Taxes exacted (either for revenue raising or for regulation) as a condition to the exercise of a business or nonbusiness privilege, at a flat rate or measured by such bases as capital stock, capital surplus, number of business units, or capacity. Excludes taxes measured directly by transactions, gross or net income, or value of property except those to which only nominal rates apply. "License" based on these latter measures, other than those at nominal rates, are classified according to the measure concerned. Includes "fees" related to licensing activities - automobile inspection, gasoline and oil inspection, professional examinations and licenses, etc. - as well as license taxes producing substantial revenue.</td> </tr>
        
        <tr> <td><code>"Selective sales tax"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>1103368</code>
             
                
             </td> 
             <td>Sales and gross receipts taxes imposed on sales of particular commodities or services or gross receipts of particular businesses, separately and apart from the application of general sales and gross receipts taxes. Specific selective sales taxes included are alcoholic beverages, amusements, insurance, motor fuels, parimutuels, public utilities, tobacco products, and others.</td> </tr>
        
        <tr> <td><code>"Tax"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>4217916</code>
             
                
             </td> 
             <td>Compulsory contributions exacted by a government for public purposes except employee and employee assessments for retirement and social insurance purposes, which are classified as insurance trust revenue. All tax revenue is classified as general revenue and comprises amounts received (including interest and penalties but excluding protested amounts and refunds) from all taxes imposed by a government. Note that local government tax revenue excludes any amounts from shares of state-imposed and collected taxes, which are classified as Intergovernmental revenue.</td> </tr>
        
        <tr> <td><code>" Debt at end of fiscal year"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>4128724</code>
             
                
             </td> 
             <td>Amount of debt in the 12-month period at the end of which the government or any government agency determines its financial condition and the results of its operations and closes its books</td> </tr>
        
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
        
    
    $("#btn-explore-Totals-Revenue").click(function() {
        $( "#explore-Totals-Revenue" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Totals-Expenditure").click(function() {
        $( "#explore-Totals-Expenditure" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
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
        
    
    $("#btn-explore-Totals-Selective-sales-tax").click(function() {
        $( "#explore-Totals-Selective-sales-tax" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Totals-Tax").click(function() {
        $( "#explore-Totals-Tax" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Totals--Debt-at-end-of-fiscal-year").click(function() {
        $( "#explore-Totals--Debt-at-end-of-fiscal-year" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Details' title='Dictionary (15 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Correction"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Details-Correction'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Education"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Details-Education'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Financial Aid"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Details-Financial-Aid'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Health"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Details-Health'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Intergovernmental"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Details-Intergovernmental'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Natural Resources"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Details-Natural-Resources'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Utilities"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Details-Utilities'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Welfare"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Details-Welfare'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Transportation"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Details-Transportation'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
             </td> 
             <td></td> </tr>
        
        <tr> <td><code>"Insurance benefits and repayments"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>724852</code>
             
                
             </td> 
             <td>Amount of social insurance payments to beneficiaries, employee-retirement annuities and other benefits, and withdrawals of insurance or employee retirement contributions</td> </tr>
        
        <tr> <td><code>"Interest on debt"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>280179</code>
             
                
             </td> 
             <td>Amount of interest from all the debt</td> </tr>
        
        <tr> <td><code>"Interest on general debt"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>280179</code>
             
                
             </td> 
             <td>Amount of interest from all debt other than that identified as having been issued specifically for utility purposes</td> </tr>
        
        <tr> <td><code>"Miscellaneous general revenue"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>607453</code>
             
                
             </td> 
             <td>General revenue other than taxes and intergovernmental revenue</td> </tr>
        
        <tr> <td><code>"Other taxes"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>205227</code>
             
                
             </td> 
             <td>Amount of taxes not listed separately</td> </tr>
        
        <tr> <td><code>"Police protection"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>77789</code>
             
                
             </td> 
             <td>Amounts of money spent on preservation of law and order and traffic safety</td> </tr>
        
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
        
    
    $("#btn-explore-Details-Financial-Aid").click(function() {
        $( "#explore-Details-Financial-Aid" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Details-Health").click(function() {
        $( "#explore-Details-Health" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
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
        
    
    $("#btn-explore-Details-Utilities").click(function() {
        $( "#explore-Details-Utilities" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Details-Welfare").click(function() {
        $( "#explore-Details-Welfare" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Details-Transportation").click(function() {
        $( "#explore-Details-Transportation" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Details-Insurance-benefits-and-repayments").click(function() {
        $( "#explore-Details-Insurance-benefits-and-repayments" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Details-Interest-on-debt").click(function() {
        $( "#explore-Details-Interest-on-debt" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Details-Interest-on-general-debt").click(function() {
        $( "#explore-Details-Interest-on-general-debt" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Details-Miscellaneous-general-revenue").click(function() {
        $( "#explore-Details-Miscellaneous-general-revenue" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Details-Other-taxes").click(function() {
        $( "#explore-Details-Other-taxes" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
    $("#btn-explore-Details-Police-protection").click(function() {
        $( "#explore-Details-Police-protection" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Details-Correction' title='Dictionary (1 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Correction Total"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>182698</code>
             
                
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
    
    $("#btn-explore-Details-Correction-Correction-Total").click(function() {
        $( "#explore-Details-Correction-Correction-Total" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Details-Education' title='Dictionary (1 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Education Total"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>3570524</code>
             
                
             </td> 
             <td>Total amount spent on schools, colleges, and other educational institutions (e.g., for blind, deaf, and other handicapped individuals), and educational programs for adults, veterans, and other special classes. State institutions of higher education includes activities of institutions operated by the state, except that agricultural extension services and experiment stations are classified under Natural resources and hospitals serving the public are classified under Hospitals. Revenue and expenditure for dormitories, cafeterias, athletic events, bookstores, and other auxiliary enterprises financed mainly through charges for services are reported on a gross basis.</td> </tr>
        
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
    
    $("#btn-explore-Details-Education-Education-Total").click(function() {
        $( "#explore-Details-Education-Education-Total" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Details-Financial-Aid' title='Dictionary (2 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Assistance and Subsidies"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>273050</code>
             
                
             </td> 
             <td>Total amount spent on cash contributions and subsidies to persons, not in payments for goods or services or claims against the government. For local governments, this object category comprises only direct cash assistance payments to public welfare recipients. For states, it includes also veterans' bonuses and direct cash grants for tuition, scholarships, and aid to nonpublic education institutions.</td> </tr>
        
        <tr> <td><code>"Cash and Securities Total"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>14594322</code>
             
                
             </td> 
             <td>Total amount spent on cash and deposits and governmental and private securities (bonds, notes, mortgages, corporate stocks, etc., including loans and other credit paper held by state loan and investment funds) except holdings of agency and private trust funds. Includes fund investments in securities issued by government concerned but does not include interfund loans, receivables, and the value of real property and other fixed assets.</td> </tr>
        
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
        
    
    $("#btn-explore-Details-Financial-Aid-Cash-and-Securities-Total").click(function() {
        $( "#explore-Details-Financial-Aid-Cash-and-Securities-Total" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Details-Health' title='Dictionary (1 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Health Total Expenditure"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>394119</code>
             
                
             </td> 
             <td>Total amount spent on outpatient health services, other than hospital care, including: public health administration; research and education; categorical health programs; treatment and immunization clinics; nursing; environmental health activities such as air and water pollution control; ambulance service if provided separately from fire protection services, and other general public health activities such as mosquito abatement. School health services provided by health agencies (rather than school agencies) are included here. Sewage treatment operations are classified under Sewerage.</td> </tr>
        
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
    
    $("#btn-explore-Details-Health-Health-Total-Expenditure").click(function() {
        $( "#explore-Details-Health-Health-Total-Expenditure" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Details-Intergovernmental' title='Dictionary (2 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Intergovernmental Expenditure"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>2143312</code>
             
                
             </td> 
             <td>Money paid overall.</td> </tr>
        
        <tr> <td><code>"Intergovernmental to Combined and Unallocable"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>518611</code>
             
                
             </td> 
             <td>Other kinds of money.</td> </tr>
        
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
        
    
});
</script>

<div id='explore-Details-Natural-Resources' title='Dictionary (2 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Natural Resources Construction"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>151432</code>
             
                
             </td> 
             <td>Total amount spent on construction for the support of natural resources.</td> </tr>
        
        <tr> <td><code>"Parks"</code></td>
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
        
    
    $("#btn-explore-Details-Natural-Resources-Parks").click(function() {
        $( "#explore-Details-Natural-Resources-Parks" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Details-Utilities' title='Dictionary (1 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Utilities Current Operation"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>5564374</code>
             
                
             </td> 
             <td>Amount spent on current operation of government owned and operated water supply, electric light and power, gas supply, or transit system. Government revenue, expenditure, and debt relating to utility facilities leased to other governments or persons, and other commercial type activities of governments, such as port facilities, airports, housing projects, radio stations, steam plants, ferries, abattoirs, etc., are classified as general government activities.</td> </tr>
        
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
    
    $("#btn-explore-Details-Utilities-Utilities-Current-Operation").click(function() {
        $( "#explore-Details-Utilities-Utilities-Current-Operation" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Details-Welfare' title='Dictionary (1 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Welfare Institution Total Expenditure"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>1853436</code>
             
                
             </td> 
             <td>Total amount spent on welfare institutions.</td> </tr>
        
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
        
    
});
</script>

<div id='explore-Details-Natural-Resources-Parks' title='Dictionary (1 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Parks Total Expenditure"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>9728</code>
             
                
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
    
    $("#btn-explore-Details-Natural-Resources-Parks-Parks-Total-Expenditure").click(function() {
        $( "#explore-Details-Natural-Resources-Parks-Parks-Total-Expenditure" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Details-Transportation' title='Dictionary (1 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Highways"</code></td>
             <td><span data-toggle="tooltip"
                       title='Dictionary'>
                       dict</span></td> 
             <td>
             
                <a class='dialog-opener' id='btn-explore-Details-Transportation-Highways'>{ <span class="fas fa-external-link-alt" aria-hidden="true"></span> }</a>
             
                
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
    
    $("#btn-explore-Details-Transportation-Highways").click(function() {
        $( "#explore-Details-Transportation-Highways" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
        $('.ui-dialog :button').blur();
    });
        
    
});
</script>

<div id='explore-Details-Transportation-Highways' title='Dictionary (1 keys)'>
    <table class='table table-sm table-striped table-bordered' >
        <tr> <th>Key</th> <th>Type</th> <th>Example Value</th> <th>Description</th></tr>
        
        <tr> <td><code>"Highways Total Expenditure"</code></td>
             <td><span data-toggle="tooltip"
                       title='Integer (whole number)'>
                       int</span></td> 
             <td>
             
                <code>694874</code>
             
                
             </td> 
             <td>Total amount spent on the support of construction, maintenance, and operation of highways, streets, and related structures, including toll highways, bridges, tunnels, ferries, street lighting and snow and ice removal. However, highway policing and traffic control are classed under Police protection.</td> </tr>
        
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
    
    $("#btn-explore-Details-Transportation-Highways-Highways-Total-Expenditure").click(function() {
        $( "#explore-Details-Transportation-Highways-Highways-Total-Expenditure" ).dialog("open").css({'max-height':"400px", overflow:"auto"});;
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