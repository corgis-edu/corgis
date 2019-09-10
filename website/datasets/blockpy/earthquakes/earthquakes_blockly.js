

var earthquakes_INDEXES = [
    ["(None)", "(None)"],
    
    ["location.name", "location.name"] ,
    ["time.month", "time.month"] 
];

var earthquakes_INDEX_VALUES = {
    "(None)": [],
    
    "location.name": [
        
        ["Afghanistan", "Afghanistan"] ,
        ["Alaska", "Alaska"] ,
        ["Anguilla", "Anguilla"] ,
        ["Argentina", "Argentina"] ,
        ["Arizona", "Arizona"] ,
        ["Arkansas", "Arkansas"] ,
        ["Ascension Island region", "Ascension Island region"] ,
        ["Australia", "Australia"] ,
        ["Azerbaijan", "Azerbaijan"] ,
        ["Azores-Cape St. Vincent Ridge", "Azores-Cape St. Vincent Ridge"] ,
        ["Bolivia", "Bolivia"] ,
        ["British Virgin Islands", "British Virgin Islands"] ,
        ["Burma", "Burma"] ,
        ["California", "California"] ,
        ["Canada", "Canada"] ,
        ["Central East Pacific Rise", "Central East Pacific Rise"] ,
        ["Central Mid-Atlantic Ridge", "Central Mid-Atlantic Ridge"] ,
        ["Chagos Archipelago region", "Chagos Archipelago region"] ,
        ["Chile", "Chile"] ,
        ["China", "China"] ,
        ["Christmas Island", "Christmas Island"] ,
        ["Colombia", "Colombia"] ,
        ["Colorado", "Colorado"] ,
        ["Costa Rica", "Costa Rica"] ,
        ["Cyprus", "Cyprus"] ,
        ["Dominican Republic", "Dominican Republic"] ,
        ["East of the Kuril Islands", "East of the Kuril Islands"] ,
        ["East Timor", "East Timor"] ,
        ["Ecuador", "Ecuador"] ,
        ["El Salvador", "El Salvador"] ,
        ["Fiji", "Fiji"] ,
        ["Fiji region", "Fiji region"] ,
        ["Georgia", "Georgia"] ,
        ["Greece", "Greece"] ,
        ["Greenland Sea", "Greenland Sea"] ,
        ["Guam", "Guam"] ,
        ["Guatemala", "Guatemala"] ,
        ["Hawaii", "Hawaii"] ,
        ["Idaho", "Idaho"] ,
        ["Illinois", "Illinois"] ,
        ["India", "India"] ,
        ["Indonesia", "Indonesia"] ,
        ["Iran", "Iran"] ,
        ["Italy", "Italy"] ,
        ["Japan", "Japan"] ,
        ["Japan region", "Japan region"] ,
        ["Kansas", "Kansas"] ,
        ["Kiribati region", "Kiribati region"] ,
        ["Kuril Islands", "Kuril Islands"] ,
        ["Kyrgyzstan", "Kyrgyzstan"] ,
        ["Martinique", "Martinique"] ,
        ["Mexico", "Mexico"] ,
        ["Mid-Indian Ridge", "Mid-Indian Ridge"] ,
        ["Missouri", "Missouri"] ,
        ["Montana", "Montana"] ,
        ["Nevada", "Nevada"] ,
        ["New Caledonia", "New Caledonia"] ,
        ["New Hampshire", "New Hampshire"] ,
        ["New Jersey", "New Jersey"] ,
        ["New York", "New York"] ,
        ["New Zealand", "New Zealand"] ,
        ["Nicaragua", "Nicaragua"] ,
        ["North Carolina", "North Carolina"] ,
        ["North of Ascension Island", "North of Ascension Island"] ,
        ["North of Svalbard", "North of Svalbard"] ,
        ["Northern California", "Northern California"] ,
        ["Northern Mariana Islands", "Northern Mariana Islands"] ,
        ["Northern Mid-Atlantic Ridge", "Northern Mid-Atlantic Ridge"] ,
        ["Northwest of Australia", "Northwest of Australia"] ,
        ["Off the coast of Oregon", "Off the coast of Oregon"] ,
        ["Ohio", "Ohio"] ,
        ["Oklahoma", "Oklahoma"] ,
        ["Oregon", "Oregon"] ,
        ["Pacific-Antarctic Ridge", "Pacific-Antarctic Ridge"] ,
        ["Pakistan", "Pakistan"] ,
        ["Palau", "Palau"] ,
        ["Panama", "Panama"] ,
        ["Papua New Guinea", "Papua New Guinea"] ,
        ["Pennsylvania", "Pennsylvania"] ,
        ["Peru", "Peru"] ,
        ["Philippines", "Philippines"] ,
        ["Poland", "Poland"] ,
        ["Portugal", "Portugal"] ,
        ["Puerto Rico", "Puerto Rico"] ,
        ["Reykjanes Ridge", "Reykjanes Ridge"] ,
        ["Russia", "Russia"] ,
        ["Solomon Islands", "Solomon Islands"] ,
        ["South Georgia and the South Sandwich Islands", "South Georgia and the South Sandwich Islands"] ,
        ["South Georgia Island region", "South Georgia Island region"] ,
        ["South Indian Ocean", "South Indian Ocean"] ,
        ["South of Africa", "South of Africa"] ,
        ["South of Panama", "South of Panama"] ,
        ["South of the Fiji Islands", "South of the Fiji Islands"] ,
        ["South Sandwich Islands", "South Sandwich Islands"] ,
        ["Southern East Pacific Rise", "Southern East Pacific Rise"] ,
        ["Southern Mid-Atlantic Ridge", "Southern Mid-Atlantic Ridge"] ,
        ["Southwest Indian Ridge", "Southwest Indian Ridge"] ,
        ["Syria", "Syria"] ,
        ["Taiwan", "Taiwan"] ,
        ["Tajikistan", "Tajikistan"] ,
        ["Tennessee", "Tennessee"] ,
        ["Texas", "Texas"] ,
        ["Tonga", "Tonga"] ,
        ["Turkey", "Turkey"] ,
        ["U.S. Virgin Islands", "U.S. Virgin Islands"] ,
        ["Ukraine", "Ukraine"] ,
        ["Utah", "Utah"] ,
        ["Uzbekistan", "Uzbekistan"] ,
        ["Vanuatu", "Vanuatu"] ,
        ["Vanuatu region", "Vanuatu region"] ,
        ["Venezuela", "Venezuela"] ,
        ["Virgin Islands region", "Virgin Islands region"] ,
        ["Virginia", "Virginia"] ,
        ["Washington", "Washington"] ,
        ["West Virginia", "West Virginia"] ,
        ["Western Indian-Antarctic Ridge", "Western Indian-Antarctic Ridge"] ,
        ["Western Xizang", "Western Xizang"] ,
        ["Wyoming", "Wyoming"] 
    ],
    "time.month": [
        
        ["7", "7"] ,
        ["8", "8"] 
    ]
}

