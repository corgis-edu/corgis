'''
Hello! Thank you for downloading a CORGIS library. However, you do not
need to open this file. Instead you should make your own Python file and
add the following line:

import classics

Then just place the files you downloaded alongside it.
'''

import os as _os
import pickle as _pickle

__all__ = ['get_book']

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
            'get_book': {
                "type": "FunctionType",
                "name": 'get_book',
                "returns": 
				{"type": "ListType", "subtype": 
					{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'bibliography'}, {"type": "LiteralStr", "value": 'metadata'}, {"type": "LiteralStr", "value": 'metrics'}], "values": [
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'congress classifications'}, {"type": "LiteralStr", "value": 'languages'}, {"type": "LiteralStr", "value": 'subjects'}, {"type": "LiteralStr", "value": 'title'}, {"type": "LiteralStr", "value": 'type'}, {"type": "LiteralStr", "value": 'author'}, {"type": "LiteralStr", "value": 'publication'}], "values": [
							{"type": "StrType"}, 
							{"type": "StrType"}, 
							{"type": "StrType"}, 
							{"type": "StrType"}, 
							{"type": "StrType"}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'birth'}, {"type": "LiteralStr", "value": 'death'}, {"type": "LiteralStr", "value": 'name'}], "values": [
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "StrType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'day'}, {"type": "LiteralStr", "value": 'full'}, {"type": "LiteralStr", "value": 'month'}, {"type": "LiteralStr", "value": 'month name'}, {"type": "LiteralStr", "value": 'year'}], "values": [
								{"type": "NumType"}, 
								{"type": "StrType"}, 
								{"type": "NumType"}, 
								{"type": "StrType"}, 
								{"type": "NumType"}]}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'downloads'}, {"type": "LiteralStr", "value": 'id'}, {"type": "LiteralStr", "value": 'rank'}, {"type": "LiteralStr", "value": 'url'}, {"type": "LiteralStr", "value": 'formats'}], "values": [
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "NumType"}, 
							{"type": "StrType"}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'total'}, {"type": "LiteralStr", "value": 'types'}], "values": [
								{"type": "NumType"}, 
								{"type": "StrType"}]}]}, 
						{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'difficulty'}, {"type": "LiteralStr", "value": 'sentiments'}, {"type": "LiteralStr", "value": 'statistics'}], "values": [
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'automated readability index'}, {"type": "LiteralStr", "value": 'coleman liau index'}, {"type": "LiteralStr", "value": 'dale chall readability score'}, {"type": "LiteralStr", "value": 'difficult words'}, {"type": "LiteralStr", "value": 'flesch kincaid grade'}, {"type": "LiteralStr", "value": 'flesch reading ease'}, {"type": "LiteralStr", "value": 'gunning fog'}, {"type": "LiteralStr", "value": 'linsear write formula'}, {"type": "LiteralStr", "value": 'smog index'}], "values": [
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}, 
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'polarity'}, {"type": "LiteralStr", "value": 'subjectivity'}], "values": [
								{"type": "NumType"}, 
								{"type": "NumType"}]}, 
							{"type": "DictType", "literals": [{"type": "LiteralStr", "value": 'average letter per word'}, {"type": "LiteralStr", "value": 'average sentence length'}, {"type": "LiteralStr", "value": 'average sentence per word'}, {"type": "LiteralStr", "value": 'characters'}, {"type": "LiteralStr", "value": 'polysyllables'}, {"type": "LiteralStr", "value": 'sentences'}, {"type": "LiteralStr", "value": 'syllables'}, {"type": "LiteralStr", "value": 'words'}], "values": [
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
                                          "classics.data")
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

def get_book():
    """
    Retrieves all of the Book.
    """
    if _Constants._DATASET is None:
        with open(_Constants._DATABASE_NAME, 'rb') as _:
            _Constants._DATASET = _pickle.load(_)
    return _Constants._DATASET

if __name__ == '__main__':
    from pprint import pprint as _pprint
    from timeit import default_timer as _default_timer
    
    print(">>> get_book()")
    
    start_time = _default_timer()
    result = get_book()
    print("Time taken: {}".format(_default_timer() - start_time))
    _pprint(result[0])