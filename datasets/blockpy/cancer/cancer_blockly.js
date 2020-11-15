

var cancer_INDEXES = [
    ["(None)", "(None)"],
    
    ["State", "State"] 
];

var cancer_INDEX_VALUES = {
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
        ["District of Columbia", "District of Columbia"] ,
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
        ["Utah", "Utah"] ,
        ["Vermont", "Vermont"] ,
        ["Virginia", "Virginia"] ,
        ["Washington", "Washington"] ,
        ["West Virginia", "West Virginia"] ,
        ["Wisconsin", "Wisconsin"] ,
        ["Wyoming", "Wyoming"] 
    ]
}

var cancer_PROPERTIES = [
    ["State", "State"] ,
    ["Total.Rate", "Total.Rate"] ,
    ["Total.Number", "Total.Number"] ,
    ["Total.Population", "Total.Population"] ,
    ["Rates.Age.< 18", "Rates.Age.< 18"] ,
    ["Rates.Age.18-45", "Rates.Age.18-45"] ,
    ["Rates.Age.45-64", "Rates.Age.45-64"] ,
    ["Rates.Age.> 64", "Rates.Age.> 64"] ,
    ["Rates.Age and Sex.< 18.Female", "Rates.Age and Sex.< 18.Female"] ,
    ["Rates.Age and Sex.< 18.Male", "Rates.Age and Sex.< 18.Male"] ,
    ["Rates.Age and Sex.18 - 45.Female", "Rates.Age and Sex.18 - 45.Female"] ,
    ["Rates.Age and Sex.18 - 45.Male", "Rates.Age and Sex.18 - 45.Male"] ,
    ["Rates.Age and Sex.45 - 64.Female", "Rates.Age and Sex.45 - 64.Female"] ,
    ["Rates.Age and Sex.45 - 64.Male", "Rates.Age and Sex.45 - 64.Male"] ,
    ["Rates.Age and Sex.> 64.Female", "Rates.Age and Sex.> 64.Female"] ,
    ["Rates.Age and Sex.> 64.Male", "Rates.Age and Sex.> 64.Male"] ,
    ["Rates.Race.White", "Rates.Race.White"] ,
    ["Rates.Race.White non-Hispanic", "Rates.Race.White non-Hispanic"] ,
    ["Rates.Race.Black", "Rates.Race.Black"] ,
    ["Rates.Race.Asian", "Rates.Race.Asian"] ,
    ["Rates.Race.Indigenous", "Rates.Race.Indigenous"] ,
    ["Rates.Race and Sex.Female.White", "Rates.Race and Sex.Female.White"] ,
    ["Rates.Race and Sex.Female.White non-Hispanic", "Rates.Race and Sex.Female.White non-Hispanic"] ,
    ["Rates.Race and Sex.Female.Black", "Rates.Race and Sex.Female.Black"] ,
    ["Rates.Race and Sex.Female.Black non-Hispanic", "Rates.Race and Sex.Female.Black non-Hispanic"] ,
    ["Rates.Race and Sex.Female.Asian", "Rates.Race and Sex.Female.Asian"] ,
    ["Rates.Race and Sex.Female.Indigenous", "Rates.Race and Sex.Female.Indigenous"] ,
    ["Rates.Race and Sex.Male.White", "Rates.Race and Sex.Male.White"] ,
    ["Rates.Race and Sex.Male.White non-Hispanic", "Rates.Race and Sex.Male.White non-Hispanic"] ,
    ["Rates.Race and Sex.Male.Black", "Rates.Race and Sex.Male.Black"] ,
    ["Rates.Race and Sex.Male.Black non-Hispanic", "Rates.Race and Sex.Male.Black non-Hispanic"] ,
    ["Rates.Race and Sex.Male.Asian", "Rates.Race and Sex.Male.Asian"] ,
    ["Rates.Race and Sex.Male.Indigenous", "Rates.Race and Sex.Male.Indigenous"] ,
    ["Rates.Race.Hispanic", "Rates.Race.Hispanic"] ,
    ["Rates.Race and Sex.Female.Hispanic", "Rates.Race and Sex.Female.Hispanic"] ,
    ["Rates.Race and Sex.Male.Hispanic", "Rates.Race and Sex.Male.Hispanic"] ,
    ["Types.Breast.Total", "Types.Breast.Total"] ,
    ["Types.Breast.Age.18 - 44", "Types.Breast.Age.18 - 44"] ,
    ["Types.Breast.Age.45 - 64", "Types.Breast.Age.45 - 64"] ,
    ["Types.Breast.Age.> 64", "Types.Breast.Age.> 64"] ,
    ["Types.Breast.Race.White", "Types.Breast.Race.White"] ,
    ["Types.Breast.Race.White non-Hispanic ", "Types.Breast.Race.White non-Hispanic "] ,
    ["Types.Breast.Race.Black", "Types.Breast.Race.Black"] ,
    ["Types.Breast.Race.Black non-Hispanic", "Types.Breast.Race.Black non-Hispanic"] ,
    ["Types.Breast.Race.Asian", "Types.Breast.Race.Asian"] ,
    ["Types.Breast.Race.Indigenous", "Types.Breast.Race.Indigenous"] ,
    ["Types.Breast.Race.Hispanic", "Types.Breast.Race.Hispanic"] ,
    ["Types.Colorectal.Total", "Types.Colorectal.Total"] ,
    ["Types.Colorectal.Age and Sex.Female.18 - 44", "Types.Colorectal.Age and Sex.Female.18 - 44"] ,
    ["Types.Colorectal.Age and Sex.Male.18 - 44", "Types.Colorectal.Age and Sex.Male.18 - 44"] ,
    ["Types.Colorectal.Age and Sex.Female.45 - 64", "Types.Colorectal.Age and Sex.Female.45 - 64"] ,
    ["Types.Colorectal.Age and Sex.Male.45 - 64", "Types.Colorectal.Age and Sex.Male.45 - 64"] ,
    ["Types.Colorectal.Age and Sex.Female.> 64", "Types.Colorectal.Age and Sex.Female.> 64"] ,
    ["Types.Colorectal.Age and Sex.Male.> 64", "Types.Colorectal.Age and Sex.Male.> 64"] ,
    ["Types.Colorectal.Race.White", "Types.Colorectal.Race.White"] ,
    ["Types.Colorectal.Race.White non-Hispanic", "Types.Colorectal.Race.White non-Hispanic"] ,
    ["Types.Colorectal.Race.Black", "Types.Colorectal.Race.Black"] ,
    ["Types.Colorectal.Race.Black non-Hispanic", "Types.Colorectal.Race.Black non-Hispanic"] ,
    ["Types.Colorectal.Race.Asian", "Types.Colorectal.Race.Asian"] ,
    ["Types.Colorectal.Race.Indigenous", "Types.Colorectal.Race.Indigenous"] ,
    ["Types.Colorectal.Race.Hispanic", "Types.Colorectal.Race.Hispanic"] ,
    ["Types.Lung.Total", "Types.Lung.Total"] ,
    ["Types.Lung.Age and Sex.Female.18 - 44", "Types.Lung.Age and Sex.Female.18 - 44"] ,
    ["Types.Lung.Age and Sex.Male.18 - 44", "Types.Lung.Age and Sex.Male.18 - 44"] ,
    ["Types.Lung.Age and Sex.Female.45 - 64", "Types.Lung.Age and Sex.Female.45 - 64"] ,
    ["Types.Lung.Age and Sex.Male.45 - 64", "Types.Lung.Age and Sex.Male.45 - 64"] ,
    ["Types.Lung.Age and Sex.Female.> 64", "Types.Lung.Age and Sex.Female.> 64"] ,
    ["Types.Lung.Age and Sex.Male.> 64", "Types.Lung.Age and Sex.Male.> 64"] ,
    ["Types.Lung.Race.White", "Types.Lung.Race.White"] ,
    ["Types.Lung.Race.White non-Hispanic", "Types.Lung.Race.White non-Hispanic"] ,
    ["Types.Lung.Race.Black", "Types.Lung.Race.Black"] ,
    ["Types.Lung.Race.Black non-Hispanic", "Types.Lung.Race.Black non-Hispanic"] ,
    ["Types.Lung.Race.Asian", "Types.Lung.Race.Asian"] ,
    ["Types.Lung.Race.Indigenous", "Types.Lung.Race.Indigenous"] ,
    ["Types.Lung.Race.Hispanic", "Types.Lung.Race.Hispanic"] 
]

