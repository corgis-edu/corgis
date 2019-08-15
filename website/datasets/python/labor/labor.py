'''
Hello! Thank you for downloading a CORGIS library. However, you do not
need to open this file. Instead you should make your own Python file and
add the following line:

import labor

Then just place the files you downloaded alongside it.
'''

import os as _os
import pickle as _pickle

__all__ = ['get_result']

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
            'get_result': {
                "type": "FunctionType",
                "name": 'get_result',
                "returns": 
				{"type": "ListType", "subtype": 
					{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Time'}, {"type": "LiteralStr", "value": 'Data'}], "values": [
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Month'}, {"type": "LiteralStr", "value": 'Month Name'}, {"type": "LiteralStr", "value": 'Year'}], "values": [
							{"type": "NumType"}, 
							{"type": "StrType"}, 
							{"type": "NumType"}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Civilian Noninstitutional Population'}, {"type": "LiteralStr", "value": 'Not In Labor Force'}, {"type": "LiteralStr", "value": 'Civilian Labor Force'}, {"type": "LiteralStr", "value": 'Employed'}, {"type": "LiteralStr", "value": 'Unemployed'}], "values": [
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Asian'}, {"type": "LiteralStr", "value": 'Black or African American'}, {"type": "LiteralStr", "value": 'White'}], "values": [
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Asian'}, {"type": "LiteralStr", "value": 'Black or African American'}, {"type": "LiteralStr", "value": 'White'}], "values": [
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Asian'}, {"type": "LiteralStr", "value": 'Black or African American'}, {"type": "LiteralStr", "value": 'White'}], "values": [
								{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Counts'}, {"type": "LiteralStr", "value": 'Participation Rate'}], "values": [
									{"type": "NumType"}, 
									{"type": "NumType"}]}, 
								{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Counts'}, {"type": "LiteralStr", "value": 'Participation Rate'}], "values": [
									{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'All'}, {"type": "LiteralStr", "value": 'Men'}, {"type": "LiteralStr", "value": 'Women'}], "values": [
										{"type": "NumType"}, 
										{"type": "NumType"}, 
										{"type": "NumType"}]}, 
									{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'All'}, {"type": "LiteralStr", "value": 'Men'}, {"type": "LiteralStr", "value": 'Women'}], "values": [
										{"type": "NumType"}, 
										{"type": "NumType"}, 
										{"type": "NumType"}]}]}, 
								{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Counts'}, {"type": "LiteralStr", "value": 'Participation Rate'}], "values": [
									{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'All'}, {"type": "LiteralStr", "value": 'Men'}, {"type": "LiteralStr", "value": 'Women'}], "values": [
										{"type": "NumType"}, 
										{"type": "NumType"}, 
										{"type": "NumType"}]}, 
									{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'All'}, {"type": "LiteralStr", "value": 'Men'}, {"type": "LiteralStr", "value": 'Women'}], "values": [
										{"type": "NumType"}, 
										{"type": "NumType"}, 
										{"type": "NumType"}]}]}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Asian'}, {"type": "LiteralStr", "value": 'Black or African American'}, {"type": "LiteralStr", "value": 'White'}], "values": [
								{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Counts'}, {"type": "LiteralStr", "value": 'Unemployment Rate'}], "values": [
									{"type": "NumType"}, 
									{"type": "NumType"}]}, 
								{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Counts'}, {"type": "LiteralStr", "value": 'Employment-Population Ratio'}], "values": [
									{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'All'}, {"type": "LiteralStr", "value": 'Men'}, {"type": "LiteralStr", "value": 'Women'}], "values": [
										{"type": "NumType"}, 
										{"type": "NumType"}, 
										{"type": "NumType"}]}, 
									{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'All'}, {"type": "LiteralStr", "value": 'Men'}, {"type": "LiteralStr", "value": 'Women'}], "values": [
										{"type": "NumType"}, 
										{"type": "NumType"}, 
										{"type": "NumType"}]}]}, 
								{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Counts'}, {"type": "LiteralStr", "value": 'Employment-Population Ratio'}], "values": [
									{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'All'}, {"type": "LiteralStr", "value": 'Men'}, {"type": "LiteralStr", "value": 'Women'}], "values": [
										{"type": "NumType"}, 
										{"type": "NumType"}, 
										{"type": "NumType"}]}, 
									{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'All'}, {"type": "LiteralStr", "value": 'Men'}, {"type": "LiteralStr", "value": 'Women'}], "values": [
										{"type": "NumType"}, 
										{"type": "NumType"}, 
										{"type": "NumType"}]}]}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Asian'}, {"type": "LiteralStr", "value": 'Black or African American'}, {"type": "LiteralStr", "value": 'White'}], "values": [
								{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Counts'}, {"type": "LiteralStr", "value": 'Unemployment Rate'}], "values": [
									{"type": "NumType"}, 
									{"type": "NumType"}]}, 
								{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Counts'}, {"type": "LiteralStr", "value": 'Unemployment Rate'}], "values": [
									{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'All'}, {"type": "LiteralStr", "value": 'Men'}, {"type": "LiteralStr", "value": 'Women'}], "values": [
										{"type": "NumType"}, 
										{"type": "NumType"}, 
										{"type": "NumType"}]}, 
									{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'All'}, {"type": "LiteralStr", "value": 'Men'}, {"type": "LiteralStr", "value": 'Women'}], "values": [
										{"type": "NumType"}, 
										{"type": "NumType"}, 
										{"type": "NumType"}]}]}, 
								{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Counts'}, {"type": "LiteralStr", "value": 'Unemployment Rate'}], "values": [
									{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'All'}, {"type": "LiteralStr", "value": 'Men'}, {"type": "LiteralStr", "value": 'Women'}], "values": [
										{"type": "NumType"}, 
										{"type": "NumType"}, 
										{"type": "NumType"}]}, 
									{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'All'}, {"type": "LiteralStr", "value": 'Men'}, {"type": "LiteralStr", "value": 'Women'}], "values": [
										{"type": "NumType"}, 
										{"type": "NumType"}, 
										{"type": "NumType"}]}]}]}]}]}}
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
                                          "labor.data")
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

def get_result():
    """
    Retrieves all of the result.
    """
    if _Constants._DATASET is None:
        with open(_Constants._DATABASE_NAME, 'rb') as _:
            _Constants._DATASET = _pickle.load(_)
    return _Constants._DATASET

if __name__ == '__main__':
    from pprint import pprint as _pprint
    from timeit import default_timer as _default_timer
    
    print(">>> get_result()")
    
    start_time = _default_timer()
    result = get_result()
    print("Time taken: {}".format(_default_timer() - start_time))
    _pprint(result[0])