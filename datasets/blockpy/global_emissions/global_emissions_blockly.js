

var global_emissions_INDEXES = [
    ["(None)", "(None)"],
    
    ["Year", "Year"] ,
    ["Country.Name", "Country.Name"] 
];

var global_emissions_INDEX_VALUES = {
    "(None)": [],
    
    "Year": [
        
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
        ["2018", "2018"] 
    ],
    "Country.Name": [
        
        ["Afghanistan", "Afghanistan"] ,
        ["Albania", "Albania"] ,
        ["Algeria", "Algeria"] ,
        ["Angola", "Angola"] ,
        ["Argentina", "Argentina"] ,
        ["Armenia", "Armenia"] ,
        ["Australia", "Australia"] ,
        ["Austria", "Austria"] ,
        ["Azerbaijan", "Azerbaijan"] ,
        ["Bangladesh", "Bangladesh"] ,
        ["Belarus", "Belarus"] ,
        ["Belgium", "Belgium"] ,
        ["Bolivia", "Bolivia"] ,
        ["Bosnia and Herzegovina", "Bosnia and Herzegovina"] ,
        ["Brazil", "Brazil"] ,
        ["Bulgaria", "Bulgaria"] ,
        ["Canada", "Canada"] ,
        ["Chile", "Chile"] ,
        ["China", "China"] ,
        ["Colombia", "Colombia"] ,
        ["Croatia", "Croatia"] ,
        ["Cuba", "Cuba"] ,
        ["Cyprus", "Cyprus"] ,
        ["Czechia", "Czechia"] ,
        ["Denmark", "Denmark"] ,
        ["Ecuador", "Ecuador"] ,
        ["Egypt", "Egypt"] ,
        ["Estonia", "Estonia"] ,
        ["Finland", "Finland"] ,
        ["France", "France"] ,
        ["Gabon", "Gabon"] ,
        ["Georgia", "Georgia"] ,
        ["Germany", "Germany"] ,
        ["Greece", "Greece"] ,
        ["Hungary", "Hungary"] ,
        ["Iceland", "Iceland"] ,
        ["India", "India"] ,
        ["Indonesia", "Indonesia"] ,
        ["Iran", "Iran"] ,
        ["Iraq", "Iraq"] ,
        ["Ireland", "Ireland"] ,
        ["Israel", "Israel"] ,
        ["Italy", "Italy"] ,
        ["Japan", "Japan"] ,
        ["Kazakhstan", "Kazakhstan"] ,
        ["Kuwait", "Kuwait"] ,
        ["Kyrgyzstan", "Kyrgyzstan"] ,
        ["Latvia", "Latvia"] ,
        ["Libya", "Libya"] ,
        ["Lithuania", "Lithuania"] ,
        ["Luxembourg", "Luxembourg"] ,
        ["Malaysia", "Malaysia"] ,
        ["Mexico", "Mexico"] ,
        ["Moldova", "Moldova"] ,
        ["Morocco", "Morocco"] ,
        ["Myanmar", "Myanmar"] ,
        ["Netherlands", "Netherlands"] ,
        ["New Zealand", "New Zealand"] ,
        ["Nigeria", "Nigeria"] ,
        ["North Macedonia", "North Macedonia"] ,
        ["Norway", "Norway"] ,
        ["Oman", "Oman"] ,
        ["Pakistan", "Pakistan"] ,
        ["Peru", "Peru"] ,
        ["Philippines", "Philippines"] ,
        ["Poland", "Poland"] ,
        ["Portugal", "Portugal"] ,
        ["Qatar", "Qatar"] ,
        ["Romania", "Romania"] ,
        ["Russia", "Russia"] ,
        ["Saudi Arabia", "Saudi Arabia"] ,
        ["Slovakia", "Slovakia"] ,
        ["Slovenia", "Slovenia"] ,
        ["South Africa", "South Africa"] ,
        ["South Korea", "South Korea"] ,
        ["Spain", "Spain"] ,
        ["Sweden", "Sweden"] ,
        ["Switzerland", "Switzerland"] ,
        ["Syria", "Syria"] ,
        ["Tajikistan", "Tajikistan"] ,
        ["Tanzania", "Tanzania"] ,
        ["Thailand", "Thailand"] ,
        ["Tunisia", "Tunisia"] ,
        ["Turkey", "Turkey"] ,
        ["Ukraine", "Ukraine"] ,
        ["United Arab Emirates", "United Arab Emirates"] ,
        ["United Kingdom", "United Kingdom"] ,
        ["United States", "United States"] ,
        ["Uruguay", "Uruguay"] ,
        ["Uzbekistan", "Uzbekistan"] ,
        ["Venezuela", "Venezuela"] ,
        ["Vietnam", "Vietnam"] 
    ]
}

