---
permalink: /blockpy/supreme_court/
style: dataset
---

<img class="img-thumbnail float-right"
     src="/images/datasets/supreme-court-icon.png"
     alt="supreme court icon"
     role="presentation">

# Supreme Court BlockPy Library

<p class='lead'>From the CORGIS Dataset Project</p>

<span class='text-muted'>By Austin Cory Bart <acbart@vt.edu></span><br>
<span class='text-muted'>Version 2.0.0, created 3/27/2016</span><br>
<span class='text-muted'>Tags: us, usa, united states, government, law, legal, court, case, supreme, judge, barrister, lawyer, federal, national</span>

# Overview

<p> The U.S. Supreme Court Database traces its history back about two decades ago, when Harold J. Spaeth asked the National Science Foundation to fund a database that would be so rich in content that multiple users - even those with vastly distinct projects and purposes in mind - could draw on it. Professor Spaeth's goal was at once refreshingly simple and extremely ambitious: to produce a database that would include and classify every single vote by a Supreme Court justice in all argued cases over a five-decade period. After securing the funding, Spaeth collected and coded the data, performed reliability checks, and eventually amassed the Database. In the late 1980s, he made it (and the documentation necessary to use it) publicly available. </p><p> Since then, Professor Spaeth has not only updated it each term; he has also continued to perform reliability analyses, thereby ensuring its integrity with each release, and added new variables. Today's version of the Database houses 247 pieces of information for each case, roughly broken down into six categories: (1) identification variables (e.g., citations and docket numbers); (2) background variables (e.g., how the Court took jurisdiction, origin and source of the case, the reason the Court agreed to decide it); (3) chronological variables (e.g., the date of decision, term of Court, natural court); (4) substantive variables (e.g., legal provisions, issues, direction of decision); (5) outcome variables (e.g., disposition of the case, winning party, formal alteration of precedent, declaration of unconstitutionality); and (6) voting and opinion variables (e.g., how the individual justices voted, their opinions and interagreements). </p><p> Case Centered data provides case level information; i.e., each row in the database corresponds to a dispute. These data do not contain specific justice vote information. </p><p> A tremendously helpful resource for learning more about the dataset is the codebook: <a href='http://supremecourtdatabase.org/documentation.php?s=1'>http://supremecourtdatabase.org/documentation.php?s=1</a>. </p>



<Harold J. Spaeth, Lee Epstein, Andrew D. Martin, Jeffrey A. Segal, Theodore J. Ruger, and Sara C. Benesh. 2016 Supreme Court Database, Version 2015 Release 02. URL: http://Supremecourtdatabase.org>




# Key Descriptions
    
<table class='table table-condensed table-striped table-bordered table-hover'>
<tr>
    <th class=''>Key</th>
    <th class=''>List of...</th>
    <th class=''>Comment</th>
    <th class=''>Example Value</th>
</tr>

<tr>
    <td>3 judge dc?</td>
    <td>Boolean</td> 
    <td>$MISSING_FIELD</td>
    <td><code>True</code></td>
</tr>

<tr>
    <td>docket</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>24</code></td>
</tr>

<tr>
    <td>name</td>
    <td>String</td> 
    <td>$MISSING_FIELD</td>
    <td><code>"HALLIBURTON OIL WELL CEMENTING CO. v. WALKER et al., DOING BUSINESS AS DEPTHOGRAPH CO."</code></td>
</tr>

<tr>
    <td>citation.led</td>
    <td>String</td> 
    <td>$MISSING_FIELD</td>
    <td><code>"91 L. Ed. 3"</code></td>
</tr>

<tr>
    <td>citation.lexis</td>
    <td>String</td> 
    <td>$MISSING_FIELD</td>
    <td><code>"1946 U.S. LEXIS 1724"</code></td>
</tr>

<tr>
    <td>citation.sct</td>
    <td>String</td> 
    <td>$MISSING_FIELD</td>
    <td><code>"67 S. Ct. 6"</code></td>
</tr>

<tr>
    <td>citation.us</td>
    <td>String</td> 
    <td>$MISSING_FIELD</td>
    <td><code>"329 U.S. 1"</code></td>
</tr>

<tr>
    <td>decision.authority 1</td>
    <td>String</td> 
    <td>$MISSING_FIELD</td>
    <td><code>"statutory construction"</code></td>
</tr>

<tr>
    <td>decision.authority 2</td>
    <td>String</td> 
    <td>$MISSING_FIELD</td>
    <td><code>""</code></td>
</tr>

<tr>
    <td>decision.direction</td>
    <td>String</td> 
    <td>$MISSING_FIELD</td>
    <td><code>"liberal"</code></td>
</tr>

<tr>
    <td>decision.dissent agrees</td>
    <td>Boolean</td> 
    <td>$MISSING_FIELD</td>
    <td><code>True</code></td>
</tr>

