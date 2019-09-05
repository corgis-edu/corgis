---
permalink: /csv/graduates/
style: dataset
---

<img class="img-thumbnail float-right"
     src="/images/datasets/graduates-icon.png"
     alt="graduates icon"
     role="presentation">

# Graduates CSV File

<p class='lead'>From the CORGIS Dataset Project</p>

<span class='text-muted'>By Austin Cory Bart <acbart@vt.edu></span><br>
<span class='text-muted'>Version 2.0.0, created 11/1/2015</span><br>
<span class='text-muted'>Tags: graduation, grads, majors, education, college, university, higher education, jobs, careers</span>

# Overview

The data in this library comes from the National Survey of Recent College Graduates.  Included is information about employment numbers, major information, and the earnings of different majors. Many majors were not available before 2010, so their values have been recorded as 0 (note that this may affect the averages shown in the bar charts).



<https://www.nsf.gov/statistics/srvyrecentgrads/>




# Download

Download the following file:

* <a href='../../datasets/csv/graduates/graduates.csv' download>graduates.csv <span class="fas fa-download"></span></a>

# Key Descriptions
    
<table class='table table-condensed table-striped table-bordered table-hover'>
<tr>
    <th class=''>Key</th>
    <th class=''>List of...</th>
    <th class=''>Comment</th>
    <th class=''>Example Value</th>
</tr>

<tr>
    <td>Year</td>
    <td>Integer</td> 
    <td>The year that this report was made for.</td>
    <td><code>1993</code></td>
</tr>

<tr>
    <td>Demographics.Total</td>
    <td>Integer</td> 
    <td>The estimated number of people awarded degrees in this major during this year.</td>
    <td><code>1295598</code></td>
</tr>

<tr>
    <td>Education.Major</td>
    <td>String</td> 
    <td>The name of the major for these graduated students.</td>
    <td><code>"Biological Sciences"</code></td>
</tr>

<tr>
    <td>Salaries.Highest</td>
    <td>Float</td> 
    <td>The highest recorded salary reported for employed people with this degree during this year.</td>
    <td><code>999999.0</code></td>
</tr>

<tr>
    <td>Salaries.Lowest</td>
    <td>Float</td> 
    <td>The lowest recorded salary reported for employed people with this degree during this year.</td>
    <td><code>0.0</code></td>
</tr>

<tr>
    <td>Salaries.Mean</td>
    <td>Float</td> 
    <td>The average (mean) recorded salary reported for employed people with this degree during this year.</td>
    <td><code>160585.73</code></td>
</tr>

<tr>
    <td>Salaries.Median</td>
    <td>Float</td> 
    <td>The median recorded salary reported for employed people with this degree during this year.</td>
    <td><code>51000.0</code></td>
</tr>

<tr>
    <td>Salaries.Quantity</td>
    <td>Integer</td> 
    <td>The number of salaries reported for employed people with this degree during this year.</td>
    <td><code>13432</code></td>
</tr>

<tr>
    <td>Salaries.Standard Deviation</td>
    <td>Float</td> 
    <td>The standard deviation (which gives the amount of variance) of salaries reported for employed people with this degree during this year.</td>
    <td><code>297818.25</code></td>
</tr>

<tr>
    <td>Demographics.Ethnicity.Asians</td>
    <td>Integer</td> 
    <td>The estimated number of people identifying as Asian that were awarded degrees in this major during this year.</td>
    <td><code>84495</code></td>
</tr>

<tr>
    <td>Demographics.Ethnicity.Minorities</td>
    <td>Integer</td> 
    <td>The estimated number of people identifying as a minority (e.g., Black, African American, Native American) that were awarded degrees in this major during this year.</td>
    <td><code>115016</code></td>
</tr>

<tr>
    <td>Demographics.Ethnicity.Whites</td>
    <td>Integer</td> 
    <td>The estimated number of people identifying as White that were awarded degrees in this major during this year.</td>
    <td><code>1094775</code></td>
</tr>

<tr>
    <td>Demographics.Gender.Females</td>
    <td>Integer</td> 
    <td>The estimated number of women awarded degrees in this major during this year.</td>
    <td><code>551695</code></td>
</tr>

<tr>
    <td>Demographics.Gender.Males</td>
    <td>Integer</td> 
    <td>The estimated number of women awarded degrees in this major during this year.</td>
    <td><code>743903</code></td>
</tr>

<tr>
    <td>Education.Degrees.Bachelors</td>
    <td>Integer</td> 
    <td>The estimated number of bachelor degrees awarded in this for major during this year.</td>
    <td><code>671374</code></td>
</tr>

