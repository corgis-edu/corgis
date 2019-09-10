

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
        var dataset = blockpy._IMPORTED_DATASETS["energy"];
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
                    "empty": false,
                    "subtype": {"type": "NumType"}
                }
            },
            'get_report': {
                "type": "FunctionType",
                "name": 'get_report',
                "returns": 
				{"type": "ListType", "subtype": 
					{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'State'}, {"type": "LiteralStr", "value": 'Year'}, {"type": "LiteralStr", "value": 'Production'}, {"type": "LiteralStr", "value": 'Consumption'}, {"type": "LiteralStr", "value": 'Expenditure'}, {"type": "LiteralStr", "value": 'Price'}], "values": [
						{"type": "StrType"}, 
						{"type": "NumType"}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Coal'}], "values": [
							{"type": "NumType"}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Commercial'}, {"type": "LiteralStr", "value": 'Electric Power'}, {"type": "LiteralStr", "value": 'Industrial'}, {"type": "LiteralStr", "value": 'Refinery'}, {"type": "LiteralStr", "value": 'Residential'}, {"type": "LiteralStr", "value": 'Transportation'}], "values": [
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Coal'}, {"type": "LiteralStr", "value": 'Distillate Fuel Oil'}, {"type": "LiteralStr", "value": 'Geothermal'}, {"type": "LiteralStr", "value": 'Hydropower'}, {"type": "LiteralStr", "value": 'Kerosene'}, {"type": "LiteralStr", "value": 'Liquefied Petroleum Gases'}, {"type": "LiteralStr", "value": 'Natural Gas'}, {"type": "LiteralStr", "value": 'Solar'}, {"type": "LiteralStr", "value": 'Wind'}, {"type": "LiteralStr", "value": 'Wood'}], "values": [
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
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Coal'}, {"type": "LiteralStr", "value": 'Distillate Fuel Oil'}, {"type": "LiteralStr", "value": 'Natural Gas'}, {"type": "LiteralStr", "value": 'Wood'}], "values": [
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Coal'}, {"type": "LiteralStr", "value": 'Distillate Fuel Oil'}, {"type": "LiteralStr", "value": 'Geothermal'}, {"type": "LiteralStr", "value": 'Hydropower'}, {"type": "LiteralStr", "value": 'Kerosene'}, {"type": "LiteralStr", "value": 'Liquefied Petroleum Gases'}, {"type": "LiteralStr", "value": 'Natural Gas'}, {"type": "LiteralStr", "value": 'Other Petroleum Products'}, {"type": "LiteralStr", "value": 'Solar'}, {"type": "LiteralStr", "value": 'Wind'}, {"type": "LiteralStr", "value": 'Wood'}], "values": [
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
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Coal'}, {"type": "LiteralStr", "value": 'Distillate Fuel Oil'}, {"type": "LiteralStr", "value": 'Liquefied Petroleum Gases'}, {"type": "LiteralStr", "value": 'Natural Gas'}], "values": [
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Coal'}, {"type": "LiteralStr", "value": 'Distillate Fuel Oil'}, {"type": "LiteralStr", "value": 'Geothermal'}, {"type": "LiteralStr", "value": 'Kerosene'}, {"type": "LiteralStr", "value": 'Liquefied Petroleum Gases'}, {"type": "LiteralStr", "value": 'Natural Gas'}, {"type": "LiteralStr", "value": 'Wood'}], "values": [
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Coal'}, {"type": "LiteralStr", "value": 'Distillate Fuel Oil'}, {"type": "LiteralStr", "value": 'Liquefied Petroleum Gases'}, {"type": "LiteralStr", "value": 'Natural Gas'}], "values": [
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}]}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Commercial'}, {"type": "LiteralStr", "value": 'Electric Power'}, {"type": "LiteralStr", "value": 'Industrial'}, {"type": "LiteralStr", "value": 'Residential'}, {"type": "LiteralStr", "value": 'Transportation'}], "values": [
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Coal'}, {"type": "LiteralStr", "value": 'Distillate Fuel Oil'}, {"type": "LiteralStr", "value": 'Kerosene'}, {"type": "LiteralStr", "value": 'Liquefied Petroleum Gases'}, {"type": "LiteralStr", "value": 'Natural Gas'}], "values": [
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Coal'}, {"type": "LiteralStr", "value": 'Distillate Fuel Oil'}, {"type": "LiteralStr", "value": 'Natural Gas'}], "values": [
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Coal'}, {"type": "LiteralStr", "value": 'Distillate Fuel Oil'}, {"type": "LiteralStr", "value": 'Kerosene'}, {"type": "LiteralStr", "value": 'Liquefied Petroleum Gases'}, {"type": "LiteralStr", "value": 'Natural Gas'}, {"type": "LiteralStr", "value": 'Other Petroleum Products'}], "values": [
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Coal'}, {"type": "LiteralStr", "value": 'Distillate Fuel Oil'}, {"type": "LiteralStr", "value": 'Kerosene'}, {"type": "LiteralStr", "value": 'Liquefied Petroleum Gases'}, {"type": "LiteralStr", "value": 'Natural Gas'}, {"type": "LiteralStr", "value": 'Wood'}], "values": [
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Coal'}, {"type": "LiteralStr", "value": 'Distillate Fuel Oil'}, {"type": "LiteralStr", "value": 'Liquefied Petroleum Gases'}, {"type": "LiteralStr", "value": 'Natural Gas'}], "values": [
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}]}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Commercial'}, {"type": "LiteralStr", "value": 'Electric Power'}, {"type": "LiteralStr", "value": 'Industrial'}, {"type": "LiteralStr", "value": 'Transportation'}], "values": [
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Coal'}, {"type": "LiteralStr", "value": 'Distillate Fuel Oil'}, {"type": "LiteralStr", "value": 'Kerosene'}, {"type": "LiteralStr", "value": 'Liquefied Petroleum Gases'}, {"type": "LiteralStr", "value": 'Natural Gas'}], "values": [
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Coal'}, {"type": "LiteralStr", "value": 'Distillate Fuel Oil'}, {"type": "LiteralStr", "value": 'Natural Gas'}], "values": [
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Coal'}, {"type": "LiteralStr", "value": 'Distillate Fuel Oil'}, {"type": "LiteralStr", "value": 'Kerosene'}, {"type": "LiteralStr", "value": 'Liquefied Petroleum Gases'}, {"type": "LiteralStr", "value": 'Natural Gas'}, {"type": "LiteralStr", "value": 'Other Petroleum Products'}], "values": [
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Coal'}, {"type": "LiteralStr", "value": 'Distillate Fuel Oil'}, {"type": "LiteralStr", "value": 'Liquefied Petroleum Gases'}, {"type": "LiteralStr", "value": 'Natural Gas'}], "values": [
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