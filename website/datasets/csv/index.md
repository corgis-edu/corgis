---
permalink: /csv/
searchable: true
---

<script>
let searcher = lunr(function() {
    this.field('name', 10);
    this.field('tags', 100);
    this.field('body');
    this.field('description'); 
    this.ref('name');
});
</script>

<a href="{{ '/' | relative_url }}" class="site-logo" rel="home" title="{{ site.title }}">
    <img src="{{ site.logo | relative_url }}" class="site-logo-img animated fadeInDown" alt="{{ site.title }}">
</a>

# CSV Datasets

<p class='lead'>CORGIS: The Collection of Really Great, Interesting, Situated Datasets</p>

<span class='text-muted'>By Austin Cory Bart, Ryan Whitcomb, Jason Riddle, Omar Saleem, Dr. Eli Tilevich, Dr. Clifford A. Shaffer, Dr. Dennis Kafura</span>

<hr>

{% include search_form.html %}

<hr>

<div class="row">
{% assign sorted_builders = site.data.csv | map: "dataset" | sort_natural %}
{% for teaser in sorted_builders %}
{% assign teaser_path =  "teaser/" | append: teaser | append: "/" | append: teaser | append: ".html" %}
{% include {{ teaser_path }} %}
{% endfor %}
</div>

<hr>