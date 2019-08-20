

var labor_INDEXES = [
    ["(None)", "(None)"],
    
    ["Time.Year", "Time.Year"] 
];

var labor_INDEX_VALUES = {
    "(None)": [],
    
    "Time.Year": [
        
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
        ["2011", "2011"] ,
        ["2012", "2012"] ,
        ["2013", "2013"] ,
        ["2014", "2014"] ,
        ["2015", "2015"] 
    ]
}

var labor_PROPERTIES = [
    ["Time.Month", "Time.Month"] ,
    ["Time.Month Name", "Time.Month Name"] ,
    ["Time.Year", "Time.Year"] ,
    ["Data.Civilian Noninstitutional Population.Asian", "Data.Civilian Noninstitutional Population.Asian"] ,
    ["Data.Civilian Noninstitutional Population.Black or African American", "Data.Civilian Noninstitutional Population.Black or African American"] ,
    ["Data.Civilian Noninstitutional Population.White", "Data.Civilian Noninstitutional Population.White"] ,
    ["Data.Not In Labor Force.Asian", "Data.Not In Labor Force.Asian"] ,
    ["Data.Not In Labor Force.Black or African American", "Data.Not In Labor Force.Black or African American"] ,
    ["Data.Not In Labor Force.White", "Data.Not In Labor Force.White"] ,
    ["Data.Civilian Labor Force.Asian.Counts", "Data.Civilian Labor Force.Asian.Counts"] ,
    ["Data.Civilian Labor Force.Asian.Participation Rate", "Data.Civilian Labor Force.Asian.Participation Rate"] ,
    ["Data.Employed.Asian.Counts", "Data.Employed.Asian.Counts"] ,
    ["Data.Employed.Asian.Unemployment Rate", "Data.Employed.Asian.Unemployment Rate"] ,
    ["Data.Unemployed.Asian.Counts", "Data.Unemployed.Asian.Counts"] ,
    ["Data.Unemployed.Asian.Unemployment Rate", "Data.Unemployed.Asian.Unemployment Rate"] ,
    ["Data.Civilian Labor Force.Black or African American.Counts.All", "Data.Civilian Labor Force.Black or African American.Counts.All"] ,
    ["Data.Civilian Labor Force.Black or African American.Counts.Men", "Data.Civilian Labor Force.Black or African American.Counts.Men"] ,
    ["Data.Civilian Labor Force.Black or African American.Counts.Women", "Data.Civilian Labor Force.Black or African American.Counts.Women"] ,
    ["Data.Civilian Labor Force.Black or African American.Participation Rate.All", "Data.Civilian Labor Force.Black or African American.Participation Rate.All"] ,
    ["Data.Civilian Labor Force.Black or African American.Participation Rate.Men", "Data.Civilian Labor Force.Black or African American.Participation Rate.Men"] ,
    ["Data.Civilian Labor Force.Black or African American.Participation Rate.Women", "Data.Civilian Labor Force.Black or African American.Participation Rate.Women"] ,
    ["Data.Civilian Labor Force.White.Counts.All", "Data.Civilian Labor Force.White.Counts.All"] ,
    ["Data.Civilian Labor Force.White.Counts.Men", "Data.Civilian Labor Force.White.Counts.Men"] ,
    ["Data.Civilian Labor Force.White.Counts.Women", "Data.Civilian Labor Force.White.Counts.Women"] ,
    ["Data.Civilian Labor Force.White.Participation Rate.All", "Data.Civilian Labor Force.White.Participation Rate.All"] ,
    ["Data.Civilian Labor Force.White.Participation Rate.Men", "Data.Civilian Labor Force.White.Participation Rate.Men"] ,
    ["Data.Civilian Labor Force.White.Participation Rate.Women", "Data.Civilian Labor Force.White.Participation Rate.Women"] ,
    ["Data.Employed.Black or African American.Counts.All", "Data.Employed.Black or African American.Counts.All"] ,
    ["Data.Employed.Black or African American.Counts.Men", "Data.Employed.Black or African American.Counts.Men"] ,
    ["Data.Employed.Black or African American.Counts.Women", "Data.Employed.Black or African American.Counts.Women"] ,
    ["Data.Employed.Black or African American.Employment-Population Ratio.All", "Data.Employed.Black or African American.Employment-Population Ratio.All"] ,
    ["Data.Employed.Black or African American.Employment-Population Ratio.Men", "Data.Employed.Black or African American.Employment-Population Ratio.Men"] ,
    ["Data.Employed.Black or African American.Employment-Population Ratio.Women", "Data.Employed.Black or African American.Employment-Population Ratio.Women"] ,
    ["Data.Employed.White.Counts.All", "Data.Employed.White.Counts.All"] ,
    ["Data.Employed.White.Counts.Men", "Data.Employed.White.Counts.Men"] ,
    ["Data.Employed.White.Counts.Women", "Data.Employed.White.Counts.Women"] ,
    ["Data.Employed.White.Employment-Population Ratio.All", "Data.Employed.White.Employment-Population Ratio.All"] ,
    ["Data.Employed.White.Employment-Population Ratio.Men", "Data.Employed.White.Employment-Population Ratio.Men"] ,
    ["Data.Employed.White.Employment-Population Ratio.Women", "Data.Employed.White.Employment-Population Ratio.Women"] ,
    ["Data.Unemployed.Black or African American.Counts.All", "Data.Unemployed.Black or African American.Counts.All"] ,
    ["Data.Unemployed.Black or African American.Counts.Men", "Data.Unemployed.Black or African American.Counts.Men"] ,
    ["Data.Unemployed.Black or African American.Counts.Women", "Data.Unemployed.Black or African American.Counts.Women"] ,
    ["Data.Unemployed.Black or African American.Unemployment Rate.All", "Data.Unemployed.Black or African American.Unemployment Rate.All"] ,
    ["Data.Unemployed.Black or African American.Unemployment Rate.Men", "Data.Unemployed.Black or African American.Unemployment Rate.Men"] ,
    ["Data.Unemployed.Black or African American.Unemployment Rate.Women", "Data.Unemployed.Black or African American.Unemployment Rate.Women"] ,
    ["Data.Unemployed.White.Counts.All", "Data.Unemployed.White.Counts.All"] ,
    ["Data.Unemployed.White.Counts.Men", "Data.Unemployed.White.Counts.Men"] ,
    ["Data.Unemployed.White.Counts.Women", "Data.Unemployed.White.Counts.Women"] ,
    ["Data.Unemployed.White.Unemployment Rate.All", "Data.Unemployed.White.Unemployment Rate.All"] ,
    ["Data.Unemployed.White.Unemployment Rate.Men", "Data.Unemployed.White.Unemployment Rate.Men"] ,
    ["Data.Unemployed.White.Unemployment Rate.Women", "Data.Unemployed.White.Unemployment Rate.Women"] 
]

