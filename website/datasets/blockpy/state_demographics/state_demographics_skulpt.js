

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
        if (!("state_demographics" in blockpy._IMPORTED_DATASETS)) {
            alert("This library has not finished loading yet. Please wait about 10 seconds and try again.")
        } else {
            return blockpy._IMPORTED_DATASETS["state_demographics"];
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
					{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'State'}, {"type": "LiteralStr", "value": 'Age'}, {"type": "LiteralStr", "value": 'Education'}, {"type": "LiteralStr", "value": 'Employment'}, {"type": "LiteralStr", "value": 'Ethnicities'}, {"type": "LiteralStr", "value": 'Housing'}, {"type": "LiteralStr", "value": 'Income'}, {"type": "LiteralStr", "value": 'Miscellaneous'}, {"type": "LiteralStr", "value": 'Population'}, {"type": "LiteralStr", "value": 'Sales'}], "values": [
						{"type": "StrType"}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Percent 65 and Older'}, {"type": "LiteralStr", "value": 'Percent Under 18 Years'}, {"type": "LiteralStr", "value": 'Percent Under 5 Years'}], "values": [
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": "Bachelor's Degree or Higher"}, {"type": "LiteralStr", "value": 'High School or Higher'}], "values": [
							{"type": "NumType"}, 
							{"type": "NumType"}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Nonemployer Establishments'}, {"type": "LiteralStr", "value": 'Private Non-farm Employment'}, {"type": "LiteralStr", "value": 'Private Non-farm Employment Percent Change'}, {"type": "LiteralStr", "value": 'Private Non-farm Establishments'}, {"type": "LiteralStr", "value": 'Firms'}], "values": [
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'American Indian-Owned'}, {"type": "LiteralStr", "value": 'Asian-Owned'}, {"type": "LiteralStr", "value": 'Black-Owned'}, {"type": "LiteralStr", "value": 'Hispanic-Owned'}, {"type": "LiteralStr", "value": 'Native Hawaiian and Other Pacific Islander-Owned'}, {"type": "LiteralStr", "value": 'Total'}, {"type": "LiteralStr", "value": 'Women-Owned'}], "values": [
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}]}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'American Indian and Alaska Native Alone'}, {"type": "LiteralStr", "value": 'Asian Alone'}, {"type": "LiteralStr", "value": 'Black Alone'}, {"type": "LiteralStr", "value": 'Hispanic or Latino'}, {"type": "LiteralStr", "value": 'Native Hawaiian and Other Pacific Islander Alone'}, {"type": "LiteralStr", "value": 'Two or More Races'}, {"type": "LiteralStr", "value": 'White Alone'}, {"type": "LiteralStr", "value": 'White Alone, not Hispanic or Latino'}], "values": [
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Homeownership Rate'}, {"type": "LiteralStr", "value": 'Households'}, {"type": "LiteralStr", "value": 'Housing Units'}, {"type": "LiteralStr", "value": 'Median Value of Owner-Occupied Units'}, {"type": "LiteralStr", "value": 'Persons per Household'}, {"type": "LiteralStr", "value": 'Units in Multi-Unit Structures'}], "values": [
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Median Houseold Income'}, {"type": "LiteralStr", "value": 'Per Capita Income'}, {"type": "LiteralStr", "value": 'Persons Below Poverty Level'}], "values": [
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Building Permits'}, {"type": "LiteralStr", "value": 'Foreign Born'}, {"type": "LiteralStr", "value": 'Land Area'}, {"type": "LiteralStr", "value": 'Language Other than English at Home'}, {"type": "LiteralStr", "value": 'Living in Same House +1 Years'}, {"type": "LiteralStr", "value": 'Manufacturers Shipments'}, {"type": "LiteralStr", "value": 'Mean Travel Time to Work'}, {"type": "LiteralStr", "value": 'Percent Female'}, {"type": "LiteralStr", "value": 'Veterans'}], "values": [
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": '2010 Population'}, {"type": "LiteralStr", "value": '2014 Population'}, {"type": "LiteralStr", "value": 'Population Percent Change'}, {"type": "LiteralStr", "value": 'Population per Square Mile'}], "values": [
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Accommodation and Food Services Sales'}, {"type": "LiteralStr", "value": 'Merchant Wholesaler Sales'}, {"type": "LiteralStr", "value": 'Retail Sales'}, {"type": "LiteralStr", "value": 'Retail Sales per Capita'}], "values": [
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}]}]}}
            },
        }
    });
    });

    return mod;
}