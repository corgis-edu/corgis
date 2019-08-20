

var video_games_INDEXES = [
    ["(None)", "(None)"],
    
    ["Release.Console", "Release.Console"] ,
    ["Release.Year", "Release.Year"] 
];

var video_games_INDEX_VALUES = {
    "(None)": [],
    
    "Release.Console": [
        
        ["Nintendo DS", "Nintendo DS"] ,
        ["Nintendo Wii", "Nintendo Wii"] ,
        ["PlayStation 3", "PlayStation 3"] ,
        ["Sony PSP", "Sony PSP"] ,
        ["X360", "X360"] 
    ],
    "Release.Year": [
        
        ["2004", "2004"] ,
        ["2005", "2005"] ,
        ["2006", "2006"] ,
        ["2007", "2007"] ,
        ["2008", "2008"] 
    ]
}

var video_games_PROPERTIES = [
    ["Title", "Title"] ,
    ["Features.Handheld?", "Features.Handheld?"] ,
    ["Features.Max Players", "Features.Max Players"] ,
    ["Features.Multiplatform?", "Features.Multiplatform?"] ,
    ["Features.Online?", "Features.Online?"] ,
    ["Metadata.Genres", "Metadata.Genres"] ,
    ["Metadata.Licensed?", "Metadata.Licensed?"] ,
    ["Metadata.Publishers", "Metadata.Publishers"] ,
    ["Metadata.Sequel?", "Metadata.Sequel?"] ,
    ["Metrics.Review Score", "Metrics.Review Score"] ,
    ["Metrics.Sales", "Metrics.Sales"] ,
    ["Metrics.Used Price", "Metrics.Used Price"] ,
    ["Release.Console", "Release.Console"] ,
    ["Release.Rating", "Release.Rating"] ,
    ["Release.Re-release?", "Release.Re-release?"] ,
    ["Release.Year", "Release.Year"] ,
    ["Length.All PlayStyles.Average", "Length.All PlayStyles.Average"] ,
    ["Length.All PlayStyles.Leisure", "Length.All PlayStyles.Leisure"] ,
    ["Length.All PlayStyles.Median", "Length.All PlayStyles.Median"] ,
    ["Length.All PlayStyles.Polled", "Length.All PlayStyles.Polled"] ,
    ["Length.All PlayStyles.Rushed", "Length.All PlayStyles.Rushed"] ,
    ["Length.Completionists.Average", "Length.Completionists.Average"] ,
    ["Length.Completionists.Leisure", "Length.Completionists.Leisure"] ,
    ["Length.Completionists.Median", "Length.Completionists.Median"] ,
    ["Length.Completionists.Polled", "Length.Completionists.Polled"] ,
    ["Length.Completionists.Rushed", "Length.Completionists.Rushed"] ,
    ["Length.Main + Extras.Average", "Length.Main + Extras.Average"] ,
    ["Length.Main + Extras.Leisure", "Length.Main + Extras.Leisure"] ,
    ["Length.Main + Extras.Median", "Length.Main + Extras.Median"] ,
    ["Length.Main + Extras.Polled", "Length.Main + Extras.Polled"] ,
    ["Length.Main + Extras.Rushed", "Length.Main + Extras.Rushed"] ,
    ["Length.Main Story.Average", "Length.Main Story.Average"] ,
    ["Length.Main Story.Leisure", "Length.Main Story.Leisure"] ,
    ["Length.Main Story.Median", "Length.Main Story.Median"] ,
    ["Length.Main Story.Polled", "Length.Main Story.Polled"] ,
    ["Length.Main Story.Rushed", "Length.Main Story.Rushed"] 
]

Blockly.Blocks['video_games_get'] = {
  init: function() {
    this.setColour(45);
    this.appendDummyInput('MAIN')
        .appendField("video_games.get")
        .appendField(new Blockly.FieldDropdown(video_games_PROPERTIES), "PROPERTY");
    this.appendDummyInput('SECOND')
        .appendField("filter")
        .appendField(new Blockly.FieldDropdown(video_games_INDEXES, function(option) {
                        this.getSourceBlock().updateShape_(option);
                    }), "INDEX")
    this.updateShape_("(None)");
    this.setInputsInline(false);
    this.setOutput(true, "Array");
    this.setTooltip('Returns a list of video games data.');
  },
  mutationToDom: function() {
    var container = document.createElement('mutation');
    container.setAttribute('index', this.getFieldValue('INDEX'));
    container.setAttribute('index_value', this.getFieldValue('INDEX_VALUE'));
    container.setAttribute('module', "video_games")
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
        inputGroup.appendField(new Blockly.FieldDropdown(video_games_INDEX_VALUES[index]), 'INDEX_VALUE')
        if (index_value != undefined) {
            this.setFieldValue(index_value, 'INDEX_VALUE');
        } else {
            this.setFieldValue(video_games_INDEX_VALUES[index][0][0], 'INDEX_VALUE');
        }
    }    
  }
};
Blockly.Python['video_games_get'] = function(block) {
    Blockly.Python.definitions_['import_video_games'] = 'import video_games';
    var propertyValue = block.getFieldValue('PROPERTY') || '';
    var property = Blockly.Python.quote_(propertyValue);
    var index_unquoted = block.getFieldValue('INDEX');
    var index = Blockly.Python.quote_(index_unquoted || '');
    var index_value = "''";
    if (index_unquoted !== '(None)') {
        var iv = block.getFieldValue('INDEX_VALUE') || "";
        index_value = Blockly.Python.quote_(iv);
    }
    var code = 'video_games.get('+property+',' +index+','+index_value+')';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

BlockMirrorTextToBlocks.prototype.MODULE_FUNCTION_SIGNATURES['video_games'] = {
    "get": {
        custom: function(node, parent) {
            if (!node.args || node.args.length < 3 ||
                !node.args[0] || !node.args[1] || !node.args[2] ||
                node.args[0]._astname !== "Str" || node.args[1]._astname !== "Str" || node.args[2]._astname !== "Str"
            ) {
                throw new Error("Not the right function call.");
            }
            return BlockMirrorTextToBlocks.create_block("video_games_get", null,
                {"PROPERTY": node.args[0].s.v},
                {}, {}, {"@INDEX": node.args[1].s.v,
                    "@INDEX_VALUE": node.args[2].s.v});
        }
    },
};

BlockMirrorBlockEditor.EXTRA_TOOLS['Data - video games'] = '<category name="Data - Video Games" colour="45">'+
                    '<block type="video_games_get"><mutation index="(None)" index_value=""></mutation></block>'+
                '</category>';