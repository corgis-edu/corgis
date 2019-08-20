

var school_scores_INDEXES = [
    ["(None)", "(None)"],
    
    ["Year", "Year"] ,
    ["State.Name", "State.Name"] 
];

var school_scores_INDEX_VALUES = {
    "(None)": [],
    
    "Year": [
        
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
        ["2015", "2015"] 
    ],
    "State.Name": [
        
        ["Alabama", "Alabama"] ,
        ["Alaska", "Alaska"] ,
        ["Arizona", "Arizona"] ,
        ["Arkansas", "Arkansas"] ,
        ["California", "California"] ,
        ["Colorado", "Colorado"] ,
        ["Connecticut", "Connecticut"] ,
        ["Delaware", "Delaware"] ,
        ["District Of Columbia", "District Of Columbia"] ,
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
        ["Puerto Rico", "Puerto Rico"] ,
        ["Rhode Island", "Rhode Island"] ,
        ["South Carolina", "South Carolina"] ,
        ["South Dakota", "South Dakota"] ,
        ["Tennessee", "Tennessee"] ,
        ["Texas", "Texas"] ,
        ["Utah", "Utah"] ,
        ["Vermont", "Vermont"] ,
        ["Virgin Islands", "Virgin Islands"] ,
        ["Virginia", "Virginia"] ,
        ["Washington", "Washington"] ,
        ["West Virginia", "West Virginia"] ,
        ["Wisconsin", "Wisconsin"] ,
        ["Wyoming", "Wyoming"] 
    ]
}

