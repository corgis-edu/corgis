

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
        var dataset = blockpy._IMPORTED_DATASETS["classics"];
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

    mod.get_book = new Sk.builtin.func(function() {
        Sk.builtin.pyCheckArgs("get_book", arguments, 0, 0);
        if (!("classics" in blockpy._IMPORTED_COMPLETE_DATASETS)) {
            alert("This library has not finished loading yet. Please wait about 10 seconds and try again.")
        } else {
            return Sk.ffi.remapToPy(blockpy._IMPORTED_COMPLETE_DATASETS["classics"]);
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
            'get_book': {
                "type": "FunctionType",
                "name": 'get_book',
                "returns": 
				{"type": "ListType", "subtype": 
					{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'bibliography'}, {"type": "LiteralStr", "value": 'metadata'}, {"type": "LiteralStr", "value": 'metrics'}], "values": [
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'congress classifications'}, {"type": "LiteralStr", "value": 'languages'}, {"type": "LiteralStr", "value": 'subjects'}, {"type": "LiteralStr", "value": 'title'}, {"type": "LiteralStr", "value": 'type'}, {"type": "LiteralStr", "value": 'author'}, {"type": "LiteralStr", "value": 'publication'}], "values": [
							{"type": "StrType"}, 
							{"type": "StrType"}, 
							{"type": "StrType"}, 
							{"type": "StrType"}, 
							{"type": "StrType"}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'birth'}, {"type": "LiteralStr", "value": 'death'}, {"type": "LiteralStr", "value": 'name'}], "values": [
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "StrType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'day'}, {"type": "LiteralStr", "value": 'full'}, {"type": "LiteralStr", "value": 'month'}, {"type": "LiteralStr", "value": 'month name'}, {"type": "LiteralStr", "value": 'year'}], "values": [
								{"type": "NumType"}, 
								{"type": "StrType"}, 
								{"type": "NumType"}, 
								{"type": "StrType"}, 
								{"type": "NumType"}]}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'downloads'}, {"type": "LiteralStr", "value": 'id'}, {"type": "LiteralStr", "value": 'rank'}, {"type": "LiteralStr", "value": 'url'}, {"type": "LiteralStr", "value": 'formats'}], "values": [
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "StrType"}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'total'}, {"type": "LiteralStr", "value": 'types'}], "values": [
								{"type": "NumType"}, 
								{"type": "StrType"}]}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'difficulty'}, {"type": "LiteralStr", "value": 'sentiments'}, {"type": "LiteralStr", "value": 'statistics'}], "values": [
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'automated readability index'}, {"type": "LiteralStr", "value": 'coleman liau index'}, {"type": "LiteralStr", "value": 'dale chall readability score'}, {"type": "LiteralStr", "value": 'difficult words'}, {"type": "LiteralStr", "value": 'flesch kincaid grade'}, {"type": "LiteralStr", "value": 'flesch reading ease'}, {"type": "LiteralStr", "value": 'gunning fog'}, {"type": "LiteralStr", "value": 'linsear write formula'}, {"type": "LiteralStr", "value": 'smog index'}], "values": [
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'polarity'}, {"type": "LiteralStr", "value": 'subjectivity'}], "values": [
								{"type": "NumType"}, 
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'average letter per word'}, {"type": "LiteralStr", "value": 'average sentence length'}, {"type": "LiteralStr", "value": 'average sentence per word'}, {"type": "LiteralStr", "value": 'characters'}, {"type": "LiteralStr", "value": 'polysyllables'}, {"type": "LiteralStr", "value": 'sentences'}, {"type": "LiteralStr", "value": 'syllables'}, {"type": "LiteralStr", "value": 'words'}], "values": [
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