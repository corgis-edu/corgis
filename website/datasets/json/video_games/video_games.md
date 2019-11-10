---
permalink: /json/video_games/
style: dataset
---

<img class="img-thumbnail float-right"
     src="/images/datasets/video-games-icon.png"
     alt="video games icon"
     role="presentation">

# Video Games JSON File

<p class='lead'>From the CORGIS Dataset Project</p>

<span class='text-muted'>By Austin Cory Bart <acbart@vt.edu></span><br>
<span class='text-muted'>Version 2.0.0, created 4/13/2017</span><br>
<span class='text-muted'>Tags: video games, games, publishers, console, gaming</span>

# Overview

<i>This dataset requires special permission to use.</i><br><br>
Originally collected by Dr. Joe Cox, this dataset has information about the sales and playtime of over a thousand video games released between 2004 and 2010. The playtime information was collected from crowd-sourced data on "How Long to Beat".<br><br>
Some more information can be found <a href="https://researchportal.port.ac.uk/portal/en/publications/what-makes-a-blockbuster-video-game(a6d848fe-38ae-4584-8c95-a0f735ec9b4c).html">here</a>.


<Cox, Joe. "What makes a blockbuster video game? An empirical analysis of US sales data." Managerial and Decision Economics 35.3 (2014): 189-198.>




# Download

Download the following file:

* <a href='../../datasets/json/video_games/video_games.json' download>video_games.json <span class="fas fa-download"></span></a>

# Key Descriptions
    
<table class='table table-condensed table-striped table-bordered table-hover'>
<tr>
    <th class=''>Key</th>
    <th class=''>List of...</th>
    <th class=''>Comment</th>
    <th class=''>Example Value</th>
</tr>

<tr>
    <td>Title</td>
    <td>String</td> 
    <td>The full title of this game.</td>
    <td><code>"Super Mario 64 DS"</code></td>
</tr>

<tr>
    <td>Features.Handheld?</td>
    <td>Boolean</td> 
    <td>Whether this is a hand-held game.</td>
    <td><code>True</code></td>
</tr>

<tr>
    <td>Features.Max Players</td>
    <td>Integer</td> 
    <td>The maximum number of players that can play this game.</td>
    <td><code>1</code></td>
</tr>

<tr>
    <td>Features.Multiplatform?</td>
    <td>Boolean</td> 
    <td>Whether this game is available on multiple platforms.</td>
    <td><code>True</code></td>
</tr>

<tr>
    <td>Features.Online?</td>
    <td>Boolean</td> 
    <td>Whether this game supports online play.</td>
    <td><code>True</code></td>
</tr>

<tr>
    <td>Metadata.Genres</td>
    <td>String</td> 
    <td>The list of genres that this game belongs to.</td>
    <td><code>"Action"</code></td>
</tr>

<tr>
    <td>Metadata.Licensed?</td>
    <td>Boolean</td> 
    <td>Whether this game was based off a previously licensed entity.</td>
    <td><code>True</code></td>
</tr>

<tr>
    <td>Metadata.Publishers</td>
    <td>String</td> 
    <td>The list of publishers who created this game</td>
    <td><code>"Nintendo"</code></td>
</tr>

<tr>
    <td>Metadata.Sequel?</td>
    <td>Boolean</td> 
    <td>Whether this game is a sequel to another game.</td>
    <td><code>True</code></td>
</tr>

<tr>
    <td>Metrics.Review Score</td>
    <td>Integer</td> 
    <td>a typical review score for this game, out of 100.</td>
    <td><code>85</code></td>
</tr>

<tr>
    <td>Metrics.Sales</td>
    <td>Float</td> 
    <td>The total sales made on this game, measured in millions of dollars.</td>
    <td><code>4.69</code></td>
</tr>

<tr>
    <td>Metrics.Used Price</td>
    <td>Float</td> 
    <td>A typical "used" price for this game (i.e. previously returned and sold), measured in dollars. It is unclear where this number originally came from.</td>
    <td><code>24.95</code></td>
</tr>

<tr>
    <td>Release.Console</td>
    <td>String</td> 
    <td>The name of the console that this particular game was released for. Note that the dataset contains multiple copies of the same game, released for different consoles.</td>
    <td><code>"Nintendo DS"</code></td>
</tr>

<tr>
    <td>Release.Rating</td>
    <td>String</td> 
    <td>The ESRB rating for this game, either E (for Everyone), T (for Teen), or M (for Mature).</td>
    <td><code>"E"</code></td>
</tr>

<tr>
    <td>Release.Re-release?</td>
    <td>Boolean</td> 
    <td>Whether this game is a re-release of an earlier one.</td>
    <td><code>True</code></td>
</tr>

