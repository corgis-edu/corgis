

var drugs_INDEXES = [
    ["(None)", "(None)"],
    
    ["State", "State"] ,
    ["Year", "Year"] 
];

var drugs_INDEX_VALUES = {
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

var drugs_PROPERTIES = [
    ["State", "State"] ,
    ["Year", "Year"] ,
    ["Population.12-17", "Population.12-17"] ,
    ["Population.18-25", "Population.18-25"] ,
    ["Population.26+", "Population.26+"] ,
    ["Totals.Alcohol.Use Disorder Past Year.12-17", "Totals.Alcohol.Use Disorder Past Year.12-17"] ,
    ["Totals.Alcohol.Use Disorder Past Year.18-25", "Totals.Alcohol.Use Disorder Past Year.18-25"] ,
    ["Totals.Alcohol.Use Disorder Past Year.26+", "Totals.Alcohol.Use Disorder Past Year.26+"] ,
    ["Rates.Alcohol.Use Disorder Past Year.12-17", "Rates.Alcohol.Use Disorder Past Year.12-17"] ,
    ["Rates.Alcohol.Use Disorder Past Year.18-25", "Rates.Alcohol.Use Disorder Past Year.18-25"] ,
    ["Rates.Alcohol.Use Disorder Past Year.26+", "Rates.Alcohol.Use Disorder Past Year.26+"] ,
    ["Totals.Alcohol.Use Past Month.12-17", "Totals.Alcohol.Use Past Month.12-17"] ,
    ["Totals.Alcohol.Use Past Month.18-25", "Totals.Alcohol.Use Past Month.18-25"] ,
    ["Totals.Alcohol.Use Past Month.26+", "Totals.Alcohol.Use Past Month.26+"] ,
    ["Rates.Alcohol.Use Past Month.12-17", "Rates.Alcohol.Use Past Month.12-17"] ,
    ["Rates.Alcohol.Use Past Month.18-25", "Rates.Alcohol.Use Past Month.18-25"] ,
    ["Rates.Alcohol.Use Past Month.26+", "Rates.Alcohol.Use Past Month.26+"] ,
    ["Totals.Tobacco.Cigarette Past Month.12-17", "Totals.Tobacco.Cigarette Past Month.12-17"] ,
    ["Totals.Tobacco.Cigarette Past Month.18-25", "Totals.Tobacco.Cigarette Past Month.18-25"] ,
    ["Totals.Tobacco.Cigarette Past Month.26+", "Totals.Tobacco.Cigarette Past Month.26+"] ,
    ["Rates.Tobacco.Cigarette Past Month.12-17", "Rates.Tobacco.Cigarette Past Month.12-17"] ,
    ["Rates.Tobacco.Cigarette Past Month.18-25", "Rates.Tobacco.Cigarette Past Month.18-25"] ,
    ["Rates.Tobacco.Cigarette Past Month.26+", "Rates.Tobacco.Cigarette Past Month.26+"] ,
    ["Totals.Illicit Drugs.Cocaine Used Past Year.12-17", "Totals.Illicit Drugs.Cocaine Used Past Year.12-17"] ,
    ["Totals.Illicit Drugs.Cocaine Used Past Year.18-25", "Totals.Illicit Drugs.Cocaine Used Past Year.18-25"] ,
    ["Totals.Illicit Drugs.Cocaine Used Past Year.26+", "Totals.Illicit Drugs.Cocaine Used Past Year.26+"] ,
    ["Rates.Illicit Drugs.Cocaine Used Past Year.12-17", "Rates.Illicit Drugs.Cocaine Used Past Year.12-17"] ,
    ["Rates.Illicit Drugs.Cocaine Used Past Year.18-25", "Rates.Illicit Drugs.Cocaine Used Past Year.18-25"] ,
    ["Rates.Illicit Drugs.Cocaine Used Past Year.26+", "Rates.Illicit Drugs.Cocaine Used Past Year.26+"] ,
    ["Totals.Marijuana.New Users.12-17", "Totals.Marijuana.New Users.12-17"] ,
    ["Totals.Marijuana.New Users.18-25", "Totals.Marijuana.New Users.18-25"] ,
    ["Totals.Marijuana.New Users.26+", "Totals.Marijuana.New Users.26+"] ,
    ["Rates.Marijuana.New Users.12-17", "Rates.Marijuana.New Users.12-17"] ,
    ["Rates.Marijuana.New Users.18-25", "Rates.Marijuana.New Users.18-25"] ,
    ["Rates.Marijuana.New Users.26+", "Rates.Marijuana.New Users.26+"] ,
    ["Totals.Marijuana.Used Past Month.12-17", "Totals.Marijuana.Used Past Month.12-17"] ,
    ["Totals.Marijuana.Used Past Month.18-25", "Totals.Marijuana.Used Past Month.18-25"] ,
    ["Totals.Marijuana.Used Past Month.26+", "Totals.Marijuana.Used Past Month.26+"] ,
    ["Rates.Marijuana.Used Past Month.12-17", "Rates.Marijuana.Used Past Month.12-17"] ,
    ["Rates.Marijuana.Used Past Month.18-25", "Rates.Marijuana.Used Past Month.18-25"] ,
    ["Rates.Marijuana.Used Past Month.26+", "Rates.Marijuana.Used Past Month.26+"] ,
    ["Totals.Marijuana.Used Past Year.12-17", "Totals.Marijuana.Used Past Year.12-17"] ,
    ["Totals.Marijuana.Used Past Year.18-25", "Totals.Marijuana.Used Past Year.18-25"] ,
    ["Totals.Marijuana.Used Past Year.26+", "Totals.Marijuana.Used Past Year.26+"] ,
    ["Rates.Marijuana.Used Past Year.12-17", "Rates.Marijuana.Used Past Year.12-17"] ,
    ["Rates.Marijuana.Used Past Year.18-25", "Rates.Marijuana.Used Past Year.18-25"] ,
    ["Rates.Marijuana.Used Past Year.26+", "Rates.Marijuana.Used Past Year.26+"] ,
    ["Totals.Tobacco.Use Past Month.12-17", "Totals.Tobacco.Use Past Month.12-17"] ,
    ["Totals.Tobacco.Use Past Month.18-25", "Totals.Tobacco.Use Past Month.18-25"] ,
    ["Totals.Tobacco.Use Past Month.26+", "Totals.Tobacco.Use Past Month.26+"] ,
    ["Rates.Tobacco.Use Past Month.12-17", "Rates.Tobacco.Use Past Month.12-17"] ,
    ["Rates.Tobacco.Use Past Month.18-25", "Rates.Tobacco.Use Past Month.18-25"] ,
    ["Rates.Tobacco.Use Past Month.26+", "Rates.Tobacco.Use Past Month.26+"] 
]

Blockly.Blocks['drugs_get'] = {
  init: function() {
    this.setColour(45);
    this.appendDummyInput('MAIN')
        .appendField("drugs.get")
        .appendField(new Blockly.FieldDropdown(drugs_PROPERTIES), "PROPERTY");
    this.appendDummyInput('SECOND')
        .appendField("filter")
        .appendField(new Blockly.FieldDropdown(drugs_INDEXES, function(option) {
                        this.getSourceBlock().updateShape_(option);
                    }), "INDEX")
    this.updateShape_("(None)");
    this.setInputsInline(false);
    this.setOutput(true, "Array");
    this.setTooltip('Returns a list of drugs data.');
  },
  mutationToDom: function() {
    var container = document.createElement('mutation');
    container.setAttribute('index', this.getFieldValue('INDEX'));
    container.setAttribute('index_value', this.getFieldValue('INDEX_VALUE'));
    container.setAttribute('module', "drugs")
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
            inputGroup.appendField(new Blockly.FieldDropdown(drugs_INDEX_VALUES[index]), 'INDEX_VALUE')
            if (index_value != undefined) {
                this.setFieldValue(index_value, 'INDEX_VALUE');
            } else {
                this.setFieldValue(drugs_INDEX_VALUES[index][0][0], 'INDEX_VALUE');
            }
        }
    } catch (e) {
        inputGroup.appendField(new Blockly.FieldLabel("Reset to fix the blocks"));
        console.error(e);
    }
  }
};
Blockly.Python['drugs_get'] = function(block) {
    Blockly.Python.definitions_['import_drugs'] = 'import drugs';
    var propertyValue = block.getFieldValue('PROPERTY') || '';
    var property = Blockly.Python.quote_(propertyValue);
    var index_unquoted = block.getFieldValue('INDEX');
    var index = Blockly.Python.quote_(index_unquoted || '');
    var index_value = "''";
    if (index_unquoted !== '(None)') {
        var iv = block.getFieldValue('INDEX_VALUE') || "";
        index_value = Blockly.Python.quote_(iv);
    }
    var code = 'drugs.get('+property+',' +index+','+index_value+')';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

BlockMirrorTextToBlocks.prototype.MODULE_FUNCTION_SIGNATURES['drugs'] = {
    "get": {
        custom: function(node, parent) {
            if (!node.args || node.args.length < 3 ||
                !node.args[0] || !node.args[1] || !node.args[2] ||
                node.args[0]._astname !== "Str" || node.args[1]._astname !== "Str" || node.args[2]._astname !== "Str"
            ) {
                throw new Error("Not the right function call.");
            }
            return BlockMirrorTextToBlocks.create_block("drugs_get", null,
                {"PROPERTY": node.args[0].s.v},
                {}, {}, {"@INDEX": node.args[1].s.v,
                    "@INDEX_VALUE": node.args[2].s.v});
        }
    },
};

BlockMirrorBlockEditor.EXTRA_TOOLS['Data - drugs'] = '<category name="Data - Drugs" colour="45">'+
                    '<block type="drugs_get"><mutation index="(None)" index_value=""></mutation></block>'+
                '</category>';