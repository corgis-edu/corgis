'''
Hello! Thank you for downloading a CORGIS library. However, you do not
need to open this file. Instead you should make your own Python file and
add the following line:

import food_access

Then just place the files you downloaded alongside it.
'''

import os as _os
import pickle as _pickle

__all__ = ['get_record']

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
            'get_record': {
                "type": "FunctionType",
                "name": 'get_record',
                "returns": 
				{"type": "ListType", "subtype": 
					{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'County'}, {"type": "LiteralStr", "value": 'Population'}, {"type": "LiteralStr", "value": 'State'}, {"type": "LiteralStr", "value": 'Housing Data'}, {"type": "LiteralStr", "value": 'Vehicle Access'}, {"type": "LiteralStr", "value": 'Low Access Numbers'}], "values": [
						{"type": "StrType"}, 
						{"type": "NumType"}, 
						{"type": "StrType"}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Residing in Group Quarters'}, {"type": "LiteralStr", "value": 'Total Housing Units'}], "values": [
							{"type": "NumType"}, 
							{"type": "NumType"}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": '1 Mile'}, {"type": "LiteralStr", "value": '1/2 Mile'}, {"type": "LiteralStr", "value": '10 Miles'}, {"type": "LiteralStr", "value": '20 Miles'}], "values": [
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Children'}, {"type": "LiteralStr", "value": 'Low Income People'}, {"type": "LiteralStr", "value": 'People'}, {"type": "LiteralStr", "value": 'Seniors'}], "values": [
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": '1 Mile'}, {"type": "LiteralStr", "value": '1/2 Mile'}, {"type": "LiteralStr", "value": '10 Miles'}, {"type": "LiteralStr", "value": '20 Miles'}], "values": [
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": '1 Mile'}, {"type": "LiteralStr", "value": '1/2 Mile'}, {"type": "LiteralStr", "value": '10 Miles'}, {"type": "LiteralStr", "value": '20 Miles'}], "values": [
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": '1 Mile'}, {"type": "LiteralStr", "value": '1/2 Mile'}, {"type": "LiteralStr", "value": '10 Miles'}, {"type": "LiteralStr", "value": '20 Miles'}], "values": [
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": '1 Mile'}, {"type": "LiteralStr", "value": '1/2 Mile'}, {"type": "LiteralStr", "value": '10 Miles'}, {"type": "LiteralStr", "value": '20 Miles'}], "values": [
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
                                          "food_access.data")
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

def get_record():
    """
    Retrieves all of the record.
    """
    if _Constants._DATASET is None:
        with open(_Constants._DATABASE_NAME, 'rb') as _:
            _Constants._DATASET = _pickle.load(_)
    return _Constants._DATASET

if __name__ == '__main__':
    from pprint import pprint as _pprint
    from timeit import default_timer as _default_timer
    
    print(">>> get_record()")
    
    start_time = _default_timer()
    result = get_record()
    print("Time taken: {}".format(_default_timer() - start_time))
    _pprint(result[0])