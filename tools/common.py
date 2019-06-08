import json
import sys, os
from collections import OrderedDict
import sqlite3
import re
from pprint import pprint
from textwrap import wrap

from jinja2 import Environment, FileSystemLoader
import jinja2_highlight

def snake_case(string):
    return string.replace(" ", "_").lower()
    
def camel_case_caps(string):
    return ''.join(x for x in string.title() if not x.isspace())
    
def camel_case(string):
    s = camel_case_caps(string)
    return s[0].lower() + s[1:] if s else ""

def flat_case(string):
    return string.replace(" ", "").replace("_", "").lower()

def kebab_case(string):
    return string.replace(" ", "-").replace("_", "-").lower()

EXPAND = "<span class='glyphicon glyphicon-new-window' aria-hidden='true'></span>"
def convert_example_value(data, possible_path=""):
    if isinstance(data, dict):
        return "<a class='dialog-opener' id='{possible_path}'>{{ {E} }}</a>".format(possible_path=possible_path, E=EXPAND)
    elif isinstance(data, list):
        return "<a class='dialog-opener' id='{possible_path}'>[ {E} ]</a>".format(possible_path=possible_path, E=EXPAND)
    elif isinstance(data, str) or isinstance(data, unicode):
        return "<code>{data}</code>".format(data=wrap_quotes(data))
    else:
        return "<code>{data}</code>".format(data=data)

        
def wrap_quotes(data):
    if '"' not in data:
        pretty = '"{data}"'.format(data=data)
    elif "'" not in data:
        pretty = "'{data}'".format(data=data)
    else:
        pretty = '"{data}"'.format(data=data.replace('"', '\"'))
    return pretty
    
def sluggify(astr):
    return (astr.replace('.', '-').replace("[", "__")
                .replace("]", "__").replace(" ", "-")
                .replace("#", "_").replace("/", "_")
                .replace("'", "_"))
    
def load_templates(format):
    base_directory = os.path.dirname(os.path.realpath(__file__))
    format_templates = os.path.join(base_directory, 'build_formats', format)
    templates = os.path.join(base_directory, 'build_formats', 'templates/')

    env = Environment(extensions=['jinja2_highlight.HighlightExtension'], 
                      loader=FileSystemLoader([templates, format_templates]))

    env.filters['camel_case_caps'] = camel_case_caps
    env.filters['camel_case'] = camel_case
    env.filters['snake_case'] = snake_case
    env.filters['kebab_case'] = kebab_case
    env.filters['flat_case'] = flat_case
    env.filters['max'] = max
    env.filters['tojson'] = json.dumps
    env.filters['sluggify'] = sluggify
    env.filters['wrap_quotes'] = wrap_quotes
    
    return env