import pandas as pd


def main():
    # Importing dataset
    dataset_name = 'covid-mobility-data'
    df = pd.read_csv(f"{dataset_name}.csv")

    # Initial columns of interest
    target_cols = ['Entity',
                   'Year',
                   'Retail & Recreation', 'Grocery & Pharmacy', 'Parks', 'Transit Stations', 'Workplaces',
                   'Residential']

    # Replacing Nans with 0s for redundancy
    df = df[target_cols].fillna(0)

    # Changing data types
    df = df.astype({'Year': 'int'})

    # Exporting to csv
    df.to_csv("covid-mobility-corgis.csv", header=False, index=False)


if __name__ == '__main__':
    main()
