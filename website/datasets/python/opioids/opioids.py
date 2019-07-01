'''
Hello! Thank you for downloading a CORGIS library. However, you do not
need to open this file. Instead you should make your own Python file and
add the following line:

import opioids

Then just place the files you downloaded alongside it.
'''

import os as _os
import pickle as _pickle

__all__ = ['get_opioid_deaths']

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
            'get_opioid_deaths': {
                "type": "FunctionType",
                "name": 'get_opioid_deaths',
                "returns": {
                    "type": "ListType", 
                    "empty": False, 
                    "subtype": {
                        "type": "DictType",
                        "literals": [
                            {"type": "LiteralStr", "value": "Year"},
                            {"type": "LiteralStr", "value": "Number.All"},
                            {"type": "LiteralStr", "value": "Number.Opiod.Any"},
                            {"type": "LiteralStr", "value": "Number.Opiod.Prescription"},
                            {"type": "LiteralStr", "value": "Number.Opiod.Synthetic"},
                            {"type": "LiteralStr", "value": "Number.Opiod.Heroin"},
                            {"type": "LiteralStr", "value": "Number.Opiod.Cocaine"},
                            {"type": "LiteralStr", "value": "Rate.All.Total"},
                            {"type": "LiteralStr", "value": "Rate.All.Sex.Male"},
                            {"type": "LiteralStr", "value": "Rate.All.Sex.Female"},
                            {"type": "LiteralStr", "value": "Rate.All.Region.Large City"},
                            {"type": "LiteralStr", "value": "Rate.All.Region.Small City"},
                            {"type": "LiteralStr", "value": "Rate.All.Region.Rural"},
                            {"type": "LiteralStr", "value": "Rate.All.Race.White"},
                            {"type": "LiteralStr", "value": "Rate.All.Race.Black"},
                            {"type": "LiteralStr", "value": "Rate.All.Race.Hispanic"},
                            {"type": "LiteralStr", "value": "Rate.Opiod.Any.Total"},
                            {"type": "LiteralStr", "value": "Rate.Opiod.Any.Sex.Male"},
                            {"type": "LiteralStr", "value": "Rate.Opiod.Any.Sex.Female"},
                            {"type": "LiteralStr", "value": "Rate.Opiod.Any.Region.Large City"},
                            {"type": "LiteralStr", "value": "Rate.Opiod.Any.Region.Small City"},
                            {"type": "LiteralStr", "value": "Rate.Opiod.Any.Region.Rural"},
                            {"type": "LiteralStr", "value": "Rate.Opiod.Any.Race.White"},
                            {"type": "LiteralStr", "value": "Rate.Opiod.Any.Race.Black"},
                            {"type": "LiteralStr", "value": "Rate.Opiod.Any.Race.Hispanic"},
                            {"type": "LiteralStr", "value": "Rate.Opiod.Prescription.Total"},
                            {"type": "LiteralStr", "value": "Rate.Opiod.Prescription.Sex.Male"},
                            {"type": "LiteralStr", "value": "Rate.Opiod.Prescription.Sex.Female"},
                            {"type": "LiteralStr", "value": "Rate.Opiod.Prescription.Region.Large City"},
                            {"type": "LiteralStr", "value": "Rate.Opiod.Prescription.Region.Small City"},
                            {"type": "LiteralStr", "value": "Rate.Opiod.Prescription.Region.Rural"},
                            {"type": "LiteralStr", "value": "Rate.Opiod.Prescription.Race.White"},
                            {"type": "LiteralStr", "value": "Rate.Opiod.Prescription.Race.Black"},
                            {"type": "LiteralStr", "value": "Rate.Opiod.Prescription.Race.Hispanic"},
                            {"type": "LiteralStr", "value": "Rate.Opiod.Synthetic.Total"},
                            {"type": "LiteralStr", "value": "Rate.Opiod.Synthetic.Sex.Male"},
                            {"type": "LiteralStr", "value": "Rate.Opiod.Synthetic.Sex.Female"},
                            {"type": "LiteralStr", "value": "Rate.Opiod.Synthetic.Region.Large City"},
                            {"type": "LiteralStr", "value": "Rate.Opiod.Synthetic.Region.Small City"},
                            {"type": "LiteralStr", "value": "Rate.Opiod.Synthetic.Region.Rural"},
                            {"type": "LiteralStr", "value": "Rate.Opiod.Synthetic.Race.White"},
                            {"type": "LiteralStr", "value": "Rate.Opiod.Synthetic.Race.Black"},
                            {"type": "LiteralStr", "value": "Rate.Opiod.Synthetic.Race.Hispanic"},
                            {"type": "LiteralStr", "value": "Rate.Opiod.Heroin.Total"},
                            {"type": "LiteralStr", "value": "Rate.Opiod.Heroin.Sex.Male"},
                            {"type": "LiteralStr", "value": "Rate.Opiod.Heroin.Sex.Female"},
                            {"type": "LiteralStr", "value": "Rate.Opiod.Heroin.Region.Large City"},
                            {"type": "LiteralStr", "value": "Rate.Opiod.Heroin.Region.Small City"},
                            {"type": "LiteralStr", "value": "Rate.Opiod.Heroin.Region.Rural"},
                            {"type": "LiteralStr", "value": "Rate.Opiod.Heroin.Race.White"},
                            {"type": "LiteralStr", "value": "Rate.Opiod.Heroin.Race.Black"},
                            {"type": "LiteralStr", "value": "Rate.Opiod.Heroin.Race.Hispanic"},
                            {"type": "LiteralStr", "value": "Rate.Opiod.Cocaine.Total"},
                            {"type": "LiteralStr", "value": "Rate.Opiod.Cocaine.Sex.Male"},
                            {"type": "LiteralStr", "value": "Rate.Opiod.Cocaine.Sex.Female"},
                            {"type": "LiteralStr", "value": "Rate.Opiod.Cocaine.Region.Large City"},
                            {"type": "LiteralStr", "value": "Rate.Opiod.Cocaine.Region.Small City"},
                            {"type": "LiteralStr", "value": "Rate.Opiod.Cocaine.Region.Rural"},
                            {"type": "LiteralStr", "value": "Rate.Opiod.Cocaine.Race.White"},
                            {"type": "LiteralStr", "value": "Rate.Opiod.Cocaine.Race.Black"},
                            {"type": "LiteralStr", "value": "Rate.Opiod.Cocaine.Race.Hispanic"},
                        ],
                        "values": [
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
                                          "opioids.data")
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

def get_opioid_deaths():
    """
    Retrieves all of the Opioid Deaths.
    """
    if _Constants._DATASET is None:
        with open(_Constants._DATABASE_NAME, 'rb') as _:
            _Constants._DATASET = _pickle.load(_)
    return _Constants._DATASET

if __name__ == '__main__':
    from pprint import pprint as _pprint
    from timeit import default_timer as _default_timer
    
    print(">>> get_opioid_deaths()")
    
    start_time = _default_timer()
    result = get_opioid_deaths()
    print("Time taken: {}".format(_default_timer() - start_time))
    _pprint(result[0])