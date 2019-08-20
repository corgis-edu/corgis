

var graduates_INDEXES = [
    ["(None)", "(None)"],
    
    ["Year", "Year"] ,
    ["Education.Major", "Education.Major"] 
];

var graduates_INDEX_VALUES = {
    "(None)": [],
    
    "Year": [
        
        ["1993", "1993"] ,
        ["1995", "1995"] ,
        ["1997", "1997"] ,
        ["1999", "1999"] ,
        ["2001", "2001"] ,
        ["2003", "2003"] ,
        ["2006", "2006"] ,
        ["2008", "2008"] ,
        ["2010", "2010"] ,
        ["2013", "2013"] ,
        ["2015", "2015"] 
    ],
    "Education.Major": [
        
        ["Agricultural Economics", "Agricultural Economics"] ,
        ["Animal Sciences", "Animal Sciences"] ,
        ["Anthropology and Archeology", "Anthropology and Archeology"] ,
        ["Area and Ethnic Studies", "Area and Ethnic Studies"] ,
        ["Atmospheric Sciences and Meteorology", "Atmospheric Sciences and Meteorology"] ,
        ["Biochemistry and Biophysics", "Biochemistry and Biophysics"] ,
        ["Biological Sciences", "Biological Sciences"] ,
        ["Botany", "Botany"] ,
        ["Chemical Engineering", "Chemical Engineering"] ,
        ["Chemistry", "Chemistry"] ,
        ["Civil Engineering", "Civil Engineering"] ,
        ["Computer Science and Math", "Computer Science and Math"] ,
        ["Criminology", "Criminology"] ,
        ["Earth Sciences", "Earth Sciences"] ,
        ["Economics", "Economics"] ,
        ["Electrical Engineering", "Electrical Engineering"] ,
        ["Environmental Science Studies", "Environmental Science Studies"] ,
        ["Food Sciences and Technology", "Food Sciences and Technology"] ,
        ["Forestry Services", "Forestry Services"] ,
        ["Genetics, Animal and Plant", "Genetics, Animal and Plant"] ,
        ["Geography", "Geography"] ,
        ["Geology", "Geology"] ,
        ["History of Science", "History of Science"] ,
        ["Information Services and Systems", "Information Services and Systems"] ,
        ["International Relations", "International Relations"] ,
        ["Linguistics", "Linguistics"] ,
        ["Management & Administration", "Management & Administration"] ,
        ["Mechanical Engineering", "Mechanical Engineering"] ,
        ["Nutritional Science", "Nutritional Science"] ,
        ["Oceanography", "Oceanography"] ,
        ["Operations Research", "Operations Research"] ,
        ["OTHER Agricultural Sciences", "OTHER Agricultural Sciences"] ,
        ["Other Engineering", "Other Engineering"] ,
        ["OTHER Geological Sciences", "OTHER Geological Sciences"] ,
        ["OTHER Physical and Related Sciences", "OTHER Physical and Related Sciences"] ,
        ["Pharmacology, Human and Animal", "Pharmacology, Human and Animal"] ,
        ["Philosophy of Science", "Philosophy of Science"] ,
        ["Physics and Astronomy", "Physics and Astronomy"] ,
        ["Physiology, Human and Animal", "Physiology, Human and Animal"] ,
        ["Plant Sciences", "Plant Sciences"] ,
        ["Political and related sciences", "Political and related sciences"] ,
        ["Political Science and Government", "Political Science and Government"] ,
        ["Psychology", "Psychology"] ,
        ["Public Policy Studies", "Public Policy Studies"] ,
        ["Sociology", "Sociology"] ,
        ["Statistics", "Statistics"] ,
        ["Zoology, General", "Zoology, General"] 
    ]
}

