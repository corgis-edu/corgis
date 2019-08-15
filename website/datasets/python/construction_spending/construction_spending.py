'''
Hello! Thank you for downloading a CORGIS library. However, you do not
need to open this file. Instead you should make your own Python file and
add the following line:

import construction_spending

Then just place the files you downloaded alongside it.
'''

import os as _os
import pickle as _pickle

__all__ = ['get_spending']

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
            'get_spending': {
                "type": "FunctionType",
                "name": 'get_spending',
                "returns": 
				{"type": "ListType", "subtype": 
					{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'time'}, {"type": "LiteralStr", "value": 'annual'}, {"type": "LiteralStr", "value": 'current'}], "values": [
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'index'}, {"type": "LiteralStr", "value": 'month'}, {"type": "LiteralStr", "value": 'month name'}, {"type": "LiteralStr", "value": 'period'}, {"type": "LiteralStr", "value": 'year'}], "values": [
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "StrType"}, 
							{"type": "StrType"}, 
							{"type": "NumType"}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'combined'}, {"type": "LiteralStr", "value": 'private'}, {"type": "LiteralStr", "value": 'public'}], "values": [
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'amusement and recreation'}, {"type": "LiteralStr", "value": 'commercial'}, {"type": "LiteralStr", "value": 'communication'}, {"type": "LiteralStr", "value": 'conservation and development'}, {"type": "LiteralStr", "value": 'educational'}, {"type": "LiteralStr", "value": 'health care'}, {"type": "LiteralStr", "value": 'highway and street'}, {"type": "LiteralStr", "value": 'lodging'}, {"type": "LiteralStr", "value": 'manufacturing'}, {"type": "LiteralStr", "value": 'nonresidential'}, {"type": "LiteralStr", "value": 'office'}, {"type": "LiteralStr", "value": 'power'}, {"type": "LiteralStr", "value": 'public safety'}, {"type": "LiteralStr", "value": 'religious'}, {"type": "LiteralStr", "value": 'residential'}, {"type": "LiteralStr", "value": 'sewage and waste disposal'}, {"type": "LiteralStr", "value": 'total construction'}, {"type": "LiteralStr", "value": 'transportation'}, {"type": "LiteralStr", "value": 'water supply'}], "values": [
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
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'amusement and recreation'}, {"type": "LiteralStr", "value": 'commercial'}, {"type": "LiteralStr", "value": 'communication'}, {"type": "LiteralStr", "value": 'conservation and development'}, {"type": "LiteralStr", "value": 'educational'}, {"type": "LiteralStr", "value": 'health care'}, {"type": "LiteralStr", "value": 'highway and street'}, {"type": "LiteralStr", "value": 'lodging'}, {"type": "LiteralStr", "value": 'manufacturing'}, {"type": "LiteralStr", "value": 'nonresidential'}, {"type": "LiteralStr", "value": 'office'}, {"type": "LiteralStr", "value": 'power'}, {"type": "LiteralStr", "value": 'public safety'}, {"type": "LiteralStr", "value": 'religious'}, {"type": "LiteralStr", "value": 'residential'}, {"type": "LiteralStr", "value": 'sewage and waste disposal'}, {"type": "LiteralStr", "value": 'total construction'}, {"type": "LiteralStr", "value": 'transportation'}, {"type": "LiteralStr", "value": 'water supply'}], "values": [
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
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'amusement and recreation'}, {"type": "LiteralStr", "value": 'commercial'}, {"type": "LiteralStr", "value": 'communication'}, {"type": "LiteralStr", "value": 'conservation and development'}, {"type": "LiteralStr", "value": 'educational'}, {"type": "LiteralStr", "value": 'health care'}, {"type": "LiteralStr", "value": 'highway and street'}, {"type": "LiteralStr", "value": 'lodging'}, {"type": "LiteralStr", "value": 'manufacturing'}, {"type": "LiteralStr", "value": 'nonresidential'}, {"type": "LiteralStr", "value": 'office'}, {"type": "LiteralStr", "value": 'power'}, {"type": "LiteralStr", "value": 'public safety'}, {"type": "LiteralStr", "value": 'religious'}, {"type": "LiteralStr", "value": 'residential'}, {"type": "LiteralStr", "value": 'sewage and waste disposal'}, {"type": "LiteralStr", "value": 'total construction'}, {"type": "LiteralStr", "value": 'transportation'}, {"type": "LiteralStr", "value": 'water supply'}], "values": [
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
								{"type": "NumType"}]}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'combined'}, {"type": "LiteralStr", "value": 'private'}, {"type": "LiteralStr", "value": 'public'}], "values": [
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'amusement and recreation'}, {"type": "LiteralStr", "value": 'commercial'}, {"type": "LiteralStr", "value": 'communication'}, {"type": "LiteralStr", "value": 'conservation and development'}, {"type": "LiteralStr", "value": 'educational'}, {"type": "LiteralStr", "value": 'health care'}, {"type": "LiteralStr", "value": 'highway and street'}, {"type": "LiteralStr", "value": 'lodging'}, {"type": "LiteralStr", "value": 'manufacturing'}, {"type": "LiteralStr", "value": 'nonresidential'}, {"type": "LiteralStr", "value": 'office'}, {"type": "LiteralStr", "value": 'power'}, {"type": "LiteralStr", "value": 'public safety'}, {"type": "LiteralStr", "value": 'religious'}, {"type": "LiteralStr", "value": 'residential'}, {"type": "LiteralStr", "value": 'sewage and waste disposal'}, {"type": "LiteralStr", "value": 'total construction'}, {"type": "LiteralStr", "value": 'transportation'}, {"type": "LiteralStr", "value": 'water supply'}], "values": [
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
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'amusement and recreation'}, {"type": "LiteralStr", "value": 'commercial'}, {"type": "LiteralStr", "value": 'communication'}, {"type": "LiteralStr", "value": 'conservation and development'}, {"type": "LiteralStr", "value": 'educational'}, {"type": "LiteralStr", "value": 'health care'}, {"type": "LiteralStr", "value": 'highway and street'}, {"type": "LiteralStr", "value": 'lodging'}, {"type": "LiteralStr", "value": 'manufacturing'}, {"type": "LiteralStr", "value": 'nonresidential'}, {"type": "LiteralStr", "value": 'office'}, {"type": "LiteralStr", "value": 'power'}, {"type": "LiteralStr", "value": 'public safety'}, {"type": "LiteralStr", "value": 'religious'}, {"type": "LiteralStr", "value": 'residential'}, {"type": "LiteralStr", "value": 'sewage and waste disposal'}, {"type": "LiteralStr", "value": 'total construction'}, {"type": "LiteralStr", "value": 'transportation'}, {"type": "LiteralStr", "value": 'water supply'}], "values": [
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
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'amusement and recreation'}, {"type": "LiteralStr", "value": 'commercial'}, {"type": "LiteralStr", "value": 'communication'}, {"type": "LiteralStr", "value": 'conservation and development'}, {"type": "LiteralStr", "value": 'educational'}, {"type": "LiteralStr", "value": 'health care'}, {"type": "LiteralStr", "value": 'highway and street'}, {"type": "LiteralStr", "value": 'lodging'}, {"type": "LiteralStr", "value": 'manufacturing'}, {"type": "LiteralStr", "value": 'nonresidential'}, {"type": "LiteralStr", "value": 'office'}, {"type": "LiteralStr", "value": 'power'}, {"type": "LiteralStr", "value": 'public safety'}, {"type": "LiteralStr", "value": 'religious'}, {"type": "LiteralStr", "value": 'residential'}, {"type": "LiteralStr", "value": 'sewage and waste disposal'}, {"type": "LiteralStr", "value": 'total construction'}, {"type": "LiteralStr", "value": 'transportation'}, {"type": "LiteralStr", "value": 'water supply'}], "values": [
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
                                          "construction_spending.data")
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

def get_spending():
    """
    Retrieves all of the spending.
    """
    if _Constants._DATASET is None:
        with open(_Constants._DATABASE_NAME, 'rb') as _:
            _Constants._DATASET = _pickle.load(_)
    return _Constants._DATASET

if __name__ == '__main__':
    from pprint import pprint as _pprint
    from timeit import default_timer as _default_timer
    
    print(">>> get_spending()")
    
    start_time = _default_timer()
    result = get_spending()
    print("Time taken: {}".format(_default_timer() - start_time))
    _pprint(result[0])