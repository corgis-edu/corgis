

var billionaires_INDEXES = [
    ["(None)", "(None)"],
    
    ["year", "year"] ,
    ["location.citizenship", "location.citizenship"] 
];

var billionaires_INDEX_VALUES = {
    "(None)": [],
    
    "year": [
        
        ["1996", "1996"] ,
        ["2001", "2001"] ,
        ["2014", "2014"] 
    ],
    "location.citizenship": [
        
        ["Algeria", "Algeria"] ,
        ["Angola", "Angola"] ,
        ["Argentina", "Argentina"] ,
        ["Australia", "Australia"] ,
        ["Austria", "Austria"] ,
        ["Bahrain", "Bahrain"] ,
        ["Belgium", "Belgium"] ,
        ["Bermuda", "Bermuda"] ,
        ["Brazil", "Brazil"] ,
        ["Canada", "Canada"] ,
        ["Chile", "Chile"] ,
        ["China", "China"] ,
        ["Colombia", "Colombia"] ,
        ["Cyprus", "Cyprus"] ,
        ["Czech Republic", "Czech Republic"] ,
        ["Denmark", "Denmark"] ,
        ["Ecuador", "Ecuador"] ,
        ["Egypt", "Egypt"] ,
        ["Finland", "Finland"] ,
        ["France", "France"] ,
        ["Georgia", "Georgia"] ,
        ["Germany", "Germany"] ,
        ["Greece", "Greece"] ,
        ["Guernsey", "Guernsey"] ,
        ["Hong Kong", "Hong Kong"] ,
        ["India", "India"] ,
        ["Indonesia", "Indonesia"] ,
        ["Ireland", "Ireland"] ,
        ["Israel", "Israel"] ,
        ["Italy", "Italy"] ,
        ["Japan", "Japan"] ,
        ["Kazakhstan", "Kazakhstan"] ,
        ["Kuwait", "Kuwait"] ,
        ["Lebanon", "Lebanon"] ,
        ["Liechtenstein", "Liechtenstein"] ,
        ["Lithuania", "Lithuania"] ,
        ["Macau", "Macau"] ,
        ["Malaysia", "Malaysia"] ,
        ["Mexico", "Mexico"] ,
        ["Monaco", "Monaco"] ,
        ["Morocco", "Morocco"] ,
        ["Nepal", "Nepal"] ,
        ["Netherlands", "Netherlands"] ,
        ["New Zealand", "New Zealand"] ,
        ["Nigeria", "Nigeria"] ,
        ["Norway", "Norway"] ,
        ["Oman", "Oman"] ,
        ["Peru", "Peru"] ,
        ["Philippines", "Philippines"] ,
        ["Poland", "Poland"] ,
        ["Portugal", "Portugal"] ,
        ["Romania", "Romania"] ,
        ["Russia", "Russia"] ,
        ["Saudi Arabia", "Saudi Arabia"] ,
        ["Singapore", "Singapore"] ,
        ["South Africa", "South Africa"] ,
        ["South Korea", "South Korea"] ,
        ["Spain", "Spain"] ,
        ["St. Kitts and Nevis", "St. Kitts and Nevis"] ,
        ["Swaziland", "Swaziland"] ,
        ["Sweden", "Sweden"] ,
        ["Switzerland", "Switzerland"] ,
        ["Taiwan", "Taiwan"] ,
        ["Tanzania", "Tanzania"] ,
        ["Thailand", "Thailand"] ,
        ["Turkey", "Turkey"] ,
        ["Uganda", "Uganda"] ,
        ["Ukraine", "Ukraine"] ,
        ["United Arab Emirates", "United Arab Emirates"] ,
        ["United Kingdom", "United Kingdom"] ,
        ["United States", "United States"] ,
        ["Venezuela", "Venezuela"] ,
        ["Vietnam", "Vietnam"] 
    ]
}

