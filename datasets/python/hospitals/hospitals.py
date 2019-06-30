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
                "returns": {
                    "type": "ListType", 
                    "empty": False, 
                    "subtype": {
                        "type": "DictType",
                        "literals": [
                            {"type": "LiteralStr", "value": "Facility.Name"},
                            {"type": "LiteralStr", "value": "Facility.City"},
                            {"type": "LiteralStr", "value": "Facility.State"},
                            {"type": "LiteralStr", "value": "Facility.Type"},
                            {"type": "LiteralStr", "value": "Rating.Overall"},
                            {"type": "LiteralStr", "value": "Rating.Mortality"},
                            {"type": "LiteralStr", "value": "Rating.Safety"},
                            {"type": "LiteralStr", "value": "Rating.Readmission"},
                            {"type": "LiteralStr", "value": "Rating.Experience"},
                            {"type": "LiteralStr", "value": "Rating.Effectiveness"},
                            {"type": "LiteralStr", "value": "Rating.Timeliness"},
                            {"type": "LiteralStr", "value": "Rating.Imaging"},
                            {"type": "LiteralStr", "value": "Procedure.Heart Attack.Cost"},
                            {"type": "LiteralStr", "value": "Procedure.Heart Attack.Quality"},
                            {"type": "LiteralStr", "value": "Procedure.Heart Attack.Value"},
                            {"type": "LiteralStr", "value": "Procedure.Heart Failure.Cost"},
                            {"type": "LiteralStr", "value": "Procedure.Heart Failure.Quality"},
                            {"type": "LiteralStr", "value": "Procedure.Heart Failure.Value"},
                            {"type": "LiteralStr", "value": "Procedure.Pneumonia.Cost"},
                            {"type": "LiteralStr", "value": "Procedure.Pneumonia.Quality"},
                            {"type": "LiteralStr", "value": "Procedure.Pneumonia.Value"},
                            {"type": "LiteralStr", "value": "Procedure.Hip Knee.Cost"},
                            {"type": "LiteralStr", "value": "Procedure.Hip Knee.Quality"},
                            {"type": "LiteralStr", "value": "Procedure.Hip Knee.Value"},
                        ],
                        "values": [
                            {"type": "StrType"},
                            {"type": "StrType"},
                            {"type": "StrType"},
                            {"type": "StrType"},
                            {"type": "NumType"},
                            {"type": "StrType"},
                            {"type": "StrType"},
                            {"type": "StrType"},
                            {"type": "StrType"},
                            {"type": "StrType"},
                            {"type": "StrType"},
                            {"type": "StrType"},
                            {"type": "NumType"},
                            {"type": "StrType"},
                            {"type": "StrType"},
                            {"type": "NumType"},
                            {"type": "StrType"},
                            {"type": "StrType"},
                            {"type": "NumType"},
                            {"type": "StrType"},
                            {"type": "StrType"},
                            {"type": "NumType"},
                            {"type": "StrType"},
                            {"type": "StrType"},
                        ]
                    }
                }
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