var school_scores_PROPERTIES = [
    ["Year", "Year"] ,
    ["State.Code", "State.Code"] ,
    ["State.Name", "State.Name"] ,
    ["Total.Math", "Total.Math"] ,
    ["Total.Test-takers", "Total.Test-takers"] ,
    ["Total.Verbal", "Total.Verbal"] ,
    ["Academic Subjects.Arts/Music.Average GPA", "Academic Subjects.Arts/Music.Average GPA"] ,
    ["Academic Subjects.Arts/Music.Average Years", "Academic Subjects.Arts/Music.Average Years"] ,
    ["Academic Subjects.English.Average GPA", "Academic Subjects.English.Average GPA"] ,
    ["Academic Subjects.English.Average Years", "Academic Subjects.English.Average Years"] ,
    ["Academic Subjects.Foreign Languages.Average GPA", "Academic Subjects.Foreign Languages.Average GPA"] ,
    ["Academic Subjects.Foreign Languages.Average Years", "Academic Subjects.Foreign Languages.Average Years"] ,
    ["Academic Subjects.Mathematics.Average GPA", "Academic Subjects.Mathematics.Average GPA"] ,
    ["Academic Subjects.Mathematics.Average Years", "Academic Subjects.Mathematics.Average Years"] ,
    ["Academic Subjects.Natural Sciences.Average GPA", "Academic Subjects.Natural Sciences.Average GPA"] ,
    ["Academic Subjects.Natural Sciences.Average Years", "Academic Subjects.Natural Sciences.Average Years"] ,
    ["Academic Subjects.Social Sciences/History.Average GPA", "Academic Subjects.Social Sciences/History.Average GPA"] ,
    ["Academic Subjects.Social Sciences/History.Average Years", "Academic Subjects.Social Sciences/History.Average Years"] ,
    ["Family Income.Between 20-40k.Math", "Family Income.Between 20-40k.Math"] ,
    ["Family Income.Between 20-40k.Test-takers", "Family Income.Between 20-40k.Test-takers"] ,
    ["Family Income.Between 20-40k.Verbal", "Family Income.Between 20-40k.Verbal"] ,
    ["Family Income.Between 40-60k.Math", "Family Income.Between 40-60k.Math"] ,
    ["Family Income.Between 40-60k.Test-takers", "Family Income.Between 40-60k.Test-takers"] ,
    ["Family Income.Between 40-60k.Verbal", "Family Income.Between 40-60k.Verbal"] ,
    ["Family Income.Between 60-80k.Math", "Family Income.Between 60-80k.Math"] ,
    ["Family Income.Between 60-80k.Test-takers", "Family Income.Between 60-80k.Test-takers"] ,
    ["Family Income.Between 60-80k.Verbal", "Family Income.Between 60-80k.Verbal"] ,
    ["Family Income.Between 80-100k.Math", "Family Income.Between 80-100k.Math"] ,
    ["Family Income.Between 80-100k.Test-takers", "Family Income.Between 80-100k.Test-takers"] ,
    ["Family Income.Between 80-100k.Verbal", "Family Income.Between 80-100k.Verbal"] ,
    ["Family Income.Less than 20k.Math", "Family Income.Less than 20k.Math"] ,
    ["Family Income.Less than 20k.Test-takers", "Family Income.Less than 20k.Test-takers"] ,
    ["Family Income.Less than 20k.Verbal", "Family Income.Less than 20k.Verbal"] ,
    ["Family Income.More than 100k.Math", "Family Income.More than 100k.Math"] ,
    ["Family Income.More than 100k.Test-takers", "Family Income.More than 100k.Test-takers"] ,
    ["Family Income.More than 100k.Verbal", "Family Income.More than 100k.Verbal"] ,
    ["GPA.A minus.Math", "GPA.A minus.Math"] ,
    ["GPA.A minus.Test-takers", "GPA.A minus.Test-takers"] ,
    ["GPA.A minus.Verbal", "GPA.A minus.Verbal"] ,
    ["GPA.A plus.Math", "GPA.A plus.Math"] ,
    ["GPA.A plus.Test-takers", "GPA.A plus.Test-takers"] ,
    ["GPA.A plus.Verbal", "GPA.A plus.Verbal"] ,
    ["GPA.A.Math", "GPA.A.Math"] ,
    ["GPA.A.Test-takers", "GPA.A.Test-takers"] ,
    ["GPA.A.Verbal", "GPA.A.Verbal"] ,
    ["GPA.B.Math", "GPA.B.Math"] ,
    ["GPA.B.Test-takers", "GPA.B.Test-takers"] ,
    ["GPA.B.Verbal", "GPA.B.Verbal"] ,
    ["GPA.C.Math", "GPA.C.Math"] ,
    ["GPA.C.Test-takers", "GPA.C.Test-takers"] ,
    ["GPA.C.Verbal", "GPA.C.Verbal"] ,
    ["GPA.D or lower.Math", "GPA.D or lower.Math"] ,
    ["GPA.D or lower.Test-takers", "GPA.D or lower.Test-takers"] ,
    ["GPA.D or lower.Verbal", "GPA.D or lower.Verbal"] ,
    ["GPA.No response.Math", "GPA.No response.Math"] ,
    ["GPA.No response.Test-takers", "GPA.No response.Test-takers"] ,
    ["GPA.No response.Verbal", "GPA.No response.Verbal"] ,
    ["Gender.Female.Math", "Gender.Female.Math"] ,
    ["Gender.Female.Test-takers", "Gender.Female.Test-takers"] ,
    ["Gender.Female.Verbal", "Gender.Female.Verbal"] ,
    ["Gender.Male.Math", "Gender.Male.Math"] ,
    ["Gender.Male.Test-takers", "Gender.Male.Test-takers"] ,
    ["Gender.Male.Verbal", "Gender.Male.Verbal"] ,
    ["Score Ranges.Between 200 to 300.Math.Females", "Score Ranges.Between 200 to 300.Math.Females"] ,
    ["Score Ranges.Between 200 to 300.Math.Males", "Score Ranges.Between 200 to 300.Math.Males"] ,
    ["Score Ranges.Between 200 to 300.Math.Total", "Score Ranges.Between 200 to 300.Math.Total"] ,
    ["Score Ranges.Between 200 to 300.Verbal.Females", "Score Ranges.Between 200 to 300.Verbal.Females"] ,
    ["Score Ranges.Between 200 to 300.Verbal.Males", "Score Ranges.Between 200 to 300.Verbal.Males"] ,
    ["Score Ranges.Between 200 to 300.Verbal.Total", "Score Ranges.Between 200 to 300.Verbal.Total"] ,
    ["Score Ranges.Between 300 to 400.Math.Females", "Score Ranges.Between 300 to 400.Math.Females"] ,
    ["Score Ranges.Between 300 to 400.Math.Males", "Score Ranges.Between 300 to 400.Math.Males"] ,
    ["Score Ranges.Between 300 to 400.Math.Total", "Score Ranges.Between 300 to 400.Math.Total"] ,
    ["Score Ranges.Between 300 to 400.Verbal.Females", "Score Ranges.Between 300 to 400.Verbal.Females"] ,
    ["Score Ranges.Between 300 to 400.Verbal.Males", "Score Ranges.Between 300 to 400.Verbal.Males"] ,
    ["Score Ranges.Between 300 to 400.Verbal.Total", "Score Ranges.Between 300 to 400.Verbal.Total"] ,
    ["Score Ranges.Between 400 to 500.Math.Females", "Score Ranges.Between 400 to 500.Math.Females"] ,
    ["Score Ranges.Between 400 to 500.Math.Males", "Score Ranges.Between 400 to 500.Math.Males"] ,
    ["Score Ranges.Between 400 to 500.Math.Total", "Score Ranges.Between 400 to 500.Math.Total"] ,
    ["Score Ranges.Between 400 to 500.Verbal.Females", "Score Ranges.Between 400 to 500.Verbal.Females"] ,
    ["Score Ranges.Between 400 to 500.Verbal.Males", "Score Ranges.Between 400 to 500.Verbal.Males"] ,
    ["Score Ranges.Between 400 to 500.Verbal.Total", "Score Ranges.Between 400 to 500.Verbal.Total"] ,
    ["Score Ranges.Between 500 to 600.Math.Females", "Score Ranges.Between 500 to 600.Math.Females"] ,
    ["Score Ranges.Between 500 to 600.Math.Males", "Score Ranges.Between 500 to 600.Math.Males"] ,
    ["Score Ranges.Between 500 to 600.Math.Total", "Score Ranges.Between 500 to 600.Math.Total"] ,
    ["Score Ranges.Between 500 to 600.Verbal.Females", "Score Ranges.Between 500 to 600.Verbal.Females"] ,
    ["Score Ranges.Between 500 to 600.Verbal.Males", "Score Ranges.Between 500 to 600.Verbal.Males"] ,
    ["Score Ranges.Between 500 to 600.Verbal.Total", "Score Ranges.Between 500 to 600.Verbal.Total"] ,
    ["Score Ranges.Between 600 to 700.Math.Females", "Score Ranges.Between 600 to 700.Math.Females"] ,
    ["Score Ranges.Between 600 to 700.Math.Males", "Score Ranges.Between 600 to 700.Math.Males"] ,
    ["Score Ranges.Between 600 to 700.Math.Total", "Score Ranges.Between 600 to 700.Math.Total"] ,
    ["Score Ranges.Between 600 to 700.Verbal.Females", "Score Ranges.Between 600 to 700.Verbal.Females"] ,
    ["Score Ranges.Between 600 to 700.Verbal.Males", "Score Ranges.Between 600 to 700.Verbal.Males"] ,
    ["Score Ranges.Between 600 to 700.Verbal.Total", "Score Ranges.Between 600 to 700.Verbal.Total"] ,
    ["Score Ranges.Between 700 to 800.Math.Females", "Score Ranges.Between 700 to 800.Math.Females"] ,
    ["Score Ranges.Between 700 to 800.Math.Males", "Score Ranges.Between 700 to 800.Math.Males"] ,
    ["Score Ranges.Between 700 to 800.Math.Total", "Score Ranges.Between 700 to 800.Math.Total"] ,
    ["Score Ranges.Between 700 to 800.Verbal.Females", "Score Ranges.Between 700 to 800.Verbal.Females"] ,
    ["Score Ranges.Between 700 to 800.Verbal.Males", "Score Ranges.Between 700 to 800.Verbal.Males"] ,
    ["Score Ranges.Between 700 to 800.Verbal.Total", "Score Ranges.Between 700 to 800.Verbal.Total"] 
]

