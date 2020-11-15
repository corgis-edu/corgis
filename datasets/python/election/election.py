'''
Hello! Thank you for downloading a CORGIS library. However, you do not
need to open this file. Instead you should make your own Python file and
add the following line:

import election

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
					{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Location'}, {"type": "LiteralStr", "value": 'Vote Data'}], "values": [
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'County'}, {"type": "LiteralStr", "value": 'State'}, {"type": "LiteralStr", "value": 'State Abbreviation'}], "values": [
							{"type": "StrType"}, 
							{"type": "StrType"}, 
							{"type": "StrType"}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Ben Carson'}, {"type": "LiteralStr", "value": 'Bernie Sanders'}, {"type": "LiteralStr", "value": 'Carly Fiorina'}, {"type": "LiteralStr", "value": 'Chris Christie'}, {"type": "LiteralStr", "value": 'Donald Trump'}, {"type": "LiteralStr", "value": 'Hillary Clinton'}, {"type": "LiteralStr", "value": 'Jeb Bush'}, {"type": "LiteralStr", "value": 'John Kasich'}, {"type": "LiteralStr", "value": 'Marco Rubio'}, {"type": "LiteralStr", "value": "Martin O'Malley"}, {"type": "LiteralStr", "value": 'Mike Huckabee'}, {"type": "LiteralStr", "value": 'No Preference'}, {"type": "LiteralStr", "value": 'Rand Paul'}, {"type": "LiteralStr", "value": 'Rick Santorum'}, {"type": "LiteralStr", "value": 'Ted Cruz'}, {"type": "LiteralStr", "value": 'Uncommitted'}], "values": [
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Number of Votes'}, {"type": "LiteralStr", "value": 'Party'}, {"type": "LiteralStr", "value": 'Percent of Votes'}], "values": [
								{"type": "NumType"}, 
								{"type": "StrType"}, 
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Number of Votes'}, {"type": "LiteralStr", "value": 'Party'}, {"type": "LiteralStr", "value": 'Percent of Votes'}], "values": [
								{"type": "NumType"}, 
								{"type": "StrType"}, 
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Number of Votes'}, {"type": "LiteralStr", "value": 'Party'}, {"type": "LiteralStr", "value": 'Percent of Votes'}], "values": [
								{"type": "NumType"}, 
								{"type": "StrType"}, 
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Number of Votes'}, {"type": "LiteralStr", "value": 'Party'}, {"type": "LiteralStr", "value": 'Percent of Votes'}], "values": [
								{"type": "NumType"}, 
								{"type": "StrType"}, 
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Number of Votes'}, {"type": "LiteralStr", "value": 'Party'}, {"type": "LiteralStr", "value": 'Percent of Votes'}], "values": [
								{"type": "NumType"}, 
								{"type": "StrType"}, 
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Number of Votes'}, {"type": "LiteralStr", "value": 'Party'}, {"type": "LiteralStr", "value": 'Percent of Votes'}], "values": [
								{"type": "NumType"}, 
								{"type": "StrType"}, 
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Number of Votes'}, {"type": "LiteralStr", "value": 'Party'}, {"type": "LiteralStr", "value": 'Percent of Votes'}], "values": [
								{"type": "NumType"}, 
								{"type": "StrType"}, 
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Number of Votes'}, {"type": "LiteralStr", "value": 'Party'}, {"type": "LiteralStr", "value": 'Percent of Votes'}], "values": [
								{"type": "NumType"}, 
								{"type": "StrType"}, 
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Number of Votes'}, {"type": "LiteralStr", "value": 'Party'}, {"type": "LiteralStr", "value": 'Percent of Votes'}], "values": [
								{"type": "NumType"}, 
								{"type": "StrType"}, 
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Number of Votes'}, {"type": "LiteralStr", "value": 'Party'}, {"type": "LiteralStr", "value": 'Percent of Votes'}], "values": [
								{"type": "NumType"}, 
								{"type": "StrType"}, 
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Number of Votes'}, {"type": "LiteralStr", "value": 'Party'}, {"type": "LiteralStr", "value": 'Percent of Votes'}], "values": [
								{"type": "NumType"}, 
								{"type": "StrType"}, 
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Number of Votes'}, {"type": "LiteralStr", "value": 'Party'}, {"type": "LiteralStr", "value": 'Percent of Votes'}], "values": [
								{"type": "NumType"}, 
								{"type": "StrType"}, 
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Number of Votes'}, {"type": "LiteralStr", "value": 'Party'}, {"type": "LiteralStr", "value": 'Percent of Votes'}], "values": [
								{"type": "NumType"}, 
								{"type": "StrType"}, 
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Number of Votes'}, {"type": "LiteralStr", "value": 'Party'}, {"type": "LiteralStr", "value": 'Percent of Votes'}], "values": [
								{"type": "NumType"}, 
								{"type": "StrType"}, 
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Number of Votes'}, {"type": "LiteralStr", "value": 'Party'}, {"type": "LiteralStr", "value": 'Percent of Votes'}], "values": [
								{"type": "NumType"}, 
								{"type": "StrType"}, 
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Number of Votes'}, {"type": "LiteralStr", "value": 'Party'}, {"type": "LiteralStr", "value": 'Percent of Votes'}], "values": [
								{"type": "NumType"}, 
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
                                          "election.data")
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