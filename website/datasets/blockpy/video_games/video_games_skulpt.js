

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
        var dataset = blockpy._IMPORTED_DATASETS["video_games"];
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

    mod.get_video_game = new Sk.builtin.func(function() {
        Sk.builtin.pyCheckArgs("get_video_game", arguments, 0, 0);
        if (!("video_games" in blockpy._IMPORTED_COMPLETE_DATASETS)) {
            alert("This library has not finished loading yet. Please wait about 10 seconds and try again.")
        } else {
            return Sk.ffi.remapToPy(blockpy._IMPORTED_COMPLETE_DATASETS["video_games"]);
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
            'get_video_game': {
                "type": "FunctionType",
                "name": 'get_video_game',
                "returns": 
				{"type": "ListType", "subtype": 
					{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Title'}, {"type": "LiteralStr", "value": 'Features'}, {"type": "LiteralStr", "value": 'Metadata'}, {"type": "LiteralStr", "value": 'Metrics'}, {"type": "LiteralStr", "value": 'Release'}, {"type": "LiteralStr", "value": 'Length'}], "values": [
						{"type": "StrType"}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Handheld?'}, {"type": "LiteralStr", "value": 'Max Players'}, {"type": "LiteralStr", "value": 'Multiplatform?'}, {"type": "LiteralStr", "value": 'Online?'}], "values": [
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Genres'}, {"type": "LiteralStr", "value": 'Licensed?'}, {"type": "LiteralStr", "value": 'Publishers'}, {"type": "LiteralStr", "value": 'Sequel?'}], "values": [
							{"type": "StrType"}, 
							{"type": "NumType"}, 
							{"type": "StrType"}, 
							{"type": "NumType"}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Review Score'}, {"type": "LiteralStr", "value": 'Sales'}, {"type": "LiteralStr", "value": 'Used Price'}], "values": [
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Console'}, {"type": "LiteralStr", "value": 'Rating'}, {"type": "LiteralStr", "value": 'Re-release?'}, {"type": "LiteralStr", "value": 'Year'}], "values": [
							{"type": "StrType"}, 
							{"type": "StrType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'All PlayStyles'}, {"type": "LiteralStr", "value": 'Completionists'}, {"type": "LiteralStr", "value": 'Main + Extras'}, {"type": "LiteralStr", "value": 'Main Story'}], "values": [
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Average'}, {"type": "LiteralStr", "value": 'Leisure'}, {"type": "LiteralStr", "value": 'Median'}, {"type": "LiteralStr", "value": 'Polled'}, {"type": "LiteralStr", "value": 'Rushed'}], "values": [
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Average'}, {"type": "LiteralStr", "value": 'Leisure'}, {"type": "LiteralStr", "value": 'Median'}, {"type": "LiteralStr", "value": 'Polled'}, {"type": "LiteralStr", "value": 'Rushed'}], "values": [
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Average'}, {"type": "LiteralStr", "value": 'Leisure'}, {"type": "LiteralStr", "value": 'Median'}, {"type": "LiteralStr", "value": 'Polled'}, {"type": "LiteralStr", "value": 'Rushed'}], "values": [
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Average'}, {"type": "LiteralStr", "value": 'Leisure'}, {"type": "LiteralStr", "value": 'Median'}, {"type": "LiteralStr", "value": 'Polled'}, {"type": "LiteralStr", "value": 'Rushed'}], "values": [
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