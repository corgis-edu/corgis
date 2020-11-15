

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
        var dataset = blockpy._IMPORTED_DATASETS["billionaires"];
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

    mod.get_billionaire = new Sk.builtin.func(function() {
        Sk.builtin.pyCheckArgs("get_billionaire", arguments, 0, 0);
        if (!("billionaires" in blockpy._IMPORTED_COMPLETE_DATASETS)) {
            alert("This library has not finished loading yet. Please wait about 10 seconds and try again.")
        } else {
            return Sk.ffi.remapToPy(blockpy._IMPORTED_COMPLETE_DATASETS["billionaires"]);
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
            'get_billionaire': {
                "type": "FunctionType",
                "name": 'get_billionaire',
                "returns": 
				{"type": "ListType", "subtype": 
					{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'name'}, {"type": "LiteralStr", "value": 'rank'}, {"type": "LiteralStr", "value": 'year'}, {"type": "LiteralStr", "value": 'company'}, {"type": "LiteralStr", "value": 'demographics'}, {"type": "LiteralStr", "value": 'location'}, {"type": "LiteralStr", "value": 'wealth'}], "values": [
						{"type": "StrType"}, 
						{"type": "NumType"}, 
						{"type": "NumType"}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'founded'}, {"type": "LiteralStr", "value": 'name'}, {"type": "LiteralStr", "value": 'relationship'}, {"type": "LiteralStr", "value": 'sector'}, {"type": "LiteralStr", "value": 'type'}], "values": [
							{"type": "NumType"}, 
							{"type": "StrType"}, 
							{"type": "StrType"}, 
							{"type": "StrType"}, 
							{"type": "StrType"}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'age'}, {"type": "LiteralStr", "value": 'gender'}], "values": [
							{"type": "NumType"}, 
							{"type": "StrType"}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'citizenship'}, {"type": "LiteralStr", "value": 'country code'}, {"type": "LiteralStr", "value": 'gdp'}, {"type": "LiteralStr", "value": 'region'}], "values": [
							{"type": "StrType"}, 
							{"type": "StrType"}, 
							{"type": "NumType"}, 
							{"type": "StrType"}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'type'}, {"type": "LiteralStr", "value": 'worth in billions'}, {"type": "LiteralStr", "value": 'how'}], "values": [
							{"type": "StrType"}, 
							{"type": "NumType"}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'category'}, {"type": "LiteralStr", "value": 'from emerging'}, {"type": "LiteralStr", "value": 'industry'}, {"type": "LiteralStr", "value": 'inherited'}, {"type": "LiteralStr", "value": 'was founder'}, {"type": "LiteralStr", "value": 'was political'}], "values": [
								{"type": "StrType"}, 
								{"type": "NumType"}, 
								{"type": "StrType"}, 
								{"type": "StrType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}]}]}]}}
            },
        }
    });
    });

    return mod;
}