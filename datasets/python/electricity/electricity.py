'''
Hello! Thank you for downloading a CORGIS library. However, you do not
need to open this file. Instead you should make your own Python file and
add the following line:

import electricity

Then just place the files you downloaded alongside it.
'''

import os as _os
import pickle as _pickle

__all__ = ['get_utility']

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
            'get_utility': {
                "type": "FunctionType",
                "name": 'get_utility',
                "returns": 
				{"type": "ListType", "subtype": 
					{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Utility'}, {"type": "LiteralStr", "value": 'Demand'}, {"type": "LiteralStr", "value": 'Sources'}, {"type": "LiteralStr", "value": 'Uses'}, {"type": "LiteralStr", "value": 'Revenues'}, {"type": "LiteralStr", "value": 'Revenue'}, {"type": "LiteralStr", "value": 'Retail'}], "values": [
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Number'}, {"type": "LiteralStr", "value": 'Name'}, {"type": "LiteralStr", "value": 'State'}, {"type": "LiteralStr", "value": 'Type'}], "values": [
							{"type": "NumType"}, 
							{"type": "StrType"}, 
							{"type": "StrType"}, 
							{"type": "StrType"}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Summer Peak'}, {"type": "LiteralStr", "value": 'Winter Peak'}], "values": [
							{"type": "NumType"}, 
							{"type": "NumType"}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Generation'}, {"type": "LiteralStr", "value": 'Purchased'}, {"type": "LiteralStr", "value": 'Other'}, {"type": "LiteralStr", "value": 'Total'}], "values": [
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Retail'}, {"type": "LiteralStr", "value": 'Resale'}, {"type": "LiteralStr", "value": 'No Charge'}, {"type": "LiteralStr", "value": 'Consumed'}, {"type": "LiteralStr", "value": 'Losses'}, {"type": "LiteralStr", "value": 'Total'}], "values": [
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Retail'}], "values": [
							{"type": "NumType"}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Delivery'}, {"type": "LiteralStr", "value": 'Resale'}, {"type": "LiteralStr", "value": 'Adjustments'}, {"type": "LiteralStr", "value": 'Transmission'}, {"type": "LiteralStr", "value": 'Other'}, {"type": "LiteralStr", "value": 'Total'}], "values": [
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Residential'}, {"type": "LiteralStr", "value": 'Commercial'}, {"type": "LiteralStr", "value": 'Industrial'}, {"type": "LiteralStr", "value": 'Transportation'}, {"type": "LiteralStr", "value": 'Total'}], "values": [
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Revenue'}, {"type": "LiteralStr", "value": 'Sales'}, {"type": "LiteralStr", "value": 'Customers'}], "values": [
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Revenue'}, {"type": "LiteralStr", "value": 'Sales'}, {"type": "LiteralStr", "value": 'Customers'}], "values": [
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Revenue'}, {"type": "LiteralStr", "value": 'Sales'}, {"type": "LiteralStr", "value": 'Customers'}], "values": [
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Revenue'}, {"type": "LiteralStr", "value": 'Sales'}, {"type": "LiteralStr", "value": 'Customers'}], "values": [
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Revenue'}, {"type": "LiteralStr", "value": 'Sales'}, {"type": "LiteralStr", "value": 'Customers'}], "values": [
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
                                          "electricity.data")
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

def get_utility():
    """
    Retrieves all of the utility.
    """
    if _Constants._DATASET is None:
        with open(_Constants._DATABASE_NAME, 'rb') as _:
            _Constants._DATASET = _pickle.load(_)
    return _Constants._DATASET

if __name__ == '__main__':
    from pprint import pprint as _pprint
    from timeit import default_timer as _default_timer
    
    print(">>> get_utility()")
    
    start_time = _default_timer()
    result = get_utility()
    print("Time taken: {}".format(_default_timer() - start_time))
    _pprint(result[0])