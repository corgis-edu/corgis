'''
Hello! Thank you for downloading a CORGIS library. However, you do not
need to open this file. Instead you should make your own Python file and
add the following line:

import graduates

Then just place the files you downloaded alongside it.
'''

import os as _os
import pickle as _pickle

__all__ = ['get_grad_major']

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
            'get_grad_major': {
                "type": "FunctionType",
                "name": 'get_grad_major',
                "returns": 
				{"type": "ListType", "subtype": 
					{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Year'}, {"type": "LiteralStr", "value": 'Demographics'}, {"type": "LiteralStr", "value": 'Education'}, {"type": "LiteralStr", "value": 'Salaries'}, {"type": "LiteralStr", "value": 'Employment'}], "values": [
						{"type": "NumType"}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Total'}, {"type": "LiteralStr", "value": 'Ethnicity'}, {"type": "LiteralStr", "value": 'Gender'}], "values": [
							{"type": "NumType"}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Asians'}, {"type": "LiteralStr", "value": 'Minorities'}, {"type": "LiteralStr", "value": 'Whites'}], "values": [
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Females'}, {"type": "LiteralStr", "value": 'Males'}], "values": [
								{"type": "NumType"}, 
								{"type": "NumType"}]}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Major'}, {"type": "LiteralStr", "value": 'Degrees'}], "values": [
							{"type": "StrType"}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Bachelors'}, {"type": "LiteralStr", "value": 'Doctorates'}, {"type": "LiteralStr", "value": 'Masters'}, {"type": "LiteralStr", "value": 'Professionals'}], "values": [
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}]}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Highest'}, {"type": "LiteralStr", "value": 'Lowest'}, {"type": "LiteralStr", "value": 'Mean'}, {"type": "LiteralStr", "value": 'Median'}, {"type": "LiteralStr", "value": 'Quantity'}, {"type": "LiteralStr", "value": 'Standard Deviation'}], "values": [
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Employer Type'}, {"type": "LiteralStr", "value": 'Reason Working Outside Field'}, {"type": "LiteralStr", "value": 'Reason for Not Working'}, {"type": "LiteralStr", "value": 'Status'}, {"type": "LiteralStr", "value": 'Work Activity'}], "values": [
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Business/Industry'}, {"type": "LiteralStr", "value": 'Educational Institution'}, {"type": "LiteralStr", "value": 'Government'}], "values": [
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Career Change'}, {"type": "LiteralStr", "value": 'Family-related'}, {"type": "LiteralStr", "value": 'Job Location'}, {"type": "LiteralStr", "value": 'No Job Available'}, {"type": "LiteralStr", "value": 'Other'}, {"type": "LiteralStr", "value": 'Pay/Promotion'}, {"type": "LiteralStr", "value": 'Working Conditions'}], "values": [
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Family'}, {"type": "LiteralStr", "value": 'Layoff'}, {"type": "LiteralStr", "value": 'No Job Available'}, {"type": "LiteralStr", "value": 'No need/want'}, {"type": "LiteralStr", "value": 'Student'}], "values": [
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Employed'}, {"type": "LiteralStr", "value": 'Not in Labor Force'}, {"type": "LiteralStr", "value": 'Unemployed'}], "values": [
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Accounting/Finance/Contracts'}, {"type": "LiteralStr", "value": 'Applied Research'}, {"type": "LiteralStr", "value": 'Basic Research'}, {"type": "LiteralStr", "value": 'Computer Applications'}, {"type": "LiteralStr", "value": 'Design'}, {"type": "LiteralStr", "value": 'Development'}, {"type": "LiteralStr", "value": 'Human Resources'}, {"type": "LiteralStr", "value": 'Managing/Supervising People/Projects'}, {"type": "LiteralStr", "value": 'Other'}, {"type": "LiteralStr", "value": 'Productions/Operations/Maintenance'}, {"type": "LiteralStr", "value": 'Professional Service'}, {"type": "LiteralStr", "value": 'Qualitity/Productivity Management'}, {"type": "LiteralStr", "value": 'Sales, Purchasing, Marketing'}, {"type": "LiteralStr", "value": 'Teaching'}], "values": [
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
                                          "graduates.data")
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

def get_grad_major():
    """
    Retrieves all of the grad major.
    """
    if _Constants._DATASET is None:
        with open(_Constants._DATABASE_NAME, 'rb') as _:
            _Constants._DATASET = _pickle.load(_)
    return _Constants._DATASET

if __name__ == '__main__':
    from pprint import pprint as _pprint
    from timeit import default_timer as _default_timer
    
    print(">>> get_grad_major()")
    
    start_time = _default_timer()
    result = get_grad_major()
    print("Time taken: {}".format(_default_timer() - start_time))
    _pprint(result[0])