{% set library_name = dataset.name | snake_case %}
blockpy._IMPORTED_DATASETS[{{ library_name|tojson }}] = {{ data | tojson(indent=2) }};