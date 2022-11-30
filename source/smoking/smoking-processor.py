import pandas as pd


def main():
    # Importing dataset
    dataset_name = 'smoking-data'
    df = pd.read_csv(f"{dataset_name}.csv")

    # Initial columns of interest
    target_cols = ['Entity', 'Year',
                   'Cigarettes',
                   'Percentage', 'Percentage male', 'Percentage female',
                   'Number', 'Number female', 'Number male']

    # No thresholding required, only replacement of nan values
    df = df[target_cols].fillna(0)

    # Setting data types
    df = df.astype({'Year': 'int',
                    'Number': 'int',
                    'Number female': 'int',
                    'Number male': 'int',
                    'Percentage': 'float',
                    'Percentage male': 'float',
                    'Percentage female': 'float',
                    'Cigarettes': 'float'})

    # Exporting dataset
    df.to_csv(f"{dataset_name}.csv", index=False)

    # Exporting to csv
    df.to_csv("smoking-corgis.csv", header=False, index=False)


if __name__ == '__main__':
    main()
