{% set library_name = dataset.name | snake_case %}
blockpy._IMPORTED_COMPLETE_DATASETS[{{ library_name|tojson }}] = Sk.ffi.remapToPy({{ dataset.nested_values|tojson(indent=2) }});