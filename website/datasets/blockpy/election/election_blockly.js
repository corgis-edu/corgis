

var election_INDEXES = [
    ["(None)", "(None)"],
    
];

var election_INDEX_VALUES = {
    "(None)": [],
    
}

var election_PROPERTIES = [
    ["Location.County", "Location.County"] ,
    ["Location.State", "Location.State"] ,
    ["Location.State Abbreviation", "Location.State Abbreviation"] ,
    ["Vote Data.Ben Carson.Number of Votes", "Vote Data.Ben Carson.Number of Votes"] ,
    ["Vote Data.Ben Carson.Party", "Vote Data.Ben Carson.Party"] ,
    ["Vote Data.Ben Carson.Percent of Votes", "Vote Data.Ben Carson.Percent of Votes"] ,
    ["Vote Data.Bernie Sanders.Number of Votes", "Vote Data.Bernie Sanders.Number of Votes"] ,
    ["Vote Data.Bernie Sanders.Party", "Vote Data.Bernie Sanders.Party"] ,
    ["Vote Data.Bernie Sanders.Percent of Votes", "Vote Data.Bernie Sanders.Percent of Votes"] ,
    ["Vote Data.Carly Fiorina.Number of Votes", "Vote Data.Carly Fiorina.Number of Votes"] ,
    ["Vote Data.Carly Fiorina.Party", "Vote Data.Carly Fiorina.Party"] ,
    ["Vote Data.Carly Fiorina.Percent of Votes", "Vote Data.Carly Fiorina.Percent of Votes"] ,
    ["Vote Data.Chris Christie.Number of Votes", "Vote Data.Chris Christie.Number of Votes"] ,
    ["Vote Data.Chris Christie.Party", "Vote Data.Chris Christie.Party"] ,
    ["Vote Data.Chris Christie.Percent of Votes", "Vote Data.Chris Christie.Percent of Votes"] ,
    ["Vote Data.Donald Trump.Number of Votes", "Vote Data.Donald Trump.Number of Votes"] ,
    ["Vote Data.Donald Trump.Party", "Vote Data.Donald Trump.Party"] ,
    ["Vote Data.Donald Trump.Percent of Votes", "Vote Data.Donald Trump.Percent of Votes"] ,
    ["Vote Data.Hillary Clinton.Number of Votes", "Vote Data.Hillary Clinton.Number of Votes"] ,
    ["Vote Data.Hillary Clinton.Party", "Vote Data.Hillary Clinton.Party"] ,
    ["Vote Data.Hillary Clinton.Percent of Votes", "Vote Data.Hillary Clinton.Percent of Votes"] ,
    ["Vote Data.Jeb Bush.Number of Votes", "Vote Data.Jeb Bush.Number of Votes"] ,
    ["Vote Data.Jeb Bush.Party", "Vote Data.Jeb Bush.Party"] ,
    ["Vote Data.Jeb Bush.Percent of Votes", "Vote Data.Jeb Bush.Percent of Votes"] ,
    ["Vote Data.John Kasich.Number of Votes", "Vote Data.John Kasich.Number of Votes"] ,
    ["Vote Data.John Kasich.Party", "Vote Data.John Kasich.Party"] ,
    ["Vote Data.John Kasich.Percent of Votes", "Vote Data.John Kasich.Percent of Votes"] ,
    ["Vote Data.Marco Rubio.Number of Votes", "Vote Data.Marco Rubio.Number of Votes"] ,
    ["Vote Data.Marco Rubio.Party", "Vote Data.Marco Rubio.Party"] ,
    ["Vote Data.Marco Rubio.Percent of Votes", "Vote Data.Marco Rubio.Percent of Votes"] ,
    ["Vote Data.Martin O'Malley.Number of Votes", "Vote Data.Martin O'Malley.Number of Votes"] ,
    ["Vote Data.Martin O'Malley.Party", "Vote Data.Martin O'Malley.Party"] ,
    ["Vote Data.Martin O'Malley.Percent of Votes", "Vote Data.Martin O'Malley.Percent of Votes"] ,
    ["Vote Data.Mike Huckabee.Number of Votes", "Vote Data.Mike Huckabee.Number of Votes"] ,
    ["Vote Data.Mike Huckabee.Party", "Vote Data.Mike Huckabee.Party"] ,
    ["Vote Data.Mike Huckabee.Percent of Votes", "Vote Data.Mike Huckabee.Percent of Votes"] ,
    ["Vote Data.No Preference.Number of Votes", "Vote Data.No Preference.Number of Votes"] ,
    ["Vote Data.No Preference.Party", "Vote Data.No Preference.Party"] ,
    ["Vote Data.No Preference.Percent of Votes", "Vote Data.No Preference.Percent of Votes"] ,
    ["Vote Data.Rand Paul.Number of Votes", "Vote Data.Rand Paul.Number of Votes"] ,
    ["Vote Data.Rand Paul.Party", "Vote Data.Rand Paul.Party"] ,
    ["Vote Data.Rand Paul.Percent of Votes", "Vote Data.Rand Paul.Percent of Votes"] ,
    ["Vote Data.Rick Santorum.Number of Votes", "Vote Data.Rick Santorum.Number of Votes"] ,
    ["Vote Data.Rick Santorum.Party", "Vote Data.Rick Santorum.Party"] ,
    ["Vote Data.Rick Santorum.Percent of Votes", "Vote Data.Rick Santorum.Percent of Votes"] ,
    ["Vote Data.Ted Cruz.Number of Votes", "Vote Data.Ted Cruz.Number of Votes"] ,
    ["Vote Data.Ted Cruz.Party", "Vote Data.Ted Cruz.Party"] ,
    ["Vote Data.Ted Cruz.Percent of Votes", "Vote Data.Ted Cruz.Percent of Votes"] ,
    ["Vote Data.Uncommitted.Number of Votes", "Vote Data.Uncommitted.Number of Votes"] ,
    ["Vote Data.Uncommitted.Party", "Vote Data.Uncommitted.Party"] ,
    ["Vote Data.Uncommitted.Percent of Votes", "Vote Data.Uncommitted.Percent of Votes"] 
]

