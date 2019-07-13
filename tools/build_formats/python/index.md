---
permalink: /python/{{ dataset.name|snake_case }}/
style: dataset
---

{% import 'dataset_page_components.html' as macros with context  %}

<img class="img-thumbnail float-right"
     src="../../datasets/python/{{ dataset.name|snake_case }}/{{ dataset.splash }}"
     alt="{{ dataset.name }} icon"
     role="presentation">

# {{ dataset.name }} Python Library

<p class='lead'>From the CORGIS Dataset Project</p>

<span class='text-muted'>By {{ dataset.author }}</span><br>
<span class='text-muted'>Version {{ dataset.version }}, created {{ dataset.created}}</span><br>
<span class='text-muted'>Tags: {{ dataset.tags }}</span>

# Overview

{{ dataset.description|safe }}

<{{ dataset.data_source }}>

{% if dataset.acknowledgment %}
> {{ dataset.acknowledgment }}
{% endif %}

# Explore Structure

Each row represents *{{ dataset.row_explanation }}*.

{{ macros.explorer(dataset) }}

# Downloads

Download all of the following files.

1. <a href='../../datasets/python/{{ dataset.name|snake_case }}/{{ dataset.name|snake_case }}.py' download>{{ dataset.name|snake_case }}.py <span class="fas fa-download"></span></a>
2. <a href='../../datasets/python/{{ dataset.name|snake_case }}/{{ dataset.name|snake_case }}.data' download>{{ dataset.name|snake_case }}.data <span class="fas fa-download"></span></a>

# Usage

```python
import {{ dataset.name|snake_case }}
{{ dataset.row | snake_case }} = {{ dataset.name|snake_case }}.get_{{ dataset.row | snake_case }}()
```

# Documentation

<dl>
    <dt><span>get_{{ dataset.row | snake_case }}()</span></dt>
    <dd>Returns a list of dictionaries representing {{ dataset.row }}.</dd>
</dl>
