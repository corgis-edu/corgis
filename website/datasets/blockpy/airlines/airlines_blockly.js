

var airlines_INDEXES = [
    ["(None)", "(None)"],
    
    ["Airport.Code", "Airport.Code"] ,
    ["Time.Label", "Time.Label"] 
];

var airlines_INDEX_VALUES = {
    "(None)": [],
    
    "Airport.Code": [
        
        ["ATL", "ATL"] ,
        ["BOS", "BOS"] ,
        ["BWI", "BWI"] ,
        ["CLT", "CLT"] ,
        ["DCA", "DCA"] ,
        ["DEN", "DEN"] ,
        ["DFW", "DFW"] ,
        ["DTW", "DTW"] ,
        ["EWR", "EWR"] ,
        ["FLL", "FLL"] ,
        ["IAD", "IAD"] ,
        ["IAH", "IAH"] ,
        ["JFK", "JFK"] ,
        ["LAS", "LAS"] ,
        ["LAX", "LAX"] ,
        ["LGA", "LGA"] ,
        ["MCO", "MCO"] ,
        ["MDW", "MDW"] ,
        ["MIA", "MIA"] ,
        ["MSP", "MSP"] ,
        ["ORD", "ORD"] ,
        ["PDX", "PDX"] ,
        ["PHL", "PHL"] ,
        ["PHX", "PHX"] ,
        ["SAN", "SAN"] ,
        ["SEA", "SEA"] ,
        ["SFO", "SFO"] ,
        ["SLC", "SLC"] ,
        ["TPA", "TPA"] 
    ],
    "Time.Label": [
        
        ["2003/06", "2003/06"] ,
        ["2003/07", "2003/07"] ,
        ["2003/08", "2003/08"] ,
        ["2003/09", "2003/09"] ,
        ["2003/10", "2003/10"] ,
        ["2003/11", "2003/11"] ,
        ["2003/12", "2003/12"] ,
        ["2004/01", "2004/01"] ,
        ["2004/02", "2004/02"] ,
        ["2004/03", "2004/03"] ,
        ["2004/04", "2004/04"] ,
        ["2004/05", "2004/05"] ,
        ["2004/06", "2004/06"] ,
        ["2004/07", "2004/07"] ,
        ["2004/08", "2004/08"] ,
        ["2004/09", "2004/09"] ,
        ["2004/10", "2004/10"] ,
        ["2004/11", "2004/11"] ,
        ["2004/12", "2004/12"] ,
        ["2005/01", "2005/01"] ,
        ["2005/02", "2005/02"] ,
        ["2005/03", "2005/03"] ,
        ["2005/04", "2005/04"] ,
        ["2005/05", "2005/05"] ,
        ["2005/06", "2005/06"] ,
        ["2005/07", "2005/07"] ,
        ["2005/08", "2005/08"] ,
        ["2005/09", "2005/09"] ,
        ["2005/10", "2005/10"] ,
        ["2005/11", "2005/11"] ,
        ["2005/12", "2005/12"] ,
        ["2006/01", "2006/01"] ,
        ["2006/02", "2006/02"] ,
        ["2006/03", "2006/03"] ,
        ["2006/04", "2006/04"] ,
        ["2006/05", "2006/05"] ,
        ["2006/06", "2006/06"] ,
        ["2006/07", "2006/07"] ,
        ["2006/08", "2006/08"] ,
        ["2006/09", "2006/09"] ,
        ["2006/10", "2006/10"] ,
        ["2006/11", "2006/11"] ,
        ["2006/12", "2006/12"] ,
        ["2007/01", "2007/01"] ,
        ["2007/02", "2007/02"] ,
        ["2007/03", "2007/03"] ,
        ["2007/04", "2007/04"] ,
        ["2007/05", "2007/05"] ,
        ["2007/06", "2007/06"] ,
        ["2007/07", "2007/07"] ,
        ["2007/08", "2007/08"] ,
        ["2007/09", "2007/09"] ,
        ["2007/10", "2007/10"] ,
        ["2007/11", "2007/11"] ,
        ["2007/12", "2007/12"] ,
        ["2008/01", "2008/01"] ,
        ["2008/02", "2008/02"] ,
        ["2008/03", "2008/03"] ,
        ["2008/04", "2008/04"] ,
        ["2008/05", "2008/05"] ,
        ["2008/06", "2008/06"] ,
        ["2008/07", "2008/07"] ,
        ["2008/08", "2008/08"] ,
        ["2008/09", "2008/09"] ,
        ["2008/10", "2008/10"] ,
        ["2008/11", "2008/11"] ,
        ["2008/12", "2008/12"] ,
        ["2009/01", "2009/01"] ,
        ["2009/02", "2009/02"] ,
        ["2009/03", "2009/03"] ,
        ["2009/04", "2009/04"] ,
        ["2009/05", "2009/05"] ,
        ["2009/06", "2009/06"] ,
        ["2009/07", "2009/07"] ,
        ["2009/08", "2009/08"] ,
        ["2009/09", "2009/09"] ,
        ["2009/10", "2009/10"] ,
        ["2009/11", "2009/11"] ,
        ["2009/12", "2009/12"] ,
        ["2010/01", "2010/01"] ,
        ["2010/02", "2010/02"] ,
        ["2010/03", "2010/03"] ,
        ["2010/04", "2010/04"] ,
        ["2010/05", "2010/05"] ,
        ["2010/06", "2010/06"] ,
        ["2010/07", "2010/07"] ,
        ["2010/08", "2010/08"] ,
        ["2010/09", "2010/09"] ,
        ["2010/10", "2010/10"] ,
        ["2010/11", "2010/11"] ,
        ["2010/12", "2010/12"] ,
        ["2011/01", "2011/01"] ,
        ["2011/02", "2011/02"] ,
        ["2011/03", "2011/03"] ,
        ["2011/04", "2011/04"] ,
        ["2011/05", "2011/05"] ,
        ["2011/06", "2011/06"] ,
        ["2011/07", "2011/07"] ,
        ["2011/08", "2011/08"] ,
        ["2011/09", "2011/09"] ,
        ["2011/10", "2011/10"] ,
        ["2011/11", "2011/11"] ,
        ["2011/12", "2011/12"] ,
        ["2012/01", "2012/01"] ,
        ["2012/02", "2012/02"] ,
        ["2012/03", "2012/03"] ,
        ["2012/04", "2012/04"] ,
        ["2012/05", "2012/05"] ,
        ["2012/06", "2012/06"] ,
        ["2012/07", "2012/07"] ,
        ["2012/08", "2012/08"] ,
        ["2012/09", "2012/09"] ,
        ["2012/10", "2012/10"] ,
        ["2012/11", "2012/11"] ,
        ["2012/12", "2012/12"] ,
        ["2013/01", "2013/01"] ,
        ["2013/02", "2013/02"] ,
        ["2013/03", "2013/03"] ,
        ["2013/04", "2013/04"] ,
        ["2013/05", "2013/05"] ,
        ["2013/06", "2013/06"] ,
        ["2013/07", "2013/07"] ,
        ["2013/08", "2013/08"] ,
        ["2013/09", "2013/09"] ,
        ["2013/10", "2013/10"] ,
        ["2013/11", "2013/11"] ,
        ["2013/12", "2013/12"] ,
        ["2014/01", "2014/01"] ,
        ["2014/02", "2014/02"] ,
        ["2014/03", "2014/03"] ,
        ["2014/04", "2014/04"] ,
        ["2014/05", "2014/05"] ,
        ["2014/06", "2014/06"] ,
        ["2014/07", "2014/07"] ,
        ["2014/08", "2014/08"] ,
        ["2014/09", "2014/09"] ,
        ["2014/10", "2014/10"] ,
        ["2014/11", "2014/11"] ,
        ["2014/12", "2014/12"] ,
        ["2015/01", "2015/01"] ,
        ["2015/02", "2015/02"] ,
        ["2015/03", "2015/03"] ,
        ["2015/04", "2015/04"] ,
        ["2015/05", "2015/05"] ,
        ["2015/06", "2015/06"] ,
        ["2015/07", "2015/07"] ,
        ["2015/08", "2015/08"] ,
        ["2015/09", "2015/09"] ,
        ["2015/10", "2015/10"] ,
        ["2015/11", "2015/11"] ,
        ["2015/12", "2015/12"] ,
        ["2016/01", "2016/01"] 
    ]
}