Blockly.Blocks['labor_get'] = {
  init: function() {
    this.setColour(45);
    this.appendDummyInput('MAIN')
        .appendField("labor.get")
        .appendField(new Blockly.FieldDropdown(labor_PROPERTIES), "PROPERTY");
    this.appendDummyInput('SECOND')
        .appendField("filter")
        .appendField(new Blockly.FieldDropdown(labor_INDEXES, function(option) {
                        this.getSourceBlock().updateShape_(option);
                    }), "INDEX")
    this.updateShape_("(None)");
    this.setInputsInline(false);
    this.setOutput(true, "Array");
    this.setTooltip('Returns a list of labor data.');
  },
  mutationToDom: function() {
    var container = document.createElement('mutation');
    container.setAttribute('index', this.getFieldValue('INDEX'));
    container.setAttribute('index_value', this.getFieldValue('INDEX_VALUE'));
    container.setAttribute('module', "labor")
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
        inputGroup.appendField(new Blockly.FieldDropdown(labor_INDEX_VALUES[index]), 'INDEX_VALUE')
        if (index_value != undefined) {
            this.setFieldValue(index_value, 'INDEX_VALUE');
        } else {
            this.setFieldValue(labor_INDEX_VALUES[index][0][0], 'INDEX_VALUE');
        }
    }    
  }
};
Blockly.Python['labor_get'] = function(block) {
    Blockly.Python.definitions_['import_labor'] = 'import labor';
    var propertyValue = block.getFieldValue('PROPERTY') || '';
    var property = Blockly.Python.quote_(propertyValue);
    var index_unquoted = block.getFieldValue('INDEX');
    var index = Blockly.Python.quote_(index_unquoted || '');
    var index_value = "''";
    if (index_unquoted !== '(None)') {
        var iv = block.getFieldValue('INDEX_VALUE') || "";
        index_value = Blockly.Python.quote_(iv);
    }
    var code = 'labor.get('+property+',' +index+','+index_value+')';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

BlockMirrorTextToBlocks.prototype.MODULE_FUNCTION_SIGNATURES['labor'] = {
    "get": {
        custom: function(node, parent) {
            if (!node.args || node.args.length < 3 ||
                !node.args[0] || !node.args[1] || !node.args[2] ||
                node.args[0]._astname !== "Str" || node.args[1]._astname !== "Str" || node.args[2]._astname !== "Str"
            ) {
                throw new Error("Not the right function call.");
            }
            return BlockMirrorTextToBlocks.create_block("labor_get", null,
                {"PROPERTY": node.args[0].s.v},
                {}, {}, {"@INDEX": node.args[1].s.v,
                    "@INDEX_VALUE": node.args[2].s.v});
        }
    },
};

BlockMirrorBlockEditor.EXTRA_TOOLS['Data - labor'] = '<category name="Data - Labor" colour="45">'+
                    '<block type="labor_get"><mutation index="(None)" index_value=""></mutation></block>'+
                '</category>';