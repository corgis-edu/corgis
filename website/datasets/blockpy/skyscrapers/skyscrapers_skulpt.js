

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
        var dataset = blockpy._IMPORTED_DATASETS["skyscrapers"];
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

    mod.get_skyscraper = new Sk.builtin.func(function() {
        Sk.builtin.pyCheckArgs("get_skyscraper", arguments, 0, 0);
        if (!("skyscrapers" in blockpy._IMPORTED_DATASETS)) {
            alert("This library has not finished loading yet. Please wait about 10 seconds and try again.")
        } else {
            return Sk.ffi.remapToPy(blockpy._IMPORTED_DATASETS["skyscrapers"]);
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
            'get_skyscraper': {
                "type": "FunctionType",
                "name": 'get_skyscraper',
                "returns": 
				{"type": "ListType", "subtype": 
					{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'id'}, {"type": "LiteralStr", "value": 'material'}, {"type": "LiteralStr", "value": 'name'}, {"type": "LiteralStr", "value": 'location'}, {"type": "LiteralStr", "value": 'purposes'}, {"type": "LiteralStr", "value": 'statistics'}, {"type": "LiteralStr", "value": 'status'}], "values": [
						{"type": "NumType"}, 
						{"type": "StrType"}, 
						{"type": "StrType"}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'city'}, {"type": "LiteralStr", "value": 'city_id'}, {"type": "LiteralStr", "value": 'country'}, {"type": "LiteralStr", "value": 'country id'}, {"type": "LiteralStr", "value": 'latitude'}, {"type": "LiteralStr", "value": 'longitude'}], "values": [
							{"type": "StrType"}, 
							{"type": "NumType"}, 
							{"type": "StrType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'abandoned'}, {"type": "LiteralStr", "value": 'air traffic control tower'}, {"type": "LiteralStr", "value": 'belltower'}, {"type": "LiteralStr", "value": 'bridge'}, {"type": "LiteralStr", "value": 'casino'}, {"type": "LiteralStr", "value": 'commercial'}, {"type": "LiteralStr", "value": 'education'}, {"type": "LiteralStr", "value": 'exhibition'}, {"type": "LiteralStr", "value": 'government'}, {"type": "LiteralStr", "value": 'hospital'}, {"type": "LiteralStr", "value": 'hotel'}, {"type": "LiteralStr", "value": 'industrial'}, {"type": "LiteralStr", "value": 'library'}, {"type": "LiteralStr", "value": 'multiple'}, {"type": "LiteralStr", "value": 'museum'}, {"type": "LiteralStr", "value": 'observation'}, {"type": "LiteralStr", "value": 'office'}, {"type": "LiteralStr", "value": 'other'}, {"type": "LiteralStr", "value": 'religious'}, {"type": "LiteralStr", "value": 'residential'}, {"type": "LiteralStr", "value": 'retail'}, {"type": "LiteralStr", "value": 'serviced apartments'}, {"type": "LiteralStr", "value": 'telecommunications'}], "values": [
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'floors above'}, {"type": "LiteralStr", "value": 'height'}, {"type": "LiteralStr", "value": 'number of purposes'}, {"type": "LiteralStr", "value": 'rank'}], "values": [
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'current'}, {"type": "LiteralStr", "value": 'completed'}, {"type": "LiteralStr", "value": 'started'}], "values": [
							{"type": "StrType"}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'is completed'}, {"type": "LiteralStr", "value": 'year'}], "values": [
								{"type": "NumType"}, 
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'is started'}, {"type": "LiteralStr", "value": 'year'}], "values": [
								{"type": "NumType"}, 
								{"type": "NumType"}]}]}]}}
            },
        }
    });
    });

    return mod;
}