

var wind_turbines_INDEXES = [
    ["(None)", "(None)"],
    
    ["Site.State", "Site.State"] ,
    ["Year", "Year"] 
];

var wind_turbines_INDEX_VALUES = {
    "(None)": [],
    
    "Site.State": [
        
        ["AK", "AK"] ,
        ["AZ", "AZ"] ,
        ["CA", "CA"] ,
        ["CO", "CO"] ,
        ["CT", "CT"] ,
        ["DE", "DE"] ,
        ["GU", "GU"] ,
        ["HI", "HI"] ,
        ["IA", "IA"] ,
        ["ID", "ID"] ,
        ["IL", "IL"] ,
        ["IN", "IN"] ,
        ["KS", "KS"] ,
        ["MA", "MA"] ,
        ["MD", "MD"] ,
        ["ME", "ME"] ,
        ["MI", "MI"] ,
        ["MN", "MN"] ,
        ["MO", "MO"] ,
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
        ["SD", "SD"] ,
        ["TN", "TN"] ,
        ["TX", "TX"] ,
        ["UT", "UT"] ,
        ["VT", "VT"] ,
        ["WA", "WA"] ,
        ["WI", "WI"] ,
        ["WV", "WV"] ,
        ["WY", "WY"] 
    ],
    "Year": [
        
        ["1983", "1983"] ,
        ["1984", "1984"] ,
        ["1985", "1985"] ,
        ["1986", "1986"] ,
        ["1988", "1988"] ,
        ["1990", "1990"] ,
        ["1992", "1992"] ,
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
        ["2018", "2018"] 
    ]
}

var wind_turbines_PROPERTIES = [
    ["Site.State", "Site.State"] ,
    ["Site.County", "Site.County"] ,
    ["Year", "Year"] ,
    ["Turbine.Capacity", "Turbine.Capacity"] ,
    ["Turbine.Hub_Height", "Turbine.Hub_Height"] ,
    ["Turbine.Rotor_Diameter", "Turbine.Rotor_Diameter"] ,
    ["Turbine.Swept_Area", "Turbine.Swept_Area"] ,
    ["Turbine.Total_Height", "Turbine.Total_Height"] ,
    ["Project.Capacity", "Project.Capacity"] ,
    ["Project.Number_Turbines", "Project.Number_Turbines"] ,
    ["Site.Latitude", "Site.Latitude"] ,
    ["Site.Longitude", "Site.Longitude"] 
]

Blockly.Blocks['wind_turbines_get'] = {
  init: function() {
    this.setColour(45);
    this.appendDummyInput('MAIN')
        .appendField("wind_turbines.get")
        .appendField(new Blockly.FieldDropdown(wind_turbines_PROPERTIES), "PROPERTY");
    this.appendDummyInput('SECOND')
        .appendField("filter")
        .appendField(new Blockly.FieldDropdown(wind_turbines_INDEXES, function(option) {
                        this.getSourceBlock().updateShape_(option);
                    }), "INDEX")
    this.updateShape_("(None)");
    this.setInputsInline(false);
    this.setOutput(true, "Array");
    this.setTooltip('Returns a list of wind turbines data.');
  },
  mutationToDom: function() {
    var container = document.createElement('mutation');
    container.setAttribute('index', this.getFieldValue('INDEX'));
    container.setAttribute('index_value', this.getFieldValue('INDEX_VALUE'));
    container.setAttribute('module', "wind_turbines")
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
            inputGroup.appendField(new Blockly.FieldDropdown(wind_turbines_INDEX_VALUES[index]), 'INDEX_VALUE')
            if (index_value != undefined) {
                this.setFieldValue(index_value, 'INDEX_VALUE');
            } else {
                this.setFieldValue(wind_turbines_INDEX_VALUES[index][0][0], 'INDEX_VALUE');
            }
        }
    } catch (e) {
        inputGroup.appendField(new Blockly.FieldLabel("Reset to fix the blocks"));
        console.error(e);
    }
  }
};
Blockly.Python['wind_turbines_get'] = function(block) {
    Blockly.Python.definitions_['import_wind_turbines'] = 'import wind_turbines';
    var propertyValue = block.getFieldValue('PROPERTY') || '';
    var property = Blockly.Python.quote_(propertyValue);
    var index_unquoted = block.getFieldValue('INDEX');
    var index = Blockly.Python.quote_(index_unquoted || '');
    var index_value = "''";
    if (index_unquoted !== '(None)') {
        var iv = block.getFieldValue('INDEX_VALUE') || "";
        index_value = Blockly.Python.quote_(iv);
    }
    var code = 'wind_turbines.get('+property+',' +index+','+index_value+')';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

BlockMirrorTextToBlocks.prototype.MODULE_FUNCTION_SIGNATURES['wind_turbines'] = {
    "get": {
        custom: function(node, parent) {
            if (!node.args || node.args.length < 3 ||
                !node.args[0] || !node.args[1] || !node.args[2] ||
                node.args[0]._astname !== "Str" || node.args[1]._astname !== "Str" || node.args[2]._astname !== "Str"
            ) {
                throw new Error("Not the right function call.");
            }
            return BlockMirrorTextToBlocks.create_block("wind_turbines_get", null,
                {"PROPERTY": node.args[0].s.v},
                {}, {}, {"@INDEX": node.args[1].s.v,
                    "@INDEX_VALUE": node.args[2].s.v});
        }
    },
};

BlockMirrorBlockEditor.EXTRA_TOOLS['Data - wind turbines'] = '<category name="Data - Wind Turbines" colour="45">'+
                    '<block type="wind_turbines_get"><mutation index="(None)" index_value=""></mutation></block>'+
                '</category>';