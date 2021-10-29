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

<span class='text-muted'>By Austin Cory Bart <acbart@vt.edu>, Joung Min Choi <joungmin@vt.edu>, Bo Guan <jasonguan0107@vt.edu></span><br>
<span class='text-muted'>Version 3.0.0, created 10/5/2021</span><br>
<span class='text-muted'>Tags: us, usa, united states, government, law, legal, court, case, supreme, judge, barrister, lawyer, federal, national</span>

# Overview

<p> The U.S. Supreme Court Database traces its history back about two decades ago, when Harold J. Spaeth asked the National Science Foundation to fund a database that would be so rich in content that multiple users - even those with vastly distinct projects and purposes in mind - could draw on it. Professor Spaeth's goal was at once refreshingly simple and extremely ambitious: to produce a database that would include and classify every single vote by a Supreme Court justice in all argued cases over a five-decade period. After securing the funding, Spaeth collected and coded the data, performed reliability checks, and eventually amassed the Database. In the late 1980s, he made it (and the documentation necessary to use it) publicly available. </p><p> Since then, Professor Spaeth has not only updated it each term; he has also continued to perform reliability analyses, thereby ensuring its integrity with each release, and added new variables. Today's version of the Database houses 247 pieces of information for each case, roughly broken down into six categories: (1) identification variables (e.g., citations and docket numbers); (2) background variables (e.g., how the Court took jurisdiction, origin and source of the case, the reason the Court agreed to decide it); (3) chronological variables (e.g., the date of decision, term of Court, natural court); (4) substantive variables (e.g., legal provisions, issues, direction of decision); (5) outcome variables (e.g., disposition of the case, winning party, formal alteration of precedent, declaration of unconstitutionality); and (6) voting and opinion variables (e.g., how the individual justices voted, their opinions and interagreements). </p><p> Case Centered data provides case level information; i.e., each row in the database corresponds to a dispute. These data do not contain specific justice vote information. </p><p> A tremendously helpful resource for learning more about the dataset is the codebook: <a href='http://supremecourtdatabase.org/documentation.php?s=1'>http://supremecourtdatabase.org/documentation.php?s=1</a>. </p>



<http://supremecourtdatabase.org/data.php>




# Key Descriptions
    
<table class='table table-condensed table-striped table-bordered table-hover'>
<tr>
    <th class=''>Key</th>
    <th class=''>List of...</th>
    <th class=''>Comment</th>
    <th class=''>Example Value</th>
</tr>

<tr>
    <td>3_judge_dc</td>
    <td>Boolean</td> 
    <td>whether the case was heard by a three-judge federal district court (occasionally called ��as specially constituted district court��)</td>
    <td><code>True</code></td>
</tr>

<tr>
    <td>docket</td>
    <td>Integer</td> 
    <td>the docket number that the Supreme Court has assigned to the case</td>
    <td><code>24</code></td>
</tr>

<tr>
    <td>name</td>
    <td>String</td> 
    <td>the name of the case</td>
    <td><code>"HALLIBURTON OIL WELL CEMENTING CO. v. WALKER et al., DOING BUSINESS AS DEPTHOGRAPH CO."</code></td>
</tr>

<tr>
    <td>citation.led</td>
    <td>String</td> 
    <td>the citation to each case from the United States Reports(LEd)</td>
    <td><code>"91 L. Ed. 3"</code></td>
</tr>

<tr>
    <td>citation.lexis</td>
    <td>String</td> 
    <td>the citation to each case from the LEXIS cite</td>
    <td><code>"1946 U.S. LEXIS 1724"</code></td>
</tr>

<tr>
    <td>citation.sct</td>
    <td>String</td> 
    <td>the citation to each case from the Supreme Court Reporter (S.CT)</td>
    <td><code>"67 S. Ct. 6"</code></td>
</tr>

<tr>
    <td>citation.us</td>
    <td>String</td> 
    <td>the citation to each case from the official United States
Reports (US) </td>
    <td><code>"329 U.S. 1"</code></td>
</tr>

<tr>
    <td>decision.authority</td>
    <td>String</td> 
    <td>the bases on which the Supreme Court rested its decision with regard to each legal provision that the Court considered in the case</td>
    <td><code>"4.0"</code></td>
</tr>

<tr>
    <td>decision.direction</td>
    <td>String</td> 
    <td>the ideological "direction" of the decision to determine whether the Court supports or opposes the issue to which the case
pertains</td>
    <td><code>"liberal"</code></td>
</tr>

<tr>
    <td>decision.dissent agrees</td>
    <td>Boolean</td> 
    <td>whether the dissenting opinion and the majority in a case both support (1) or, conversely, oppose (0) the issue to which the case pertains</td>
    <td><code>True</code></td>
