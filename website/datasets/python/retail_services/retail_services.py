'''
Hello! Thank you for downloading a CORGIS library. However, you do not
need to open this file. Instead you should make your own Python file and
add the following line:

import retail_services

Then just place the files you downloaded alongside it.
'''

import os as _os
import pickle as _pickle

__all__ = ['get_report']

def _tifa_definitions():
    return {"type": "ModuleType",
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
    }

class _Constants(object):
    '''
    Global singleton object to hide some of the constants; some IDEs reveal
    internal module details very aggressively, and there's no other way
    to hide stuff.
    '''

class DatasetException(Exception):
    ''' Thrown when there is an error loading the dataset for some reason.'''
    
_Constants._DATABASE_NAME = _os.path.join(_os.path.dirname(__file__),
                                          "retail_services.data")
if not _os.access(_Constants._DATABASE_NAME, _os.F_OK):
    raise DatasetException(("Error! Could not find a \"{0}\" file. "
                           "Make sure that there is a \"{0}\" in the "
                           "same directory as \"{1}.py\"! Spelling is "
                           "very important here."
                           ).format(_Constants._DATABASE_NAME, __name__))
elif not _os.access(_Constants._DATABASE_NAME, _os.R_OK):
    raise DatasetException(("Error! Could not read the \"{0}\" file. "
                            "Make sure that it readable by changing its "
                            "permissions. You may need to get help from "
                            "your instructor."
                            ).format(_Constants._DATABASE_NAME, __name__))


_Constants._DATASET = None

def get_report():
    """
    Retrieves all of the report.
    """
    if _Constants._DATASET is None:
        with open(_Constants._DATABASE_NAME, 'rb') as _:
            _Constants._DATASET = _pickle.load(_)
    return _Constants._DATASET

if __name__ == '__main__':
    from pprint import pprint as _pprint
    from timeit import default_timer as _default_timer
    
    print(">>> get_report()")
    
    start_time = _default_timer()
    result = get_report()
    print("Time taken: {}".format(_default_timer() - start_time))
    _pprint(result[0])