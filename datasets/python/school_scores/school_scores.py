'''
Hello! Thank you for downloading a CORGIS library. However, you do not
need to open this file. Instead you should make your own Python file and
add the following line:

import school_scores

Then just place the files you downloaded alongside it.
'''

import os as _os
import pickle as _pickle

__all__ = ['get_record']

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
            'get_record': {
                "type": "FunctionType",
                "name": 'get_record',
                "returns": 
				{"type": "ListType", "subtype": 
					{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Year'}, {"type": "LiteralStr", "value": 'State'}, {"type": "LiteralStr", "value": 'Total'}, {"type": "LiteralStr", "value": 'Academic Subjects'}, {"type": "LiteralStr", "value": 'Family Income'}, {"type": "LiteralStr", "value": 'GPA'}, {"type": "LiteralStr", "value": 'Gender'}, {"type": "LiteralStr", "value": 'Score Ranges'}], "values": [
						{"type": "NumType"}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Code'}, {"type": "LiteralStr", "value": 'Name'}], "values": [
							{"type": "StrType"}, 
							{"type": "StrType"}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Math'}, {"type": "LiteralStr", "value": 'Test-takers'}, {"type": "LiteralStr", "value": 'Verbal'}], "values": [
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Arts/Music'}, {"type": "LiteralStr", "value": 'English'}, {"type": "LiteralStr", "value": 'Foreign Languages'}, {"type": "LiteralStr", "value": 'Mathematics'}, {"type": "LiteralStr", "value": 'Natural Sciences'}, {"type": "LiteralStr", "value": 'Social Sciences/History'}], "values": [
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Average GPA'}, {"type": "LiteralStr", "value": 'Average Years'}], "values": [
								{"type": "NumType"}, 
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Average GPA'}, {"type": "LiteralStr", "value": 'Average Years'}], "values": [
								{"type": "NumType"}, 
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Average GPA'}, {"type": "LiteralStr", "value": 'Average Years'}], "values": [
								{"type": "NumType"}, 
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Average GPA'}, {"type": "LiteralStr", "value": 'Average Years'}], "values": [
								{"type": "NumType"}, 
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Average GPA'}, {"type": "LiteralStr", "value": 'Average Years'}], "values": [
								{"type": "NumType"}, 
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Average GPA'}, {"type": "LiteralStr", "value": 'Average Years'}], "values": [
								{"type": "NumType"}, 
								{"type": "NumType"}]}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Between 20-40k'}, {"type": "LiteralStr", "value": 'Between 40-60k'}, {"type": "LiteralStr", "value": 'Between 60-80k'}, {"type": "LiteralStr", "value": 'Between 80-100k'}, {"type": "LiteralStr", "value": 'Less than 20k'}, {"type": "LiteralStr", "value": 'More than 100k'}], "values": [
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Math'}, {"type": "LiteralStr", "value": 'Test-takers'}, {"type": "LiteralStr", "value": 'Verbal'}], "values": [
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Math'}, {"type": "LiteralStr", "value": 'Test-takers'}, {"type": "LiteralStr", "value": 'Verbal'}], "values": [
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Math'}, {"type": "LiteralStr", "value": 'Test-takers'}, {"type": "LiteralStr", "value": 'Verbal'}], "values": [
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Math'}, {"type": "LiteralStr", "value": 'Test-takers'}, {"type": "LiteralStr", "value": 'Verbal'}], "values": [
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Math'}, {"type": "LiteralStr", "value": 'Test-takers'}, {"type": "LiteralStr", "value": 'Verbal'}], "values": [
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Math'}, {"type": "LiteralStr", "value": 'Test-takers'}, {"type": "LiteralStr", "value": 'Verbal'}], "values": [
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}]}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'A minus'}, {"type": "LiteralStr", "value": 'A plus'}, {"type": "LiteralStr", "value": 'A'}, {"type": "LiteralStr", "value": 'B'}, {"type": "LiteralStr", "value": 'C'}, {"type": "LiteralStr", "value": 'D or lower'}, {"type": "LiteralStr", "value": 'No response'}], "values": [
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Math'}, {"type": "LiteralStr", "value": 'Test-takers'}, {"type": "LiteralStr", "value": 'Verbal'}], "values": [
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Math'}, {"type": "LiteralStr", "value": 'Test-takers'}, {"type": "LiteralStr", "value": 'Verbal'}], "values": [
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Math'}, {"type": "LiteralStr", "value": 'Test-takers'}, {"type": "LiteralStr", "value": 'Verbal'}], "values": [
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Math'}, {"type": "LiteralStr", "value": 'Test-takers'}, {"type": "LiteralStr", "value": 'Verbal'}], "values": [
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Math'}, {"type": "LiteralStr", "value": 'Test-takers'}, {"type": "LiteralStr", "value": 'Verbal'}], "values": [
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Math'}, {"type": "LiteralStr", "value": 'Test-takers'}, {"type": "LiteralStr", "value": 'Verbal'}], "values": [
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Math'}, {"type": "LiteralStr", "value": 'Test-takers'}, {"type": "LiteralStr", "value": 'Verbal'}], "values": [
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}]}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Female'}, {"type": "LiteralStr", "value": 'Male'}], "values": [
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Math'}, {"type": "LiteralStr", "value": 'Test-takers'}, {"type": "LiteralStr", "value": 'Verbal'}], "values": [
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Math'}, {"type": "LiteralStr", "value": 'Test-takers'}, {"type": "LiteralStr", "value": 'Verbal'}], "values": [
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}]}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Between 200 to 300'}, {"type": "LiteralStr", "value": 'Between 300 to 400'}, {"type": "LiteralStr", "value": 'Between 400 to 500'}, {"type": "LiteralStr", "value": 'Between 500 to 600'}, {"type": "LiteralStr", "value": 'Between 600 to 700'}, {"type": "LiteralStr", "value": 'Between 700 to 800'}], "values": [
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Math'}, {"type": "LiteralStr", "value": 'Verbal'}], "values": [
								{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Females'}, {"type": "LiteralStr", "value": 'Males'}, {"type": "LiteralStr", "value": 'Total'}], "values": [
									{"type": "NumType"}, 
									{"type": "NumType"}, 
									{"type": "NumType"}]}, 
								{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Females'}, {"type": "LiteralStr", "value": 'Males'}, {"type": "LiteralStr", "value": 'Total'}], "values": [
									{"type": "NumType"}, 
									{"type": "NumType"}, 
									{"type": "NumType"}]}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Math'}, {"type": "LiteralStr", "value": 'Verbal'}], "values": [
								{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Females'}, {"type": "LiteralStr", "value": 'Males'}, {"type": "LiteralStr", "value": 'Total'}], "values": [
									{"type": "NumType"}, 
									{"type": "NumType"}, 
									{"type": "NumType"}]}, 
								{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Females'}, {"type": "LiteralStr", "value": 'Males'}, {"type": "LiteralStr", "value": 'Total'}], "values": [
									{"type": "NumType"}, 
									{"type": "NumType"}, 
									{"type": "NumType"}]}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Math'}, {"type": "LiteralStr", "value": 'Verbal'}], "values": [
								{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Females'}, {"type": "LiteralStr", "value": 'Males'}, {"type": "LiteralStr", "value": 'Total'}], "values": [
									{"type": "NumType"}, 
									{"type": "NumType"}, 
									{"type": "NumType"}]}, 
								{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Females'}, {"type": "LiteralStr", "value": 'Males'}, {"type": "LiteralStr", "value": 'Total'}], "values": [
									{"type": "NumType"}, 
									{"type": "NumType"}, 
									{"type": "NumType"}]}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Math'}, {"type": "LiteralStr", "value": 'Verbal'}], "values": [
								{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Females'}, {"type": "LiteralStr", "value": 'Males'}, {"type": "LiteralStr", "value": 'Total'}], "values": [
									{"type": "NumType"}, 
									{"type": "NumType"}, 
									{"type": "NumType"}]}, 
								{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Females'}, {"type": "LiteralStr", "value": 'Males'}, {"type": "LiteralStr", "value": 'Total'}], "values": [
									{"type": "NumType"}, 
									{"type": "NumType"}, 
									{"type": "NumType"}]}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Math'}, {"type": "LiteralStr", "value": 'Verbal'}], "values": [
								{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Females'}, {"type": "LiteralStr", "value": 'Males'}, {"type": "LiteralStr", "value": 'Total'}], "values": [
									{"type": "NumType"}, 
									{"type": "NumType"}, 
									{"type": "NumType"}]}, 
								{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Females'}, {"type": "LiteralStr", "value": 'Males'}, {"type": "LiteralStr", "value": 'Total'}], "values": [
									{"type": "NumType"}, 
									{"type": "NumType"}, 
									{"type": "NumType"}]}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Math'}, {"type": "LiteralStr", "value": 'Verbal'}], "values": [
								{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Females'}, {"type": "LiteralStr", "value": 'Males'}, {"type": "LiteralStr", "value": 'Total'}], "values": [
									{"type": "NumType"}, 
									{"type": "NumType"}, 
									{"type": "NumType"}]}, 
								{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Females'}, {"type": "LiteralStr", "value": 'Males'}, {"type": "LiteralStr", "value": 'Total'}], "values": [
									{"type": "NumType"}, 
									{"type": "NumType"}, 
									{"type": "NumType"}]}]}]}]}}
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
                                          "school_scores.data")
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

def get_record():
    """
    Retrieves all of the record.
    """
    if _Constants._DATASET is None:
        with open(_Constants._DATABASE_NAME, 'rb') as _:
            _Constants._DATASET = _pickle.load(_)
    return _Constants._DATASET

if __name__ == '__main__':
    from pprint import pprint as _pprint
    from timeit import default_timer as _default_timer
    
    print(">>> get_record()")
    
    start_time = _default_timer()
    result = get_record()
    print("Time taken: {}".format(_default_timer() - start_time))
    _pprint(result[0])