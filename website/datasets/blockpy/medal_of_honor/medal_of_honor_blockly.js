

var medal_of_honor_INDEXES = [
    ["(None)", "(None)"],
    
    ["awarded.date.year", "awarded.date.year"] 
];

var medal_of_honor_INDEX_VALUES = {
    "(None)": [],
    
    "awarded.date.year": [
        
        ["-1", "-1"] ,
        ["63", "63"] ,
        ["186", "186"] ,
        ["194", "194"] ,
        ["1861", "1861"] ,
        ["1862", "1862"] ,
        ["1863", "1863"] ,
        ["1864", "1864"] ,
        ["1865", "1865"] ,
        ["1868", "1868"] ,
        ["1869", "1869"] ,
        ["1870", "1870"] ,
        ["1871", "1871"] ,
        ["1872", "1872"] ,
        ["1873", "1873"] ,
        ["1874", "1874"] ,
        ["1875", "1875"] ,
        ["1876", "1876"] ,
        ["1877", "1877"] ,
        ["1879", "1879"] ,
        ["1880", "1880"] ,
        ["1881", "1881"] ,
        ["1882", "1882"] ,
        ["1886", "1886"] ,
        ["1889", "1889"] ,
        ["1890", "1890"] ,
        ["1891", "1891"] ,
        ["1898", "1898"] ,
        ["1899", "1899"] ,
        ["1900", "1900"] ,
        ["1901", "1901"] ,
        ["1902", "1902"] ,
        ["1903", "1903"] ,
        ["1905", "1905"] ,
        ["1906", "1906"] ,
        ["1909", "1909"] ,
        ["1910", "1910"] ,
        ["1911", "1911"] ,
        ["1913", "1913"] ,
        ["1914", "1914"] ,
        ["1915", "1915"] ,
        ["1916", "1916"] ,
        ["1918", "1918"] ,
        ["1920", "1920"] ,
        ["1921", "1921"] ,
        ["1922", "1922"] ,
        ["1923", "1923"] ,
        ["1927", "1927"] ,
        ["1928", "1928"] ,
        ["1932", "1932"] ,
        ["1938", "1938"] ,
        ["1939", "1939"] ,
        ["1941", "1941"] ,
        ["1942", "1942"] ,
        ["1943", "1943"] ,
        ["1944", "1944"] ,
        ["1945", "1945"] ,
        ["1950", "1950"] ,
        ["1951", "1951"] ,
        ["1952", "1952"] ,
        ["1953", "1953"] ,
        ["1964", "1964"] ,
        ["1965", "1965"] ,
        ["1966", "1966"] ,
        ["1967", "1967"] ,
        ["1968", "1968"] ,
        ["1969", "1969"] ,
        ["1970", "1970"] ,
        ["1971", "1971"] ,
        ["1972", "1972"] ,
        ["2004", "2004"] ,
        ["2005", "2005"] ,
        ["2006", "2006"] ,
        ["2007", "2007"] 
    ]
}

var medal_of_honor_PROPERTIES = [
    ["death", "death"] ,
    ["name", "name"] ,
    ["awarded.General Order number", "awarded.General Order number"] ,
    ["awarded.accredited to", "awarded.accredited to"] ,
    ["awarded.citation", "awarded.citation"] ,
    ["awarded.issued", "awarded.issued"] ,
    ["birth.location name", "birth.location name"] ,
    ["metadata.link", "metadata.link"] ,
    ["military record.company", "military record.company"] ,
    ["military record.division", "military record.division"] ,
    ["military record.entered service at", "military record.entered service at"] ,
    ["military record.organization", "military record.organization"] ,
    ["military record.rank", "military record.rank"] ,
    ["awarded.date.day", "awarded.date.day"] ,
    ["awarded.date.full", "awarded.date.full"] ,
    ["awarded.date.month", "awarded.date.month"] ,
    ["awarded.date.year", "awarded.date.year"] ,
    ["awarded.location.latitude", "awarded.location.latitude"] ,
    ["awarded.location.longitude", "awarded.location.longitude"] ,
    ["awarded.location.name", "awarded.location.name"] ,
    ["birth.date.day", "birth.date.day"] ,
    ["birth.date.month", "birth.date.month"] ,
    ["birth.date.year", "birth.date.year"] 
]

Blockly.Blocks['medal_of_honor_get'] = {
  init: function() {
    this.setColour(45);
    this.appendDummyInput('MAIN')
        .appendField("medal_of_honor.get")
        .appendField(new Blockly.FieldDropdown(medal_of_honor_PROPERTIES), "PROPERTY");
    this.appendDummyInput('SECOND')
        .appendField("filter")
        .appendField(new Blockly.FieldDropdown(medal_of_honor_INDEXES, function(option) {
                        this.getSourceBlock().updateShape_(option);
                    }), "INDEX")
    this.updateShape_("(None)");
    this.setInputsInline(false);
    this.setOutput(true, "Array");
    this.setTooltip('Returns a list of medal of honor data.');
  },
  mutationToDom: function() {
    var container = document.createElement('mutation');
    container.setAttribute('index', this.getFieldValue('INDEX'));
    container.setAttribute('index_value', this.getFieldValue('INDEX_VALUE'));
    container.setAttribute('module', "medal_of_honor")
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
        inputGroup.appendField(new Blockly.FieldDropdown(medal_of_honor_INDEX_VALUES[index]), 'INDEX_VALUE')
        if (index_value != undefined) {
            this.setFieldValue(index_value, 'INDEX_VALUE');
        } else {
            this.setFieldValue(medal_of_honor_INDEX_VALUES[index][0][0], 'INDEX_VALUE');
        }
    }    
  }
};
Blockly.Python['medal_of_honor_get'] = function(block) {
    Blockly.Python.definitions_['import_medal_of_honor'] = 'import medal_of_honor';
    var propertyValue = block.getFieldValue('PROPERTY') || '';
    var property = Blockly.Python.quote_(propertyValue);
    var index_unquoted = block.getFieldValue('INDEX');
    var index = Blockly.Python.quote_(index_unquoted || '');
    var index_value = "''";
    if (index_unquoted !== '(None)') {
        var iv = block.getFieldValue('INDEX_VALUE') || "";
        index_value = Blockly.Python.quote_(iv);
    }
    var code = 'medal_of_honor.get('+property+',' +index+','+index_value+')';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

BlockMirrorTextToBlocks.prototype.MODULE_FUNCTION_SIGNATURES['medal_of_honor'] = {
    "get": {
        custom: function(node, parent) {
            if (!node.args || node.args.length < 3 ||
                !node.args[0] || !node.args[1] || !node.args[2] ||
                node.args[0]._astname !== "Str" || node.args[1]._astname !== "Str" || node.args[2]._astname !== "Str"
            ) {
                throw new Error("Not the right function call.");
            }
            return BlockMirrorTextToBlocks.create_block("medal_of_honor_get", null,
                {"PROPERTY": node.args[0].s.v},
                {}, {}, {"@INDEX": node.args[1].s.v,
                    "@INDEX_VALUE": node.args[2].s.v});
        }
    },
};

BlockMirrorBlockEditor.EXTRA_TOOLS['Data - medal of honor'] = '<category name="Data - medal of honor" colour="45">'+
                    '<block type="medal_of_honor_get"><mutation index="(None)" index_value=""></mutation></block>'+
                '</category>';