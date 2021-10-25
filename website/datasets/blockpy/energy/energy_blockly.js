

var energy_INDEXES = [
    ["(None)", "(None)"],
    
    ["State", "State"] ,
    ["Year", "Year"] 
];

var energy_INDEX_VALUES = {
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
    ],
    "Year": [
        
        ["1960", "1960"] ,
        ["1961", "1961"] ,
        ["1962", "1962"] ,
        ["1963", "1963"] ,
        ["1964", "1964"] ,
        ["1965", "1965"] ,
        ["1966", "1966"] ,
        ["1967", "1967"] ,
        ["1968", "1968"] ,
        ["1969", "1969"] ,
        ["1970", "1970"] ,
        ["1971", "1971"] ,
        ["1972", "1972"] ,
        ["1973", "1973"] ,
        ["1974", "1974"] ,
        ["1975", "1975"] ,
        ["1976", "1976"] ,
        ["1977", "1977"] ,
        ["1978", "1978"] ,
        ["1979", "1979"] ,
        ["1980", "1980"] ,
        ["1981", "1981"] ,
        ["1982", "1982"] ,
        ["1983", "1983"] ,
        ["1984", "1984"] ,
        ["1985", "1985"] ,
        ["1986", "1986"] ,
        ["1987", "1987"] ,
        ["1988", "1988"] ,
        ["1989", "1989"] ,
        ["1990", "1990"] ,
        ["1991", "1991"] ,
        ["1992", "1992"] ,
        ["1993", "1993"] ,
        ["1994", "1994"] ,
        ["1995", "1995"] ,
        ["1996", "1996"] ,
        ["1997", "1997"] ,
        ["1998", "1998"] ,
        ["1999", "1999"] ,
        ["2000", "2000"] ,
        ["2001", "2001"] ,
        ["2002", "2002"] ,
        ["2003", "2003"] ,
        ["2004", "2004"] ,
        ["2005", "2005"] ,
        ["2006", "2006"] ,
        ["2007", "2007"] ,
        ["2008", "2008"] ,
        ["2009", "2009"] ,
        ["2010", "2010"] ,
        ["2011", "2011"] ,
        ["2012", "2012"] ,
        ["2013", "2013"] ,
        ["2014", "2014"] ,
        ["2015", "2015"] ,
        ["2016", "2016"] ,
        ["2017", "2017"] ,
        ["2018", "2018"] ,
        ["2019", "2019"] 
    ]
}

