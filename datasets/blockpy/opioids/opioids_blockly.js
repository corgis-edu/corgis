

var opioids_INDEXES = [
    ["(None)", "(None)"],
    
    ["Year", "Year"] 
];

var opioids_INDEX_VALUES = {
    "(None)": [],
    
    "Year": [
        
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
        ["2015", "2015"] ,
        ["2016", "2016"] ,
        ["2017", "2017"] 
    ]
}

var opioids_PROPERTIES = [
    ["Year", "Year"] ,
    ["Number.All", "Number.All"] ,
    ["Number.Opioid.Any", "Number.Opioid.Any"] ,
    ["Number.Opioid.Prescription", "Number.Opioid.Prescription"] ,
    ["Number.Opioid.Synthetic", "Number.Opioid.Synthetic"] ,
    ["Number.Opioid.Heroin", "Number.Opioid.Heroin"] ,
    ["Number.Opioid.Cocaine", "Number.Opioid.Cocaine"] ,
    ["Rate.All.Total", "Rate.All.Total"] ,
    ["Rate.All.Sex.Male", "Rate.All.Sex.Male"] ,
    ["Rate.All.Sex.Female", "Rate.All.Sex.Female"] ,
    ["Rate.All.Region.Large City", "Rate.All.Region.Large City"] ,
    ["Rate.All.Region.Small City", "Rate.All.Region.Small City"] ,
    ["Rate.All.Region.Rural", "Rate.All.Region.Rural"] ,
    ["Rate.All.Race.White", "Rate.All.Race.White"] ,
    ["Rate.All.Race.Black", "Rate.All.Race.Black"] ,
    ["Rate.All.Race.Hispanic", "Rate.All.Race.Hispanic"] ,
    ["Rate.Opioid.Any.Total", "Rate.Opioid.Any.Total"] ,
    ["Rate.Opioid.Any.Sex.Male", "Rate.Opioid.Any.Sex.Male"] ,
    ["Rate.Opioid.Any.Sex.Female", "Rate.Opioid.Any.Sex.Female"] ,
    ["Rate.Opioid.Any.Region.Large City", "Rate.Opioid.Any.Region.Large City"] ,
    ["Rate.Opioid.Any.Region.Small City", "Rate.Opioid.Any.Region.Small City"] ,
    ["Rate.Opioid.Any.Region.Rural", "Rate.Opioid.Any.Region.Rural"] ,
    ["Rate.Opioid.Any.Race.White", "Rate.Opioid.Any.Race.White"] ,
    ["Rate.Opioid.Any.Race.Black", "Rate.Opioid.Any.Race.Black"] ,
    ["Rate.Opioid.Any.Race.Hispanic", "Rate.Opioid.Any.Race.Hispanic"] ,
    ["Rate.Opioid.Prescription.Total", "Rate.Opioid.Prescription.Total"] ,
    ["Rate.Opioid.Prescription.Sex.Male", "Rate.Opioid.Prescription.Sex.Male"] ,
    ["Rate.Opioid.Prescription.Sex.Female", "Rate.Opioid.Prescription.Sex.Female"] ,
    ["Rate.Opioid.Prescription.Region.Large City", "Rate.Opioid.Prescription.Region.Large City"] ,
    ["Rate.Opioid.Prescription.Region.Small City", "Rate.Opioid.Prescription.Region.Small City"] ,
    ["Rate.Opioid.Prescription.Region.Rural", "Rate.Opioid.Prescription.Region.Rural"] ,
    ["Rate.Opioid.Prescription.Race.White", "Rate.Opioid.Prescription.Race.White"] ,
    ["Rate.Opioid.Prescription.Race.Black", "Rate.Opioid.Prescription.Race.Black"] ,
    ["Rate.Opioid.Prescription.Race.Hispanic", "Rate.Opioid.Prescription.Race.Hispanic"] ,
    ["Rate.Opioid.Synthetic.Total", "Rate.Opioid.Synthetic.Total"] ,
    ["Rate.Opioid.Synthetic.Sex.Male", "Rate.Opioid.Synthetic.Sex.Male"] ,
    ["Rate.Opioid.Synthetic.Sex.Female", "Rate.Opioid.Synthetic.Sex.Female"] ,
    ["Rate.Opioid.Synthetic.Region.Large City", "Rate.Opioid.Synthetic.Region.Large City"] ,
    ["Rate.Opioid.Synthetic.Region.Small City", "Rate.Opioid.Synthetic.Region.Small City"] ,
    ["Rate.Opioid.Synthetic.Region.Rural", "Rate.Opioid.Synthetic.Region.Rural"] ,
    ["Rate.Opioid.Synthetic.Race.White", "Rate.Opioid.Synthetic.Race.White"] ,
    ["Rate.Opioid.Synthetic.Race.Black", "Rate.Opioid.Synthetic.Race.Black"] ,
    ["Rate.Opioid.Synthetic.Race.Hispanic", "Rate.Opioid.Synthetic.Race.Hispanic"] ,
    ["Rate.Opioid.Heroin.Total", "Rate.Opioid.Heroin.Total"] ,
    ["Rate.Opioid.Heroin.Sex.Male", "Rate.Opioid.Heroin.Sex.Male"] ,
    ["Rate.Opioid.Heroin.Sex.Female", "Rate.Opioid.Heroin.Sex.Female"] ,
    ["Rate.Opioid.Heroin.Region.Large City", "Rate.Opioid.Heroin.Region.Large City"] ,
    ["Rate.Opioid.Heroin.Region.Small City", "Rate.Opioid.Heroin.Region.Small City"] ,
    ["Rate.Opioid.Heroin.Region.Rural", "Rate.Opioid.Heroin.Region.Rural"] ,
    ["Rate.Opioid.Heroin.Race.White", "Rate.Opioid.Heroin.Race.White"] ,
    ["Rate.Opioid.Heroin.Race.Black", "Rate.Opioid.Heroin.Race.Black"] ,
    ["Rate.Opioid.Heroin.Race.Hispanic", "Rate.Opioid.Heroin.Race.Hispanic"] ,
    ["Rate.Opioid.Cocaine.Total", "Rate.Opioid.Cocaine.Total"] ,
    ["Rate.Opioid.Cocaine.Sex.Male", "Rate.Opioid.Cocaine.Sex.Male"] ,
    ["Rate.Opioid.Cocaine.Sex.Female", "Rate.Opioid.Cocaine.Sex.Female"] ,
    ["Rate.Opioid.Cocaine.Region.Large City", "Rate.Opioid.Cocaine.Region.Large City"] ,
    ["Rate.Opioid.Cocaine.Region.Small City", "Rate.Opioid.Cocaine.Region.Small City"] ,
    ["Rate.Opioid.Cocaine.Region.Rural", "Rate.Opioid.Cocaine.Region.Rural"] ,
    ["Rate.Opioid.Cocaine.Race.White", "Rate.Opioid.Cocaine.Race.White"] ,
    ["Rate.Opioid.Cocaine.Race.Black", "Rate.Opioid.Cocaine.Race.Black"] ,
    ["Rate.Opioid.Cocaine.Race.Hispanic", "Rate.Opioid.Cocaine.Race.Hispanic"] 
]

