import csv
import pickle
import time
from shutil import copyfile
from os import makedirs

from tools.build_report import BuildReport
from tools.common import snake_case, load_templates
from tools.dataset import CorgisType

env = load_templates('visualizer')

LANGUAGE_TYPE_NAMES = {
    CorgisType.string: 'string',
    CorgisType.int: 'whole number',
    CorgisType.float: 'decimal',
    CorgisType.boolean: 'boolean',
    CorgisType.dict: 'dictionary'
}

LANGUAGE_TYPE_DESCRIPTIONS = {
    CorgisType.string: 'String (text)',
    CorgisType.int: 'Integer (whole number)',
    CorgisType.float: 'Float (decimal number)',
    CorgisType.boolean: 'Boolean (True or False)',
    CorgisType.dict: 'Dictionary'
}

LANGUAGE_INFO = {    
    'LANGUAGE_TYPE_NAMES': LANGUAGE_TYPE_NAMES,
    'LANGUAGE_TYPE_DESCRIPTIONS': LANGUAGE_TYPE_DESCRIPTIONS
}

def remove_outliers(lodol, actually_keep=True):
    bad_indexes = set()
    bad_keys = set()
    DEVIATIONS = 3
    MAX_LENGTH = 10000
    
    for data in lodol:
        #print(data['name'])
        #print([e for e in data['data'] if isinstance(e, (str, unicode))])
        if isinstance(data['data'][0], (int, float)):
            print(data['name'])
            mean = statistics.mean(data['data'])
            std = statistics.stdev(data['data'])
            evils = 0
            for index, value in enumerate(data['data']):
                if mean - DEVIATIONS*std > value or value > mean + DEVIATIONS*std:
                    bad_keys.add(data['name'])
                    bad_indexes.add(index)
                    evils += 1
            #print(data['name'], mean-4*std, mean+4*std, evils)
                    
    total_indexes = len(lodol[0]['data'])
    reduced_indexes = total_indexes - len(bad_indexes)
    print("Bad indexes:", len(bad_indexes), "/", total_indexes)
    '''
    I have a list of numbers Z from 0 to N
    I have a list of J numbers (where J < N) randomly distributed throughout Z
    I wish to remove K numbers from Z, without drawing from any number in J
    '''
    if reduced_indexes > MAX_LENGTH:
        stride = total_indexes / MAX_LENGTH
        for an_index in xrange(0, total_indexes, stride):
            keep_index = random.randint(0, stride-1)
            for offset in xrange(0, stride):
                if keep_index != offset:
                    bad_indexes.add(min(total_indexes, an_index+offset))
    if actually_keep:
        bad_indexes = set()
        bad_keys = set()
    print("Trimmed indexes:", len(bad_indexes), "/", total_indexes)    
    #print("Contributing keys:", ', '.join(bad_keys))
    key_names = [row['name'] for row in lodol]
    short_key_names = shortest_unique_strings(key_names)
    key_name_map = dict(zip(key_names, short_key_names))
    for data in lodol:
        data['data'] = [v for i, v in enumerate(data['data']) if i not in bad_indexes]
        #inter = data['name'].split('.', 2)[2]
        #if '.' in inter:
        #    category, name = inter.rsplit('.', 1)
        #else:
        #    category, name = inter, inter
        #category = category.replace('.', ' ')
        #data['pretty'] = category.title() + ": "+name.title()
        data['pretty'] = key_name_map[data['name']] 
        print(data['pretty'])
        if isinstance(data['data'][0], (float, int)):
            data['type'] = 'number'
        else:
            data['type'] = 'text'
    lodol.sort(key= lambda e: e['pretty'])
    return key_name_map

def build_locals(dataset, destination):
    name = snake_case(dataset.name)
    json_path = name + ".js"
    json_bar_path = name + "_bar.js"
    with open(json_path, 'w') as output_file, open(json_bar_path, 'w') as output_bar_file:
        output_file.write(name+" = ")
        output_bar_file.write(name+"_bar = ")
        data_list = json.load(local_file)
        data = [JsonLeafNodes(name+'.[0]', item).result for item in data_list]
        data = lod_to_dol(data)
        bar_data = []
        key_name_map = remove_outliers(data, actually_keep=model['metadata']['outliers'])
        for row in data:
            if row['name'] in model['structures_comments']:
                row['comment'] = model['structures_comments'][row['name']]
            is_index = row['name'] in [i['jsonpath'] for i in local['indexes']]
            row['index'] = is_index
        dol = {d['name']: d['data'] for d in data}
        lod = [dict(zip(dol, t)) for t in zip(*dol.values())]
        
        for index in local['indexes']:
            index_path = index['jsonpath']
            indexed_values = {}
            aggregated_values = {}
            for chunk in lod:
                if index_path in chunk:
                    category = str(chunk[index_path])
                else:
                    category = ""
                if category not in indexed_values:
                    indexed_values[category] = {}
                for key, value in chunk.items():
                    if not isinstance(value, (int, float)):
                        continue
                    if key not in indexed_values[category]:
                        indexed_values[category][key] = []
                    indexed_values[category][key].append(value)
                    
            for category, items in indexed_values.items():
                category = str(category)
                for key, values in items.items():
                    if key not in aggregated_values:
                        aggregated_values[key] = {}
                    aggregated_values[key][category.replace(',', '')] = {
                        'count': len(values),
                        'sum': sum(values),                                
                        'average': statistics.mean(values) if sum(values) else 0,
                        'average w/o zero': statistics.mean([v for v in values if v>0] if sum([v for v in values if v>0]) else [0])
                    }
            
            bar_data.append({
                'data': aggregated_values,
                'name': index_path,
                'indexes': [k.replace(',', '') for k in indexed_values.keys()],
                'best_indexes': [k.replace(',', '') for k, v in sorted([(k, v['count']) 
                                    for k, v in list(aggregated_values.values())[0].items()], key=lambda i: -i[1])[:10]],
                'pretty': key_name_map[index_path]
            })
        json.dump(data, output_file, indent=2)
        json.dump(bar_data, output_bar_file, indent=2)
    print("File sizes:", "{}mb".format(os.stat(json_path).st_size/1024/1024), "{}mb".format(os.stat(json_bar_path).st_size/1024/1024))
    yield json_path
    yield json_bar_path

def build_data_file(dataset, destination):
    destination += snake_case(dataset.name)+".data"
    with open(destination, 'wb') as data_file:
        pickle.dump(dataset.nested_values, data_file, protocol=2)
    return destination
    
def build_website_file(dataset, destination):
    destination += snake_case(dataset.name)+".md"
    md = env.get_template('index.md').stream(dataset=dataset, **LANGUAGE_INFO)
    md.dump(destination)
    return destination

def build_image_files(dataset, destination):
    copyfile(dataset.get_full_path('icon'), destination + dataset.icon)
    if dataset.icon != dataset.splash:
        copyfile(dataset.get_full_path('splash'), destination + dataset.splash)

def build(dataset, configuration):
    # Prelude
    start = time.time()
    
    # Processing
    dataset_name = snake_case(dataset.name)
    destination = configuration.destination.format(dataset=dataset_name,
                                                   format='python')
    makedirs(destination, exist_ok=True)
    files = [build_data_file(dataset, destination),
             build_image_files(dataset, destination),
             build_website_file(dataset, destination)]
    print(dataset)
    
    # Wrap up
    duration = time.time()-start
    return BuildReport(dataset, 'python', duration, files)