<tr>
    <td>Education.Degrees.Doctorates</td>
    <td>Integer</td> 
    <td>The estimated number of doctoral degrees awarded in this for major during this year.</td>
    <td><code>90543</code></td>
</tr>

<tr>
    <td>Education.Degrees.Masters</td>
    <td>Integer</td> 
    <td>The estimated number of Masters awarded in this for major during this year.</td>
    <td><code>248813</code></td>
</tr>

<tr>
    <td>Education.Degrees.Professionals</td>
    <td>Integer</td> 
    <td>The estimated number of professional degrees awarded in this for major during this year.</td>
    <td><code>284869</code></td>
</tr>

<tr>
    <td>Employment.Employer Type.Business/Industry</td>
    <td>Integer</td> 
    <td>The number of people with a degree in this major during this year who described their Employer Type as "Business/Industry".</td>
    <td><code>669270</code></td>
</tr>

<tr>
    <td>Employment.Employer Type.Educational Institution</td>
    <td>Integer</td> 
    <td>The number of people with a degree in this major during this year who described their Employer Type as an "Educational Institution".</td>
    <td><code>300468</code></td>
</tr>

<tr>
    <td>Employment.Employer Type.Government</td>
    <td>Integer</td> 
    <td>The number of people with a degree in this major during this year who described their Employer Type as "Government".</td>
    <td><code>121117</code></td>
</tr>

<tr>
    <td>Employment.Reason Working Outside Field.Career Change</td>
    <td>Integer</td> 
    <td>The number of people with a degree in this major during this year, who are working outside of the field associated with their major, and who did so because they wanted a career change.</td>
    <td><code>98112</code></td>
</tr>

<tr>
    <td>Employment.Reason Working Outside Field.Family-related</td>
    <td>Integer</td> 
    <td>The number of people with a degree in this major during this year, who are working outside of the field associated with their major, and who did so because of family-related issues.</td>
    <td><code>65619</code></td>
</tr>

<tr>
    <td>Employment.Reason Working Outside Field.Job Location</td>
    <td>Integer</td> 
    <td>The number of people with a degree in this major during this year, who are working outside of the field associated with their major, and who did so because of the job location.</td>
    <td><code>90842</code></td>
</tr>

<tr>
    <td>Employment.Reason Working Outside Field.No Job Available</td>
    <td>Integer</td> 
    <td>The number of people with a degree in this major during this year, who are working outside of the field associated with their major, and who did so because there was no job available in their field.</td>
    <td><code>76598</code></td>
</tr>

<tr>
    <td>Employment.Reason Working Outside Field.Other</td>
    <td>Integer</td> 
    <td>The number of people with a degree in this major during this year, who are working outside of the field associated with their major, and who did so because of other reasons.</td>
    <td><code>24821</code></td>
</tr>

<tr>
    <td>Employment.Reason Working Outside Field.Pay/Promotion</td>
    <td>Integer</td> 
    <td>The number of people with a degree in this major during this year, who are working outside of the field associated with their major, and who did so because of pay or promotion opportunities.</td>
    <td><code>111962</code></td>
</tr>

<tr>
    <td>Employment.Reason Working Outside Field.Working Conditions</td>
    <td>Integer</td> 
    <td>The number of people with a degree in this major during this year, who are working outside of the field associated with their major, and who did so because of working conditions.</td>
    <td><code>100886</code></td>
</tr>

<tr>
    <td>Employment.Reason for Not Working.Family</td>
    <td>Integer</td> 
    <td>The number of people with a degree in this major during this year, who are not working because of their family.</td>
    <td><code>45962</code></td>
</tr>

<tr>
    <td>Employment.Reason for Not Working.Layoff</td>
    <td>Integer</td> 
    <td>The number of people with a degree in this major during this year, who are not working because they were laid off.</td>
    <td><code>7457</code></td>
</tr>

<tr>
    <td>Employment.Reason for Not Working.No Job Available</td>
    <td>Integer</td> 
    <td>The number of people with a degree in this major during this year, who are not working because there was no job available.</td>
    <td><code>14976</code></td>
</tr>

<tr>
    <td>Employment.Reason for Not Working.No need/want</td>
    <td>Integer</td> 
    <td>The number of people with a degree in this major during this year, who are not working because they either did not need a job and/or did not want a job.</td>
    <td><code>30989</code></td>
</tr>

<tr>
    <td>Employment.Reason for Not Working.Student</td>
    <td>Integer</td> 
    <td>The number of people with a degree in this major during this year, who are not working because they were still a student.</td>
    <td><code>51891</code></td>
</tr>

