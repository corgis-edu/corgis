

var real_estate_INDEXES = [
    ["(None)", "(None)"],
    
    ["location.address.state", "location.address.state"] 
];

var real_estate_INDEX_VALUES = {
    "(None)": [],
    
    "location.address.state": [
        
        ["AK", "AK"] ,
        ["AL", "AL"] ,
        ["AR", "AR"] ,
        ["AS", "AS"] ,
        ["AZ", "AZ"] ,
        ["CA", "CA"] ,
        ["CO", "CO"] ,
        ["CT", "CT"] ,
        ["DC", "DC"] ,
        ["DE", "DE"] ,
        ["FL", "FL"] ,
        ["GA", "GA"] ,
        ["GU", "GU"] ,
        ["HI", "HI"] ,
        ["IA", "IA"] ,
        ["ID", "ID"] ,
        ["IL", "IL"] ,
        ["IN", "IN"] ,
        ["KS", "KS"] ,
        ["KY", "KY"] ,
        ["LA", "LA"] ,
        ["MA", "MA"] ,
        ["MD", "MD"] ,
        ["ME", "ME"] ,
        ["MI", "MI"] ,
        ["MN", "MN"] ,
        ["MO", "MO"] ,
        ["MP", "MP"] ,
        ["MS", "MS"] ,
        ["MT", "MT"] ,
        ["NC", "NC"] ,
        ["ND", "ND"] ,
        ["NE", "NE"] ,
        ["NH", "NH"] ,
        ["NJ", "NJ"] ,
        ["NM", "NM"] ,
        ["NV", "NV"] ,
        ["NY", "NY"] ,
        ["OH", "OH"] ,
        ["OK", "OK"] ,
        ["OR", "OR"] ,
        ["PA", "PA"] ,
        ["PR", "PR"] ,
        ["RI", "RI"] ,
        ["SC", "SC"] ,
        ["SD", "SD"] ,
        ["TN", "TN"] ,
        ["TX", "TX"] ,
        ["UT", "UT"] ,
        ["VA", "VA"] ,
        ["VI", "VI"] ,
        ["VT", "VT"] ,
        ["WA", "WA"] ,
        ["WI", "WI"] ,
        ["WV", "WV"] ,
        ["WY", "WY"] 
    ]
}

var real_estate_PROPERTIES = [
    ["data.date", "data.date"] ,
    ["data.owned or leased", "data.owned or leased"] ,
    ["data.parking spaces", "data.parking spaces"] ,
    ["data.status", "data.status"] ,
    ["data.type", "data.type"] ,
    ["location.congressional district", "location.congressional district"] ,
    ["location.id", "location.id"] ,
    ["location.region id", "location.region id"] ,
    ["data.disabilities.ADA Accessible", "data.disabilities.ADA Accessible"] ,
    ["data.disabilities.ansi usable", "data.disabilities.ansi usable"] ,
    ["location.address.city", "location.address.city"] ,
    ["location.address.county", "location.address.county"] ,
    ["location.address.line 1", "location.address.line 1"] ,
    ["location.address.state", "location.address.state"] ,
    ["location.address.zip", "location.address.zip"] 
]

Blockly.Blocks['real_estate_get'] = {
  init: function() {
    this.setColour(45);
    this.appendDummyInput('MAIN')
        .appendField("real_estate.get")
        .appendField(new Blockly.FieldDropdown(real_estate_PROPERTIES), "PROPERTY");
    this.appendDummyInput('SECOND')
        .appendField("filter")
        .appendField(new Blockly.FieldDropdown(real_estate_INDEXES, function(option) {
                        this.getSourceBlock().updateShape_(option);
                    }), "INDEX")
    this.updateShape_("(None)");
    this.setInputsInline(false);
    this.setOutput(true, "Array");
    this.setTooltip('Returns a list of real estate data.');
  },
  mutationToDom: function() {
    var container = document.createElement('mutation');
    container.setAttribute('index', this.getFieldValue('INDEX'));
    container.setAttribute('index_value', this.getFieldValue('INDEX_VALUE'));
    container.setAttribute('module', "real_estate")
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
            inputGroup.appendField(new Blockly.FieldDropdown(real_estate_INDEX_VALUES[index]), 'INDEX_VALUE')
            if (index_value != undefined) {
                this.setFieldValue(index_value, 'INDEX_VALUE');
            } else {
                this.setFieldValue(real_estate_INDEX_VALUES[index][0][0], 'INDEX_VALUE');
            }
        }
    } catch (e) {
        inputGroup.appendField(new Blockly.FieldLabel("Reset to fix the blocks"));
        console.error(e);
    }
  }
};
Blockly.Python['real_estate_get'] = function(block) {
    Blockly.Python.definitions_['import_real_estate'] = 'import real_estate';
    var propertyValue = block.getFieldValue('PROPERTY') || '';
    var property = Blockly.Python.quote_(propertyValue);
    var index_unquoted = block.getFieldValue('INDEX');
    var index = Blockly.Python.quote_(index_unquoted || '');
    var index_value = "''";
    if (index_unquoted !== '(None)') {
        var iv = block.getFieldValue('INDEX_VALUE') || "";
        index_value = Blockly.Python.quote_(iv);
    }
    var code = 'real_estate.get('+property+',' +index+','+index_value+')';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

BlockMirrorTextToBlocks.prototype.MODULE_FUNCTION_SIGNATURES['real_estate'] = {
    "get": {
        custom: function(node, parent) {
            if (!node.args || node.args.length < 3 ||
                !node.args[0] || !node.args[1] || !node.args[2] ||
                node.args[0]._astname !== "Str" || node.args[1]._astname !== "Str" || node.args[2]._astname !== "Str"
            ) {
                throw new Error("Not the right function call.");
            }
            return BlockMirrorTextToBlocks.create_block("real_estate_get", null,
                {"PROPERTY": node.args[0].s.v},
                {}, {}, {"@INDEX": node.args[1].s.v,
                    "@INDEX_VALUE": node.args[2].s.v});
        }
    },
};

BlockMirrorBlockEditor.EXTRA_TOOLS['Data - real estate'] = '<category name="Data - Real Estate" colour="45">'+
                    '<block type="real_estate_get"><mutation index="(None)" index_value=""></mutation></block>'+
                '</category>';