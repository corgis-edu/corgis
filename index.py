import argparse
from tools.build import build
from tools.config import Config

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description='Rebuilds the index by browsing all the source datasets')
    parser.add_argument('--skip', dest="skip", type=str,
                        default='',
                        help='Comma-separated list of dataset names to skip')
    parser.add_argument('--destination', dest="destination", type=str,
                        default=Config.DEFAULT_DESTINATION,
                        help='The destination folder to put the files.')

    args = parser.parse_args()
    skip_list = [name.strip() for name in args.skip.split(",") if name.strip()]
    configuration = Config(args.destination, True, skip_list)
    configuration.save_index()
    print(configuration)