<tr>
    <td>Employment.Status.Employed</td>
    <td>Integer</td> 
    <td>The number of people with a degree in this major during this year, who are employed.</td>
    <td><code>1090855</code></td>
</tr>

<tr>
    <td>Employment.Status.Not in Labor Force</td>
    <td>Integer</td> 
    <td>The number of people with a degree in this major during this year, who are not in the labor force (e.g., retired, students, those taking care of children).</td>
    <td><code>181940</code></td>
</tr>

<tr>
    <td>Employment.Status.Unemployed</td>
    <td>Integer</td> 
    <td>The number of people with a degree in this major during this year, who are unemployed.</td>
    <td><code>22803</code></td>
</tr>

<tr>
    <td>Employment.Work Activity.Accounting/Finance/Contracts</td>
    <td>Integer</td> 
    <td>The number of people with a degree in this major during this year, who describe their primary work activity (more than 10% of their time) as involving Accounting, Finance, or Contracts.</td>
    <td><code>793888</code></td>
</tr>

<tr>
    <td>Employment.Work Activity.Applied Research</td>
    <td>Integer</td> 
    <td>The number of people with a degree in this major during this year, who describe their primary work activity (more than 10% of their time) as involving Applied Research.</td>
    <td><code>341238</code></td>
</tr>

<tr>
    <td>Employment.Work Activity.Basic Research</td>
    <td>Integer</td> 
    <td>The number of people with a degree in this major during this year, who describe their primary work activity (more than 10% of their time) as involving Basic Research.</td>
    <td><code>224277</code></td>
</tr>

<tr>
    <td>Employment.Work Activity.Computer Applications</td>
    <td>Integer</td> 
    <td>The number of people with a degree in this major during this year, who describe their primary work activity (more than 10% of their time) as involving Computer Applications.</td>
    <td><code>297235</code></td>
</tr>

<tr>
    <td>Employment.Work Activity.Design</td>
    <td>Integer</td> 
    <td>The number of people with a degree in this major during this year, who describe their primary work activity (more than 10% of their time) as involving Design.</td>
    <td><code>118772</code></td>
</tr>

<tr>
    <td>Employment.Work Activity.Development</td>
    <td>Integer</td> 
    <td>The number of people with a degree in this major during this year, who describe their primary work activity (more than 10% of their time) as involving Development.</td>
    <td><code>191867</code></td>
</tr>

<tr>
    <td>Employment.Work Activity.Human Resources</td>
    <td>Integer</td> 
    <td>The number of people with a degree in this major during this year, who describe their primary work activity (more than 10% of their time) as involving Human Resources.</td>
    <td><code>365049</code></td>
</tr>

<tr>
    <td>Employment.Work Activity.Managing/Supervising People/Projects</td>
    <td>Integer</td> 
    <td>The number of people with a degree in this major during this year, who describe their primary work activity (more than 10% of their time) as involving managing or supervising either people or projects.</td>
    <td><code>539430</code></td>
</tr>

<tr>
    <td>Employment.Work Activity.Other</td>
    <td>Integer</td> 
    <td>The number of people with a degree in this major during this year, who describe their primary work activity (more than 10% of their time) as involving something not involved in any of the other categories.</td>
    <td><code>99749</code></td>
</tr>

<tr>
    <td>Employment.Work Activity.Productions/Operations/Maintenance</td>
    <td>Integer</td> 
    <td>The number of people with a degree in this major during this year, who describe their primary work activity (more than 10% of their time) as involving productions, operations, or maintenance.</td>
    <td><code>103385</code></td>
</tr>

<tr>
    <td>Employment.Work Activity.Professional Service</td>
    <td>Integer</td> 
    <td>The number of people with a degree in this major during this year, who describe their primary work activity (more than 10% of their time) as involving professional service.</td>
    <td><code>506252</code></td>
</tr>

<tr>
    <td>Employment.Work Activity.Qualitity/Productivity Management</td>
    <td>Integer</td> 
    <td>The number of people with a degree in this major during this year, who describe their primary work activity (more than 10% of their time) as involving qualitity or productivity management.</td>
    <td><code>269042</code></td>
</tr>

<tr>
    <td>Employment.Work Activity.Sales, Purchasing, Marketing</td>
    <td>Integer</td> 
    <td>The number of people with a degree in this major during this year, who describe their primary work activity (more than 10% of their time) as involving sales, purchasing, or marketing.</td>
    <td><code>215169</code></td>
</tr>

<tr>
    <td>Employment.Work Activity.Teaching</td>
    <td>Integer</td> 
    <td>The number of people with a degree in this major during this year, who describe their primary work activity (more than 10% of their time) as involving teaching.</td>
    <td><code>381908</code></td>
</tr>

</table>