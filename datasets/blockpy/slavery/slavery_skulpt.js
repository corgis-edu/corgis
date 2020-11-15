

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
        var dataset = blockpy._IMPORTED_DATASETS["slavery"];
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

    mod.get_transaction_record = new Sk.builtin.func(function() {
        Sk.builtin.pyCheckArgs("get_transaction_record", arguments, 0, 0);
        if (!("slavery" in blockpy._IMPORTED_COMPLETE_DATASETS)) {
            alert("This library has not finished loading yet. Please wait about 10 seconds and try again.")
        } else {
            return Sk.ffi.remapToPy(blockpy._IMPORTED_COMPLETE_DATASETS["slavery"]);
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
            'get_transaction_record': {
                "type": "FunctionType",
                "name": 'get_transaction_record',
                "returns": 
				{"type": "ListType", "subtype": 
					{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Buyer'}, {"type": "LiteralStr", "value": 'Seller'}, {"type": "LiteralStr", "value": 'Slave'}, {"type": "LiteralStr", "value": 'Transaction'}], "values": [
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'County of Origin'}, {"type": "LiteralStr", "value": 'Full Name'}, {"type": "LiteralStr", "value": 'Origin'}, {"type": "LiteralStr", "value": 'State of Origin'}], "values": [
							{"type": "StrType"}, 
							{"type": "StrType"}, 
							{"type": "StrType"}, 
							{"type": "StrType"}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'County of Origin'}, {"type": "LiteralStr", "value": 'Full Name'}, {"type": "LiteralStr", "value": 'Origin'}, {"type": "LiteralStr", "value": 'State of Origin'}], "values": [
							{"type": "StrType"}, 
							{"type": "StrType"}, 
							{"type": "StrType"}, 
							{"type": "StrType"}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Age'}, {"type": "LiteralStr", "value": 'Gender'}, {"type": "LiteralStr", "value": 'Name'}, {"type": "LiteralStr", "value": 'Skin Color'}], "values": [
							{"type": "NumType"}, 
							{"type": "StrType"}, 
							{"type": "StrType"}, 
							{"type": "StrType"}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Date'}, {"type": "LiteralStr", "value": 'Number of Adult Slaves'}, {"type": "LiteralStr", "value": 'Number of Child Slaves'}, {"type": "LiteralStr", "value": 'Number of Total Slaves Purchased'}, {"type": "LiteralStr", "value": 'Sale Details'}], "values": [
							{"type": "StrType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Discount Rate'}, {"type": "LiteralStr", "value": 'Payment Method'}, {"type": "LiteralStr", "value": 'Predicted Interest Rate'}, {"type": "LiteralStr", "value": 'Price'}, {"type": "LiteralStr", "value": 'Prices Listed'}], "values": [
								{"type": "NumType"}, 
								{"type": "StrType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}]}]}]}}
            },
        }
    });
    });

    return mod;
}