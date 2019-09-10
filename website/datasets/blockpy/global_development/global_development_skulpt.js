

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
        var dataset = blockpy._IMPORTED_DATASETS["global_development"];
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
					{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Country'}, {"type": "LiteralStr", "value": 'Year'}, {"type": "LiteralStr", "value": 'Data'}], "values": [
						{"type": "StrType"}, 
						{"type": "NumType"}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Health'}, {"type": "LiteralStr", "value": 'Infrastructure'}, {"type": "LiteralStr", "value": 'Rural Development'}, {"type": "LiteralStr", "value": 'Urban Development'}], "values": [
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Birth Rate'}, {"type": "LiteralStr", "value": 'Death Rate'}, {"type": "LiteralStr", "value": 'Fertility Rate'}, {"type": "LiteralStr", "value": 'Life Expectancy at Birth, Female'}, {"type": "LiteralStr", "value": 'Life Expectancy at Birth, Male'}, {"type": "LiteralStr", "value": 'Life Expectancy at Birth, Total'}, {"type": "LiteralStr", "value": 'Population Growth'}, {"type": "LiteralStr", "value": 'Total Population'}], "values": [
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Mobile Cellular Subscriptions'}, {"type": "LiteralStr", "value": 'Mobile Cellular Subscriptions per 100 People'}, {"type": "LiteralStr", "value": 'Telephone Lines'}, {"type": "LiteralStr", "value": 'Telephone Lines per 100 People'}], "values": [
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Agricultural Land'}, {"type": "LiteralStr", "value": 'Agricultural Land Percent'}, {"type": "LiteralStr", "value": 'Arable Land'}, {"type": "LiteralStr", "value": 'Arable Land Percent'}, {"type": "LiteralStr", "value": 'Land Area'}, {"type": "LiteralStr", "value": 'Rural Population'}, {"type": "LiteralStr", "value": 'Rural Population Growth'}, {"type": "LiteralStr", "value": 'Surface Area'}], "values": [
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Population Density'}, {"type": "LiteralStr", "value": 'Urban Population Percent'}, {"type": "LiteralStr", "value": 'Urban Population Percent Growth'}], "values": [
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}]}]}]}}
            },
        }
    });
    });

    return mod;
}