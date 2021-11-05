

var state_demographics_INDEXES = [
    ["(None)", "(None)"],
    
    ["State", "State"] 
];

var state_demographics_INDEX_VALUES = {
    "(None)": [],
    
    "State": [
        
        ["Alabama", "Alabama"] ,
        ["Alaska", "Alaska"] ,
        ["Arizona", "Arizona"] ,
        ["Arkansas", "Arkansas"] ,
        ["California", "California"] ,
        ["Colorado", "Colorado"] ,
        ["Connecticut", "Connecticut"] ,
        ["Delaware", "Delaware"] ,
        ["District of Columbia", "District of Columbia"] ,
        ["Florida", "Florida"] ,
        ["Georgia", "Georgia"] ,
        ["Hawaii", "Hawaii"] ,
        ["Idaho", "Idaho"] ,
        ["Illinois", "Illinois"] ,
        ["Indiana", "Indiana"] ,
        ["Iowa", "Iowa"] ,
        ["Kansas", "Kansas"] ,
        ["Kentucky", "Kentucky"] ,
        ["Louisiana", "Louisiana"] ,
        ["Maine", "Maine"] ,
        ["Maryland", "Maryland"] ,
        ["Massachusetts", "Massachusetts"] ,
        ["Michigan", "Michigan"] ,
        ["Minnesota", "Minnesota"] ,
        ["Mississippi", "Mississippi"] ,
        ["Missouri", "Missouri"] ,
        ["Montana", "Montana"] ,
        ["Nebraska", "Nebraska"] ,
        ["Nevada", "Nevada"] ,
        ["New Hampshire", "New Hampshire"] ,
        ["New Jersey", "New Jersey"] ,
        ["New Mexico", "New Mexico"] ,
        ["New York", "New York"] ,
        ["North Carolina", "North Carolina"] ,
        ["North Dakota", "North Dakota"] ,
        ["Ohio", "Ohio"] ,
        ["Oklahoma", "Oklahoma"] ,
        ["Oregon", "Oregon"] ,
        ["Pennsylvania", "Pennsylvania"] ,
        ["Rhode Island", "Rhode Island"] ,
        ["South Carolina", "South Carolina"] ,
        ["South Dakota", "South Dakota"] ,
        ["Tennessee", "Tennessee"] ,
        ["Texas", "Texas"] ,
        ["Utah", "Utah"] ,
        ["Vermont", "Vermont"] ,
        ["Virginia", "Virginia"] ,
        ["Washington", "Washington"] ,
        ["West Virginia", "West Virginia"] ,
        ["Wisconsin", "Wisconsin"] ,
        ["Wyoming", "Wyoming"] 
    ]
}

var state_demographics_PROPERTIES = [
    ["State", "State"] ,
    ["Population.Population Percent Change", "Population.Population Percent Change"] ,
    ["Population.2014 Population", "Population.2014 Population"] ,
    ["Population.2010 Population", "Population.2010 Population"] ,
    ["Age.Percent Under 5 Years", "Age.Percent Under 5 Years"] ,
    ["Age.Percent Under 18 Years", "Age.Percent Under 18 Years"] ,
    ["Age.Percent 65 and Older", "Age.Percent 65 and Older"] ,
    ["Miscellaneous.Percent Female", "Miscellaneous.Percent Female"] ,
    ["Ethnicities.White Alone", "Ethnicities.White Alone"] ,
    ["Ethnicities.Black Alone", "Ethnicities.Black Alone"] ,
    ["Ethnicities.American Indian and Alaska Native Alone", "Ethnicities.American Indian and Alaska Native Alone"] ,
    ["Ethnicities.Asian Alone", "Ethnicities.Asian Alone"] ,
    ["Ethnicities.Native Hawaiian and Other Pacific Islander Alone", "Ethnicities.Native Hawaiian and Other Pacific Islander Alone"] ,
    ["Ethnicities.Two or More Races", "Ethnicities.Two or More Races"] ,
    ["Ethnicities.Hispanic or Latino", "Ethnicities.Hispanic or Latino"] ,
    ["Ethnicities.White Alone, not Hispanic or Latino", "Ethnicities.White Alone, not Hispanic or Latino"] ,
    ["Miscellaneous.Veterans", "Miscellaneous.Veterans"] ,
    ["Miscellaneous.Foreign Born", "Miscellaneous.Foreign Born"] ,
    ["Housing.Housing Units", "Housing.Housing Units"] ,
    ["Housing.Homeownership Rate", "Housing.Homeownership Rate"] ,
    ["Housing.Median Value of Owner-Occupied Units", "Housing.Median Value of Owner-Occupied Units"] ,
    ["Housing.Households", "Housing.Households"] ,
    ["Housing.Persons per Household", "Housing.Persons per Household"] ,
    ["Miscellaneous.Living in Same House +1 Years", "Miscellaneous.Living in Same House +1 Years"] ,
    ["Miscellaneous.Language Other than English at Home", "Miscellaneous.Language Other than English at Home"] ,
    ["Housing.Households with a computer", "Housing.Households with a computer"] ,
    ["Housing.Households with a Internet", "Housing.Households with a Internet"] ,
    ["Education.High School or Higher", "Education.High School or Higher"] ,
    ["Education.Bachelor's Degree or Higher", "Education.Bachelor's Degree or Higher"] ,
    ["Miscellaneous.Percent Under 66 Years With a Disability", "Miscellaneous.Percent Under 66 Years With a Disability"] ,
    ["Miscellaneous.Percent Under 65 Years Witout Health insurance", "Miscellaneous.Percent Under 65 Years Witout Health insurance"] ,
    ["Sales.Accommodation and Food Services Sales", "Sales.Accommodation and Food Services Sales"] ,
    ["Miscellaneous.Manufacturers Shipments", "Miscellaneous.Manufacturers Shipments"] ,
    ["Sales.Retail Sales", "Sales.Retail Sales"] ,
    ["Miscellaneous.Mean Travel Time to Work", "Miscellaneous.Mean Travel Time to Work"] ,
    ["Income.Median Houseold Income", "Income.Median Houseold Income"] ,
    ["Income.Per Capita Income", "Income.Per Capita Income"] ,
    ["Income.Persons Below Poverty Level", "Income.Persons Below Poverty Level"] ,
    ["Employment.Nonemployer Establishments", "Employment.Nonemployer Establishments"] ,
    ["Employment.Firms.Total", "Employment.Firms.Total"] ,
    ["Employment.Firms.Men-Owned", "Employment.Firms.Men-Owned"] ,
    ["Employment.Firms.Women-Owned", "Employment.Firms.Women-Owned"] ,
    ["Employment.Firms.Minority-Owned", "Employment.Firms.Minority-Owned"] ,
    ["Employment.Firms.Nonminority-Owned", "Employment.Firms.Nonminority-Owned"] ,
    ["Employment.Firms.Veteran-Owned", "Employment.Firms.Veteran-Owned"] ,
    ["Employment.Firms.Nonveteran-Owned", "Employment.Firms.Nonveteran-Owned"] ,
    ["Population.Population per Square Mile", "Population.Population per Square Mile"] ,
    ["Miscellaneous.Land Area", "Miscellaneous.Land Area"] 
]