var billionaires_PROPERTIES = [
    ["name", "name"] ,
    ["rank", "rank"] ,
    ["year", "year"] ,
    ["company.founded", "company.founded"] ,
    ["company.name", "company.name"] ,
    ["company.relationship", "company.relationship"] ,
    ["company.sector", "company.sector"] ,
    ["company.type", "company.type"] ,
    ["demographics.age", "demographics.age"] ,
    ["demographics.gender", "demographics.gender"] ,
    ["location.citizenship", "location.citizenship"] ,
    ["location.country code", "location.country code"] ,
    ["location.gdp", "location.gdp"] ,
    ["location.region", "location.region"] ,
    ["wealth.type", "wealth.type"] ,
    ["wealth.worth in billions", "wealth.worth in billions"] ,
    ["wealth.how.category", "wealth.how.category"] ,
    ["wealth.how.from emerging", "wealth.how.from emerging"] ,
    ["wealth.how.industry", "wealth.how.industry"] ,
    ["wealth.how.inherited", "wealth.how.inherited"] ,
    ["wealth.how.was founder", "wealth.how.was founder"] ,
    ["wealth.how.was political", "wealth.how.was political"] 
]

Blockly.Blocks['billionaires_get'] = {
  init: function() {
    this.setColour(45);
    this.appendDummyInput('MAIN')
        .appendField("billionaires.get")
        .appendField(new Blockly.FieldDropdown(billionaires_PROPERTIES), "PROPERTY");
    this.appendDummyInput('SECOND')
        .appendField("filter")
        .appendField(new Blockly.FieldDropdown(billionaires_INDEXES, function(option) {
                        this.getSourceBlock().updateShape_(option);
                    }), "INDEX")
    this.updateShape_("(None)");
    this.setInputsInline(false);
    this.setOutput(true, "Array");
    this.setTooltip('Returns a list of billionaires data.');
  },
  mutationToDom: function() {
    var container = document.createElement('mutation');
    container.setAttribute('index', this.getFieldValue('INDEX'));
    container.setAttribute('index_value', this.getFieldValue('INDEX_VALUE'));
    container.setAttribute('module', "billionaires")
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
            inputGroup.appendField(new Blockly.FieldDropdown(billionaires_INDEX_VALUES[index]), 'INDEX_VALUE')
            if (index_value != undefined) {
                this.setFieldValue(index_value, 'INDEX_VALUE');
            } else {
                this.setFieldValue(billionaires_INDEX_VALUES[index][0][0], 'INDEX_VALUE');
            }
        }
    } catch (e) {
        inputGroup.appendField(new Blockly.FieldLabel("Reset to fix the blocks"));
        console.error(e);
    }
  }
};
Blockly.Python['billionaires_get'] = function(block) {
    Blockly.Python.definitions_['import_billionaires'] = 'import billionaires';
    var propertyValue = block.getFieldValue('PROPERTY') || '';
    var property = Blockly.Python.quote_(propertyValue);
    var index_unquoted = block.getFieldValue('INDEX');
    var index = Blockly.Python.quote_(index_unquoted || '');
    var index_value = "''";
    if (index_unquoted !== '(None)') {
        var iv = block.getFieldValue('INDEX_VALUE') || "";
        index_value = Blockly.Python.quote_(iv);
    }
    var code = 'billionaires.get('+property+',' +index+','+index_value+')';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

BlockMirrorTextToBlocks.prototype.MODULE_FUNCTION_SIGNATURES['billionaires'] = {
    "get": {
        custom: function(node, parent) {
            if (!node.args || node.args.length < 3 ||
                !node.args[0] || !node.args[1] || !node.args[2] ||
                node.args[0]._astname !== "Str" || node.args[1]._astname !== "Str" || node.args[2]._astname !== "Str"
            ) {
                throw new Error("Not the right function call.");
            }
            return BlockMirrorTextToBlocks.create_block("billionaires_get", null,
                {"PROPERTY": node.args[0].s.v},
                {}, {}, {"@INDEX": node.args[1].s.v,
                    "@INDEX_VALUE": node.args[2].s.v});
        }
    },
};

BlockMirrorBlockEditor.EXTRA_TOOLS['Data - billionaires'] = '<category name="Data - Billionaires" colour="45">'+
                    '<block type="billionaires_get"><mutation index="(None)" index_value=""></mutation></block>'+
                '</category>';