{% set library_name = dataset.name | snake_case %}

var {{library_name}}_INDEXES = [
    ["(None)", "(None)"],
    {% for index in indexed_values %}
    [{{ index.name | tojson }}, {{ index.name | tojson }}] {{ ',' if not loop.last -}}
    {% endfor %}
];

var {{library_name}}_INDEX_VALUES = {
    "(None)": [],
    {% for index, values in indexed_values.items() %}
    {{ index.name | tojson }}: [
        {% for value in values|unique|sort %}
        [{{ value | string|tojson }}, {{ value | string|tojson }}] {{ ',' if not loop.last -}}
        {% endfor %}
    ]{{ ',' if not loop.last -}}
    {% endfor %}
}

var {{library_name}}_PROPERTIES = [
{%- for prop in dataset.properties %}
    [{{ prop.name | tojson }}, {{ prop.name | tojson }}] {{ ',' if not loop.last -}}
{% endfor %}
]

Blockly.Blocks['{{ library_name }}_get'] = {
  init: function() {
    this.setColour(45);
    this.appendDummyInput('MAIN')
        .appendField("{{ library_name }}.get")
        .appendField(new Blockly.FieldDropdown({{library_name}}_PROPERTIES), "PROPERTY");
    this.appendDummyInput('SECOND')
        .appendField("filter")
        .appendField(new Blockly.FieldDropdown({{library_name}}_INDEXES, function(option) {
                        this.getSourceBlock().updateShape_(option);
                    }), "INDEX")
    this.updateShape_("(None)");
    this.setInputsInline(false);
    this.setOutput(true, "Array");
    this.setTooltip('Returns a list of {{ dataset.name }} data.');
  },
  mutationToDom: function() {
    var container = document.createElement('mutation');
    container.setAttribute('index', this.getFieldValue('INDEX'));
    container.setAttribute('index_value', this.getFieldValue('INDEX_VALUE'));
    container.setAttribute('module', "{{ library_name }}")
    return container;
  },
  domToMutation: function(xmlElement) {
    var index = xmlElement.getAttribute('index');
    this.setFieldValue(index, 'INDEX');
    var index_value = xmlElement.getAttribute('index_value');
    this.updateShape_(index, index_value);
  },
  updateShape_: function(index, index_value) {
    var inputGroup = this.getInput('SECOND')
    var fieldExists = this.getField('INDEX_VALUE');
    if (fieldExists) {
        inputGroup.removeField('INDEX_VALUE');
    }
    try {
        if (index != undefined && index != '(None)') {
            inputGroup.appendField(new Blockly.FieldDropdown({{library_name}}_INDEX_VALUES[index]), 'INDEX_VALUE')
            if (index_value != undefined) {
                this.setFieldValue(index_value, 'INDEX_VALUE');
            } else {
                this.setFieldValue({{library_name}}_INDEX_VALUES[index][0][0], 'INDEX_VALUE');
            }
        }
    } catch (e) {
        inputGroup.appendField(new Blockly.FieldLabel("Reset to fix the blocks"));
        console.error(e);
    }
  }
};
Blockly.Python['{{ library_name }}_get'] = function(block) {
    Blockly.Python.definitions_['import_{{ library_name }}'] = 'import {{ library_name }}';
    var propertyValue = block.getFieldValue('PROPERTY') || '';
    var property = Blockly.Python.quote_(propertyValue);
    var index_unquoted = block.getFieldValue('INDEX');
    var index = Blockly.Python.quote_(index_unquoted || '');
    var index_value = "''";
    if (index_unquoted !== '(None)') {
        var iv = block.getFieldValue('INDEX_VALUE') || "";
        index_value = Blockly.Python.quote_(iv);
    }
    var code = '{{ library_name }}.get('+property+',' +index+','+index_value+')';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

BlockMirrorTextToBlocks.prototype.MODULE_FUNCTION_SIGNATURES['{{ library_name }}'] = {
    "get": {
        custom: function(node, parent) {
            if (!node.args || node.args.length < 3 ||
                !node.args[0] || !node.args[1] || !node.args[2] ||
                node.args[0]._astname !== "Str" || node.args[1]._astname !== "Str" || node.args[2]._astname !== "Str"
            ) {
                throw new Error("Not the right function call.");
            }
            return BlockMirrorTextToBlocks.create_block("{{ library_name }}_get", null,
                {"PROPERTY": node.args[0].s.v},
                {}, {}, {"@INDEX": node.args[1].s.v,
                    "@INDEX_VALUE": node.args[2].s.v});
        }
    },
};

BlockMirrorBlockEditor.EXTRA_TOOLS['Data - {{ dataset.name }}'] = '<category name="Data - {{ dataset.name.title() }}" colour="45">'+
                    '<block type="{{ library_name }}_get"><mutation index="(None)" index_value=""></mutation></block>'+
                '</category>';