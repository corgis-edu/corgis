

var electricity_INDEXES = [
    ["(None)", "(None)"],
    
    ["Utility.State", "Utility.State"] 
];

var electricity_INDEX_VALUES = {
    "(None)": [],
    
    "Utility.State": [
        
        ["", ""] ,
        ["AK", "AK"] ,
        ["AL", "AL"] ,
        ["AR", "AR"] ,
        ["AZ", "AZ"] ,
        ["CA", "CA"] ,
        ["CN", "CN"] ,
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
        ["OR", "OR"] ,
        ["PA", "PA"] ,
        ["RI", "RI"] ,
        ["SC", "SC"] ,
        ["SD", "SD"] ,
        ["TN", "TN"] ,
        ["TX", "TX"] ,
        ["UT", "UT"] ,
        ["VA", "VA"] ,
        ["VT", "VT"] ,
        ["WA", "WA"] ,
        ["WI", "WI"] ,
        ["WV", "WV"] ,
        ["WY", "WY"] 
    ]
}

var electricity_PROPERTIES = [
    ["Utility.Number", "Utility.Number"] ,
    ["Utility.Name", "Utility.Name"] ,
    ["Utility.State", "Utility.State"] ,
    ["Utility.Type", "Utility.Type"] ,
    ["Demand.Summer Peak", "Demand.Summer Peak"] ,
    ["Demand.Winter Peak", "Demand.Winter Peak"] ,
    ["Sources.Generation", "Sources.Generation"] ,
    ["Sources.Purchased", "Sources.Purchased"] ,
    ["Sources.Other", "Sources.Other"] ,
    ["Sources.Total", "Sources.Total"] ,
    ["Uses.Retail", "Uses.Retail"] ,
    ["Uses.Resale", "Uses.Resale"] ,
    ["Uses.No Charge", "Uses.No Charge"] ,
    ["Uses.Consumed", "Uses.Consumed"] ,
    ["Uses.Losses", "Uses.Losses"] ,
    ["Uses.Total", "Uses.Total"] ,
    ["Revenues.Retail", "Revenues.Retail"] ,
    ["Revenue.Delivery", "Revenue.Delivery"] ,
    ["Revenue.Resale", "Revenue.Resale"] ,
    ["Revenue.Adjustments", "Revenue.Adjustments"] ,
    ["Revenue.Transmission", "Revenue.Transmission"] ,
    ["Revenue.Other", "Revenue.Other"] ,
    ["Revenue.Total", "Revenue.Total"] ,
    ["Retail.Residential.Revenue", "Retail.Residential.Revenue"] ,
    ["Retail.Residential.Sales", "Retail.Residential.Sales"] ,
    ["Retail.Residential.Customers", "Retail.Residential.Customers"] ,
    ["Retail.Commercial.Revenue", "Retail.Commercial.Revenue"] ,
    ["Retail.Commercial.Sales", "Retail.Commercial.Sales"] ,
    ["Retail.Commercial.Customers", "Retail.Commercial.Customers"] ,
    ["Retail.Industrial.Revenue", "Retail.Industrial.Revenue"] ,
    ["Retail.Industrial.Sales", "Retail.Industrial.Sales"] ,
    ["Retail.Industrial.Customers", "Retail.Industrial.Customers"] ,
    ["Retail.Transportation.Revenue", "Retail.Transportation.Revenue"] ,
    ["Retail.Transportation.Sales", "Retail.Transportation.Sales"] ,
    ["Retail.Transportation.Customers", "Retail.Transportation.Customers"] ,
    ["Retail.Total.Revenue", "Retail.Total.Revenue"] ,
    ["Retail.Total.Sales", "Retail.Total.Sales"] ,
    ["Retail.Total.Customers", "Retail.Total.Customers"] 
]

Blockly.Blocks['electricity_get'] = {
  init: function() {
    this.setColour(45);
    this.appendDummyInput('MAIN')
        .appendField("electricity.get")
        .appendField(new Blockly.FieldDropdown(electricity_PROPERTIES), "PROPERTY");
    this.appendDummyInput('SECOND')
        .appendField("filter")
        .appendField(new Blockly.FieldDropdown(electricity_INDEXES, function(option) {
                        this.getSourceBlock().updateShape_(option);
                    }), "INDEX")
    this.updateShape_("(None)");
    this.setInputsInline(false);
    this.setOutput(true, "Array");
    this.setTooltip('Returns a list of electricity data.');
  },
  mutationToDom: function() {
    var container = document.createElement('mutation');
    container.setAttribute('index', this.getFieldValue('INDEX'));
    container.setAttribute('index_value', this.getFieldValue('INDEX_VALUE'));
    container.setAttribute('module', "electricity")
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
            inputGroup.appendField(new Blockly.FieldDropdown(electricity_INDEX_VALUES[index]), 'INDEX_VALUE')
            if (index_value != undefined) {
                this.setFieldValue(index_value, 'INDEX_VALUE');
            } else {
                this.setFieldValue(electricity_INDEX_VALUES[index][0][0], 'INDEX_VALUE');
            }
        }
    } catch (e) {
        inputGroup.appendField(new Blockly.FieldLabel("Reset to fix the blocks"));
        console.error(e);
    }
  }
};
Blockly.Python['electricity_get'] = function(block) {
    Blockly.Python.definitions_['import_electricity'] = 'import electricity';
    var propertyValue = block.getFieldValue('PROPERTY') || '';
    var property = Blockly.Python.quote_(propertyValue);
    var index_unquoted = block.getFieldValue('INDEX');
    var index = Blockly.Python.quote_(index_unquoted || '');
    var index_value = "''";
    if (index_unquoted !== '(None)') {
        var iv = block.getFieldValue('INDEX_VALUE') || "";
        index_value = Blockly.Python.quote_(iv);
    }
    var code = 'electricity.get('+property+',' +index+','+index_value+')';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

BlockMirrorTextToBlocks.prototype.MODULE_FUNCTION_SIGNATURES['electricity'] = {
    "get": {
        custom: function(node, parent) {
            if (!node.args || node.args.length < 3 ||
                !node.args[0] || !node.args[1] || !node.args[2] ||
                node.args[0]._astname !== "Str" || node.args[1]._astname !== "Str" || node.args[2]._astname !== "Str"
            ) {
                throw new Error("Not the right function call.");
            }
            return BlockMirrorTextToBlocks.create_block("electricity_get", null,
                {"PROPERTY": node.args[0].s.v},
                {}, {}, {"@INDEX": node.args[1].s.v,
                    "@INDEX_VALUE": node.args[2].s.v});
        }
    },
};

BlockMirrorBlockEditor.EXTRA_TOOLS['Data - electricity'] = '<category name="Data - Electricity" colour="45">'+
                    '<block type="electricity_get"><mutation index="(None)" index_value=""></mutation></block>'+
                '</category>';