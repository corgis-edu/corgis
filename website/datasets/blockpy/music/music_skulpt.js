

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
        var dataset = blockpy._IMPORTED_DATASETS["music"];
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
            'get_music': {
                "type": "FunctionType",
                "name": 'get_music',
                "returns": 
				{"type": "ListType", "subtype": 
					{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'artist'}, {"type": "LiteralStr", "value": 'release'}, {"type": "LiteralStr", "value": 'song'}], "values": [
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'familiarity'}, {"type": "LiteralStr", "value": 'hotttnesss'}, {"type": "LiteralStr", "value": 'id'}, {"type": "LiteralStr", "value": 'latitude'}, {"type": "LiteralStr", "value": 'location'}, {"type": "LiteralStr", "value": 'longitude'}, {"type": "LiteralStr", "value": 'name'}, {"type": "LiteralStr", "value": 'similar'}, {"type": "LiteralStr", "value": 'terms'}, {"type": "LiteralStr", "value": 'terms_freq'}], "values": [
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "StrType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "StrType"}, 
							{"type": "NumType"}, 
							{"type": "StrType"}, 
							{"type": "NumType"}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'id'}, {"type": "LiteralStr", "value": 'name'}], "values": [
							{"type": "NumType"}, 
							{"type": "NumType"}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'artist_mbtags'}, {"type": "LiteralStr", "value": 'artist_mbtags_count'}, {"type": "LiteralStr", "value": 'bars_confidence'}, {"type": "LiteralStr", "value": 'bars_start'}, {"type": "LiteralStr", "value": 'beats_confidence'}, {"type": "LiteralStr", "value": 'beats_start'}, {"type": "LiteralStr", "value": 'duration'}, {"type": "LiteralStr", "value": 'end_of_fade_in'}, {"type": "LiteralStr", "value": 'hotttnesss'}, {"type": "LiteralStr", "value": 'id'}, {"type": "LiteralStr", "value": 'key'}, {"type": "LiteralStr", "value": 'key_confidence'}, {"type": "LiteralStr", "value": 'loudness'}, {"type": "LiteralStr", "value": 'mode'}, {"type": "LiteralStr", "value": 'mode_confidence'}, {"type": "LiteralStr", "value": 'start_of_fade_out'}, {"type": "LiteralStr", "value": 'tatums_confidence'}, {"type": "LiteralStr", "value": 'tatums_start'}, {"type": "LiteralStr", "value": 'tempo'}, {"type": "LiteralStr", "value": 'time_signature'}, {"type": "LiteralStr", "value": 'time_signature_confidence'}, {"type": "LiteralStr", "value": 'title'}, {"type": "LiteralStr", "value": 'year'}], "values": [
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "StrType"}, 
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
							{"type": "NumType"}]}]}}
            },
        }
    });
    });

    return mod;
}