

var hydropower_INDEXES = [
    ["(None)", "(None)"],
    
    ["Location.State", "Location.State"] ,
    ["Identity.Project.Year", "Identity.Project.Year"] 
];

var hydropower_INDEX_VALUES = {
    "(None)": [],
    
    "Location.State": [
        
        ["Arizona", "Arizona"] ,
        ["Arizona and California", "Arizona and California"] ,
        ["Arizona and Nevada", "Arizona and Nevada"] ,
        ["California", "California"] ,
        ["California and Arizona", "California and Arizona"] ,
        ["Colorado", "Colorado"] ,
        ["Idaho", "Idaho"] ,
        ["Kansas", "Kansas"] ,
        ["Montana", "Montana"] ,
        ["Nebraska", "Nebraska"] ,
        ["Nevada", "Nevada"] ,
        ["Nevada and Arizona", "Nevada and Arizona"] ,
        ["New Mexico", "New Mexico"] ,
        ["North Dakota", "North Dakota"] ,
        ["Oklahoma", "Oklahoma"] ,
        ["Oregon", "Oregon"] ,
        ["South Dakota", "South Dakota"] ,
        ["Texas", "Texas"] ,
        ["Unknown", "Unknown"] ,
        ["Utah", "Utah"] ,
        ["Washington", "Washington"] ,
        ["Wyoming", "Wyoming"] 
    ],
    "Identity.Project.Year": [
        
        ["0", "0"] ,
        ["19", "19"] ,
        ["1076", "1076"] ,
        ["1902", "1902"] ,
        ["1903", "1903"] ,
        ["1904", "1904"] ,
        ["1905", "1905"] ,
        ["1906", "1906"] ,
        ["1907", "1907"] ,
        ["1908", "1908"] ,
        ["1909", "1909"] ,
        ["1910", "1910"] ,
        ["1911", "1911"] ,
        ["1912", "1912"] ,
        ["1913", "1913"] ,
        ["1914", "1914"] ,
        ["1915", "1915"] ,
        ["1917", "1917"] ,
        ["1918", "1918"] ,
        ["1919", "1919"] ,
        ["1921", "1921"] ,
        ["1922", "1922"] ,
        ["1923", "1923"] ,
        ["1924", "1924"] ,
        ["1925", "1925"] ,
        ["1926", "1926"] ,
        ["1927", "1927"] ,
        ["1928", "1928"] ,
        ["1929", "1929"] ,
        ["1930", "1930"] ,
        ["1931", "1931"] ,
        ["1933", "1933"] ,
        ["1934", "1934"] ,
        ["1935", "1935"] ,
        ["1936", "1936"] ,
        ["1937", "1937"] ,
        ["1938", "1938"] ,
        ["1939", "1939"] ,
        ["1940", "1940"] ,
        ["1941", "1941"] ,
        ["1942", "1942"] ,
        ["1943", "1943"] ,
        ["1944", "1944"] ,
        ["1945", "1945"] ,
        ["1946", "1946"] ,
        ["1947", "1947"] ,
        ["1948", "1948"] ,
        ["1949", "1949"] ,
        ["1950", "1950"] ,
        ["1951", "1951"] ,
        ["1952", "1952"] ,
        ["1953", "1953"] ,
        ["1954", "1954"] ,
        ["1955", "1955"] ,
        ["1956", "1956"] ,
        ["1957", "1957"] ,
        ["1958", "1958"] ,
        ["1959", "1959"] ,
        ["1960", "1960"] ,
        ["1961", "1961"] ,
        ["1962", "1962"] ,
        ["1963", "1963"] ,
        ["1964", "1964"] ,
        ["1965", "1965"] ,
        ["1966", "1966"] ,
        ["1967", "1967"] ,
        ["1970", "1970"] ,
        ["1972", "1972"] ,
        ["1973", "1973"] ,
        ["1974", "1974"] ,
        ["1975", "1975"] ,
        ["1976", "1976"] ,
        ["1977", "1977"] ,
        ["1978", "1978"] ,
        ["1981", "1981"] ,
        ["1983", "1983"] ,
        ["1984", "1984"] ,
        ["1985", "1985"] ,
        ["1987", "1987"] ,
        ["1988", "1988"] 
    ]
}

