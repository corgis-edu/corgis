import argparse
from tools.build import build, build_all
from tools.config import Config

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description='Automatically rebuild all datasets as needed.')
    parser.add_argument('--destination', metavar='d', type=str,
                        default=Config.DEFAULT_DESTINATION,
                        help='The destination folder to put the files.')

    args = parser.parse_args()
    configuration = Config(args.destination)
    changed = build_all(configuration)
    for report in changed:
        print(report)
