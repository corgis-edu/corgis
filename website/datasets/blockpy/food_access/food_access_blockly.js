

var food_access_INDEXES = [
    ["(None)", "(None)"],
    
    ["State", "State"] 
];

var food_access_INDEX_VALUES = {
    "(None)": [],
    
    "State": [
        
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

var food_access_PROPERTIES = [
    ["County", "County"] ,
    ["Population", "Population"] ,
    ["State", "State"] ,
    ["Housing Data.Residing in Group Quarters", "Housing Data.Residing in Group Quarters"] ,
    ["Housing Data.Rural Housing Percentage", "Housing Data.Rural Housing Percentage"] ,
    ["Housing Data.Total Housing Units", "Housing Data.Total Housing Units"] ,
    ["Housing Data.Urban Housing Percentage", "Housing Data.Urban Housing Percentage"] ,
    ["Vehicle Access.1 Mile", "Vehicle Access.1 Mile"] ,
    ["Vehicle Access.1/2 Mile", "Vehicle Access.1/2 Mile"] ,
    ["Vehicle Access.10 Miles", "Vehicle Access.10 Miles"] ,
    ["Vehicle Access.20 Miles", "Vehicle Access.20 Miles"] ,
    ["Low Access Numbers.Children.1 Mile", "Low Access Numbers.Children.1 Mile"] ,
    ["Low Access Numbers.Children.1/2 Mile", "Low Access Numbers.Children.1/2 Mile"] ,
    ["Low Access Numbers.Children.10 Miles", "Low Access Numbers.Children.10 Miles"] ,
    ["Low Access Numbers.Children.20 Miles", "Low Access Numbers.Children.20 Miles"] ,
    ["Low Access Numbers.Low Income People.1 Mile", "Low Access Numbers.Low Income People.1 Mile"] ,
    ["Low Access Numbers.Low Income People.1/2 Mile", "Low Access Numbers.Low Income People.1/2 Mile"] ,
    ["Low Access Numbers.Low Income People.10 Miles", "Low Access Numbers.Low Income People.10 Miles"] ,
    ["Low Access Numbers.Low Income People.20 Miles", "Low Access Numbers.Low Income People.20 Miles"] ,
    ["Low Access Numbers.People.1 Mile", "Low Access Numbers.People.1 Mile"] ,
    ["Low Access Numbers.People.1/2 Mile", "Low Access Numbers.People.1/2 Mile"] ,
    ["Low Access Numbers.People.10 Miles", "Low Access Numbers.People.10 Miles"] ,
    ["Low Access Numbers.People.20 Miles", "Low Access Numbers.People.20 Miles"] ,
    ["Low Access Numbers.Seniors.1 Mile", "Low Access Numbers.Seniors.1 Mile"] ,
    ["Low Access Numbers.Seniors.1/2 Mile", "Low Access Numbers.Seniors.1/2 Mile"] ,
    ["Low Access Numbers.Seniors.10 Miles", "Low Access Numbers.Seniors.10 Miles"] ,
    ["Low Access Numbers.Seniors.20 Miles", "Low Access Numbers.Seniors.20 Miles"] ,
    ["Low Access Percents.Low Access Only.1 and 20 Miles", "Low Access Percents.Low Access Only.1 and 20 Miles"] ,
    ["Low Access Percents.Low Access Only.1/2 and 10 Miles", "Low Access Percents.Low Access Only.1/2 and 10 Miles"] ,
    ["Low Access Percents.Low Income and Low Access.1 and 20 Miles", "Low Access Percents.Low Income and Low Access.1 and 20 Miles"] ,
    ["Low Access Percents.Low Income and Low Access.1/2 and 10 Miles", "Low Access Percents.Low Income and Low Access.1/2 and 10 Miles"] 
]

Blockly.Blocks['food_access_get'] = {
  init: function() {
    this.setColour(45);
    this.appendDummyInput('MAIN')
        .appendField("food_access.get")
        .appendField(new Blockly.FieldDropdown(food_access_PROPERTIES), "PROPERTY");
    this.appendDummyInput('SECOND')
        .appendField("filter")
        .appendField(new Blockly.FieldDropdown(food_access_INDEXES, function(option) {
                        this.getSourceBlock().updateShape_(option);
                    }), "INDEX")
    this.updateShape_("(None)");
    this.setInputsInline(false);
    this.setOutput(true, "Array");
    this.setTooltip('Returns a list of food access data.');
  },
  mutationToDom: function() {
    var container = document.createElement('mutation');
    container.setAttribute('index', this.getFieldValue('INDEX'));
    container.setAttribute('index_value', this.getFieldValue('INDEX_VALUE'));
    container.setAttribute('module', "food_access")
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
            inputGroup.appendField(new Blockly.FieldDropdown(food_access_INDEX_VALUES[index]), 'INDEX_VALUE')
            if (index_value != undefined) {
                this.setFieldValue(index_value, 'INDEX_VALUE');
            } else {
                this.setFieldValue(food_access_INDEX_VALUES[index][0][0], 'INDEX_VALUE');
            }
        }
    } catch (e) {
        inputGroup.appendField(new Blockly.FieldLabel("Reset to fix the blocks"));
        console.error(e);
    }
  }
};
Blockly.Python['food_access_get'] = function(block) {
    Blockly.Python.definitions_['import_food_access'] = 'import food_access';
    var propertyValue = block.getFieldValue('PROPERTY') || '';
    var property = Blockly.Python.quote_(propertyValue);
    var index_unquoted = block.getFieldValue('INDEX');
    var index = Blockly.Python.quote_(index_unquoted || '');
    var index_value = "''";
    if (index_unquoted !== '(None)') {
        var iv = block.getFieldValue('INDEX_VALUE') || "";
        index_value = Blockly.Python.quote_(iv);
    }
    var code = 'food_access.get('+property+',' +index+','+index_value+')';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

BlockMirrorTextToBlocks.prototype.MODULE_FUNCTION_SIGNATURES['food_access'] = {
    "get": {
        custom: function(node, parent) {
            if (!node.args || node.args.length < 3 ||
                !node.args[0] || !node.args[1] || !node.args[2] ||
                node.args[0]._astname !== "Str" || node.args[1]._astname !== "Str" || node.args[2]._astname !== "Str"
            ) {
                throw new Error("Not the right function call.");
            }
            return BlockMirrorTextToBlocks.create_block("food_access_get", null,
                {"PROPERTY": node.args[0].s.v},
                {}, {}, {"@INDEX": node.args[1].s.v,
                    "@INDEX_VALUE": node.args[2].s.v});
        }
    },
};

BlockMirrorBlockEditor.EXTRA_TOOLS['Data - food access'] = '<category name="Data - Food Access" colour="45">'+
                    '<block type="food_access_get"><mutation index="(None)" index_value=""></mutation></block>'+
                '</category>';