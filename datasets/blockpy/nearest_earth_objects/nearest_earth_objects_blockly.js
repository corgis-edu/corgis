

var nearest_earth_objects_INDEXES = [
    ["(None)", "(None)"],
    
];

var nearest_earth_objects_INDEX_VALUES = {
    "(None)": [],
    
}

var nearest_earth_objects_PROPERTIES = [
    ["Identification.id", "Identification.id"] ,
    ["Identification.Name", "Identification.Name"] ,
    ["Identification.Year", "Identification.Year"] ,
    ["Physical.Absolute Magnitude", "Physical.Absolute Magnitude"] ,
    ["Physical.Size.Minimum Estimated Diameter", "Physical.Size.Minimum Estimated Diameter"] ,
    ["Physical.Size.Maximum Estimated Diameter", "Physical.Size.Maximum Estimated Diameter"] ,
    ["Physical.Hazardous", "Physical.Hazardous"] ,
    ["Approach.Miss Distance", "Approach.Miss Distance"] ,
    ["Approach.Relative Velocity", "Approach.Relative Velocity"] ,
    ["Orbital.Orbiting Body", "Orbital.Orbiting Body"] 
]

Blockly.Blocks['nearest_earth_objects_get'] = {
  init: function() {
    this.setColour(45);
    this.appendDummyInput('MAIN')
        .appendField("nearest_earth_objects.get")
        .appendField(new Blockly.FieldDropdown(nearest_earth_objects_PROPERTIES), "PROPERTY");
    this.appendDummyInput('SECOND')
        .appendField("filter")
        .appendField(new Blockly.FieldDropdown(nearest_earth_objects_INDEXES, function(option) {
                        this.getSourceBlock().updateShape_(option);
                    }), "INDEX")
    this.updateShape_("(None)");
    this.setInputsInline(false);
    this.setOutput(true, "Array");
    this.setTooltip('Returns a list of nearest earth objects data.');
  },
  mutationToDom: function() {
    var container = document.createElement('mutation');
    container.setAttribute('index', this.getFieldValue('INDEX'));
    container.setAttribute('index_value', this.getFieldValue('INDEX_VALUE'));
    container.setAttribute('module', "nearest_earth_objects")
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
            inputGroup.appendField(new Blockly.FieldDropdown(nearest_earth_objects_INDEX_VALUES[index]), 'INDEX_VALUE')
            if (index_value != undefined) {
                this.setFieldValue(index_value, 'INDEX_VALUE');
            } else {
                this.setFieldValue(nearest_earth_objects_INDEX_VALUES[index][0][0], 'INDEX_VALUE');
            }
        }
    } catch (e) {
        inputGroup.appendField(new Blockly.FieldLabel("Reset to fix the blocks"));
        console.error(e);
    }
  }
};
Blockly.Python['nearest_earth_objects_get'] = function(block) {
    Blockly.Python.definitions_['import_nearest_earth_objects'] = 'import nearest_earth_objects';
    var propertyValue = block.getFieldValue('PROPERTY') || '';
    var property = Blockly.Python.quote_(propertyValue);
    var index_unquoted = block.getFieldValue('INDEX');
    var index = Blockly.Python.quote_(index_unquoted || '');
    var index_value = "''";
    if (index_unquoted !== '(None)') {
        var iv = block.getFieldValue('INDEX_VALUE') || "";
        index_value = Blockly.Python.quote_(iv);
    }
    var code = 'nearest_earth_objects.get('+property+',' +index+','+index_value+')';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

BlockMirrorTextToBlocks.prototype.MODULE_FUNCTION_SIGNATURES['nearest_earth_objects'] = {
    "get": {
        custom: function(node, parent) {
            if (!node.args || node.args.length < 3 ||
                !node.args[0] || !node.args[1] || !node.args[2] ||
                node.args[0]._astname !== "Str" || node.args[1]._astname !== "Str" || node.args[2]._astname !== "Str"
            ) {
                throw new Error("Not the right function call.");
            }
            return BlockMirrorTextToBlocks.create_block("nearest_earth_objects_get", null,
                {"PROPERTY": node.args[0].s.v},
                {}, {}, {"@INDEX": node.args[1].s.v,
                    "@INDEX_VALUE": node.args[2].s.v});
        }
    },
};

BlockMirrorBlockEditor.EXTRA_TOOLS['Data - nearest earth objects'] = '<category name="Data - Nearest Earth Objects" colour="45">'+
                    '<block type="nearest_earth_objects_get"><mutation index="(None)" index_value=""></mutation></block>'+
                '</category>';