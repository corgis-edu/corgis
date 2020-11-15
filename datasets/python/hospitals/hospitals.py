'''
Hello! Thank you for downloading a CORGIS library. However, you do not
need to open this file. Instead you should make your own Python file and
add the following line:

import hospitals

Then just place the files you downloaded alongside it.
'''

import os as _os
import pickle as _pickle

__all__ = ['get_hospitals']

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
            'get_hospitals': {
                "type": "FunctionType",
                "name": 'get_hospitals',
                "returns": 
				{"type": "ListType", "subtype": 
					{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Facility'}, {"type": "LiteralStr", "value": 'Rating'}, {"type": "LiteralStr", "value": 'Procedure'}], "values": [
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Name'}, {"type": "LiteralStr", "value": 'City'}, {"type": "LiteralStr", "value": 'State'}, {"type": "LiteralStr", "value": 'Type'}], "values": [
							{"type": "StrType"}, 
							{"type": "StrType"}, 
							{"type": "StrType"}, 
							{"type": "StrType"}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Overall'}, {"type": "LiteralStr", "value": 'Mortality'}, {"type": "LiteralStr", "value": 'Safety'}, {"type": "LiteralStr", "value": 'Readmission'}, {"type": "LiteralStr", "value": 'Experience'}, {"type": "LiteralStr", "value": 'Effectiveness'}, {"type": "LiteralStr", "value": 'Timeliness'}, {"type": "LiteralStr", "value": 'Imaging'}], "values": [
							{"type": "NumType"}, 
							{"type": "StrType"}, 
							{"type": "StrType"}, 
							{"type": "StrType"}, 
							{"type": "StrType"}, 
							{"type": "StrType"}, 
							{"type": "StrType"}, 
							{"type": "StrType"}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Heart Attack'}, {"type": "LiteralStr", "value": 'Heart Failure'}, {"type": "LiteralStr", "value": 'Pneumonia'}, {"type": "LiteralStr", "value": 'Hip Knee'}], "values": [
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Cost'}, {"type": "LiteralStr", "value": 'Quality'}, {"type": "LiteralStr", "value": 'Value'}], "values": [
								{"type": "NumType"}, 
								{"type": "StrType"}, 
								{"type": "StrType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Cost'}, {"type": "LiteralStr", "value": 'Quality'}, {"type": "LiteralStr", "value": 'Value'}], "values": [
								{"type": "NumType"}, 
								{"type": "StrType"}, 
								{"type": "StrType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Cost'}, {"type": "LiteralStr", "value": 'Quality'}, {"type": "LiteralStr", "value": 'Value'}], "values": [
								{"type": "NumType"}, 
								{"type": "StrType"}, 
								{"type": "StrType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Cost'}, {"type": "LiteralStr", "value": 'Quality'}, {"type": "LiteralStr", "value": 'Value'}], "values": [
								{"type": "NumType"}, 
								{"type": "StrType"}, 
								{"type": "StrType"}]}]}]}}
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
                                          "hospitals.data")
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

def get_hospitals():
    """
    Retrieves all of the Hospitals.
    """
    if _Constants._DATASET is None:
        with open(_Constants._DATABASE_NAME, 'rb') as _:
            _Constants._DATASET = _pickle.load(_)
    return _Constants._DATASET

if __name__ == '__main__':
    from pprint import pprint as _pprint
    from timeit import default_timer as _default_timer
    
    print(">>> get_hospitals()")
    
    start_time = _default_timer()
    result = get_hospitals()
    print("Time taken: {}".format(_default_timer() - start_time))
    _pprint(result[0])