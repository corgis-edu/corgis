

var construction_spending_INDEXES = [
    ["(None)", "(None)"],
    
    ["time.month", "time.month"] ,
    ["time.year", "time.year"] 
];

var construction_spending_INDEX_VALUES = {
    "(None)": [],
    
    "time.month": [
        
        ["1", "1"] ,
        ["2", "2"] ,
        ["3", "3"] ,
        ["4", "4"] ,
        ["5", "5"] ,
        ["6", "6"] ,
        ["7", "7"] ,
        ["8", "8"] ,
        ["9", "9"] ,
        ["10", "10"] ,
        ["11", "11"] ,
        ["12", "12"] 
    ],
    "time.year": [
        
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
        ["2016", "2016"] 
    ]
}

var construction_spending_PROPERTIES = [
    ["time.index", "time.index"] ,
    ["time.month", "time.month"] ,
    ["time.month name", "time.month name"] ,
    ["time.period", "time.period"] ,
    ["time.year", "time.year"] ,
    ["annual.combined.amusement and recreation", "annual.combined.amusement and recreation"] ,
    ["annual.combined.commercial", "annual.combined.commercial"] ,
    ["annual.combined.communication", "annual.combined.communication"] ,
    ["annual.combined.conservation and development", "annual.combined.conservation and development"] ,
    ["annual.combined.educational", "annual.combined.educational"] ,
    ["annual.combined.health care", "annual.combined.health care"] ,
    ["annual.combined.highway and street", "annual.combined.highway and street"] ,
    ["annual.combined.lodging", "annual.combined.lodging"] ,
    ["annual.combined.manufacturing", "annual.combined.manufacturing"] ,
    ["annual.combined.nonresidential", "annual.combined.nonresidential"] ,
    ["annual.combined.office", "annual.combined.office"] ,
    ["annual.combined.power", "annual.combined.power"] ,
    ["annual.combined.public safety", "annual.combined.public safety"] ,
    ["annual.combined.religious", "annual.combined.religious"] ,
    ["annual.combined.residential", "annual.combined.residential"] ,
    ["annual.combined.sewage and waste disposal", "annual.combined.sewage and waste disposal"] ,
    ["annual.combined.total construction", "annual.combined.total construction"] ,
    ["annual.combined.transportation", "annual.combined.transportation"] ,
    ["annual.combined.water supply", "annual.combined.water supply"] ,
    ["annual.private.amusement and recreation", "annual.private.amusement and recreation"] ,
    ["annual.private.commercial", "annual.private.commercial"] ,
    ["annual.private.communication", "annual.private.communication"] ,
    ["annual.private.conservation and development", "annual.private.conservation and development"] ,
    ["annual.private.educational", "annual.private.educational"] ,
    ["annual.private.health care", "annual.private.health care"] ,
    ["annual.private.highway and street", "annual.private.highway and street"] ,
    ["annual.private.lodging", "annual.private.lodging"] ,
    ["annual.private.manufacturing", "annual.private.manufacturing"] ,
    ["annual.private.nonresidential", "annual.private.nonresidential"] ,
    ["annual.private.office", "annual.private.office"] ,
    ["annual.private.power", "annual.private.power"] ,
    ["annual.private.public safety", "annual.private.public safety"] ,
    ["annual.private.religious", "annual.private.religious"] ,
    ["annual.private.residential", "annual.private.residential"] ,
    ["annual.private.sewage and waste disposal", "annual.private.sewage and waste disposal"] ,
    ["annual.private.total construction", "annual.private.total construction"] ,
    ["annual.private.transportation", "annual.private.transportation"] ,
    ["annual.private.water supply", "annual.private.water supply"] ,
    ["annual.public.amusement and recreation", "annual.public.amusement and recreation"] ,
    ["annual.public.commercial", "annual.public.commercial"] ,
    ["annual.public.communication", "annual.public.communication"] ,
    ["annual.public.conservation and development", "annual.public.conservation and development"] ,
    ["annual.public.educational", "annual.public.educational"] ,
    ["annual.public.health care", "annual.public.health care"] ,
    ["annual.public.highway and street", "annual.public.highway and street"] ,
    ["annual.public.lodging", "annual.public.lodging"] ,
    ["annual.public.manufacturing", "annual.public.manufacturing"] ,
    ["annual.public.nonresidential", "annual.public.nonresidential"] ,
    ["annual.public.office", "annual.public.office"] ,
    ["annual.public.power", "annual.public.power"] ,
    ["annual.public.public safety", "annual.public.public safety"] ,
    ["annual.public.religious", "annual.public.religious"] ,
    ["annual.public.residential", "annual.public.residential"] ,
    ["annual.public.sewage and waste disposal", "annual.public.sewage and waste disposal"] ,
    ["annual.public.total construction", "annual.public.total construction"] ,
    ["annual.public.transportation", "annual.public.transportation"] ,
    ["annual.public.water supply", "annual.public.water supply"] ,
    ["current.combined.amusement and recreation", "current.combined.amusement and recreation"] ,
    ["current.combined.commercial", "current.combined.commercial"] ,
    ["current.combined.communication", "current.combined.communication"] ,
    ["current.combined.conservation and development", "current.combined.conservation and development"] ,
    ["current.combined.educational", "current.combined.educational"] ,
    ["current.combined.health care", "current.combined.health care"] ,
    ["current.combined.highway and street", "current.combined.highway and street"] ,
    ["current.combined.lodging", "current.combined.lodging"] ,
    ["current.combined.manufacturing", "current.combined.manufacturing"] ,
    ["current.combined.nonresidential", "current.combined.nonresidential"] ,
    ["current.combined.office", "current.combined.office"] ,
    ["current.combined.power", "current.combined.power"] ,
    ["current.combined.public safety", "current.combined.public safety"] ,
    ["current.combined.religious", "current.combined.religious"] ,
    ["current.combined.residential", "current.combined.residential"] ,
    ["current.combined.sewage and waste disposal", "current.combined.sewage and waste disposal"] ,
    ["current.combined.total construction", "current.combined.total construction"] ,
    ["current.combined.transportation", "current.combined.transportation"] ,
    ["current.combined.water supply", "current.combined.water supply"] ,
    ["current.private.amusement and recreation", "current.private.amusement and recreation"] ,
    ["current.private.commercial", "current.private.commercial"] ,
    ["current.private.communication", "current.private.communication"] ,
    ["current.private.conservation and development", "current.private.conservation and development"] ,
    ["current.private.educational", "current.private.educational"] ,
    ["current.private.health care", "current.private.health care"] ,
    ["current.private.highway and street", "current.private.highway and street"] ,
    ["current.private.lodging", "current.private.lodging"] ,
    ["current.private.manufacturing", "current.private.manufacturing"] ,
    ["current.private.nonresidential", "current.private.nonresidential"] ,
    ["current.private.office", "current.private.office"] ,
    ["current.private.power", "current.private.power"] ,
    ["current.private.public safety", "current.private.public safety"] ,
    ["current.private.religious", "current.private.religious"] ,
    ["current.private.residential", "current.private.residential"] ,
    ["current.private.sewage and waste disposal", "current.private.sewage and waste disposal"] ,
    ["current.private.total construction", "current.private.total construction"] ,
    ["current.private.transportation", "current.private.transportation"] ,
    ["current.private.water supply", "current.private.water supply"] ,
    ["current.public.amusement and recreation", "current.public.amusement and recreation"] ,
    ["current.public.commercial", "current.public.commercial"] ,
    ["current.public.communication", "current.public.communication"] ,
    ["current.public.conservation and development", "current.public.conservation and development"] ,
    ["current.public.educational", "current.public.educational"] ,
    ["current.public.health care", "current.public.health care"] ,
    ["current.public.highway and street", "current.public.highway and street"] ,
    ["current.public.lodging", "current.public.lodging"] ,
    ["current.public.manufacturing", "current.public.manufacturing"] ,
    ["current.public.nonresidential", "current.public.nonresidential"] ,
    ["current.public.office", "current.public.office"] ,
    ["current.public.power", "current.public.power"] ,
    ["current.public.public safety", "current.public.public safety"] ,
    ["current.public.religious", "current.public.religious"] ,
    ["current.public.residential", "current.public.residential"] ,
    ["current.public.sewage and waste disposal", "current.public.sewage and waste disposal"] ,
    ["current.public.total construction", "current.public.total construction"] ,
    ["current.public.transportation", "current.public.transportation"] ,
    ["current.public.water supply", "current.public.water supply"] 
]

