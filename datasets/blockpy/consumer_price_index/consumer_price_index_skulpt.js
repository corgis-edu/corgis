

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
        var dataset = blockpy._IMPORTED_DATASETS["consumer_price_index"];
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
        if (!("consumer_price_index" in blockpy._IMPORTED_COMPLETE_DATASETS)) {
            alert("This library has not finished loading yet. Please wait about 10 seconds and try again.")
        } else {
            return Sk.ffi.remapToPy(blockpy._IMPORTED_COMPLETE_DATASETS["consumer_price_index"]);
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
					{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Year'}, {"type": "LiteralStr", "value": 'Data'}], "values": [
						{"type": "NumType"}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Meat'}, {"type": "LiteralStr", "value": 'Fuel'}, {"type": "LiteralStr", "value": 'Grain'}, {"type": "LiteralStr", "value": 'Metal'}, {"type": "LiteralStr", "value": 'Plant extract'}], "values": [
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Beef'}, {"type": "LiteralStr", "value": 'Lamb'}, {"type": "LiteralStr", "value": 'Pork'}, {"type": "LiteralStr", "value": 'Average'}], "values": [
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Coal'}, {"type": "LiteralStr", "value": 'Natural gas'}, {"type": "LiteralStr", "value": 'Petroleum'}, {"type": "LiteralStr", "value": 'Average'}], "values": [
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Corn'}, {"type": "LiteralStr", "value": 'Rice'}, {"type": "LiteralStr", "value": 'Rye'}, {"type": "LiteralStr", "value": 'Wheat'}, {"type": "LiteralStr", "value": 'Average'}], "values": [
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Aluminum'}, {"type": "LiteralStr", "value": 'Chromium'}, {"type": "LiteralStr", "value": 'Copper'}, {"type": "LiteralStr", "value": 'Lead'}, {"type": "LiteralStr", "value": 'Manganese'}, {"type": "LiteralStr", "value": 'Nickel'}, {"type": "LiteralStr", "value": 'Steel'}, {"type": "LiteralStr", "value": 'Tin'}, {"type": "LiteralStr", "value": 'Zinc'}, {"type": "LiteralStr", "value": 'Iron ore'}, {"type": "LiteralStr", "value": 'Gold'}, {"type": "LiteralStr", "value": 'Platinum'}, {"type": "LiteralStr", "value": 'Silver'}, {"type": "LiteralStr", "value": 'Average'}], "values": [
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
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Cocoa'}, {"type": "LiteralStr", "value": 'Coffee'}, {"type": "LiteralStr", "value": 'Cotton'}, {"type": "LiteralStr", "value": 'Cottonseed'}, {"type": "LiteralStr", "value": 'Palm oil'}, {"type": "LiteralStr", "value": 'Rubber'}, {"type": "LiteralStr", "value": 'Sugar'}, {"type": "LiteralStr", "value": 'Tea'}, {"type": "LiteralStr", "value": 'Tobacco'}, {"type": "LiteralStr", "value": 'Average'}], "values": [
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
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