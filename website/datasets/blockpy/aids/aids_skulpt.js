

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
        var dataset = blockpy._IMPORTED_DATASETS["aids"];
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
					{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Country'}, {"type": "LiteralStr", "value": 'Year'}, {"type": "LiteralStr", "value": 'Data'}], "values": [
						{"type": "StrType"}, 
						{"type": "NumType"}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'AIDS-Related Deaths'}, {"type": "LiteralStr", "value": 'HIV Prevalence'}, {"type": "LiteralStr", "value": 'New HIV Infections'}, {"type": "LiteralStr", "value": 'People Living with HIV'}], "values": [
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'AIDS Orphans'}, {"type": "LiteralStr", "value": 'Adults'}, {"type": "LiteralStr", "value": 'All Ages'}, {"type": "LiteralStr", "value": 'Children'}, {"type": "LiteralStr", "value": 'Female Adults'}, {"type": "LiteralStr", "value": 'Male Adults'}], "values": [
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Adults'}, {"type": "LiteralStr", "value": 'Young Men'}, {"type": "LiteralStr", "value": 'Young Women'}], "values": [
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Adults'}, {"type": "LiteralStr", "value": 'All Ages'}, {"type": "LiteralStr", "value": 'Children'}, {"type": "LiteralStr", "value": 'Female Adults'}, {"type": "LiteralStr", "value": 'Incidence Rate Among Adults'}, {"type": "LiteralStr", "value": 'Male Adults'}], "values": [
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Adults'}, {"type": "LiteralStr", "value": 'Children'}, {"type": "LiteralStr", "value": 'Female Adults'}, {"type": "LiteralStr", "value": 'Male Adults'}, {"type": "LiteralStr", "value": 'Total'}], "values": [
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}]}]}]}}
            },
        }
    });
    });

    return mod;
}