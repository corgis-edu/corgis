

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
        var dataset = blockpy._IMPORTED_DATASETS["state_demographics"];
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
        if (!("state_demographics" in blockpy._IMPORTED_COMPLETE_DATASETS)) {
            alert("This library has not finished loading yet. Please wait about 10 seconds and try again.")
        } else {
            return Sk.ffi.remapToPy(blockpy._IMPORTED_COMPLETE_DATASETS["state_demographics"]);
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
					{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'State'}, {"type": "LiteralStr", "value": 'Population'}, {"type": "LiteralStr", "value": 'Age'}, {"type": "LiteralStr", "value": 'Miscellaneous'}, {"type": "LiteralStr", "value": 'Ethnicities'}, {"type": "LiteralStr", "value": 'Housing'}, {"type": "LiteralStr", "value": 'Education'}, {"type": "LiteralStr", "value": 'Sales'}, {"type": "LiteralStr", "value": 'Income'}, {"type": "LiteralStr", "value": 'Employment'}], "values": [
						{"type": "StrType"}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Population Percent Change'}, {"type": "LiteralStr", "value": '2014 Population'}, {"type": "LiteralStr", "value": '2010 Population'}, {"type": "LiteralStr", "value": 'Population per Square Mile'}], "values": [
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Percent Under 5 Years'}, {"type": "LiteralStr", "value": 'Percent Under 18 Years'}, {"type": "LiteralStr", "value": 'Percent 65 and Older'}], "values": [
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Percent Female'}, {"type": "LiteralStr", "value": 'Veterans'}, {"type": "LiteralStr", "value": 'Foreign Born'}, {"type": "LiteralStr", "value": 'Living in Same House +1 Years'}, {"type": "LiteralStr", "value": 'Language Other than English at Home'}, {"type": "LiteralStr", "value": 'Percent Under 66 Years With a Disability'}, {"type": "LiteralStr", "value": 'Percent Under 65 Years Witout Health insurance'}, {"type": "LiteralStr", "value": 'Manufacturers Shipments'}, {"type": "LiteralStr", "value": 'Mean Travel Time to Work'}, {"type": "LiteralStr", "value": 'Land Area'}], "values": [
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
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'White Alone'}, {"type": "LiteralStr", "value": 'Black Alone'}, {"type": "LiteralStr", "value": 'American Indian and Alaska Native Alone'}, {"type": "LiteralStr", "value": 'Asian Alone'}, {"type": "LiteralStr", "value": 'Native Hawaiian and Other Pacific Islander Alone'}, {"type": "LiteralStr", "value": 'Two or More Races'}, {"type": "LiteralStr", "value": 'Hispanic or Latino'}, {"type": "LiteralStr", "value": 'White Alone, not Hispanic or Latino'}], "values": [
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Housing Units'}, {"type": "LiteralStr", "value": 'Homeownership Rate'}, {"type": "LiteralStr", "value": 'Median Value of Owner-Occupied Units'}, {"type": "LiteralStr", "value": 'Households'}, {"type": "LiteralStr", "value": 'Persons per Household'}, {"type": "LiteralStr", "value": 'Households with a computer'}, {"type": "LiteralStr", "value": 'Households with a Internet'}], "values": [
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'High School or Higher'}, {"type": "LiteralStr", "value": "Bachelor's Degree or Higher"}], "values": [
							{"type": "NumType"}, 
							{"type": "NumType"}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Accommodation and Food Services Sales'}, {"type": "LiteralStr", "value": 'Retail Sales'}], "values": [
							{"type": "NumType"}, 
							{"type": "NumType"}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Median Houseold Income'}, {"type": "LiteralStr", "value": 'Per Capita Income'}, {"type": "LiteralStr", "value": 'Persons Below Poverty Level'}], "values": [
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Nonemployer Establishments'}, {"type": "LiteralStr", "value": 'Firms'}], "values": [
							{"type": "NumType"}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Total'}, {"type": "LiteralStr", "value": 'Men-Owned'}, {"type": "LiteralStr", "value": 'Women-Owned'}, {"type": "LiteralStr", "value": 'Minority-Owned'}, {"type": "LiteralStr", "value": 'Nonminority-Owned'}, {"type": "LiteralStr", "value": 'Veteran-Owned'}, {"type": "LiteralStr", "value": 'Nonveteran-Owned'}], "values": [
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