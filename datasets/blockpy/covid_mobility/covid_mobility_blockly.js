

var covid_mobility_INDEXES = [
    ["(None)", "(None)"],
    
    ["Country", "Country"] ,
    ["Days since outbreak", "Days since outbreak"] 
];

var covid_mobility_INDEX_VALUES = {
    "(None)": [],
    
    "Country": [
        
        ["Afghanistan", "Afghanistan"] ,
        ["Angola", "Angola"] ,
        ["Antigua and Barbuda", "Antigua and Barbuda"] ,
        ["Argentina", "Argentina"] ,
        ["Aruba", "Aruba"] ,
        ["Australia", "Australia"] ,
        ["Austria", "Austria"] ,
        ["Bahamas", "Bahamas"] ,
        ["Bahrain", "Bahrain"] ,
        ["Bangladesh", "Bangladesh"] ,
        ["Barbados", "Barbados"] ,
        ["Belarus", "Belarus"] ,
        ["Belgium", "Belgium"] ,
        ["Belize", "Belize"] ,
        ["Benin", "Benin"] ,
        ["Bolivia", "Bolivia"] ,
        ["Bosnia and Herzegovina", "Bosnia and Herzegovina"] ,
        ["Botswana", "Botswana"] ,
        ["Brazil", "Brazil"] ,
        ["Bulgaria", "Bulgaria"] ,
        ["Burkina Faso", "Burkina Faso"] ,
        ["Cambodia", "Cambodia"] ,
        ["Cameroon", "Cameroon"] ,
        ["Canada", "Canada"] ,
        ["Cape Verde", "Cape Verde"] ,
        ["Chile", "Chile"] ,
        ["Colombia", "Colombia"] ,
        ["Costa Rica", "Costa Rica"] ,
        ["Cote d'Ivoire", "Cote d'Ivoire"] ,
        ["Croatia", "Croatia"] ,
        ["Czech Republic", "Czech Republic"] ,
        ["Denmark", "Denmark"] ,
        ["Dominican Republic", "Dominican Republic"] ,
        ["Ecuador", "Ecuador"] ,
        ["Egypt", "Egypt"] ,
        ["El Salvador", "El Salvador"] ,
        ["Estonia", "Estonia"] ,
        ["Fiji", "Fiji"] ,
        ["Finland", "Finland"] ,
        ["France", "France"] ,
        ["Gabon", "Gabon"] ,
        ["Georgia", "Georgia"] ,
        ["Germany", "Germany"] ,
        ["Ghana", "Ghana"] ,
        ["Greece", "Greece"] ,
        ["Guatemala", "Guatemala"] ,
        ["Guinea-Bissau", "Guinea-Bissau"] ,
        ["Haiti", "Haiti"] ,
        ["Honduras", "Honduras"] ,
        ["Hong Kong", "Hong Kong"] ,
        ["Hungary", "Hungary"] ,
        ["India", "India"] ,
        ["Indonesia", "Indonesia"] ,
        ["Iraq", "Iraq"] ,
        ["Ireland", "Ireland"] ,
        ["Israel", "Israel"] ,
        ["Italy", "Italy"] ,
        ["Jamaica", "Jamaica"] ,
        ["Japan", "Japan"] ,
        ["Jordan", "Jordan"] ,
        ["Kazakhstan", "Kazakhstan"] ,
        ["Kenya", "Kenya"] ,
        ["Kuwait", "Kuwait"] ,
        ["Kyrgyzstan", "Kyrgyzstan"] ,
        ["Laos", "Laos"] ,
        ["Latvia", "Latvia"] ,
        ["Lebanon", "Lebanon"] ,
        ["Libya", "Libya"] ,
        ["Liechtenstein", "Liechtenstein"] ,
        ["Lithuania", "Lithuania"] ,
        ["Luxembourg", "Luxembourg"] ,
        ["Macedonia", "Macedonia"] ,
        ["Malaysia", "Malaysia"] ,
        ["Mali", "Mali"] ,
        ["Malta", "Malta"] ,
        ["Mauritius", "Mauritius"] ,
        ["Mexico", "Mexico"] ,
        ["Moldova", "Moldova"] ,
        ["Mongolia", "Mongolia"] ,
        ["Mozambique", "Mozambique"] ,
        ["Myanmar", "Myanmar"] ,
        ["Namibia", "Namibia"] ,
        ["Nepal", "Nepal"] ,
        ["Netherlands", "Netherlands"] ,
        ["New Zealand", "New Zealand"] ,
        ["Nicaragua", "Nicaragua"] ,
        ["Niger", "Niger"] ,
        ["Nigeria", "Nigeria"] ,
        ["Norway", "Norway"] ,
        ["Oman", "Oman"] ,
        ["Pakistan", "Pakistan"] ,
        ["Panama", "Panama"] ,
        ["Papua New Guinea", "Papua New Guinea"] ,
        ["Paraguay", "Paraguay"] ,
        ["Peru", "Peru"] ,
        ["Philippines", "Philippines"] ,
        ["Poland", "Poland"] ,
        ["Portugal", "Portugal"] ,
        ["Puerto Rico", "Puerto Rico"] ,
        ["Qatar", "Qatar"] ,
        ["Reunion", "Reunion"] ,
        ["Romania", "Romania"] ,
        ["Rwanda", "Rwanda"] ,
        ["Saudi Arabia", "Saudi Arabia"] ,
        ["Senegal", "Senegal"] ,
        ["Serbia", "Serbia"] ,
        ["Singapore", "Singapore"] ,
        ["Slovakia", "Slovakia"] ,
        ["Slovenia", "Slovenia"] ,
        ["South Africa", "South Africa"] ,
        ["South Korea", "South Korea"] ,
        ["Spain", "Spain"] ,
        ["Sri Lanka", "Sri Lanka"] ,
        ["Sweden", "Sweden"] ,
        ["Switzerland", "Switzerland"] ,
        ["Taiwan", "Taiwan"] ,
        ["Tajikistan", "Tajikistan"] ,
        ["Tanzania", "Tanzania"] ,
        ["Thailand", "Thailand"] ,
        ["Togo", "Togo"] ,
        ["Trinidad and Tobago", "Trinidad and Tobago"] ,
        ["Turkey", "Turkey"] ,
        ["Uganda", "Uganda"] ,
        ["United Arab Emirates", "United Arab Emirates"] ,
        ["United Kingdom", "United Kingdom"] ,
        ["United States", "United States"] ,
        ["Uruguay", "Uruguay"] ,
        ["Venezuela", "Venezuela"] ,
        ["Vietnam", "Vietnam"] ,
        ["Yemen", "Yemen"] ,
        ["Zambia", "Zambia"] ,
        ["Zimbabwe", "Zimbabwe"] 
    ],
    "Days since outbreak": [
        
        ["47", "47"] ,
        ["48", "48"] ,
        ["49", "49"] ,
        ["50", "50"] ,
        ["51", "51"] ,
        ["52", "52"] ,
        ["53", "53"] ,
        ["54", "54"] ,
        ["55", "55"] ,
        ["56", "56"] ,
        ["57", "57"] ,
        ["58", "58"] ,
        ["59", "59"] ,
        ["60", "60"] ,
        ["61", "61"] ,
        ["62", "62"] ,
        ["63", "63"] ,
        ["64", "64"] ,
        ["65", "65"] ,
        ["66", "66"] ,
        ["67", "67"] ,
        ["68", "68"] ,
        ["69", "69"] ,
        ["70", "70"] ,
        ["71", "71"] ,
        ["72", "72"] ,
        ["73", "73"] ,
        ["74", "74"] ,
        ["75", "75"] ,
        ["76", "76"] ,
        ["77", "77"] ,
        ["78", "78"] ,
        ["79", "79"] ,
        ["80", "80"] ,
        ["81", "81"] ,
        ["82", "82"] ,
        ["83", "83"] ,
        ["84", "84"] ,
        ["85", "85"] ,
        ["86", "86"] ,
        ["87", "87"] ,
        ["88", "88"] ,
        ["89", "89"] ,
        ["90", "90"] ,
        ["91", "91"] ,
        ["92", "92"] ,
        ["93", "93"] ,
        ["94", "94"] ,
        ["95", "95"] ,
        ["96", "96"] ,
        ["97", "97"] ,
        ["98", "98"] ,
        ["99", "99"] ,
        ["100", "100"] ,
        ["101", "101"] ,
        ["102", "102"] ,
        ["103", "103"] ,
        ["104", "104"] ,
        ["105", "105"] ,
        ["106", "106"] ,
        ["107", "107"] ,
        ["108", "108"] ,
        ["109", "109"] ,
        ["110", "110"] ,
        ["111", "111"] ,
        ["112", "112"] ,
        ["113", "113"] ,
        ["114", "114"] ,
        ["115", "115"] ,
        ["116", "116"] ,
        ["117", "117"] ,
        ["118", "118"] ,
        ["119", "119"] ,
        ["120", "120"] ,
        ["121", "121"] ,
        ["122", "122"] ,
        ["123", "123"] ,
        ["124", "124"] ,
        ["125", "125"] ,
        ["126", "126"] ,
        ["127", "127"] ,
        ["128", "128"] ,
        ["129", "129"] ,
        ["130", "130"] ,
        ["131", "131"] ,
        ["132", "132"] ,
        ["133", "133"] ,
        ["134", "134"] ,
        ["135", "135"] ,
        ["136", "136"] ,
        ["137", "137"] ,
        ["138", "138"] ,
        ["139", "139"] ,
        ["140", "140"] ,
        ["141", "141"] ,
        ["142", "142"] ,
        ["143", "143"] ,
        ["144", "144"] ,
        ["145", "145"] ,
        ["146", "146"] ,
        ["147", "147"] ,
        ["148", "148"] ,
        ["149", "149"] ,
        ["150", "150"] ,
        ["151", "151"] ,
        ["152", "152"] ,
        ["153", "153"] ,
        ["154", "154"] ,
        ["155", "155"] ,
        ["156", "156"] ,
        ["157", "157"] ,
        ["158", "158"] ,
        ["159", "159"] ,
        ["160", "160"] ,
        ["161", "161"] ,
        ["162", "162"] ,
        ["163", "163"] ,
        ["164", "164"] ,
        ["165", "165"] ,
        ["166", "166"] ,
        ["167", "167"] ,
        ["168", "168"] ,
        ["169", "169"] ,
        ["170", "170"] ,
        ["171", "171"] ,
        ["172", "172"] ,
        ["173", "173"] ,
        ["174", "174"] ,
        ["175", "175"] ,
        ["176", "176"] ,
        ["177", "177"] ,
        ["178", "178"] ,
        ["179", "179"] ,
        ["180", "180"] ,
        ["181", "181"] ,
        ["182", "182"] ,
        ["183", "183"] ,
        ["184", "184"] ,
        ["185", "185"] ,
        ["186", "186"] ,
        ["187", "187"] ,
        ["188", "188"] ,
        ["189", "189"] ,
        ["190", "190"] ,
        ["191", "191"] ,
        ["192", "192"] ,
        ["193", "193"] ,
        ["194", "194"] ,
        ["195", "195"] ,
        ["196", "196"] ,
        ["197", "197"] ,
        ["198", "198"] ,
        ["199", "199"] ,
        ["200", "200"] ,
        ["201", "201"] ,
        ["202", "202"] ,
        ["203", "203"] ,
        ["204", "204"] ,
        ["205", "205"] ,
        ["206", "206"] ,
        ["207", "207"] ,
        ["208", "208"] ,
        ["209", "209"] ,
        ["210", "210"] ,
        ["211", "211"] ,
        ["212", "212"] ,
        ["213", "213"] ,
        ["214", "214"] ,
        ["215", "215"] ,
        ["216", "216"] ,
        ["217", "217"] ,
        ["218", "218"] ,
        ["219", "219"] ,
        ["220", "220"] ,
        ["221", "221"] ,
        ["222", "222"] ,
        ["223", "223"] ,
        ["224", "224"] ,
        ["225", "225"] ,
        ["226", "226"] 
    ]
}

