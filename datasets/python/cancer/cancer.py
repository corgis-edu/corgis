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
                "returns": 
				{"type": "ListType", "subtype": 
					{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'State'}, {"type": "LiteralStr", "value": 'Total'}, {"type": "LiteralStr", "value": 'Rates'}, {"type": "LiteralStr", "value": 'Types'}], "values": [
						{"type": "StrType"}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Rate'}, {"type": "LiteralStr", "value": 'Number'}, {"type": "LiteralStr", "value": 'Population'}], "values": [
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Age'}, {"type": "LiteralStr", "value": 'Age and Sex'}, {"type": "LiteralStr", "value": 'Race'}, {"type": "LiteralStr", "value": 'Race and Sex'}], "values": [
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": '< 18'}, {"type": "LiteralStr", "value": '18-45'}, {"type": "LiteralStr", "value": '45-64'}, {"type": "LiteralStr", "value": '> 64'}], "values": [
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": '< 18'}, {"type": "LiteralStr", "value": '18 - 45'}, {"type": "LiteralStr", "value": '45 - 64'}, {"type": "LiteralStr", "value": '> 64'}], "values": [
								{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Female'}, {"type": "LiteralStr", "value": 'Male'}], "values": [
									{"type": "NumType"}, 
									{"type": "NumType"}]}, 
								{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Female'}, {"type": "LiteralStr", "value": 'Male'}], "values": [
									{"type": "NumType"}, 
									{"type": "NumType"}]}, 
								{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Female'}, {"type": "LiteralStr", "value": 'Male'}], "values": [
									{"type": "NumType"}, 
									{"type": "NumType"}]}, 
								{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Female'}, {"type": "LiteralStr", "value": 'Male'}], "values": [
									{"type": "NumType"}, 
									{"type": "NumType"}]}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'White'}, {"type": "LiteralStr", "value": 'White non-Hispanic'}, {"type": "LiteralStr", "value": 'Black'}, {"type": "LiteralStr", "value": 'Asian'}, {"type": "LiteralStr", "value": 'Indigenous'}, {"type": "LiteralStr", "value": 'Hispanic'}], "values": [
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Female'}, {"type": "LiteralStr", "value": 'Male'}], "values": [
								{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'White'}, {"type": "LiteralStr", "value": 'White non-Hispanic'}, {"type": "LiteralStr", "value": 'Black'}, {"type": "LiteralStr", "value": 'Black non-Hispanic'}, {"type": "LiteralStr", "value": 'Asian'}, {"type": "LiteralStr", "value": 'Indigenous'}, {"type": "LiteralStr", "value": 'Hispanic'}], "values": [
									{"type": "NumType"}, 
									{"type": "NumType"}, 
									{"type": "NumType"}, 
									{"type": "NumType"}, 
									{"type": "NumType"}, 
									{"type": "NumType"}, 
									{"type": "NumType"}]}, 
								{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'White'}, {"type": "LiteralStr", "value": 'White non-Hispanic'}, {"type": "LiteralStr", "value": 'Black'}, {"type": "LiteralStr", "value": 'Black non-Hispanic'}, {"type": "LiteralStr", "value": 'Asian'}, {"type": "LiteralStr", "value": 'Indigenous'}, {"type": "LiteralStr", "value": 'Hispanic'}], "values": [
									{"type": "NumType"}, 
									{"type": "NumType"}, 
									{"type": "NumType"}, 
									{"type": "NumType"}, 
									{"type": "NumType"}, 
									{"type": "NumType"}, 
									{"type": "NumType"}]}]}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Breast'}, {"type": "LiteralStr", "value": 'Colorectal'}, {"type": "LiteralStr", "value": 'Lung'}], "values": [
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Total'}, {"type": "LiteralStr", "value": 'Age'}, {"type": "LiteralStr", "value": 'Race'}], "values": [
								{"type": "NumType"}, 
								{"type": "DictType", "literals": [{"type": "LiteralStr", "value": '18 - 44'}, {"type": "LiteralStr", "value": '45 - 64'}, {"type": "LiteralStr", "value": '> 64'}], "values": [
									{"type": "NumType"}, 
									{"type": "NumType"}, 
									{"type": "NumType"}]}, 
								{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'White'}, {"type": "LiteralStr", "value": 'White non-Hispanic '}, {"type": "LiteralStr", "value": 'Black'}, {"type": "LiteralStr", "value": 'Black non-Hispanic'}, {"type": "LiteralStr", "value": 'Asian'}, {"type": "LiteralStr", "value": 'Indigenous'}, {"type": "LiteralStr", "value": 'Hispanic'}], "values": [
									{"type": "NumType"}, 
									{"type": "NumType"}, 
									{"type": "NumType"}, 
									{"type": "NumType"}, 
									{"type": "NumType"}, 
									{"type": "NumType"}, 
									{"type": "NumType"}]}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Total'}, {"type": "LiteralStr", "value": 'Age and Sex'}, {"type": "LiteralStr", "value": 'Race'}], "values": [
								{"type": "NumType"}, 
								{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Female'}, {"type": "LiteralStr", "value": 'Male'}], "values": [
									{"type": "DictType", "literals": [{"type": "LiteralStr", "value": '18 - 44'}, {"type": "LiteralStr", "value": '45 - 64'}, {"type": "LiteralStr", "value": '> 64'}], "values": [
										{"type": "NumType"}, 
										{"type": "NumType"}, 
										{"type": "NumType"}]}, 
									{"type": "DictType", "literals": [{"type": "LiteralStr", "value": '18 - 44'}, {"type": "LiteralStr", "value": '45 - 64'}, {"type": "LiteralStr", "value": '> 64'}], "values": [
										{"type": "NumType"}, 
										{"type": "NumType"}, 
										{"type": "NumType"}]}]}, 
								{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'White'}, {"type": "LiteralStr", "value": 'White non-Hispanic'}, {"type": "LiteralStr", "value": 'Black'}, {"type": "LiteralStr", "value": 'Black non-Hispanic'}, {"type": "LiteralStr", "value": 'Asian'}, {"type": "LiteralStr", "value": 'Indigenous'}, {"type": "LiteralStr", "value": 'Hispanic'}], "values": [
									{"type": "NumType"}, 
									{"type": "NumType"}, 
									{"type": "NumType"}, 
									{"type": "NumType"}, 
									{"type": "NumType"}, 
									{"type": "NumType"}, 
									{"type": "NumType"}]}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Total'}, {"type": "LiteralStr", "value": 'Age and Sex'}, {"type": "LiteralStr", "value": 'Race'}], "values": [
								{"type": "NumType"}, 
								{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Female'}, {"type": "LiteralStr", "value": 'Male'}], "values": [
									{"type": "DictType", "literals": [{"type": "LiteralStr", "value": '18 - 44'}, {"type": "LiteralStr", "value": '45 - 64'}, {"type": "LiteralStr", "value": '> 64'}], "values": [
										{"type": "NumType"}, 
										{"type": "NumType"}, 
										{"type": "NumType"}]}, 
									{"type": "DictType", "literals": [{"type": "LiteralStr", "value": '18 - 44'}, {"type": "LiteralStr", "value": '45 - 64'}, {"type": "LiteralStr", "value": '> 64'}], "values": [
										{"type": "NumType"}, 
										{"type": "NumType"}, 
										{"type": "NumType"}]}]}, 
								{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'White'}, {"type": "LiteralStr", "value": 'White non-Hispanic'}, {"type": "LiteralStr", "value": 'Black'}, {"type": "LiteralStr", "value": 'Black non-Hispanic'}, {"type": "LiteralStr", "value": 'Asian'}, {"type": "LiteralStr", "value": 'Indigenous'}, {"type": "LiteralStr", "value": 'Hispanic'}], "values": [
									{"type": "NumType"}, 
									{"type": "NumType"}, 
									{"type": "NumType"}, 
									{"type": "NumType"}, 
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