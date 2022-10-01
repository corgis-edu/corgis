

var monkeypox_INDEXES = [
    ["(None)", "(None)"],
    
    ["Country.Full", "Country.Full"] ,
    ["Date.Year", "Date.Year"] 
];

var monkeypox_INDEX_VALUES = {
    "(None)": [],
    
    "Country.Full": [
        
        ["Andorra", "Andorra"] ,
        ["Argentina", "Argentina"] ,
        ["Australia", "Australia"] ,
        ["Austria", "Austria"] ,
        ["Bahamas", "Bahamas"] ,
        ["Barbados", "Barbados"] ,
        ["Belgium", "Belgium"] ,
        ["Benin", "Benin"] ,
        ["Bermuda", "Bermuda"] ,
        ["Bolivia", "Bolivia"] ,
        ["Bosnia and Herzegovina", "Bosnia and Herzegovina"] ,
        ["Brazil", "Brazil"] ,
        ["Bulgaria", "Bulgaria"] ,
        ["Cameroon", "Cameroon"] ,
        ["Canada", "Canada"] ,
        ["Central African Republic", "Central African Republic"] ,
        ["Chile", "Chile"] ,
        ["Colombia", "Colombia"] ,
        ["Congo", "Congo"] ,
        ["Costa Rica", "Costa Rica"] ,
        ["Croatia", "Croatia"] ,
        ["Cuba", "Cuba"] ,
        ["Cyprus", "Cyprus"] ,
        ["Czechia", "Czechia"] ,
        ["Democratic Republic of Congo", "Democratic Republic of Congo"] ,
        ["Denmark", "Denmark"] ,
        ["Dominican Republic", "Dominican Republic"] ,
        ["Ecuador", "Ecuador"] ,
        ["Egypt", "Egypt"] ,
        ["El Salvador", "El Salvador"] ,
        ["Estonia", "Estonia"] ,
        ["Finland", "Finland"] ,
        ["France", "France"] ,
        ["Georgia", "Georgia"] ,
        ["Germany", "Germany"] ,
        ["Ghana", "Ghana"] ,
        ["Greece", "Greece"] ,
        ["Greenland", "Greenland"] ,
        ["Guatemala", "Guatemala"] ,
        ["Guyana", "Guyana"] ,
        ["Honduras", "Honduras"] ,
        ["Hong Kong", "Hong Kong"] ,
        ["Hungary", "Hungary"] ,
        ["Iceland", "Iceland"] ,
        ["India", "India"] ,
        ["Indonesia", "Indonesia"] ,
        ["Iran", "Iran"] ,
        ["Ireland", "Ireland"] ,
        ["Israel", "Israel"] ,
        ["Italy", "Italy"] ,
        ["Jamaica", "Jamaica"] ,
        ["Japan", "Japan"] ,
        ["Latvia", "Latvia"] ,
        ["Lebanon", "Lebanon"] ,
        ["Liberia", "Liberia"] ,
        ["Lithuania", "Lithuania"] ,
        ["Luxembourg", "Luxembourg"] ,
        ["Malta", "Malta"] ,
        ["Mexico", "Mexico"] ,
        ["Moldova", "Moldova"] ,
        ["Monaco", "Monaco"] ,
        ["Montenegro", "Montenegro"] ,
        ["Morocco", "Morocco"] ,
        ["Netherlands", "Netherlands"] ,
        ["New Caledonia", "New Caledonia"] ,
        ["New Zealand", "New Zealand"] ,
        ["Nigeria", "Nigeria"] ,
        ["Norway", "Norway"] ,
        ["Panama", "Panama"] ,
        ["Paraguay", "Paraguay"] ,
        ["Peru", "Peru"] ,
        ["Philippines", "Philippines"] ,
        ["Poland", "Poland"] ,
        ["Portugal", "Portugal"] ,
        ["Puerto Rico", "Puerto Rico"] ,
        ["Qatar", "Qatar"] ,
        ["Romania", "Romania"] ,
        ["Russia", "Russia"] ,
        ["Saudi Arabia", "Saudi Arabia"] ,
        ["Serbia", "Serbia"] ,
        ["Singapore", "Singapore"] ,
        ["Slovakia", "Slovakia"] ,
        ["Slovenia", "Slovenia"] ,
        ["South Africa", "South Africa"] ,
        ["South Korea", "South Korea"] ,
        ["South Sudan", "South Sudan"] ,
        ["Spain", "Spain"] ,
        ["Sudan", "Sudan"] ,
        ["Sweden", "Sweden"] ,
        ["Switzerland", "Switzerland"] ,
        ["Taiwan", "Taiwan"] ,
        ["Thailand", "Thailand"] ,
        ["Turkey", "Turkey"] ,
        ["United Arab Emirates", "United Arab Emirates"] ,
        ["United Kingdom", "United Kingdom"] ,
        ["United States", "United States"] ,
        ["Uruguay", "Uruguay"] ,
        ["Venezuela", "Venezuela"] ,
        ["World", "World"] 
    ],
    "Date.Year": [
        
        ["2022", "2022"] 
    ]
}

