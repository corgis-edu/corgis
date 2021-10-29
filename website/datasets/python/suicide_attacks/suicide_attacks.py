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
					{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'groups'}, {"type": "LiteralStr", "value": 'claim'}, {"type": "LiteralStr", "value": 'status'}, {"type": "LiteralStr", "value": 'statistics'}, {"type": "LiteralStr", "value": 'date'}, {"type": "LiteralStr", "value": 'target'}, {"type": "LiteralStr", "value": 'attacker'}], "values": [
						{"type": "StrType"}, 
						{"type": "StrType"}, 
						{"type": "StrType"}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'sources'}, {"type": "LiteralStr", "value": '# wounded_low'}, {"type": "LiteralStr", "value": '# wounded_high'}, {"type": "LiteralStr", "value": '# killed_low'}, {"type": "LiteralStr", "value": '# killed_high'}, {"type": "LiteralStr", "value": '# killed_low_civilian'}, {"type": "LiteralStr", "value": '# killed_high_civilian'}, {"type": "LiteralStr", "value": '# killed_low_political'}, {"type": "LiteralStr", "value": '# killed_high_political'}, {"type": "LiteralStr", "value": '# killed_low_security'}, {"type": "LiteralStr", "value": '# killed_high_security'}, {"type": "LiteralStr", "value": '# belt_bomb'}, {"type": "LiteralStr", "value": '# truck_bomb'}, {"type": "LiteralStr", "value": '# car_bomb'}, {"type": "LiteralStr", "value": '# weapon_oth'}, {"type": "LiteralStr", "value": '# weapon_unk'}, {"type": "LiteralStr", "value": '# attackers'}, {"type": "LiteralStr", "value": '# female_attackers'}, {"type": "LiteralStr", "value": '# male_attackers'}, {"type": "LiteralStr", "value": '# unknown_attackers'}], "values": [
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
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
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'year'}, {"type": "LiteralStr", "value": 'month'}, {"type": "LiteralStr", "value": 'day'}], "values": [
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'weapon'}, {"type": "LiteralStr", "value": 'region'}, {"type": "LiteralStr", "value": 'subregion'}, {"type": "LiteralStr", "value": 'country'}, {"type": "LiteralStr", "value": 'province'}, {"type": "LiteralStr", "value": 'city'}, {"type": "LiteralStr", "value": 'location'}, {"type": "LiteralStr", "value": 'latitude'}, {"type": "LiteralStr", "value": 'longtitude'}, {"type": "LiteralStr", "value": 'desc'}, {"type": "LiteralStr", "value": 'type'}, {"type": "LiteralStr", "value": 'nationality'}], "values": [
							{"type": "StrType"}, 
							{"type": "StrType"}, 
							{"type": "StrType"}, 
							{"type": "StrType"}, 
							{"type": "StrType"}, 
							{"type": "StrType"}, 
							{"type": "StrType"}, 
							{"type": "StrType"}, 
							{"type": "StrType"}, 
							{"type": "StrType"}, 
							{"type": "StrType"}, 
							{"type": "StrType"}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'gender'}], "values": [
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