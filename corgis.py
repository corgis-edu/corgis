import argparse
from tools.build import build
from tools.config import Config

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description='Compile datasets for the desired format.')
    parser.add_argument('source', metavar='s', type=str, 
                        help='The dataset to build. Use * to build all.')
    parser.add_argument('format', metavar='f', type=str,
                        default='all',
                        help='The desired target language/environment/format.')
    parser.add_argument('--destination', metavar='d', type=str,
                        default=Config.DEFAULT_DESTINATION,
                        help='The destination folder to put the files.')

    args = parser.parse_args()
    configuration = Config(args.destination)
    reports = build(args.source, args.format, configuration)
    for report in reports:
        print(report)