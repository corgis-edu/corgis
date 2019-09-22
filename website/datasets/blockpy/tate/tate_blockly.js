

var tate_INDEXES = [
    ["(None)", "(None)"],
    
    ["artist.gender", "artist.gender"] ,
    ["metadata.creation decade", "metadata.creation decade"] 
];

var tate_INDEX_VALUES = {
    "(None)": [],
    
    "artist.gender": [
        
        ["", ""] ,
        ["Female", "Female"] ,
        ["Male", "Male"] 
    ],
    "metadata.creation decade": [
        
        ["0", "0"] ,
        ["1540", "1540"] ,
        ["1560", "1560"] ,
        ["1570", "1570"] ,
        ["1590", "1590"] ,
        ["1600", "1600"] ,
        ["1610", "1610"] ,
        ["1620", "1620"] ,
        ["1630", "1630"] ,
        ["1640", "1640"] ,
        ["1650", "1650"] ,
        ["1660", "1660"] ,
        ["1670", "1670"] ,
        ["1680", "1680"] ,
        ["1690", "1690"] ,
        ["1700", "1700"] ,
        ["1710", "1710"] ,
        ["1720", "1720"] ,
        ["1730", "1730"] ,
        ["1740", "1740"] ,
        ["1750", "1750"] ,
        ["1760", "1760"] ,
        ["1770", "1770"] ,
        ["1780", "1780"] ,
        ["1790", "1790"] ,
        ["1800", "1800"] ,
        ["1810", "1810"] ,
        ["1820", "1820"] ,
        ["1830", "1830"] ,
        ["1840", "1840"] ,
        ["1850", "1850"] ,
        ["1860", "1860"] ,
        ["1870", "1870"] ,
        ["1880", "1880"] ,
        ["1890", "1890"] ,
        ["1900", "1900"] ,
        ["1910", "1910"] ,
        ["1920", "1920"] ,
        ["1930", "1930"] ,
        ["1940", "1940"] ,
        ["1950", "1950"] ,
        ["1960", "1960"] ,
        ["1970", "1970"] ,
        ["1980", "1980"] ,
        ["1990", "1990"] ,
        ["2000", "2000"] ,
        ["2010", "2010"] 
    ]
}

var tate_PROPERTIES = [
    ["artist.gender", "artist.gender"] ,
    ["artist.name", "artist.name"] ,
    ["artist.role", "artist.role"] ,
    ["data.medium", "data.medium"] ,
    ["data.thumbnail", "data.thumbnail"] ,
    ["data.title", "data.title"] ,
    ["data.url", "data.url"] ,
    ["dimensions.depth", "dimensions.depth"] ,
    ["dimensions.height", "dimensions.height"] ,
    ["dimensions.width", "dimensions.width"] ,
    ["metadata.acquisition date", "metadata.acquisition date"] ,
    ["metadata.creation decade", "metadata.creation decade"] ,
    ["metadata.creation year", "metadata.creation year"] ,
    ["metadata.credit", "metadata.credit"] ,
    ["artist.birth.location", "artist.birth.location"] ,
    ["artist.birth.year", "artist.birth.year"] ,
    ["artist.death.location", "artist.death.location"] ,
    ["artist.death.year", "artist.death.year"] 
]

Blockly.Blocks['tate_get'] = {
  init: function() {
    this.setColour(45);
    this.appendDummyInput('MAIN')
        .appendField("tate.get")
        .appendField(new Blockly.FieldDropdown(tate_PROPERTIES), "PROPERTY");
    this.appendDummyInput('SECOND')
        .appendField("filter")
        .appendField(new Blockly.FieldDropdown(tate_INDEXES, function(option) {
                        this.getSourceBlock().updateShape_(option);
                    }), "INDEX")
    this.updateShape_("(None)");
    this.setInputsInline(false);
    this.setOutput(true, "Array");
    this.setTooltip('Returns a list of tate data.');
  },
  mutationToDom: function() {
    var container = document.createElement('mutation');
    container.setAttribute('index', this.getFieldValue('INDEX'));
    container.setAttribute('index_value', this.getFieldValue('INDEX_VALUE'));
    container.setAttribute('module', "tate")
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
            inputGroup.appendField(new Blockly.FieldDropdown(tate_INDEX_VALUES[index]), 'INDEX_VALUE')
            if (index_value != undefined) {
                this.setFieldValue(index_value, 'INDEX_VALUE');
            } else {
                this.setFieldValue(tate_INDEX_VALUES[index][0][0], 'INDEX_VALUE');
            }
        }
    } catch (e) {
        inputGroup.appendField(new Blockly.FieldLabel("Reset to fix the blocks"));
        console.error(e);
    }
  }
};
Blockly.Python['tate_get'] = function(block) {
    Blockly.Python.definitions_['import_tate'] = 'import tate';
    var propertyValue = block.getFieldValue('PROPERTY') || '';
    var property = Blockly.Python.quote_(propertyValue);
    var index_unquoted = block.getFieldValue('INDEX');
    var index = Blockly.Python.quote_(index_unquoted || '');
    var index_value = "''";
    if (index_unquoted !== '(None)') {
        var iv = block.getFieldValue('INDEX_VALUE') || "";
        index_value = Blockly.Python.quote_(iv);
    }
    var code = 'tate.get('+property+',' +index+','+index_value+')';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

BlockMirrorTextToBlocks.prototype.MODULE_FUNCTION_SIGNATURES['tate'] = {
    "get": {
        custom: function(node, parent) {
            if (!node.args || node.args.length < 3 ||
                !node.args[0] || !node.args[1] || !node.args[2] ||
                node.args[0]._astname !== "Str" || node.args[1]._astname !== "Str" || node.args[2]._astname !== "Str"
            ) {
                throw new Error("Not the right function call.");
            }
            return BlockMirrorTextToBlocks.create_block("tate_get", null,
                {"PROPERTY": node.args[0].s.v},
                {}, {}, {"@INDEX": node.args[1].s.v,
                    "@INDEX_VALUE": node.args[2].s.v});
        }
    },
};

BlockMirrorBlockEditor.EXTRA_TOOLS['Data - tate'] = '<category name="Data - Tate" colour="45">'+
                    '<block type="tate_get"><mutation index="(None)" index_value=""></mutation></block>'+
                '</category>';