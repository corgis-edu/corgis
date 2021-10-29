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
                "returns": 
				{"type": "ListType", "subtype": 
					{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Year'}, {"type": "LiteralStr", "value": 'Number'}, {"type": "LiteralStr", "value": 'Rate'}], "values": [
						{"type": "NumType"}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'All'}, {"type": "LiteralStr", "value": 'Opioid'}], "values": [
							{"type": "NumType"}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Any'}, {"type": "LiteralStr", "value": 'Prescription'}, {"type": "LiteralStr", "value": 'Synthetic'}, {"type": "LiteralStr", "value": 'Heroin'}, {"type": "LiteralStr", "value": 'Cocaine'}], "values": [
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}]}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'All'}, {"type": "LiteralStr", "value": 'Opioid'}], "values": [
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Total'}, {"type": "LiteralStr", "value": 'Sex'}, {"type": "LiteralStr", "value": 'Race'}], "values": [
								{"type": "NumType"}, 
								{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Female'}, {"type": "LiteralStr", "value": 'Male'}], "values": [
									{"type": "NumType"}, 
									{"type": "NumType"}]}, 
								{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'White'}, {"type": "LiteralStr", "value": 'Black'}, {"type": "LiteralStr", "value": 'Asian or Pacific Islander'}, {"type": "LiteralStr", "value": 'Hispanic'}, {"type": "LiteralStr", "value": 'American Indian or Alaska Native'}], "values": [
									{"type": "NumType"}, 
									{"type": "NumType"}, 
									{"type": "NumType"}, 
									{"type": "NumType"}, 
									{"type": "NumType"}]}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Any'}, {"type": "LiteralStr", "value": 'Prescription'}, {"type": "LiteralStr", "value": 'Synthetic'}, {"type": "LiteralStr", "value": 'Heroin'}, {"type": "LiteralStr", "value": 'Cocaine'}], "values": [
								{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Total'}, {"type": "LiteralStr", "value": 'Sex'}, {"type": "LiteralStr", "value": 'Race'}], "values": [
									{"type": "NumType"}, 
									{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Female'}, {"type": "LiteralStr", "value": 'Male'}], "values": [
										{"type": "NumType"}, 
										{"type": "NumType"}]}, 
									{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'White'}, {"type": "LiteralStr", "value": 'Black'}, {"type": "LiteralStr", "value": 'Asian or Pacific Islander'}, {"type": "LiteralStr", "value": 'Hispanic'}, {"type": "LiteralStr", "value": 'American Indian or Alaska Native'}], "values": [
										{"type": "NumType"}, 
										{"type": "NumType"}, 
										{"type": "NumType"}, 
										{"type": "NumType"}, 
										{"type": "NumType"}]}]}, 
								{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Total'}, {"type": "LiteralStr", "value": 'Sex'}, {"type": "LiteralStr", "value": 'Race'}], "values": [
									{"type": "NumType"}, 
									{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Female'}, {"type": "LiteralStr", "value": 'Male'}], "values": [
										{"type": "NumType"}, 
										{"type": "NumType"}]}, 
									{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'White'}, {"type": "LiteralStr", "value": 'Black'}, {"type": "LiteralStr", "value": 'Hispanic'}, {"type": "LiteralStr", "value": 'American Indian or Alaska Native'}], "values": [
										{"type": "NumType"}, 
										{"type": "NumType"}, 
										{"type": "NumType"}, 
										{"type": "NumType"}]}]}, 
								{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Total'}, {"type": "LiteralStr", "value": 'Sex'}, {"type": "LiteralStr", "value": 'Race'}], "values": [
									{"type": "NumType"}, 
									{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Female'}, {"type": "LiteralStr", "value": 'Male'}], "values": [
										{"type": "NumType"}, 
										{"type": "NumType"}]}, 
									{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'White'}, {"type": "LiteralStr", "value": 'Black'}, {"type": "LiteralStr", "value": 'Hispanic'}], "values": [
										{"type": "NumType"}, 
										{"type": "NumType"}, 
										{"type": "NumType"}]}]}, 
								{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Total'}, {"type": "LiteralStr", "value": 'Sex'}, {"type": "LiteralStr", "value": 'Race'}], "values": [
									{"type": "NumType"}, 
									{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Female'}, {"type": "LiteralStr", "value": 'Male'}], "values": [
										{"type": "NumType"}, 
										{"type": "NumType"}]}, 
									{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'White'}, {"type": "LiteralStr", "value": 'Black'}, {"type": "LiteralStr", "value": 'Hispanic'}], "values": [
										{"type": "NumType"}, 
										{"type": "NumType"}, 
										{"type": "NumType"}]}]}, 
								{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Total'}, {"type": "LiteralStr", "value": 'Sex'}, {"type": "LiteralStr", "value": 'Race'}], "values": [
									{"type": "NumType"}, 
									{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Female'}, {"type": "LiteralStr", "value": 'Male'}], "values": [
										{"type": "NumType"}, 
										{"type": "NumType"}]}, 
									{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'White'}, {"type": "LiteralStr", "value": 'Black'}, {"type": "LiteralStr", "value": 'Hispanic'}, {"type": "LiteralStr", "value": 'American Indian or Alaska Native'}], "values": [
										{"type": "NumType"}, 
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