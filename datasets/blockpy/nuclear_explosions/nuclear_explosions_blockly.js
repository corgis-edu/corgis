

var nuclear_explosions_INDEXES = [
    ["(None)", "(None)"],
    
    ["Data.Magnitude.Body", "Data.Magnitude.Body"] 
];

var nuclear_explosions_INDEX_VALUES = {
    "(None)": [],
    
    "Data.Magnitude.Body": [
        
        ["0.0", "0.0"] ,
        ["2.5", "2.5"] ,
        ["2.6", "2.6"] ,
        ["3.3", "3.3"] ,
        ["3.4", "3.4"] ,
        ["3.5", "3.5"] ,
        ["3.8", "3.8"] ,
        ["3.9", "3.9"] ,
        ["4.0", "4.0"] ,
        ["4.1", "4.1"] ,
        ["4.2", "4.2"] ,
        ["4.3", "4.3"] ,
        ["4.4", "4.4"] ,
        ["4.5", "4.5"] ,
        ["4.6", "4.6"] ,
        ["4.7", "4.7"] ,
        ["4.8", "4.8"] ,
        ["4.9", "4.9"] ,
        ["5.0", "5.0"] ,
        ["5.1", "5.1"] ,
        ["5.2", "5.2"] ,
        ["5.3", "5.3"] ,
        ["5.4", "5.4"] ,
        ["5.5", "5.5"] ,
        ["5.6", "5.6"] ,
        ["5.7", "5.7"] ,
        ["5.8", "5.8"] ,
        ["5.9", "5.9"] ,
        ["6.0", "6.0"] ,
        ["6.1", "6.1"] ,
        ["6.2", "6.2"] ,
        ["6.3", "6.3"] ,
        ["6.4", "6.4"] ,
        ["6.5", "6.5"] ,
        ["6.6", "6.6"] ,
        ["6.7", "6.7"] ,
        ["6.8", "6.8"] ,
        ["6.9", "6.9"] ,
        ["7.0", "7.0"] ,
        ["7.1", "7.1"] ,
        ["7.2", "7.2"] ,
        ["7.3", "7.3"] ,
        ["7.4", "7.4"] 
    ]
}

var nuclear_explosions_PROPERTIES = [
    ["Location.Country", "Location.Country"] ,
    ["Location.Region", "Location.Region"] ,
    ["Data.Source", "Data.Source"] ,
    ["Location.Coordinates.Latitude", "Location.Coordinates.Latitude"] ,
    ["Location.Coordinates.Longitude", "Location.Coordinates.Longitude"] ,
    ["Data.Magnitude.Body", "Data.Magnitude.Body"] ,
    ["Data.Magnitude.Surface", "Data.Magnitude.Surface"] ,
    ["Location.Coordinates .Depth", "Location.Coordinates .Depth"] ,
    ["Data.Yield.Lower", "Data.Yield.Lower"] ,
    ["Data.Yield.Upper", "Data.Yield.Upper"] ,
    ["Data.Purpose", "Data.Purpose"] ,
    ["Data.Name", "Data.Name"] ,
    ["Data.Type", "Data.Type"] ,
    ["Date.Day", "Date.Day"] ,
    ["Date.Month", "Date.Month"] ,
    ["Date.Year", "Date.Year"] 
]

Blockly.Blocks['nuclear_explosions_get'] = {
  init: function() {
    this.setColour(45);
    this.appendDummyInput('MAIN')
        .appendField("nuclear_explosions.get")
        .appendField(new Blockly.FieldDropdown(nuclear_explosions_PROPERTIES), "PROPERTY");
    this.appendDummyInput('SECOND')
        .appendField("filter")
        .appendField(new Blockly.FieldDropdown(nuclear_explosions_INDEXES, function(option) {
                        this.getSourceBlock().updateShape_(option);
                    }), "INDEX")
    this.updateShape_("(None)");
    this.setInputsInline(false);
    this.setOutput(true, "Array");
    this.setTooltip('Returns a list of nuclear explosions data.');
  },
  mutationToDom: function() {
    var container = document.createElement('mutation');
    container.setAttribute('index', this.getFieldValue('INDEX'));
    container.setAttribute('index_value', this.getFieldValue('INDEX_VALUE'));
    container.setAttribute('module', "nuclear_explosions")
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
            inputGroup.appendField(new Blockly.FieldDropdown(nuclear_explosions_INDEX_VALUES[index]), 'INDEX_VALUE')
            if (index_value != undefined) {
                this.setFieldValue(index_value, 'INDEX_VALUE');
            } else {
                this.setFieldValue(nuclear_explosions_INDEX_VALUES[index][0][0], 'INDEX_VALUE');
            }
        }
    } catch (e) {
        inputGroup.appendField(new Blockly.FieldLabel("Reset to fix the blocks"));
        console.error(e);
    }
  }
};
Blockly.Python['nuclear_explosions_get'] = function(block) {
    Blockly.Python.definitions_['import_nuclear_explosions'] = 'import nuclear_explosions';
    var propertyValue = block.getFieldValue('PROPERTY') || '';
    var property = Blockly.Python.quote_(propertyValue);
    var index_unquoted = block.getFieldValue('INDEX');
    var index = Blockly.Python.quote_(index_unquoted || '');
    var index_value = "''";
    if (index_unquoted !== '(None)') {
        var iv = block.getFieldValue('INDEX_VALUE') || "";
        index_value = Blockly.Python.quote_(iv);
    }
    var code = 'nuclear_explosions.get('+property+',' +index+','+index_value+')';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

BlockMirrorTextToBlocks.prototype.MODULE_FUNCTION_SIGNATURES['nuclear_explosions'] = {
    "get": {
        custom: function(node, parent) {
            if (!node.args || node.args.length < 3 ||
                !node.args[0] || !node.args[1] || !node.args[2] ||
                node.args[0]._astname !== "Str" || node.args[1]._astname !== "Str" || node.args[2]._astname !== "Str"
            ) {
                throw new Error("Not the right function call.");
            }
            return BlockMirrorTextToBlocks.create_block("nuclear_explosions_get", null,
                {"PROPERTY": node.args[0].s.v},
                {}, {}, {"@INDEX": node.args[1].s.v,
                    "@INDEX_VALUE": node.args[2].s.v});
        }
    },
};

BlockMirrorBlockEditor.EXTRA_TOOLS['Data - nuclear explosions'] = '<category name="Data - Nuclear Explosions" colour="45">'+
                    '<block type="nuclear_explosions_get"><mutation index="(None)" index_value=""></mutation></block>'+
                '</category>';