var earthquakes_PROPERTIES = [
    ["id", "id"] ,
    ["impact.gap", "impact.gap"] ,
    ["impact.magnitude", "impact.magnitude"] ,
    ["impact.significance", "impact.significance"] ,
    ["location.depth", "location.depth"] ,
    ["location.distance", "location.distance"] ,
    ["location.full", "location.full"] ,
    ["location.latitude", "location.latitude"] ,
    ["location.longitude", "location.longitude"] ,
    ["location.name", "location.name"] ,
    ["time.day", "time.day"] ,
    ["time.epoch", "time.epoch"] ,
    ["time.full", "time.full"] ,
    ["time.hour", "time.hour"] ,
    ["time.minute", "time.minute"] ,
    ["time.month", "time.month"] ,
    ["time.second", "time.second"] ,
    ["time.year", "time.year"] 
]

Blockly.Blocks['earthquakes_get'] = {
  init: function() {
    this.setColour(45);
    this.appendDummyInput('MAIN')
        .appendField("earthquakes.get")
        .appendField(new Blockly.FieldDropdown(earthquakes_PROPERTIES), "PROPERTY");
    this.appendDummyInput('SECOND')
        .appendField("filter")
        .appendField(new Blockly.FieldDropdown(earthquakes_INDEXES, function(option) {
                        this.getSourceBlock().updateShape_(option);
                    }), "INDEX")
    this.updateShape_("(None)");
    this.setInputsInline(false);
    this.setOutput(true, "Array");
    this.setTooltip('Returns a list of earthquakes data.');
  },
  mutationToDom: function() {
    var container = document.createElement('mutation');
    container.setAttribute('index', this.getFieldValue('INDEX'));
    container.setAttribute('index_value', this.getFieldValue('INDEX_VALUE'));
    container.setAttribute('module', "earthquakes")
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
        inputGroup.appendField(new Blockly.FieldDropdown(earthquakes_INDEX_VALUES[index]), 'INDEX_VALUE')
        if (index_value != undefined) {
            this.setFieldValue(index_value, 'INDEX_VALUE');
        } else {
            this.setFieldValue(earthquakes_INDEX_VALUES[index][0][0], 'INDEX_VALUE');
        }
    }    
  }
};
Blockly.Python['earthquakes_get'] = function(block) {
    Blockly.Python.definitions_['import_earthquakes'] = 'import earthquakes';
    var propertyValue = block.getFieldValue('PROPERTY') || '';
    var property = Blockly.Python.quote_(propertyValue);
    var index_unquoted = block.getFieldValue('INDEX');
    var index = Blockly.Python.quote_(index_unquoted || '');
    var index_value = "''";
    if (index_unquoted !== '(None)') {
        var iv = block.getFieldValue('INDEX_VALUE') || "";
        index_value = Blockly.Python.quote_(iv);
    }
    var code = 'earthquakes.get('+property+',' +index+','+index_value+')';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

BlockMirrorTextToBlocks.prototype.MODULE_FUNCTION_SIGNATURES['earthquakes'] = {
    "get": {
        custom: function(node, parent) {
            if (!node.args || node.args.length < 3 ||
                !node.args[0] || !node.args[1] || !node.args[2] ||
                node.args[0]._astname !== "Str" || node.args[1]._astname !== "Str" || node.args[2]._astname !== "Str"
            ) {
                throw new Error("Not the right function call.");
            }
            return BlockMirrorTextToBlocks.create_block("earthquakes_get", null,
                {"PROPERTY": node.args[0].s.v},
                {}, {}, {"@INDEX": node.args[1].s.v,
                    "@INDEX_VALUE": node.args[2].s.v});
        }
    },
};

BlockMirrorBlockEditor.EXTRA_TOOLS['Data - earthquakes'] = '<category name="Data - Earthquakes" colour="45">'+
                    '<block type="earthquakes_get"><mutation index="(None)" index_value=""></mutation></block>'+
                '</category>';