Blockly.Blocks['opioids_get'] = {
  init: function() {
    this.setColour(45);
    this.appendDummyInput('MAIN')
        .appendField("opioids.get")
        .appendField(new Blockly.FieldDropdown(opioids_PROPERTIES), "PROPERTY");
    this.appendDummyInput('SECOND')
        .appendField("filter")
        .appendField(new Blockly.FieldDropdown(opioids_INDEXES, function(option) {
                        this.getSourceBlock().updateShape_(option);
                    }), "INDEX")
    this.updateShape_("(None)");
    this.setInputsInline(false);
    this.setOutput(true, "Array");
    this.setTooltip('Returns a list of opioids data.');
  },
  mutationToDom: function() {
    var container = document.createElement('mutation');
    container.setAttribute('index', this.getFieldValue('INDEX'));
    container.setAttribute('index_value', this.getFieldValue('INDEX_VALUE'));
    container.setAttribute('module', "opioids")
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
            inputGroup.appendField(new Blockly.FieldDropdown(opioids_INDEX_VALUES[index]), 'INDEX_VALUE')
            if (index_value != undefined) {
                this.setFieldValue(index_value, 'INDEX_VALUE');
            } else {
                this.setFieldValue(opioids_INDEX_VALUES[index][0][0], 'INDEX_VALUE');
            }
        }
    } catch (e) {
        inputGroup.appendField(new Blockly.FieldLabel("Reset to fix the blocks"));
        console.error(e);
    }
  }
};
Blockly.Python['opioids_get'] = function(block) {
    Blockly.Python.definitions_['import_opioids'] = 'import opioids';
    var propertyValue = block.getFieldValue('PROPERTY') || '';
    var property = Blockly.Python.quote_(propertyValue);
    var index_unquoted = block.getFieldValue('INDEX');
    var index = Blockly.Python.quote_(index_unquoted || '');
    var index_value = "''";
    if (index_unquoted !== '(None)') {
        var iv = block.getFieldValue('INDEX_VALUE') || "";
        index_value = Blockly.Python.quote_(iv);
    }
    var code = 'opioids.get('+property+',' +index+','+index_value+')';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

BlockMirrorTextToBlocks.prototype.MODULE_FUNCTION_SIGNATURES['opioids'] = {
    "get": {
        custom: function(node, parent) {
            if (!node.args || node.args.length < 3 ||
                !node.args[0] || !node.args[1] || !node.args[2] ||
                node.args[0]._astname !== "Str" || node.args[1]._astname !== "Str" || node.args[2]._astname !== "Str"
            ) {
                throw new Error("Not the right function call.");
            }
            return BlockMirrorTextToBlocks.create_block("opioids_get", null,
                {"PROPERTY": node.args[0].s.v},
                {}, {}, {"@INDEX": node.args[1].s.v,
                    "@INDEX_VALUE": node.args[2].s.v});
        }
    },
};

BlockMirrorBlockEditor.EXTRA_TOOLS['Data - opioids'] = '<category name="Data - Opioids" colour="45">'+
                    '<block type="opioids_get"><mutation index="(None)" index_value=""></mutation></block>'+
                '</category>';