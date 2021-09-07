

var aids_INDEXES = [
    ["(None)", "(None)"],
    
    ["Country", "Country"] ,
    ["Year", "Year"] 
];

var aids_INDEX_VALUES = {
    "(None)": [],
    
    "Country": [
        
        ["Afghanistan", "Afghanistan"] ,
        ["Algeria", "Algeria"] ,
        ["Angola", "Angola"] ,
        ["Argentina", "Argentina"] ,
        ["Armenia", "Armenia"] ,
        ["Azerbaijan", "Azerbaijan"] ,
        ["Benin", "Benin"] ,
        ["Bolivia (Plurinational State of)", "Bolivia (Plurinational State of)"] ,
        ["Botswana", "Botswana"] ,
        ["Burkina Faso", "Burkina Faso"] ,
        ["Burundi", "Burundi"] ,
        ["Cambodia", "Cambodia"] ,
        ["Cameroon", "Cameroon"] ,
        ["Chad", "Chad"] ,
        ["Colombia", "Colombia"] ,
        ["Congo", "Congo"] ,
        ["Costa Rica", "Costa Rica"] ,
        ["Cuba", "Cuba"] ,
        ["C\u00f4te d'Ivoire", "C\u00f4te d'Ivoire"] ,
        ["Democratic Republic of the Congo", "Democratic Republic of the Congo"] ,
        ["Djibouti", "Djibouti"] ,
        ["Dominican Republic", "Dominican Republic"] ,
        ["Ecuador", "Ecuador"] ,
        ["Egypt", "Egypt"] ,
        ["El Salvador", "El Salvador"] ,
        ["Eritrea", "Eritrea"] ,
        ["Eswatini", "Eswatini"] ,
        ["Ethiopia", "Ethiopia"] ,
        ["Gabon", "Gabon"] ,
        ["Gambia", "Gambia"] ,
        ["Georgia", "Georgia"] ,
        ["Ghana", "Ghana"] ,
        ["Guatemala", "Guatemala"] ,
        ["Guinea", "Guinea"] ,
        ["Guinea-Bissau", "Guinea-Bissau"] ,
        ["Guyana", "Guyana"] ,
        ["Haiti", "Haiti"] ,
        ["Honduras", "Honduras"] ,
        ["Indonesia", "Indonesia"] ,
        ["Iran (Islamic Republic of)", "Iran (Islamic Republic of)"] ,
        ["Jamaica", "Jamaica"] ,
        ["Kazakhstan", "Kazakhstan"] ,
        ["Kenya", "Kenya"] ,
        ["Kyrgyzstan", "Kyrgyzstan"] ,
        ["Lao People's Democratic Republic", "Lao People's Democratic Republic"] ,
        ["Lesotho", "Lesotho"] ,
        ["Liberia", "Liberia"] ,
        ["Libya", "Libya"] ,
        ["Madagascar", "Madagascar"] ,
        ["Malawi", "Malawi"] ,
        ["Malaysia", "Malaysia"] ,
        ["Mali", "Mali"] ,
        ["Mauritius", "Mauritius"] ,
        ["Morocco", "Morocco"] ,
        ["Mozambique", "Mozambique"] ,
        ["Namibia", "Namibia"] ,
        ["Nepal", "Nepal"] ,
        ["Nicaragua", "Nicaragua"] ,
        ["Niger", "Niger"] ,
        ["Nigeria", "Nigeria"] ,
        ["Pakistan", "Pakistan"] ,
        ["Paraguay", "Paraguay"] ,
        ["Peru", "Peru"] ,
        ["Philippines", "Philippines"] ,
        ["Portugal", "Portugal"] ,
        ["Republic of Moldova", "Republic of Moldova"] ,
        ["Rwanda", "Rwanda"] ,
        ["Saudi Arabia", "Saudi Arabia"] ,
        ["Senegal", "Senegal"] ,
        ["Sierra Leone", "Sierra Leone"] ,
        ["Somalia", "Somalia"] ,
        ["South Africa", "South Africa"] ,
        ["South Sudan", "South Sudan"] ,
        ["Sudan", "Sudan"] ,
        ["Suriname", "Suriname"] ,
        ["Tajikistan", "Tajikistan"] ,
        ["Thailand", "Thailand"] ,
        ["Togo", "Togo"] ,
        ["Tunisia", "Tunisia"] ,
        ["Uganda", "Uganda"] ,
        ["Ukraine", "Ukraine"] ,
        ["United Republic of Tanzania", "United Republic of Tanzania"] ,
        ["Uruguay", "Uruguay"] ,
        ["Uzbekistan", "Uzbekistan"] ,
        ["Venezuela (Bolivarian Republic of)", "Venezuela (Bolivarian Republic of)"] ,
        ["Viet Nam", "Viet Nam"] ,
        ["Yemen", "Yemen"] ,
        ["Zambia", "Zambia"] ,
        ["Zimbabwe", "Zimbabwe"] 
    ],
    "Year": [
        
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
        ["2015", "2015"] ,
        ["2016", "2016"] ,
        ["2017", "2017"] ,
        ["2018", "2018"] ,
        ["2019", "2019"] ,
        ["2020", "2020"] 
    ]
}

