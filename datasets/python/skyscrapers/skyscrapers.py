'''
Hello! Thank you for downloading a CORGIS library. However, you do not
need to open this file. Instead you should make your own Python file and
add the following line:

import skyscrapers

Then just place the files you downloaded alongside it.
'''

import os as _os
import pickle as _pickle

__all__ = ['get_skyscraper']

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
            'get_skyscraper': {
                "type": "FunctionType",
                "name": 'get_skyscraper',
                "returns": 
				{"type": "ListType", "subtype": 
					{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'id'}, {"type": "LiteralStr", "value": 'material'}, {"type": "LiteralStr", "value": 'name'}, {"type": "LiteralStr", "value": 'location'}, {"type": "LiteralStr", "value": 'purposes'}, {"type": "LiteralStr", "value": 'statistics'}, {"type": "LiteralStr", "value": 'status'}], "values": [
						{"type": "NumType"}, 
						{"type": "StrType"}, 
						{"type": "StrType"}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'city'}, {"type": "LiteralStr", "value": 'city_id'}, {"type": "LiteralStr", "value": 'country'}, {"type": "LiteralStr", "value": 'country id'}, {"type": "LiteralStr", "value": 'latitude'}, {"type": "LiteralStr", "value": 'longitude'}], "values": [
							{"type": "StrType"}, 
							{"type": "NumType"}, 
							{"type": "StrType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'abandoned'}, {"type": "LiteralStr", "value": 'air traffic control tower'}, {"type": "LiteralStr", "value": 'belltower'}, {"type": "LiteralStr", "value": 'bridge'}, {"type": "LiteralStr", "value": 'casino'}, {"type": "LiteralStr", "value": 'commercial'}, {"type": "LiteralStr", "value": 'education'}, {"type": "LiteralStr", "value": 'exhibition'}, {"type": "LiteralStr", "value": 'government'}, {"type": "LiteralStr", "value": 'hospital'}, {"type": "LiteralStr", "value": 'hotel'}, {"type": "LiteralStr", "value": 'industrial'}, {"type": "LiteralStr", "value": 'library'}, {"type": "LiteralStr", "value": 'multiple'}, {"type": "LiteralStr", "value": 'museum'}, {"type": "LiteralStr", "value": 'observation'}, {"type": "LiteralStr", "value": 'office'}, {"type": "LiteralStr", "value": 'other'}, {"type": "LiteralStr", "value": 'religious'}, {"type": "LiteralStr", "value": 'residential'}, {"type": "LiteralStr", "value": 'retail'}, {"type": "LiteralStr", "value": 'serviced apartments'}, {"type": "LiteralStr", "value": 'telecommunications'}], "values": [
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
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
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'floors above'}, {"type": "LiteralStr", "value": 'height'}, {"type": "LiteralStr", "value": 'number of purposes'}, {"type": "LiteralStr", "value": 'rank'}], "values": [
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'current'}, {"type": "LiteralStr", "value": 'completed'}, {"type": "LiteralStr", "value": 'started'}], "values": [
							{"type": "StrType"}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'is completed'}, {"type": "LiteralStr", "value": 'year'}], "values": [
								{"type": "NumType"}, 
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'is started'}, {"type": "LiteralStr", "value": 'year'}], "values": [
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
                                          "skyscrapers.data")
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

def get_skyscraper():
    """
    Retrieves all of the skyscraper.
    """
    if _Constants._DATASET is None:
        with open(_Constants._DATABASE_NAME, 'rb') as _:
            _Constants._DATASET = _pickle.load(_)
    return _Constants._DATASET

if __name__ == '__main__':
    from pprint import pprint as _pprint
    from timeit import default_timer as _default_timer
    
    print(">>> get_skyscraper()")
    
    start_time = _default_timer()
    result = get_skyscraper()
    print("Time taken: {}".format(_default_timer() - start_time))
    _pprint(result[0])