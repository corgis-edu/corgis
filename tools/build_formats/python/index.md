---
permalink: /python/{{ dataset.name|snake_case }}/
---

# {{ dataset.name }} Python Library

<p class='lead'>From the CORGIS Dataset Project</p>

<span class='text-muted'>By {{ dataset.author }}</span><br>
<span class='text-muted'>Version {{ dataset.version }}, created {{ dataset.created}}</span><br>
<span class='text-muted'>Tags: {{ dataset.tags }}</span>

# Overview

{{ dataset.description|safe }}

<{{ dataset.data_source }}>

> {{ dataset.acknowledgment }}

# Explore Structure

<button>Explore</button>

# Downloads

Download all of the following files.

1. [{{ dataset.name|snake_case }}.py](../../datasets/python/{{ dataset.name|snake_case }}/{{ dataset.name|snake_case }}.py)
2. [{{ dataset.name|snake_case }}.data](../../datasets/python/{{ dataset.name|snake_case }}/{{ dataset.name|snake_case }}.data)

# Usage

# Documentation

```python
import {{ dataset.name|snake_case }}
{{ dataset.row | snake_case }} = {{ dataset.name|snake_case }}.get_{{ dataset.row | snake_case }}()
```
