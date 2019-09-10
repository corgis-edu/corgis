

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
        var dataset = blockpy._IMPORTED_DATASETS["police_shootings"];
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
            'get_shootings': {
                "type": "FunctionType",
                "name": 'get_shootings',
                "returns": 
				{"type": "ListType", "subtype": 
					{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Person'}, {"type": "LiteralStr", "value": 'Incident'}, {"type": "LiteralStr", "value": 'Factors'}, {"type": "LiteralStr", "value": 'Shooting'}], "values": [
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Name'}, {"type": "LiteralStr", "value": 'Age'}, {"type": "LiteralStr", "value": 'Gender'}, {"type": "LiteralStr", "value": 'Race'}], "values": [
							{"type": "StrType"}, 
							{"type": "NumType"}, 
							{"type": "StrType"}, 
							{"type": "StrType"}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Date'}, {"type": "LiteralStr", "value": 'Location'}], "values": [
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Month'}, {"type": "LiteralStr", "value": 'Day'}, {"type": "LiteralStr", "value": 'Year'}, {"type": "LiteralStr", "value": 'Full'}], "values": [
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "StrType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'City'}, {"type": "LiteralStr", "value": 'State'}], "values": [
								{"type": "StrType"}, 
								{"type": "StrType"}]}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Armed'}, {"type": "LiteralStr", "value": 'Mental-Illness'}, {"type": "LiteralStr", "value": 'Threat-Level'}, {"type": "LiteralStr", "value": 'Fleeing'}], "values": [
							{"type": "StrType"}, 
							{"type": "NumType"}, 
							{"type": "StrType"}, 
							{"type": "StrType"}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Manner'}, {"type": "LiteralStr", "value": 'Body-Camera'}], "values": [
							{"type": "StrType"}, 
							{"type": "NumType"}]}]}}
            },
        }
    });
    });

    return mod;
}