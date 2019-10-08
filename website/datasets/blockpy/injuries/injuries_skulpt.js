

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
        var dataset = blockpy._IMPORTED_DATASETS["injuries"];
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

    mod.get_report = new Sk.builtin.func(function() {
        Sk.builtin.pyCheckArgs("get_report", arguments, 0, 0);
        if (!("injuries" in _IMPORTED_COMPLETE_DATASETS)) {
            alert("This library has not finished loading yet. Please wait about 10 seconds and try again.")
        } else {
            return blockpy._IMPORTED_COMPLETE_DATASETS["injuries"];
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
            'get_report': {
                "type": "FunctionType",
                "name": 'get_report',
                "returns": 
				{"type": "ListType", "subtype": 
					{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'year'}, {"type": "LiteralStr", "value": 'address'}, {"type": "LiteralStr", "value": 'business'}, {"type": "LiteralStr", "value": 'industry'}, {"type": "LiteralStr", "value": 'statistics'}], "values": [
						{"type": "NumType"}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'city'}, {"type": "LiteralStr", "value": 'state'}, {"type": "LiteralStr", "value": 'street'}, {"type": "LiteralStr", "value": 'zip'}], "values": [
							{"type": "StrType"}, 
							{"type": "StrType"}, 
							{"type": "StrType"}, 
							{"type": "NumType"}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'name'}, {"type": "LiteralStr", "value": 'second name'}], "values": [
							{"type": "StrType"}, 
							{"type": "StrType"}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'division'}, {"type": "LiteralStr", "value": 'id'}, {"type": "LiteralStr", "value": 'label'}, {"type": "LiteralStr", "value": 'major_group'}], "values": [
							{"type": "StrType"}, 
							{"type": "NumType"}, 
							{"type": "StrType"}, 
							{"type": "StrType"}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'days away'}, {"type": "LiteralStr", "value": 'days away/restricted/transfer'}, {"type": "LiteralStr", "value": 'total case rate'}], "values": [
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}]}]}}
            },
        }
    });
    });

    return mod;
}