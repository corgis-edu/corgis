import argparse
from tools.build import build
from tools.config import Config

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description='Rebuilds the index by browsing all the source datasets')
    parser.add_argument('--destination', metavar='d', type=str,
                        default=Config.DEFAULT_DESTINATION,
                        help='The destination folder to put the files.')

    args = parser.parse_args()
    configuration = Config(args.destination, True)
    configuration.save_index()
    print(configuration)