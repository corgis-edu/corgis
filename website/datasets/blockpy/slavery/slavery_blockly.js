

var slavery_INDEXES = [
    ["(None)", "(None)"],
    
    ["Buyer.State of Origin", "Buyer.State of Origin"] 
];

var slavery_INDEX_VALUES = {
    "(None)": [],
    
    "Buyer.State of Origin": [
        
        [". ", ". "] ,
        ["AL", "AL"] ,
        ["AR", "AR"] ,
        ["CA", "CA"] ,
        ["Columbia", "Columbia"] ,
        ["England", "England"] ,
        ["FL", "FL"] ,
        ["France", "France"] ,
        ["GA", "GA"] ,
        ["IL", "IL"] ,
        ["IN", "IN"] ,
        ["KY", "KY"] ,
        ["LA", "LA"] ,
        ["LA ", "LA "] ,
        ["MD", "MD"] ,
        ["Mexico", "Mexico"] ,
        ["MO", "MO"] ,
        ["MS", "MS"] ,
        ["NC", "NC"] ,
        ["NH", "NH"] ,
        ["NY", "NY"] ,
        ["NY, LA", "NY, LA"] ,
        ["OH", "OH"] ,
        ["PA", "PA"] ,
        ["TN", "TN"] ,
        ["TX", "TX"] ,
        ["Unknown", "Unknown"] ,
        ["VA", "VA"] 
    ]
}

var slavery_PROPERTIES = [
    ["Buyer.County of Origin", "Buyer.County of Origin"] ,
    ["Buyer.Full Name", "Buyer.Full Name"] ,
    ["Buyer.Origin", "Buyer.Origin"] ,
    ["Buyer.State of Origin", "Buyer.State of Origin"] ,
    ["Seller.County of Origin", "Seller.County of Origin"] ,
    ["Seller.Full Name", "Seller.Full Name"] ,
    ["Seller.Origin", "Seller.Origin"] ,
    ["Seller.State of Origin", "Seller.State of Origin"] ,
    ["Slave.Age", "Slave.Age"] ,
    ["Slave.Gender", "Slave.Gender"] ,
    ["Slave.Name", "Slave.Name"] ,
    ["Slave.Skin Color", "Slave.Skin Color"] ,
    ["Transaction.Date", "Transaction.Date"] ,
    ["Transaction.Number of Adult Slaves", "Transaction.Number of Adult Slaves"] ,
    ["Transaction.Number of Child Slaves", "Transaction.Number of Child Slaves"] ,
    ["Transaction.Number of Total Slaves Purchased", "Transaction.Number of Total Slaves Purchased"] ,
    ["Transaction.Sale Details.Discount Rate", "Transaction.Sale Details.Discount Rate"] ,
    ["Transaction.Sale Details.Payment Method", "Transaction.Sale Details.Payment Method"] ,
    ["Transaction.Sale Details.Predicted Interest Rate", "Transaction.Sale Details.Predicted Interest Rate"] ,
    ["Transaction.Sale Details.Price", "Transaction.Sale Details.Price"] ,
    ["Transaction.Sale Details.Prices Listed", "Transaction.Sale Details.Prices Listed"] 
]

Blockly.Blocks['slavery_get'] = {
  init: function() {
    this.setColour(45);
    this.appendDummyInput('MAIN')
        .appendField("slavery.get")
        .appendField(new Blockly.FieldDropdown(slavery_PROPERTIES), "PROPERTY");
    this.appendDummyInput('SECOND')
        .appendField("filter")
        .appendField(new Blockly.FieldDropdown(slavery_INDEXES, function(option) {
                        this.getSourceBlock().updateShape_(option);
                    }), "INDEX")
    this.updateShape_("(None)");
    this.setInputsInline(false);
    this.setOutput(true, "Array");
    this.setTooltip('Returns a list of slavery data.');
  },
  mutationToDom: function() {
    var container = document.createElement('mutation');
    container.setAttribute('index', this.getFieldValue('INDEX'));
    container.setAttribute('index_value', this.getFieldValue('INDEX_VALUE'));
    container.setAttribute('module', "slavery")
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
            inputGroup.appendField(new Blockly.FieldDropdown(slavery_INDEX_VALUES[index]), 'INDEX_VALUE')
            if (index_value != undefined) {
                this.setFieldValue(index_value, 'INDEX_VALUE');
            } else {
                this.setFieldValue(slavery_INDEX_VALUES[index][0][0], 'INDEX_VALUE');
            }
        }
    } catch (e) {
        inputGroup.appendField(new Blockly.FieldLabel("Reset to fix the blocks"));
        console.error(e);
    }
  }
};
Blockly.Python['slavery_get'] = function(block) {
    Blockly.Python.definitions_['import_slavery'] = 'import slavery';
    var propertyValue = block.getFieldValue('PROPERTY') || '';
    var property = Blockly.Python.quote_(propertyValue);
    var index_unquoted = block.getFieldValue('INDEX');
    var index = Blockly.Python.quote_(index_unquoted || '');
    var index_value = "''";
    if (index_unquoted !== '(None)') {
        var iv = block.getFieldValue('INDEX_VALUE') || "";
        index_value = Blockly.Python.quote_(iv);
    }
    var code = 'slavery.get('+property+',' +index+','+index_value+')';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

BlockMirrorTextToBlocks.prototype.MODULE_FUNCTION_SIGNATURES['slavery'] = {
    "get": {
        custom: function(node, parent) {
            if (!node.args || node.args.length < 3 ||
                !node.args[0] || !node.args[1] || !node.args[2] ||
                node.args[0]._astname !== "Str" || node.args[1]._astname !== "Str" || node.args[2]._astname !== "Str"
            ) {
                throw new Error("Not the right function call.");
            }
            return BlockMirrorTextToBlocks.create_block("slavery_get", null,
                {"PROPERTY": node.args[0].s.v},
                {}, {}, {"@INDEX": node.args[1].s.v,
                    "@INDEX_VALUE": node.args[2].s.v});
        }
    },
};

BlockMirrorBlockEditor.EXTRA_TOOLS['Data - slavery'] = '<category name="Data - Slavery" colour="45">'+
                    '<block type="slavery_get"><mutation index="(None)" index_value=""></mutation></block>'+
                '</category>';