

var hospitals_INDEXES = [
    ["(None)", "(None)"],
    
    ["Facility.State", "Facility.State"] ,
    ["Rating.Overall", "Rating.Overall"] 
];

var hospitals_INDEX_VALUES = {
    "(None)": [],
    
    "Facility.State": [
        
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
    ],
    "Rating.Overall": [
        
        ["-1", "-1"] ,
        ["1", "1"] ,
        ["2", "2"] ,
        ["3", "3"] ,
        ["4", "4"] ,
        ["5", "5"] 
    ]
}

var hospitals_PROPERTIES = [
    ["Facility.Name", "Facility.Name"] ,
    ["Facility.City", "Facility.City"] ,
    ["Facility.State", "Facility.State"] ,
    ["Facility.Type", "Facility.Type"] ,
    ["Rating.Overall", "Rating.Overall"] ,
    ["Rating.Mortality", "Rating.Mortality"] ,
    ["Rating.Safety", "Rating.Safety"] ,
    ["Rating.Readmission", "Rating.Readmission"] ,
    ["Rating.Experience", "Rating.Experience"] ,
    ["Rating.Effectiveness", "Rating.Effectiveness"] ,
    ["Rating.Timeliness", "Rating.Timeliness"] ,
    ["Rating.Imaging", "Rating.Imaging"] ,
    ["Procedure.Heart Attack.Cost", "Procedure.Heart Attack.Cost"] ,
    ["Procedure.Heart Attack.Quality", "Procedure.Heart Attack.Quality"] ,
    ["Procedure.Heart Attack.Value", "Procedure.Heart Attack.Value"] ,
    ["Procedure.Heart Failure.Cost", "Procedure.Heart Failure.Cost"] ,
    ["Procedure.Heart Failure.Quality", "Procedure.Heart Failure.Quality"] ,
    ["Procedure.Heart Failure.Value", "Procedure.Heart Failure.Value"] ,
    ["Procedure.Pneumonia.Cost", "Procedure.Pneumonia.Cost"] ,
    ["Procedure.Pneumonia.Quality", "Procedure.Pneumonia.Quality"] ,
    ["Procedure.Pneumonia.Value", "Procedure.Pneumonia.Value"] ,
    ["Procedure.Hip Knee.Cost", "Procedure.Hip Knee.Cost"] ,
    ["Procedure.Hip Knee.Quality", "Procedure.Hip Knee.Quality"] ,
    ["Procedure.Hip Knee.Value", "Procedure.Hip Knee.Value"] 
]

Blockly.Blocks['hospitals_get'] = {
  init: function() {
    this.setColour(45);
    this.appendDummyInput('MAIN')
        .appendField("hospitals.get")
        .appendField(new Blockly.FieldDropdown(hospitals_PROPERTIES), "PROPERTY");
    this.appendDummyInput('SECOND')
        .appendField("filter")
        .appendField(new Blockly.FieldDropdown(hospitals_INDEXES, function(option) {
                        this.getSourceBlock().updateShape_(option);
                    }), "INDEX")
    this.updateShape_("(None)");
    this.setInputsInline(false);
    this.setOutput(true, "Array");
    this.setTooltip('Returns a list of hospitals data.');
  },
  mutationToDom: function() {
    var container = document.createElement('mutation');
    container.setAttribute('index', this.getFieldValue('INDEX'));
    container.setAttribute('index_value', this.getFieldValue('INDEX_VALUE'));
    container.setAttribute('module', "hospitals")
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
            inputGroup.appendField(new Blockly.FieldDropdown(hospitals_INDEX_VALUES[index]), 'INDEX_VALUE')
            if (index_value != undefined) {
                this.setFieldValue(index_value, 'INDEX_VALUE');
            } else {
                this.setFieldValue(hospitals_INDEX_VALUES[index][0][0], 'INDEX_VALUE');
            }
        }
    } catch (e) {
        inputGroup.appendField(new Blockly.FieldLabel("Reset to fix the blocks"));
        console.error(e);
    }
  }
};
Blockly.Python['hospitals_get'] = function(block) {
    Blockly.Python.definitions_['import_hospitals'] = 'import hospitals';
    var propertyValue = block.getFieldValue('PROPERTY') || '';
    var property = Blockly.Python.quote_(propertyValue);
    var index_unquoted = block.getFieldValue('INDEX');
    var index = Blockly.Python.quote_(index_unquoted || '');
    var index_value = "''";
    if (index_unquoted !== '(None)') {
        var iv = block.getFieldValue('INDEX_VALUE') || "";
        index_value = Blockly.Python.quote_(iv);
    }
    var code = 'hospitals.get('+property+',' +index+','+index_value+')';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

BlockMirrorTextToBlocks.prototype.MODULE_FUNCTION_SIGNATURES['hospitals'] = {
    "get": {
        custom: function(node, parent) {
            if (!node.args || node.args.length < 3 ||
                !node.args[0] || !node.args[1] || !node.args[2] ||
                node.args[0]._astname !== "Str" || node.args[1]._astname !== "Str" || node.args[2]._astname !== "Str"
            ) {
                throw new Error("Not the right function call.");
            }
            return BlockMirrorTextToBlocks.create_block("hospitals_get", null,
                {"PROPERTY": node.args[0].s.v},
                {}, {}, {"@INDEX": node.args[1].s.v,
                    "@INDEX_VALUE": node.args[2].s.v});
        }
    },
};

BlockMirrorBlockEditor.EXTRA_TOOLS['Data - hospitals'] = '<category name="Data - Hospitals" colour="45">'+
                    '<block type="hospitals_get"><mutation index="(None)" index_value=""></mutation></block>'+
                '</category>';