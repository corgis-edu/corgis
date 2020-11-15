---
permalink: /json/classics/
style: dataset
---

<img class="img-thumbnail float-right"
     src="/images/datasets/classics-splash.png"
     alt="classics icon"
     role="presentation">

# Classics JSON File

<p class='lead'>From the CORGIS Dataset Project</p>

<span class='text-muted'>By Austin Cory Bart <acbart@vt.edu></span><br>
<span class='text-muted'>Version 2.0.0, created 4/2/2016</span><br>
<span class='text-muted'>Tags: classics, books, texts, text, book, classic, english, shakespeare, literature, novel, language, composition, writing, author, publication, words</span>

# Overview

Project Gutenberg (PG) is a volunteer effort to digitize and archive cultural works, to 'encourage the creation and distribution of eBooks'. It was founded in 1971 by Michael S. Hart and is the oldest digital library. This dataset is a collection of the top 1000 most popular books on Project Gutenberg, as determined by downloads. Each book has information about its authorship, publication date, congressional classication, and a few other fields. It also has some simple, computed statistics based on common metrics such as sentiment analysis, Flesch Kincaid Reading level, and average sentence length. 



<https://www.gutenberg.org/ebooks/search/?sort_order=downloads>




# Download

Download the following file:

* <a href='../../datasets/json/classics/classics.json' download>classics.json <span class="fas fa-download"></span></a>

# Key Descriptions
    
<table class='table table-condensed table-striped table-bordered table-hover'>
<tr>
    <th class=''>Key</th>
    <th class=''>List of...</th>
    <th class=''>Comment</th>
    <th class=''>Example Value</th>
</tr>

<tr>
    <td>bibliography.congress classifications</td>
    <td>String</td> 
    <td>$MISSING_FIELD</td>
    <td><code>"PR"</code></td>
</tr>

<tr>
    <td>bibliography.languages</td>
    <td>String</td> 
    <td>$MISSING_FIELD</td>
    <td><code>"en"</code></td>
</tr>

<tr>
    <td>bibliography.subjects</td>
    <td>String</td> 
    <td>$MISSING_FIELD</td>
    <td><code>"Sisters -- Fiction,Courtship -- Fiction,Social classes -- Fiction,England -- Fiction,Domestic fiction,Young women -- Fiction,Love stories"</code></td>
</tr>

<tr>
    <td>bibliography.title</td>
    <td>String</td> 
    <td>$MISSING_FIELD</td>
    <td><code>"Pride and Prejudice"</code></td>
</tr>

<tr>
    <td>bibliography.type</td>
    <td>String</td> 
    <td>$MISSING_FIELD</td>
    <td><code>"Text"</code></td>
</tr>

<tr>
    <td>metadata.downloads</td>
    <td>Integer</td> 
    <td>The number of times this book has been downloaded from Project Gutenberg, as of the last update (circa Spring 2016).</td>
    <td><code>36576</code></td>
</tr>

