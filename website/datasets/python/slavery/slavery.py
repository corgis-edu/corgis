'''
Hello! Thank you for downloading a CORGIS library. However, you do not
need to open this file. Instead you should make your own Python file and
add the following line:

import slavery

Then just place the files you downloaded alongside it.
'''

import os as _os
import pickle as _pickle

__all__ = ['get_transaction_record']

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
            'get_transaction_record': {
                "type": "FunctionType",
                "name": 'get_transaction_record',
                "returns": 
				{"type": "ListType", "subtype": 
					{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Buyer'}, {"type": "LiteralStr", "value": 'Seller'}, {"type": "LiteralStr", "value": 'Slave'}, {"type": "LiteralStr", "value": 'Transaction'}], "values": [
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'County of Origin'}, {"type": "LiteralStr", "value": 'Full Name'}, {"type": "LiteralStr", "value": 'Origin'}, {"type": "LiteralStr", "value": 'State of Origin'}], "values": [
							{"type": "StrType"}, 
							{"type": "StrType"}, 
							{"type": "StrType"}, 
							{"type": "StrType"}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'County of Origin'}, {"type": "LiteralStr", "value": 'Full Name'}, {"type": "LiteralStr", "value": 'Origin'}, {"type": "LiteralStr", "value": 'State of Origin'}], "values": [
							{"type": "StrType"}, 
							{"type": "StrType"}, 
							{"type": "StrType"}, 
							{"type": "StrType"}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Age'}, {"type": "LiteralStr", "value": 'Gender'}, {"type": "LiteralStr", "value": 'Name'}, {"type": "LiteralStr", "value": 'Skin Color'}], "values": [
							{"type": "NumType"}, 
							{"type": "StrType"}, 
							{"type": "StrType"}, 
							{"type": "StrType"}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Date'}, {"type": "LiteralStr", "value": 'Number of Adult Slaves'}, {"type": "LiteralStr", "value": 'Number of Child Slaves'}, {"type": "LiteralStr", "value": 'Number of Total Slaves Purchased'}, {"type": "LiteralStr", "value": 'Sale Details'}], "values": [
							{"type": "StrType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Discount Rate'}, {"type": "LiteralStr", "value": 'Payment Method'}, {"type": "LiteralStr", "value": 'Predicted Interest Rate'}, {"type": "LiteralStr", "value": 'Price'}, {"type": "LiteralStr", "value": 'Prices Listed'}], "values": [
								{"type": "NumType"}, 
								{"type": "StrType"}, 
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
                                          "slavery.data")
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

def get_transaction_record():
    """
    Retrieves all of the transaction record.
    """
    if _Constants._DATASET is None:
        with open(_Constants._DATABASE_NAME, 'rb') as _:
            _Constants._DATASET = _pickle.load(_)
    return _Constants._DATASET

if __name__ == '__main__':
    from pprint import pprint as _pprint
    from timeit import default_timer as _default_timer
    
    print(">>> get_transaction_record()")
    
    start_time = _default_timer()
    result = get_transaction_record()
    print("Time taken: {}".format(_default_timer() - start_time))
    _pprint(result[0])