

var state_crime_INDEXES = [
    ["(None)", "(None)"],
    
    ["State", "State"] ,
    ["Year", "Year"] 
];

var state_crime_INDEX_VALUES = {
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
        ["United States", "United States"] ,
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
        ["2012", "2012"] 
    ]
}

var state_crime_PROPERTIES = [
    ["State", "State"] ,
    ["Year", "Year"] ,
    ["Data.Population", "Data.Population"] ,
    ["Data.Rates.Property.All", "Data.Rates.Property.All"] ,
    ["Data.Rates.Property.Burglary", "Data.Rates.Property.Burglary"] ,
    ["Data.Rates.Property.Larceny", "Data.Rates.Property.Larceny"] ,
    ["Data.Rates.Property.Motor", "Data.Rates.Property.Motor"] ,
    ["Data.Rates.Violent.All", "Data.Rates.Violent.All"] ,
    ["Data.Rates.Violent.Assault", "Data.Rates.Violent.Assault"] ,
    ["Data.Rates.Violent.Murder", "Data.Rates.Violent.Murder"] ,
    ["Data.Rates.Violent.Rape", "Data.Rates.Violent.Rape"] ,
    ["Data.Rates.Violent.Robbery", "Data.Rates.Violent.Robbery"] ,
    ["Data.Totals.Property.All", "Data.Totals.Property.All"] ,
    ["Data.Totals.Property.Burglary", "Data.Totals.Property.Burglary"] ,
    ["Data.Totals.Property.Larceny", "Data.Totals.Property.Larceny"] ,
    ["Data.Totals.Property.Motor", "Data.Totals.Property.Motor"] ,
    ["Data.Totals.Violent.All", "Data.Totals.Violent.All"] ,
    ["Data.Totals.Violent.Assault", "Data.Totals.Violent.Assault"] ,
    ["Data.Totals.Violent.Murder", "Data.Totals.Violent.Murder"] ,
    ["Data.Totals.Violent.Rape", "Data.Totals.Violent.Rape"] ,
    ["Data.Totals.Violent.Robbery", "Data.Totals.Violent.Robbery"] 
]

Blockly.Blocks['state_crime_get'] = {
  init: function() {
    this.setColour(45);
    this.appendDummyInput('MAIN')
        .appendField("state_crime.get")
        .appendField(new Blockly.FieldDropdown(state_crime_PROPERTIES), "PROPERTY");
    this.appendDummyInput('SECOND')
        .appendField("filter")
        .appendField(new Blockly.FieldDropdown(state_crime_INDEXES, function(option) {
                        this.getSourceBlock().updateShape_(option);
                    }), "INDEX")
    this.updateShape_("(None)");
    this.setInputsInline(false);
    this.setOutput(true, "Array");
    this.setTooltip('Returns a list of state crime data.');
  },
  mutationToDom: function() {
    var container = document.createElement('mutation');
    container.setAttribute('index', this.getFieldValue('INDEX'));
    container.setAttribute('index_value', this.getFieldValue('INDEX_VALUE'));
    container.setAttribute('module', "state_crime")
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
            inputGroup.appendField(new Blockly.FieldDropdown(state_crime_INDEX_VALUES[index]), 'INDEX_VALUE')
            if (index_value != undefined) {
                this.setFieldValue(index_value, 'INDEX_VALUE');
            } else {
                this.setFieldValue(state_crime_INDEX_VALUES[index][0][0], 'INDEX_VALUE');
            }
        }
    } catch (e) {
        inputGroup.appendField(new Blockly.FieldLabel("Reset to fix the blocks"));
        console.error(e);
    }
  }
};
Blockly.Python['state_crime_get'] = function(block) {
    Blockly.Python.definitions_['import_state_crime'] = 'import state_crime';
    var propertyValue = block.getFieldValue('PROPERTY') || '';
    var property = Blockly.Python.quote_(propertyValue);
    var index_unquoted = block.getFieldValue('INDEX');
    var index = Blockly.Python.quote_(index_unquoted || '');
    var index_value = "''";
    if (index_unquoted !== '(None)') {
        var iv = block.getFieldValue('INDEX_VALUE') || "";
        index_value = Blockly.Python.quote_(iv);
    }
    var code = 'state_crime.get('+property+',' +index+','+index_value+')';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

BlockMirrorTextToBlocks.prototype.MODULE_FUNCTION_SIGNATURES['state_crime'] = {
    "get": {
        custom: function(node, parent) {
            if (!node.args || node.args.length < 3 ||
                !node.args[0] || !node.args[1] || !node.args[2] ||
                node.args[0]._astname !== "Str" || node.args[1]._astname !== "Str" || node.args[2]._astname !== "Str"
            ) {
                throw new Error("Not the right function call.");
            }
            return BlockMirrorTextToBlocks.create_block("state_crime_get", null,
                {"PROPERTY": node.args[0].s.v},
                {}, {}, {"@INDEX": node.args[1].s.v,
                    "@INDEX_VALUE": node.args[2].s.v});
        }
    },
};

BlockMirrorBlockEditor.EXTRA_TOOLS['Data - state crime'] = '<category name="Data - State Crime" colour="45">'+
                    '<block type="state_crime_get"><mutation index="(None)" index_value=""></mutation></block>'+
                '</category>';