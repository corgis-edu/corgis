

var finance_INDEXES = [
    ["(None)", "(None)"],
    
    ["State", "State"] ,
    ["Year", "Year"] 
];

var finance_INDEX_VALUES = {
    "(None)": [],
    
    "State": [
        
        ["ALABAMA", "ALABAMA"] ,
        ["ALASKA", "ALASKA"] ,
        ["ARIZONA", "ARIZONA"] ,
        ["ARKANSAS", "ARKANSAS"] ,
        ["CALIFORNIA", "CALIFORNIA"] ,
        ["COLORADO", "COLORADO"] ,
        ["CONNECTICUT", "CONNECTICUT"] ,
        ["DELAWARE", "DELAWARE"] ,
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
        ["UNITED STATES", "UNITED STATES"] ,
        ["UTAH", "UTAH"] ,
        ["VERMONT", "VERMONT"] ,
        ["VIRGINIA", "VIRGINIA"] ,
        ["WASHINGTON", "WASHINGTON"] ,
        ["WEST VIRGINIA", "WEST VIRGINIA"] ,
        ["WISCONSIN", "WISCONSIN"] ,
        ["WYOMING", "WYOMING"] 
    ],
    "Year": [
        
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
        ["2012", "2012"] ,
        ["2013", "2013"] ,
        ["2014", "2014"] ,
        ["2015", "2015"] ,
        ["2016", "2016"] ,
        ["2017", "2017"] ,
        ["2018", "2018"] ,
        ["2019", "2019"] 
    ]
}

var finance_PROPERTIES = [
    ["State", "State"] ,
    ["Year", "Year"] ,
    ["Totals.Capital outlay", "Totals.Capital outlay"] ,
    ["Totals.Revenue", "Totals.Revenue"] ,
    ["Totals.Expenditure", "Totals.Expenditure"] ,
    ["Totals.General expenditure", "Totals.General expenditure"] ,
    ["Totals.General revenue", "Totals.General revenue"] ,
    ["Totals.Insurance trust  revenue", "Totals.Insurance trust  revenue"] ,
    ["Totals.Intergovernmental", "Totals.Intergovernmental"] ,
    ["Totals.License tax", "Totals.License tax"] ,
    ["Totals.Selective sales tax", "Totals.Selective sales tax"] ,
    ["Totals.Tax", "Totals.Tax"] ,
    ["Details.Correction.Correction Total", "Details.Correction.Correction Total"] ,
    ["Details.Education.Education Total", "Details.Education.Education Total"] ,
    ["Details.Financial Aid.Assistance and Subsidies", "Details.Financial Aid.Assistance and Subsidies"] ,
    ["Details.Financial Aid.Cash and Securities Total", "Details.Financial Aid.Cash and Securities Total"] ,
    ["Details.Health.Health Total Expenditure", "Details.Health.Health Total Expenditure"] ,
    ["Details.Intergovernmental.Intergovernmental Expenditure", "Details.Intergovernmental.Intergovernmental Expenditure"] ,
    ["Details.Intergovernmental.Intergovernmental to Combined and Unallocable", "Details.Intergovernmental.Intergovernmental to Combined and Unallocable"] ,
    ["Details.Natural Resources.Natural Resources Construction", "Details.Natural Resources.Natural Resources Construction"] ,
    ["Details.Utilities.Utilities Current Operation", "Details.Utilities.Utilities Current Operation"] ,
    ["Details.Welfare.Welfare Institution Total Expenditure", "Details.Welfare.Welfare Institution Total Expenditure"] ,
    ["Details.Natural Resources.Parks.Parks Total Expenditure", "Details.Natural Resources.Parks.Parks Total Expenditure"] ,
    ["Details.Transportation.Highways.Highways Total Expenditure", "Details.Transportation.Highways.Highways Total Expenditure"] ,
    ["Totals. Debt at end of fiscal year", "Totals. Debt at end of fiscal year"] ,
    ["Details.Insurance benefits and repayments", "Details.Insurance benefits and repayments"] ,
    ["Details.Interest on debt", "Details.Interest on debt"] ,
    ["Details.Interest on general debt", "Details.Interest on general debt"] ,
    ["Details.Miscellaneous general revenue", "Details.Miscellaneous general revenue"] ,
    ["Details.Other taxes", "Details.Other taxes"] ,
    ["Details.Police protection", "Details.Police protection"] 
]

Blockly.Blocks['finance_get'] = {
  init: function() {
    this.setColour(45);
    this.appendDummyInput('MAIN')
        .appendField("finance.get")
        .appendField(new Blockly.FieldDropdown(finance_PROPERTIES), "PROPERTY");
    this.appendDummyInput('SECOND')
        .appendField("filter")
        .appendField(new Blockly.FieldDropdown(finance_INDEXES, function(option) {
                        this.getSourceBlock().updateShape_(option);
                    }), "INDEX")
    this.updateShape_("(None)");
    this.setInputsInline(false);
    this.setOutput(true, "Array");
    this.setTooltip('Returns a list of finance data.');
  },
  mutationToDom: function() {
    var container = document.createElement('mutation');
    container.setAttribute('index', this.getFieldValue('INDEX'));
    container.setAttribute('index_value', this.getFieldValue('INDEX_VALUE'));
    container.setAttribute('module', "finance")
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
            inputGroup.appendField(new Blockly.FieldDropdown(finance_INDEX_VALUES[index]), 'INDEX_VALUE')
            if (index_value != undefined) {
                this.setFieldValue(index_value, 'INDEX_VALUE');
            } else {
                this.setFieldValue(finance_INDEX_VALUES[index][0][0], 'INDEX_VALUE');
            }
        }
    } catch (e) {
        inputGroup.appendField(new Blockly.FieldLabel("Reset to fix the blocks"));
        console.error(e);
    }
  }
};
Blockly.Python['finance_get'] = function(block) {
    Blockly.Python.definitions_['import_finance'] = 'import finance';
    var propertyValue = block.getFieldValue('PROPERTY') || '';
    var property = Blockly.Python.quote_(propertyValue);
    var index_unquoted = block.getFieldValue('INDEX');
    var index = Blockly.Python.quote_(index_unquoted || '');
    var index_value = "''";
    if (index_unquoted !== '(None)') {
        var iv = block.getFieldValue('INDEX_VALUE') || "";
        index_value = Blockly.Python.quote_(iv);
    }
    var code = 'finance.get('+property+',' +index+','+index_value+')';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

BlockMirrorTextToBlocks.prototype.MODULE_FUNCTION_SIGNATURES['finance'] = {
    "get": {
        custom: function(node, parent) {
            if (!node.args || node.args.length < 3 ||
                !node.args[0] || !node.args[1] || !node.args[2] ||
                node.args[0]._astname !== "Str" || node.args[1]._astname !== "Str" || node.args[2]._astname !== "Str"
            ) {
                throw new Error("Not the right function call.");
            }
            return BlockMirrorTextToBlocks.create_block("finance_get", null,
                {"PROPERTY": node.args[0].s.v},
                {}, {}, {"@INDEX": node.args[1].s.v,
                    "@INDEX_VALUE": node.args[2].s.v});
        }
    },
};

BlockMirrorBlockEditor.EXTRA_TOOLS['Data - finance'] = '<category name="Data - Finance" colour="45">'+
                    '<block type="finance_get"><mutation index="(None)" index_value=""></mutation></block>'+
                '</category>';