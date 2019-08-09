import statistics
import time
import json
from typing import List, Dict, Any
from os import makedirs

from tools.build_report import BuildReport
from tools.common import snake_case, load_templates, build_image_files, build_website_file, get_values_grouped_by_index
from tools.dataset import CorgisType

__version__ = '2.0.0'

env = load_templates('visualizer')

LANGUAGE_TYPE_NAMES = {
    CorgisType.string: 'string',
    CorgisType.int: 'number',
    CorgisType.float: 'number',
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

LIMIT_BEST_INDEXES = 10


def remove_outliers(dataset):
    bad_indexes = set()
    bad_keys = set()
    DEVIATIONS = 3
    MAX_LENGTH = 10000

    for data in lodol:
        # print(data['name'])
        # print([e for e in data['data'] if isinstance(e, (str, unicode))])
        if isinstance(data['data'][0], (int, float)):
            print(data['name'])
            mean = statistics.mean(data['data'])
            std = statistics.stdev(data['data'])
            evils = 0
            for index, value in enumerate(data['data']):
                if mean - DEVIATIONS * std > value or value > mean + DEVIATIONS * std:
                    bad_keys.add(data['name'])
                    bad_indexes.add(index)
                    evils += 1
            # print(data['name'], mean-4*std, mean+4*std, evils)

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
        for an_index in range(0, total_indexes, stride):
            keep_index = random.randint(0, stride - 1)
            for offset in range(0, stride):
                if keep_index != offset:
                    bad_indexes.add(min(total_indexes, an_index + offset))
    if actually_keep:
        bad_indexes = set()
        bad_keys = set()
    print("Trimmed indexes:", len(bad_indexes), "/", total_indexes)
    # print("Contributing keys:", ', '.join(bad_keys))
    key_names = [row['name'] for row in lodol]
    short_key_names = shortest_unique_strings(key_names)
    key_name_map = dict(zip(key_names, short_key_names))
    for data in lodol:
        data['data'] = [v for i, v in enumerate(data['data']) if i not in bad_indexes]
        # inter = data['name'].split('.', 2)[2]
        # if '.' in inter:
        #    category, name = inter.rsplit('.', 1)
        # else:
        #    category, name = inter, inter
        # category = category.replace('.', ' ')
        # data['pretty'] = category.title() + ": "+name.title()
        data['pretty'] = key_name_map[data['name']]
        print(data['pretty'])
        if isinstance(data['data'][0], (float, int)):
            data['type'] = 'number'
        else:
            data['type'] = 'text'
    lodol.sort(key=lambda e: e['pretty'])
    return key_name_map


def aggregate_statistics(indexed_values):
    aggregated_values = {}
    for index_value, items in indexed_values.items():
        for property_name, values in items.items():
            if property_name not in aggregated_values:
                aggregated_values[property_name] = {}
            aggregated_values[property_name][index_value] = {
                'count': len(values),
                'sum': sum(values),
                'average': statistics.mean(values) if sum(values) else 0,
                'average w/o zero': statistics.mean(
                    [v for v in values if v > 0]
                    if sum([v for v in values if v > 0])
                    else [0])
            }
    return aggregated_values


def get_best_indexes(aggregated_values):
    ordered = sorted([(index_value, stats['count'])
                      for index_value, stats in
                      list(aggregated_values.values())[0].items()],
                     key=lambda i: -i[1])
    return [index_value for index_value, v in ordered[:LIMIT_BEST_INDEXES]]


def build_data_files(dataset, destination):
    name = snake_case(dataset.name)

    json_path = name + ".js"
    json_bar_path = name + "_bar.js"

    data = list(dataset.as_dictionary_of_lists(LANGUAGE_TYPE_NAMES).values())
    # TODO: Avoid removing outliers based on list from metadata file?
    data = json.dumps(data, indent=2)
    md = env.get_template('dataset.js').stream(dataset=dataset, data=data)
    md.dump(destination + json_path)

    # Get all
    bar_data = []
    for index in dataset.indexes:
        indexed_values = get_values_grouped_by_index(dataset.values, index)
        aggregated_values = aggregate_statistics(indexed_values)
        best_indexes = get_best_indexes(aggregated_values)
        bar_data.append({
            'data': aggregated_values,
            'name': index.name,
            # 'indexes': [k.replace(',', '') for k in indexed_values.keys()],
            'indexes': [str(k) for k in indexed_values.keys()],
            'best_indexes': [str(k) for k in best_indexes],
            'pretty': index.name
        })

    bar_data = json.dumps(bar_data, indent=2)
    md = env.get_template('dataset_bar.js').stream(dataset=dataset, data=bar_data)
    md.dump(destination + json_bar_path)

    return ['dataset.js', 'dataset_bar.js']


def build(dataset, configuration):
    # Prelude
    start = time.time()

    # Processing
    dataset_name = snake_case(dataset.name)
    destination = configuration.destination.format(dataset=dataset_name,
                                                   format='visualizer')
    makedirs(destination, exist_ok=True)
    files = [*build_data_files(dataset, destination),
             build_image_files(dataset, destination),
             build_website_file(dataset, destination, env, LANGUAGE_INFO)]
    print(dataset)

    # Wrap up
    duration = time.time() - start
    return BuildReport(dataset, 'visualizer', duration, files)
