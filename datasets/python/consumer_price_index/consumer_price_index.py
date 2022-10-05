'''
Hello! Thank you for downloading a CORGIS library. However, you do not
need to open this file. Instead you should make your own Python file and
add the following line:

import consumer_price_index

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
					{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Year'}, {"type": "LiteralStr", "value": 'Data'}], "values": [
						{"type": "NumType"}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Meat'}, {"type": "LiteralStr", "value": 'Fuel'}, {"type": "LiteralStr", "value": 'Grain'}, {"type": "LiteralStr", "value": 'Metal'}, {"type": "LiteralStr", "value": 'Plant extract'}], "values": [
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Beef'}, {"type": "LiteralStr", "value": 'Lamb'}, {"type": "LiteralStr", "value": 'Pork'}, {"type": "LiteralStr", "value": 'Average'}], "values": [
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Coal'}, {"type": "LiteralStr", "value": 'Natural gas'}, {"type": "LiteralStr", "value": 'Petroleum'}, {"type": "LiteralStr", "value": 'Average'}], "values": [
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Corn'}, {"type": "LiteralStr", "value": 'Rice'}, {"type": "LiteralStr", "value": 'Rye'}, {"type": "LiteralStr", "value": 'Wheat'}, {"type": "LiteralStr", "value": 'Average'}], "values": [
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Aluminum'}, {"type": "LiteralStr", "value": 'Chromium'}, {"type": "LiteralStr", "value": 'Copper'}, {"type": "LiteralStr", "value": 'Lead'}, {"type": "LiteralStr", "value": 'Manganese'}, {"type": "LiteralStr", "value": 'Nickel'}, {"type": "LiteralStr", "value": 'Steel'}, {"type": "LiteralStr", "value": 'Tin'}, {"type": "LiteralStr", "value": 'Zinc'}, {"type": "LiteralStr", "value": 'Iron ore'}, {"type": "LiteralStr", "value": 'Gold'}, {"type": "LiteralStr", "value": 'Platinum'}, {"type": "LiteralStr", "value": 'Silver'}, {"type": "LiteralStr", "value": 'Average'}], "values": [
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
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
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Cocoa'}, {"type": "LiteralStr", "value": 'Coffee'}, {"type": "LiteralStr", "value": 'Cotton'}, {"type": "LiteralStr", "value": 'Cottonseed'}, {"type": "LiteralStr", "value": 'Palm oil'}, {"type": "LiteralStr", "value": 'Rubber'}, {"type": "LiteralStr", "value": 'Sugar'}, {"type": "LiteralStr", "value": 'Tea'}, {"type": "LiteralStr", "value": 'Tobacco'}, {"type": "LiteralStr", "value": 'Average'}], "values": [
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
                                          "consumer_price_index.data")
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
    Retrieves all of the Report.
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