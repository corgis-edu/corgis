

var health_INDEXES = [
    ["(None)", "(None)"],
    
    ["disease", "disease"] ,
    ["loc", "loc"] ,
    ["year", "year"] 
];

var health_INDEX_VALUES = {
    "(None)": [],
    
    "disease": [
        
        ["HEPATITIS A", "HEPATITIS A"] ,
        ["MEASLES", "MEASLES"] ,
        ["MUMPS", "MUMPS"] ,
        ["PERTUSSIS", "PERTUSSIS"] ,
        ["POLIO", "POLIO"] ,
        ["RUBELLA", "RUBELLA"] ,
        ["SMALLPOX", "SMALLPOX"] 
    ],
    "loc": [
        
        ["ALABAMA", "ALABAMA"] ,
        ["ALASKA", "ALASKA"] ,
        ["ARIZONA", "ARIZONA"] ,
        ["ARKANSAS", "ARKANSAS"] ,
        ["CALIFORNIA", "CALIFORNIA"] ,
        ["COLORADO", "COLORADO"] ,
        ["CONNECTICUT", "CONNECTICUT"] ,
        ["DELAWARE", "DELAWARE"] ,
        ["DISTRICT OF COLUMBIA", "DISTRICT OF COLUMBIA"] ,
        ["FLORIDA", "FLORIDA"] ,
        ["GEORGIA", "GEORGIA"] ,
        ["HAWAII", "HAWAII"] ,
        ["IDAHO", "IDAHO"] ,
        ["ILLINOIS", "ILLINOIS"] ,
        ["INDIANA", "INDIANA"] ,
        ["IOWA", "IOWA"] ,
        ["KANSAS", "KANSAS"] ,
        ["KENTUCKY", "KENTUCKY"] ,
        ["LOUISIANA", "LOUISIANA"] ,
        ["MAINE", "MAINE"] ,
        ["MARYLAND", "MARYLAND"] ,
        ["MASSACHUSETTS", "MASSACHUSETTS"] ,
        ["MICHIGAN", "MICHIGAN"] ,
        ["MINNESOTA", "MINNESOTA"] ,
        ["MISSISSIPPI", "MISSISSIPPI"] ,
        ["MISSOURI", "MISSOURI"] ,
        ["MONTANA", "MONTANA"] ,
        ["NEBRASKA", "NEBRASKA"] ,
        ["NEVADA", "NEVADA"] ,
        ["NEW HAMPSHIRE", "NEW HAMPSHIRE"] ,
        ["NEW JERSEY", "NEW JERSEY"] ,
        ["NEW MEXICO", "NEW MEXICO"] ,
        ["NEW YORK", "NEW YORK"] ,
        ["NORTH CAROLINA", "NORTH CAROLINA"] ,
        ["NORTH DAKOTA", "NORTH DAKOTA"] ,
        ["OHIO", "OHIO"] ,
        ["OKLAHOMA", "OKLAHOMA"] ,
        ["OREGON", "OREGON"] ,
        ["PENNSYLVANIA", "PENNSYLVANIA"] ,
        ["RHODE ISLAND", "RHODE ISLAND"] ,
        ["SOUTH CAROLINA", "SOUTH CAROLINA"] ,
        ["SOUTH DAKOTA", "SOUTH DAKOTA"] ,
        ["TENNESSEE", "TENNESSEE"] ,
        ["TEXAS", "TEXAS"] ,
        ["UTAH", "UTAH"] ,
        ["VERMONT", "VERMONT"] ,
        ["VIRGINIA", "VIRGINIA"] ,
        ["WASHINGTON", "WASHINGTON"] ,
        ["WEST VIRGINIA", "WEST VIRGINIA"] ,
        ["WISCONSIN", "WISCONSIN"] ,
        ["WYOMING", "WYOMING"] 
    ],
    "year": [
        
        ["1928", "1928"] ,
        ["1929", "1929"] ,
        ["1930", "1930"] ,
        ["1931", "1931"] ,
        ["1932", "1932"] ,
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
        ["1968", "1968"] ,
        ["1969", "1969"] ,
        ["1970", "1970"] ,
        ["1971", "1971"] ,
        ["1972", "1972"] ,
        ["1973", "1973"] ,
        ["1974", "1974"] ,
        ["1975", "1975"] ,
        ["1976", "1976"] ,
        ["1977", "1977"] ,
        ["1978", "1978"] ,
        ["1979", "1979"] ,
        ["1980", "1980"] ,
        ["1981", "1981"] ,
        ["1982", "1982"] ,
        ["1983", "1983"] ,
        ["1984", "1984"] ,
        ["1985", "1985"] ,
        ["1986", "1986"] ,
        ["1987", "1987"] ,
        ["1988", "1988"] ,
        ["1989", "1989"] ,
        ["1990", "1990"] ,
        ["1991", "1991"] ,
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
        ["2011", "2011"] 
    ]
}

