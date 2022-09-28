

var covid_behaviors_INDEXES = [
    ["(None)", "(None)"],
    
    ["Country", "Country"] ,
    ["Days since outbreak", "Days since outbreak"] 
];

var covid_behaviors_INDEX_VALUES = {
    "(None)": [],
    
    "Country": [
        
        ["Australia", "Australia"] ,
        ["Brazil", "Brazil"] ,
        ["Canada", "Canada"] ,
        ["China", "China"] ,
        ["Denmark", "Denmark"] ,
        ["Finland", "Finland"] ,
        ["France", "France"] ,
        ["Germany", "Germany"] ,
        ["Hong Kong", "Hong Kong"] ,
        ["India", "India"] ,
        ["Indonesia", "Indonesia"] ,
        ["Italy", "Italy"] ,
        ["Japan", "Japan"] ,
        ["Malaysia", "Malaysia"] ,
        ["Mexico", "Mexico"] ,
        ["Netherlands", "Netherlands"] ,
        ["Norway", "Norway"] ,
        ["Philippines", "Philippines"] ,
        ["Saudi Arabia", "Saudi Arabia"] ,
        ["Singapore", "Singapore"] ,
        ["South Korea", "South Korea"] ,
        ["Spain", "Spain"] ,
        ["Sweden", "Sweden"] ,
        ["Taiwan", "Taiwan"] ,
        ["Thailand", "Thailand"] ,
        ["United Arab Emirates", "United Arab Emirates"] ,
        ["United Kingdom", "United Kingdom"] ,
        ["United States", "United States"] ,
        ["Vietnam", "Vietnam"] 
    ],
    "Days since outbreak": [
        
        ["85", "85"] ,
        ["115", "115"] ,
        ["146", "146"] ,
        ["176", "176"] ,
        ["207", "207"] ,
        ["238", "238"] ,
        ["268", "268"] ,
        ["299", "299"] ,
        ["329", "329"] ,
        ["360", "360"] ,
        ["391", "391"] ,
        ["419", "419"] ,
        ["450", "450"] ,
        ["480", "480"] 
    ]
}

var covid_behaviors_PROPERTIES = [
    ["Country", "Country"] ,
    ["Days since outbreak", "Days since outbreak"] ,
    ["Counts.Household contacts", "Counts.Household contacts"] ,
    ["Counts.Total contacts", "Counts.Total contacts"] ,
    ["Counts.Times left home", "Counts.Times left home"] ,
    ["Counts.Handwashes", "Counts.Handwashes"] ,
    ["Scores.Isolate.Willingness if symptoms", "Scores.Isolate.Willingness if symptoms"] ,
    ["Scores.Isolate.Willingness if advised", "Scores.Isolate.Willingness if advised"] ,
    ["Scores.Isolate.Difficulty", "Scores.Isolate.Difficulty"] ,
    ["Scores.Masks.Outside home", "Scores.Masks.Outside home"] ,
    ["Scores.Masks.Grocery store", "Scores.Masks.Grocery store"] ,
    ["Scores.Masks.Clothing store", "Scores.Masks.Clothing store"] ,
    ["Scores.Masks.Work", "Scores.Masks.Work"] ,
    ["Scores.Masks.Public transport", "Scores.Masks.Public transport"] ,
    ["Scores.Avoidance.Symptomatic people", "Scores.Avoidance.Symptomatic people"] ,
    ["Scores.Avoidance.Going out", "Scores.Avoidance.Going out"] ,
    ["Scores.Avoidance.Healthcare settings", "Scores.Avoidance.Healthcare settings"] ,
    ["Scores.Avoidance.Public transport", "Scores.Avoidance.Public transport"] ,
    ["Scores.Avoidance.Working outside home", "Scores.Avoidance.Working outside home"] ,
    ["Scores.Avoidance.Children going to school", "Scores.Avoidance.Children going to school"] ,
    ["Scores.Avoidance.Having guests", "Scores.Avoidance.Having guests"] ,
    ["Scores.Avoidance.Gatherings.Small", "Scores.Avoidance.Gatherings.Small"] ,
    ["Scores.Avoidance.Gatherings.Medium", "Scores.Avoidance.Gatherings.Medium"] ,
    ["Scores.Avoidance.Gatherings.Large", "Scores.Avoidance.Gatherings.Large"] ,
    ["Scores.Avoidance.Crowded areas", "Scores.Avoidance.Crowded areas"] ,
    ["Scores.Avoidance.Shops", "Scores.Avoidance.Shops"] ,
    ["Scores.Precautions.Cleaned surfaces", "Scores.Precautions.Cleaned surfaces"] ,
    ["Scores.Precautions.Covered mouth sneeze", "Scores.Precautions.Covered mouth sneeze"] ,
    ["Scores.Precautions.Used hand sanitiser", "Scores.Precautions.Used hand sanitiser"] ,
    ["Scores.Outlooks.Covid is dangerous", "Scores.Outlooks.Covid is dangerous"] ,
    ["Scores.Outlooks.Likely to get covid", "Scores.Outlooks.Likely to get covid"] ,
    ["Scores.Outlooks.Life greatly impacted", "Scores.Outlooks.Life greatly impacted"] 
]

