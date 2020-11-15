

var finance_INDEXES = [
    ["(None)", "(None)"],
    
    ["State", "State"] ,
    ["Year", "Year"] 
];

var finance_INDEX_VALUES = {
    "(None)": [],
    
    "State": [
        
        ["Alabama", "Alabama"] ,
        ["Alaska", "Alaska"] ,
        ["Arizona", "Arizona"] ,
        ["Arkansas", "Arkansas"] ,
        ["California", "California"] ,
        ["Colorado", "Colorado"] ,
        ["Connecticut", "Connecticut"] ,
        ["Delaware", "Delaware"] ,
        ["Florida", "Florida"] ,
        ["Georgia", "Georgia"] ,
        ["Hawaii", "Hawaii"] ,
        ["Idaho", "Idaho"] ,
        ["Illinois", "Illinois"] ,
        ["Indiana", "Indiana"] ,
        ["Iowa", "Iowa"] ,
        ["Kansas", "Kansas"] ,
        ["Kentucky", "Kentucky"] ,
        ["Louisiana", "Louisiana"] ,
        ["Maine", "Maine"] ,
        ["Maryland", "Maryland"] ,
        ["Massachusetts", "Massachusetts"] ,
        ["Michigan", "Michigan"] ,
        ["Minnesota", "Minnesota"] ,
        ["Mississippi", "Mississippi"] ,
        ["Missouri", "Missouri"] ,
        ["Montana", "Montana"] ,
        ["Nebraska", "Nebraska"] ,
        ["Nevada", "Nevada"] ,
        ["New Hampshire", "New Hampshire"] ,
        ["New Jersey", "New Jersey"] ,
        ["New Mexico", "New Mexico"] ,
        ["New York", "New York"] ,
        ["North Carolina", "North Carolina"] ,
        ["North Dakota", "North Dakota"] ,
        ["Ohio", "Ohio"] ,
        ["Oklahoma", "Oklahoma"] ,
        ["Oregon", "Oregon"] ,
        ["Pennsylvania", "Pennsylvania"] ,
        ["Rhode Island", "Rhode Island"] ,
        ["South Carolina", "South Carolina"] ,
        ["South Dakota", "South Dakota"] ,
        ["Tennessee", "Tennessee"] ,
        ["Texas", "Texas"] ,
        ["United States", "United States"] ,
        ["Utah", "Utah"] ,
        ["Vermont", "Vermont"] ,
        ["Virginia", "Virginia"] ,
        ["Washington", "Washington"] ,
        ["West Virginia", "West Virginia"] ,
        ["Wisconsin", "Wisconsin"] ,
        ["Wyoming", "Wyoming"] 
    ],
    "Year": [
        
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
        ["2013", "2013"] 
    ]
}

