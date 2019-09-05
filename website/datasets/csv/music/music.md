---
permalink: /csv/music/
style: dataset
---

<img class="img-thumbnail float-right"
     src="/images/datasets/music-icon.png"
     alt="music icon"
     role="presentation">

# Music CSV File

<p class='lead'>From the CORGIS Dataset Project</p>

<span class='text-muted'>By Ryan Whitcomb <rwhit94@vt.edu></span><br>
<span class='text-muted'>Version 2.0.0, created 5-18-16</span><br>
<span class='text-muted'>Tags: music, songs, artists, creativity, media</span>

# Overview

This library comes from the Million Song Dataset, which used a company called the Echo Nest to derive data points about one million popular contemporary songs.  The Million Song Dataset is a collaboration between the Echo Nest and LabROSA, a laboratory working towards intelligent machine listening.  The project was also funded in part by the National Science Foundation of America (NSF) to provide a large data set to evaluate research related to algorithms on a commercial size while promoting further research into the Music Information Retrieval field.  The data contains standard information about the songs such as artist name, title, and year released.  Additionally, the data contains more advanced information; for example, the length of the song, how many musical bars long the song is, and how long the fade in to the song was.



<Thierry Bertin-Mahieux, Daniel P.W. Ellis, Brian Whitman, and Paul Lamere. <br> The Million Song Dataset. In Proceedings of the 12th International Society <br> for Music Information Retrieval Conference (ISMIR 2011), 2011.>




# Download

Download the following file:

* <a href='../../datasets/csv/music/music.csv' download>music.csv <span class="fas fa-download"></span></a>

# Key Descriptions
    
<table class='table table-condensed table-striped table-bordered table-hover'>
<tr>
    <th class=''>Key</th>
    <th class=''>List of...</th>
    <th class=''>Comment</th>
    <th class=''>Example Value</th>
</tr>

<tr>
    <td>artist.familiarity</td>
    <td>Float</td> 
    <td>A measure of 0..1 for how familiar the artist is to listeners.</td>
    <td><code>0.581793766</code></td>
</tr>

<tr>
    <td>artist.hotttnesss</td>
    <td>Float</td> 
    <td>A measure of the artists's popularity, when downloaded (in December 2010). Measured on a scale of 0 to 1.</td>
    <td><code>0.401997543</code></td>
</tr>

<tr>
    <td>artist.id</td>
    <td>String</td> 
    <td>A unique ID for this artist.</td>
    <td><code>"ARD7TVE1187B99BFB1"</code></td>
</tr>

<tr>
    <td>artist.latitude</td>
    <td>Float</td> 
    <td>The home location's latitude of this artist.</td>
    <td><code>0.0</code></td>
</tr>

<tr>
    <td>artist.location</td>
    <td>Integer</td> 
    <td>Unknown.</td>
    <td><code>0</code></td>
</tr>

<tr>
    <td>artist.longitude</td>
    <td>Float</td> 
    <td>The home location's longitude of this artist.</td>
    <td><code>0.0</code></td>
</tr>

<tr>
    <td>artist.name</td>
    <td>String</td> 
    <td>The name of the artist.</td>
    <td><code>"Casual"</code></td>
</tr>

<tr>
    <td>artist.similar</td>
    <td>Float</td> 
    <td>Unknown.</td>
    <td><code>0.0</code></td>
</tr>

<tr>
    <td>artist.terms</td>
    <td>String</td> 
    <td>The term most associated with this artist.</td>
    <td><code>"hip hop"</code></td>
</tr>

<tr>
    <td>artist.terms_freq</td>
    <td>Float</td> 
    <td>The frequency of this term.</td>
    <td><code>1.0</code></td>
</tr>

<tr>
    <td>release.id</td>
    <td>Integer</td> 
    <td>The ID of the release (album) on the service 7digital.com</td>
    <td><code>300848</code></td>
</tr>

<tr>
    <td>release.name</td>
    <td>Integer</td> 
    <td>Unknown value</td>
    <td><code>0</code></td>
</tr>

<tr>
    <td>song.artist_mbtags</td>
    <td>Float</td> 
    <td>Unknown field.</td>
    <td><code>0.0</code></td>
</tr>

