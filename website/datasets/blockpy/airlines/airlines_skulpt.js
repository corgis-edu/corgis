

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
        var dataset = blockpy._IMPORTED_DATASETS["airlines"];
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
            'get_airports': {
                "type": "FunctionType",
                "name": 'get_airports',
                "returns": 
				{"type": "ListType", "subtype": 
					{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Airport'}, {"type": "LiteralStr", "value": 'Time'}, {"type": "LiteralStr", "value": 'Statistics'}], "values": [
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Code'}, {"type": "LiteralStr", "value": 'Name'}], "values": [
							{"type": "StrType"}, 
							{"type": "StrType"}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Label'}, {"type": "LiteralStr", "value": 'Month'}, {"type": "LiteralStr", "value": 'Month Name'}, {"type": "LiteralStr", "value": 'Year'}], "values": [
							{"type": "StrType"}, 
							{"type": "NumType"}, 
							{"type": "StrType"}, 
							{"type": "NumType"}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": '# of Delays'}, {"type": "LiteralStr", "value": 'Carriers'}, {"type": "LiteralStr", "value": 'Flights'}, {"type": "LiteralStr", "value": 'Minutes Delayed'}], "values": [
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Carrier'}, {"type": "LiteralStr", "value": 'Late Aircraft'}, {"type": "LiteralStr", "value": 'National Aviation System'}, {"type": "LiteralStr", "value": 'Security'}, {"type": "LiteralStr", "value": 'Weather'}], "values": [
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Names'}, {"type": "LiteralStr", "value": 'Total'}], "values": [
								{"type": "StrType"}, 
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Cancelled'}, {"type": "LiteralStr", "value": 'Delayed'}, {"type": "LiteralStr", "value": 'Diverted'}, {"type": "LiteralStr", "value": 'On Time'}, {"type": "LiteralStr", "value": 'Total'}], "values": [
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Carrier'}, {"type": "LiteralStr", "value": 'Late Aircraft'}, {"type": "LiteralStr", "value": 'National Aviation System'}, {"type": "LiteralStr", "value": 'Security'}, {"type": "LiteralStr", "value": 'Total'}, {"type": "LiteralStr", "value": 'Weather'}], "values": [
								{"type": "NumType"}, 
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