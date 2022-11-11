import pandas as pd
import numpy as np


def main():

    # Importing dataset
    dataset_name = 'nuclear-explosions-raw'
    df = pd.read_csv(f"{dataset_name}.csv")

    # Initial columns of interest
    target_cols = ['date_long', 'country', 'region', 'source', 'latitude',
                   'longitude', 'magnitude_body', 'magnitude_surface', 'depth',
                   'yield_lower', 'yield_upper', 'purpose', 'name', 'type']

    # Dropping columns with too many missing values
    df = df[target_cols]

    # Converting date_long to string
    df['date_long'] = df['date_long'].astype(str)

    # Splitting YYYYMMDD date to 3 columns, day, month, year, and dropping date_long
    df['day'] = df['date_long'].str[6:8]
    df['month'] = df['date_long'].str[4:6]
    df['year'] = df['date_long'].str[0:4]
    df = df.drop(columns=['date_long'])

    # De capitalizing all strings
    columns_to_lower = ['region', 'purpose', 'name', 'type']
    df[columns_to_lower] = df[columns_to_lower].apply(lambda x: x.astype(str).str.title())

    df.to_csv(f"nuclear-explosions-corgis.csv", header=False, index=False)


if __name__ == '__main__':
    main()
