'''
Hello! Thank you for downloading a CORGIS library. However, you do not
need to open this file. Instead you should make your own Python file and
add the following line:

import airlines

Then just place the files you downloaded alongside it.
'''

import os as _os
import pickle as _pickle

__all__ = ['get_airports']

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
            'get_airports': {
                "type": "FunctionType",
                "name": 'get_airports',
                "returns": 
				{"type": "ListType", "subtype": 
					{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Airport'}, {"type": "LiteralStr", "value": 'Time'}, {"type": "LiteralStr", "value": 'Statistics'}], "values": [
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Code'}, {"type": "LiteralStr", "value": 'Name'}], "values": [
							{"type": "StrType"}, 
							{"type": "StrType"}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Label'}, {"type": "LiteralStr", "value": 'Month'}, {"type": "LiteralStr", "value": 'Month Name'}, {"type": "LiteralStr", "value": 'Year'}], "values": [
							{"type": "StrType"}, 
							{"type": "NumType"}, 
							{"type": "StrType"}, 
							{"type": "NumType"}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": '# of Delays'}, {"type": "LiteralStr", "value": 'Carriers'}, {"type": "LiteralStr", "value": 'Flights'}, {"type": "LiteralStr", "value": 'Minutes Delayed'}], "values": [
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Carrier'}, {"type": "LiteralStr", "value": 'Late Aircraft'}, {"type": "LiteralStr", "value": 'National Aviation System'}, {"type": "LiteralStr", "value": 'Security'}, {"type": "LiteralStr", "value": 'Weather'}], "values": [
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Names'}, {"type": "LiteralStr", "value": 'Total'}], "values": [
								{"type": "StrType"}, 
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Cancelled'}, {"type": "LiteralStr", "value": 'Delayed'}, {"type": "LiteralStr", "value": 'Diverted'}, {"type": "LiteralStr", "value": 'On Time'}, {"type": "LiteralStr", "value": 'Total'}], "values": [
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Carrier'}, {"type": "LiteralStr", "value": 'Late Aircraft'}, {"type": "LiteralStr", "value": 'National Aviation System'}, {"type": "LiteralStr", "value": 'Security'}, {"type": "LiteralStr", "value": 'Total'}, {"type": "LiteralStr", "value": 'Weather'}], "values": [
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
                                          "airlines.data")
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

def get_airports():
    """
    Retrieves all of the airports.
    """
    if _Constants._DATASET is None:
        with open(_Constants._DATABASE_NAME, 'rb') as _:
            _Constants._DATASET = _pickle.load(_)
    return _Constants._DATASET

if __name__ == '__main__':
    from pprint import pprint as _pprint
    from timeit import default_timer as _default_timer
    
    print(">>> get_airports()")
    
    start_time = _default_timer()
    result = get_airports()
    print("Time taken: {}".format(_default_timer() - start_time))
    _pprint(result[0])