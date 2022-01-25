'''
Hello! Thank you for downloading a CORGIS library. However, you do not
need to open this file. Instead you should make your own Python file and
add the following line:

import county_demographics

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
					{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'County'}, {"type": "LiteralStr", "value": 'State'}, {"type": "LiteralStr", "value": 'Age'}, {"type": "LiteralStr", "value": 'Education'}, {"type": "LiteralStr", "value": 'Employment'}, {"type": "LiteralStr", "value": 'Ethnicities'}, {"type": "LiteralStr", "value": 'Housing'}, {"type": "LiteralStr", "value": 'Income'}, {"type": "LiteralStr", "value": 'Miscellaneous'}, {"type": "LiteralStr", "value": 'Population'}, {"type": "LiteralStr", "value": 'Sales'}], "values": [
						{"type": "StrType"}, 
						{"type": "StrType"}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Percent 65 and Older'}, {"type": "LiteralStr", "value": 'Percent Under 18 Years'}, {"type": "LiteralStr", "value": 'Percent Under 5 Years'}], "values": [
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": "Bachelor's Degree or Higher"}, {"type": "LiteralStr", "value": 'High School or Higher'}], "values": [
							{"type": "NumType"}, 
							{"type": "NumType"}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Nonemployer Establishments'}, {"type": "LiteralStr", "value": 'Firms'}], "values": [
							{"type": "NumType"}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Total'}, {"type": "LiteralStr", "value": 'Women-Owned'}, {"type": "LiteralStr", "value": 'Men-Owned'}, {"type": "LiteralStr", "value": 'Minority-Owned'}, {"type": "LiteralStr", "value": 'Nonminority-Owned'}, {"type": "LiteralStr", "value": 'Veteran-Owned'}, {"type": "LiteralStr", "value": 'Nonveteran-Owned'}], "values": [
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}]}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'American Indian and Alaska Native Alone'}, {"type": "LiteralStr", "value": 'Asian Alone'}, {"type": "LiteralStr", "value": 'Black Alone'}, {"type": "LiteralStr", "value": 'Hispanic or Latino'}, {"type": "LiteralStr", "value": 'Native Hawaiian and Other Pacific Islander Alone'}, {"type": "LiteralStr", "value": 'Two or More Races'}, {"type": "LiteralStr", "value": 'White Alone'}, {"type": "LiteralStr", "value": 'White Alone\t not Hispanic or Latino'}], "values": [
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Homeownership Rate'}, {"type": "LiteralStr", "value": 'Households'}, {"type": "LiteralStr", "value": 'Housing Units'}, {"type": "LiteralStr", "value": 'Median Value of Owner-Occupied Units'}, {"type": "LiteralStr", "value": 'Persons per Household'}], "values": [
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Median Houseold Income'}, {"type": "LiteralStr", "value": 'Per Capita Income'}], "values": [
							{"type": "NumType"}, 
							{"type": "NumType"}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Foreign Born'}, {"type": "LiteralStr", "value": 'Land Area'}, {"type": "LiteralStr", "value": 'Language Other than English at Home'}, {"type": "LiteralStr", "value": 'Living in Same House +1 Years'}, {"type": "LiteralStr", "value": 'Manufacturers Shipments'}, {"type": "LiteralStr", "value": 'Mean Travel Time to Work'}, {"type": "LiteralStr", "value": 'Percent Female'}, {"type": "LiteralStr", "value": 'Veterans'}], "values": [
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": '2020 Population'}, {"type": "LiteralStr", "value": '2010 Population'}, {"type": "LiteralStr", "value": 'Population per Square Mile'}], "values": [
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Accommodation and Food Services Sales'}, {"type": "LiteralStr", "value": 'Retail Sales'}], "values": [
							{"type": "NumType"}, 
							{"type": "NumType"}]}]}}
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
                                          "county_demographics.data")
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