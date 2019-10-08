

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
        var dataset = blockpy._IMPORTED_DATASETS["electricity"];
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

    mod.get_utility = new Sk.builtin.func(function() {
        Sk.builtin.pyCheckArgs("get_utility", arguments, 0, 0);
        if (!("electricity" in blockpy._IMPORTED_COMPLETE_DATASETS)) {
            alert("This library has not finished loading yet. Please wait about 10 seconds and try again.")
        } else {
            return Sk.ffi.remapToPy(blockpy._IMPORTED_COMPLETE_DATASETS["electricity"]);
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
            'get_utility': {
                "type": "FunctionType",
                "name": 'get_utility',
                "returns": 
				{"type": "ListType", "subtype": 
					{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Utility'}, {"type": "LiteralStr", "value": 'Demand'}, {"type": "LiteralStr", "value": 'Sources'}, {"type": "LiteralStr", "value": 'Uses'}, {"type": "LiteralStr", "value": 'Revenues'}, {"type": "LiteralStr", "value": 'Revenue'}, {"type": "LiteralStr", "value": 'Retail'}], "values": [
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Number'}, {"type": "LiteralStr", "value": 'Name'}, {"type": "LiteralStr", "value": 'State'}, {"type": "LiteralStr", "value": 'Type'}], "values": [
							{"type": "NumType"}, 
							{"type": "StrType"}, 
							{"type": "StrType"}, 
							{"type": "StrType"}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Summer Peak'}, {"type": "LiteralStr", "value": 'Winter Peak'}], "values": [
							{"type": "NumType"}, 
							{"type": "NumType"}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Generation'}, {"type": "LiteralStr", "value": 'Purchased'}, {"type": "LiteralStr", "value": 'Other'}, {"type": "LiteralStr", "value": 'Total'}], "values": [
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Retail'}, {"type": "LiteralStr", "value": 'Resale'}, {"type": "LiteralStr", "value": 'No Charge'}, {"type": "LiteralStr", "value": 'Consumed'}, {"type": "LiteralStr", "value": 'Losses'}, {"type": "LiteralStr", "value": 'Total'}], "values": [
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Retail'}], "values": [
							{"type": "NumType"}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Delivery'}, {"type": "LiteralStr", "value": 'Resale'}, {"type": "LiteralStr", "value": 'Adjustments'}, {"type": "LiteralStr", "value": 'Transmission'}, {"type": "LiteralStr", "value": 'Other'}, {"type": "LiteralStr", "value": 'Total'}], "values": [
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Residential'}, {"type": "LiteralStr", "value": 'Commercial'}, {"type": "LiteralStr", "value": 'Industrial'}, {"type": "LiteralStr", "value": 'Transportation'}, {"type": "LiteralStr", "value": 'Total'}], "values": [
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Revenue'}, {"type": "LiteralStr", "value": 'Sales'}, {"type": "LiteralStr", "value": 'Customers'}], "values": [
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Revenue'}, {"type": "LiteralStr", "value": 'Sales'}, {"type": "LiteralStr", "value": 'Customers'}], "values": [
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Revenue'}, {"type": "LiteralStr", "value": 'Sales'}, {"type": "LiteralStr", "value": 'Customers'}], "values": [
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Revenue'}, {"type": "LiteralStr", "value": 'Sales'}, {"type": "LiteralStr", "value": 'Customers'}], "values": [
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Revenue'}, {"type": "LiteralStr", "value": 'Sales'}, {"type": "LiteralStr", "value": 'Customers'}], "values": [
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}]}]}]}}
            },
        }
    });
    });

    return mod;
}