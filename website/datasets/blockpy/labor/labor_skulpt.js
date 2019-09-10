

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
        var dataset = blockpy._IMPORTED_DATASETS["labor"];
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
                    "empty": false,
                    "subtype": {"type": "NumType"}
                }
            },
            'get_result': {
                "type": "FunctionType",
                "name": 'get_result',
                "returns": 
				{"type": "ListType", "subtype": 
					{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Time'}, {"type": "LiteralStr", "value": 'Data'}], "values": [
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Month'}, {"type": "LiteralStr", "value": 'Month Name'}, {"type": "LiteralStr", "value": 'Year'}], "values": [
							{"type": "NumType"}, 
							{"type": "StrType"}, 
							{"type": "NumType"}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Civilian Noninstitutional Population'}, {"type": "LiteralStr", "value": 'Not In Labor Force'}, {"type": "LiteralStr", "value": 'Civilian Labor Force'}, {"type": "LiteralStr", "value": 'Employed'}, {"type": "LiteralStr", "value": 'Unemployed'}], "values": [
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Asian'}, {"type": "LiteralStr", "value": 'Black or African American'}, {"type": "LiteralStr", "value": 'White'}], "values": [
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Asian'}, {"type": "LiteralStr", "value": 'Black or African American'}, {"type": "LiteralStr", "value": 'White'}], "values": [
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Asian'}, {"type": "LiteralStr", "value": 'Black or African American'}, {"type": "LiteralStr", "value": 'White'}], "values": [
								{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Counts'}, {"type": "LiteralStr", "value": 'Participation Rate'}], "values": [
									{"type": "NumType"}, 
									{"type": "NumType"}]}, 
								{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Counts'}, {"type": "LiteralStr", "value": 'Participation Rate'}], "values": [
									{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'All'}, {"type": "LiteralStr", "value": 'Men'}, {"type": "LiteralStr", "value": 'Women'}], "values": [
										{"type": "NumType"}, 
										{"type": "NumType"}, 
										{"type": "NumType"}]}, 
									{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'All'}, {"type": "LiteralStr", "value": 'Men'}, {"type": "LiteralStr", "value": 'Women'}], "values": [
										{"type": "NumType"}, 
										{"type": "NumType"}, 
										{"type": "NumType"}]}]}, 
								{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Counts'}, {"type": "LiteralStr", "value": 'Participation Rate'}], "values": [
									{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'All'}, {"type": "LiteralStr", "value": 'Men'}, {"type": "LiteralStr", "value": 'Women'}], "values": [
										{"type": "NumType"}, 
										{"type": "NumType"}, 
										{"type": "NumType"}]}, 
									{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'All'}, {"type": "LiteralStr", "value": 'Men'}, {"type": "LiteralStr", "value": 'Women'}], "values": [
										{"type": "NumType"}, 
										{"type": "NumType"}, 
										{"type": "NumType"}]}]}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Asian'}, {"type": "LiteralStr", "value": 'Black or African American'}, {"type": "LiteralStr", "value": 'White'}], "values": [
								{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Counts'}, {"type": "LiteralStr", "value": 'Unemployment Rate'}], "values": [
									{"type": "NumType"}, 
									{"type": "NumType"}]}, 
								{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Counts'}, {"type": "LiteralStr", "value": 'Employment-Population Ratio'}], "values": [
									{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'All'}, {"type": "LiteralStr", "value": 'Men'}, {"type": "LiteralStr", "value": 'Women'}], "values": [
										{"type": "NumType"}, 
										{"type": "NumType"}, 
										{"type": "NumType"}]}, 
									{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'All'}, {"type": "LiteralStr", "value": 'Men'}, {"type": "LiteralStr", "value": 'Women'}], "values": [
										{"type": "NumType"}, 
										{"type": "NumType"}, 
										{"type": "NumType"}]}]}, 
								{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Counts'}, {"type": "LiteralStr", "value": 'Employment-Population Ratio'}], "values": [
									{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'All'}, {"type": "LiteralStr", "value": 'Men'}, {"type": "LiteralStr", "value": 'Women'}], "values": [
										{"type": "NumType"}, 
										{"type": "NumType"}, 
										{"type": "NumType"}]}, 
									{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'All'}, {"type": "LiteralStr", "value": 'Men'}, {"type": "LiteralStr", "value": 'Women'}], "values": [
										{"type": "NumType"}, 
										{"type": "NumType"}, 
										{"type": "NumType"}]}]}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Asian'}, {"type": "LiteralStr", "value": 'Black or African American'}, {"type": "LiteralStr", "value": 'White'}], "values": [
								{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Counts'}, {"type": "LiteralStr", "value": 'Unemployment Rate'}], "values": [
									{"type": "NumType"}, 
									{"type": "NumType"}]}, 
								{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Counts'}, {"type": "LiteralStr", "value": 'Unemployment Rate'}], "values": [
									{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'All'}, {"type": "LiteralStr", "value": 'Men'}, {"type": "LiteralStr", "value": 'Women'}], "values": [
										{"type": "NumType"}, 
										{"type": "NumType"}, 
										{"type": "NumType"}]}, 
									{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'All'}, {"type": "LiteralStr", "value": 'Men'}, {"type": "LiteralStr", "value": 'Women'}], "values": [
										{"type": "NumType"}, 
										{"type": "NumType"}, 
										{"type": "NumType"}]}]}, 
								{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Counts'}, {"type": "LiteralStr", "value": 'Unemployment Rate'}], "values": [
									{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'All'}, {"type": "LiteralStr", "value": 'Men'}, {"type": "LiteralStr", "value": 'Women'}], "values": [
										{"type": "NumType"}, 
										{"type": "NumType"}, 
										{"type": "NumType"}]}, 
									{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'All'}, {"type": "LiteralStr", "value": 'Men'}, {"type": "LiteralStr", "value": 'Women'}], "values": [
										{"type": "NumType"}, 
										{"type": "NumType"}, 
										{"type": "NumType"}]}]}]}]}]}}
            },
        }
    });
    });

    return mod;
}