<tr>
    <td>song.artist_mbtags_count</td>
    <td>Float</td> 
    <td>Number of tags for the artist on mbtags.</td>
    <td><code>0.0</code></td>
</tr>

<tr>
    <td>song.bars_confidence</td>
    <td>Float</td> 
    <td>Confidence value (between 0 and 1) associated with each bar.</td>
    <td><code>0.643</code></td>
</tr>

<tr>
    <td>song.bars_start</td>
    <td>Float</td> 
    <td>Average start time of each bar, measured in bars.</td>
    <td><code>0.58521</code></td>
</tr>

<tr>
    <td>song.beats_confidence</td>
    <td>Float</td> 
    <td>Average confidence interval of the beats.</td>
    <td><code>0.834</code></td>
</tr>

<tr>
    <td>song.beats_start</td>
    <td>Float</td> 
    <td>Average start time of each beat, measured in beats.</td>
    <td><code>0.58521</code></td>
</tr>

<tr>
    <td>song.duration</td>
    <td>Float</td> 
    <td>Duration of the track in seconds.</td>
    <td><code>218.93179</code></td>
</tr>

<tr>
    <td>song.end_of_fade_in</td>
    <td>Float</td> 
    <td>Time of the end of the fade in, at the beginning of the song.</td>
    <td><code>0.247</code></td>
</tr>

<tr>
    <td>song.hotttnesss</td>
    <td>Float</td> 
    <td>A measure of the song's popularity, when downloaded (in December 2010). Measured on a scale of 0 to 1.</td>
    <td><code>0.60211999</code></td>
</tr>

<tr>
    <td>song.id</td>
    <td>String</td> 
    <td>A uniquely identifying number for the song.</td>
    <td><code>"SOMZWCG12A8C13C480"</code></td>
</tr>

<tr>
    <td>song.key</td>
    <td>Float</td> 
    <td>Estimation of the key the song is in. Keys can be from 0 to 11.</td>
    <td><code>1.0</code></td>
</tr>

<tr>
    <td>song.key_confidence</td>
    <td>Float</td> 
    <td>Confidence value (between 0 and 1) of the key estimation.</td>
    <td><code>0.736</code></td>
</tr>

<tr>
    <td>song.loudness</td>
    <td>Float</td> 
    <td>General loudness of the track</td>
    <td><code>-11.197</code></td>
</tr>

<tr>
    <td>song.mode</td>
    <td>Integer</td> 
    <td>Estimation of the mode the song.</td>
    <td><code>0</code></td>
</tr>

<tr>
    <td>song.mode_confidence</td>
    <td>Float</td> 
    <td>Confidence value (between 0 and 1) of the mode estimation.</td>
    <td><code>0.636</code></td>
</tr>

<tr>
    <td>song.start_of_fade_out</td>
    <td>Float</td> 
    <td>Start time of the fade out, in seconds, at the end of the song.</td>
    <td><code>218.932</code></td>
</tr>

<tr>
    <td>song.tatums_confidence</td>
    <td>Float</td> 
    <td>Confidence value (between 0 and 1) associated with each tatum.</td>
    <td><code>0.779</code></td>
</tr>

<tr>
    <td>song.tatums_start</td>
    <td>Float</td> 
    <td>Average start time of each tatum, measured in tatums.</td>
    <td><code>0.28519</code></td>
</tr>

<tr>
    <td>song.tempo</td>
    <td>Float</td> 
    <td>Tempo in BPM.</td>
    <td><code>92.198</code></td>
</tr>

<tr>
    <td>song.time_signature</td>
    <td>Float</td> 
    <td>Time signature of the song, i.e. usual number of beats per bar.</td>
    <td><code>4.0</code></td>
</tr>

<tr>
    <td>song.time_signature_confidence</td>
    <td>Float</td> 
    <td>Confidence of the time signature estimation</td>
    <td><code>0.778</code></td>
</tr>

<tr>
    <td>song.title</td>
    <td>Integer</td> 
    <td>Name of the song.</td>
    <td><code>0</code></td>
</tr>

<tr>
    <td>song.year</td>
    <td>Integer</td> 
    <td>Year when this song was released, according to musicbrainz.org.</td>
    <td><code>0</code></td>
</tr>

</table>