var graduates_PROPERTIES = [
    ["Year", "Year"] ,
    ["Demographics.Total", "Demographics.Total"] ,
    ["Education.Major", "Education.Major"] ,
    ["Salaries.Highest", "Salaries.Highest"] ,
    ["Salaries.Lowest", "Salaries.Lowest"] ,
    ["Salaries.Mean", "Salaries.Mean"] ,
    ["Salaries.Median", "Salaries.Median"] ,
    ["Salaries.Quantity", "Salaries.Quantity"] ,
    ["Salaries.Standard Deviation", "Salaries.Standard Deviation"] ,
    ["Demographics.Ethnicity.Asians", "Demographics.Ethnicity.Asians"] ,
    ["Demographics.Ethnicity.Minorities", "Demographics.Ethnicity.Minorities"] ,
    ["Demographics.Ethnicity.Whites", "Demographics.Ethnicity.Whites"] ,
    ["Demographics.Gender.Females", "Demographics.Gender.Females"] ,
    ["Demographics.Gender.Males", "Demographics.Gender.Males"] ,
    ["Education.Degrees.Bachelors", "Education.Degrees.Bachelors"] ,
    ["Education.Degrees.Doctorates", "Education.Degrees.Doctorates"] ,
    ["Education.Degrees.Masters", "Education.Degrees.Masters"] ,
    ["Education.Degrees.Professionals", "Education.Degrees.Professionals"] ,
    ["Employment.Employer Type.Business/Industry", "Employment.Employer Type.Business/Industry"] ,
    ["Employment.Employer Type.Educational Institution", "Employment.Employer Type.Educational Institution"] ,
    ["Employment.Employer Type.Government", "Employment.Employer Type.Government"] ,
    ["Employment.Reason Working Outside Field.Career Change", "Employment.Reason Working Outside Field.Career Change"] ,
    ["Employment.Reason Working Outside Field.Family-related", "Employment.Reason Working Outside Field.Family-related"] ,
    ["Employment.Reason Working Outside Field.Job Location", "Employment.Reason Working Outside Field.Job Location"] ,
    ["Employment.Reason Working Outside Field.No Job Available", "Employment.Reason Working Outside Field.No Job Available"] ,
    ["Employment.Reason Working Outside Field.Other", "Employment.Reason Working Outside Field.Other"] ,
    ["Employment.Reason Working Outside Field.Pay/Promotion", "Employment.Reason Working Outside Field.Pay/Promotion"] ,
    ["Employment.Reason Working Outside Field.Working Conditions", "Employment.Reason Working Outside Field.Working Conditions"] ,
    ["Employment.Reason for Not Working.Family", "Employment.Reason for Not Working.Family"] ,
    ["Employment.Reason for Not Working.Layoff", "Employment.Reason for Not Working.Layoff"] ,
    ["Employment.Reason for Not Working.No Job Available", "Employment.Reason for Not Working.No Job Available"] ,
    ["Employment.Reason for Not Working.No need/want", "Employment.Reason for Not Working.No need/want"] ,
    ["Employment.Reason for Not Working.Student", "Employment.Reason for Not Working.Student"] ,
    ["Employment.Status.Employed", "Employment.Status.Employed"] ,
    ["Employment.Status.Not in Labor Force", "Employment.Status.Not in Labor Force"] ,
    ["Employment.Status.Unemployed", "Employment.Status.Unemployed"] ,
    ["Employment.Work Activity.Accounting/Finance/Contracts", "Employment.Work Activity.Accounting/Finance/Contracts"] ,
    ["Employment.Work Activity.Applied Research", "Employment.Work Activity.Applied Research"] ,
    ["Employment.Work Activity.Basic Research", "Employment.Work Activity.Basic Research"] ,
    ["Employment.Work Activity.Computer Applications", "Employment.Work Activity.Computer Applications"] ,
    ["Employment.Work Activity.Design", "Employment.Work Activity.Design"] ,
    ["Employment.Work Activity.Development", "Employment.Work Activity.Development"] ,
    ["Employment.Work Activity.Human Resources", "Employment.Work Activity.Human Resources"] ,
    ["Employment.Work Activity.Managing/Supervising People/Projects", "Employment.Work Activity.Managing/Supervising People/Projects"] ,
    ["Employment.Work Activity.Other", "Employment.Work Activity.Other"] ,
    ["Employment.Work Activity.Productions/Operations/Maintenance", "Employment.Work Activity.Productions/Operations/Maintenance"] ,
    ["Employment.Work Activity.Professional Service", "Employment.Work Activity.Professional Service"] ,
    ["Employment.Work Activity.Qualitity/Productivity Management", "Employment.Work Activity.Qualitity/Productivity Management"] ,
    ["Employment.Work Activity.Sales, Purchasing, Marketing", "Employment.Work Activity.Sales, Purchasing, Marketing"] ,
    ["Employment.Work Activity.Teaching", "Employment.Work Activity.Teaching"] 
]