var covid_mobility_PROPERTIES = [
    ["Country", "Country"] ,
    ["Days since outbreak", "Days since outbreak"] ,
    ["Location.Retail", "Location.Retail"] ,
    ["Location.Grocery", "Location.Grocery"] ,
    ["Location.Parks", "Location.Parks"] ,
    ["Location.Public transport", "Location.Public transport"] ,
    ["Location.Workplace", "Location.Workplace"] ,
    ["Location.Residential", "Location.Residential"] 
]

Blockly.Blocks['covid_mobility_get'] = {
  init: function() {
    this.setColour(45);
    this.appendDummyInput('MAIN')
        .appendField("covid_mobility.get")
        .appendField(new Blockly.FieldDropdown(covid_mobility_PROPERTIES), "PROPERTY");
    this.appendDummyInput('SECOND')
        .appendField("filter")
        .appendField(new Blockly.FieldDropdown(covid_mobility_INDEXES, function(option) {
                        this.getSourceBlock().updateShape_(option);
                    }), "INDEX")
    this.updateShape_("(None)");
    this.setInputsInline(false);
    this.setOutput(true, "Array");
    this.setTooltip('Returns a list of covid mobility data.');
  },
  mutationToDom: function() {
    var container = document.createElement('mutation');
    container.setAttribute('index', this.getFieldValue('INDEX'));
    container.setAttribute('index_value', this.getFieldValue('INDEX_VALUE'));
    container.setAttribute('module', "covid_mobility")
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
            inputGroup.appendField(new Blockly.FieldDropdown(covid_mobility_INDEX_VALUES[index]), 'INDEX_VALUE')
            if (index_value != undefined) {
                this.setFieldValue(index_value, 'INDEX_VALUE');
            } else {
                this.setFieldValue(covid_mobility_INDEX_VALUES[index][0][0], 'INDEX_VALUE');
            }
        }
    } catch (e) {
        inputGroup.appendField(new Blockly.FieldLabel("Reset to fix the blocks"));
        console.error(e);
    }
  }
};
Blockly.Python['covid_mobility_get'] = function(block) {
    Blockly.Python.definitions_['import_covid_mobility'] = 'import covid_mobility';
    var propertyValue = block.getFieldValue('PROPERTY') || '';
    var property = Blockly.Python.quote_(propertyValue);
    var index_unquoted = block.getFieldValue('INDEX');
    var index = Blockly.Python.quote_(index_unquoted || '');
    var index_value = "''";
    if (index_unquoted !== '(None)') {
        var iv = block.getFieldValue('INDEX_VALUE') || "";
        index_value = Blockly.Python.quote_(iv);
    }
    var code = 'covid_mobility.get('+property+',' +index+','+index_value+')';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

BlockMirrorTextToBlocks.prototype.MODULE_FUNCTION_SIGNATURES['covid_mobility'] = {
    "get": {
        custom: function(node, parent) {
            if (!node.args || node.args.length < 3 ||
                !node.args[0] || !node.args[1] || !node.args[2] ||
                node.args[0]._astname !== "Str" || node.args[1]._astname !== "Str" || node.args[2]._astname !== "Str"
            ) {
                throw new Error("Not the right function call.");
            }
            return BlockMirrorTextToBlocks.create_block("covid_mobility_get", null,
                {"PROPERTY": node.args[0].s.v},
                {}, {}, {"@INDEX": node.args[1].s.v,
                    "@INDEX_VALUE": node.args[2].s.v});
        }
    },
};

BlockMirrorBlockEditor.EXTRA_TOOLS['Data - covid mobility'] = '<category name="Data - Covid Mobility" colour="45">'+
                    '<block type="covid_mobility_get"><mutation index="(None)" index_value=""></mutation></block>'+
                '</category>';