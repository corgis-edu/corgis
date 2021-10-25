'''
Hello! Thank you for downloading a CORGIS library. However, you do not
need to open this file. Instead you should make your own Python file and
add the following line:

import energy

Then just place the files you downloaded alongside it.
'''

import os as _os
import pickle as _pickle

__all__ = ['get_report']

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
            'get_report': {
                "type": "FunctionType",
                "name": 'get_report',
                "returns": 
				{"type": "ListType", "subtype": 
					{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'State'}, {"type": "LiteralStr", "value": 'Year'}, {"type": "LiteralStr", "value": 'Production'}, {"type": "LiteralStr", "value": 'Consumption'}, {"type": "LiteralStr", "value": 'Expenditure'}, {"type": "LiteralStr", "value": 'Price'}], "values": [
						{"type": "StrType"}, 
						{"type": "NumType"}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Coal'}], "values": [
							{"type": "NumType"}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Commercial'}, {"type": "LiteralStr", "value": 'Electric Power'}, {"type": "LiteralStr", "value": 'Industrial'}, {"type": "LiteralStr", "value": 'Refinery'}, {"type": "LiteralStr", "value": 'Residential'}, {"type": "LiteralStr", "value": 'Transportation'}], "values": [
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Coal'}, {"type": "LiteralStr", "value": 'Distillate Fuel Oil'}, {"type": "LiteralStr", "value": 'Geothermal'}, {"type": "LiteralStr", "value": 'Hydropower'}, {"type": "LiteralStr", "value": 'Kerosene'}, {"type": "LiteralStr", "value": 'Petroleum'}, {"type": "LiteralStr", "value": 'Natural Gas'}, {"type": "LiteralStr", "value": 'Solar'}, {"type": "LiteralStr", "value": 'Wind'}, {"type": "LiteralStr", "value": 'Wood'}], "values": [
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
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Coal'}, {"type": "LiteralStr", "value": 'Distillate Fuel Oil'}, {"type": "LiteralStr", "value": 'Natural Gas'}, {"type": "LiteralStr", "value": 'Wood'}], "values": [
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Coal'}, {"type": "LiteralStr", "value": 'Distillate Fuel Oil'}, {"type": "LiteralStr", "value": 'Geothermal'}, {"type": "LiteralStr", "value": 'Hydropower'}, {"type": "LiteralStr", "value": 'Kerosene'}, {"type": "LiteralStr", "value": 'Petroleum'}, {"type": "LiteralStr", "value": 'Natural Gas'}, {"type": "LiteralStr", "value": 'Other Petroleum Products'}, {"type": "LiteralStr", "value": 'Solar'}, {"type": "LiteralStr", "value": 'Wind'}, {"type": "LiteralStr", "value": 'Wood'}], "values": [
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
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Coal'}, {"type": "LiteralStr", "value": 'Distillate Fuel Oil'}, {"type": "LiteralStr", "value": 'Natural Gas'}], "values": [
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Coal'}, {"type": "LiteralStr", "value": 'Distillate Fuel Oil'}, {"type": "LiteralStr", "value": 'Geothermal'}, {"type": "LiteralStr", "value": 'Kerosene'}, {"type": "LiteralStr", "value": 'Petroleum'}, {"type": "LiteralStr", "value": 'Natural Gas'}, {"type": "LiteralStr", "value": 'Wood'}], "values": [
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Coal'}, {"type": "LiteralStr", "value": 'Distillate Fuel Oil'}, {"type": "LiteralStr", "value": 'Petroleum'}, {"type": "LiteralStr", "value": 'Natural Gas'}], "values": [
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}]}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Commercial'}, {"type": "LiteralStr", "value": 'Electric Power'}, {"type": "LiteralStr", "value": 'Industrial'}, {"type": "LiteralStr", "value": 'Residential'}, {"type": "LiteralStr", "value": 'Transportation'}], "values": [
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Coal'}, {"type": "LiteralStr", "value": 'Distillate Fuel Oil'}, {"type": "LiteralStr", "value": 'Kerosene'}, {"type": "LiteralStr", "value": 'Petroleum'}, {"type": "LiteralStr", "value": 'Natural Gas'}], "values": [
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Coal'}, {"type": "LiteralStr", "value": 'Distillate Fuel Oil'}, {"type": "LiteralStr", "value": 'Natural Gas'}], "values": [
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Coal'}, {"type": "LiteralStr", "value": 'Distillate Fuel Oil'}, {"type": "LiteralStr", "value": 'Kerosene'}, {"type": "LiteralStr", "value": 'Petroleum'}, {"type": "LiteralStr", "value": 'Natural Gas'}, {"type": "LiteralStr", "value": 'Other Petroleum Products'}], "values": [
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Coal'}, {"type": "LiteralStr", "value": 'Distillate Fuel Oil'}, {"type": "LiteralStr", "value": 'Kerosene'}, {"type": "LiteralStr", "value": 'Petroleum'}, {"type": "LiteralStr", "value": 'Natural Gas'}, {"type": "LiteralStr", "value": 'Wood'}], "values": [
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Coal'}, {"type": "LiteralStr", "value": 'Distillate Fuel Oil'}, {"type": "LiteralStr", "value": 'Petroleum'}, {"type": "LiteralStr", "value": 'Natural Gas'}], "values": [
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}]}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Commercial'}, {"type": "LiteralStr", "value": 'Electric Power'}, {"type": "LiteralStr", "value": 'Industrial'}, {"type": "LiteralStr", "value": 'Transportation'}], "values": [
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Coal'}, {"type": "LiteralStr", "value": 'Distillate Fuel Oil'}, {"type": "LiteralStr", "value": 'Kerosene'}, {"type": "LiteralStr", "value": 'Petroleum'}, {"type": "LiteralStr", "value": 'Natural Gas'}], "values": [
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Coal'}, {"type": "LiteralStr", "value": 'Distillate Fuel Oil'}, {"type": "LiteralStr", "value": 'Natural Gas'}], "values": [
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Coal'}, {"type": "LiteralStr", "value": 'Distillate Fuel Oil'}, {"type": "LiteralStr", "value": 'Kerosene'}, {"type": "LiteralStr", "value": 'Petroleum'}, {"type": "LiteralStr", "value": 'Natural Gas'}, {"type": "LiteralStr", "value": 'Other Petroleum Products'}], "values": [
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Coal'}, {"type": "LiteralStr", "value": 'Distillate Fuel Oil'}, {"type": "LiteralStr", "value": 'Petroleum'}, {"type": "LiteralStr", "value": 'Natural Gas'}], "values": [
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
                                          "energy.data")
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

def get_report():
    """
    Retrieves all of the report.
    """
    if _Constants._DATASET is None:
        with open(_Constants._DATABASE_NAME, 'rb') as _:
            _Constants._DATASET = _pickle.load(_)
    return _Constants._DATASET

if __name__ == '__main__':
    from pprint import pprint as _pprint
    from timeit import default_timer as _default_timer
    
    print(">>> get_report()")
    
    start_time = _default_timer()
    result = get_report()
    print("Time taken: {}".format(_default_timer() - start_time))
    _pprint(result[0])