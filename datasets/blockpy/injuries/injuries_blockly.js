

var injuries_INDEXES = [
    ["(None)", "(None)"],
    
    ["year", "year"] ,
    ["address.state", "address.state"] 
];

var injuries_INDEX_VALUES = {
    "(None)": [],
    
    "year": [
        
        ["2002", "2002"] ,
        ["2003", "2003"] ,
        ["2004", "2004"] ,
        ["2005", "2005"] ,
        ["2006", "2006"] ,
        ["2007", "2007"] ,
        ["2008", "2008"] ,
        ["2009", "2009"] ,
        ["2010", "2010"] ,
        ["2011", "2011"] 
    ],
    "address.state": [
        
        ["AK", "AK"] ,
        ["AL", "AL"] ,
        ["AR", "AR"] ,
        ["AZ", "AZ"] ,
        ["CA", "CA"] ,
        ["CO", "CO"] ,
        ["CT", "CT"] ,
        ["DC", "DC"] ,
        ["DE", "DE"] ,
        ["FL", "FL"] ,
        ["GA", "GA"] ,
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
        ["PA", "PA"] ,
        ["RI", "RI"] ,
        ["SC", "SC"] ,
        ["SD", "SD"] ,
        ["TN", "TN"] ,
        ["TX", "TX"] ,
        ["UT", "UT"] ,
        ["VA", "VA"] ,
        ["VT", "VT"] ,
        ["WI", "WI"] ,
        ["WV", "WV"] 
    ]
}

var injuries_PROPERTIES = [
    ["year", "year"] ,
    ["address.city", "address.city"] ,
    ["address.state", "address.state"] ,
    ["address.street", "address.street"] ,
    ["address.zip", "address.zip"] ,
    ["business.name", "business.name"] ,
    ["business.second name", "business.second name"] ,
    ["industry.division", "industry.division"] ,
    ["industry.id", "industry.id"] ,
    ["industry.label", "industry.label"] ,
    ["industry.major_group", "industry.major_group"] ,
    ["statistics.days away", "statistics.days away"] ,
    ["statistics.days away/restricted/transfer", "statistics.days away/restricted/transfer"] ,
    ["statistics.total case rate", "statistics.total case rate"] 
]

Blockly.Blocks['injuries_get'] = {
  init: function() {
    this.setColour(45);
    this.appendDummyInput('MAIN')
        .appendField("injuries.get")
        .appendField(new Blockly.FieldDropdown(injuries_PROPERTIES), "PROPERTY");
    this.appendDummyInput('SECOND')
        .appendField("filter")
        .appendField(new Blockly.FieldDropdown(injuries_INDEXES, function(option) {
                        this.getSourceBlock().updateShape_(option);
                    }), "INDEX")
    this.updateShape_("(None)");
    this.setInputsInline(false);
    this.setOutput(true, "Array");
    this.setTooltip('Returns a list of injuries data.');
  },
  mutationToDom: function() {
    var container = document.createElement('mutation');
    container.setAttribute('index', this.getFieldValue('INDEX'));
    container.setAttribute('index_value', this.getFieldValue('INDEX_VALUE'));
    container.setAttribute('module', "injuries")
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
            inputGroup.appendField(new Blockly.FieldDropdown(injuries_INDEX_VALUES[index]), 'INDEX_VALUE')
            if (index_value != undefined) {
                this.setFieldValue(index_value, 'INDEX_VALUE');
            } else {
                this.setFieldValue(injuries_INDEX_VALUES[index][0][0], 'INDEX_VALUE');
            }
        }
    } catch (e) {
        inputGroup.appendField(new Blockly.FieldLabel("Reset to fix the blocks"));
        console.error(e);
    }
  }
};
Blockly.Python['injuries_get'] = function(block) {
    Blockly.Python.definitions_['import_injuries'] = 'import injuries';
    var propertyValue = block.getFieldValue('PROPERTY') || '';
    var property = Blockly.Python.quote_(propertyValue);
    var index_unquoted = block.getFieldValue('INDEX');
    var index = Blockly.Python.quote_(index_unquoted || '');
    var index_value = "''";
    if (index_unquoted !== '(None)') {
        var iv = block.getFieldValue('INDEX_VALUE') || "";
        index_value = Blockly.Python.quote_(iv);
    }
    var code = 'injuries.get('+property+',' +index+','+index_value+')';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

BlockMirrorTextToBlocks.prototype.MODULE_FUNCTION_SIGNATURES['injuries'] = {
    "get": {
        custom: function(node, parent) {
            if (!node.args || node.args.length < 3 ||
                !node.args[0] || !node.args[1] || !node.args[2] ||
                node.args[0]._astname !== "Str" || node.args[1]._astname !== "Str" || node.args[2]._astname !== "Str"
            ) {
                throw new Error("Not the right function call.");
            }
            return BlockMirrorTextToBlocks.create_block("injuries_get", null,
                {"PROPERTY": node.args[0].s.v},
                {}, {}, {"@INDEX": node.args[1].s.v,
                    "@INDEX_VALUE": node.args[2].s.v});
        }
    },
};

BlockMirrorBlockEditor.EXTRA_TOOLS['Data - injuries'] = '<category name="Data - Injuries" colour="45">'+
                    '<block type="injuries_get"><mutation index="(None)" index_value=""></mutation></block>'+
                '</category>';