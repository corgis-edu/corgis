'''
Hello! Thank you for downloading a CORGIS library. However, you do not
need to open this file. Instead you should make your own Python file and
add the following line:

import covid-behaviors

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
					{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Country'}, {"type": "LiteralStr", "value": 'Days since outbreak'}, {"type": "LiteralStr", "value": 'Counts'}, {"type": "LiteralStr", "value": 'Scores'}], "values": [
						{"type": "StrType"}, 
						{"type": "NumType"}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Household contacts'}, {"type": "LiteralStr", "value": 'Total contacts'}, {"type": "LiteralStr", "value": 'Times left home'}, {"type": "LiteralStr", "value": 'Handwashes'}], "values": [
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Isolate'}, {"type": "LiteralStr", "value": 'Masks'}, {"type": "LiteralStr", "value": 'Avoidance'}, {"type": "LiteralStr", "value": 'Precautions'}, {"type": "LiteralStr", "value": 'Outlooks'}], "values": [
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Willingness if symptoms'}, {"type": "LiteralStr", "value": 'Willingness if advised'}, {"type": "LiteralStr", "value": 'Difficulty'}], "values": [
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Outside home'}, {"type": "LiteralStr", "value": 'Grocery store'}, {"type": "LiteralStr", "value": 'Clothing store'}, {"type": "LiteralStr", "value": 'Work'}, {"type": "LiteralStr", "value": 'Public transport'}], "values": [
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Symptomatic people'}, {"type": "LiteralStr", "value": 'Going out'}, {"type": "LiteralStr", "value": 'Healthcare settings'}, {"type": "LiteralStr", "value": 'Public transport'}, {"type": "LiteralStr", "value": 'Working outside home'}, {"type": "LiteralStr", "value": 'Children going to school'}, {"type": "LiteralStr", "value": 'Having guests'}, {"type": "LiteralStr", "value": 'Gatherings'}, {"type": "LiteralStr", "value": 'Crowded areas'}, {"type": "LiteralStr", "value": 'Shops'}], "values": [
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Small'}, {"type": "LiteralStr", "value": 'Medium'}, {"type": "LiteralStr", "value": 'Large'}], "values": [
									{"type": "NumType"}, 
									{"type": "NumType"}, 
									{"type": "NumType"}]}, 
								{"type": "NumType"}, 
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Cleaned surfaces'}, {"type": "LiteralStr", "value": 'Covered mouth sneeze'}, {"type": "LiteralStr", "value": 'Used hand sanitiser'}], "values": [
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Covid is dangerous'}, {"type": "LiteralStr", "value": 'Likely to get covid'}, {"type": "LiteralStr", "value": 'Life greatly impacted'}], "values": [
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
                                          "covid-behaviors.data")
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