var global_emissions_PROPERTIES = [
    ["Year", "Year"] ,
    ["Country.Name", "Country.Name"] ,
    ["Country.Code", "Country.Code"] ,
    ["Country.GDP", "Country.GDP"] ,
    ["Country.Population", "Country.Population"] ,
    ["Emissions.Production.CH4", "Emissions.Production.CH4"] ,
    ["Emissions.Production.N2O", "Emissions.Production.N2O"] ,
    ["Emissions.Production.CO2.Cement", "Emissions.Production.CO2.Cement"] ,
    ["Emissions.Production.CO2.Coal", "Emissions.Production.CO2.Coal"] ,
    ["Emissions.Production.CO2.Gas", "Emissions.Production.CO2.Gas"] ,
    ["Emissions.Production.CO2.Oil", "Emissions.Production.CO2.Oil"] ,
    ["Emissions.Production.CO2.Flaring", "Emissions.Production.CO2.Flaring"] ,
    ["Emissions.Production.CO2.Other", "Emissions.Production.CO2.Other"] ,
    ["Emissions.Production.CO2.Total", "Emissions.Production.CO2.Total"] ,
    ["Emissions.Global Share.CO2.Cement", "Emissions.Global Share.CO2.Cement"] ,
    ["Emissions.Global Share.CO2.Coal", "Emissions.Global Share.CO2.Coal"] ,
    ["Emissions.Global Share.CO2.Gas", "Emissions.Global Share.CO2.Gas"] ,
    ["Emissions.Global Share.CO2.Oil", "Emissions.Global Share.CO2.Oil"] ,
    ["Emissions.Global Share.CO2.Flaring", "Emissions.Global Share.CO2.Flaring"] ,
    ["Emissions.Global Share.CO2.Total", "Emissions.Global Share.CO2.Total"] 
]

Blockly.Blocks['global_emissions_get'] = {
  init: function() {
    this.setColour(45);
    this.appendDummyInput('MAIN')
        .appendField("global_emissions.get")
        .appendField(new Blockly.FieldDropdown(global_emissions_PROPERTIES), "PROPERTY");
    this.appendDummyInput('SECOND')
        .appendField("filter")
        .appendField(new Blockly.FieldDropdown(global_emissions_INDEXES, function(option) {
                        this.getSourceBlock().updateShape_(option);
                    }), "INDEX")
    this.updateShape_("(None)");
    this.setInputsInline(false);
    this.setOutput(true, "Array");
    this.setTooltip('Returns a list of global emissions data.');
  },
  mutationToDom: function() {
    var container = document.createElement('mutation');
    container.setAttribute('index', this.getFieldValue('INDEX'));
    container.setAttribute('index_value', this.getFieldValue('INDEX_VALUE'));
    container.setAttribute('module', "global_emissions")
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
            inputGroup.appendField(new Blockly.FieldDropdown(global_emissions_INDEX_VALUES[index]), 'INDEX_VALUE')
            if (index_value != undefined) {
                this.setFieldValue(index_value, 'INDEX_VALUE');
            } else {
                this.setFieldValue(global_emissions_INDEX_VALUES[index][0][0], 'INDEX_VALUE');
            }
        }
    } catch (e) {
        inputGroup.appendField(new Blockly.FieldLabel("Reset to fix the blocks"));
        console.error(e);
    }
  }
};
Blockly.Python['global_emissions_get'] = function(block) {
    Blockly.Python.definitions_['import_global_emissions'] = 'import global_emissions';
    var propertyValue = block.getFieldValue('PROPERTY') || '';
    var property = Blockly.Python.quote_(propertyValue);
    var index_unquoted = block.getFieldValue('INDEX');
    var index = Blockly.Python.quote_(index_unquoted || '');
    var index_value = "''";
    if (index_unquoted !== '(None)') {
        var iv = block.getFieldValue('INDEX_VALUE') || "";
        index_value = Blockly.Python.quote_(iv);
    }
    var code = 'global_emissions.get('+property+',' +index+','+index_value+')';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

BlockMirrorTextToBlocks.prototype.MODULE_FUNCTION_SIGNATURES['global_emissions'] = {
    "get": {
        custom: function(node, parent) {
            if (!node.args || node.args.length < 3 ||
                !node.args[0] || !node.args[1] || !node.args[2] ||
                node.args[0]._astname !== "Str" || node.args[1]._astname !== "Str" || node.args[2]._astname !== "Str"
            ) {
                throw new Error("Not the right function call.");
            }
            return BlockMirrorTextToBlocks.create_block("global_emissions_get", null,
                {"PROPERTY": node.args[0].s.v},
                {}, {}, {"@INDEX": node.args[1].s.v,
                    "@INDEX_VALUE": node.args[2].s.v});
        }
    },
};

BlockMirrorBlockEditor.EXTRA_TOOLS['Data - global emissions'] = '<category name="Data - Global Emissions" colour="45">'+
                    '<block type="global_emissions_get"><mutation index="(None)" index_value=""></mutation></block>'+
                '</category>';