import argparse
from tools.build import build

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description='Compile datasets for the desired format.')
    parser.add_argument('source', metavar='s', type=str, 
                        help='The dataset to build.')
    parser.add_argument('format', metavar='f', type=str,
                        default='all',
                        help='The desired target language/environment/format.')

    args = parser.parse_args()
    reports = build(args.source, args.format)
    for report in reports:
        print(report)