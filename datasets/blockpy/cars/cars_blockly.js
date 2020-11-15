

var cars_INDEXES = [
    ["(None)", "(None)"],
    
    ["Identification.Make", "Identification.Make"] ,
    ["Identification.Year", "Identification.Year"] 
];

var cars_INDEX_VALUES = {
    "(None)": [],
    
    "Identification.Make": [
        
        ["Acura", "Acura"] ,
        ["AMG", "AMG"] ,
        ["Aston Martin", "Aston Martin"] ,
        ["Audi", "Audi"] ,
        ["Bentley", "Bentley"] ,
        ["BMW", "BMW"] ,
        ["BMW Motorrad", "BMW Motorrad"] ,
        ["Buick", "Buick"] ,
        ["Cadillac", "Cadillac"] ,
        ["Chevrolet", "Chevrolet"] ,
        ["Chrysler", "Chrysler"] ,
        ["Chrysler Group LLC", "Chrysler Group LLC"] ,
        ["Dodge", "Dodge"] ,
        ["Ferrari", "Ferrari"] ,
        ["Ford", "Ford"] ,
        ["GMC", "GMC"] ,
        ["Grand Cherokee", "Grand Cherokee"] ,
        ["Honda", "Honda"] ,
        ["Hyundai", "Hyundai"] ,
        ["Infiniti", "Infiniti"] ,
        ["Jaguar", "Jaguar"] ,
        ["Jeep", "Jeep"] ,
        ["Kia", "Kia"] ,
        ["Lamborghini", "Lamborghini"] ,
        ["Land Rover", "Land Rover"] ,
        ["Lexus", "Lexus"] ,
        ["Lincoln", "Lincoln"] ,
        ["Lotus", "Lotus"] ,
        ["Maserati", "Maserati"] ,
        ["Maybach", "Maybach"] ,
        ["Mazda", "Mazda"] ,
        ["Mercedes", "Mercedes"] ,
        ["Mercedes-AMG", "Mercedes-AMG"] ,
        ["Mercedes-Benz", "Mercedes-Benz"] ,
        ["Mercury", "Mercury"] ,
        ["MINI", "MINI"] ,
        ["Mitsubishi", "Mitsubishi"] ,
        ["Nissan", "Nissan"] ,
        ["Porsche", "Porsche"] ,
        ["Rolls-Royce", "Rolls-Royce"] ,
        ["Saab", "Saab"] ,
        ["Scion", "Scion"] ,
        ["Subaru", "Subaru"] ,
        ["Suzuki", "Suzuki"] ,
        ["Toyota", "Toyota"] ,
        ["Volkswagen", "Volkswagen"] ,
        ["Volvo", "Volvo"] 
    ],
    "Identification.Year": [
        
        ["2009", "2009"] ,
        ["2010", "2010"] ,
        ["2011", "2011"] ,
        ["2012", "2012"] 
    ]
}

var cars_PROPERTIES = [
    ["Dimensions.Height", "Dimensions.Height"] ,
    ["Dimensions.Length", "Dimensions.Length"] ,
    ["Dimensions.Width", "Dimensions.Width"] ,
    ["Engine Information.Driveline", "Engine Information.Driveline"] ,
    ["Engine Information.Engine Type", "Engine Information.Engine Type"] ,
    ["Engine Information.Hybrid", "Engine Information.Hybrid"] ,
    ["Engine Information.Number of Forward Gears", "Engine Information.Number of Forward Gears"] ,
    ["Engine Information.Transmission", "Engine Information.Transmission"] ,
    ["Fuel Information.City mpg", "Fuel Information.City mpg"] ,
    ["Fuel Information.Fuel Type", "Fuel Information.Fuel Type"] ,
    ["Fuel Information.Highway mpg", "Fuel Information.Highway mpg"] ,
    ["Identification.Classification", "Identification.Classification"] ,
    ["Identification.ID", "Identification.ID"] ,
    ["Identification.Make", "Identification.Make"] ,
    ["Identification.Model Year", "Identification.Model Year"] ,
    ["Identification.Year", "Identification.Year"] ,
    ["Engine Information.Engine Statistics.Horsepower", "Engine Information.Engine Statistics.Horsepower"] ,
    ["Engine Information.Engine Statistics.Torque", "Engine Information.Engine Statistics.Torque"] 
]

Blockly.Blocks['cars_get'] = {
  init: function() {
    this.setColour(45);
    this.appendDummyInput('MAIN')
        .appendField("cars.get")
        .appendField(new Blockly.FieldDropdown(cars_PROPERTIES), "PROPERTY");
    this.appendDummyInput('SECOND')
        .appendField("filter")
        .appendField(new Blockly.FieldDropdown(cars_INDEXES, function(option) {
                        this.getSourceBlock().updateShape_(option);
                    }), "INDEX")
    this.updateShape_("(None)");
    this.setInputsInline(false);
    this.setOutput(true, "Array");
    this.setTooltip('Returns a list of cars data.');
  },
  mutationToDom: function() {
    var container = document.createElement('mutation');
    container.setAttribute('index', this.getFieldValue('INDEX'));
    container.setAttribute('index_value', this.getFieldValue('INDEX_VALUE'));
    container.setAttribute('module', "cars")
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
            inputGroup.appendField(new Blockly.FieldDropdown(cars_INDEX_VALUES[index]), 'INDEX_VALUE')
            if (index_value != undefined) {
                this.setFieldValue(index_value, 'INDEX_VALUE');
            } else {
                this.setFieldValue(cars_INDEX_VALUES[index][0][0], 'INDEX_VALUE');
            }
        }
    } catch (e) {
        inputGroup.appendField(new Blockly.FieldLabel("Reset to fix the blocks"));
        console.error(e);
    }
  }
};
Blockly.Python['cars_get'] = function(block) {
    Blockly.Python.definitions_['import_cars'] = 'import cars';
    var propertyValue = block.getFieldValue('PROPERTY') || '';
    var property = Blockly.Python.quote_(propertyValue);
    var index_unquoted = block.getFieldValue('INDEX');
    var index = Blockly.Python.quote_(index_unquoted || '');
    var index_value = "''";
    if (index_unquoted !== '(None)') {
        var iv = block.getFieldValue('INDEX_VALUE') || "";
        index_value = Blockly.Python.quote_(iv);
    }
    var code = 'cars.get('+property+',' +index+','+index_value+')';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

BlockMirrorTextToBlocks.prototype.MODULE_FUNCTION_SIGNATURES['cars'] = {
    "get": {
        custom: function(node, parent) {
            if (!node.args || node.args.length < 3 ||
                !node.args[0] || !node.args[1] || !node.args[2] ||
                node.args[0]._astname !== "Str" || node.args[1]._astname !== "Str" || node.args[2]._astname !== "Str"
            ) {
                throw new Error("Not the right function call.");
            }
            return BlockMirrorTextToBlocks.create_block("cars_get", null,
                {"PROPERTY": node.args[0].s.v},
                {}, {}, {"@INDEX": node.args[1].s.v,
                    "@INDEX_VALUE": node.args[2].s.v});
        }
    },
};

BlockMirrorBlockEditor.EXTRA_TOOLS['Data - cars'] = '<category name="Data - Cars" colour="45">'+
                    '<block type="cars_get"><mutation index="(None)" index_value=""></mutation></block>'+
                '</category>';