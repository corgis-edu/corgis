---
permalink: /
---


<div class="jumbotron jumbotron-fluid">
  <div class="container">
    <div class="row">
    <div class="col-md-12">
        <a href="{{ '/' | relative_url }}" class="site-logo" rel="home" title="{{ site.title }}">
            <img src="{{ site.logo | relative_url }}" class="site-logo-img animated fadeInDown" alt="{{ site.title }}">
        </a>
        <h1 class="display-4">CORGIS</h1>
        <p class="lead">The Collection of Really Great, Interesting, Situated Datasets</p>
        <span class='text-muted'>By Austin Cory Bart, Ryan Whitcomb, Jason Riddle, Omar Saleem, Dr. Eli Tilevich, Dr. Clifford A. Shaffer, Dr. Dennis Kafura</span>
    </div>
    </div>
  </div>
</div>

<div class="row">
{% for builder in site.data.builders %}
<div class="col border rounded m-2">
    <a href="{{ builder.link }}">
    <img class="img-fluid" src="images/icons/{{ builder.icon }}.png" alt="{{ builder.name }}">
    </a>
      <h5 class="">{{ builder.name}}</h5>
      <p class="">
        {{ builder.description }}<br>
        <a href="{{ builder.link }}"><small>View</small></a>
      </p>
</div>
{% endfor %}
</div>