var energy_PROPERTIES = [
    ["State", "State"] ,
    ["Year", "Year"] ,
    ["Production.Coal", "Production.Coal"] ,
    ["Consumption.Commercial.Coal", "Consumption.Commercial.Coal"] ,
    ["Consumption.Commercial.Distillate Fuel Oil", "Consumption.Commercial.Distillate Fuel Oil"] ,
    ["Consumption.Commercial.Geothermal", "Consumption.Commercial.Geothermal"] ,
    ["Consumption.Commercial.Hydropower", "Consumption.Commercial.Hydropower"] ,
    ["Consumption.Commercial.Kerosene", "Consumption.Commercial.Kerosene"] ,
    ["Consumption.Commercial.Petroleum", "Consumption.Commercial.Petroleum"] ,
    ["Consumption.Commercial.Natural Gas", "Consumption.Commercial.Natural Gas"] ,
    ["Consumption.Commercial.Solar", "Consumption.Commercial.Solar"] ,
    ["Consumption.Commercial.Wind", "Consumption.Commercial.Wind"] ,
    ["Consumption.Commercial.Wood", "Consumption.Commercial.Wood"] ,
    ["Consumption.Electric Power.Coal", "Consumption.Electric Power.Coal"] ,
    ["Consumption.Electric Power.Distillate Fuel Oil", "Consumption.Electric Power.Distillate Fuel Oil"] ,
    ["Consumption.Electric Power.Natural Gas", "Consumption.Electric Power.Natural Gas"] ,
    ["Consumption.Electric Power.Wood", "Consumption.Electric Power.Wood"] ,
    ["Consumption.Industrial.Coal", "Consumption.Industrial.Coal"] ,
    ["Consumption.Industrial.Distillate Fuel Oil", "Consumption.Industrial.Distillate Fuel Oil"] ,
    ["Consumption.Industrial.Geothermal", "Consumption.Industrial.Geothermal"] ,
    ["Consumption.Industrial.Hydropower", "Consumption.Industrial.Hydropower"] ,
    ["Consumption.Industrial.Kerosene", "Consumption.Industrial.Kerosene"] ,
    ["Consumption.Industrial.Petroleum", "Consumption.Industrial.Petroleum"] ,
    ["Consumption.Industrial.Natural Gas", "Consumption.Industrial.Natural Gas"] ,
    ["Consumption.Industrial.Other Petroleum Products", "Consumption.Industrial.Other Petroleum Products"] ,
    ["Consumption.Industrial.Solar", "Consumption.Industrial.Solar"] ,
    ["Consumption.Industrial.Wind", "Consumption.Industrial.Wind"] ,
    ["Consumption.Industrial.Wood", "Consumption.Industrial.Wood"] ,
    ["Consumption.Refinery.Coal", "Consumption.Refinery.Coal"] ,
    ["Consumption.Refinery.Distillate Fuel Oil", "Consumption.Refinery.Distillate Fuel Oil"] ,
    ["Consumption.Refinery.Natural Gas", "Consumption.Refinery.Natural Gas"] ,
    ["Consumption.Residential.Coal", "Consumption.Residential.Coal"] ,
    ["Consumption.Residential.Distillate Fuel Oil", "Consumption.Residential.Distillate Fuel Oil"] ,
    ["Consumption.Residential.Geothermal", "Consumption.Residential.Geothermal"] ,
    ["Consumption.Residential.Kerosene", "Consumption.Residential.Kerosene"] ,
    ["Consumption.Residential.Petroleum", "Consumption.Residential.Petroleum"] ,
    ["Consumption.Residential.Natural Gas", "Consumption.Residential.Natural Gas"] ,
    ["Consumption.Residential.Wood", "Consumption.Residential.Wood"] ,
    ["Consumption.Transportation.Coal", "Consumption.Transportation.Coal"] ,
    ["Consumption.Transportation.Distillate Fuel Oil", "Consumption.Transportation.Distillate Fuel Oil"] ,
    ["Consumption.Transportation.Petroleum", "Consumption.Transportation.Petroleum"] ,
    ["Consumption.Transportation.Natural Gas", "Consumption.Transportation.Natural Gas"] ,
    ["Expenditure.Commercial.Coal", "Expenditure.Commercial.Coal"] ,
    ["Expenditure.Commercial.Distillate Fuel Oil", "Expenditure.Commercial.Distillate Fuel Oil"] ,
    ["Expenditure.Commercial.Kerosene", "Expenditure.Commercial.Kerosene"] ,
    ["Expenditure.Commercial.Petroleum", "Expenditure.Commercial.Petroleum"] ,
    ["Expenditure.Commercial.Natural Gas", "Expenditure.Commercial.Natural Gas"] ,
    ["Expenditure.Electric Power.Coal", "Expenditure.Electric Power.Coal"] ,
    ["Expenditure.Electric Power.Distillate Fuel Oil", "Expenditure.Electric Power.Distillate Fuel Oil"] ,
    ["Expenditure.Electric Power.Natural Gas", "Expenditure.Electric Power.Natural Gas"] ,
    ["Expenditure.Industrial.Coal", "Expenditure.Industrial.Coal"] ,
    ["Expenditure.Industrial.Distillate Fuel Oil", "Expenditure.Industrial.Distillate Fuel Oil"] ,
    ["Expenditure.Industrial.Kerosene", "Expenditure.Industrial.Kerosene"] ,
    ["Expenditure.Industrial.Petroleum", "Expenditure.Industrial.Petroleum"] ,
    ["Expenditure.Industrial.Natural Gas", "Expenditure.Industrial.Natural Gas"] ,
    ["Expenditure.Industrial.Other Petroleum Products", "Expenditure.Industrial.Other Petroleum Products"] ,
    ["Expenditure.Residential.Coal", "Expenditure.Residential.Coal"] ,
    ["Expenditure.Residential.Distillate Fuel Oil", "Expenditure.Residential.Distillate Fuel Oil"] ,
    ["Expenditure.Residential.Kerosene", "Expenditure.Residential.Kerosene"] ,
    ["Expenditure.Residential.Petroleum", "Expenditure.Residential.Petroleum"] ,
    ["Expenditure.Residential.Natural Gas", "Expenditure.Residential.Natural Gas"] ,
    ["Expenditure.Residential.Wood", "Expenditure.Residential.Wood"] ,
    ["Expenditure.Transportation.Coal", "Expenditure.Transportation.Coal"] ,
    ["Expenditure.Transportation.Distillate Fuel Oil", "Expenditure.Transportation.Distillate Fuel Oil"] ,
    ["Expenditure.Transportation.Petroleum", "Expenditure.Transportation.Petroleum"] ,
    ["Expenditure.Transportation.Natural Gas", "Expenditure.Transportation.Natural Gas"] ,
    ["Price.Commercial.Coal", "Price.Commercial.Coal"] ,
    ["Price.Commercial.Distillate Fuel Oil", "Price.Commercial.Distillate Fuel Oil"] ,
    ["Price.Commercial.Kerosene", "Price.Commercial.Kerosene"] ,
    ["Price.Commercial.Petroleum", "Price.Commercial.Petroleum"] ,
    ["Price.Commercial.Natural Gas", "Price.Commercial.Natural Gas"] ,
    ["Price.Electric Power.Coal", "Price.Electric Power.Coal"] ,
    ["Price.Electric Power.Distillate Fuel Oil", "Price.Electric Power.Distillate Fuel Oil"] ,
    ["Price.Electric Power.Natural Gas", "Price.Electric Power.Natural Gas"] ,
    ["Price.Industrial.Coal", "Price.Industrial.Coal"] ,
    ["Price.Industrial.Distillate Fuel Oil", "Price.Industrial.Distillate Fuel Oil"] ,
    ["Price.Industrial.Kerosene", "Price.Industrial.Kerosene"] ,
    ["Price.Industrial.Petroleum", "Price.Industrial.Petroleum"] ,
    ["Price.Industrial.Natural Gas", "Price.Industrial.Natural Gas"] ,
    ["Price.Industrial.Other Petroleum Products", "Price.Industrial.Other Petroleum Products"] ,
    ["Price.Transportation.Coal", "Price.Transportation.Coal"] ,
    ["Price.Transportation.Distillate Fuel Oil", "Price.Transportation.Distillate Fuel Oil"] ,
    ["Price.Transportation.Petroleum", "Price.Transportation.Petroleum"] ,
    ["Price.Transportation.Natural Gas", "Price.Transportation.Natural Gas"] 
]

