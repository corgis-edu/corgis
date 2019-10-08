

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
        var dataset = blockpy._IMPORTED_DATASETS["drugs"];
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
        if (!("drugs" in blockpy._IMPORTED_DATASETS)) {
            alert("This library has not finished loading yet. Please wait about 10 seconds and try again.")
        } else {
            return blockpy._IMPORTED_DATASETS["drugs"];
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
					{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'State'}, {"type": "LiteralStr", "value": 'Year'}, {"type": "LiteralStr", "value": 'Population'}, {"type": "LiteralStr", "value": 'Rates'}, {"type": "LiteralStr", "value": 'Totals'}], "values": [
						{"type": "StrType"}, 
						{"type": "NumType"}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": '12-17'}, {"type": "LiteralStr", "value": '12-20'}, {"type": "LiteralStr", "value": '18-25'}, {"type": "LiteralStr", "value": '26+'}], "values": [
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Pain Relievers Abuse Past Year'}, {"type": "LiteralStr", "value": 'Alcohol'}, {"type": "LiteralStr", "value": 'Illicit Drugs'}, {"type": "LiteralStr", "value": 'Marijuana'}, {"type": "LiteralStr", "value": 'Tobacco'}], "values": [
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": '12-17'}, {"type": "LiteralStr", "value": '18-25'}, {"type": "LiteralStr", "value": '26+'}], "values": [
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Abuse Past Year'}, {"type": "LiteralStr", "value": 'Binge Past Month'}, {"type": "LiteralStr", "value": 'Dependence Past Year'}, {"type": "LiteralStr", "value": 'In Minors'}, {"type": "LiteralStr", "value": 'Need Treatment Past Year'}, {"type": "LiteralStr", "value": 'Perceptions of Risk'}, {"type": "LiteralStr", "value": 'Use Past Month'}], "values": [
								{"type": "DictType", "literals": [{"type": "LiteralStr", "value": '12-17'}, {"type": "LiteralStr", "value": '18-25'}, {"type": "LiteralStr", "value": '26+'}], "values": [
									{"type": "NumType"}, 
									{"type": "NumType"}, 
									{"type": "NumType"}]}, 
								{"type": "DictType", "literals": [{"type": "LiteralStr", "value": '12-17'}, {"type": "LiteralStr", "value": '18-25'}, {"type": "LiteralStr", "value": '26+'}], "values": [
									{"type": "NumType"}, 
									{"type": "NumType"}, 
									{"type": "NumType"}]}, 
								{"type": "DictType", "literals": [{"type": "LiteralStr", "value": '12-17'}, {"type": "LiteralStr", "value": '18-25'}, {"type": "LiteralStr", "value": '26+'}], "values": [
									{"type": "NumType"}, 
									{"type": "NumType"}, 
									{"type": "NumType"}]}, 
								{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Abuse'}, {"type": "LiteralStr", "value": 'Use'}], "values": [
									{"type": "NumType"}, 
									{"type": "NumType"}]}, 
								{"type": "DictType", "literals": [{"type": "LiteralStr", "value": '12-17'}, {"type": "LiteralStr", "value": '18-25'}, {"type": "LiteralStr", "value": '26+'}], "values": [
									{"type": "NumType"}, 
									{"type": "NumType"}, 
									{"type": "NumType"}]}, 
								{"type": "DictType", "literals": [{"type": "LiteralStr", "value": '12-17'}, {"type": "LiteralStr", "value": '18-25'}, {"type": "LiteralStr", "value": '26+'}], "values": [
									{"type": "NumType"}, 
									{"type": "NumType"}, 
									{"type": "NumType"}]}, 
								{"type": "DictType", "literals": [{"type": "LiteralStr", "value": '12-17'}, {"type": "LiteralStr", "value": '18-25'}, {"type": "LiteralStr", "value": '26+'}], "values": [
									{"type": "NumType"}, 
									{"type": "NumType"}, 
									{"type": "NumType"}]}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Abuse Past Year'}, {"type": "LiteralStr", "value": 'All Except Marijuana Used Past Month'}, {"type": "LiteralStr", "value": 'Cocaine Used Past Year'}, {"type": "LiteralStr", "value": 'Dependence Past Year'}, {"type": "LiteralStr", "value": 'Need Treatment Past Year'}, {"type": "LiteralStr", "value": 'Used Past Month'}], "values": [
								{"type": "DictType", "literals": [{"type": "LiteralStr", "value": '12-17'}, {"type": "LiteralStr", "value": '18-25'}, {"type": "LiteralStr", "value": '26+'}], "values": [
									{"type": "NumType"}, 
									{"type": "NumType"}, 
									{"type": "NumType"}]}, 
								{"type": "DictType", "literals": [{"type": "LiteralStr", "value": '12-17'}, {"type": "LiteralStr", "value": '18-25'}, {"type": "LiteralStr", "value": '26+'}], "values": [
									{"type": "NumType"}, 
									{"type": "NumType"}, 
									{"type": "NumType"}]}, 
								{"type": "DictType", "literals": [{"type": "LiteralStr", "value": '12-17'}, {"type": "LiteralStr", "value": '18-25'}, {"type": "LiteralStr", "value": '26+'}], "values": [
									{"type": "NumType"}, 
									{"type": "NumType"}, 
									{"type": "NumType"}]}, 
								{"type": "DictType", "literals": [{"type": "LiteralStr", "value": '12-17'}, {"type": "LiteralStr", "value": '18-25'}, {"type": "LiteralStr", "value": '26+'}], "values": [
									{"type": "NumType"}, 
									{"type": "NumType"}, 
									{"type": "NumType"}]}, 
								{"type": "DictType", "literals": [{"type": "LiteralStr", "value": '12-17'}, {"type": "LiteralStr", "value": '18-25'}, {"type": "LiteralStr", "value": '26+'}], "values": [
									{"type": "NumType"}, 
									{"type": "NumType"}, 
									{"type": "NumType"}]}, 
								{"type": "DictType", "literals": [{"type": "LiteralStr", "value": '12-17'}, {"type": "LiteralStr", "value": '18-25'}, {"type": "LiteralStr", "value": '26+'}], "values": [
									{"type": "NumType"}, 
									{"type": "NumType"}, 
									{"type": "NumType"}]}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'New Users'}, {"type": "LiteralStr", "value": 'Perceptions of Risk'}, {"type": "LiteralStr", "value": 'Used Past Month'}, {"type": "LiteralStr", "value": 'Used Past Year'}], "values": [
								{"type": "DictType", "literals": [{"type": "LiteralStr", "value": '12-17'}, {"type": "LiteralStr", "value": '18-25'}, {"type": "LiteralStr", "value": '26+'}], "values": [
									{"type": "NumType"}, 
									{"type": "NumType"}, 
									{"type": "NumType"}]}, 
								{"type": "DictType", "literals": [{"type": "LiteralStr", "value": '12-17'}, {"type": "LiteralStr", "value": '18-25'}, {"type": "LiteralStr", "value": '26+'}], "values": [
									{"type": "NumType"}, 
									{"type": "NumType"}, 
									{"type": "NumType"}]}, 
								{"type": "DictType", "literals": [{"type": "LiteralStr", "value": '12-17'}, {"type": "LiteralStr", "value": '18-25'}, {"type": "LiteralStr", "value": '26+'}], "values": [
									{"type": "NumType"}, 
									{"type": "NumType"}, 
									{"type": "NumType"}]}, 
								{"type": "DictType", "literals": [{"type": "LiteralStr", "value": '12-17'}, {"type": "LiteralStr", "value": '18-25'}, {"type": "LiteralStr", "value": '26+'}], "values": [
									{"type": "NumType"}, 
									{"type": "NumType"}, 
									{"type": "NumType"}]}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Cigarette Past Month'}, {"type": "LiteralStr", "value": 'Perceptions of Risk'}, {"type": "LiteralStr", "value": 'Use Past Month'}], "values": [
								{"type": "DictType", "literals": [{"type": "LiteralStr", "value": '12-17'}, {"type": "LiteralStr", "value": '18-25'}, {"type": "LiteralStr", "value": '26+'}], "values": [
									{"type": "NumType"}, 
									{"type": "NumType"}, 
									{"type": "NumType"}]}, 
								{"type": "DictType", "literals": [{"type": "LiteralStr", "value": '12-17'}, {"type": "LiteralStr", "value": '18-25'}, {"type": "LiteralStr", "value": '26+'}], "values": [
									{"type": "NumType"}, 
									{"type": "NumType"}, 
									{"type": "NumType"}]}, 
								{"type": "DictType", "literals": [{"type": "LiteralStr", "value": '12-17'}, {"type": "LiteralStr", "value": '18-25'}, {"type": "LiteralStr", "value": '26+'}], "values": [
									{"type": "NumType"}, 
									{"type": "NumType"}, 
									{"type": "NumType"}]}]}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Pain Relievers Abuse Past Year'}, {"type": "LiteralStr", "value": 'Alcohol'}, {"type": "LiteralStr", "value": 'Illicit Drugs'}, {"type": "LiteralStr", "value": 'Marijuana'}, {"type": "LiteralStr", "value": 'Tobacco'}], "values": [
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": '12-17'}, {"type": "LiteralStr", "value": '18-25'}, {"type": "LiteralStr", "value": '26+'}], "values": [
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Abuse Past Year'}, {"type": "LiteralStr", "value": 'Binge Past Month'}, {"type": "LiteralStr", "value": 'Dependence Past Year'}, {"type": "LiteralStr", "value": 'In Minors'}, {"type": "LiteralStr", "value": 'Need Treatment Past Year'}, {"type": "LiteralStr", "value": 'Perceptions of Risk'}, {"type": "LiteralStr", "value": 'Use Past Month'}], "values": [
								{"type": "DictType", "literals": [{"type": "LiteralStr", "value": '12-17'}, {"type": "LiteralStr", "value": '18-25'}, {"type": "LiteralStr", "value": '26+'}], "values": [
									{"type": "NumType"}, 
									{"type": "NumType"}, 
									{"type": "NumType"}]}, 
								{"type": "DictType", "literals": [{"type": "LiteralStr", "value": '12-17'}, {"type": "LiteralStr", "value": '18-25'}, {"type": "LiteralStr", "value": '26+'}], "values": [
									{"type": "NumType"}, 
									{"type": "NumType"}, 
									{"type": "NumType"}]}, 
								{"type": "DictType", "literals": [{"type": "LiteralStr", "value": '12-17'}, {"type": "LiteralStr", "value": '18-25'}, {"type": "LiteralStr", "value": '26+'}], "values": [
									{"type": "NumType"}, 
									{"type": "NumType"}, 
									{"type": "NumType"}]}, 
								{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Abuse'}, {"type": "LiteralStr", "value": 'Use'}], "values": [
									{"type": "NumType"}, 
									{"type": "NumType"}]}, 
								{"type": "DictType", "literals": [{"type": "LiteralStr", "value": '12-17'}, {"type": "LiteralStr", "value": '18-25'}, {"type": "LiteralStr", "value": '26+'}], "values": [
									{"type": "NumType"}, 
									{"type": "NumType"}, 
									{"type": "NumType"}]}, 
								{"type": "DictType", "literals": [{"type": "LiteralStr", "value": '12-17'}, {"type": "LiteralStr", "value": '18-25'}, {"type": "LiteralStr", "value": '26+'}], "values": [
									{"type": "NumType"}, 
									{"type": "NumType"}, 
									{"type": "NumType"}]}, 
								{"type": "DictType", "literals": [{"type": "LiteralStr", "value": '12-17'}, {"type": "LiteralStr", "value": '18-25'}, {"type": "LiteralStr", "value": '26+'}], "values": [
									{"type": "NumType"}, 
									{"type": "NumType"}, 
									{"type": "NumType"}]}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Abuse Past Year'}, {"type": "LiteralStr", "value": 'All Except Marijuana Used Past Month'}, {"type": "LiteralStr", "value": 'Cocaine Used Past Year'}, {"type": "LiteralStr", "value": 'Dependence Past Year'}, {"type": "LiteralStr", "value": 'Need Treatment Past Year'}, {"type": "LiteralStr", "value": 'Used Past Month'}], "values": [
								{"type": "DictType", "literals": [{"type": "LiteralStr", "value": '12-17'}, {"type": "LiteralStr", "value": '18-25'}, {"type": "LiteralStr", "value": '26+'}], "values": [
									{"type": "NumType"}, 
									{"type": "NumType"}, 
									{"type": "NumType"}]}, 
								{"type": "DictType", "literals": [{"type": "LiteralStr", "value": '12-17'}, {"type": "LiteralStr", "value": '18-25'}, {"type": "LiteralStr", "value": '26+'}], "values": [
									{"type": "NumType"}, 
									{"type": "NumType"}, 
									{"type": "NumType"}]}, 
								{"type": "DictType", "literals": [{"type": "LiteralStr", "value": '12-17'}, {"type": "LiteralStr", "value": '18-25'}, {"type": "LiteralStr", "value": '26+'}], "values": [
									{"type": "NumType"}, 
									{"type": "NumType"}, 
									{"type": "NumType"}]}, 
								{"type": "DictType", "literals": [{"type": "LiteralStr", "value": '12-17'}, {"type": "LiteralStr", "value": '18-25'}, {"type": "LiteralStr", "value": '26+'}], "values": [
									{"type": "NumType"}, 
									{"type": "NumType"}, 
									{"type": "NumType"}]}, 
								{"type": "DictType", "literals": [{"type": "LiteralStr", "value": '12-17'}, {"type": "LiteralStr", "value": '18-25'}, {"type": "LiteralStr", "value": '26+'}], "values": [
									{"type": "NumType"}, 
									{"type": "NumType"}, 
									{"type": "NumType"}]}, 
								{"type": "DictType", "literals": [{"type": "LiteralStr", "value": '12-17'}, {"type": "LiteralStr", "value": '18-25'}, {"type": "LiteralStr", "value": '26+'}], "values": [
									{"type": "NumType"}, 
									{"type": "NumType"}, 
									{"type": "NumType"}]}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'New Users'}, {"type": "LiteralStr", "value": 'Perceptions of Risk'}, {"type": "LiteralStr", "value": 'Used Past Month'}, {"type": "LiteralStr", "value": 'Used Past Year'}], "values": [
								{"type": "DictType", "literals": [{"type": "LiteralStr", "value": '12-17'}, {"type": "LiteralStr", "value": '18-25'}, {"type": "LiteralStr", "value": '26+'}], "values": [
									{"type": "NumType"}, 
									{"type": "NumType"}, 
									{"type": "NumType"}]}, 
								{"type": "DictType", "literals": [{"type": "LiteralStr", "value": '12-17'}, {"type": "LiteralStr", "value": '18-25'}, {"type": "LiteralStr", "value": '26+'}], "values": [
									{"type": "NumType"}, 
									{"type": "NumType"}, 
									{"type": "NumType"}]}, 
								{"type": "DictType", "literals": [{"type": "LiteralStr", "value": '12-17'}, {"type": "LiteralStr", "value": '18-25'}, {"type": "LiteralStr", "value": '26+'}], "values": [
									{"type": "NumType"}, 
									{"type": "NumType"}, 
									{"type": "NumType"}]}, 
								{"type": "DictType", "literals": [{"type": "LiteralStr", "value": '12-17'}, {"type": "LiteralStr", "value": '18-25'}, {"type": "LiteralStr", "value": '26+'}], "values": [
									{"type": "NumType"}, 
									{"type": "NumType"}, 
									{"type": "NumType"}]}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Cigarette Past Month'}, {"type": "LiteralStr", "value": 'Perceptions of Risk'}, {"type": "LiteralStr", "value": 'Use Past Month'}], "values": [
								{"type": "DictType", "literals": [{"type": "LiteralStr", "value": '12-17'}, {"type": "LiteralStr", "value": '18-25'}, {"type": "LiteralStr", "value": '26+'}], "values": [
									{"type": "NumType"}, 
									{"type": "NumType"}, 
									{"type": "NumType"}]}, 
								{"type": "DictType", "literals": [{"type": "LiteralStr", "value": '12-17'}, {"type": "LiteralStr", "value": '18-25'}, {"type": "LiteralStr", "value": '26+'}], "values": [
									{"type": "NumType"}, 
									{"type": "NumType"}, 
									{"type": "NumType"}]}, 
								{"type": "DictType", "literals": [{"type": "LiteralStr", "value": '12-17'}, {"type": "LiteralStr", "value": '18-25'}, {"type": "LiteralStr", "value": '26+'}], "values": [
									{"type": "NumType"}, 
									{"type": "NumType"}, 
									{"type": "NumType"}]}]}]}]}}
            },
        }
    });
    });

    return mod;
}