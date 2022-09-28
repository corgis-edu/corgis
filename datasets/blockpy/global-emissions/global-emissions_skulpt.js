

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
        var dataset = blockpy._IMPORTED_DATASETS["global-emissions"];
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

    mod.get_emissions = new Sk.builtin.func(function() {
        Sk.builtin.pyCheckArgs("get_emissions", arguments, 0, 0);
        if (!("global-emissions" in blockpy._IMPORTED_COMPLETE_DATASETS)) {
            alert("This library has not finished loading yet. Please wait about 10 seconds and try again.")
        } else {
            return Sk.ffi.remapToPy(blockpy._IMPORTED_COMPLETE_DATASETS["global-emissions"]);
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
            'get_emissions': {
                "type": "FunctionType",
                "name": 'get_emissions',
                "returns": 
				{"type": "ListType", "subtype": 
					{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Year'}, {"type": "LiteralStr", "value": 'Country'}, {"type": "LiteralStr", "value": 'Emissions'}], "values": [
						{"type": "NumType"}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Name'}, {"type": "LiteralStr", "value": 'Code'}, {"type": "LiteralStr", "value": 'GDP'}, {"type": "LiteralStr", "value": 'Population'}], "values": [
							{"type": "StrType"}, 
							{"type": "StrType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Production'}, {"type": "LiteralStr", "value": 'Global Share'}], "values": [
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'CH4'}, {"type": "LiteralStr", "value": 'N2O'}, {"type": "LiteralStr", "value": 'CO2'}], "values": [
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Cement'}, {"type": "LiteralStr", "value": 'Coal'}, {"type": "LiteralStr", "value": 'Gas'}, {"type": "LiteralStr", "value": 'Oil'}, {"type": "LiteralStr", "value": 'Flaring'}, {"type": "LiteralStr", "value": 'Other'}, {"type": "LiteralStr", "value": 'Total'}], "values": [
									{"type": "NumType"}, 
									{"type": "NumType"}, 
									{"type": "NumType"}, 
									{"type": "NumType"}, 
									{"type": "NumType"}, 
									{"type": "NumType"}, 
									{"type": "NumType"}]}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'CO2'}], "values": [
								{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Cement'}, {"type": "LiteralStr", "value": 'Coal'}, {"type": "LiteralStr", "value": 'Gas'}, {"type": "LiteralStr", "value": 'Oil'}, {"type": "LiteralStr", "value": 'Flaring'}, {"type": "LiteralStr", "value": 'Total'}], "values": [
									{"type": "NumType"}, 
									{"type": "NumType"}, 
									{"type": "NumType"}, 
									{"type": "NumType"}, 
									{"type": "NumType"}, 
									{"type": "NumType"}]}]}]}]}}
            },
        }
    });
    });

    return mod;
}