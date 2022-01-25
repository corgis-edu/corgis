

var county_demographics_INDEXES = [
    ["(None)", "(None)"],
    
    ["State", "State"] 
];

var county_demographics_INDEX_VALUES = {
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

var county_demographics_PROPERTIES = [
    ["County", "County"] ,
    ["State", "State"] ,
    ["Age.Percent 65 and Older", "Age.Percent 65 and Older"] ,
    ["Age.Percent Under 18 Years", "Age.Percent Under 18 Years"] ,
    ["Age.Percent Under 5 Years", "Age.Percent Under 5 Years"] ,
    ["Education.Bachelor's Degree or Higher", "Education.Bachelor's Degree or Higher"] ,
    ["Education.High School or Higher", "Education.High School or Higher"] ,
    ["Employment.Nonemployer Establishments", "Employment.Nonemployer Establishments"] ,
    ["Ethnicities.American Indian and Alaska Native Alone", "Ethnicities.American Indian and Alaska Native Alone"] ,
    ["Ethnicities.Asian Alone", "Ethnicities.Asian Alone"] ,
    ["Ethnicities.Black Alone", "Ethnicities.Black Alone"] ,
    ["Ethnicities.Hispanic or Latino", "Ethnicities.Hispanic or Latino"] ,
    ["Ethnicities.Native Hawaiian and Other Pacific Islander Alone", "Ethnicities.Native Hawaiian and Other Pacific Islander Alone"] ,
    ["Ethnicities.Two or More Races", "Ethnicities.Two or More Races"] ,
    ["Ethnicities.White Alone", "Ethnicities.White Alone"] ,
    ["Ethnicities.White Alone\t not Hispanic or Latino", "Ethnicities.White Alone\t not Hispanic or Latino"] ,
    ["Housing.Homeownership Rate", "Housing.Homeownership Rate"] ,
    ["Housing.Households", "Housing.Households"] ,
    ["Housing.Housing Units", "Housing.Housing Units"] ,
    ["Housing.Median Value of Owner-Occupied Units", "Housing.Median Value of Owner-Occupied Units"] ,
    ["Housing.Persons per Household", "Housing.Persons per Household"] ,
    ["Income.Median Houseold Income", "Income.Median Houseold Income"] ,
    ["Income.Per Capita Income", "Income.Per Capita Income"] ,
    ["Miscellaneous.Foreign Born", "Miscellaneous.Foreign Born"] ,
    ["Miscellaneous.Land Area", "Miscellaneous.Land Area"] ,
    ["Miscellaneous.Language Other than English at Home", "Miscellaneous.Language Other than English at Home"] ,
    ["Miscellaneous.Living in Same House +1 Years", "Miscellaneous.Living in Same House +1 Years"] ,
    ["Miscellaneous.Manufacturers Shipments", "Miscellaneous.Manufacturers Shipments"] ,
    ["Miscellaneous.Mean Travel Time to Work", "Miscellaneous.Mean Travel Time to Work"] ,
    ["Miscellaneous.Percent Female", "Miscellaneous.Percent Female"] ,
    ["Miscellaneous.Veterans", "Miscellaneous.Veterans"] ,
    ["Population.2020 Population", "Population.2020 Population"] ,
    ["Population.2010 Population", "Population.2010 Population"] ,
    ["Population.Population per Square Mile", "Population.Population per Square Mile"] ,
    ["Sales.Accommodation and Food Services Sales", "Sales.Accommodation and Food Services Sales"] ,
    ["Sales.Retail Sales", "Sales.Retail Sales"] ,
    ["Employment.Firms.Total", "Employment.Firms.Total"] ,
    ["Employment.Firms.Women-Owned", "Employment.Firms.Women-Owned"] ,
    ["Employment.Firms.Men-Owned", "Employment.Firms.Men-Owned"] ,
    ["Employment.Firms.Minority-Owned", "Employment.Firms.Minority-Owned"] ,
    ["Employment.Firms.Nonminority-Owned", "Employment.Firms.Nonminority-Owned"] ,
    ["Employment.Firms.Veteran-Owned", "Employment.Firms.Veteran-Owned"] ,
    ["Employment.Firms.Nonveteran-Owned", "Employment.Firms.Nonveteran-Owned"] 
]

Blockly.Blocks['county_demographics_get'] = {
  init: function() {
    this.setColour(45);
    this.appendDummyInput('MAIN')
        .appendField("county_demographics.get")
        .appendField(new Blockly.FieldDropdown(county_demographics_PROPERTIES), "PROPERTY");
    this.appendDummyInput('SECOND')
        .appendField("filter")
        .appendField(new Blockly.FieldDropdown(county_demographics_INDEXES, function(option) {
                        this.getSourceBlock().updateShape_(option);
                    }), "INDEX")
    this.updateShape_("(None)");
    this.setInputsInline(false);
    this.setOutput(true, "Array");
    this.setTooltip('Returns a list of county demographics data.');
  },
  mutationToDom: function() {
    var container = document.createElement('mutation');
    container.setAttribute('index', this.getFieldValue('INDEX'));
    container.setAttribute('index_value', this.getFieldValue('INDEX_VALUE'));
    container.setAttribute('module', "county_demographics")
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
            inputGroup.appendField(new Blockly.FieldDropdown(county_demographics_INDEX_VALUES[index]), 'INDEX_VALUE')
            if (index_value != undefined) {
                this.setFieldValue(index_value, 'INDEX_VALUE');
            } else {
                this.setFieldValue(county_demographics_INDEX_VALUES[index][0][0], 'INDEX_VALUE');
            }
        }
    } catch (e) {
        inputGroup.appendField(new Blockly.FieldLabel("Reset to fix the blocks"));
        console.error(e);
    }
  }
};
Blockly.Python['county_demographics_get'] = function(block) {
    Blockly.Python.definitions_['import_county_demographics'] = 'import county_demographics';
    var propertyValue = block.getFieldValue('PROPERTY') || '';
    var property = Blockly.Python.quote_(propertyValue);
    var index_unquoted = block.getFieldValue('INDEX');
    var index = Blockly.Python.quote_(index_unquoted || '');
    var index_value = "''";
    if (index_unquoted !== '(None)') {
        var iv = block.getFieldValue('INDEX_VALUE') || "";
        index_value = Blockly.Python.quote_(iv);
    }
    var code = 'county_demographics.get('+property+',' +index+','+index_value+')';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

BlockMirrorTextToBlocks.prototype.MODULE_FUNCTION_SIGNATURES['county_demographics'] = {
    "get": {
        custom: function(node, parent) {
            if (!node.args || node.args.length < 3 ||
                !node.args[0] || !node.args[1] || !node.args[2] ||
                node.args[0]._astname !== "Str" || node.args[1]._astname !== "Str" || node.args[2]._astname !== "Str"
            ) {
                throw new Error("Not the right function call.");
            }
            return BlockMirrorTextToBlocks.create_block("county_demographics_get", null,
                {"PROPERTY": node.args[0].s.v},
                {}, {}, {"@INDEX": node.args[1].s.v,
                    "@INDEX_VALUE": node.args[2].s.v});
        }
    },
};

BlockMirrorBlockEditor.EXTRA_TOOLS['Data - county demographics'] = '<category name="Data - County Demographics" colour="45">'+
                    '<block type="county_demographics_get"><mutation index="(None)" index_value=""></mutation></block>'+
                '</category>';