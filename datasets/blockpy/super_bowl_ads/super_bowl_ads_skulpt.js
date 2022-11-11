

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
        var dataset = blockpy._IMPORTED_DATASETS["super_bowl_ads"];
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

    mod.get_advert = new Sk.builtin.func(function() {
        Sk.builtin.pyCheckArgs("get_advert", arguments, 0, 0);
        if (!("super_bowl_ads" in blockpy._IMPORTED_COMPLETE_DATASETS)) {
            alert("This library has not finished loading yet. Please wait about 10 seconds and try again.")
        } else {
            return Sk.ffi.remapToPy(blockpy._IMPORTED_COMPLETE_DATASETS["super_bowl_ads"]);
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
            'get_advert': {
                "type": "FunctionType",
                "name": 'get_advert',
                "returns": 
				{"type": "ListType", "subtype": 
					{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Year'}, {"type": "LiteralStr", "value": 'Brand'}, {"type": "LiteralStr", "value": 'Data'}], "values": [
						{"type": "NumType"}, 
						{"type": "StrType"}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Content'}, {"type": "LiteralStr", "value": 'Viewership'}, {"type": "LiteralStr", "value": 'Title'}], "values": [
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Funny'}, {"type": "LiteralStr", "value": 'Shows Product'}, {"type": "LiteralStr", "value": 'Patriotic'}, {"type": "LiteralStr", "value": 'Celebrity'}, {"type": "LiteralStr", "value": 'Danger'}, {"type": "LiteralStr", "value": 'Animals'}, {"type": "LiteralStr", "value": 'Sexual'}], "values": [
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Views'}, {"type": "LiteralStr", "value": 'Likes'}, {"type": "LiteralStr", "value": 'Dislikes'}], "values": [
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}]}, 
							{"type": "StrType"}]}]}}
            },
        }
    });
    });

    return mod;
}