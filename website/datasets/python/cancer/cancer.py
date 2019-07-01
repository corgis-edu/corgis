'''
Hello! Thank you for downloading a CORGIS library. However, you do not
need to open this file. Instead you should make your own Python file and
add the following line:

import cancer

Then just place the files you downloaded alongside it.
'''

import os as _os
import pickle as _pickle

__all__ = ['get_cancer_reports']

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
            'get_cancer_reports': {
                "type": "FunctionType",
                "name": 'get_cancer_reports',
                "returns": {
                    "type": "ListType", 
                    "empty": False, 
                    "subtype": {
                        "type": "DictType",
                        "literals": [
                            {"type": "LiteralStr", "value": "State"},
                            {"type": "LiteralStr", "value": "Total.Rate"},
                            {"type": "LiteralStr", "value": "Total.Number"},
                            {"type": "LiteralStr", "value": "Total.Population"},
                            {"type": "LiteralStr", "value": "Rates.Age.< 18"},
                            {"type": "LiteralStr", "value": "Rates.Age.18-45"},
                            {"type": "LiteralStr", "value": "Rates.Age.45-64"},
                            {"type": "LiteralStr", "value": "Rates.Age.> 64"},
                            {"type": "LiteralStr", "value": "Rates.Age and Sex.< 18.Female"},
                            {"type": "LiteralStr", "value": "Rates.Age and Sex.< 18.Male"},
                            {"type": "LiteralStr", "value": "Rates.Age and Sex.18 - 45.Female"},
                            {"type": "LiteralStr", "value": "Rates.Age and Sex.18 - 45.Male"},
                            {"type": "LiteralStr", "value": "Rates.Age and Sex.45 - 64.Female"},
                            {"type": "LiteralStr", "value": "Rates.Age and Sex.45 - 64.Male"},
                            {"type": "LiteralStr", "value": "Rates.Age and Sex.> 64.Female"},
                            {"type": "LiteralStr", "value": "Rates.Age and Sex.> 64.Male"},
                            {"type": "LiteralStr", "value": "Rates.Race.White"},
                            {"type": "LiteralStr", "value": "Rates.Race.White non-Hispanic"},
                            {"type": "LiteralStr", "value": "Rates.Race.Black"},
                            {"type": "LiteralStr", "value": "Rates.Race.Asian"},
                            {"type": "LiteralStr", "value": "Rates.Race.Indigenous"},
                            {"type": "LiteralStr", "value": "Rates.Race and Sex.Female.White"},
                            {"type": "LiteralStr", "value": "Rates.Race and Sex.Female.White non-Hispanic"},
                            {"type": "LiteralStr", "value": "Rates.Race and Sex.Female.Black"},
                            {"type": "LiteralStr", "value": "Rates.Race and Sex.Female.Black non-Hispanic"},
                            {"type": "LiteralStr", "value": "Rates.Race and Sex.Female.Asian"},
                            {"type": "LiteralStr", "value": "Rates.Race and Sex.Female.Indigenous"},
                            {"type": "LiteralStr", "value": "Rates.Race and Sex.Male.White"},
                            {"type": "LiteralStr", "value": "Rates.Race and Sex.Male.White non-Hispanic"},
                            {"type": "LiteralStr", "value": "Rates.Race and Sex.Male.Black"},
                            {"type": "LiteralStr", "value": "Rates.Race and Sex.Male.Black non-Hispanic"},
                            {"type": "LiteralStr", "value": "Rates.Race and Sex.Male.Asian"},
                            {"type": "LiteralStr", "value": "Rates.Race and Sex.Male.Indigenous"},
                            {"type": "LiteralStr", "value": "Rates.Race.Hispanic"},
                            {"type": "LiteralStr", "value": "Rates.Race and Sex.Female.Hispanic"},
                            {"type": "LiteralStr", "value": "Rates.Race and Sex.Male.Hispanic"},
                            {"type": "LiteralStr", "value": "Types.Breast.Total"},
                            {"type": "LiteralStr", "value": "Types.Breast.Age.18 - 44"},
                            {"type": "LiteralStr", "value": "Types.Breast.Age.45 - 64"},
                            {"type": "LiteralStr", "value": "Types.Breast.Age.> 64"},
                            {"type": "LiteralStr", "value": "Types.Breast.Race.White"},
                            {"type": "LiteralStr", "value": "Types.Breast.Race.White non-Hispanic "},
                            {"type": "LiteralStr", "value": "Types.Breast.Race.Black"},
                            {"type": "LiteralStr", "value": "Types.Breast.Race.Black non-Hispanic"},
                            {"type": "LiteralStr", "value": "Types.Breast.Race.Asian"},
                            {"type": "LiteralStr", "value": "Types.Breast.Race.Indigenous"},
                            {"type": "LiteralStr", "value": "Types.Breast.Race.Hispanic"},
                            {"type": "LiteralStr", "value": "Types.Colorectal.Total"},
                            {"type": "LiteralStr", "value": "Types.Colorectal.Age and Sex.Female.18 - 44"},
                            {"type": "LiteralStr", "value": "Types.Colorectal.Age and Sex.Male.18 - 44"},
                            {"type": "LiteralStr", "value": "Types.Colorectal.Age and Sex.Female.45 - 64"},
                            {"type": "LiteralStr", "value": "Types.Colorectal.Age and Sex.Male.45 - 64"},
                            {"type": "LiteralStr", "value": "Types.Colorectal.Age and Sex.Female.> 64"},
                            {"type": "LiteralStr", "value": "Types.Colorectal.Age and Sex.Male.> 64"},
                            {"type": "LiteralStr", "value": "Types.Colorectal.Race.White"},
                            {"type": "LiteralStr", "value": "Types.Colorectal.Race.White non-Hispanic"},
                            {"type": "LiteralStr", "value": "Types.Colorectal.Race.Black"},
                            {"type": "LiteralStr", "value": "Types.Colorectal.Race.Black non-Hispanic"},
                            {"type": "LiteralStr", "value": "Types.Colorectal.Race.Asian"},
                            {"type": "LiteralStr", "value": "Types.Colorectal.Race.Indigenous"},
                            {"type": "LiteralStr", "value": "Types.Colorectal.Race.Hispanic"},
                            {"type": "LiteralStr", "value": "Types.Lung.Total"},
                            {"type": "LiteralStr", "value": "Types.Lung.Age and Sex.Female.18 - 44"},
                            {"type": "LiteralStr", "value": "Types.Lung.Age and Sex.Male.18 - 44"},
                            {"type": "LiteralStr", "value": "Types.Lung.Age and Sex.Female.45 - 64"},
                            {"type": "LiteralStr", "value": "Types.Lung.Age and Sex.Male.45 - 64"},
                            {"type": "LiteralStr", "value": "Types.Lung.Age and Sex.Female.> 64"},
                            {"type": "LiteralStr", "value": "Types.Lung.Age and Sex.Male.> 64"},
                            {"type": "LiteralStr", "value": "Types.Lung.Race.White"},
                            {"type": "LiteralStr", "value": "Types.Lung.Race.White non-Hispanic"},
                            {"type": "LiteralStr", "value": "Types.Lung.Race.Black"},
                            {"type": "LiteralStr", "value": "Types.Lung.Race.Black non-Hispanic"},
                            {"type": "LiteralStr", "value": "Types.Lung.Race.Asian"},
                            {"type": "LiteralStr", "value": "Types.Lung.Race.Indigenous"},
                            {"type": "LiteralStr", "value": "Types.Lung.Race.Hispanic"},
                        ],
                        "values": [
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
                                          "cancer.data")
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

def get_cancer_reports():
    """
    Retrieves all of the Cancer Reports.
    """
    if _Constants._DATASET is None:
        with open(_Constants._DATABASE_NAME, 'rb') as _:
            _Constants._DATASET = _pickle.load(_)
    return _Constants._DATASET

if __name__ == '__main__':
    from pprint import pprint as _pprint
    from timeit import default_timer as _default_timer
    
    print(">>> get_cancer_reports()")
    
    start_time = _default_timer()
    result = get_cancer_reports()
    print("Time taken: {}".format(_default_timer() - start_time))
    _pprint(result[0])