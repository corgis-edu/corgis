

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
        var dataset = blockpy._IMPORTED_DATASETS["suicide_attacks"];
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
            'get_attack': {
                "type": "FunctionType",
                "name": 'get_attack',
                "returns": 
				{"type": "ListType", "subtype": 
					{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'groups'}, {"type": "LiteralStr", "value": 'attacker'}, {"type": "LiteralStr", "value": 'campaign'}, {"type": "LiteralStr", "value": 'date'}, {"type": "LiteralStr", "value": 'statistics'}, {"type": "LiteralStr", "value": 'target'}], "values": [
						{"type": "StrType"}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'age'}, {"type": "LiteralStr", "value": 'name'}, {"type": "LiteralStr", "value": 'birth'}, {"type": "LiteralStr", "value": 'demographics'}], "values": [
							{"type": "NumType"}, 
							{"type": "StrType"}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'location'}, {"type": "LiteralStr", "value": 'year'}], "values": [
								{"type": "StrType"}, 
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'education'}, {"type": "LiteralStr", "value": 'gender'}, {"type": "LiteralStr", "value": 'marital'}, {"type": "LiteralStr", "value": 'occupation'}, {"type": "LiteralStr", "value": 'religion'}], "values": [
								{"type": "StrType"}, 
								{"type": "StrType"}, 
								{"type": "StrType"}, 
								{"type": "StrType"}, 
								{"type": "StrType"}]}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'name'}, {"type": "LiteralStr", "value": 'sides'}], "values": [
							{"type": "StrType"}, 
							{"type": "StrType"}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'day'}, {"type": "LiteralStr", "value": 'month'}, {"type": "LiteralStr", "value": 'year'}], "values": [
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": '# killed'}, {"type": "LiteralStr", "value": '# wounded'}], "values": [
							{"type": "NumType"}, 
							{"type": "NumType"}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'assassination?'}, {"type": "LiteralStr", "value": 'country'}, {"type": "LiteralStr", "value": 'location'}, {"type": "LiteralStr", "value": 'name'}, {"type": "LiteralStr", "value": 'type'}, {"type": "LiteralStr", "value": 'weapon'}], "values": [
							{"type": "NumType"}, 
							{"type": "StrType"}, 
							{"type": "StrType"}, 
							{"type": "StrType"}, 
							{"type": "StrType"}, 
							{"type": "StrType"}]}]}}
            },
        }
    });
    });

    return mod;
}