</tr>

<tr>
    <td>decision.jurisdiction</td>
    <td>String</td> 
    <td>a variety of means whereby the Court undertakes to consider cases that it has been petitioned to review</td>
    <td><code>"rehearing or restored to calendar for reargument"</code></td>
</tr>

<tr>
    <td>decision.precedent altered?</td>
    <td>Boolean</td> 
    <td>whether the majority opinion effectively says that the decision in this case "overruled" one or more of the Court's own precedents</td>
    <td><code>True</code></td>
</tr>

<tr>
    <td>decision.term</td>
    <td>Integer</td> 
    <td>the term in which the Court handed down its decision</td>
    <td><code>1946</code></td>
</tr>

<tr>
    <td>decision.type</td>
    <td>String</td> 
    <td>the decision type the Court made for the case</td>
    <td><code>"opinion of the court (orally argued)"</code></td>
</tr>

<tr>
    <td>decision.unconstitutional</td>
    <td>String</td> 
    <td>whether the Court either declared unconstitutional an act of Congress; a state or territorial statute, regulation, or constitutional provision; or a municipal or other local ordinance</td>
    <td><code>"no declaration of unconstitutionality"</code></td>
</tr>

<tr>
    <td>decision.winning party</td>
    <td>String</td> 
    <td>whether the petitioning party (i.e., the plaintiff or the appellant) emerged victorious</td>
    <td><code>"petitioning party received a favorable disposition"</code></td>
</tr>

<tr>
    <td>id.case</td>
    <td>String</td> 
    <td>the first of four unique internal identification numbers</td>
    <td><code>"1946-001"</code></td>
</tr>

<tr>
    <td>id.case issues</td>
    <td>String</td> 
    <td>the third of four unique internal identification numbers</td>
    <td><code>"1946-001-01-01"</code></td>
</tr>

<tr>
    <td>id.docket</td>
    <td>String</td> 
    <td>the second of four unique internal identification numbers</td>
    <td><code>"1946-001-01"</code></td>
</tr>

<tr>
    <td>id.vote</td>
    <td>String</td> 
    <td>the fourth of four unique internal identification numbers</td>
    <td><code>"1946-001-01-01-01"</code></td>
</tr>

<tr>
    <td>issue.area</td>
    <td>String</td> 
    <td>This variable simply separates the issues identified in the preceding variable (issue) into the larger categories</td>
    <td><code>"Economic Activity"</code></td>
</tr>

<tr>
    <td>issue.id</td>
    <td>Integer</td> 
    <td>issue id</td>
    <td><code>80180</code></td>
</tr>

<tr>
    <td>issue.text</td>
    <td>String</td> 
    <td>the issue for each decision </td>
    <td><code>"patents and copyrights: patent"</code></td>
</tr>

<tr>
    <td>laws.id</td>
    <td>Integer</td> 
    <td>id for the law type</td>
    <td><code>6</code></td>
</tr>

<tr>
    <td>laws.type</td>
    <td>String</td> 
    <td>the constitutional provision(s), statute(s), or court rule(s) that the Court considered in the case</td>
    <td><code>"Infrequently litigated statutes"</code></td>
</tr>

<tr>
    <td>lower court.direction</td>
    <td>String</td> 
    <td>whether the decision of the court whose decision the Supreme Court reviewed was itself liberal or conservative as these terms are defined in the direction of decision variable</td>
    <td><code>"conservative"</code></td>
</tr>

<tr>
    <td>lower court.disagreement?</td>
    <td>Boolean</td> 
    <td>the Supreme Court's majority opinion mentioned that one or more of the members of the court whose decision the Supreme Court reviewed dissented</td>
    <td><code>True</code></td>
</tr>

<tr>
    <td>lower court.disposition</td>
    <td>String</td> 
    <td>the treatment the court whose decision the Supreme Court reviewed accorded the decision of the court it reviewed</td>
    <td><code>"affirmed"</code></td>
</tr>

<tr>
    <td>lower court.reasons</td>
    <td>String</td> 
    <td>the reason, if any, that the Court gives for granting the petition for certiorari</td>
    <td><code>"to resolve question presented"</code></td>
</tr>

<tr>
    <td>natural court.chief</td>
    <td>String</td> 
    <td>the chief justice during whose tenure the case was decided</td>
    <td><code>"Vinson"</code></td>
</tr>

<tr>
    <td>natural court.id</td>
    <td>Integer</td> 
    <td>natural court id</td>
    <td><code>1301</code></td>
</tr>

<tr>
    <td>natural court.period</td>
    <td>Integer</td> 
    <td>a period during which no personnel change occurs</td>
    <td><code>1</code></td>
