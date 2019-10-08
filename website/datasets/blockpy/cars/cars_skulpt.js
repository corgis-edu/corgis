

var $builtinmodule = function(name)
{
    var mod = {};
    
    mod.get = new Sk.builtin.func(function(property, index, index_value) {
        Sk.builtin.pyCheckArgs("get", arguments, 3, 3);
        Sk.builtin.pyCheckType("property", "string", Sk.builtin.checkString(property));
        Sk.builtin.pyCheckType("index", "string", Sk.builtin.checkString(index));
        Sk.builtin.pyCheckType("index_value", "string", Sk.builtin.checkString(index_value));
        property = property.v;
        index = index.v;
        index_value = index_value.v;
        var dataset = blockpy._IMPORTED_DATASETS["cars"];
        var data = [];
        if (index != '(None)') {
            for (var i = 0; i < dataset[property].data.length; i += 1) {
                if (dataset[index].data[i] == index_value) {
                    data.push(dataset[property].data[i]);
                }
            }
        } else {
            data = dataset[property].data;
        }
        return Sk.ffi.remapToPy(data);
    });

    mod.get_car = new Sk.builtin.func(function() {
        Sk.builtin.pyCheckArgs("get_car", arguments, 0, 0);
        if (!("cars" in blockpy._IMPORTED_DATASETS)) {
            alert("This library has not finished loading yet. Please wait about 10 seconds and try again.")
        } else {
            return blockpy._IMPORTED_DATASETS["cars"];
        }
    });
    
    mod._tifa_definitions = new Sk.builtin.func(function() {
        return Sk.ffi.remapToPy({"type": "ModuleType",
        "fields": {
            'get': {
                "type": "FunctionType",
                "name": 'get',
                "returns": {
                    "type": "ListType",
                    "empty": false,
                    "subtype": {"type": "NumType"}
                }
            },
            'get_car': {
                "type": "FunctionType",
                "name": 'get_car',
                "returns": 
				{"type": "ListType", "subtype": 
					{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Dimensions'}, {"type": "LiteralStr", "value": 'Engine Information'}, {"type": "LiteralStr", "value": 'Fuel Information'}, {"type": "LiteralStr", "value": 'Identification'}], "values": [
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Height'}, {"type": "LiteralStr", "value": 'Length'}, {"type": "LiteralStr", "value": 'Width'}], "values": [
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Driveline'}, {"type": "LiteralStr", "value": 'Engine Type'}, {"type": "LiteralStr", "value": 'Hybrid'}, {"type": "LiteralStr", "value": 'Number of Forward Gears'}, {"type": "LiteralStr", "value": 'Transmission'}, {"type": "LiteralStr", "value": 'Engine Statistics'}], "values": [
							{"type": "StrType"}, 
							{"type": "StrType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "StrType"}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Horsepower'}, {"type": "LiteralStr", "value": 'Torque'}], "values": [
								{"type": "NumType"}, 
								{"type": "NumType"}]}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'City mpg'}, {"type": "LiteralStr", "value": 'Fuel Type'}, {"type": "LiteralStr", "value": 'Highway mpg'}], "values": [
							{"type": "NumType"}, 
							{"type": "StrType"}, 
							{"type": "NumType"}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Classification'}, {"type": "LiteralStr", "value": 'ID'}, {"type": "LiteralStr", "value": 'Make'}, {"type": "LiteralStr", "value": 'Model Year'}, {"type": "LiteralStr", "value": 'Year'}], "values": [
							{"type": "StrType"}, 
							{"type": "StrType"}, 
							{"type": "StrType"}, 
							{"type": "StrType"}, 
							{"type": "NumType"}]}]}}
            },
        }
    });
    });

    return mod;
}