Blockly.Blocks['construction_spending_get'] = {
  init: function() {
    this.setColour(45);
    this.appendDummyInput('MAIN')
        .appendField("construction_spending.get")
        .appendField(new Blockly.FieldDropdown(construction_spending_PROPERTIES), "PROPERTY");
    this.appendDummyInput('SECOND')
        .appendField("filter")
        .appendField(new Blockly.FieldDropdown(construction_spending_INDEXES, function(option) {
                        this.getSourceBlock().updateShape_(option);
                    }), "INDEX")
    this.updateShape_("(None)");
    this.setInputsInline(false);
    this.setOutput(true, "Array");
    this.setTooltip('Returns a list of construction spending data.');
  },
  mutationToDom: function() {
    var container = document.createElement('mutation');
    container.setAttribute('index', this.getFieldValue('INDEX'));
    container.setAttribute('index_value', this.getFieldValue('INDEX_VALUE'));
    container.setAttribute('module', "construction_spending")
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
        inputGroup.appendField(new Blockly.FieldDropdown(construction_spending_INDEX_VALUES[index]), 'INDEX_VALUE')
        if (index_value != undefined) {
            this.setFieldValue(index_value, 'INDEX_VALUE');
        } else {
            this.setFieldValue(construction_spending_INDEX_VALUES[index][0][0], 'INDEX_VALUE');
        }
    }    
  }
};
Blockly.Python['construction_spending_get'] = function(block) {
    Blockly.Python.definitions_['import_construction_spending'] = 'import construction_spending';
    var propertyValue = block.getFieldValue('PROPERTY') || '';
    var property = Blockly.Python.quote_(propertyValue);
    var index_unquoted = block.getFieldValue('INDEX');
    var index = Blockly.Python.quote_(index_unquoted || '');
    var index_value = "''";
    if (index_unquoted !== '(None)') {
        var iv = block.getFieldValue('INDEX_VALUE') || "";
        index_value = Blockly.Python.quote_(iv);
    }
    var code = 'construction_spending.get('+property+',' +index+','+index_value+')';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

BlockMirrorTextToBlocks.prototype.MODULE_FUNCTION_SIGNATURES['construction_spending'] = {
    "get": {
        custom: function(node, parent) {
            if (!node.args || node.args.length < 3 ||
                !node.args[0] || !node.args[1] || !node.args[2] ||
                node.args[0]._astname !== "Str" || node.args[1]._astname !== "Str" || node.args[2]._astname !== "Str"
            ) {
                throw new Error("Not the right function call.");
            }
            return BlockMirrorTextToBlocks.create_block("construction_spending_get", null,
                {"PROPERTY": node.args[0].s.v},
                {}, {}, {"@INDEX": node.args[1].s.v,
                    "@INDEX_VALUE": node.args[2].s.v});
        }
    },
};

BlockMirrorBlockEditor.EXTRA_TOOLS['Data - construction spending'] = '<category name="Data - Construction Spending" colour="45">'+
                    '<block type="construction_spending_get"><mutation index="(None)" index_value=""></mutation></block>'+
                '</category>';