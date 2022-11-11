import pandas as pd
import numpy as np


def main():

    # Importing dataset
    dataset_name = 'parking_citations'
    df = pd.read_csv(f"{dataset_name}.csv")

    # Initial columns of interest
    target_cols = ['ISSUE DATE AND TIME', 'VEHICLE PLATE', 'STATE OF PLATE', 'MAKE',
       'STYLE', 'COLOR', 'LOCATION', 'VIOLATION DESCRIPTION', 'AMOUNT DUE']

    # Dropping columns with too many missing values
    df = df[target_cols]

    # Dropping rows with missing values
    df = df.dropna()

    # Dropping rows without / in date_time column
    df = df[df['ISSUE DATE AND TIME'].str.contains('/')]

    # Converting date_time to separate columns
    df['ISSUE DATE AND TIME'] = pd.to_datetime(df['ISSUE DATE AND TIME'])
    df['year'] = df['ISSUE DATE AND TIME'].dt.year
    df['month'] = df['ISSUE DATE AND TIME'].dt.month
    df['day'] = df['ISSUE DATE AND TIME'].dt.day
    df['hour'] = df['ISSUE DATE AND TIME'].dt.hour
    df['minute'] = df['ISSUE DATE AND TIME'].dt.minute

    # Dropping date_time and date_documented
    df = df.drop(['ISSUE DATE AND TIME'], axis=1)

    df.to_csv(f"parking-citations-corgis.csv", header=False, index=False)

if __name__ == '__main__':
    main()
