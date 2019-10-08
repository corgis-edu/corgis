

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
        var dataset = blockpy._IMPORTED_DATASETS["supreme_court"];
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

    mod.get_court_case = new Sk.builtin.func(function() {
        Sk.builtin.pyCheckArgs("get_court_case", arguments, 0, 0);
        if (!("supreme_court" in blockpy._IMPORTED_DATASETS)) {
            alert("This library has not finished loading yet. Please wait about 10 seconds and try again.")
        } else {
            return Sk.ffi.remapToPy(blockpy._IMPORTED_DATASETS["supreme_court"]);
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
            'get_court_case': {
                "type": "FunctionType",
                "name": 'get_court_case',
                "returns": 
				{"type": "ListType", "subtype": 
					{"type": "DictType", "literals": [{"type": "LiteralStr", "value": '3 judge dc?'}, {"type": "LiteralStr", "value": 'docket'}, {"type": "LiteralStr", "value": 'name'}, {"type": "LiteralStr", "value": 'citation'}, {"type": "LiteralStr", "value": 'decision'}, {"type": "LiteralStr", "value": 'id'}, {"type": "LiteralStr", "value": 'issue'}, {"type": "LiteralStr", "value": 'laws'}, {"type": "LiteralStr", "value": 'lower court'}, {"type": "LiteralStr", "value": 'natural court'}, {"type": "LiteralStr", "value": 'origin'}, {"type": "LiteralStr", "value": 'source'}, {"type": "LiteralStr", "value": 'voting'}, {"type": "LiteralStr", "value": 'arguments'}], "values": [
						{"type": "NumType"}, 
						{"type": "NumType"}, 
						{"type": "StrType"}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'led'}, {"type": "LiteralStr", "value": 'lexis'}, {"type": "LiteralStr", "value": 'sct'}, {"type": "LiteralStr", "value": 'us'}], "values": [
							{"type": "StrType"}, 
							{"type": "StrType"}, 
							{"type": "StrType"}, 
							{"type": "StrType"}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'authority 1'}, {"type": "LiteralStr", "value": 'authority 2'}, {"type": "LiteralStr", "value": 'direction'}, {"type": "LiteralStr", "value": 'dissent agrees'}, {"type": "LiteralStr", "value": 'jurisdiction'}, {"type": "LiteralStr", "value": 'precedent altered?'}, {"type": "LiteralStr", "value": 'term'}, {"type": "LiteralStr", "value": 'type'}, {"type": "LiteralStr", "value": 'unconstitutional'}, {"type": "LiteralStr", "value": 'winning party'}, {"type": "LiteralStr", "value": 'admin action'}, {"type": "LiteralStr", "value": 'case'}, {"type": "LiteralStr", "value": 'date'}], "values": [
							{"type": "StrType"}, 
							{"type": "StrType"}, 
							{"type": "StrType"}, 
							{"type": "NumType"}, 
							{"type": "StrType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "StrType"}, 
							{"type": "StrType"}, 
							{"type": "StrType"}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'agency'}, {"type": "LiteralStr", "value": 'id'}, {"type": "LiteralStr", "value": 'state'}], "values": [
								{"type": "StrType"}, 
								{"type": "NumType"}, 
								{"type": "StrType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'disposition'}, {"type": "LiteralStr", "value": 'unusual'}], "values": [
								{"type": "StrType"}, 
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'day'}, {"type": "LiteralStr", "value": 'full'}, {"type": "LiteralStr", "value": 'month'}, {"type": "LiteralStr", "value": 'year'}], "values": [
								{"type": "NumType"}, 
								{"type": "StrType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}]}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'case'}, {"type": "LiteralStr", "value": 'case issues'}, {"type": "LiteralStr", "value": 'docket'}, {"type": "LiteralStr", "value": 'vote'}], "values": [
							{"type": "StrType"}, 
							{"type": "StrType"}, 
							{"type": "StrType"}, 
							{"type": "StrType"}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'area'}, {"type": "LiteralStr", "value": 'id'}, {"type": "LiteralStr", "value": 'text'}], "values": [
							{"type": "StrType"}, 
							{"type": "NumType"}, 
							{"type": "StrType"}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'id'}, {"type": "LiteralStr", "value": 'type'}], "values": [
							{"type": "NumType"}, 
							{"type": "StrType"}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'direction'}, {"type": "LiteralStr", "value": 'disagreement?'}, {"type": "LiteralStr", "value": 'disposition'}, {"type": "LiteralStr", "value": 'reasons'}], "values": [
							{"type": "StrType"}, 
							{"type": "NumType"}, 
							{"type": "StrType"}, 
							{"type": "StrType"}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'chief'}, {"type": "LiteralStr", "value": 'id'}, {"type": "LiteralStr", "value": 'period'}, {"type": "LiteralStr", "value": 'end'}, {"type": "LiteralStr", "value": 'start'}], "values": [
							{"type": "StrType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'day'}, {"type": "LiteralStr", "value": 'full'}, {"type": "LiteralStr", "value": 'month'}, {"type": "LiteralStr", "value": 'year'}], "values": [
								{"type": "NumType"}, 
								{"type": "StrType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'day'}, {"type": "LiteralStr", "value": 'full'}, {"type": "LiteralStr", "value": 'month'}, {"type": "LiteralStr", "value": 'year'}], "values": [
								{"type": "NumType"}, 
								{"type": "StrType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}]}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'id'}, {"type": "LiteralStr", "value": 'name'}, {"type": "LiteralStr", "value": 'state'}], "values": [
							{"type": "NumType"}, 
							{"type": "StrType"}, 
							{"type": "StrType"}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'id'}, {"type": "LiteralStr", "value": 'name'}, {"type": "LiteralStr", "value": 'state'}], "values": [
							{"type": "NumType"}, 
							{"type": "StrType"}, 
							{"type": "StrType"}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'majority'}, {"type": "LiteralStr", "value": 'minority'}, {"type": "LiteralStr", "value": 'split on second'}, {"type": "LiteralStr", "value": 'unclear'}, {"type": "LiteralStr", "value": 'majority assigner'}, {"type": "LiteralStr", "value": 'majority writer'}], "values": [
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'id'}, {"type": "LiteralStr", "value": 'long name'}, {"type": "LiteralStr", "value": 'name'}], "values": [
								{"type": "NumType"}, 
								{"type": "StrType"}, 
								{"type": "StrType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'id'}, {"type": "LiteralStr", "value": 'long name'}, {"type": "LiteralStr", "value": 'name'}], "values": [
								{"type": "NumType"}, 
								{"type": "StrType"}, 
								{"type": "StrType"}]}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'date argued'}, {"type": "LiteralStr", "value": 'date reargued'}, {"type": "LiteralStr", "value": 'petitioner'}, {"type": "LiteralStr", "value": 'respondent'}], "values": [
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'day'}, {"type": "LiteralStr", "value": 'full'}, {"type": "LiteralStr", "value": 'month'}, {"type": "LiteralStr", "value": 'year'}], "values": [
								{"type": "NumType"}, 
								{"type": "StrType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'day'}, {"type": "LiteralStr", "value": 'full'}, {"type": "LiteralStr", "value": 'month'}, {"type": "LiteralStr", "value": 'year'}], "values": [
								{"type": "NumType"}, 
								{"type": "StrType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'entity'}, {"type": "LiteralStr", "value": 'id'}, {"type": "LiteralStr", "value": 'state'}], "values": [
								{"type": "StrType"}, 
								{"type": "NumType"}, 
								{"type": "StrType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'entity'}, {"type": "LiteralStr", "value": 'id'}, {"type": "LiteralStr", "value": 'state'}], "values": [
								{"type": "StrType"}, 
								{"type": "NumType"}, 
								{"type": "StrType"}]}]}]}}
            },
        }
    });
    });

    return mod;
}