<tr>
    <td>decision.jurisdiction</td>
    <td>String</td> 
    <td>$MISSING_FIELD</td>
    <td><code>"rehearing or reargument"</code></td>
</tr>

<tr>
    <td>decision.precedent altered?</td>
    <td>Boolean</td> 
    <td>$MISSING_FIELD</td>
    <td><code>True</code></td>
</tr>

<tr>
    <td>decision.term</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>1946</code></td>
</tr>

<tr>
    <td>decision.type</td>
    <td>String</td> 
    <td>$MISSING_FIELD</td>
    <td><code>"court opinion"</code></td>
</tr>

<tr>
    <td>decision.unconstitutional</td>
    <td>String</td> 
    <td>$MISSING_FIELD</td>
    <td><code>"no unconstitutionality"</code></td>
</tr>

<tr>
    <td>decision.winning party</td>
    <td>String</td> 
    <td>$MISSING_FIELD</td>
    <td><code>"favorable disposition for petitioning party"</code></td>
</tr>

<tr>
    <td>id.case</td>
    <td>String</td> 
    <td>$MISSING_FIELD</td>
    <td><code>"1946-001"</code></td>
</tr>

<tr>
    <td>id.case issues</td>
    <td>String</td> 
    <td>$MISSING_FIELD</td>
    <td><code>"1946-001-01-01"</code></td>
</tr>

<tr>
    <td>id.docket</td>
    <td>String</td> 
    <td>$MISSING_FIELD</td>
    <td><code>"1946-001-01"</code></td>
</tr>

<tr>
    <td>id.vote</td>
    <td>String</td> 
    <td>$MISSING_FIELD</td>
    <td><code>"1946-001-01-01-01"</code></td>
</tr>

<tr>
    <td>issue.area</td>
    <td>String</td> 
    <td>$MISSING_FIELD</td>
    <td><code>"Economic Activity"</code></td>
</tr>

<tr>
    <td>issue.id</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>80180</code></td>
</tr>

<tr>
    <td>issue.text</td>
    <td>String</td> 
    <td>$MISSING_FIELD</td>
    <td><code>"patents and copyrights: patent"</code></td>
</tr>

<tr>
    <td>laws.id</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>6</code></td>
</tr>

<tr>
    <td>laws.type</td>
    <td>String</td> 
    <td>$MISSING_FIELD</td>
    <td><code>"Infrequently litigated statutes"</code></td>
</tr>

<tr>
    <td>lower court.direction</td>
    <td>String</td> 
    <td>$MISSING_FIELD</td>
    <td><code>"conservative"</code></td>
</tr>

<tr>
    <td>lower court.disagreement?</td>
    <td>Boolean</td> 
    <td>$MISSING_FIELD</td>
    <td><code>True</code></td>
</tr>

<tr>
    <td>lower court.disposition</td>
    <td>String</td> 
    <td>$MISSING_FIELD</td>
    <td><code>"affirmed"</code></td>
</tr>

<tr>
    <td>lower court.reasons</td>
    <td>String</td> 
    <td>$MISSING_FIELD</td>
    <td><code>"to resolve question presented"</code></td>
</tr>

<tr>
    <td>natural court.chief</td>
    <td>String</td> 
    <td>$MISSING_FIELD</td>
    <td><code>"Vinson"</code></td>
</tr>

<tr>
    <td>natural court.id</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>1301</code></td>
</tr>

<tr>
    <td>natural court.period</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>1</code></td>
</tr>

<tr>
    <td>origin.id</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>51</code></td>
</tr>

<tr>
    <td>origin.name</td>
    <td>String</td> 
    <td>$MISSING_FIELD</td>
    <td><code>"California Southern U.S. District Court"</code></td>
</tr>

<tr>
    <td>origin.state</td>
    <td>String</td> 
    <td>$MISSING_FIELD</td>
    <td><code>""</code></td>
</tr>

<tr>
    <td>source.id</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>29</code></td>
</tr>

<tr>
    <td>source.name</td>
    <td>String</td> 
    <td>$MISSING_FIELD</td>
    <td><code>"U.S. Court of Appeals, Ninth Circuit"</code></td>
</tr>

<tr>
    <td>source.state</td>
    <td>String</td> 
    <td>$MISSING_FIELD</td>
    <td><code>""</code></td>
</tr>

<tr>
    <td>voting.majority</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>8</code></td>
</tr>

<tr>
    <td>voting.minority</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>1</code></td>
</tr>

<tr>
    <td>voting.split on second</td>
    <td>Boolean</td> 
    <td>$MISSING_FIELD</td>
    <td><code>True</code></td>
</tr>

<tr>
    <td>voting.unclear</td>
    <td>Boolean</td> 
    <td>$MISSING_FIELD</td>
    <td><code>True</code></td>
</tr>

<tr>
    <td>arguments.date argued.day</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>9</code></td>