Blockly.Blocks['state_demographics_get'] = {
  init: function() {
    this.setColour(45);
    this.appendDummyInput('MAIN')
        .appendField("state_demographics.get")
        .appendField(new Blockly.FieldDropdown(state_demographics_PROPERTIES), "PROPERTY");
    this.appendDummyInput('SECOND')
        .appendField("filter")
        .appendField(new Blockly.FieldDropdown(state_demographics_INDEXES, function(option) {
                        this.getSourceBlock().updateShape_(option);
                    }), "INDEX")
    this.updateShape_("(None)");
    this.setInputsInline(false);
    this.setOutput(true, "Array");
    this.setTooltip('Returns a list of state demographics data.');
  },
  mutationToDom: function() {
    var container = document.createElement('mutation');
    container.setAttribute('index', this.getFieldValue('INDEX'));
    container.setAttribute('index_value', this.getFieldValue('INDEX_VALUE'));
    container.setAttribute('module', "state_demographics")
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
            inputGroup.appendField(new Blockly.FieldDropdown(state_demographics_INDEX_VALUES[index]), 'INDEX_VALUE')
            if (index_value != undefined) {
                this.setFieldValue(index_value, 'INDEX_VALUE');
            } else {
                this.setFieldValue(state_demographics_INDEX_VALUES[index][0][0], 'INDEX_VALUE');
            }
        }
    } catch (e) {
        inputGroup.appendField(new Blockly.FieldLabel("Reset to fix the blocks"));
        console.error(e);
    }
  }
};
Blockly.Python['state_demographics_get'] = function(block) {
    Blockly.Python.definitions_['import_state_demographics'] = 'import state_demographics';
    var propertyValue = block.getFieldValue('PROPERTY') || '';
    var property = Blockly.Python.quote_(propertyValue);
    var index_unquoted = block.getFieldValue('INDEX');
    var index = Blockly.Python.quote_(index_unquoted || '');
    var index_value = "''";
    if (index_unquoted !== '(None)') {
        var iv = block.getFieldValue('INDEX_VALUE') || "";
        index_value = Blockly.Python.quote_(iv);
    }
    var code = 'state_demographics.get('+property+',' +index+','+index_value+')';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

BlockMirrorTextToBlocks.prototype.MODULE_FUNCTION_SIGNATURES['state_demographics'] = {
    "get": {
        custom: function(node, parent) {
            if (!node.args || node.args.length < 3 ||
                !node.args[0] || !node.args[1] || !node.args[2] ||
                node.args[0]._astname !== "Str" || node.args[1]._astname !== "Str" || node.args[2]._astname !== "Str"
            ) {
                throw new Error("Not the right function call.");
            }
            return BlockMirrorTextToBlocks.create_block("state_demographics_get", null,
                {"PROPERTY": node.args[0].s.v},
                {}, {}, {"@INDEX": node.args[1].s.v,
                    "@INDEX_VALUE": node.args[2].s.v});
        }
    },
};

BlockMirrorBlockEditor.EXTRA_TOOLS['Data - state demographics'] = '<category name="Data - State Demographics" colour="45">'+
                    '<block type="state_demographics_get"><mutation index="(None)" index_value=""></mutation></block>'+
                '</category>';