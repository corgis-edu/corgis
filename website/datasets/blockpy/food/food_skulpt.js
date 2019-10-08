

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
        var dataset = blockpy._IMPORTED_DATASETS["food"];
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
        if (!("food" in _IMPORTED_COMPLETE_DATASETS)) {
            alert("This library has not finished loading yet. Please wait about 10 seconds and try again.")
        } else {
            return blockpy._IMPORTED_COMPLETE_DATASETS["food"];
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
					{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Category'}, {"type": "LiteralStr", "value": 'Description'}, {"type": "LiteralStr", "value": 'Nutrient Data Bank Number'}, {"type": "LiteralStr", "value": 'Data'}], "values": [
						{"type": "StrType"}, 
						{"type": "StrType"}, 
						{"type": "NumType"}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Alpha Carotene'}, {"type": "LiteralStr", "value": 'Ash'}, {"type": "LiteralStr", "value": 'Beta Carotene'}, {"type": "LiteralStr", "value": 'Beta Cryptoxanthin'}, {"type": "LiteralStr", "value": 'Carbohydrate'}, {"type": "LiteralStr", "value": 'Cholesterol'}, {"type": "LiteralStr", "value": 'Choline'}, {"type": "LiteralStr", "value": 'Fiber'}, {"type": "LiteralStr", "value": 'Kilocalories'}, {"type": "LiteralStr", "value": 'Lutein and Zeaxanthin'}, {"type": "LiteralStr", "value": 'Lycopene'}, {"type": "LiteralStr", "value": 'Manganese'}, {"type": "LiteralStr", "value": 'Niacin'}, {"type": "LiteralStr", "value": 'Pantothenic Acid'}, {"type": "LiteralStr", "value": 'Protein'}, {"type": "LiteralStr", "value": 'Refuse Percentage'}, {"type": "LiteralStr", "value": 'Retinol'}, {"type": "LiteralStr", "value": 'Riboflavin'}, {"type": "LiteralStr", "value": 'Selenium'}, {"type": "LiteralStr", "value": 'Sugar Total'}, {"type": "LiteralStr", "value": 'Thiamin'}, {"type": "LiteralStr", "value": 'Water'}, {"type": "LiteralStr", "value": 'Fat'}, {"type": "LiteralStr", "value": 'Household Weights'}, {"type": "LiteralStr", "value": 'Major Minerals'}, {"type": "LiteralStr", "value": 'Vitamins'}], "values": [
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
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Monosaturated Fat'}, {"type": "LiteralStr", "value": 'Polysaturated Fat'}, {"type": "LiteralStr", "value": 'Saturated Fat'}, {"type": "LiteralStr", "value": 'Total Lipid'}], "values": [
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": '1st Household Weight'}, {"type": "LiteralStr", "value": '1st Household Weight Description'}, {"type": "LiteralStr", "value": '2nd Household Weight'}, {"type": "LiteralStr", "value": '2nd Household Weight Description'}], "values": [
								{"type": "NumType"}, 
								{"type": "StrType"}, 
								{"type": "NumType"}, 
								{"type": "StrType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Calcium'}, {"type": "LiteralStr", "value": 'Copper'}, {"type": "LiteralStr", "value": 'Iron'}, {"type": "LiteralStr", "value": 'Magnesium'}, {"type": "LiteralStr", "value": 'Phosphorus'}, {"type": "LiteralStr", "value": 'Potassium'}, {"type": "LiteralStr", "value": 'Sodium'}, {"type": "LiteralStr", "value": 'Zinc'}], "values": [
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Vitamin A - IU'}, {"type": "LiteralStr", "value": 'Vitamin A - RAE'}, {"type": "LiteralStr", "value": 'Vitamin B12'}, {"type": "LiteralStr", "value": 'Vitamin B6'}, {"type": "LiteralStr", "value": 'Vitamin C'}, {"type": "LiteralStr", "value": 'Vitamin E'}, {"type": "LiteralStr", "value": 'Vitamin K'}], "values": [
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