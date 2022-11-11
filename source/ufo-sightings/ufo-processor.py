import pandas as pd
import numpy as np


def main():

    # Importing dataset
    dataset_name = 'ufo_sightings'
    df = pd.read_csv(f"{dataset_name}.csv")

    # Initial columns of interest
    target_cols = ['date_time', 'city_area', 'state', 'country', 'ufo_shape',
       'encounter_length', 'description',
       'date_documented', 'latitude', 'longitude']

    # Dropping columns with too many missing values
    df = df[target_cols]

    # Dropping rows with missing values
    df = df.dropna()

    # Dropping rows without / in date_time column
    df = df[df['date_time'].str.contains('/')]

    # Converting date_time to separate columns
    df['date_time'] = pd.to_datetime(df['date_time'])
    df['year'] = df['date_time'].dt.year
    df['month'] = df['date_time'].dt.month
    df['day'] = df['date_time'].dt.day
    df['hour'] = df['date_time'].dt.hour
    df['minute'] = df['date_time'].dt.minute

    # Converting date_documented to separate columns
    df['date_documented'] = pd.to_datetime(df['date_documented'])
    df['year_documented'] = df['date_documented'].dt.year
    df['month_documented'] = df['date_documented'].dt.month
    df['day_documented'] = df['date_documented'].dt.day

    # Dropping date_time and date_documented
    df = df.drop(['date_time', 'date_documented'], axis=1)

    # Dropping rows with missing values
    df = df.dropna()

    # Dropping rows with brackets in city_area
    df = df[~df['city_area'].str.contains('\(')]
    df = df[~df['city_area'].str.contains('\)')]

    # Capitalizing state and country
    df['state'] = df['state'].str.upper()
    df['country'] = df['country'].str.upper()

    df.to_csv(f"ufo-sightings-corgis.csv", header=False, index=False)

if __name__ == '__main__':
    main()
