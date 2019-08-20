

var suicide_attacks_INDEXES = [
    ["(None)", "(None)"],
    
    ["campaign.name", "campaign.name"] ,
    ["target.country", "target.country"] 
];

var suicide_attacks_INDEX_VALUES = {
    "(None)": [],
    
    "campaign.name": [
        
        ["Afghan Rebels vs. U.S. & Allies", "Afghan Rebels vs. U.S. & Allies"] ,
        ["Al Qaeda vs. U.S. & Allies", "Al Qaeda vs. U.S. & Allies"] ,
        ["Al-Qaida in Islamic North Africa", "Al-Qaida in Islamic North Africa"] ,
        ["BKI vs. India", "BKI vs. India"] ,
        ["Chechen Separatists vs. Russia", "Chechen Separatists vs. Russia"] ,
        ["Egyptian Rebels", "Egyptian Rebels"] ,
        ["Hezbollah vs. Israel", "Hezbollah vs. Israel"] ,
        ["Hezbollah vs. U.S. & France", "Hezbollah vs. U.S. & France"] ,
        ["Indonesian Rebels vs. Indonesian Government & Allies", "Indonesian Rebels vs. Indonesian Government & Allies"] ,
        ["Iraqi Rebels vs. Iraqi Government & Allies", "Iraqi Rebels vs. Iraqi Government & Allies"] ,
        ["Iraqi Rebels vs. U.S. & Allies", "Iraqi Rebels vs. U.S. & Allies"] ,
        ["Isolated Attacks", "Isolated Attacks"] ,
        ["Jundullah vs. Iran", "Jundullah vs. Iran"] ,
        ["Kashmiri Rebels vs. India", "Kashmiri Rebels vs. India"] ,
        ["Libyan Rebels", "Libyan Rebels"] ,
        ["LTTE vs. Sri Lanka & India", "LTTE vs. Sri Lanka & India"] ,
        ["Pakistani Rebels vs. Pakistan & U.S. Allies", "Pakistani Rebels vs. Pakistan & U.S. Allies"] ,
        ["Palestinian Resistance vs. Israel", "Palestinian Resistance vs. Israel"] ,
        ["PKK vs. Turkey", "PKK vs. Turkey"] ,
        ["Rebels vs. Government of Mali & Allies", "Rebels vs. Government of Mali & Allies"] ,
        ["Rebels vs. Nigeria & Allies", "Rebels vs. Nigeria & Allies"] ,
        ["Rebels vs. Saudi Arabia", "Rebels vs. Saudi Arabia"] ,
        ["Rebels vs. Syria & Allies", "Rebels vs. Syria & Allies"] ,
        ["Rebels vs. Yemen", "Rebels vs. Yemen"] ,
        ["Russian Separatists vs. Ukraine", "Russian Separatists vs. Ukraine"] ,
        ["Somali Rebels vs. Ethiopia & Allies", "Somali Rebels vs. Ethiopia & Allies"] ,
        ["Uzbek Rebels vs. U.S.", "Uzbek Rebels vs. U.S."] ,
        ["Xinjiang Rebels vs. Chinese Government", "Xinjiang Rebels vs. Chinese Government"] 
    ],
    "target.country": [
        
        ["Afghanistan", "Afghanistan"] ,
        ["Algeria", "Algeria"] ,
        ["Argentina", "Argentina"] ,
        ["Bangladesh", "Bangladesh"] ,
        ["Bolivia", "Bolivia"] ,
        ["Bulgaria", "Bulgaria"] ,
        ["Chad", "Chad"] ,
        ["China", "China"] ,
        ["Djibouti", "Djibouti"] ,
        ["Egypt", "Egypt"] ,
        ["Finland", "Finland"] ,
        ["India", "India"] ,
        ["Indonesia", "Indonesia"] ,
        ["Iran", "Iran"] ,
        ["Iraq", "Iraq"] ,
        ["Israel", "Israel"] ,
        ["Jordan", "Jordan"] ,
        ["Kazakhstan", "Kazakhstan"] ,
        ["Kenya", "Kenya"] ,
        ["Kuwait", "Kuwait"] ,
        ["Lebanon", "Lebanon"] ,
        ["Libya", "Libya"] ,
        ["Mali", "Mali"] ,
        ["Mauritania", "Mauritania"] ,
        ["Morocco", "Morocco"] ,
        ["Niger", "Niger"] ,
        ["Nigeria", "Nigeria"] ,
        ["Pakistan", "Pakistan"] ,
        ["Palestinian Territory, Occupied", "Palestinian Territory, Occupied"] ,
        ["Qatar", "Qatar"] ,
        ["Russia", "Russia"] ,
        ["Saudi Arabia", "Saudi Arabia"] ,
        ["Somalia", "Somalia"] ,
        ["Spain", "Spain"] ,
        ["Sri Lanka", "Sri Lanka"] ,
        ["Sweden", "Sweden"] ,
        ["Syria", "Syria"] ,
        ["Tajikistan", "Tajikistan"] ,
        ["Tanzania", "Tanzania"] ,
        ["Tunisia", "Tunisia"] ,
        ["Turkey", "Turkey"] ,
        ["Uganda", "Uganda"] ,
        ["Ukraine", "Ukraine"] ,
        ["United Kingdom", "United Kingdom"] ,
        ["United States", "United States"] ,
        ["Uzbekistan", "Uzbekistan"] ,
        ["Yemen", "Yemen"] 
    ]
}

var suicide_attacks_PROPERTIES = [
    ["groups", "groups"] ,
    ["attacker.age", "attacker.age"] ,
    ["attacker.name", "attacker.name"] ,
    ["campaign.name", "campaign.name"] ,
    ["campaign.sides", "campaign.sides"] ,
    ["date.day", "date.day"] ,
    ["date.month", "date.month"] ,
    ["date.year", "date.year"] ,
    ["statistics.# killed", "statistics.# killed"] ,
    ["statistics.# wounded", "statistics.# wounded"] ,
    ["target.assassination?", "target.assassination?"] ,
    ["target.country", "target.country"] ,
    ["target.location", "target.location"] ,
    ["target.name", "target.name"] ,
    ["target.type", "target.type"] ,
    ["target.weapon", "target.weapon"] ,
    ["attacker.birth.location", "attacker.birth.location"] ,
    ["attacker.birth.year", "attacker.birth.year"] ,
    ["attacker.demographics.education", "attacker.demographics.education"] ,
    ["attacker.demographics.gender", "attacker.demographics.gender"] ,
    ["attacker.demographics.marital", "attacker.demographics.marital"] ,
    ["attacker.demographics.occupation", "attacker.demographics.occupation"] ,
    ["attacker.demographics.religion", "attacker.demographics.religion"] 
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
    if (index != undefined && index != '(None)') {
        inputGroup.appendField(new Blockly.FieldDropdown(suicide_attacks_INDEX_VALUES[index]), 'INDEX_VALUE')
        if (index_value != undefined) {
            this.setFieldValue(index_value, 'INDEX_VALUE');
        } else {
            this.setFieldValue(suicide_attacks_INDEX_VALUES[index][0][0], 'INDEX_VALUE');
        }
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