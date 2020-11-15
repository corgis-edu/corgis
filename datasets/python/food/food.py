'''
Hello! Thank you for downloading a CORGIS library. However, you do not
need to open this file. Instead you should make your own Python file and
add the following line:

import food

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
					{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Category'}, {"type": "LiteralStr", "value": 'Description'}, {"type": "LiteralStr", "value": 'Nutrient Data Bank Number'}, {"type": "LiteralStr", "value": 'Data'}], "values": [
						{"type": "StrType"}, 
						{"type": "StrType"}, 
						{"type": "NumType"}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Alpha Carotene'}, {"type": "LiteralStr", "value": 'Ash'}, {"type": "LiteralStr", "value": 'Beta Carotene'}, {"type": "LiteralStr", "value": 'Beta Cryptoxanthin'}, {"type": "LiteralStr", "value": 'Carbohydrate'}, {"type": "LiteralStr", "value": 'Cholesterol'}, {"type": "LiteralStr", "value": 'Choline'}, {"type": "LiteralStr", "value": 'Fiber'}, {"type": "LiteralStr", "value": 'Kilocalories'}, {"type": "LiteralStr", "value": 'Lutein and Zeaxanthin'}, {"type": "LiteralStr", "value": 'Lycopene'}, {"type": "LiteralStr", "value": 'Manganese'}, {"type": "LiteralStr", "value": 'Niacin'}, {"type": "LiteralStr", "value": 'Pantothenic Acid'}, {"type": "LiteralStr", "value": 'Protein'}, {"type": "LiteralStr", "value": 'Refuse Percentage'}, {"type": "LiteralStr", "value": 'Retinol'}, {"type": "LiteralStr", "value": 'Riboflavin'}, {"type": "LiteralStr", "value": 'Selenium'}, {"type": "LiteralStr", "value": 'Sugar Total'}, {"type": "LiteralStr", "value": 'Thiamin'}, {"type": "LiteralStr", "value": 'Water'}, {"type": "LiteralStr", "value": 'Fat'}, {"type": "LiteralStr", "value": 'Household Weights'}, {"type": "LiteralStr", "value": 'Major Minerals'}, {"type": "LiteralStr", "value": 'Vitamins'}], "values": [
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
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Monosaturated Fat'}, {"type": "LiteralStr", "value": 'Polysaturated Fat'}, {"type": "LiteralStr", "value": 'Saturated Fat'}, {"type": "LiteralStr", "value": 'Total Lipid'}], "values": [
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": '1st Household Weight'}, {"type": "LiteralStr", "value": '1st Household Weight Description'}, {"type": "LiteralStr", "value": '2nd Household Weight'}, {"type": "LiteralStr", "value": '2nd Household Weight Description'}], "values": [
								{"type": "NumType"}, 
								{"type": "StrType"}, 
								{"type": "NumType"}, 
								{"type": "StrType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Calcium'}, {"type": "LiteralStr", "value": 'Copper'}, {"type": "LiteralStr", "value": 'Iron'}, {"type": "LiteralStr", "value": 'Magnesium'}, {"type": "LiteralStr", "value": 'Phosphorus'}, {"type": "LiteralStr", "value": 'Potassium'}, {"type": "LiteralStr", "value": 'Sodium'}, {"type": "LiteralStr", "value": 'Zinc'}], "values": [
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'Vitamin A - IU'}, {"type": "LiteralStr", "value": 'Vitamin A - RAE'}, {"type": "LiteralStr", "value": 'Vitamin B12'}, {"type": "LiteralStr", "value": 'Vitamin B6'}, {"type": "LiteralStr", "value": 'Vitamin C'}, {"type": "LiteralStr", "value": 'Vitamin E'}, {"type": "LiteralStr", "value": 'Vitamin K'}], "values": [
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
                                          "food.data")
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