var airlines_PROPERTIES = [
    ["Airport.Code", "Airport.Code"] ,
    ["Airport.Name", "Airport.Name"] ,
    ["Time.Label", "Time.Label"] ,
    ["Time.Month", "Time.Month"] ,
    ["Time.Month Name", "Time.Month Name"] ,
    ["Time.Year", "Time.Year"] ,
    ["Statistics.# of Delays.Carrier", "Statistics.# of Delays.Carrier"] ,
    ["Statistics.# of Delays.Late Aircraft", "Statistics.# of Delays.Late Aircraft"] ,
    ["Statistics.# of Delays.National Aviation System", "Statistics.# of Delays.National Aviation System"] ,
    ["Statistics.# of Delays.Security", "Statistics.# of Delays.Security"] ,
    ["Statistics.# of Delays.Weather", "Statistics.# of Delays.Weather"] ,
    ["Statistics.Carriers.Names", "Statistics.Carriers.Names"] ,
    ["Statistics.Carriers.Total", "Statistics.Carriers.Total"] ,
    ["Statistics.Flights.Cancelled", "Statistics.Flights.Cancelled"] ,
    ["Statistics.Flights.Delayed", "Statistics.Flights.Delayed"] ,
    ["Statistics.Flights.Diverted", "Statistics.Flights.Diverted"] ,
    ["Statistics.Flights.On Time", "Statistics.Flights.On Time"] ,
    ["Statistics.Flights.Total", "Statistics.Flights.Total"] ,
    ["Statistics.Minutes Delayed.Carrier", "Statistics.Minutes Delayed.Carrier"] ,
    ["Statistics.Minutes Delayed.Late Aircraft", "Statistics.Minutes Delayed.Late Aircraft"] ,
    ["Statistics.Minutes Delayed.National Aviation System", "Statistics.Minutes Delayed.National Aviation System"] ,
    ["Statistics.Minutes Delayed.Security", "Statistics.Minutes Delayed.Security"] ,
    ["Statistics.Minutes Delayed.Total", "Statistics.Minutes Delayed.Total"] ,
    ["Statistics.Minutes Delayed.Weather", "Statistics.Minutes Delayed.Weather"] 
]

