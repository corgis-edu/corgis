'''
Hello! Thank you for downloading a CORGIS library. However, you do not
need to open this file. Instead you should make your own Python file and
add the following line:

import music

Then just place the files you downloaded alongside it.
'''

import os as _os
import pickle as _pickle

__all__ = ['get_music']

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
            'get_music': {
                "type": "FunctionType",
                "name": 'get_music',
                "returns": 
				{"type": "ListType", "subtype": 
					{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'artist'}, {"type": "LiteralStr", "value": 'release'}, {"type": "LiteralStr", "value": 'song'}], "values": [
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'familiarity'}, {"type": "LiteralStr", "value": 'hotttnesss'}, {"type": "LiteralStr", "value": 'id'}, {"type": "LiteralStr", "value": 'latitude'}, {"type": "LiteralStr", "value": 'location'}, {"type": "LiteralStr", "value": 'longitude'}, {"type": "LiteralStr", "value": 'name'}, {"type": "LiteralStr", "value": 'similar'}, {"type": "LiteralStr", "value": 'terms'}, {"type": "LiteralStr", "value": 'terms_freq'}], "values": [
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "StrType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "StrType"}, 
							{"type": "NumType"}, 
							{"type": "StrType"}, 
							{"type": "NumType"}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'id'}, {"type": "LiteralStr", "value": 'name'}], "values": [
							{"type": "NumType"}, 
							{"type": "NumType"}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'artist_mbtags'}, {"type": "LiteralStr", "value": 'artist_mbtags_count'}, {"type": "LiteralStr", "value": 'bars_confidence'}, {"type": "LiteralStr", "value": 'bars_start'}, {"type": "LiteralStr", "value": 'beats_confidence'}, {"type": "LiteralStr", "value": 'beats_start'}, {"type": "LiteralStr", "value": 'duration'}, {"type": "LiteralStr", "value": 'end_of_fade_in'}, {"type": "LiteralStr", "value": 'hotttnesss'}, {"type": "LiteralStr", "value": 'id'}, {"type": "LiteralStr", "value": 'key'}, {"type": "LiteralStr", "value": 'key_confidence'}, {"type": "LiteralStr", "value": 'loudness'}, {"type": "LiteralStr", "value": 'mode'}, {"type": "LiteralStr", "value": 'mode_confidence'}, {"type": "LiteralStr", "value": 'start_of_fade_out'}, {"type": "LiteralStr", "value": 'tatums_confidence'}, {"type": "LiteralStr", "value": 'tatums_start'}, {"type": "LiteralStr", "value": 'tempo'}, {"type": "LiteralStr", "value": 'time_signature'}, {"type": "LiteralStr", "value": 'time_signature_confidence'}, {"type": "LiteralStr", "value": 'title'}, {"type": "LiteralStr", "value": 'year'}], "values": [
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "StrType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}]}]}}
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
                                          "music.data")
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

def get_music():
    """
    Retrieves all of the music.
    """
    if _Constants._DATASET is None:
        with open(_Constants._DATABASE_NAME, 'rb') as _:
            _Constants._DATASET = _pickle.load(_)
    return _Constants._DATASET

if __name__ == '__main__':
    from pprint import pprint as _pprint
    from timeit import default_timer as _default_timer
    
    print(">>> get_music()")
    
    start_time = _default_timer()
    result = get_music()
    print("Time taken: {}".format(_default_timer() - start_time))
    _pprint(result[0])