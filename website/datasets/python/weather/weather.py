'''
Hello! Thank you for downloading a CORGIS library. However, you do not
need to open this file. Instead you should make your own Python file and
add the following line:

import weather

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
					{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Data'}, {"type": "LiteralStr", "value": 'Date'}, {"type": "LiteralStr", "value": 'Station'}], "values": [
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Precipitation'}, {"type": "LiteralStr", "value": 'Temperature'}, {"type": "LiteralStr", "value": 'Wind'}], "values": [
							{"type": "NumType"}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Avg Temp'}, {"type": "LiteralStr", "value": 'Max Temp'}, {"type": "LiteralStr", "value": 'Min Temp'}], "values": [
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Direction'}, {"type": "LiteralStr", "value": 'Speed'}], "values": [
								{"type": "NumType"}, 
								{"type": "NumType"}]}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Full'}, {"type": "LiteralStr", "value": 'Month'}, {"type": "LiteralStr", "value": 'Week of'}, {"type": "LiteralStr", "value": 'Year'}], "values": [
							{"type": "StrType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'City'}, {"type": "LiteralStr", "value": 'Code'}, {"type": "LiteralStr", "value": 'Location'}, {"type": "LiteralStr", "value": 'State'}], "values": [
							{"type": "StrType"}, 
							{"type": "StrType"}, 
							{"type": "StrType"}, 
							{"type": "StrType"}]}]}}
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
                                          "weather.data")
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
    
def chain_get(item, keys):
    for key in keys.split("."):
        item = item[key]
    return item

def get(property, index, index_value):
    all_data = get_report()
    if index != "(None)":
        return [chain_get(row, property) for row in all_data
                if chain_get(row, index) == index_value]
    else:
        return [chain_get(row, property) for row in all_data]

if __name__ == '__main__':
    from pprint import pprint as _pprint
    from timeit import default_timer as _default_timer
    
    print(">>> get_report()")
    
    start_time = _default_timer()
    result = get_report()
    print("Time taken: {}".format(_default_timer() - start_time))
    _pprint(result[0])
    
    print(">>> get('Data.Precipitation', '(None)', None)")
    print(get('Data.Precipitation', '(None)', None))
    
    print('>>> get("Data.Precipitation","Station.Location","Blacksburg, VA")')
    print(get("Data.Precipitation","Station.Location","Blacksburg, VA"))