Blockly.Blocks['election_get'] = {
  init: function() {
    this.setColour(45);
    this.appendDummyInput('MAIN')
        .appendField("election.get")
        .appendField(new Blockly.FieldDropdown(election_PROPERTIES), "PROPERTY");
    this.appendDummyInput('SECOND')
        .appendField("filter")
        .appendField(new Blockly.FieldDropdown(election_INDEXES, function(option) {
                        this.getSourceBlock().updateShape_(option);
                    }), "INDEX")
    this.updateShape_("(None)");
    this.setInputsInline(false);
    this.setOutput(true, "Array");
    this.setTooltip('Returns a list of election data.');
  },
  mutationToDom: function() {
    var container = document.createElement('mutation');
    container.setAttribute('index', this.getFieldValue('INDEX'));
    container.setAttribute('index_value', this.getFieldValue('INDEX_VALUE'));
    container.setAttribute('module', "election")
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
    if (index != undefined && index != '(None)') {
        inputGroup.appendField(new Blockly.FieldDropdown(election_INDEX_VALUES[index]), 'INDEX_VALUE')
        if (index_value != undefined) {
            this.setFieldValue(index_value, 'INDEX_VALUE');
        } else {
            this.setFieldValue(election_INDEX_VALUES[index][0][0], 'INDEX_VALUE');
        }
    }    
  }
};
Blockly.Python['election_get'] = function(block) {
    Blockly.Python.definitions_['import_election'] = 'import election';
    var propertyValue = block.getFieldValue('PROPERTY') || '';
    var property = Blockly.Python.quote_(propertyValue);
    var index_unquoted = block.getFieldValue('INDEX');
    var index = Blockly.Python.quote_(index_unquoted || '');
    var index_value = "''";
    if (index_unquoted !== '(None)') {
        var iv = block.getFieldValue('INDEX_VALUE') || "";
        index_value = Blockly.Python.quote_(iv);
    }
    var code = 'election.get('+property+',' +index+','+index_value+')';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

BlockMirrorTextToBlocks.prototype.MODULE_FUNCTION_SIGNATURES['election'] = {
    "get": {
        custom: function(node, parent) {
            if (!node.args || node.args.length < 3 ||
                !node.args[0] || !node.args[1] || !node.args[2] ||
                node.args[0]._astname !== "Str" || node.args[1]._astname !== "Str" || node.args[2]._astname !== "Str"
            ) {
                throw new Error("Not the right function call.");
            }
            return BlockMirrorTextToBlocks.create_block("election_get", null,
                {"PROPERTY": node.args[0].s.v},
                {}, {}, {"@INDEX": node.args[1].s.v,
                    "@INDEX_VALUE": node.args[2].s.v});
        }
    },
};

BlockMirrorBlockEditor.EXTRA_TOOLS['Data - election'] = '<category name="Data - election" colour="45">'+
                    '<block type="election_get"><mutation index="(None)" index_value=""></mutation></block>'+
                '</category>';