var hydropower_PROPERTIES = [
    ["Dimensions.Crest Elevation", "Dimensions.Crest Elevation"] ,
    ["Dimensions.Crest Length", "Dimensions.Crest Length"] ,
    ["Dimensions.Structural Height", "Dimensions.Structural Height"] ,
    ["Identity.Name", "Identity.Name"] ,
    ["Identity.Watercourse", "Identity.Watercourse"] ,
    ["Location.County", "Location.County"] ,
    ["Location.Latitude", "Location.Latitude"] ,
    ["Location.Longitude", "Location.Longitude"] ,
    ["Location.State", "Location.State"] ,
    ["Identity.Project.Organization", "Identity.Project.Organization"] ,
    ["Identity.Project.Year", "Identity.Project.Year"] 
]

Blockly.Blocks['hydropower_get'] = {
  init: function() {
    this.setColour(45);
    this.appendDummyInput('MAIN')
        .appendField("hydropower.get")
        .appendField(new Blockly.FieldDropdown(hydropower_PROPERTIES), "PROPERTY");
    this.appendDummyInput('SECOND')
        .appendField("filter")
        .appendField(new Blockly.FieldDropdown(hydropower_INDEXES, function(option) {
                        this.getSourceBlock().updateShape_(option);
                    }), "INDEX")
    this.updateShape_("(None)");
    this.setInputsInline(false);
    this.setOutput(true, "Array");
    this.setTooltip('Returns a list of hydropower data.');
  },
  mutationToDom: function() {
    var container = document.createElement('mutation');
    container.setAttribute('index', this.getFieldValue('INDEX'));
    container.setAttribute('index_value', this.getFieldValue('INDEX_VALUE'));
    container.setAttribute('module', "hydropower")
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
            inputGroup.appendField(new Blockly.FieldDropdown(hydropower_INDEX_VALUES[index]), 'INDEX_VALUE')
            if (index_value != undefined) {
                this.setFieldValue(index_value, 'INDEX_VALUE');
            } else {
                this.setFieldValue(hydropower_INDEX_VALUES[index][0][0], 'INDEX_VALUE');
            }
        }
    } catch (e) {
        inputGroup.appendField(new Blockly.FieldLabel("Reset to fix the blocks"));
        console.error(e);
    }
  }
};
Blockly.Python['hydropower_get'] = function(block) {
    Blockly.Python.definitions_['import_hydropower'] = 'import hydropower';
    var propertyValue = block.getFieldValue('PROPERTY') || '';
    var property = Blockly.Python.quote_(propertyValue);
    var index_unquoted = block.getFieldValue('INDEX');
    var index = Blockly.Python.quote_(index_unquoted || '');
    var index_value = "''";
    if (index_unquoted !== '(None)') {
        var iv = block.getFieldValue('INDEX_VALUE') || "";
        index_value = Blockly.Python.quote_(iv);
    }
    var code = 'hydropower.get('+property+',' +index+','+index_value+')';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

BlockMirrorTextToBlocks.prototype.MODULE_FUNCTION_SIGNATURES['hydropower'] = {
    "get": {
        custom: function(node, parent) {
            if (!node.args || node.args.length < 3 ||
                !node.args[0] || !node.args[1] || !node.args[2] ||
                node.args[0]._astname !== "Str" || node.args[1]._astname !== "Str" || node.args[2]._astname !== "Str"
            ) {
                throw new Error("Not the right function call.");
            }
            return BlockMirrorTextToBlocks.create_block("hydropower_get", null,
                {"PROPERTY": node.args[0].s.v},
                {}, {}, {"@INDEX": node.args[1].s.v,
                    "@INDEX_VALUE": node.args[2].s.v});
        }
    },
};

BlockMirrorBlockEditor.EXTRA_TOOLS['Data - hydropower'] = '<category name="Data - Hydropower" colour="45">'+
                    '<block type="hydropower_get"><mutation index="(None)" index_value=""></mutation></block>'+
                '</category>';