Blockly.Blocks['graduates_get'] = {
  init: function() {
    this.setColour(45);
    this.appendDummyInput('MAIN')
        .appendField("graduates.get")
        .appendField(new Blockly.FieldDropdown(graduates_PROPERTIES), "PROPERTY");
    this.appendDummyInput('SECOND')
        .appendField("filter")
        .appendField(new Blockly.FieldDropdown(graduates_INDEXES, function(option) {
                        this.getSourceBlock().updateShape_(option);
                    }), "INDEX")
    this.updateShape_("(None)");
    this.setInputsInline(false);
    this.setOutput(true, "Array");
    this.setTooltip('Returns a list of graduates data.');
  },
  mutationToDom: function() {
    var container = document.createElement('mutation');
    container.setAttribute('index', this.getFieldValue('INDEX'));
    container.setAttribute('index_value', this.getFieldValue('INDEX_VALUE'));
    container.setAttribute('module', "graduates")
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
        inputGroup.appendField(new Blockly.FieldDropdown(graduates_INDEX_VALUES[index]), 'INDEX_VALUE')
        if (index_value != undefined) {
            this.setFieldValue(index_value, 'INDEX_VALUE');
        } else {
            this.setFieldValue(graduates_INDEX_VALUES[index][0][0], 'INDEX_VALUE');
        }
    }    
  }
};
Blockly.Python['graduates_get'] = function(block) {
    Blockly.Python.definitions_['import_graduates'] = 'import graduates';
    var propertyValue = block.getFieldValue('PROPERTY') || '';
    var property = Blockly.Python.quote_(propertyValue);
    var index_unquoted = block.getFieldValue('INDEX');
    var index = Blockly.Python.quote_(index_unquoted || '');
    var index_value = "''";
    if (index_unquoted !== '(None)') {
        var iv = block.getFieldValue('INDEX_VALUE') || "";
        index_value = Blockly.Python.quote_(iv);
    }
    var code = 'graduates.get('+property+',' +index+','+index_value+')';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

BlockMirrorTextToBlocks.prototype.MODULE_FUNCTION_SIGNATURES['graduates'] = {
    "get": {
        custom: function(node, parent) {
            if (!node.args || node.args.length < 3 ||
                !node.args[0] || !node.args[1] || !node.args[2] ||
                node.args[0]._astname !== "Str" || node.args[1]._astname !== "Str" || node.args[2]._astname !== "Str"
            ) {
                throw new Error("Not the right function call.");
            }
            return BlockMirrorTextToBlocks.create_block("graduates_get", null,
                {"PROPERTY": node.args[0].s.v},
                {}, {}, {"@INDEX": node.args[1].s.v,
                    "@INDEX_VALUE": node.args[2].s.v});
        }
    },
};

BlockMirrorBlockEditor.EXTRA_TOOLS['Data - graduates'] = '<category name="Data - Graduates" colour="45">'+
                    '<block type="graduates_get"><mutation index="(None)" index_value=""></mutation></block>'+
                '</category>';