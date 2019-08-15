'''
Hello! Thank you for downloading a CORGIS library. However, you do not
need to open this file. Instead you should make your own Python file and
add the following line:

import billionaires

Then just place the files you downloaded alongside it.
'''

import os as _os
import pickle as _pickle

__all__ = ['get_billionaire']

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
            'get_billionaire': {
                "type": "FunctionType",
                "name": 'get_billionaire',
                "returns": 
				{"type": "ListType", "subtype": 
					{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'name'}, {"type": "LiteralStr", "value": 'rank'}, {"type": "LiteralStr", "value": 'year'}, {"type": "LiteralStr", "value": 'company'}, {"type": "LiteralStr", "value": 'demographics'}, {"type": "LiteralStr", "value": 'location'}, {"type": "LiteralStr", "value": 'wealth'}], "values": [
						{"type": "StrType"}, 
						{"type": "NumType"}, 
						{"type": "NumType"}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'founded'}, {"type": "LiteralStr", "value": 'name'}, {"type": "LiteralStr", "value": 'relationship'}, {"type": "LiteralStr", "value": 'sector'}, {"type": "LiteralStr", "value": 'type'}], "values": [
							{"type": "NumType"}, 
							{"type": "StrType"}, 
							{"type": "StrType"}, 
							{"type": "StrType"}, 
							{"type": "StrType"}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'age'}, {"type": "LiteralStr", "value": 'gender'}], "values": [
							{"type": "NumType"}, 
							{"type": "StrType"}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'citizenship'}, {"type": "LiteralStr", "value": 'country code'}, {"type": "LiteralStr", "value": 'gdp'}, {"type": "LiteralStr", "value": 'region'}], "values": [
							{"type": "StrType"}, 
							{"type": "StrType"}, 
							{"type": "NumType"}, 
							{"type": "StrType"}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'type'}, {"type": "LiteralStr", "value": 'worth in billions'}, {"type": "LiteralStr", "value": 'how'}], "values": [
							{"type": "StrType"}, 
							{"type": "NumType"}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'category'}, {"type": "LiteralStr", "value": 'from emerging'}, {"type": "LiteralStr", "value": 'industry'}, {"type": "LiteralStr", "value": 'inherited'}, {"type": "LiteralStr", "value": 'was founder'}, {"type": "LiteralStr", "value": 'was political'}], "values": [
								{"type": "StrType"}, 
								{"type": "NumType"}, 
								{"type": "StrType"}, 
								{"type": "StrType"}, 
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
                                          "billionaires.data")
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

def get_billionaire():
    """
    Retrieves all of the billionaire.
    """
    if _Constants._DATASET is None:
        with open(_Constants._DATABASE_NAME, 'rb') as _:
            _Constants._DATASET = _pickle.load(_)
    return _Constants._DATASET

if __name__ == '__main__':
    from pprint import pprint as _pprint
    from timeit import default_timer as _default_timer
    
    print(">>> get_billionaire()")
    
    start_time = _default_timer()
    result = get_billionaire()
    print("Time taken: {}".format(_default_timer() - start_time))
    _pprint(result[0])