<tr>
    <td>Release.Year</td>
    <td>Integer</td> 
    <td>The year that this game was released.</td>
    <td><code>2004</code></td>
</tr>

<tr>
    <td>Length.All PlayStyles.Average</td>
    <td>Float</td> 
    <td>The mean time that players reported completing the game in any way, in hours. This is the average over all the other categories.</td>
    <td><code>22.716666666666665</code></td>
</tr>

<tr>
    <td>Length.All PlayStyles.Leisure</td>
    <td>Float</td> 
    <td>The slowest time that players reported completing the game in any way, in hours. This is the minimum over all the other categories.</td>
    <td><code>31.9</code></td>
</tr>

<tr>
    <td>Length.All PlayStyles.Median</td>
    <td>Float</td> 
    <td>The median time that players reported completing the game in any way, in hours. This is the median over all the other categories.</td>
    <td><code>24.483333333333334</code></td>
</tr>

<tr>
    <td>Length.All PlayStyles.Polled</td>
    <td>Integer</td> 
    <td>The number of players that reported completing the game in any way. This is the count over all the other categories.</td>
    <td><code>57</code></td>
</tr>

<tr>
    <td>Length.All PlayStyles.Rushed</td>
    <td>Float</td> 
    <td>The fastest time that players reported completing the game in any way, in hours. This is the maximum over all the other categories.</td>
    <td><code>14.3</code></td>
</tr>

<tr>
    <td>Length.Completionists.Average</td>
    <td>Float</td> 
    <td>The mean time that players reported completing everything in the game, in hours.</td>
    <td><code>29.766666666666666</code></td>
</tr>

<tr>
    <td>Length.Completionists.Leisure</td>
    <td>Float</td> 
    <td>The slowest time that players reported completing everything in the game, in hours.</td>
    <td><code>35.03333333333333</code></td>
</tr>

<tr>
    <td>Length.Completionists.Median</td>
    <td>Float</td> 
    <td>The median time that players reported completing everything in the game, in hours.</td>
    <td><code>30.0</code></td>
</tr>

<tr>
    <td>Length.Completionists.Polled</td>
    <td>Integer</td> 
    <td>The number of players that reported completing everything in the game.</td>
    <td><code>20</code></td>
</tr>

<tr>
    <td>Length.Completionists.Rushed</td>
    <td>Float</td> 
    <td>The fastest time that players reported completing everything in the game, in hours.</td>
    <td><code>22.016666666666666</code></td>
</tr>

<tr>
    <td>Length.Main + Extras.Average</td>
    <td>Float</td> 
    <td>The mean time that players reported completing the main game and major extra parts of the game, in hours.</td>
    <td><code>24.916666666666668</code></td>
</tr>

<tr>
    <td>Length.Main + Extras.Leisure</td>
    <td>Float</td> 
    <td>The slowest time that players reported completing the main game and major extra parts of the game, in hours.</td>
    <td><code>29.966666666666665</code></td>
</tr>

<tr>
    <td>Length.Main + Extras.Median</td>
    <td>Float</td> 
    <td>The median time that players reported completing the main game and major extra parts of the game, in hours.</td>
    <td><code>25.0</code></td>
</tr>

<tr>
    <td>Length.Main + Extras.Polled</td>
    <td>Integer</td> 
    <td>The number of players that reported completing the main game and major extra parts of the game.</td>
    <td><code>16</code></td>
</tr>

<tr>
    <td>Length.Main + Extras.Rushed</td>
    <td>Float</td> 
    <td>The fastest time that players reported completing the main game and major extra parts of the game, in hours.</td>
    <td><code>18.333333333333332</code></td>
</tr>

<tr>
    <td>Length.Main Story.Average</td>
    <td>Float</td> 
    <td>The mean time that players reported completing the main game storyline, in hours.</td>
    <td><code>14.333333333333334</code></td>
</tr>

<tr>
    <td>Length.Main Story.Leisure</td>
    <td>Float</td> 
    <td>The slowest time that players reported completing the main game storyline, in hours.</td>
    <td><code>18.316666666666666</code></td>
</tr>

<tr>
    <td>Length.Main Story.Median</td>
    <td>Float</td> 
    <td>The median time that players reported completing the main game storyline, in hours.</td>
    <td><code>14.5</code></td>
</tr>

<tr>
    <td>Length.Main Story.Polled</td>
    <td>Integer</td> 
    <td>The number of players that reported completing the main game storyline.</td>
    <td><code>21</code></td>
</tr>

<tr>
    <td>Length.Main Story.Rushed</td>
    <td>Float</td> 
    <td>The fastest time that players reported completing the main game storyline, in hours.</td>
    <td><code>9.7</code></td>
</tr>

</table>