

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
        var dataset = blockpy._IMPORTED_DATASETS["covid-behaviors"];
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

    mod.get_report = new Sk.builtin.func(function() {
        Sk.builtin.pyCheckArgs("get_report", arguments, 0, 0);
        if (!("covid-behaviors" in blockpy._IMPORTED_COMPLETE_DATASETS)) {
            alert("This library has not finished loading yet. Please wait about 10 seconds and try again.")
        } else {
            return Sk.ffi.remapToPy(blockpy._IMPORTED_COMPLETE_DATASETS["covid-behaviors"]);
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
            'get_report': {
                "type": "FunctionType",
                "name": 'get_report',
                "returns": 
				{"type": "ListType", "subtype": 
					{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Country'}, {"type": "LiteralStr", "value": 'Days since outbreak'}, {"type": "LiteralStr", "value": 'Counts'}, {"type": "LiteralStr", "value": 'Scores'}], "values": [
						{"type": "StrType"}, 
						{"type": "NumType"}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Household contacts'}, {"type": "LiteralStr", "value": 'Total contacts'}, {"type": "LiteralStr", "value": 'Times left home'}, {"type": "LiteralStr", "value": 'Handwashes'}], "values": [
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Isolate'}, {"type": "LiteralStr", "value": 'Masks'}, {"type": "LiteralStr", "value": 'Avoidance'}, {"type": "LiteralStr", "value": 'Precautions'}, {"type": "LiteralStr", "value": 'Outlooks'}], "values": [
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Willingness if symptoms'}, {"type": "LiteralStr", "value": 'Willingness if advised'}, {"type": "LiteralStr", "value": 'Difficulty'}], "values": [
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Outside home'}, {"type": "LiteralStr", "value": 'Grocery store'}, {"type": "LiteralStr", "value": 'Clothing store'}, {"type": "LiteralStr", "value": 'Work'}, {"type": "LiteralStr", "value": 'Public transport'}], "values": [
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Symptomatic people'}, {"type": "LiteralStr", "value": 'Going out'}, {"type": "LiteralStr", "value": 'Healthcare settings'}, {"type": "LiteralStr", "value": 'Public transport'}, {"type": "LiteralStr", "value": 'Working outside home'}, {"type": "LiteralStr", "value": 'Children going to school'}, {"type": "LiteralStr", "value": 'Having guests'}, {"type": "LiteralStr", "value": 'Gatherings'}, {"type": "LiteralStr", "value": 'Crowded areas'}, {"type": "LiteralStr", "value": 'Shops'}], "values": [
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Small'}, {"type": "LiteralStr", "value": 'Medium'}, {"type": "LiteralStr", "value": 'Large'}], "values": [
									{"type": "NumType"}, 
									{"type": "NumType"}, 
									{"type": "NumType"}]}, 
								{"type": "NumType"}, 
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Cleaned surfaces'}, {"type": "LiteralStr", "value": 'Covered mouth sneeze'}, {"type": "LiteralStr", "value": 'Used hand sanitiser'}], "values": [
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Covid is dangerous'}, {"type": "LiteralStr", "value": 'Likely to get covid'}, {"type": "LiteralStr", "value": 'Life greatly impacted'}], "values": [
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}]}]}]}}
            },
        }
    });
    });

    return mod;
}