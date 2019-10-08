

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
        var dataset = blockpy._IMPORTED_DATASETS["wind_turbines"];
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

    mod.get_turbines = new Sk.builtin.func(function() {
        Sk.builtin.pyCheckArgs("get_turbines", arguments, 0, 0);
        if (!("wind_turbines" in blockpy._IMPORTED_DATASETS)) {
            alert("This library has not finished loading yet. Please wait about 10 seconds and try again.")
        } else {
            return Sk.ffi.remapToPy(blockpy._IMPORTED_DATASETS["wind_turbines"]);
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
            'get_turbines': {
                "type": "FunctionType",
                "name": 'get_turbines',
                "returns": 
				{"type": "ListType", "subtype": 
					{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Site'}, {"type": "LiteralStr", "value": 'Year'}, {"type": "LiteralStr", "value": 'Turbine'}, {"type": "LiteralStr", "value": 'Project'}], "values": [
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'State'}, {"type": "LiteralStr", "value": 'County'}, {"type": "LiteralStr", "value": 'Latitude'}, {"type": "LiteralStr", "value": 'Longitude'}], "values": [
							{"type": "StrType"}, 
							{"type": "StrType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}]}, 
						{"type": "NumType"}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Capacity'}, {"type": "LiteralStr", "value": 'Hub_Height'}, {"type": "LiteralStr", "value": 'Rotor_Diameter'}, {"type": "LiteralStr", "value": 'Swept_Area'}, {"type": "LiteralStr", "value": 'Total_Height'}], "values": [
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Capacity'}, {"type": "LiteralStr", "value": 'Number_Turbines'}], "values": [
							{"type": "NumType"}, 
							{"type": "NumType"}]}]}}
            },
        }
    });
    });

    return mod;
}