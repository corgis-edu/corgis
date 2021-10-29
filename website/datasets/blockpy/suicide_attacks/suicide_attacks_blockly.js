

var suicide_attacks_INDEXES = [
    ["(None)", "(None)"],
    
];

var suicide_attacks_INDEX_VALUES = {
    "(None)": [],
    
}

var suicide_attacks_PROPERTIES = [
    ["groups", "groups"] ,
    ["claim", "claim"] ,
    ["status", "status"] ,
    ["statistics.sources", "statistics.sources"] ,
    ["date.year", "date.year"] ,
    ["date.month", "date.month"] ,
    ["date.day", "date.day"] ,
    ["statistics.# wounded_low", "statistics.# wounded_low"] ,
    ["statistics.# wounded_high", "statistics.# wounded_high"] ,
    ["statistics.# killed_low", "statistics.# killed_low"] ,
    ["statistics.# killed_high", "statistics.# killed_high"] ,
    ["statistics.# killed_low_civilian", "statistics.# killed_low_civilian"] ,
    ["statistics.# killed_high_civilian", "statistics.# killed_high_civilian"] ,
    ["statistics.# killed_low_political", "statistics.# killed_low_political"] ,
    ["statistics.# killed_high_political", "statistics.# killed_high_political"] ,
    ["statistics.# killed_low_security", "statistics.# killed_low_security"] ,
    ["statistics.# killed_high_security", "statistics.# killed_high_security"] ,
    ["statistics.# belt_bomb", "statistics.# belt_bomb"] ,
    ["statistics.# truck_bomb", "statistics.# truck_bomb"] ,
    ["statistics.# car_bomb", "statistics.# car_bomb"] ,
    ["statistics.# weapon_oth", "statistics.# weapon_oth"] ,
    ["statistics.# weapon_unk", "statistics.# weapon_unk"] ,
    ["target.weapon", "target.weapon"] ,
    ["target.region", "target.region"] ,
    ["target.subregion", "target.subregion"] ,
    ["target.country", "target.country"] ,
    ["target.province", "target.province"] ,
    ["target.city", "target.city"] ,
    ["target.location", "target.location"] ,
    ["target.latitude", "target.latitude"] ,
    ["target.longtitude", "target.longtitude"] ,
    ["target.desc", "target.desc"] ,
    ["target.type", "target.type"] ,
    ["target.nationality", "target.nationality"] ,
    ["statistics.# attackers", "statistics.# attackers"] ,
    ["statistics.# female_attackers", "statistics.# female_attackers"] ,
    ["statistics.# male_attackers", "statistics.# male_attackers"] ,
    ["statistics.# unknown_attackers", "statistics.# unknown_attackers"] ,
    ["attacker.gender", "attacker.gender"] 
]

Blockly.Blocks['suicide_attacks_get'] = {
  init: function() {
    this.setColour(45);
    this.appendDummyInput('MAIN')
        .appendField("suicide_attacks.get")
        .appendField(new Blockly.FieldDropdown(suicide_attacks_PROPERTIES), "PROPERTY");
    this.appendDummyInput('SECOND')
        .appendField("filter")
        .appendField(new Blockly.FieldDropdown(suicide_attacks_INDEXES, function(option) {
                        this.getSourceBlock().updateShape_(option);
                    }), "INDEX")
    this.updateShape_("(None)");
    this.setInputsInline(false);
    this.setOutput(true, "Array");
    this.setTooltip('Returns a list of suicide attacks data.');
  },
  mutationToDom: function() {
    var container = document.createElement('mutation');
    container.setAttribute('index', this.getFieldValue('INDEX'));
    container.setAttribute('index_value', this.getFieldValue('INDEX_VALUE'));
    container.setAttribute('module', "suicide_attacks")
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
            inputGroup.appendField(new Blockly.FieldDropdown(suicide_attacks_INDEX_VALUES[index]), 'INDEX_VALUE')
            if (index_value != undefined) {
                this.setFieldValue(index_value, 'INDEX_VALUE');
            } else {
                this.setFieldValue(suicide_attacks_INDEX_VALUES[index][0][0], 'INDEX_VALUE');
            }
        }
    } catch (e) {
        inputGroup.appendField(new Blockly.FieldLabel("Reset to fix the blocks"));
        console.error(e);
    }
  }
};
Blockly.Python['suicide_attacks_get'] = function(block) {
    Blockly.Python.definitions_['import_suicide_attacks'] = 'import suicide_attacks';
    var propertyValue = block.getFieldValue('PROPERTY') || '';
    var property = Blockly.Python.quote_(propertyValue);
    var index_unquoted = block.getFieldValue('INDEX');
    var index = Blockly.Python.quote_(index_unquoted || '');
    var index_value = "''";
    if (index_unquoted !== '(None)') {
        var iv = block.getFieldValue('INDEX_VALUE') || "";
        index_value = Blockly.Python.quote_(iv);
    }
    var code = 'suicide_attacks.get('+property+',' +index+','+index_value+')';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

BlockMirrorTextToBlocks.prototype.MODULE_FUNCTION_SIGNATURES['suicide_attacks'] = {
    "get": {
        custom: function(node, parent) {
            if (!node.args || node.args.length < 3 ||
                !node.args[0] || !node.args[1] || !node.args[2] ||
                node.args[0]._astname !== "Str" || node.args[1]._astname !== "Str" || node.args[2]._astname !== "Str"
            ) {
                throw new Error("Not the right function call.");
            }
            return BlockMirrorTextToBlocks.create_block("suicide_attacks_get", null,
                {"PROPERTY": node.args[0].s.v},
                {}, {}, {"@INDEX": node.args[1].s.v,
                    "@INDEX_VALUE": node.args[2].s.v});
        }
    },
};

BlockMirrorBlockEditor.EXTRA_TOOLS['Data - suicide attacks'] = '<category name="Data - Suicide Attacks" colour="45">'+
                    '<block type="suicide_attacks_get"><mutation index="(None)" index_value=""></mutation></block>'+
                '</category>';