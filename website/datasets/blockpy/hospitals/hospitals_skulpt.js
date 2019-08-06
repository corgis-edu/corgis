

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
        var dataset = _IMPORTED_DATASETS["hospitals"];
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
            'get_hospitals': {
                "type": "FunctionType",
                "name": 'get_hospitals',
                "returns": 
				{"type": "ListType", "subtype": 
					{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Facility'}, {"type": "LiteralStr", "value": 'Rating'}, {"type": "LiteralStr", "value": 'Procedure'}], "values": [
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Name'}, {"type": "LiteralStr", "value": 'City'}, {"type": "LiteralStr", "value": 'State'}, {"type": "LiteralStr", "value": 'Type'}], "values": [
							{"type": "StrType"}, 
							{"type": "StrType"}, 
							{"type": "StrType"}, 
							{"type": "StrType"}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Overall'}, {"type": "LiteralStr", "value": 'Mortality'}, {"type": "LiteralStr", "value": 'Safety'}, {"type": "LiteralStr", "value": 'Readmission'}, {"type": "LiteralStr", "value": 'Experience'}, {"type": "LiteralStr", "value": 'Effectiveness'}, {"type": "LiteralStr", "value": 'Timeliness'}, {"type": "LiteralStr", "value": 'Imaging'}], "values": [
							{"type": "NumType"}, 
							{"type": "StrType"}, 
							{"type": "StrType"}, 
							{"type": "StrType"}, 
							{"type": "StrType"}, 
							{"type": "StrType"}, 
							{"type": "StrType"}, 
							{"type": "StrType"}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Heart Attack'}, {"type": "LiteralStr", "value": 'Heart Failure'}, {"type": "LiteralStr", "value": 'Pneumonia'}, {"type": "LiteralStr", "value": 'Hip Knee'}], "values": [
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Cost'}, {"type": "LiteralStr", "value": 'Quality'}, {"type": "LiteralStr", "value": 'Value'}], "values": [
								{"type": "NumType"}, 
								{"type": "StrType"}, 
								{"type": "StrType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Cost'}, {"type": "LiteralStr", "value": 'Quality'}, {"type": "LiteralStr", "value": 'Value'}], "values": [
								{"type": "NumType"}, 
								{"type": "StrType"}, 
								{"type": "StrType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Cost'}, {"type": "LiteralStr", "value": 'Quality'}, {"type": "LiteralStr", "value": 'Value'}], "values": [
								{"type": "NumType"}, 
								{"type": "StrType"}, 
								{"type": "StrType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Cost'}, {"type": "LiteralStr", "value": 'Quality'}, {"type": "LiteralStr", "value": 'Value'}], "values": [
								{"type": "NumType"}, 
								{"type": "StrType"}, 
								{"type": "StrType"}]}]}]}}
            },
        }
    });
    });

    return mod;
}