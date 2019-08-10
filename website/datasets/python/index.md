---
permalink: /python/
---

<script>

let searcher = lunr(function() {
    this.field('name', 10);
    this.field('tags', 100);
    this.field('body');
    this.field('description'); 
    this.ref('name');
});
$(document).ready(function() {
    $("#search-bar").on('input propertychange', function() {
        let needle = $(this).val();
        if (needle === "") {
            $(".dataset-card").show();
        } else {
            let results = searcher.search(needle);
            $(".dataset-card").hide();
            results.forEach(function (data) {
                $("#"+data.ref).show();
            });
        }
    });
});
</script>

<a href="{{ '/' | relative_url }}" class="site-logo" rel="home" title="{{ site.title }}">
    <img src="{{ site.logo | relative_url }}" class="site-logo-img animated fadeInDown" alt="{{ site.title }}">
</a>

# CORGIS

<p class='lead'>The Collection of Really Great, Interesting, Situated Datasets</p>

<span class='text-muted'>By Austin Cory Bart, Ryan Whitcomb, Jason Riddle, Omar Saleem, Dr. Eli Tilevich, Dr. Clifford A. Shaffer, Dr. Dennis Kafura</span>

<hr>

<form>
<div class="form-group row search-bar">
    <label for="search-bar" class="col-sm-1 col-form-label">Search:</label>
    <div class="col-sm-11">
        <input type="text" class="form-control" id="search-bar" placeholder="Keyword or phrase">
    </div>
</div>
</form>

<hr>

<div class="row">
{% for teaser in site.data.python %}
{% assign teaser_path =  "teaser/" | append: teaser.dataset | append: "/" | append: teaser.dataset | append: ".html" %}
{% include {{ teaser_path }} %}
{% endfor %}
</div>

<hr>