import pickle
import time
from os import makedirs

from tools.build_report import BuildReport
from tools.common import snake_case, load_templates, build_image_files, build_website_file, sluggify
from tools.dataset import CorgisType
from tools.tifa import TifaDefinition

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
    files = [build_image_files(dataset, destination),
             build_teaser_file(dataset, destination, env)]
    print(dataset)

    # Wrap up
    duration = time.time() - start
    return BuildReport(dataset, 'python', duration, files)
