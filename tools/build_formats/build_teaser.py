import pickle
import time
from os import makedirs

from tools.build_report import BuildReport
from tools.case_modifiers import sluggify
from tools.common import load_templates, build_image_files

__version__ = '2.0.0'

env = load_templates('teaser')


# TODO: Stop storing icons redundantly - centralize them

def build_teaser_file(dataset, destination, env):
    destination += sluggify(dataset.name) + ".html"
    md = env.get_template('index.html').stream(dataset=dataset)
    md.dump(destination)
    return destination


def build(dataset, configuration):
    # Prelude
    start = time.time()

    # Processing
    dataset_name = sluggify(dataset.name)
    destination = configuration.teaser_destination.format(dataset=dataset_name)
    makedirs(destination, exist_ok=True)
    files = [build_image_files(dataset, configuration),
             build_teaser_file(dataset, destination, env)]

    # Wrap up
    duration = time.time() - start
    return BuildReport(dataset, 'python', duration, files, 'success')
