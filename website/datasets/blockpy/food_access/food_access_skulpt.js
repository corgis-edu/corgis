

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
        var dataset = blockpy._IMPORTED_DATASETS["food_access"];
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

    mod.get_record = new Sk.builtin.func(function() {
        Sk.builtin.pyCheckArgs("get_record", arguments, 0, 0);
        if (!("food_access" in blockpy._IMPORTED_DATASETS)) {
            alert("This library has not finished loading yet. Please wait about 10 seconds and try again.")
        } else {
            return Sk.ffi.remapToPy(blockpy._IMPORTED_DATASETS["food_access"]);
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
            'get_record': {
                "type": "FunctionType",
                "name": 'get_record',
                "returns": 
				{"type": "ListType", "subtype": 
					{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'County'}, {"type": "LiteralStr", "value": 'Population'}, {"type": "LiteralStr", "value": 'State'}, {"type": "LiteralStr", "value": 'Housing Data'}, {"type": "LiteralStr", "value": 'Vehicle Access'}, {"type": "LiteralStr", "value": 'Low Access Numbers'}, {"type": "LiteralStr", "value": 'Low Access Percents'}], "values": [
						{"type": "StrType"}, 
						{"type": "NumType"}, 
						{"type": "StrType"}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Residing in Group Quarters'}, {"type": "LiteralStr", "value": 'Rural Housing Percentage'}, {"type": "LiteralStr", "value": 'Total Housing Units'}, {"type": "LiteralStr", "value": 'Urban Housing Percentage'}], "values": [
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": '1 Mile'}, {"type": "LiteralStr", "value": '1/2 Mile'}, {"type": "LiteralStr", "value": '10 Miles'}, {"type": "LiteralStr", "value": '20 Miles'}], "values": [
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Children'}, {"type": "LiteralStr", "value": 'Low Income People'}, {"type": "LiteralStr", "value": 'People'}, {"type": "LiteralStr", "value": 'Seniors'}], "values": [
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": '1 Mile'}, {"type": "LiteralStr", "value": '1/2 Mile'}, {"type": "LiteralStr", "value": '10 Miles'}, {"type": "LiteralStr", "value": '20 Miles'}], "values": [
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": '1 Mile'}, {"type": "LiteralStr", "value": '1/2 Mile'}, {"type": "LiteralStr", "value": '10 Miles'}, {"type": "LiteralStr", "value": '20 Miles'}], "values": [
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": '1 Mile'}, {"type": "LiteralStr", "value": '1/2 Mile'}, {"type": "LiteralStr", "value": '10 Miles'}, {"type": "LiteralStr", "value": '20 Miles'}], "values": [
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": '1 Mile'}, {"type": "LiteralStr", "value": '1/2 Mile'}, {"type": "LiteralStr", "value": '10 Miles'}, {"type": "LiteralStr", "value": '20 Miles'}], "values": [
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}]}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Low Access Only'}, {"type": "LiteralStr", "value": 'Low Income and Low Access'}], "values": [
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": '1 and 20 Miles'}, {"type": "LiteralStr", "value": '1/2 and 10 Miles'}], "values": [
								{"type": "NumType"}, 
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": '1 and 20 Miles'}, {"type": "LiteralStr", "value": '1/2 and 10 Miles'}], "values": [
								{"type": "NumType"}, 
								{"type": "NumType"}]}]}]}}
            },
        }
    });
    });

    return mod;
}