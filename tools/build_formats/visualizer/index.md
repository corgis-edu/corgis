---
permalink: /visualizer/{{ dataset.name|snake_case }}/
style: dataset
extras: visualizer
---

<img class="img-thumbnail float-right"
     src="/images/datasets/{{ dataset.splash }}"
     alt="{{ dataset.name }} icon"
     role="presentation">

# {{ dataset.name.title() }} Visualizer

<p class='lead'>From the CORGIS Dataset Project</p>

<span class='text-muted'>By {{ dataset.author }}</span><br>
<span class='text-muted'>Version {{ dataset.version }}, created {{ dataset.created}}</span><br>
<span class='text-muted'>Tags: {{ dataset.tags }}</span>

# Overview

{{ dataset.description|safe }}

{% if dataset.data_source and dataset.data_source != "$MISSING_FIELD" %}
<{{ dataset.data_source }}>
{% endif %}

{% if dataset.acknowledgment %}
> {{ dataset.acknowledgment }}
{% endif %}

<script>
DATASET_NAME = "{{ dataset.name|snake_case }}";
DATASET_ROW = "{{ dataset.row }}";
</script>

{%  include 'visualizer_ui.html' %}

<script>
$(document).ready(function () {
    makeVisualizer();
});
</script>

<script src='../../datasets/visualizer/{{ dataset.name|snake_case }}/{{ dataset.name|snake_case }}.js'></script>
<script src='../../datasets/visualizer/{{ dataset.name|snake_case }}/{{ dataset.name|snake_case }}_bar.js'></script>