</tr>

<tr>
    <td>origin.id</td>
    <td>Integer</td> 
    <td>origin id</td>
    <td><code>51</code></td>
</tr>

<tr>
    <td>origin.name</td>
    <td>String</td> 
    <td>the court in which the case originated, not the administrative agency</td>
    <td><code>"California Southern U.S. District Court"</code></td>
</tr>

<tr>
    <td>source.id</td>
    <td>Integer</td> 
    <td>source id</td>
    <td><code>29</code></td>
</tr>

<tr>
    <td>source.name</td>
    <td>String</td> 
    <td>the court whose decision the Supreme Court reviewed</td>
    <td><code>"U.S. Court of Appeals  Ninth Circuit"</code></td>
</tr>

<tr>
    <td>voting.majority</td>
    <td>Integer</td> 
    <td>the frequency with which given justices vote with the majority</td>
    <td><code>8</code></td>
</tr>

<tr>
    <td>voting.minority</td>
    <td>Integer</td> 
    <td>the number of votes in dissent</td>
    <td><code>1</code></td>
</tr>

<tr>
    <td>voting.split on second</td>
    <td>Boolean</td> 
    <td>whether the vote variables (e.g., majVotes, minVotes) pertain to the vote on the second issue</td>
    <td><code>True</code></td>
</tr>

<tr>
    <td>voting.unclear</td>
    <td>Boolean</td> 
    <td>whether the vote was not clearly specified</td>
    <td><code>True</code></td>
</tr>

<tr>
    <td>arguments.petitioner.entity</td>
    <td>String</td> 
    <td>the party who petitioned the Supreme Court to review the case</td>
    <td><code>"oil company / or natural gas producer"</code></td>
</tr>

<tr>
    <td>arguments.petitioner.id</td>
    <td>Integer</td> 
    <td>petitioner id</td>
    <td><code>198</code></td>
</tr>

<tr>
    <td>arguments.respondent.entity</td>
    <td>String</td> 
    <td>the party being sued or tried and is also known as the appellee</td>
    <td><code>"inventor / patent assigner / trademark owner or holder"</code></td>
</tr>

<tr>
    <td>arguments.respondent.id</td>
    <td>Integer</td> 
    <td>respondent id</td>
    <td><code>172</code></td>
</tr>

<tr>
    <td>decision.admin action.agency</td>
    <td>String</td> 
    <td>administrative agency activity occurring prior to the onset of litigation</td>
    <td><code>"Unidentifiable  "</code></td>
</tr>

<tr>
    <td>decision.admin action.id</td>
    <td>Integer</td> 
    <td>id for the administrative agency activity occurring prior to the onset of litigation</td>
    <td><code>118</code></td>
</tr>

<tr>
    <td>decision.case.disposition</td>
    <td>String</td> 
    <td>the treatment the Supreme Court accorded the court whose decision it reviewed</td>
    <td><code>"reversed"</code></td>
</tr>

<tr>
    <td>decision.case.unusual</td>
    <td>Boolean</td> 
    <td>whether the Court made an unusual disposition of the cited case which does not match the coding scheme of the preceding variable</td>
    <td><code>True</code></td>
</tr>

<tr>
    <td>decision.date.day</td>
    <td>Integer</td> 
    <td>the day that the Court announced its decision in the case</td>
    <td><code>18</code></td>
</tr>

<tr>
    <td>decision.date.full</td>
    <td>String</td> 
    <td>the year, month, and day that the Court announced its decision in the case</td>
    <td><code>"11/18/1946"</code></td>
</tr>

<tr>
    <td>decision.date.month</td>
    <td>Integer</td> 
    <td>the month that the Court announced its decision in the case</td>
    <td><code>11</code></td>
</tr>

<tr>
    <td>decision.date.year</td>
    <td>Integer</td> 
    <td>the year that the Court announced its decision in the case</td>
    <td><code>1946</code></td>
</tr>

<tr>
    <td>voting.majority assigner.id</td>
    <td>Integer</td> 
    <td>id for the majority opinion assigner</td>
    <td><code>78</code></td>
</tr>

<tr>
    <td>voting.majority assigner.name</td>
    <td>String</td> 
    <td>the assigner of the opinion or judgment of the Court</td>
    <td><code>"HLBlack"</code></td>
</tr>

<tr>
    <td>voting.majority writer.id</td>
    <td>Integer</td> 
    <td>id for the majority opinion writer</td>
    <td><code>78</code></td>
</tr>

<tr>
    <td>voting.majority writer.name</td>
    <td>String</td> 
    <td>the author of the Court's opinion or judgment,</td>
    <td><code>"HLBlack"</code></td>
</tr>

</table>