Blockly.Blocks['airlines_get'] = {
  init: function() {
    this.setColour(45);
    this.appendDummyInput('MAIN')
        .appendField("airlines.get")
        .appendField(new Blockly.FieldDropdown(airlines_PROPERTIES), "PROPERTY");
    this.appendDummyInput('SECOND')
        .appendField("filter")
        .appendField(new Blockly.FieldDropdown(airlines_INDEXES, function(option) {
                        this.getSourceBlock().updateShape_(option);
                    }), "INDEX")
    this.updateShape_("(None)");
    this.setInputsInline(false);
    this.setOutput(true, "Array");
    this.setTooltip('Returns a list of airlines data.');
  },
  mutationToDom: function() {
    var container = document.createElement('mutation');
    container.setAttribute('index', this.getFieldValue('INDEX'));
    container.setAttribute('index_value', this.getFieldValue('INDEX_VALUE'));
    container.setAttribute('module', "airlines")
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
        inputGroup.appendField(new Blockly.FieldDropdown(airlines_INDEX_VALUES[index]), 'INDEX_VALUE')
        if (index_value != undefined) {
            this.setFieldValue(index_value, 'INDEX_VALUE');
        } else {
            this.setFieldValue(airlines_INDEX_VALUES[index][0][0], 'INDEX_VALUE');
        }
    }    
  }
};
Blockly.Python['airlines_get'] = function(block) {
    Blockly.Python.definitions_['import_airlines'] = 'import airlines';
    var propertyValue = block.getFieldValue('PROPERTY') || '';
    var property = Blockly.Python.quote_(propertyValue);
    var index_unquoted = block.getFieldValue('INDEX');
    var index = Blockly.Python.quote_(index_unquoted || '');
    var index_value = "''";
    if (index_unquoted !== '(None)') {
        var iv = block.getFieldValue('INDEX_VALUE') || "";
        index_value = Blockly.Python.quote_(iv);
    }
    var code = 'airlines.get('+property+',' +index+','+index_value+')';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

BlockMirrorTextToBlocks.prototype.MODULE_FUNCTION_SIGNATURES['airlines'] = {
    "get": {
        custom: function(node, parent) {
            if (!node.args || node.args.length < 3 ||
                !node.args[0] || !node.args[1] || !node.args[2] ||
                node.args[0]._astname !== "Str" || node.args[1]._astname !== "Str" || node.args[2]._astname !== "Str"
            ) {
                throw new Error("Not the right function call.");
            }
            return BlockMirrorTextToBlocks.create_block("airlines_get", null,
                {"PROPERTY": node.args[0].s.v},
                {}, {}, {"@INDEX": node.args[1].s.v,
                    "@INDEX_VALUE": node.args[2].s.v});
        }
    },
};

BlockMirrorBlockEditor.EXTRA_TOOLS['Data - airlines'] = '<category name="Data - airlines" colour="45">'+
                    '<block type="airlines_get"><mutation index="(None)" index_value=""></mutation></block>'+
                '</category>';