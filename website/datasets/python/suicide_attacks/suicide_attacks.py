'''
Hello! Thank you for downloading a CORGIS library. However, you do not
need to open this file. Instead you should make your own Python file and
add the following line:

import suicide_attacks

Then just place the files you downloaded alongside it.
'''

import os as _os
import pickle as _pickle

__all__ = ['get_attack']

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
            'get_attack': {
                "type": "FunctionType",
                "name": 'get_attack',
                "returns": 
				{"type": "ListType", "subtype": 
					{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'groups'}, {"type": "LiteralStr", "value": 'attacker'}, {"type": "LiteralStr", "value": 'campaign'}, {"type": "LiteralStr", "value": 'date'}, {"type": "LiteralStr", "value": 'statistics'}, {"type": "LiteralStr", "value": 'target'}], "values": [
						{"type": "StrType"}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'age'}, {"type": "LiteralStr", "value": 'name'}, {"type": "LiteralStr", "value": 'birth'}, {"type": "LiteralStr", "value": 'demographics'}], "values": [
							{"type": "NumType"}, 
							{"type": "StrType"}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'location'}, {"type": "LiteralStr", "value": 'year'}], "values": [
								{"type": "StrType"}, 
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'education'}, {"type": "LiteralStr", "value": 'gender'}, {"type": "LiteralStr", "value": 'marital'}, {"type": "LiteralStr", "value": 'occupation'}, {"type": "LiteralStr", "value": 'religion'}], "values": [
								{"type": "StrType"}, 
								{"type": "StrType"}, 
								{"type": "StrType"}, 
								{"type": "StrType"}, 
								{"type": "StrType"}]}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'name'}, {"type": "LiteralStr", "value": 'sides'}], "values": [
							{"type": "StrType"}, 
							{"type": "StrType"}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'day'}, {"type": "LiteralStr", "value": 'month'}, {"type": "LiteralStr", "value": 'year'}], "values": [
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": '# killed'}, {"type": "LiteralStr", "value": '# wounded'}], "values": [
							{"type": "NumType"}, 
							{"type": "NumType"}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'assassination?'}, {"type": "LiteralStr", "value": 'country'}, {"type": "LiteralStr", "value": 'location'}, {"type": "LiteralStr", "value": 'name'}, {"type": "LiteralStr", "value": 'type'}, {"type": "LiteralStr", "value": 'weapon'}], "values": [
							{"type": "NumType"}, 
							{"type": "StrType"}, 
							{"type": "StrType"}, 
							{"type": "StrType"}, 
							{"type": "StrType"}, 
							{"type": "StrType"}]}]}}
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
                                          "suicide_attacks.data")
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

def get_attack():
    """
    Retrieves all of the attack.
    """
    if _Constants._DATASET is None:
        with open(_Constants._DATABASE_NAME, 'rb') as _:
            _Constants._DATASET = _pickle.load(_)
    return _Constants._DATASET

if __name__ == '__main__':
    from pprint import pprint as _pprint
    from timeit import default_timer as _default_timer
    
    print(">>> get_attack()")
    
    start_time = _default_timer()
    result = get_attack()
    print("Time taken: {}".format(_default_timer() - start_time))
    _pprint(result[0])