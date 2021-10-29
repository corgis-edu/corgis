

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
        var dataset = blockpy._IMPORTED_DATASETS["finance"];
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

    mod.get_record = new Sk.builtin.func(function() {
        Sk.builtin.pyCheckArgs("get_record", arguments, 0, 0);
        if (!("finance" in blockpy._IMPORTED_COMPLETE_DATASETS)) {
            alert("This library has not finished loading yet. Please wait about 10 seconds and try again.")
        } else {
            return Sk.ffi.remapToPy(blockpy._IMPORTED_COMPLETE_DATASETS["finance"]);
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
            'get_record': {
                "type": "FunctionType",
                "name": 'get_record',
                "returns": 
				{"type": "ListType", "subtype": 
					{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'State'}, {"type": "LiteralStr", "value": 'Year'}, {"type": "LiteralStr", "value": 'Totals'}, {"type": "LiteralStr", "value": 'Details'}], "values": [
						{"type": "StrType"}, 
						{"type": "NumType"}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Capital outlay'}, {"type": "LiteralStr", "value": 'Revenue'}, {"type": "LiteralStr", "value": 'Expenditure'}, {"type": "LiteralStr", "value": 'General expenditure'}, {"type": "LiteralStr", "value": 'General revenue'}, {"type": "LiteralStr", "value": 'Insurance trust  revenue'}, {"type": "LiteralStr", "value": 'Intergovernmental'}, {"type": "LiteralStr", "value": 'License tax'}, {"type": "LiteralStr", "value": 'Selective sales tax'}, {"type": "LiteralStr", "value": 'Tax'}, {"type": "LiteralStr", "value": ' Debt at end of fiscal year'}], "values": [
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
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Correction'}, {"type": "LiteralStr", "value": 'Education'}, {"type": "LiteralStr", "value": 'Financial Aid'}, {"type": "LiteralStr", "value": 'Health'}, {"type": "LiteralStr", "value": 'Intergovernmental'}, {"type": "LiteralStr", "value": 'Natural Resources'}, {"type": "LiteralStr", "value": 'Utilities'}, {"type": "LiteralStr", "value": 'Welfare'}, {"type": "LiteralStr", "value": 'Transportation'}, {"type": "LiteralStr", "value": 'Insurance benefits and repayments'}, {"type": "LiteralStr", "value": 'Interest on debt'}, {"type": "LiteralStr", "value": 'Interest on general debt'}, {"type": "LiteralStr", "value": 'Miscellaneous general revenue'}, {"type": "LiteralStr", "value": 'Other taxes'}, {"type": "LiteralStr", "value": 'Police protection'}], "values": [
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Correction Total'}], "values": [
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Education Total'}], "values": [
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Assistance and Subsidies'}, {"type": "LiteralStr", "value": 'Cash and Securities Total'}], "values": [
								{"type": "NumType"}, 
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Health Total Expenditure'}], "values": [
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Intergovernmental Expenditure'}, {"type": "LiteralStr", "value": 'Intergovernmental to Combined and Unallocable'}], "values": [
								{"type": "NumType"}, 
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Natural Resources Construction'}, {"type": "LiteralStr", "value": 'Parks'}], "values": [
								{"type": "NumType"}, 
								{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Parks Total Expenditure'}], "values": [
									{"type": "NumType"}]}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Utilities Current Operation'}], "values": [
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Welfare Institution Total Expenditure'}], "values": [
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Highways'}], "values": [
								{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Highways Total Expenditure'}], "values": [
									{"type": "NumType"}]}]}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
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