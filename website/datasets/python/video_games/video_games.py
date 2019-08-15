'''
Hello! Thank you for downloading a CORGIS library. However, you do not
need to open this file. Instead you should make your own Python file and
add the following line:

import video_games

Then just place the files you downloaded alongside it.
'''

import os as _os
import pickle as _pickle

__all__ = ['get_video_game']

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
            'get_video_game': {
                "type": "FunctionType",
                "name": 'get_video_game',
                "returns": 
				{"type": "ListType", "subtype": 
					{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Title'}, {"type": "LiteralStr", "value": 'Features'}, {"type": "LiteralStr", "value": 'Metadata'}, {"type": "LiteralStr", "value": 'Metrics'}, {"type": "LiteralStr", "value": 'Release'}, {"type": "LiteralStr", "value": 'Length'}], "values": [
						{"type": "StrType"}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Handheld?'}, {"type": "LiteralStr", "value": 'Max Players'}, {"type": "LiteralStr", "value": 'Multiplatform?'}, {"type": "LiteralStr", "value": 'Online?'}], "values": [
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Genres'}, {"type": "LiteralStr", "value": 'Licensed?'}, {"type": "LiteralStr", "value": 'Publishers'}, {"type": "LiteralStr", "value": 'Sequel?'}], "values": [
							{"type": "StrType"}, 
							{"type": "NumType"}, 
							{"type": "StrType"}, 
							{"type": "NumType"}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Review Score'}, {"type": "LiteralStr", "value": 'Sales'}, {"type": "LiteralStr", "value": 'Used Price'}], "values": [
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Console'}, {"type": "LiteralStr", "value": 'Rating'}, {"type": "LiteralStr", "value": 'Re-release?'}, {"type": "LiteralStr", "value": 'Year'}], "values": [
							{"type": "StrType"}, 
							{"type": "StrType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'All PlayStyles'}, {"type": "LiteralStr", "value": 'Completionists'}, {"type": "LiteralStr", "value": 'Main + Extras'}, {"type": "LiteralStr", "value": 'Main Story'}], "values": [
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Average'}, {"type": "LiteralStr", "value": 'Leisure'}, {"type": "LiteralStr", "value": 'Median'}, {"type": "LiteralStr", "value": 'Polled'}, {"type": "LiteralStr", "value": 'Rushed'}], "values": [
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Average'}, {"type": "LiteralStr", "value": 'Leisure'}, {"type": "LiteralStr", "value": 'Median'}, {"type": "LiteralStr", "value": 'Polled'}, {"type": "LiteralStr", "value": 'Rushed'}], "values": [
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Average'}, {"type": "LiteralStr", "value": 'Leisure'}, {"type": "LiteralStr", "value": 'Median'}, {"type": "LiteralStr", "value": 'Polled'}, {"type": "LiteralStr", "value": 'Rushed'}], "values": [
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Average'}, {"type": "LiteralStr", "value": 'Leisure'}, {"type": "LiteralStr", "value": 'Median'}, {"type": "LiteralStr", "value": 'Polled'}, {"type": "LiteralStr", "value": 'Rushed'}], "values": [
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
                                          "video_games.data")
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

def get_video_game():
    """
    Retrieves all of the video game.
    """
    if _Constants._DATASET is None:
        with open(_Constants._DATABASE_NAME, 'rb') as _:
            _Constants._DATASET = _pickle.load(_)
    return _Constants._DATASET

if __name__ == '__main__':
    from pprint import pprint as _pprint
    from timeit import default_timer as _default_timer
    
    print(">>> get_video_game()")
    
    start_time = _default_timer()
    result = get_video_game()
    print("Time taken: {}".format(_default_timer() - start_time))
    _pprint(result[0])