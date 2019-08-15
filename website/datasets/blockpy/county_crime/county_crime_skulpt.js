

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
        var dataset = blockpy._IMPORTED_DATASETS["county_crime"];
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
    
    
    
    mod._tifa_definitions = new Sk.builtin.func(function() {
        return Sk.ffi.remapToPy({"type": "ModuleType",
        "fields": {
            'get': {
                "type": "FunctionType",
                "name": 'get',
                "returns": {
                    "type": "ListType",
                    "empty": False,
                    "subtype": {"type": "NumType"}
                }
            },
            'get_report': {
                "type": "FunctionType",
                "name": 'get_report',
                "returns": 
				{"type": "ListType", "subtype": 
					{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Department'}, {"type": "LiteralStr", "value": 'State'}, {"type": "LiteralStr", "value": 'Year'}, {"type": "LiteralStr", "value": 'Data'}], "values": [
						{"type": "StrType"}, 
						{"type": "StrType"}, 
						{"type": "NumType"}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Population'}, {"type": "LiteralStr", "value": 'Rates'}, {"type": "LiteralStr", "value": 'Totals'}], "values": [
							{"type": "NumType"}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Property'}, {"type": "LiteralStr", "value": 'Violent'}], "values": [
								{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'All'}, {"type": "LiteralStr", "value": 'Burglary'}, {"type": "LiteralStr", "value": 'Larceny'}, {"type": "LiteralStr", "value": 'Motor'}], "values": [
									{"type": "NumType"}, 
									{"type": "NumType"}, 
									{"type": "NumType"}, 
									{"type": "NumType"}]}, 
								{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'All'}, {"type": "LiteralStr", "value": 'Assault'}, {"type": "LiteralStr", "value": 'Murder'}, {"type": "LiteralStr", "value": 'Rape'}, {"type": "LiteralStr", "value": 'Robbery'}], "values": [
									{"type": "NumType"}, 
									{"type": "NumType"}, 
									{"type": "NumType"}, 
									{"type": "NumType"}, 
									{"type": "NumType"}]}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Property'}, {"type": "LiteralStr", "value": 'Violent'}], "values": [
								{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'All'}, {"type": "LiteralStr", "value": 'Burglary'}, {"type": "LiteralStr", "value": 'Larceny'}, {"type": "LiteralStr", "value": 'Motor'}], "values": [
									{"type": "NumType"}, 
									{"type": "NumType"}, 
									{"type": "NumType"}, 
									{"type": "NumType"}]}, 
								{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'All'}, {"type": "LiteralStr", "value": 'Assault'}, {"type": "LiteralStr", "value": 'Murder'}, {"type": "LiteralStr", "value": 'Rape'}, {"type": "LiteralStr", "value": 'Robbery'}], "values": [
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