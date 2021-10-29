

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
        var dataset = blockpy._IMPORTED_DATASETS["opioids"];
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

    mod.get_opioid_deaths = new Sk.builtin.func(function() {
        Sk.builtin.pyCheckArgs("get_opioid_deaths", arguments, 0, 0);
        if (!("opioids" in blockpy._IMPORTED_COMPLETE_DATASETS)) {
            alert("This library has not finished loading yet. Please wait about 10 seconds and try again.")
        } else {
            return Sk.ffi.remapToPy(blockpy._IMPORTED_COMPLETE_DATASETS["opioids"]);
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
            'get_opioid_deaths': {
                "type": "FunctionType",
                "name": 'get_opioid_deaths',
                "returns": 
				{"type": "ListType", "subtype": 
					{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Year'}, {"type": "LiteralStr", "value": 'Number'}, {"type": "LiteralStr", "value": 'Rate'}], "values": [
						{"type": "NumType"}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'All'}, {"type": "LiteralStr", "value": 'Opioid'}], "values": [
							{"type": "NumType"}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Any'}, {"type": "LiteralStr", "value": 'Prescription'}, {"type": "LiteralStr", "value": 'Synthetic'}, {"type": "LiteralStr", "value": 'Heroin'}, {"type": "LiteralStr", "value": 'Cocaine'}], "values": [
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}]}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'All'}, {"type": "LiteralStr", "value": 'Opioid'}], "values": [
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Total'}, {"type": "LiteralStr", "value": 'Sex'}, {"type": "LiteralStr", "value": 'Race'}], "values": [
								{"type": "NumType"}, 
								{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Female'}, {"type": "LiteralStr", "value": 'Male'}], "values": [
									{"type": "NumType"}, 
									{"type": "NumType"}]}, 
								{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'White'}, {"type": "LiteralStr", "value": 'Black'}, {"type": "LiteralStr", "value": 'Asian or Pacific Islander'}, {"type": "LiteralStr", "value": 'Hispanic'}, {"type": "LiteralStr", "value": 'American Indian or Alaska Native'}], "values": [
									{"type": "NumType"}, 
									{"type": "NumType"}, 
									{"type": "NumType"}, 
									{"type": "NumType"}, 
									{"type": "NumType"}]}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Any'}, {"type": "LiteralStr", "value": 'Prescription'}, {"type": "LiteralStr", "value": 'Synthetic'}, {"type": "LiteralStr", "value": 'Heroin'}, {"type": "LiteralStr", "value": 'Cocaine'}], "values": [
								{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Total'}, {"type": "LiteralStr", "value": 'Sex'}, {"type": "LiteralStr", "value": 'Race'}], "values": [
									{"type": "NumType"}, 
									{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Female'}, {"type": "LiteralStr", "value": 'Male'}], "values": [
										{"type": "NumType"}, 
										{"type": "NumType"}]}, 
									{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'White'}, {"type": "LiteralStr", "value": 'Black'}, {"type": "LiteralStr", "value": 'Asian or Pacific Islander'}, {"type": "LiteralStr", "value": 'Hispanic'}, {"type": "LiteralStr", "value": 'American Indian or Alaska Native'}], "values": [
										{"type": "NumType"}, 
										{"type": "NumType"}, 
										{"type": "NumType"}, 
										{"type": "NumType"}, 
										{"type": "NumType"}]}]}, 
								{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Total'}, {"type": "LiteralStr", "value": 'Sex'}, {"type": "LiteralStr", "value": 'Race'}], "values": [
									{"type": "NumType"}, 
									{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Female'}, {"type": "LiteralStr", "value": 'Male'}], "values": [
										{"type": "NumType"}, 
										{"type": "NumType"}]}, 
									{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'White'}, {"type": "LiteralStr", "value": 'Black'}, {"type": "LiteralStr", "value": 'Hispanic'}, {"type": "LiteralStr", "value": 'American Indian or Alaska Native'}], "values": [
										{"type": "NumType"}, 
										{"type": "NumType"}, 
										{"type": "NumType"}, 
										{"type": "NumType"}]}]}, 
								{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Total'}, {"type": "LiteralStr", "value": 'Sex'}, {"type": "LiteralStr", "value": 'Race'}], "values": [
									{"type": "NumType"}, 
									{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Female'}, {"type": "LiteralStr", "value": 'Male'}], "values": [
										{"type": "NumType"}, 
										{"type": "NumType"}]}, 
									{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'White'}, {"type": "LiteralStr", "value": 'Black'}, {"type": "LiteralStr", "value": 'Hispanic'}], "values": [
										{"type": "NumType"}, 
										{"type": "NumType"}, 
										{"type": "NumType"}]}]}, 
								{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Total'}, {"type": "LiteralStr", "value": 'Sex'}, {"type": "LiteralStr", "value": 'Race'}], "values": [
									{"type": "NumType"}, 
									{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Female'}, {"type": "LiteralStr", "value": 'Male'}], "values": [
										{"type": "NumType"}, 
										{"type": "NumType"}]}, 
									{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'White'}, {"type": "LiteralStr", "value": 'Black'}, {"type": "LiteralStr", "value": 'Hispanic'}], "values": [
										{"type": "NumType"}, 
										{"type": "NumType"}, 
										{"type": "NumType"}]}]}, 
								{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Total'}, {"type": "LiteralStr", "value": 'Sex'}, {"type": "LiteralStr", "value": 'Race'}], "values": [
									{"type": "NumType"}, 
									{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Female'}, {"type": "LiteralStr", "value": 'Male'}], "values": [
										{"type": "NumType"}, 
										{"type": "NumType"}]}, 
									{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'White'}, {"type": "LiteralStr", "value": 'Black'}, {"type": "LiteralStr", "value": 'Hispanic'}, {"type": "LiteralStr", "value": 'American Indian or Alaska Native'}], "values": [
										{"type": "NumType"}, 
										{"type": "NumType"}, 
										{"type": "NumType"}, 
										{"type": "NumType"}]}]}]}]}]}}
            },
        }
    });
    });

    return mod;
}