var health_PROPERTIES = [
    ["disease", "disease"] ,
    ["increase", "increase"] ,
    ["loc", "loc"] ,
    ["number", "number"] ,
    ["population", "population"] ,
    ["year", "year"] 
]

Blockly.Blocks['health_get'] = {
  init: function() {
    this.setColour(45);
    this.appendDummyInput('MAIN')
        .appendField("health.get")
        .appendField(new Blockly.FieldDropdown(health_PROPERTIES), "PROPERTY");
    this.appendDummyInput('SECOND')
        .appendField("filter")
        .appendField(new Blockly.FieldDropdown(health_INDEXES, function(option) {
                        this.getSourceBlock().updateShape_(option);
                    }), "INDEX")
    this.updateShape_("(None)");
    this.setInputsInline(false);
    this.setOutput(true, "Array");
    this.setTooltip('Returns a list of health data.');
  },
  mutationToDom: function() {
    var container = document.createElement('mutation');
    container.setAttribute('index', this.getFieldValue('INDEX'));
    container.setAttribute('index_value', this.getFieldValue('INDEX_VALUE'));
    container.setAttribute('module', "health")
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
            inputGroup.appendField(new Blockly.FieldDropdown(health_INDEX_VALUES[index]), 'INDEX_VALUE')
            if (index_value != undefined) {
                this.setFieldValue(index_value, 'INDEX_VALUE');
            } else {
                this.setFieldValue(health_INDEX_VALUES[index][0][0], 'INDEX_VALUE');
            }
        }
    } catch (e) {
        inputGroup.appendField(new Blockly.FieldLabel("Reset to fix the blocks"));
        console.error(e);
    }
  }
};
Blockly.Python['health_get'] = function(block) {
    Blockly.Python.definitions_['import_health'] = 'import health';
    var propertyValue = block.getFieldValue('PROPERTY') || '';
    var property = Blockly.Python.quote_(propertyValue);
    var index_unquoted = block.getFieldValue('INDEX');
    var index = Blockly.Python.quote_(index_unquoted || '');
    var index_value = "''";
    if (index_unquoted !== '(None)') {
        var iv = block.getFieldValue('INDEX_VALUE') || "";
        index_value = Blockly.Python.quote_(iv);
    }
    var code = 'health.get('+property+',' +index+','+index_value+')';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

BlockMirrorTextToBlocks.prototype.MODULE_FUNCTION_SIGNATURES['health'] = {
    "get": {
        custom: function(node, parent) {
            if (!node.args || node.args.length < 3 ||
                !node.args[0] || !node.args[1] || !node.args[2] ||
                node.args[0]._astname !== "Str" || node.args[1]._astname !== "Str" || node.args[2]._astname !== "Str"
            ) {
                throw new Error("Not the right function call.");
            }
            return BlockMirrorTextToBlocks.create_block("health_get", null,
                {"PROPERTY": node.args[0].s.v},
                {}, {}, {"@INDEX": node.args[1].s.v,
                    "@INDEX_VALUE": node.args[2].s.v});
        }
    },
};

BlockMirrorBlockEditor.EXTRA_TOOLS['Data - health'] = '<category name="Data - Health" colour="45">'+
                    '<block type="health_get"><mutation index="(None)" index_value=""></mutation></block>'+
                '</category>';