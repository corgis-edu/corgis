---
permalink: /blockpy/nuclear_explosions/
style: dataset
---

<img class="img-thumbnail float-right"
     src="/images/datasets/nuclear-explosion-icon.png"
     alt="nuclear explosions icon"
     role="presentation">

# Nuclear Explosions BlockPy Library

<p class='lead'>From the CORGIS Dataset Project</p>

<span class='text-muted'>By Sam Donald</span><br>
<span class='text-muted'>Version 1.0.0, created 10/28/2022</span><br>
<span class='text-muted'>Tags: Nuclear, Atomic bomb, War</span>

# Overview

Details of nuclear explosions prior to 2000


<https://github.com/rfordatascience/tidytuesday/tree/2e9bd5a67e09b14d01f616b00f7f7e0931515d24/data/2019/2019-08-20>




# Key Descriptions
    
<table class='table table-condensed table-striped table-bordered table-hover'>
<tr>
    <th class=''>Key</th>
    <th class=''>List of...</th>
    <th class=''>Comment</th>
    <th class=''>Example Value</th>
</tr>

<tr>
    <td>Location.Country</td>
    <td>String</td> 
    <td>Country deploying the nuclear device</td>
    <td><code>"USA"</code></td>
</tr>

<tr>
    <td>Location.Region</td>
    <td>String</td> 
    <td>Region where nuclear device was deployed</td>
    <td><code>"Alamogordo"</code></td>
</tr>

<tr>
    <td>Data.Source</td>
    <td>String</td> 
    <td>Source the reported the explosion event</td>
    <td><code>"DOE"</code></td>
</tr>

<tr>
    <td>Location.Cordinates.Latitude</td>
    <td>Float</td> 
    <td>Latitude position</td>
    <td><code>32.54</code></td>
</tr>

<tr>
    <td>Location.Cordinates.Longitude</td>
    <td>Float</td> 
    <td>Longitude position</td>
    <td><code>-105.57</code></td>
</tr>

<tr>
    <td>Data.Magnitude.Body</td>
    <td>Float</td> 
    <td>Body wave magnitude of explosion (mb)</td>
    <td><code>0.0</code></td>
</tr>

<tr>
    <td>Data.Magnitude.Surface</td>
    <td>Float</td> 
    <td>Surface wave magnitude of explosion (Ms)</td>
    <td><code>0.0</code></td>
</tr>

<tr>
    <td>Location.Cordinates.Depth</td>
    <td>Float</td> 
    <td>	Depth at detonation in Km (could be underground or above ground) -- please note that positive = depth (below ground), while negative = height (above ground)</td>
    <td><code>-0.1</code></td>
</tr>

<tr>
    <td>Data.Yeild.Lower</td>
    <td>Float</td> 
    <td>Explosion yield lower estimate in kilotons of TNT</td>
    <td><code>21.0</code></td>
</tr>

<tr>
    <td>Data.Yeild.Upper</td>
    <td>Float</td> 
    <td>Explosion yield upper estimate in kilotons of TNT</td>
    <td><code>21.0</code></td>
</tr>

<tr>
    <td>Data.Purpose</td>
    <td>String</td> 
    <td>Purpose of detonation: COMBAT (WWII bombs dropped over Japan), FMS (Soviet test, study phenomenon of nuclear explosion), ME (Military Exercise), PNE (Peaceful nuclear explosion), SAM (Soviet test, accidental mode/emergency), SSE (French/US tests - testing safety of nuclear weapons in case of accident), TRANSP (Transportation-storage purposes), WE (British, French, US, evaluate effects of nuclear detonation on various targets), WR (Weapons development program)</td>
    <td><code>"Wr"</code></td>
</tr>

<tr>
    <td>Data.Name</td>
    <td>String</td> 
    <td>Name of event or bomb</td>
    <td><code>"Trinity"</code></td>
</tr>

<tr>
    <td>Data.Type</td>
    <td>String</td> 
    <td>type - method of deployment -- ATMOSPH (Atmospheric), UG (underground), BALLOON (Balloon drop), AIRDROP (Airplane deployed), ROCKET (Rocket deployed), TOWER (deplyed at top of constructed tower), WATERSURFACE (on surface of body of water), BARGE (on barge boat), SURFACE (on surface or in shallow crater), UW (Underwater), SHAFT (Vertical Shaft underground), TUNNEL/GALLERY (Horizontal tunnel)</td>
    <td><code>"Tower"</code></td>
</tr>

<tr>
    <td>Date.Day</td>
    <td>Integer</td> 
    <td>Day of detonation</td>
    <td><code>16</code></td>
</tr>

<tr>
    <td>Date.Month</td>
    <td>Integer</td> 
    <td>Month of detonation</td>
    <td><code>7</code></td>
</tr>

<tr>
    <td>Date.Year</td>
    <td>Integer</td> 
    <td>Year of detonation</td>
    <td><code>1945</code></td>
</tr>

</table>