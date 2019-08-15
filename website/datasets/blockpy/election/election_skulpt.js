

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
        var dataset = blockpy._IMPORTED_DATASETS["election"];
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
            'get_result': {
                "type": "FunctionType",
                "name": 'get_result',
                "returns": 
				{"type": "ListType", "subtype": 
					{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Location'}, {"type": "LiteralStr", "value": 'Vote Data'}], "values": [
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'County'}, {"type": "LiteralStr", "value": 'State'}, {"type": "LiteralStr", "value": 'State Abbreviation'}], "values": [
							{"type": "StrType"}, 
							{"type": "StrType"}, 
							{"type": "StrType"}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Ben Carson'}, {"type": "LiteralStr", "value": 'Bernie Sanders'}, {"type": "LiteralStr", "value": 'Carly Fiorina'}, {"type": "LiteralStr", "value": 'Chris Christie'}, {"type": "LiteralStr", "value": 'Donald Trump'}, {"type": "LiteralStr", "value": 'Hillary Clinton'}, {"type": "LiteralStr", "value": 'Jeb Bush'}, {"type": "LiteralStr", "value": 'John Kasich'}, {"type": "LiteralStr", "value": 'Marco Rubio'}, {"type": "LiteralStr", "value": "Martin O'Malley"}, {"type": "LiteralStr", "value": 'Mike Huckabee'}, {"type": "LiteralStr", "value": 'No Preference'}, {"type": "LiteralStr", "value": 'Rand Paul'}, {"type": "LiteralStr", "value": 'Rick Santorum'}, {"type": "LiteralStr", "value": 'Ted Cruz'}, {"type": "LiteralStr", "value": 'Uncommitted'}], "values": [
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Number of Votes'}, {"type": "LiteralStr", "value": 'Party'}, {"type": "LiteralStr", "value": 'Percent of Votes'}], "values": [
								{"type": "NumType"}, 
								{"type": "StrType"}, 
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Number of Votes'}, {"type": "LiteralStr", "value": 'Party'}, {"type": "LiteralStr", "value": 'Percent of Votes'}], "values": [
								{"type": "NumType"}, 
								{"type": "StrType"}, 
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Number of Votes'}, {"type": "LiteralStr", "value": 'Party'}, {"type": "LiteralStr", "value": 'Percent of Votes'}], "values": [
								{"type": "NumType"}, 
								{"type": "StrType"}, 
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Number of Votes'}, {"type": "LiteralStr", "value": 'Party'}, {"type": "LiteralStr", "value": 'Percent of Votes'}], "values": [
								{"type": "NumType"}, 
								{"type": "StrType"}, 
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Number of Votes'}, {"type": "LiteralStr", "value": 'Party'}, {"type": "LiteralStr", "value": 'Percent of Votes'}], "values": [
								{"type": "NumType"}, 
								{"type": "StrType"}, 
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Number of Votes'}, {"type": "LiteralStr", "value": 'Party'}, {"type": "LiteralStr", "value": 'Percent of Votes'}], "values": [
								{"type": "NumType"}, 
								{"type": "StrType"}, 
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Number of Votes'}, {"type": "LiteralStr", "value": 'Party'}, {"type": "LiteralStr", "value": 'Percent of Votes'}], "values": [
								{"type": "NumType"}, 
								{"type": "StrType"}, 
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Number of Votes'}, {"type": "LiteralStr", "value": 'Party'}, {"type": "LiteralStr", "value": 'Percent of Votes'}], "values": [
								{"type": "NumType"}, 
								{"type": "StrType"}, 
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Number of Votes'}, {"type": "LiteralStr", "value": 'Party'}, {"type": "LiteralStr", "value": 'Percent of Votes'}], "values": [
								{"type": "NumType"}, 
								{"type": "StrType"}, 
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Number of Votes'}, {"type": "LiteralStr", "value": 'Party'}, {"type": "LiteralStr", "value": 'Percent of Votes'}], "values": [
								{"type": "NumType"}, 
								{"type": "StrType"}, 
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Number of Votes'}, {"type": "LiteralStr", "value": 'Party'}, {"type": "LiteralStr", "value": 'Percent of Votes'}], "values": [
								{"type": "NumType"}, 
								{"type": "StrType"}, 
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Number of Votes'}, {"type": "LiteralStr", "value": 'Party'}, {"type": "LiteralStr", "value": 'Percent of Votes'}], "values": [
								{"type": "NumType"}, 
								{"type": "StrType"}, 
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Number of Votes'}, {"type": "LiteralStr", "value": 'Party'}, {"type": "LiteralStr", "value": 'Percent of Votes'}], "values": [
								{"type": "NumType"}, 
								{"type": "StrType"}, 
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Number of Votes'}, {"type": "LiteralStr", "value": 'Party'}, {"type": "LiteralStr", "value": 'Percent of Votes'}], "values": [
								{"type": "NumType"}, 
								{"type": "StrType"}, 
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Number of Votes'}, {"type": "LiteralStr", "value": 'Party'}, {"type": "LiteralStr", "value": 'Percent of Votes'}], "values": [
								{"type": "NumType"}, 
								{"type": "StrType"}, 
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Number of Votes'}, {"type": "LiteralStr", "value": 'Party'}, {"type": "LiteralStr", "value": 'Percent of Votes'}], "values": [
								{"type": "NumType"}, 
								{"type": "StrType"}, 
								{"type": "NumType"}]}]}]}}
            },
        }
    });
    });

    return mod;
}