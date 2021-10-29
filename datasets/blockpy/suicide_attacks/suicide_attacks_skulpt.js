

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

    mod.get_attack = new Sk.builtin.func(function() {
        Sk.builtin.pyCheckArgs("get_attack", arguments, 0, 0);
        if (!("suicide_attacks" in blockpy._IMPORTED_COMPLETE_DATASETS)) {
            alert("This library has not finished loading yet. Please wait about 10 seconds and try again.")
        } else {
            return Sk.ffi.remapToPy(blockpy._IMPORTED_COMPLETE_DATASETS["suicide_attacks"]);
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
            'get_attack': {
                "type": "FunctionType",
                "name": 'get_attack',
                "returns": 
				{"type": "ListType", "subtype": 
					{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'groups'}, {"type": "LiteralStr", "value": 'claim'}, {"type": "LiteralStr", "value": 'status'}, {"type": "LiteralStr", "value": 'statistics'}, {"type": "LiteralStr", "value": 'date'}, {"type": "LiteralStr", "value": 'target'}, {"type": "LiteralStr", "value": 'attacker'}], "values": [
						{"type": "StrType"}, 
						{"type": "StrType"}, 
						{"type": "StrType"}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'sources'}, {"type": "LiteralStr", "value": '# wounded_low'}, {"type": "LiteralStr", "value": '# wounded_high'}, {"type": "LiteralStr", "value": '# killed_low'}, {"type": "LiteralStr", "value": '# killed_high'}, {"type": "LiteralStr", "value": '# killed_low_civilian'}, {"type": "LiteralStr", "value": '# killed_high_civilian'}, {"type": "LiteralStr", "value": '# killed_low_political'}, {"type": "LiteralStr", "value": '# killed_high_political'}, {"type": "LiteralStr", "value": '# killed_low_security'}, {"type": "LiteralStr", "value": '# killed_high_security'}, {"type": "LiteralStr", "value": '# belt_bomb'}, {"type": "LiteralStr", "value": '# truck_bomb'}, {"type": "LiteralStr", "value": '# car_bomb'}, {"type": "LiteralStr", "value": '# weapon_oth'}, {"type": "LiteralStr", "value": '# weapon_unk'}, {"type": "LiteralStr", "value": '# attackers'}, {"type": "LiteralStr", "value": '# female_attackers'}, {"type": "LiteralStr", "value": '# male_attackers'}, {"type": "LiteralStr", "value": '# unknown_attackers'}], "values": [
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
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'year'}, {"type": "LiteralStr", "value": 'month'}, {"type": "LiteralStr", "value": 'day'}], "values": [
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'weapon'}, {"type": "LiteralStr", "value": 'region'}, {"type": "LiteralStr", "value": 'subregion'}, {"type": "LiteralStr", "value": 'country'}, {"type": "LiteralStr", "value": 'province'}, {"type": "LiteralStr", "value": 'city'}, {"type": "LiteralStr", "value": 'location'}, {"type": "LiteralStr", "value": 'latitude'}, {"type": "LiteralStr", "value": 'longtitude'}, {"type": "LiteralStr", "value": 'desc'}, {"type": "LiteralStr", "value": 'type'}, {"type": "LiteralStr", "value": 'nationality'}], "values": [
							{"type": "StrType"}, 
							{"type": "StrType"}, 
							{"type": "StrType"}, 
							{"type": "StrType"}, 
							{"type": "StrType"}, 
							{"type": "StrType"}, 
							{"type": "StrType"}, 
							{"type": "StrType"}, 
							{"type": "StrType"}, 
							{"type": "StrType"}, 
							{"type": "StrType"}, 
							{"type": "StrType"}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'gender'}], "values": [
							{"type": "StrType"}]}]}}
            },
        }
    });
    });

    return mod;
}