<tr>
    <td>metadata.id</td>
    <td>Integer</td> 
    <td>Every book on Project Gutenberg has a unique ID number. You can use this number to check the book on project gutenberg (e.g., book 110 is <a href="http://www.gutenberg.org/ebooks/110">http://www.gutenberg.org/ebooks/110</a>).</td>
    <td><code>1342</code></td>
</tr>

<tr>
    <td>metadata.rank</td>
    <td>Integer</td> 
    <td>The rank of this book in comparison to other books on Gutenberg, measured by number of downloads. A lower rank indicatest that that book is more popular.</td>
    <td><code>1</code></td>
</tr>

<tr>
    <td>metadata.url</td>
    <td>String</td> 
    <td>$MISSING_FIELD</td>
    <td><code>"https://www.gutenberg.org/ebooks/1342"</code></td>
</tr>

<tr>
    <td>bibliography.author.birth</td>
    <td>Integer</td> 
    <td>The recorded birth year of the author. If their birth year is unknown, it is replaced with "0".</td>
    <td><code>1775</code></td>
</tr>

<tr>
    <td>bibliography.author.death</td>
    <td>Integer</td> 
    <td>The recorded year of the author's death. If their death year is unknown, it is replaced with "0".</td>
    <td><code>1817</code></td>
</tr>

<tr>
    <td>bibliography.author.name</td>
    <td>String</td> 
    <td>$MISSING_FIELD</td>
    <td><code>"Austen, Jane"</code></td>
</tr>

<tr>
    <td>bibliography.publication.day</td>
    <td>Integer</td> 
    <td>The day of the month when the book was published. Notice that missing values have been coded as "0".</td>
    <td><code>1</code></td>
</tr>

<tr>
    <td>bibliography.publication.full</td>
    <td>String</td> 
    <td>$MISSING_FIELD</td>
    <td><code>"June, 1998"</code></td>
</tr>

<tr>
    <td>bibliography.publication.month</td>
    <td>Integer</td> 
    <td>The month of the year when the book was published; 1 corresponds to January, 2 to February, etc. Notice that missing values have been coded as "0".</td>
    <td><code>6</code></td>
</tr>

<tr>
    <td>bibliography.publication.month name</td>
    <td>String</td> 
    <td>$MISSING_FIELD</td>
    <td><code>"June"</code></td>
</tr>

<tr>
    <td>bibliography.publication.year</td>
    <td>Integer</td> 
    <td>The year when the book was published according to Project Gutenberg. Keep in mind that this may not be the original publication date of the work, just that particular edition of the work. Notice that missing values have been coded as "0".</td>
    <td><code>1998</code></td>
</tr>

<tr>
    <td>metadata.formats.total</td>
    <td>Integer</td> 
    <td>Project Gutenberg makes books available in a wide variety of file formats, including raw text files, HTML web pages, audio books, etc. This field indicates the number of ways that this book is available.</td>
    <td><code>8</code></td>
</tr>

<tr>
    <td>metadata.formats.types</td>
    <td>String</td> 
    <td>$MISSING_FIELD</td>
    <td><code>"text/plain,text/plain; charset=us-ascii,application/pdf,application/x-mobipocket-ebook,application/zip,application/rdf+xml,application/epub+zip,text/html; charset=us-ascii"</code></td>
</tr>

<tr>
    <td>metrics.difficulty.automated readability index</td>
    <td>Float</td> 
    <td>The Automated Readability Index is a number indicating the understandability of the text. This number is an approximate US Grade Level needed to comprehend the text, calculated using the characters per word and words per sentences.</td>
    <td><code>10.7</code></td>
</tr>

<tr>
    <td>metrics.difficulty.coleman liau index</td>
    <td>Float</td> 
    <td>The Coleman Liau Index is a number indicating the understandability of the text. This number is an approximate US Grade Level needed to comprehend the text, calculated using characters instead of syllables, similar to the Automated Readability Index.</td>
    <td><code>10.73</code></td>
</tr>

<tr>
    <td>metrics.difficulty.dale chall readability score</td>
    <td>Float</td> 
    <td>The Dale Chall Readability Score provides a numeric gauge of the comprehension difficulty that readers come upon when reading a text. It uses a list of 3000 words that groups of fourth-grade American students could reliably understand, considering any word not on that list to be difficult. This number is an approximate US Grade Level needed to comprehend the text.</td>
    <td><code>5.7</code></td>
</tr>

<tr>
    <td>metrics.difficulty.difficult words</td>
    <td>Integer</td> 
    <td>The number of words in the text that are considered "difficult"; that is, they are not on a list of 3000 words that are considered understandable by fourth-grade American students.</td>
    <td><code>9032</code></td>
</tr>

<tr>
    <td>metrics.difficulty.flesch kincaid grade</td>
    <td>Float</td> 
    <td>The "Flesch-Kincaid Grade Level Formula" presents a score as a U.S. grade level, making it easier to understand. It uses a similar formula to the Flesch Reading Ease measure.</td>
    <td><code>7.9</code></td>
</tr>

<tr>
    <td>metrics.difficulty.flesch reading ease</td>
    <td>Float</td> 
    <td>The 'Flesch Reading Ease' uses the sentence length (number of words per sentence) and the number of syllables per word in an equation to calculate the reading ease. Texts with a very high Flesch reading Ease score (about 100) are very easy to read, have short sentences and no words of more than two syllables.</td>
    <td><code>70.13</code></td>
</tr>

<tr>
    <td>metrics.difficulty.gunning fog</td>
    <td>Float</td> 
    <td>The Gunning Fog Index measures the readability of English writing. The index estimates the years of formal education needed to understand the text on a first reading. The formula is calculated using the ratio of words to sentences and the percentage of words that are complex (i.e. have three or more syllables).</td>
    <td><code>9.200000000000001</code></td>
</tr>

<tr>
    <td>metrics.difficulty.linsear write formula</td>
    <td>Float</td> 
    <td>Linsear Write is a readability metric for English text, purportedly developed for the United States Air Force to help them calculate the readability of their technical manuals. It was designed to calculate the United States grade level of a text sample based on sentence length and the number words used that have three or more syllables.</td>
    <td><code>13.5</code></td>
</tr>

<tr>
    <td>metrics.difficulty.smog index</td>
    <td>Float</td> 
    <td>The SMOG grade is a measure of readability that estimates the years of education needed to understand a piece of writing. SMOG is the acronym derived from "Simple Measure of Gobbledygook". Its formula is based on the number of polysyllables (words with three or more syllables) and the number of sentences.</td>
    <td><code>3.1</code></td>
</tr>

<tr>
    <td>metrics.sentiments.polarity</td>
    <td>Float</td> 
    <td>Sentiment analysis attempts to determine the attitude of a speaker or a writer with respect to some topic or the overall contextual polarity of a document. Polarity in particular refers to how positive or negative the author is towards the content.</td>
    <td><code>0.13671337760500446</code></td>
</tr>

<tr>
    <td>metrics.sentiments.subjectivity</td>
    <td>Float</td> 
    <td>Sentiment analysis attempts to determine the attitude of a speaker or a writer with respect to some topic or the overall contextual polarity of a document. Subjectivity (as opposed to Objectivity) in particular refers to whether the text is opinionated or attempts to stay factual.</td>
    <td><code>0.5222391494704692</code></td>
</tr>

<tr>
    <td>metrics.statistics.average letter per word</td>
    <td>Float</td> 
    <td>$MISSING_FIELD</td>
    <td><code>4.83</code></td>
</tr>

<tr>
    <td>metrics.statistics.average sentence length</td>
    <td>Float</td> 
    <td>$MISSING_FIELD</td>
    <td><code>18.0</code></td>
</tr>

<tr>
    <td>metrics.statistics.average sentence per word</td>
    <td>Float</td> 
    <td>$MISSING_FIELD</td>
    <td><code>0.05</code></td>
</tr>

<tr>
    <td>metrics.statistics.characters</td>
    <td>Integer</td> 
    <td>Characters are letters and symbols in a text, not the number of people.</td>
    <td><code>586794</code></td>
</tr>

<tr>
    <td>metrics.statistics.polysyllables</td>
    <td>Integer</td> 
    <td>The number of words that have 3 or more syllables.</td>
    <td><code>4603</code></td>
</tr>

<tr>
    <td>metrics.statistics.sentences</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>6511</code></td>
</tr>

<tr>
    <td>metrics.statistics.syllables</td>
    <td>Float</td> 
    <td>$MISSING_FIELD</td>
    <td><code>170648.1</code></td>
</tr>

<tr>
    <td>metrics.statistics.words</td>
    <td>Integer</td> 
    <td>$MISSING_FIELD</td>
    <td><code>121533</code></td>
</tr>

</table>