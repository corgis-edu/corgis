

var supreme_court_INDEXES = [
    ["(None)", "(None)"],
    
    ["issue.area", "issue.area"] ,
    ["decision.date.year", "decision.date.year"] 
];

var supreme_court_INDEX_VALUES = {
    "(None)": [],
    
    "issue.area": [
        
        ["Attorneys", "Attorneys"] ,
        ["Civil Rights", "Civil Rights"] ,
        ["Criminal Procedure", "Criminal Procedure"] ,
        ["Due Process", "Due Process"] ,
        ["Economic Activity", "Economic Activity"] ,
        ["Federal Taxation", "Federal Taxation"] ,
        ["Federalism", "Federalism"] ,
        ["First Amendment", "First Amendment"] ,
        ["Interstate Relations", "Interstate Relations"] ,
        ["Judicial Power", "Judicial Power"] ,
        ["Miscellaneous", "Miscellaneous"] ,
        ["Privacy", "Privacy"] ,
        ["Private Action", "Private Action"] ,
        ["Unions", "Unions"] ,
        ["unspecified", "unspecified"] 
    ],
    "decision.date.year": [
        
        ["1946", "1946"] ,
        ["1947", "1947"] ,
        ["1948", "1948"] ,
        ["1949", "1949"] ,
        ["1950", "1950"] ,
        ["1951", "1951"] ,
        ["1952", "1952"] ,
        ["1953", "1953"] ,
        ["1954", "1954"] ,
        ["1955", "1955"] ,
        ["1956", "1956"] ,
        ["1957", "1957"] ,
        ["1958", "1958"] ,
        ["1959", "1959"] ,
        ["1960", "1960"] ,
        ["1961", "1961"] ,
        ["1962", "1962"] ,
        ["1963", "1963"] ,
        ["1964", "1964"] ,
        ["1965", "1965"] ,
        ["1966", "1966"] ,
        ["1967", "1967"] ,
        ["1968", "1968"] ,
        ["1969", "1969"] ,
        ["1970", "1970"] ,
        ["1971", "1971"] ,
        ["1972", "1972"] ,
        ["1973", "1973"] ,
        ["1974", "1974"] ,
        ["1975", "1975"] ,
        ["1976", "1976"] ,
        ["1977", "1977"] ,
        ["1978", "1978"] ,
        ["1979", "1979"] ,
        ["1980", "1980"] ,
        ["1981", "1981"] ,
        ["1982", "1982"] ,
        ["1983", "1983"] ,
        ["1984", "1984"] ,
        ["1985", "1985"] ,
        ["1986", "1986"] ,
        ["1987", "1987"] ,
        ["1988", "1988"] ,
        ["1989", "1989"] ,
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

var supreme_court_PROPERTIES = [
    ["3_judge_dc", "3_judge_dc"] ,
    ["docket", "docket"] ,
    ["name", "name"] ,
    ["citation.led", "citation.led"] ,
    ["citation.lexis", "citation.lexis"] ,
    ["citation.sct", "citation.sct"] ,
    ["citation.us", "citation.us"] ,
    ["decision.authority", "decision.authority"] ,
    ["decision.direction", "decision.direction"] ,
    ["decision.dissent agrees", "decision.dissent agrees"] ,
    ["decision.jurisdiction", "decision.jurisdiction"] ,
    ["decision.precedent altered?", "decision.precedent altered?"] ,
    ["decision.term", "decision.term"] ,
    ["decision.type", "decision.type"] ,
    ["decision.unconstitutional", "decision.unconstitutional"] ,
    ["decision.winning party", "decision.winning party"] ,
    ["id.case", "id.case"] ,
    ["id.case issues", "id.case issues"] ,
    ["id.docket", "id.docket"] ,
    ["id.vote", "id.vote"] ,
    ["issue.area", "issue.area"] ,
    ["issue.id", "issue.id"] ,
    ["issue.text", "issue.text"] ,
    ["laws.id", "laws.id"] ,
    ["laws.type", "laws.type"] ,
    ["lower court.direction", "lower court.direction"] ,
    ["lower court.disagreement?", "lower court.disagreement?"] ,
    ["lower court.disposition", "lower court.disposition"] ,
    ["lower court.reasons", "lower court.reasons"] ,
    ["natural court.chief", "natural court.chief"] ,
    ["natural court.id", "natural court.id"] ,
    ["natural court.period", "natural court.period"] ,
    ["origin.id", "origin.id"] ,
    ["origin.name", "origin.name"] ,
    ["source.id", "source.id"] ,
    ["source.name", "source.name"] ,
    ["voting.majority", "voting.majority"] ,
    ["voting.minority", "voting.minority"] ,
    ["voting.split on second", "voting.split on second"] ,
    ["voting.unclear", "voting.unclear"] ,
    ["arguments.petitioner.entity", "arguments.petitioner.entity"] ,
    ["arguments.petitioner.id", "arguments.petitioner.id"] ,
    ["arguments.respondent.entity", "arguments.respondent.entity"] ,
    ["arguments.respondent.id", "arguments.respondent.id"] ,
    ["decision.admin action.agency", "decision.admin action.agency"] ,
    ["decision.admin action.id", "decision.admin action.id"] ,
    ["decision.case.disposition", "decision.case.disposition"] ,
    ["decision.case.unusual", "decision.case.unusual"] ,
    ["decision.date.day", "decision.date.day"] ,
    ["decision.date.full", "decision.date.full"] ,
    ["decision.date.month", "decision.date.month"] ,
    ["decision.date.year", "decision.date.year"] ,
    ["voting.majority assigner.id", "voting.majority assigner.id"] ,
    ["voting.majority assigner.name", "voting.majority assigner.name"] ,
    ["voting.majority writer.id", "voting.majority writer.id"] ,
    ["voting.majority writer.name", "voting.majority writer.name"] 
]

Blockly.Blocks['supreme_court_get'] = {
  init: function() {
    this.setColour(45);
    this.appendDummyInput('MAIN')
        .appendField("supreme_court.get")
        .appendField(new Blockly.FieldDropdown(supreme_court_PROPERTIES), "PROPERTY");
    this.appendDummyInput('SECOND')
        .appendField("filter")
        .appendField(new Blockly.FieldDropdown(supreme_court_INDEXES, function(option) {
                        this.getSourceBlock().updateShape_(option);
                    }), "INDEX")
    this.updateShape_("(None)");
    this.setInputsInline(false);
    this.setOutput(true, "Array");
    this.setTooltip('Returns a list of supreme court data.');
  },
  mutationToDom: function() {
    var container = document.createElement('mutation');
    container.setAttribute('index', this.getFieldValue('INDEX'));
    container.setAttribute('index_value', this.getFieldValue('INDEX_VALUE'));
    container.setAttribute('module', "supreme_court")
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
            inputGroup.appendField(new Blockly.FieldDropdown(supreme_court_INDEX_VALUES[index]), 'INDEX_VALUE')
            if (index_value != undefined) {
                this.setFieldValue(index_value, 'INDEX_VALUE');
            } else {
                this.setFieldValue(supreme_court_INDEX_VALUES[index][0][0], 'INDEX_VALUE');
            }
        }
    } catch (e) {
        inputGroup.appendField(new Blockly.FieldLabel("Reset to fix the blocks"));
        console.error(e);
    }
  }
};
Blockly.Python['supreme_court_get'] = function(block) {
    Blockly.Python.definitions_['import_supreme_court'] = 'import supreme_court';
    var propertyValue = block.getFieldValue('PROPERTY') || '';
    var property = Blockly.Python.quote_(propertyValue);
    var index_unquoted = block.getFieldValue('INDEX');
    var index = Blockly.Python.quote_(index_unquoted || '');
    var index_value = "''";
    if (index_unquoted !== '(None)') {
        var iv = block.getFieldValue('INDEX_VALUE') || "";
        index_value = Blockly.Python.quote_(iv);
    }
    var code = 'supreme_court.get('+property+',' +index+','+index_value+')';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

BlockMirrorTextToBlocks.prototype.MODULE_FUNCTION_SIGNATURES['supreme_court'] = {
    "get": {
        custom: function(node, parent) {
            if (!node.args || node.args.length < 3 ||
                !node.args[0] || !node.args[1] || !node.args[2] ||
                node.args[0]._astname !== "Str" || node.args[1]._astname !== "Str" || node.args[2]._astname !== "Str"
            ) {
                throw new Error("Not the right function call.");
            }
            return BlockMirrorTextToBlocks.create_block("supreme_court_get", null,
                {"PROPERTY": node.args[0].s.v},
                {}, {}, {"@INDEX": node.args[1].s.v,
                    "@INDEX_VALUE": node.args[2].s.v});
        }
    },
};

BlockMirrorBlockEditor.EXTRA_TOOLS['Data - supreme court'] = '<category name="Data - Supreme Court" colour="45">'+
                    '<block type="supreme_court_get"><mutation index="(None)" index_value=""></mutation></block>'+
                '</category>';