</tr>

<tr>
    <td>arguments.date argued.full</td>
    <td>String</td> 
    <td>$MISSING_FIELD</td>
    <td><code>"1/9/1946"</code></td>
</tr>

<tr>
    <td>arguments.date argued.month</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>1</code></td>
</tr>

<tr>
    <td>arguments.date argued.year</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>1946</code></td>
</tr>

<tr>
    <td>arguments.date reargued.day</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>23</code></td>
</tr>

<tr>
    <td>arguments.date reargued.full</td>
    <td>String</td> 
    <td>$MISSING_FIELD</td>
    <td><code>"10/23/1946"</code></td>
</tr>

<tr>
    <td>arguments.date reargued.month</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>10</code></td>
</tr>

<tr>
    <td>arguments.date reargued.year</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>1946</code></td>
</tr>

<tr>
    <td>arguments.petitioner.entity</td>
    <td>String</td> 
    <td>$MISSING_FIELD</td>
    <td><code>"oil company, or natural gas producer"</code></td>
</tr>

<tr>
    <td>arguments.petitioner.id</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>198</code></td>
</tr>

<tr>
    <td>arguments.petitioner.state</td>
    <td>String</td> 
    <td>$MISSING_FIELD</td>
    <td><code>""</code></td>
</tr>

<tr>
    <td>arguments.respondent.entity</td>
    <td>String</td> 
    <td>$MISSING_FIELD</td>
    <td><code>"inventor, patent assigner, trademark owner or holder"</code></td>
</tr>

<tr>
    <td>arguments.respondent.id</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>172</code></td>
</tr>

<tr>
    <td>arguments.respondent.state</td>
    <td>String</td> 
    <td>$MISSING_FIELD</td>
    <td><code>""</code></td>
</tr>

<tr>
    <td>decision.admin action.agency</td>
    <td>String</td> 
    <td>$MISSING_FIELD</td>
    <td><code>"unknown"</code></td>
</tr>

<tr>
    <td>decision.admin action.id</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>-1</code></td>
</tr>

<tr>
    <td>decision.admin action.state</td>
    <td>String</td> 
    <td>$MISSING_FIELD</td>
    <td><code>""</code></td>
</tr>

<tr>
    <td>decision.case.disposition</td>
    <td>String</td> 
    <td>$MISSING_FIELD</td>
    <td><code>"reversed"</code></td>
</tr>

<tr>
    <td>decision.case.unusual</td>
    <td>Boolean</td> 
    <td>$MISSING_FIELD</td>
    <td><code>True</code></td>
</tr>

<tr>
    <td>decision.date.day</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>18</code></td>
</tr>

<tr>
    <td>decision.date.full</td>
    <td>String</td> 
    <td>$MISSING_FIELD</td>
    <td><code>"11/18/1946"</code></td>
</tr>

<tr>
    <td>decision.date.month</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>11</code></td>
</tr>

<tr>
    <td>decision.date.year</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>1946</code></td>
</tr>

<tr>
    <td>natural court.end.day</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>23</code></td>
</tr>

<tr>
    <td>natural court.end.full</td>
    <td>String</td> 
    <td>$MISSING_FIELD</td>
    <td><code>"August/23/1949"</code></td>
</tr>

<tr>
    <td>natural court.end.month</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>8</code></td>
</tr>

<tr>
    <td>natural court.end.year</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>1949</code></td>
</tr>

<tr>
    <td>natural court.start.day</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>24</code></td>
</tr>

<tr>
    <td>natural court.start.full</td>
    <td>String</td> 
    <td>$MISSING_FIELD</td>
    <td><code>"June/24/1946"</code></td>
</tr>

<tr>
    <td>natural court.start.month</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>6</code></td>
</tr>

<tr>
    <td>natural court.start.year</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>1946</code></td>
</tr>

<tr>
    <td>voting.majority assigner.id</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>78</code></td>
</tr>

<tr>
    <td>voting.majority assigner.long name</td>
    <td>String</td> 
    <td>$MISSING_FIELD</td>
    <td><code>"Black, Hugo ( 08/19/1937 - 09/17/1971 )"</code></td>
</tr>

<tr>
    <td>voting.majority assigner.name</td>
    <td>String</td> 
    <td>$MISSING_FIELD</td>
    <td><code>"HLBlack"</code></td>
</tr>

<tr>
    <td>voting.majority writer.id</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>78</code></td>
</tr>

<tr>
    <td>voting.majority writer.long name</td>
    <td>String</td> 
    <td>$MISSING_FIELD</td>
    <td><code>"Black, Hugo ( 08/19/1937 - 09/17/1971 )"</code></td>
</tr>

<tr>
    <td>voting.majority writer.name</td>
    <td>String</td> 
    <td>$MISSING_FIELD</td>
    <td><code>"HLBlack"</code></td>
</tr>

</table>