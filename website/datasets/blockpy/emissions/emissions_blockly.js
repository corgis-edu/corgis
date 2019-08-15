

var emissions_INDEXES = [
    ["(None)", "(None)"],
    
];

var emissions_INDEX_VALUES = {
    "(None)": [],
    
}

var emissions_PROPERTIES = [
    ["Country", "Country"] ,
    ["Year", "Year"] ,
    ["Emissions.Type.CO2", "Emissions.Type.CO2"] ,
    ["Emissions.Type.N2O", "Emissions.Type.N2O"] ,
    ["Emissions.Type.CH4", "Emissions.Type.CH4"] ,
    ["Emissions.Sector.Power Industry", "Emissions.Sector.Power Industry"] ,
    ["Emissions.Sector.Buildings", "Emissions.Sector.Buildings"] ,
    ["Emissions.Sector.Transport", "Emissions.Sector.Transport"] ,
    ["Emissions.Sector.Other Industry", "Emissions.Sector.Other Industry"] ,
    ["Emissions.Sector.Other sectors", "Emissions.Sector.Other sectors"] ,
    ["Ratio.Per GDP", "Ratio.Per GDP"] ,
    ["Ratio.Per Capita", "Ratio.Per Capita"] 
]

Blockly.Blocks['emissions_get'] = {
  init: function() {
    this.setColour(45);
    this.appendDummyInput('MAIN')
        .appendField("emissions.get")
        .appendField(new Blockly.FieldDropdown(emissions_PROPERTIES), "PROPERTY");
    this.appendDummyInput('SECOND')
        .appendField("filter")
        .appendField(new Blockly.FieldDropdown(emissions_INDEXES, function(option) {
                        this.getSourceBlock().updateShape_(option);
                    }), "INDEX")
    this.updateShape_("(None)");
    this.setInputsInline(false);
    this.setOutput(true, "Array");
    this.setTooltip('Returns a list of emissions data.');
  },
  mutationToDom: function() {
    var container = document.createElement('mutation');
    container.setAttribute('index', this.getFieldValue('INDEX'));
    container.setAttribute('index_value', this.getFieldValue('INDEX_VALUE'));
    container.setAttribute('module', "emissions")
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
    if (index != undefined && index != '(None)') {
        inputGroup.appendField(new Blockly.FieldDropdown(emissions_INDEX_VALUES[index]), 'INDEX_VALUE')
        if (index_value != undefined) {
            this.setFieldValue(index_value, 'INDEX_VALUE');
        } else {
            this.setFieldValue(emissions_INDEX_VALUES[index][0][0], 'INDEX_VALUE');
        }
    }    
  }
};
Blockly.Python['emissions_get'] = function(block) {
    Blockly.Python.definitions_['import_emissions'] = 'import emissions';
    var propertyValue = block.getFieldValue('PROPERTY') || '';
    var property = Blockly.Python.quote_(propertyValue);
    var index_unquoted = block.getFieldValue('INDEX');
    var index = Blockly.Python.quote_(index_unquoted || '');
    var index_value = "''";
    if (index_unquoted !== '(None)') {
        var iv = block.getFieldValue('INDEX_VALUE') || "";
        index_value = Blockly.Python.quote_(iv);
    }
    var code = 'emissions.get('+property+',' +index+','+index_value+')';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

BlockMirrorTextToBlocks.prototype.MODULE_FUNCTION_SIGNATURES['emissions'] = {
    "get": {
        custom: function(node, parent) {
            if (!node.args || node.args.length < 3 ||
                !node.args[0] || !node.args[1] || !node.args[2] ||
                node.args[0]._astname !== "Str" || node.args[1]._astname !== "Str" || node.args[2]._astname !== "Str"
            ) {
                throw new Error("Not the right function call.");
            }
            return BlockMirrorTextToBlocks.create_block("emissions_get", null,
                {"PROPERTY": node.args[0].s.v},
                {}, {}, {"@INDEX": node.args[1].s.v,
                    "@INDEX_VALUE": node.args[2].s.v});
        }
    },
};

BlockMirrorBlockEditor.EXTRA_TOOLS['Data - emissions'] = '<category name="Data - emissions" colour="45">'+
                    '<block type="emissions_get"><mutation index="(None)" index_value=""></mutation></block>'+
                '</category>';