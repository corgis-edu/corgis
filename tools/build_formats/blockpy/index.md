---
permalink: /blockpy/{{ dataset.name|snake_case }}/
style: dataset
---

<img class="img-thumbnail float-right"
     src="/images/datasets/{{ dataset.splash }}"
     alt="{{ dataset.name }} icon"
     role="presentation">

# {{ dataset.name|title }} BlockPy Library

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

# Key Descriptions
    
<table class='table table-condensed table-striped table-bordered table-hover'>
<tr>
    <th class=''>Key</th>
    <th class=''>List of...</th>
    <th class=''>Comment</th>
    <th class=''>Example Value</th>
</tr>
{% for name, item in dataset.as_dictionary_of_lists(LANGUAGE_TYPE_NAMES).items() %}
<tr>
    <td>{{ item['name'] }}</td>
    <td>{{ item['type'] }}</td> 
    <td>{{ item['comment'] }}</td>
    <td>{{ item['data'][0]|convert_example_value}}</td>
</tr>
{% endfor %}
</table>
