'''
Hello! Thank you for downloading a CORGIS library. However, you do not
need to open this file. Instead you should make your own Python file and
add the following line:

import cars

Then just place the files you downloaded alongside it.
'''

import os as _os
import pickle as _pickle

__all__ = ['get_car']

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
            'get_car': {
                "type": "FunctionType",
                "name": 'get_car',
                "returns": 
				{"type": "ListType", "subtype": 
					{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Dimensions'}, {"type": "LiteralStr", "value": 'Engine Information'}, {"type": "LiteralStr", "value": 'Fuel Information'}, {"type": "LiteralStr", "value": 'Identification'}], "values": [
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Height'}, {"type": "LiteralStr", "value": 'Length'}, {"type": "LiteralStr", "value": 'Width'}], "values": [
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Driveline'}, {"type": "LiteralStr", "value": 'Engine Type'}, {"type": "LiteralStr", "value": 'Hybrid'}, {"type": "LiteralStr", "value": 'Number of Forward Gears'}, {"type": "LiteralStr", "value": 'Transmission'}, {"type": "LiteralStr", "value": 'Engine Statistics'}], "values": [
							{"type": "StrType"}, 
							{"type": "StrType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "StrType"}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Horsepower'}, {"type": "LiteralStr", "value": 'Torque'}], "values": [
								{"type": "NumType"}, 
								{"type": "NumType"}]}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'City mpg'}, {"type": "LiteralStr", "value": 'Fuel Type'}, {"type": "LiteralStr", "value": 'Highway mpg'}], "values": [
							{"type": "NumType"}, 
							{"type": "StrType"}, 
							{"type": "NumType"}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Classification'}, {"type": "LiteralStr", "value": 'ID'}, {"type": "LiteralStr", "value": 'Make'}, {"type": "LiteralStr", "value": 'Model Year'}, {"type": "LiteralStr", "value": 'Year'}], "values": [
							{"type": "StrType"}, 
							{"type": "StrType"}, 
							{"type": "StrType"}, 
							{"type": "StrType"}, 
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
                                          "cars.data")
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

def get_car():
    """
    Retrieves all of the car.
    """
    if _Constants._DATASET is None:
        with open(_Constants._DATABASE_NAME, 'rb') as _:
            _Constants._DATASET = _pickle.load(_)
    return _Constants._DATASET

if __name__ == '__main__':
    from pprint import pprint as _pprint
    from timeit import default_timer as _default_timer
    
    print(">>> get_car()")
    
    start_time = _default_timer()
    result = get_car()
    print("Time taken: {}".format(_default_timer() - start_time))
    _pprint(result[0])