

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
        var dataset = blockpy._IMPORTED_DATASETS["retail_services"];
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
    
    
    
    mod._tifa_definitions = new Sk.builtin.func(function() {
        return Sk.ffi.remapToPy({"type": "ModuleType",
        "fields": {
            'get': {
                "type": "FunctionType",
                "name": 'get',
                "returns": {
                    "type": "ListType",
                    "empty": False,
                    "subtype": {"type": "NumType"}
                }
            },
            'get_report': {
                "type": "FunctionType",
                "name": 'get_report',
                "returns": 
				{"type": "ListType", "subtype": 
					{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'time'}, {"type": "LiteralStr", "value": 'data'}], "values": [
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'index'}, {"type": "LiteralStr", "value": 'month'}, {"type": "LiteralStr", "value": 'month name'}, {"type": "LiteralStr", "value": 'period'}, {"type": "LiteralStr", "value": 'year'}], "values": [
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "StrType"}, 
							{"type": "StrType"}, 
							{"type": "NumType"}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'inventories'}, {"type": "LiteralStr", "value": 'ratio'}, {"type": "LiteralStr", "value": 'sales'}], "values": [
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'all department stores'}, {"type": "LiteralStr", "value": 'all other home furnishings stores'}, {"type": "LiteralStr", "value": 'all other merchandise stores'}, {"type": "LiteralStr", "value": 'appliances and other electronics stores'}, {"type": "LiteralStr", "value": 'auto and other motor vehicles'}, {"type": "LiteralStr", "value": 'automobile dealers'}, {"type": "LiteralStr", "value": 'automotive parts and tire stores'}, {"type": "LiteralStr", "value": 'beer, wine, and liquor stores'}, {"type": "LiteralStr", "value": 'book stores'}, {"type": "LiteralStr", "value": 'building materials and garden supplies dealers'}, {"type": "LiteralStr", "value": 'building supplies dealers'}, {"type": "LiteralStr", "value": 'clothing stores'}, {"type": "LiteralStr", "value": 'computer and software stores'}, {"type": "LiteralStr", "value": 'discount department stores'}, {"type": "LiteralStr", "value": 'drinking places'}, {"type": "LiteralStr", "value": 'electronic shopping and mail-order houses'}, {"type": "LiteralStr", "value": 'electronics and appliance stores'}, {"type": "LiteralStr", "value": 'family clothing stores'}, {"type": "LiteralStr", "value": 'floor covering stores'}, {"type": "LiteralStr", "value": 'food and beverage stores'}, {"type": "LiteralStr", "value": 'food services and drinking places'}, {"type": "LiteralStr", "value": 'fuel dealers'}, {"type": "LiteralStr", "value": 'full service restaurants'}, {"type": "LiteralStr", "value": 'furniture and home furnishings stores'}, {"type": "LiteralStr", "value": 'furniture stores'}, {"type": "LiteralStr", "value": 'furniture, home furn, electronics, and appliance stores'}, {"type": "LiteralStr", "value": 'gafo'}, {"type": "LiteralStr", "value": 'gasoline stations'}, {"type": "LiteralStr", "value": 'general merchandise stores'}, {"type": "LiteralStr", "value": 'gift, novelty, and souvenir stores'}, {"type": "LiteralStr", "value": 'grocery stores'}, {"type": "LiteralStr", "value": 'hardware stores'}, {"type": "LiteralStr", "value": 'health and personal care stores'}, {"type": "LiteralStr", "value": 'hobby, toy, and game stores'}, {"type": "LiteralStr", "value": 'home furnishings stores'}, {"type": "LiteralStr", "value": 'household appliance stores'}, {"type": "LiteralStr", "value": 'jewelry stores'}, {"type": "LiteralStr", "value": 'limited service eating places'}, {"type": "LiteralStr", "value": "men's clothing stores"}, {"type": "LiteralStr", "value": 'miscellaneous store retailers'}, {"type": "LiteralStr", "value": 'motor vehicle and parts dealers'}, {"type": "LiteralStr", "value": 'new car dealers'}, {"type": "LiteralStr", "value": 'non-discount department stores'}, {"type": "LiteralStr", "value": 'non-leased department stores'}, {"type": "LiteralStr", "value": 'nonstore retailers'}, {"type": "LiteralStr", "value": 'office supplies and stationery stores'}, {"type": "LiteralStr", "value": 'office supplies, stationery, and gift stores'}, {"type": "LiteralStr", "value": 'other clothing stores'}, {"type": "LiteralStr", "value": 'other general merchandise stores'}, {"type": "LiteralStr", "value": 'paint and wallpaper stores'}, {"type": "LiteralStr", "value": 'pharmacies and drug stores'}, {"type": "LiteralStr", "value": 'radio, TV, and electronics stores'}, {"type": "LiteralStr", "value": 'retail trade'}, {"type": "LiteralStr", "value": 'retail trade and food services'}, {"type": "LiteralStr", "value": 'retail trade and food services, ex auto'}, {"type": "LiteralStr", "value": 'retail trade, ex auto'}, {"type": "LiteralStr", "value": 'shoe stores'}, {"type": "LiteralStr", "value": 'sporting goods stores'}, {"type": "LiteralStr", "value": 'sporting goods, hobby, book, and music stores'}, {"type": "LiteralStr", "value": 'supermarkets and other grocery (except convenience) stores'}, {"type": "LiteralStr", "value": 'used car dealers'}, {"type": "LiteralStr", "value": 'used merchandise stores'}, {"type": "LiteralStr", "value": 'warehouse clubs and superstores'}, {"type": "LiteralStr", "value": "women's clothing stores"}], "values": [
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
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'all department stores'}, {"type": "LiteralStr", "value": 'all other home furnishings stores'}, {"type": "LiteralStr", "value": 'all other merchandise stores'}, {"type": "LiteralStr", "value": 'appliances and other electronics stores'}, {"type": "LiteralStr", "value": 'auto and other motor vehicles'}, {"type": "LiteralStr", "value": 'automobile dealers'}, {"type": "LiteralStr", "value": 'automotive parts and tire stores'}, {"type": "LiteralStr", "value": 'beer, wine, and liquor stores'}, {"type": "LiteralStr", "value": 'book stores'}, {"type": "LiteralStr", "value": 'building materials and garden supplies dealers'}, {"type": "LiteralStr", "value": 'building supplies dealers'}, {"type": "LiteralStr", "value": 'clothing stores'}, {"type": "LiteralStr", "value": 'computer and software stores'}, {"type": "LiteralStr", "value": 'discount department stores'}, {"type": "LiteralStr", "value": 'drinking places'}, {"type": "LiteralStr", "value": 'electronic shopping and mail-order houses'}, {"type": "LiteralStr", "value": 'electronics and appliance stores'}, {"type": "LiteralStr", "value": 'family clothing stores'}, {"type": "LiteralStr", "value": 'floor covering stores'}, {"type": "LiteralStr", "value": 'food and beverage stores'}, {"type": "LiteralStr", "value": 'food services and drinking places'}, {"type": "LiteralStr", "value": 'fuel dealers'}, {"type": "LiteralStr", "value": 'full service restaurants'}, {"type": "LiteralStr", "value": 'furniture and home furnishings stores'}, {"type": "LiteralStr", "value": 'furniture stores'}, {"type": "LiteralStr", "value": 'furniture, home furn, electronics, and appliance stores'}, {"type": "LiteralStr", "value": 'gafo'}, {"type": "LiteralStr", "value": 'gasoline stations'}, {"type": "LiteralStr", "value": 'general merchandise stores'}, {"type": "LiteralStr", "value": 'gift, novelty, and souvenir stores'}, {"type": "LiteralStr", "value": 'grocery stores'}, {"type": "LiteralStr", "value": 'hardware stores'}, {"type": "LiteralStr", "value": 'health and personal care stores'}, {"type": "LiteralStr", "value": 'hobby, toy, and game stores'}, {"type": "LiteralStr", "value": 'home furnishings stores'}, {"type": "LiteralStr", "value": 'household appliance stores'}, {"type": "LiteralStr", "value": 'jewelry stores'}, {"type": "LiteralStr", "value": 'limited service eating places'}, {"type": "LiteralStr", "value": "men's clothing stores"}, {"type": "LiteralStr", "value": 'miscellaneous store retailers'}, {"type": "LiteralStr", "value": 'motor vehicle and parts dealers'}, {"type": "LiteralStr", "value": 'new car dealers'}, {"type": "LiteralStr", "value": 'non-discount department stores'}, {"type": "LiteralStr", "value": 'non-leased department stores'}, {"type": "LiteralStr", "value": 'nonstore retailers'}, {"type": "LiteralStr", "value": 'office supplies and stationery stores'}, {"type": "LiteralStr", "value": 'office supplies, stationery, and gift stores'}, {"type": "LiteralStr", "value": 'other clothing stores'}, {"type": "LiteralStr", "value": 'other general merchandise stores'}, {"type": "LiteralStr", "value": 'paint and wallpaper stores'}, {"type": "LiteralStr", "value": 'pharmacies and drug stores'}, {"type": "LiteralStr", "value": 'radio, TV, and electronics stores'}, {"type": "LiteralStr", "value": 'retail trade'}, {"type": "LiteralStr", "value": 'retail trade and food services'}, {"type": "LiteralStr", "value": 'retail trade and food services, ex auto'}, {"type": "LiteralStr", "value": 'retail trade, ex auto'}, {"type": "LiteralStr", "value": 'shoe stores'}, {"type": "LiteralStr", "value": 'sporting goods stores'}, {"type": "LiteralStr", "value": 'sporting goods, hobby, book, and music stores'}, {"type": "LiteralStr", "value": 'supermarkets and other grocery (except convenience) stores'}, {"type": "LiteralStr", "value": 'used car dealers'}, {"type": "LiteralStr", "value": 'used merchandise stores'}, {"type": "LiteralStr", "value": 'warehouse clubs and superstores'}, {"type": "LiteralStr", "value": "women's clothing stores"}], "values": [
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
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'all department stores'}, {"type": "LiteralStr", "value": 'all other home furnishings stores'}, {"type": "LiteralStr", "value": 'all other merchandise stores'}, {"type": "LiteralStr", "value": 'appliances and other electronics stores'}, {"type": "LiteralStr", "value": 'auto and other motor vehicles'}, {"type": "LiteralStr", "value": 'automobile dealers'}, {"type": "LiteralStr", "value": 'automotive parts and tire stores'}, {"type": "LiteralStr", "value": 'beer, wine, and liquor stores'}, {"type": "LiteralStr", "value": 'book stores'}, {"type": "LiteralStr", "value": 'building materials and garden supplies dealers'}, {"type": "LiteralStr", "value": 'building supplies dealers'}, {"type": "LiteralStr", "value": 'clothing stores'}, {"type": "LiteralStr", "value": 'computer and software stores'}, {"type": "LiteralStr", "value": 'discount department stores'}, {"type": "LiteralStr", "value": 'drinking places'}, {"type": "LiteralStr", "value": 'electronic shopping and mail-order houses'}, {"type": "LiteralStr", "value": 'electronics and appliance stores'}, {"type": "LiteralStr", "value": 'family clothing stores'}, {"type": "LiteralStr", "value": 'floor covering stores'}, {"type": "LiteralStr", "value": 'food and beverage stores'}, {"type": "LiteralStr", "value": 'food services and drinking places'}, {"type": "LiteralStr", "value": 'fuel dealers'}, {"type": "LiteralStr", "value": 'full service restaurants'}, {"type": "LiteralStr", "value": 'furniture and home furnishings stores'}, {"type": "LiteralStr", "value": 'furniture stores'}, {"type": "LiteralStr", "value": 'furniture, home furn, electronics, and appliance stores'}, {"type": "LiteralStr", "value": 'gafo'}, {"type": "LiteralStr", "value": 'gasoline stations'}, {"type": "LiteralStr", "value": 'general merchandise stores'}, {"type": "LiteralStr", "value": 'gift, novelty, and souvenir stores'}, {"type": "LiteralStr", "value": 'grocery stores'}, {"type": "LiteralStr", "value": 'hardware stores'}, {"type": "LiteralStr", "value": 'health and personal care stores'}, {"type": "LiteralStr", "value": 'hobby, toy, and game stores'}, {"type": "LiteralStr", "value": 'home furnishings stores'}, {"type": "LiteralStr", "value": 'household appliance stores'}, {"type": "LiteralStr", "value": 'jewelry stores'}, {"type": "LiteralStr", "value": 'limited service eating places'}, {"type": "LiteralStr", "value": "men's clothing stores"}, {"type": "LiteralStr", "value": 'miscellaneous store retailers'}, {"type": "LiteralStr", "value": 'motor vehicle and parts dealers'}, {"type": "LiteralStr", "value": 'new car dealers'}, {"type": "LiteralStr", "value": 'non-discount department stores'}, {"type": "LiteralStr", "value": 'non-leased department stores'}, {"type": "LiteralStr", "value": 'nonstore retailers'}, {"type": "LiteralStr", "value": 'office supplies and stationery stores'}, {"type": "LiteralStr", "value": 'office supplies, stationery, and gift stores'}, {"type": "LiteralStr", "value": 'other clothing stores'}, {"type": "LiteralStr", "value": 'other general merchandise stores'}, {"type": "LiteralStr", "value": 'paint and wallpaper stores'}, {"type": "LiteralStr", "value": 'pharmacies and drug stores'}, {"type": "LiteralStr", "value": 'radio, TV, and electronics stores'}, {"type": "LiteralStr", "value": 'retail trade'}, {"type": "LiteralStr", "value": 'retail trade and food services'}, {"type": "LiteralStr", "value": 'retail trade and food services, ex auto'}, {"type": "LiteralStr", "value": 'retail trade, ex auto'}, {"type": "LiteralStr", "value": 'shoe stores'}, {"type": "LiteralStr", "value": 'sporting goods stores'}, {"type": "LiteralStr", "value": 'sporting goods, hobby, book, and music stores'}, {"type": "LiteralStr", "value": 'supermarkets and other grocery (except convenience) stores'}, {"type": "LiteralStr", "value": 'used car dealers'}, {"type": "LiteralStr", "value": 'used merchandise stores'}, {"type": "LiteralStr", "value": 'warehouse clubs and superstores'}, {"type": "LiteralStr", "value": "women's clothing stores"}], "values": [
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