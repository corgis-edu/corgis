

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
        var dataset = blockpy._IMPORTED_DATASETS["astronauts"];
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

    mod.get_mission = new Sk.builtin.func(function() {
        Sk.builtin.pyCheckArgs("get_mission", arguments, 0, 0);
        if (!("astronauts" in blockpy._IMPORTED_COMPLETE_DATASETS)) {
            alert("This library has not finished loading yet. Please wait about 10 seconds and try again.")
        } else {
            return Sk.ffi.remapToPy(blockpy._IMPORTED_COMPLETE_DATASETS["astronauts"]);
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
            'get_mission': {
                "type": "FunctionType",
                "name": 'get_mission',
                "returns": 
				{"type": "ListType", "subtype": 
					{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Profile'}, {"type": "LiteralStr", "value": 'Mission'}], "values": [
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Astronaut Numbers'}, {"type": "LiteralStr", "value": 'Name'}, {"type": "LiteralStr", "value": 'Gender'}, {"type": "LiteralStr", "value": 'Birth Year'}, {"type": "LiteralStr", "value": 'Nationality'}, {"type": "LiteralStr", "value": 'Military'}, {"type": "LiteralStr", "value": 'Selection'}, {"type": "LiteralStr", "value": 'Lifetime Statistics'}], "values": [
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Overall'}, {"type": "LiteralStr", "value": 'Nationwide'}], "values": [
								{"type": "NumType"}, 
								{"type": "NumType"}]}, 
							{"type": "StrType"}, 
							{"type": "StrType"}, 
							{"type": "NumType"}, 
							{"type": "StrType"}, 
							{"type": "NumType"}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Group'}, {"type": "LiteralStr", "value": 'Year'}], "values": [
								{"type": "StrType"}, 
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Mission count'}, {"type": "LiteralStr", "value": 'Mission duration'}, {"type": "LiteralStr", "value": 'EVA duration'}], "values": [
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}]}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Role'}, {"type": "LiteralStr", "value": 'Year'}, {"type": "LiteralStr", "value": 'Name'}, {"type": "LiteralStr", "value": 'Vechicles'}, {"type": "LiteralStr", "value": 'Durations'}], "values": [
							{"type": "StrType"}, 
							{"type": "NumType"}, 
							{"type": "StrType"}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Ascent'}, {"type": "LiteralStr", "value": 'Orbit'}, {"type": "LiteralStr", "value": 'Decent'}], "values": [
								{"type": "StrType"}, 
								{"type": "StrType"}, 
								{"type": "StrType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Mission duration'}, {"type": "LiteralStr", "value": 'EVA duration'}], "values": [
								{"type": "NumType"}, 
								{"type": "NumType"}]}]}]}}
            },
        }
    });
    });

    return mod;
}