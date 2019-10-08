

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
        var dataset = blockpy._IMPORTED_DATASETS["cancer"];
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

    mod.get_cancer_reports = new Sk.builtin.func(function() {
        Sk.builtin.pyCheckArgs("get_cancer_reports", arguments, 0, 0);
        if (!("cancer" in _IMPORTED_COMPLETE_DATASETS)) {
            alert("This library has not finished loading yet. Please wait about 10 seconds and try again.")
        } else {
            return blockpy._IMPORTED_COMPLETE_DATASETS["cancer"];
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
            'get_cancer_reports': {
                "type": "FunctionType",
                "name": 'get_cancer_reports',
                "returns": 
				{"type": "ListType", "subtype": 
					{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'State'}, {"type": "LiteralStr", "value": 'Total'}, {"type": "LiteralStr", "value": 'Rates'}, {"type": "LiteralStr", "value": 'Types'}], "values": [
						{"type": "StrType"}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Rate'}, {"type": "LiteralStr", "value": 'Number'}, {"type": "LiteralStr", "value": 'Population'}], "values": [
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Age'}, {"type": "LiteralStr", "value": 'Age and Sex'}, {"type": "LiteralStr", "value": 'Race'}, {"type": "LiteralStr", "value": 'Race and Sex'}], "values": [
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": '< 18'}, {"type": "LiteralStr", "value": '18-45'}, {"type": "LiteralStr", "value": '45-64'}, {"type": "LiteralStr", "value": '> 64'}], "values": [
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": '< 18'}, {"type": "LiteralStr", "value": '18 - 45'}, {"type": "LiteralStr", "value": '45 - 64'}, {"type": "LiteralStr", "value": '> 64'}], "values": [
								{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Female'}, {"type": "LiteralStr", "value": 'Male'}], "values": [
									{"type": "NumType"}, 
									{"type": "NumType"}]}, 
								{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Female'}, {"type": "LiteralStr", "value": 'Male'}], "values": [
									{"type": "NumType"}, 
									{"type": "NumType"}]}, 
								{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Female'}, {"type": "LiteralStr", "value": 'Male'}], "values": [
									{"type": "NumType"}, 
									{"type": "NumType"}]}, 
								{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Female'}, {"type": "LiteralStr", "value": 'Male'}], "values": [
									{"type": "NumType"}, 
									{"type": "NumType"}]}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'White'}, {"type": "LiteralStr", "value": 'White non-Hispanic'}, {"type": "LiteralStr", "value": 'Black'}, {"type": "LiteralStr", "value": 'Asian'}, {"type": "LiteralStr", "value": 'Indigenous'}, {"type": "LiteralStr", "value": 'Hispanic'}], "values": [
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Female'}, {"type": "LiteralStr", "value": 'Male'}], "values": [
								{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'White'}, {"type": "LiteralStr", "value": 'White non-Hispanic'}, {"type": "LiteralStr", "value": 'Black'}, {"type": "LiteralStr", "value": 'Black non-Hispanic'}, {"type": "LiteralStr", "value": 'Asian'}, {"type": "LiteralStr", "value": 'Indigenous'}, {"type": "LiteralStr", "value": 'Hispanic'}], "values": [
									{"type": "NumType"}, 
									{"type": "NumType"}, 
									{"type": "NumType"}, 
									{"type": "NumType"}, 
									{"type": "NumType"}, 
									{"type": "NumType"}, 
									{"type": "NumType"}]}, 
								{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'White'}, {"type": "LiteralStr", "value": 'White non-Hispanic'}, {"type": "LiteralStr", "value": 'Black'}, {"type": "LiteralStr", "value": 'Black non-Hispanic'}, {"type": "LiteralStr", "value": 'Asian'}, {"type": "LiteralStr", "value": 'Indigenous'}, {"type": "LiteralStr", "value": 'Hispanic'}], "values": [
									{"type": "NumType"}, 
									{"type": "NumType"}, 
									{"type": "NumType"}, 
									{"type": "NumType"}, 
									{"type": "NumType"}, 
									{"type": "NumType"}, 
									{"type": "NumType"}]}]}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Breast'}, {"type": "LiteralStr", "value": 'Colorectal'}, {"type": "LiteralStr", "value": 'Lung'}], "values": [
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Total'}, {"type": "LiteralStr", "value": 'Age'}, {"type": "LiteralStr", "value": 'Race'}], "values": [
								{"type": "NumType"}, 
								{"type": "DictType", "literals": [{"type": "LiteralStr", "value": '18 - 44'}, {"type": "LiteralStr", "value": '45 - 64'}, {"type": "LiteralStr", "value": '> 64'}], "values": [
									{"type": "NumType"}, 
									{"type": "NumType"}, 
									{"type": "NumType"}]}, 
								{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'White'}, {"type": "LiteralStr", "value": 'White non-Hispanic '}, {"type": "LiteralStr", "value": 'Black'}, {"type": "LiteralStr", "value": 'Black non-Hispanic'}, {"type": "LiteralStr", "value": 'Asian'}, {"type": "LiteralStr", "value": 'Indigenous'}, {"type": "LiteralStr", "value": 'Hispanic'}], "values": [
									{"type": "NumType"}, 
									{"type": "NumType"}, 
									{"type": "NumType"}, 
									{"type": "NumType"}, 
									{"type": "NumType"}, 
									{"type": "NumType"}, 
									{"type": "NumType"}]}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Total'}, {"type": "LiteralStr", "value": 'Age and Sex'}, {"type": "LiteralStr", "value": 'Race'}], "values": [
								{"type": "NumType"}, 
								{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Female'}, {"type": "LiteralStr", "value": 'Male'}], "values": [
									{"type": "DictType", "literals": [{"type": "LiteralStr", "value": '18 - 44'}, {"type": "LiteralStr", "value": '45 - 64'}, {"type": "LiteralStr", "value": '> 64'}], "values": [
										{"type": "NumType"}, 
										{"type": "NumType"}, 
										{"type": "NumType"}]}, 
									{"type": "DictType", "literals": [{"type": "LiteralStr", "value": '18 - 44'}, {"type": "LiteralStr", "value": '45 - 64'}, {"type": "LiteralStr", "value": '> 64'}], "values": [
										{"type": "NumType"}, 
										{"type": "NumType"}, 
										{"type": "NumType"}]}]}, 
								{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'White'}, {"type": "LiteralStr", "value": 'White non-Hispanic'}, {"type": "LiteralStr", "value": 'Black'}, {"type": "LiteralStr", "value": 'Black non-Hispanic'}, {"type": "LiteralStr", "value": 'Asian'}, {"type": "LiteralStr", "value": 'Indigenous'}, {"type": "LiteralStr", "value": 'Hispanic'}], "values": [
									{"type": "NumType"}, 
									{"type": "NumType"}, 
									{"type": "NumType"}, 
									{"type": "NumType"}, 
									{"type": "NumType"}, 
									{"type": "NumType"}, 
									{"type": "NumType"}]}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Total'}, {"type": "LiteralStr", "value": 'Age and Sex'}, {"type": "LiteralStr", "value": 'Race'}], "values": [
								{"type": "NumType"}, 
								{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Female'}, {"type": "LiteralStr", "value": 'Male'}], "values": [
									{"type": "DictType", "literals": [{"type": "LiteralStr", "value": '18 - 44'}, {"type": "LiteralStr", "value": '45 - 64'}, {"type": "LiteralStr", "value": '> 64'}], "values": [
										{"type": "NumType"}, 
										{"type": "NumType"}, 
										{"type": "NumType"}]}, 
									{"type": "DictType", "literals": [{"type": "LiteralStr", "value": '18 - 44'}, {"type": "LiteralStr", "value": '45 - 64'}, {"type": "LiteralStr", "value": '> 64'}], "values": [
										{"type": "NumType"}, 
										{"type": "NumType"}, 
										{"type": "NumType"}]}]}, 
								{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'White'}, {"type": "LiteralStr", "value": 'White non-Hispanic'}, {"type": "LiteralStr", "value": 'Black'}, {"type": "LiteralStr", "value": 'Black non-Hispanic'}, {"type": "LiteralStr", "value": 'Asian'}, {"type": "LiteralStr", "value": 'Indigenous'}, {"type": "LiteralStr", "value": 'Hispanic'}], "values": [
									{"type": "NumType"}, 
									{"type": "NumType"}, 
									{"type": "NumType"}, 
									{"type": "NumType"}, 
									{"type": "NumType"}, 
									{"type": "NumType"}, 
									{"type": "NumType"}]}]}]}]}}
            },
        }
    });
    });

    return mod;
}