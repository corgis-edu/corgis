

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
        var dataset = blockpy._IMPORTED_DATASETS["graduates"];
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

    mod.get_grad_major = new Sk.builtin.func(function() {
        Sk.builtin.pyCheckArgs("get_grad_major", arguments, 0, 0);
        if (!("graduates" in blockpy._IMPORTED_COMPLETE_DATASETS)) {
            alert("This library has not finished loading yet. Please wait about 10 seconds and try again.")
        } else {
            return Sk.ffi.remapToPy(blockpy._IMPORTED_COMPLETE_DATASETS["graduates"]);
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
            'get_grad_major': {
                "type": "FunctionType",
                "name": 'get_grad_major',
                "returns": 
				{"type": "ListType", "subtype": 
					{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Year'}, {"type": "LiteralStr", "value": 'Demographics'}, {"type": "LiteralStr", "value": 'Education'}, {"type": "LiteralStr", "value": 'Salaries'}, {"type": "LiteralStr", "value": 'Employment'}], "values": [
						{"type": "NumType"}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Total'}, {"type": "LiteralStr", "value": 'Ethnicity'}, {"type": "LiteralStr", "value": 'Gender'}], "values": [
							{"type": "NumType"}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Asians'}, {"type": "LiteralStr", "value": 'Minorities'}, {"type": "LiteralStr", "value": 'Whites'}], "values": [
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Females'}, {"type": "LiteralStr", "value": 'Males'}], "values": [
								{"type": "NumType"}, 
								{"type": "NumType"}]}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Major'}, {"type": "LiteralStr", "value": 'Degrees'}], "values": [
							{"type": "StrType"}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Bachelors'}, {"type": "LiteralStr", "value": 'Doctorates'}, {"type": "LiteralStr", "value": 'Masters'}, {"type": "LiteralStr", "value": 'Professionals'}], "values": [
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}]}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Highest'}, {"type": "LiteralStr", "value": 'Lowest'}, {"type": "LiteralStr", "value": 'Mean'}, {"type": "LiteralStr", "value": 'Median'}, {"type": "LiteralStr", "value": 'Quantity'}, {"type": "LiteralStr", "value": 'Standard Deviation'}], "values": [
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Employer Type'}, {"type": "LiteralStr", "value": 'Reason Working Outside Field'}, {"type": "LiteralStr", "value": 'Reason for Not Working'}, {"type": "LiteralStr", "value": 'Status'}, {"type": "LiteralStr", "value": 'Work Activity'}], "values": [
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Business/Industry'}, {"type": "LiteralStr", "value": 'Educational Institution'}, {"type": "LiteralStr", "value": 'Government'}], "values": [
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Career Change'}, {"type": "LiteralStr", "value": 'Family-related'}, {"type": "LiteralStr", "value": 'Job Location'}, {"type": "LiteralStr", "value": 'No Job Available'}, {"type": "LiteralStr", "value": 'Other'}, {"type": "LiteralStr", "value": 'Pay/Promotion'}, {"type": "LiteralStr", "value": 'Working Conditions'}], "values": [
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Family'}, {"type": "LiteralStr", "value": 'Layoff'}, {"type": "LiteralStr", "value": 'No Job Available'}, {"type": "LiteralStr", "value": 'No need/want'}, {"type": "LiteralStr", "value": 'Student'}], "values": [
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Employed'}, {"type": "LiteralStr", "value": 'Not in Labor Force'}, {"type": "LiteralStr", "value": 'Unemployed'}], "values": [
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Accounting/Finance/Contracts'}, {"type": "LiteralStr", "value": 'Applied Research'}, {"type": "LiteralStr", "value": 'Basic Research'}, {"type": "LiteralStr", "value": 'Computer Applications'}, {"type": "LiteralStr", "value": 'Design'}, {"type": "LiteralStr", "value": 'Development'}, {"type": "LiteralStr", "value": 'Human Resources'}, {"type": "LiteralStr", "value": 'Managing/Supervising People/Projects'}, {"type": "LiteralStr", "value": 'Other'}, {"type": "LiteralStr", "value": 'Productions/Operations/Maintenance'}, {"type": "LiteralStr", "value": 'Professional Service'}, {"type": "LiteralStr", "value": 'Qualitity/Productivity Management'}, {"type": "LiteralStr", "value": 'Sales, Purchasing, Marketing'}, {"type": "LiteralStr", "value": 'Teaching'}], "values": [
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
								{"type": "NumType"}]}]}]}}
            },
        }
    });
    });

    return mod;
}