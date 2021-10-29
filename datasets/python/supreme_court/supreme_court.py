'''
Hello! Thank you for downloading a CORGIS library. However, you do not
need to open this file. Instead you should make your own Python file and
add the following line:

import supreme_court

Then just place the files you downloaded alongside it.
'''

import os as _os
import pickle as _pickle

__all__ = ['get_court_case']

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
            'get_court_case': {
                "type": "FunctionType",
                "name": 'get_court_case',
                "returns": 
				{"type": "ListType", "subtype": 
					{"type": "DictType", "literals": [{"type": "LiteralStr", "value": '3_judge_dc'}, {"type": "LiteralStr", "value": 'docket'}, {"type": "LiteralStr", "value": 'name'}, {"type": "LiteralStr", "value": 'citation'}, {"type": "LiteralStr", "value": 'decision'}, {"type": "LiteralStr", "value": 'id'}, {"type": "LiteralStr", "value": 'issue'}, {"type": "LiteralStr", "value": 'laws'}, {"type": "LiteralStr", "value": 'lower court'}, {"type": "LiteralStr", "value": 'natural court'}, {"type": "LiteralStr", "value": 'origin'}, {"type": "LiteralStr", "value": 'source'}, {"type": "LiteralStr", "value": 'voting'}, {"type": "LiteralStr", "value": 'arguments'}], "values": [
						{"type": "NumType"}, 
						{"type": "NumType"}, 
						{"type": "StrType"}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'led'}, {"type": "LiteralStr", "value": 'lexis'}, {"type": "LiteralStr", "value": 'sct'}, {"type": "LiteralStr", "value": 'us'}], "values": [
							{"type": "StrType"}, 
							{"type": "StrType"}, 
							{"type": "StrType"}, 
							{"type": "StrType"}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'authority'}, {"type": "LiteralStr", "value": 'direction'}, {"type": "LiteralStr", "value": 'dissent agrees'}, {"type": "LiteralStr", "value": 'jurisdiction'}, {"type": "LiteralStr", "value": 'precedent altered?'}, {"type": "LiteralStr", "value": 'term'}, {"type": "LiteralStr", "value": 'type'}, {"type": "LiteralStr", "value": 'unconstitutional'}, {"type": "LiteralStr", "value": 'winning party'}, {"type": "LiteralStr", "value": 'admin action'}, {"type": "LiteralStr", "value": 'case'}, {"type": "LiteralStr", "value": 'date'}], "values": [
							{"type": "StrType"}, 
							{"type": "StrType"}, 
							{"type": "NumType"}, 
							{"type": "StrType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "StrType"}, 
							{"type": "StrType"}, 
							{"type": "StrType"}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'agency'}, {"type": "LiteralStr", "value": 'id'}], "values": [
								{"type": "StrType"}, 
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'disposition'}, {"type": "LiteralStr", "value": 'unusual'}], "values": [
								{"type": "StrType"}, 
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'day'}, {"type": "LiteralStr", "value": 'full'}, {"type": "LiteralStr", "value": 'month'}, {"type": "LiteralStr", "value": 'year'}], "values": [
								{"type": "NumType"}, 
								{"type": "StrType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}]}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'case'}, {"type": "LiteralStr", "value": 'case issues'}, {"type": "LiteralStr", "value": 'docket'}, {"type": "LiteralStr", "value": 'vote'}], "values": [
							{"type": "StrType"}, 
							{"type": "StrType"}, 
							{"type": "StrType"}, 
							{"type": "StrType"}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'area'}, {"type": "LiteralStr", "value": 'id'}, {"type": "LiteralStr", "value": 'text'}], "values": [
							{"type": "StrType"}, 
							{"type": "NumType"}, 
							{"type": "StrType"}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'id'}, {"type": "LiteralStr", "value": 'type'}], "values": [
							{"type": "NumType"}, 
							{"type": "StrType"}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'direction'}, {"type": "LiteralStr", "value": 'disagreement?'}, {"type": "LiteralStr", "value": 'disposition'}, {"type": "LiteralStr", "value": 'reasons'}], "values": [
							{"type": "StrType"}, 
							{"type": "NumType"}, 
							{"type": "StrType"}, 
							{"type": "StrType"}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'chief'}, {"type": "LiteralStr", "value": 'id'}, {"type": "LiteralStr", "value": 'period'}], "values": [
							{"type": "StrType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'id'}, {"type": "LiteralStr", "value": 'name'}], "values": [
							{"type": "NumType"}, 
							{"type": "StrType"}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'id'}, {"type": "LiteralStr", "value": 'name'}], "values": [
							{"type": "NumType"}, 
							{"type": "StrType"}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'majority'}, {"type": "LiteralStr", "value": 'minority'}, {"type": "LiteralStr", "value": 'split on second'}, {"type": "LiteralStr", "value": 'unclear'}, {"type": "LiteralStr", "value": 'majority assigner'}, {"type": "LiteralStr", "value": 'majority writer'}], "values": [
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'id'}, {"type": "LiteralStr", "value": 'name'}], "values": [
								{"type": "NumType"}, 
								{"type": "StrType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'id'}, {"type": "LiteralStr", "value": 'name'}], "values": [
								{"type": "NumType"}, 
								{"type": "StrType"}]}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'petitioner'}, {"type": "LiteralStr", "value": 'respondent'}], "values": [
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'entity'}, {"type": "LiteralStr", "value": 'id'}], "values": [
								{"type": "StrType"}, 
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'entity'}, {"type": "LiteralStr", "value": 'id'}], "values": [
								{"type": "StrType"}, 
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
                                          "supreme_court.data")
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

def get_court_case():
    """
    Retrieves all of the court case.
    """
    if _Constants._DATASET is None:
        with open(_Constants._DATABASE_NAME, 'rb') as _:
            _Constants._DATASET = _pickle.load(_)
    return _Constants._DATASET

if __name__ == '__main__':
    from pprint import pprint as _pprint
    from timeit import default_timer as _default_timer
    
    print(">>> get_court_case()")
    
    start_time = _default_timer()
    result = get_court_case()
    print("Time taken: {}".format(_default_timer() - start_time))
    _pprint(result[0])