var monkeypox_PROPERTIES = [
    ["Country.Iso code", "Country.Iso code"] ,
    ["Country.Full", "Country.Full"] ,
    ["Date.Full", "Date.Full"] ,
    ["Date.Year", "Date.Year"] ,
    ["Date.Month", "Date.Month"] ,
    ["Date.Day", "Date.Day"] ,
    ["Data.Cases.New", "Data.Cases.New"] ,
    ["Data.Cases.Total", "Data.Cases.Total"] ,
    ["Data.Cases.New per million", "Data.Cases.New per million"] ,
    ["Data.Cases.Total per million", "Data.Cases.Total per million"] ,
    ["Data.Deaths.New", "Data.Deaths.New"] ,
    ["Data.Deaths.Total", "Data.Deaths.Total"] ,
    ["Data.Deaths.New per million", "Data.Deaths.New per million"] ,
    ["Data.Deaths.Total per million", "Data.Deaths.Total per million"] 
]

Blockly.Blocks['monkeypox_get'] = {
  init: function() {
    this.setColour(45);
    this.appendDummyInput('MAIN')
        .appendField("monkeypox.get")
        .appendField(new Blockly.FieldDropdown(monkeypox_PROPERTIES), "PROPERTY");
    this.appendDummyInput('SECOND')
        .appendField("filter")
        .appendField(new Blockly.FieldDropdown(monkeypox_INDEXES, function(option) {
                        this.getSourceBlock().updateShape_(option);
                    }), "INDEX")
    this.updateShape_("(None)");
    this.setInputsInline(false);
    this.setOutput(true, "Array");
    this.setTooltip('Returns a list of monkeypox data.');
  },
  mutationToDom: function() {
    var container = document.createElement('mutation');
    container.setAttribute('index', this.getFieldValue('INDEX'));
    container.setAttribute('index_value', this.getFieldValue('INDEX_VALUE'));
    container.setAttribute('module', "monkeypox")
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
            inputGroup.appendField(new Blockly.FieldDropdown(monkeypox_INDEX_VALUES[index]), 'INDEX_VALUE')
            if (index_value != undefined) {
                this.setFieldValue(index_value, 'INDEX_VALUE');
            } else {
                this.setFieldValue(monkeypox_INDEX_VALUES[index][0][0], 'INDEX_VALUE');
            }
        }
    } catch (e) {
        inputGroup.appendField(new Blockly.FieldLabel("Reset to fix the blocks"));
        console.error(e);
    }
  }
};
Blockly.Python['monkeypox_get'] = function(block) {
    Blockly.Python.definitions_['import_monkeypox'] = 'import monkeypox';
    var propertyValue = block.getFieldValue('PROPERTY') || '';
    var property = Blockly.Python.quote_(propertyValue);
    var index_unquoted = block.getFieldValue('INDEX');
    var index = Blockly.Python.quote_(index_unquoted || '');
    var index_value = "''";
    if (index_unquoted !== '(None)') {
        var iv = block.getFieldValue('INDEX_VALUE') || "";
        index_value = Blockly.Python.quote_(iv);
    }
    var code = 'monkeypox.get('+property+',' +index+','+index_value+')';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

BlockMirrorTextToBlocks.prototype.MODULE_FUNCTION_SIGNATURES['monkeypox'] = {
    "get": {
        custom: function(node, parent) {
            if (!node.args || node.args.length < 3 ||
                !node.args[0] || !node.args[1] || !node.args[2] ||
                node.args[0]._astname !== "Str" || node.args[1]._astname !== "Str" || node.args[2]._astname !== "Str"
            ) {
                throw new Error("Not the right function call.");
            }
            return BlockMirrorTextToBlocks.create_block("monkeypox_get", null,
                {"PROPERTY": node.args[0].s.v},
                {}, {}, {"@INDEX": node.args[1].s.v,
                    "@INDEX_VALUE": node.args[2].s.v});
        }
    },
};

BlockMirrorBlockEditor.EXTRA_TOOLS['Data - monkeypox'] = '<category name="Data - Monkeypox" colour="45">'+
                    '<block type="monkeypox_get"><mutation index="(None)" index_value=""></mutation></block>'+
                '</category>';