Blockly.Blocks['covid_behaviors_get'] = {
  init: function() {
    this.setColour(45);
    this.appendDummyInput('MAIN')
        .appendField("covid_behaviors.get")
        .appendField(new Blockly.FieldDropdown(covid_behaviors_PROPERTIES), "PROPERTY");
    this.appendDummyInput('SECOND')
        .appendField("filter")
        .appendField(new Blockly.FieldDropdown(covid_behaviors_INDEXES, function(option) {
                        this.getSourceBlock().updateShape_(option);
                    }), "INDEX")
    this.updateShape_("(None)");
    this.setInputsInline(false);
    this.setOutput(true, "Array");
    this.setTooltip('Returns a list of covid-behaviors data.');
  },
  mutationToDom: function() {
    var container = document.createElement('mutation');
    container.setAttribute('index', this.getFieldValue('INDEX'));
    container.setAttribute('index_value', this.getFieldValue('INDEX_VALUE'));
    container.setAttribute('module', "covid_behaviors")
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
            inputGroup.appendField(new Blockly.FieldDropdown(covid_behaviors_INDEX_VALUES[index]), 'INDEX_VALUE')
            if (index_value != undefined) {
                this.setFieldValue(index_value, 'INDEX_VALUE');
            } else {
                this.setFieldValue(covid_behaviors_INDEX_VALUES[index][0][0], 'INDEX_VALUE');
            }
        }
    } catch (e) {
        inputGroup.appendField(new Blockly.FieldLabel("Reset to fix the blocks"));
        console.error(e);
    }
  }
};
Blockly.Python['covid_behaviors_get'] = function(block) {
    Blockly.Python.definitions_['import_covid_behaviors'] = 'import covid_behaviors';
    var propertyValue = block.getFieldValue('PROPERTY') || '';
    var property = Blockly.Python.quote_(propertyValue);
    var index_unquoted = block.getFieldValue('INDEX');
    var index = Blockly.Python.quote_(index_unquoted || '');
    var index_value = "''";
    if (index_unquoted !== '(None)') {
        var iv = block.getFieldValue('INDEX_VALUE') || "";
        index_value = Blockly.Python.quote_(iv);
    }
    var code = 'covid_behaviors.get('+property+',' +index+','+index_value+')';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

BlockMirrorTextToBlocks.prototype.MODULE_FUNCTION_SIGNATURES['covid_behaviors'] = {
    "get": {
        custom: function(node, parent) {
            if (!node.args || node.args.length < 3 ||
                !node.args[0] || !node.args[1] || !node.args[2] ||
                node.args[0]._astname !== "Str" || node.args[1]._astname !== "Str" || node.args[2]._astname !== "Str"
            ) {
                throw new Error("Not the right function call.");
            }
            return BlockMirrorTextToBlocks.create_block("covid_behaviors_get", null,
                {"PROPERTY": node.args[0].s.v},
                {}, {}, {"@INDEX": node.args[1].s.v,
                    "@INDEX_VALUE": node.args[2].s.v});
        }
    },
};

BlockMirrorBlockEditor.EXTRA_TOOLS['Data - covid-behaviors'] = '<category name="Data - Covid-Behaviors" colour="45">'+
                    '<block type="covid_behaviors_get"><mutation index="(None)" index_value=""></mutation></block>'+
                '</category>';