var aids_PROPERTIES = [
    ["Country", "Country"] ,
    ["Year", "Year"] ,
    ["Data.AIDS-Related Deaths.AIDS Orphans", "Data.AIDS-Related Deaths.AIDS Orphans"] ,
    ["Data.AIDS-Related Deaths.Adults", "Data.AIDS-Related Deaths.Adults"] ,
    ["Data.AIDS-Related Deaths.All Ages", "Data.AIDS-Related Deaths.All Ages"] ,
    ["Data.AIDS-Related Deaths.Children", "Data.AIDS-Related Deaths.Children"] ,
    ["Data.AIDS-Related Deaths.Female Adults", "Data.AIDS-Related Deaths.Female Adults"] ,
    ["Data.AIDS-Related Deaths.Male Adults", "Data.AIDS-Related Deaths.Male Adults"] ,
    ["Data.HIV Prevalence.Adults", "Data.HIV Prevalence.Adults"] ,
    ["Data.HIV Prevalence.Young Men", "Data.HIV Prevalence.Young Men"] ,
    ["Data.HIV Prevalence.Young Women", "Data.HIV Prevalence.Young Women"] ,
    ["Data.New HIV Infections.Young Adults", "Data.New HIV Infections.Young Adults"] ,
    ["Data.New HIV Infections.Male Adults", "Data.New HIV Infections.Male Adults"] ,
    ["Data.New HIV Infections.Female Adults", "Data.New HIV Infections.Female Adults"] ,
    ["Data.New HIV Infections.Children", "Data.New HIV Infections.Children"] ,
    ["Data.New HIV Infections.All Ages", "Data.New HIV Infections.All Ages"] ,
    ["Data.New HIV Infections.Adults", "Data.New HIV Infections.Adults"] ,
    ["Data.New HIV Infections.Incidence Rate Among Adults", "Data.New HIV Infections.Incidence Rate Among Adults"] ,
    ["Data.People Living with HIV.Total", "Data.People Living with HIV.Total"] ,
    ["Data.People Living with HIV.Male Adults", "Data.People Living with HIV.Male Adults"] ,
    ["Data.People Living with HIV.Female Adults", "Data.People Living with HIV.Female Adults"] ,
    ["Data.People Living with HIV.Children", "Data.People Living with HIV.Children"] ,
    ["Data.People Living with HIV.Adults", "Data.People Living with HIV.Adults"] 
]

Blockly.Blocks['aids_get'] = {
  init: function() {
    this.setColour(45);
    this.appendDummyInput('MAIN')
        .appendField("aids.get")
        .appendField(new Blockly.FieldDropdown(aids_PROPERTIES), "PROPERTY");
    this.appendDummyInput('SECOND')
        .appendField("filter")
        .appendField(new Blockly.FieldDropdown(aids_INDEXES, function(option) {
                        this.getSourceBlock().updateShape_(option);
                    }), "INDEX")
    this.updateShape_("(None)");
    this.setInputsInline(false);
    this.setOutput(true, "Array");
    this.setTooltip('Returns a list of aids data.');
  },
  mutationToDom: function() {
    var container = document.createElement('mutation');
    container.setAttribute('index', this.getFieldValue('INDEX'));
    container.setAttribute('index_value', this.getFieldValue('INDEX_VALUE'));
    container.setAttribute('module', "aids")
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
            inputGroup.appendField(new Blockly.FieldDropdown(aids_INDEX_VALUES[index]), 'INDEX_VALUE')
            if (index_value != undefined) {
                this.setFieldValue(index_value, 'INDEX_VALUE');
            } else {
                this.setFieldValue(aids_INDEX_VALUES[index][0][0], 'INDEX_VALUE');
            }
        }
    } catch (e) {
        inputGroup.appendField(new Blockly.FieldLabel("Reset to fix the blocks"));
        console.error(e);
    }
  }
};
Blockly.Python['aids_get'] = function(block) {
    Blockly.Python.definitions_['import_aids'] = 'import aids';
    var propertyValue = block.getFieldValue('PROPERTY') || '';
    var property = Blockly.Python.quote_(propertyValue);
    var index_unquoted = block.getFieldValue('INDEX');
    var index = Blockly.Python.quote_(index_unquoted || '');
    var index_value = "''";
    if (index_unquoted !== '(None)') {
        var iv = block.getFieldValue('INDEX_VALUE') || "";
        index_value = Blockly.Python.quote_(iv);
    }
    var code = 'aids.get('+property+',' +index+','+index_value+')';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

BlockMirrorTextToBlocks.prototype.MODULE_FUNCTION_SIGNATURES['aids'] = {
    "get": {
        custom: function(node, parent) {
            if (!node.args || node.args.length < 3 ||
                !node.args[0] || !node.args[1] || !node.args[2] ||
                node.args[0]._astname !== "Str" || node.args[1]._astname !== "Str" || node.args[2]._astname !== "Str"
            ) {
                throw new Error("Not the right function call.");
            }
            return BlockMirrorTextToBlocks.create_block("aids_get", null,
                {"PROPERTY": node.args[0].s.v},
                {}, {}, {"@INDEX": node.args[1].s.v,
                    "@INDEX_VALUE": node.args[2].s.v});
        }
    },
};

BlockMirrorBlockEditor.EXTRA_TOOLS['Data - aids'] = '<category name="Data - Aids" colour="45">'+
                    '<block type="aids_get"><mutation index="(None)" index_value=""></mutation></block>'+
                '</category>';