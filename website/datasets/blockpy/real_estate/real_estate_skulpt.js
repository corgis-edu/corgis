

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
        var dataset = blockpy._IMPORTED_DATASETS["real_estate"];
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

    mod.get_building = new Sk.builtin.func(function() {
        Sk.builtin.pyCheckArgs("get_building", arguments, 0, 0);
        if (!("real_estate" in blockpy._IMPORTED_DATASETS)) {
            alert("This library has not finished loading yet. Please wait about 10 seconds and try again.")
        } else {
            return blockpy._IMPORTED_DATASETS["real_estate"];
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
            'get_building': {
                "type": "FunctionType",
                "name": 'get_building',
                "returns": 
				{"type": "ListType", "subtype": 
					{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'data'}, {"type": "LiteralStr", "value": 'location'}], "values": [
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'date'}, {"type": "LiteralStr", "value": 'owned or leased'}, {"type": "LiteralStr", "value": 'parking spaces'}, {"type": "LiteralStr", "value": 'status'}, {"type": "LiteralStr", "value": 'type'}, {"type": "LiteralStr", "value": 'disabilities'}, {"type": "LiteralStr", "value": 'history'}], "values": [
							{"type": "StrType"}, 
							{"type": "StrType"}, 
							{"type": "NumType"}, 
							{"type": "StrType"}, 
							{"type": "StrType"}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'ADA Accessible'}, {"type": "LiteralStr", "value": 'ansi usable'}], "values": [
								{"type": "StrType"}, 
								{"type": "StrType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'status'}, {"type": "LiteralStr", "value": 'type'}], "values": [
								{"type": "StrType"}, 
								{"type": "StrType"}]}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'congressional district'}, {"type": "LiteralStr", "value": 'id'}, {"type": "LiteralStr", "value": 'region id'}, {"type": "LiteralStr", "value": 'address'}], "values": [
							{"type": "StrType"}, 
							{"type": "StrType"}, 
							{"type": "StrType"}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'city'}, {"type": "LiteralStr", "value": 'county'}, {"type": "LiteralStr", "value": 'line 1'}, {"type": "LiteralStr", "value": 'line 2'}, {"type": "LiteralStr", "value": 'state'}, {"type": "LiteralStr", "value": 'zip'}], "values": [
								{"type": "StrType"}, 
								{"type": "StrType"}, 
								{"type": "StrType"}, 
								{"type": "StrType"}, 
								{"type": "StrType"}, 
								{"type": "StrType"}]}]}]}}
            },
        }
    });
    });

    return mod;
}