var finance_PROPERTIES = [
    ["State", "State"] ,
    ["Year", "Year"] ,
    ["Totals.Capital outlay", "Totals.Capital outlay"] ,
    ["Totals.Charges", "Totals.Charges"] ,
    ["Totals.Construction", "Totals.Construction"] ,
    ["Totals.Employee retirement revenue", "Totals.Employee retirement revenue"] ,
    ["Totals.Equipment and land", "Totals.Equipment and land"] ,
    ["Totals.Expenditure", "Totals.Expenditure"] ,
    ["Totals.Federal intergovernmental", "Totals.Federal intergovernmental"] ,
    ["Totals.General expenditure", "Totals.General expenditure"] ,
    ["Totals.General revenue", "Totals.General revenue"] ,
    ["Totals.Insurance trust  revenue", "Totals.Insurance trust  revenue"] ,
    ["Totals.Intergovernmental", "Totals.Intergovernmental"] ,
    ["Totals.License tax", "Totals.License tax"] ,
    ["Totals.Local intergovernmental", "Totals.Local intergovernmental"] ,
    ["Totals.Miscellaneous", "Totals.Miscellaneous"] ,
    ["Totals.Miscellaneous commercial activity", "Totals.Miscellaneous commercial activity"] ,
    ["Totals.Other insurance trust revenue", "Totals.Other insurance trust revenue"] ,
    ["Totals.Revenue", "Totals.Revenue"] ,
    ["Totals.Sales tax", "Totals.Sales tax"] ,
    ["Totals.Selective sales tax", "Totals.Selective sales tax"] ,
    ["Totals.State intergovernmental", "Totals.State intergovernmental"] ,
    ["Totals.Tax", "Totals.Tax"] ,
    ["Totals.Unemployment comp revenue", "Totals.Unemployment comp revenue"] ,
    ["Totals.Utility revenue", "Totals.Utility revenue"] ,
    ["Totals.Worker's comp revenue", "Totals.Worker's comp revenue"] ,
    ["Details.Correction.Correction Institutions Total", "Details.Correction.Correction Institutions Total"] ,
    ["Details.Correction.Correction Intergovernmental", "Details.Correction.Correction Intergovernmental"] ,
    ["Details.Correction.Correction NEC Intergovernmental", "Details.Correction.Correction NEC Intergovernmental"] ,
    ["Details.Correction.Correction NEC Total", "Details.Correction.Correction NEC Total"] ,
    ["Details.Correction.Correction Total", "Details.Correction.Correction Total"] ,
    ["Details.Education.Edcation Assistance and Subsidies", "Details.Education.Edcation Assistance and Subsidies"] ,
    ["Details.Education.Education Construction", "Details.Education.Education Construction"] ,
    ["Details.Education.Education Equipment", "Details.Education.Education Equipment"] ,
    ["Details.Education.Education Equipment and Land", "Details.Education.Education Equipment and Land"] ,
    ["Details.Education.Education Intergovernmental", "Details.Education.Education Intergovernmental"] ,
    ["Details.Education.Education Other Current Operation", "Details.Education.Education Other Current Operation"] ,
    ["Details.Education.Education Total", "Details.Education.Education Total"] ,
    ["Details.Education.Education-NEC Expenditure Total", "Details.Education.Education-NEC Expenditure Total"] ,
    ["Details.Education.Education-NEC Intergovernmental", "Details.Education.Education-NEC Intergovernmental"] ,
    ["Details.Education.Elementary Secondary Intergovernmental", "Details.Education.Elementary Secondary Intergovernmental"] ,
    ["Details.Education.Elementary Secondary Total Expenditure", "Details.Education.Elementary Secondary Total Expenditure"] ,
    ["Details.Education.Higher Education-Auxilliary Total Expenditure", "Details.Education.Higher Education-Auxilliary Total Expenditure"] ,
    ["Details.Education.Higher Education-NEC Intergovernmental", "Details.Education.Higher Education-NEC Intergovernmental"] ,
    ["Details.Education.Higher Education-NEC Total Expenditure", "Details.Education.Higher Education-NEC Total Expenditure"] ,
    ["Details.Employment.Employee Retirement Total Cash and Securities", "Details.Employment.Employee Retirement Total Cash and Securities"] ,
    ["Details.Employment.Employee Retirement Total Expenditure", "Details.Employment.Employee Retirement Total Expenditure"] ,
    ["Details.Employment.Employment Security Administration Expenditure Total", "Details.Employment.Employment Security Administration Expenditure Total"] ,
    ["Details.Employment.Employment Security Administration Intergovernmental", "Details.Employment.Employment Security Administration Intergovernmental"] ,
    ["Details.Employment.Unemployment Comp Total Cash and Securities", "Details.Employment.Unemployment Comp Total Cash and Securities"] ,
    ["Details.Employment.Unemployment Comp Total Expenditure", "Details.Employment.Unemployment Comp Total Expenditure"] ,
    ["Details.Financial Aid.Assistance and Subsidies", "Details.Financial Aid.Assistance and Subsidies"] ,
    ["Details.Financial Aid.Beginning Long Term Debt Total Outstanding", "Details.Financial Aid.Beginning Long Term Debt Total Outstanding"] ,
    ["Details.Financial Aid.Bond Fund Total", "Details.Financial Aid.Bond Fund Total"] ,
    ["Details.Financial Aid.Borrowing Total", "Details.Financial Aid.Borrowing Total"] ,
    ["Details.Financial Aid.Cash Assistance Intergovernmental", "Details.Financial Aid.Cash Assistance Intergovernmental"] ,
    ["Details.Financial Aid.Cash Assistance Total Expenditure", "Details.Financial Aid.Cash Assistance Total Expenditure"] ,
    ["Details.Financial Aid.Cash and Deposits Total", "Details.Financial Aid.Cash and Deposits Total"] ,
    ["Details.Financial Aid.Cash and Securities Total", "Details.Financial Aid.Cash and Securities Total"] ,
    ["Details.Financial Aid.Categorical Assistance Intergovernmental", "Details.Financial Aid.Categorical Assistance Intergovernmental"] ,
    ["Details.Financial Aid.Categorical Assistance Total Expenditure", "Details.Financial Aid.Categorical Assistance Total Expenditure"] ,
    ["Details.Financial Aid.Federal Agency Securities Total", "Details.Financial Aid.Federal Agency Securities Total"] ,
    ["Details.Financial Aid.Securities Total", "Details.Financial Aid.Securities Total"] ,
    ["Details.Financial Aid.Sinking Fund Total", "Details.Financial Aid.Sinking Fund Total"] ,
    ["Details.Health.Health Intergovernmental", "Details.Health.Health Intergovernmental"] ,
    ["Details.Health.Health Total Expenditure", "Details.Health.Health Total Expenditure"] ,
    ["Details.Insurance Trust.Insurance Trust", "Details.Insurance Trust.Insurance Trust"] ,
    ["Details.Insurance Trust.Insurance Trust Cash and Deposits", "Details.Insurance Trust.Insurance Trust Cash and Deposits"] ,
    ["Details.Insurance Trust.Insurance Trust Cash and Securities", "Details.Insurance Trust.Insurance Trust Cash and Securities"] ,
    ["Details.Insurance Trust.Insurance Trust Federal Agency Securities", "Details.Insurance Trust.Insurance Trust Federal Agency Securities"] ,
    ["Details.Insurance Trust.Insurance Trust Federal Securities", "Details.Insurance Trust.Insurance Trust Federal Securities"] ,
    ["Details.Insurance Trust.Insurance Trust Other Securities", "Details.Insurance Trust.Insurance Trust Other Securities"] ,
    ["Details.Insurance Trust.Insurance Trust Securities Total", "Details.Insurance Trust.Insurance Trust Securities Total"] ,
    ["Details.Insurance Trust.Insurance Trust State and Local Securities Total", "Details.Insurance Trust.Insurance Trust State and Local Securities Total"] ,
    ["Details.Insurance Trust.Insurance Trust Total Expenditure", "Details.Insurance Trust.Insurance Trust Total Expenditure"] ,
    ["Details.Intergovernmental.Intergovernmental Expenditure", "Details.Intergovernmental.Intergovernmental Expenditure"] ,
    ["Details.Intergovernmental.Intergovernmental to Combined and Unallocable", "Details.Intergovernmental.Intergovernmental to Combined and Unallocable"] ,
    ["Details.Intergovernmental.Intergovernmental to Counties", "Details.Intergovernmental.Intergovernmental to Counties"] ,
    ["Details.Intergovernmental.Intergovernmental to Federal", "Details.Intergovernmental.Intergovernmental to Federal"] ,
    ["Details.Intergovernmental.Intergovernmental to Local", "Details.Intergovernmental.Intergovernmental to Local"] ,
    ["Details.Intergovernmental.Intergovernmental to Municipalities", "Details.Intergovernmental.Intergovernmental to Municipalities"] ,
    ["Details.Intergovernmental.Intergovernmental to School Districts", "Details.Intergovernmental.Intergovernmental to School Districts"] ,
    ["Details.Intergovernmental.Intergovernmental to Special Districts", "Details.Intergovernmental.Intergovernmental to Special Districts"] ,
    ["Details.Intergovernmental.Intergovernmental to State", "Details.Intergovernmental.Intergovernmental to State"] ,
    ["Details.Intergovernmental.Intergovernmental to Townships", "Details.Intergovernmental.Intergovernmental to Townships"] ,
    ["Details.Natural Resources.Natural Resources Construction", "Details.Natural Resources.Natural Resources Construction"] ,
    ["Details.Natural Resources.Natural Resources Direct", "Details.Natural Resources.Natural Resources Direct"] ,
    ["Details.Natural Resources.Natural Resources Equipment and Land", "Details.Natural Resources.Natural Resources Equipment and Land"] ,
    ["Details.Natural Resources.Natural Resources Intergovernmental", "Details.Natural Resources.Natural Resources Intergovernmental"] ,
    ["Details.Natural Resources.Natural Resources NEC Total Expenditure", "Details.Natural Resources.Natural Resources NEC Total Expenditure"] ,
    ["Details.Natural Resources.Natural Resources Total", "Details.Natural Resources.Natural Resources Total"] ,
    ["Details.Public Welfare.Public Welfare Assistance and Subsidies", "Details.Public Welfare.Public Welfare Assistance and Subsidies"] ,
    ["Details.Public Welfare.Public Welfare Construction", "Details.Public Welfare.Public Welfare Construction"] ,
    ["Details.Public Welfare.Public Welfare Direct Expenditure", "Details.Public Welfare.Public Welfare Direct Expenditure"] ,
    ["Details.Public Welfare.Public Welfare Equipment and Land", "Details.Public Welfare.Public Welfare Equipment and Land"] ,
    ["Details.Public Welfare.Public Welfare Intergovernmental", "Details.Public Welfare.Public Welfare Intergovernmental"] ,
    ["Details.Public Welfare.Public Welfare Other Current Operation", "Details.Public Welfare.Public Welfare Other Current Operation"] ,
    ["Details.Public Welfare.Public Welfare Total Expenditure", "Details.Public Welfare.Public Welfare Total Expenditure"] ,
    ["Details.Transportation.Transit Subsidy Intergovernmental", "Details.Transportation.Transit Subsidy Intergovernmental"] ,
    ["Details.Transportation.Transit Subsidy Total Expenditure", "Details.Transportation.Transit Subsidy Total Expenditure"] ,
    ["Details.Utilities.Electric Utility Total Expenditure", "Details.Utilities.Electric Utility Total Expenditure"] ,
    ["Details.Utilities.Gas Utility Total Expenditure", "Details.Utilities.Gas Utility Total Expenditure"] ,
    ["Details.Utilities.Transit Utility Total Expenditure", "Details.Utilities.Transit Utility Total Expenditure"] ,
    ["Details.Utilities.Utilities Construction", "Details.Utilities.Utilities Construction"] ,
    ["Details.Utilities.Utilities Current Operation", "Details.Utilities.Utilities Current Operation"] ,
    ["Details.Utilities.Utilities Equipment and Land", "Details.Utilities.Utilities Equipment and Land"] ,
    ["Details.Utilities.Utilities Interest Total", "Details.Utilities.Utilities Interest Total"] ,
    ["Details.Utilities.Utilities Total Expenditure", "Details.Utilities.Utilities Total Expenditure"] ,
    ["Details.Utilities.Water Utility Total Expenditure", "Details.Utilities.Water Utility Total Expenditure"] ,
    ["Details.Waste.Sewerage Intergovernmental", "Details.Waste.Sewerage Intergovernmental"] ,
    ["Details.Waste.Sewerage Total Expenditure", "Details.Waste.Sewerage Total Expenditure"] ,
    ["Details.Waste.Solid Waste Management Intergovernmental", "Details.Waste.Solid Waste Management Intergovernmental"] ,
    ["Details.Waste.Solid Waste Management Total Expenditure", "Details.Waste.Solid Waste Management Total Expenditure"] ,
    ["Details.Welfare.Welfare Institution Total Expenditure", "Details.Welfare.Welfare Institution Total Expenditure"] ,
    ["Details.Welfare.Welfare NEC Intergovernmental", "Details.Welfare.Welfare NEC Intergovernmental"] ,
    ["Details.Welfare.Welfare NEC Total Expenditure", "Details.Welfare.Welfare NEC Total Expenditure"] ,
    ["Details.Welfare.Welfare Vendor Payments Total", "Details.Welfare.Welfare Vendor Payments Total"] ,
    ["Details.Health.Hospitals.Hospital-Other Intergovernmental", "Details.Health.Hospitals.Hospital-Other Intergovernmental"] ,
    ["Details.Health.Hospitals.Hospital-Other Total Expenditure", "Details.Health.Hospitals.Hospital-Other Total Expenditure"] ,
    ["Details.Health.Hospitals.Hospitals Total Construction", "Details.Health.Hospitals.Hospitals Total Construction"] ,
    ["Details.Health.Hospitals.Hospitals Total Current", "Details.Health.Hospitals.Hospitals Total Current"] ,
    ["Details.Health.Hospitals.Hospitals Total Equipment and land", "Details.Health.Hospitals.Hospitals Total Equipment and land"] ,
    ["Details.Health.Hospitals.Hospitals Total Expenditure", "Details.Health.Hospitals.Hospitals Total Expenditure"] ,
    ["Details.Health.Hospitals.Hospitals Total Intergovernmental", "Details.Health.Hospitals.Hospitals Total Intergovernmental"] ,
    ["Details.Health.Hospitals.Own Hospitals Total Expenditure", "Details.Health.Hospitals.Own Hospitals Total Expenditure"] ,
    ["Details.Natural Resources.Agriculture.Agriculture Intergovernmental", "Details.Natural Resources.Agriculture.Agriculture Intergovernmental"] ,
    ["Details.Natural Resources.Agriculture.Agriculture Total Expenditure", "Details.Natural Resources.Agriculture.Agriculture Total Expenditure"] ,
    ["Details.Natural Resources.Agriculture.Federal Agriculture Farm Income Intergovernmental", "Details.Natural Resources.Agriculture.Federal Agriculture Farm Income Intergovernmental"] ,
    ["Details.Natural Resources.Agriculture.Federal Agriculture Farm Income Total", "Details.Natural Resources.Agriculture.Federal Agriculture Farm Income Total"] ,
    ["Details.Natural Resources.Agriculture.Federal Farm Credit Intergovernmental", "Details.Natural Resources.Agriculture.Federal Farm Credit Intergovernmental"] ,
    ["Details.Natural Resources.Agriculture.Federal Farm Credit Total", "Details.Natural Resources.Agriculture.Federal Farm Credit Total"] ,
    ["Details.Natural Resources.Fish and Game.Fish and Game Intergovernmental", "Details.Natural Resources.Fish and Game.Fish and Game Intergovernmental"] ,
    ["Details.Natural Resources.Fish and Game.Fish and Game Total Expenditure", "Details.Natural Resources.Fish and Game.Fish and Game Total Expenditure"] ,
    ["Details.Natural Resources.Forestry.Forestry Intergovernmental", "Details.Natural Resources.Forestry.Forestry Intergovernmental"] ,
    ["Details.Natural Resources.Forestry.Forestry Total Expenditure", "Details.Natural Resources.Forestry.Forestry Total Expenditure"] ,
    ["Details.Natural Resources.Parks.Parks Intergovernmental", "Details.Natural Resources.Parks.Parks Intergovernmental"] ,
    ["Details.Natural Resources.Parks.Parks Total Expenditure", "Details.Natural Resources.Parks.Parks Total Expenditure"] ,
    ["Details.Transportation.Airports.Airports Intergovernmental", "Details.Transportation.Airports.Airports Intergovernmental"] ,
    ["Details.Transportation.Airports.Airports Total Expenditure", "Details.Transportation.Airports.Airports Total Expenditure"] ,
    ["Details.Transportation.Highways.Highways Construction Total", "Details.Transportation.Highways.Highways Construction Total"] ,
    ["Details.Transportation.Highways.Highways Direct", "Details.Transportation.Highways.Highways Direct"] ,
    ["Details.Transportation.Highways.Highways Intergovernmental", "Details.Transportation.Highways.Highways Intergovernmental"] ,
    ["Details.Transportation.Highways.Highways Land and Equipment", "Details.Transportation.Highways.Highways Land and Equipment"] ,
    ["Details.Transportation.Highways.Highways Total Expenditure", "Details.Transportation.Highways.Highways Total Expenditure"] ,
    ["Details.Transportation.Highways.Regular Highways Intergovernmental", "Details.Transportation.Highways.Regular Highways Intergovernmental"] ,
    ["Details.Transportation.Highways.Regular Highways Total Expenditure", "Details.Transportation.Highways.Regular Highways Total Expenditure"] ,
    ["Details.Transportation.Highways.Toll Highways Total Expenditure", "Details.Transportation.Highways.Toll Highways Total Expenditure"] ,
    ["Details.Transportation.Parking.Parking Intergovernmental", "Details.Transportation.Parking.Parking Intergovernmental"] ,
    ["Details.Transportation.Parking.Parking Total", "Details.Transportation.Parking.Parking Total"] ,
    ["Details.Transportation.Water Transport.Water Transport Intergovernmental", "Details.Transportation.Water Transport.Water Transport Intergovernmental"] ,
    ["Details.Transportation.Water Transport.Water Transport Total Expenditure", "Details.Transportation.Water Transport.Water Transport Total Expenditure"] 
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