Blockly.Blocks['school_scores_get'] = {
  init: function() {
    this.setColour(45);
    this.appendDummyInput('MAIN')
        .appendField("school_scores.get")
        .appendField(new Blockly.FieldDropdown(school_scores_PROPERTIES), "PROPERTY");
    this.appendDummyInput('SECOND')
        .appendField("filter")
        .appendField(new Blockly.FieldDropdown(school_scores_INDEXES, function(option) {
                        this.getSourceBlock().updateShape_(option);
                    }), "INDEX")
    this.updateShape_("(None)");
    this.setInputsInline(false);
    this.setOutput(true, "Array");
    this.setTooltip('Returns a list of school scores data.');
  },
  mutationToDom: function() {
    var container = document.createElement('mutation');
    container.setAttribute('index', this.getFieldValue('INDEX'));
    container.setAttribute('index_value', this.getFieldValue('INDEX_VALUE'));
    container.setAttribute('module', "school_scores")
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
        inputGroup.appendField(new Blockly.FieldDropdown(school_scores_INDEX_VALUES[index]), 'INDEX_VALUE')
        if (index_value != undefined) {
            this.setFieldValue(index_value, 'INDEX_VALUE');
        } else {
            this.setFieldValue(school_scores_INDEX_VALUES[index][0][0], 'INDEX_VALUE');
        }
    }    
  }
};
Blockly.Python['school_scores_get'] = function(block) {
    Blockly.Python.definitions_['import_school_scores'] = 'import school_scores';
    var propertyValue = block.getFieldValue('PROPERTY') || '';
    var property = Blockly.Python.quote_(propertyValue);
    var index_unquoted = block.getFieldValue('INDEX');
    var index = Blockly.Python.quote_(index_unquoted || '');
    var index_value = "''";
    if (index_unquoted !== '(None)') {
        var iv = block.getFieldValue('INDEX_VALUE') || "";
        index_value = Blockly.Python.quote_(iv);
    }
    var code = 'school_scores.get('+property+',' +index+','+index_value+')';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

BlockMirrorTextToBlocks.prototype.MODULE_FUNCTION_SIGNATURES['school_scores'] = {
    "get": {
        custom: function(node, parent) {
            if (!node.args || node.args.length < 3 ||
                !node.args[0] || !node.args[1] || !node.args[2] ||
                node.args[0]._astname !== "Str" || node.args[1]._astname !== "Str" || node.args[2]._astname !== "Str"
            ) {
                throw new Error("Not the right function call.");
            }
            return BlockMirrorTextToBlocks.create_block("school_scores_get", null,
                {"PROPERTY": node.args[0].s.v},
                {}, {}, {"@INDEX": node.args[1].s.v,
                    "@INDEX_VALUE": node.args[2].s.v});
        }
    },
};

BlockMirrorBlockEditor.EXTRA_TOOLS['Data - school scores'] = '<category name="Data - School Scores" colour="45">'+
                    '<block type="school_scores_get"><mutation index="(None)" index_value=""></mutation></block>'+
                '</category>';