Blockly.Blocks['cancer_get'] = {
  init: function() {
    this.setColour(45);
    this.appendDummyInput('MAIN')
        .appendField("cancer.get")
        .appendField(new Blockly.FieldDropdown(cancer_PROPERTIES), "PROPERTY");
    this.appendDummyInput('SECOND')
        .appendField("filter")
        .appendField(new Blockly.FieldDropdown(cancer_INDEXES, function(option) {
                        this.getSourceBlock().updateShape_(option);
                    }), "INDEX")
    this.updateShape_("(None)");
    this.setInputsInline(false);
    this.setOutput(true, "Array");
    this.setTooltip('Returns a list of cancer data.');
  },
  mutationToDom: function() {
    var container = document.createElement('mutation');
    container.setAttribute('index', this.getFieldValue('INDEX'));
    container.setAttribute('index_value', this.getFieldValue('INDEX_VALUE'));
    container.setAttribute('module', "cancer")
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
            inputGroup.appendField(new Blockly.FieldDropdown(cancer_INDEX_VALUES[index]), 'INDEX_VALUE')
            if (index_value != undefined) {
                this.setFieldValue(index_value, 'INDEX_VALUE');
            } else {
                this.setFieldValue(cancer_INDEX_VALUES[index][0][0], 'INDEX_VALUE');
            }
        }
    } catch (e) {
        inputGroup.appendField(new Blockly.FieldLabel("Reset to fix the blocks"));
        console.error(e);
    }
  }
};
Blockly.Python['cancer_get'] = function(block) {
    Blockly.Python.definitions_['import_cancer'] = 'import cancer';
    var propertyValue = block.getFieldValue('PROPERTY') || '';
    var property = Blockly.Python.quote_(propertyValue);
    var index_unquoted = block.getFieldValue('INDEX');
    var index = Blockly.Python.quote_(index_unquoted || '');
    var index_value = "''";
    if (index_unquoted !== '(None)') {
        var iv = block.getFieldValue('INDEX_VALUE') || "";
        index_value = Blockly.Python.quote_(iv);
    }
    var code = 'cancer.get('+property+',' +index+','+index_value+')';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

BlockMirrorTextToBlocks.prototype.MODULE_FUNCTION_SIGNATURES['cancer'] = {
    "get": {
        custom: function(node, parent) {
            if (!node.args || node.args.length < 3 ||
                !node.args[0] || !node.args[1] || !node.args[2] ||
                node.args[0]._astname !== "Str" || node.args[1]._astname !== "Str" || node.args[2]._astname !== "Str"
            ) {
                throw new Error("Not the right function call.");
            }
            return BlockMirrorTextToBlocks.create_block("cancer_get", null,
                {"PROPERTY": node.args[0].s.v},
                {}, {}, {"@INDEX": node.args[1].s.v,
                    "@INDEX_VALUE": node.args[2].s.v});
        }
    },
};

BlockMirrorBlockEditor.EXTRA_TOOLS['Data - cancer'] = '<category name="Data - Cancer" colour="45">'+
                    '<block type="cancer_get"><mutation index="(None)" index_value=""></mutation></block>'+
                '</category>';