Blockly.Blocks['energy_get'] = {
  init: function() {
    this.setColour(45);
    this.appendDummyInput('MAIN')
        .appendField("energy.get")
        .appendField(new Blockly.FieldDropdown(energy_PROPERTIES), "PROPERTY");
    this.appendDummyInput('SECOND')
        .appendField("filter")
        .appendField(new Blockly.FieldDropdown(energy_INDEXES, function(option) {
                        this.getSourceBlock().updateShape_(option);
                    }), "INDEX")
    this.updateShape_("(None)");
    this.setInputsInline(false);
    this.setOutput(true, "Array");
    this.setTooltip('Returns a list of energy data.');
  },
  mutationToDom: function() {
    var container = document.createElement('mutation');
    container.setAttribute('index', this.getFieldValue('INDEX'));
    container.setAttribute('index_value', this.getFieldValue('INDEX_VALUE'));
    container.setAttribute('module', "energy")
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
            inputGroup.appendField(new Blockly.FieldDropdown(energy_INDEX_VALUES[index]), 'INDEX_VALUE')
            if (index_value != undefined) {
                this.setFieldValue(index_value, 'INDEX_VALUE');
            } else {
                this.setFieldValue(energy_INDEX_VALUES[index][0][0], 'INDEX_VALUE');
            }
        }
    } catch (e) {
        inputGroup.appendField(new Blockly.FieldLabel("Reset to fix the blocks"));
        console.error(e);
    }
  }
};
Blockly.Python['energy_get'] = function(block) {
    Blockly.Python.definitions_['import_energy'] = 'import energy';
    var propertyValue = block.getFieldValue('PROPERTY') || '';
    var property = Blockly.Python.quote_(propertyValue);
    var index_unquoted = block.getFieldValue('INDEX');
    var index = Blockly.Python.quote_(index_unquoted || '');
    var index_value = "''";
    if (index_unquoted !== '(None)') {
        var iv = block.getFieldValue('INDEX_VALUE') || "";
        index_value = Blockly.Python.quote_(iv);
    }
    var code = 'energy.get('+property+',' +index+','+index_value+')';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

BlockMirrorTextToBlocks.prototype.MODULE_FUNCTION_SIGNATURES['energy'] = {
    "get": {
        custom: function(node, parent) {
            if (!node.args || node.args.length < 3 ||
                !node.args[0] || !node.args[1] || !node.args[2] ||
                node.args[0]._astname !== "Str" || node.args[1]._astname !== "Str" || node.args[2]._astname !== "Str"
            ) {
                throw new Error("Not the right function call.");
            }
            return BlockMirrorTextToBlocks.create_block("energy_get", null,
                {"PROPERTY": node.args[0].s.v},
                {}, {}, {"@INDEX": node.args[1].s.v,
                    "@INDEX_VALUE": node.args[2].s.v});
        }
    },
};

BlockMirrorBlockEditor.EXTRA_TOOLS['Data - energy'] = '<category name="Data - Energy" colour="45">'+
                    '<block type="energy_get"><mutation index="(None)" index_value=""></mutation></block>'+
                '</category>';