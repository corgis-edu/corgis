import pandas as pd
import numpy as np


def main():
    # Importing dataset
    dataset_name = 'coffee_ratings'
    df = pd.read_csv(f"{dataset_name}.csv")

    # Initial columns of interest
    target_cols = ['total_cup_points', 'species', 'owner', 'country_of_origin',
     'company', 'region', 'number_of_bags',
       'bag_weight', 'harvest_year', 'variety', 'processing_method', 'aroma',
       'flavor', 'aftertaste', 'acidity', 'body', 'balance', 'uniformity',
       'sweetness', 'moisture', 'color', 'altitude_low_meters',
       'altitude_high_meters', 'altitude_mean_meters']

    # Dropping columns with too many missing values
    df = df[target_cols]

    # Converting country_of_origin, company, region, variety, processing_method to strings
    df['country_of_origin'] = df['country_of_origin'].astype(str)
    df['company'] = df['company'].astype(str)
    df['region'] = df['region'].astype(str)
    df['variety'] = df['variety'].astype(str)
    df['processing_method'] = df['processing_method'].astype(str)

    # Dropping rows with any column with a character that is not from the English alphabet, numbers, spaces, or punctuation
    df = df[df['country_of_origin'].map(lambda x: x.isascii())]
    df = df[df['company'].map(lambda x: x.isascii())]
    df = df[df['region'].map(lambda x: x.isascii())]
    df = df[df['variety'].map(lambda x: x.isascii())]
    df = df[df['processing_method'].map(lambda x: x.isascii())]

    # Replacing all United States (Extra info) with United States
    us_id = df[df['country_of_origin'].str.contains('United States')].index
    df.loc[us_id, 'country_of_origin'] = 'United States'

    # Stripping pounds and kg from bag_weight, and converting to kgs
    pound_id = df[df['bag_weight'].str.contains('lb')].index
    df.loc[pound_id, 'bag_weight'] = df.loc[pound_id, 'bag_weight'].str.replace('lbs', '')
    df['bag_weight'] = df['bag_weight'].str.replace(' kg', '')
    df.loc[pound_id, 'bag_weight'] = df.loc[pound_id, 'bag_weight'].astype(float) * 0.453592
    df['bag_weight'] = df['bag_weight'].astype(float)

    # Replacing Nans with 0s or "Unknown" for redundancy
    df[['altitude_low_meters','altitude_high_meters', 'altitude_mean_meters','number_of_bags']] =\
        df[['altitude_low_meters','altitude_high_meters', 'altitude_mean_meters','number_of_bags']].fillna(0)
    df[['company', 'region', 'variety', 'processing_method','color']] =\
        df[['company', 'region', 'variety', 'processing_method','color']].fillna('Unknown')

    # Changing data types
    df = df.astype({'altitude_low_meters': 'int'})
    df = df.astype({'altitude_mean_meters': 'int'})
    df = df.astype({'altitude_high_meters': 'int'})
    df = df.astype({'number_of_bags': 'int'})

    # Reordering columns
    output_cols = ['country_of_origin', 'region', 'altitude_low_meters', 'altitude_high_meters','altitude_mean_meters',
                   'harvest_year','owner', 'species', 'variety', 'processing_method', 'number_of_bags', 'bag_weight','aroma',
       'flavor', 'aftertaste', 'acidity', 'body', 'balance', 'uniformity',
       'sweetness', 'moisture','total_cup_points', 'color']
    df = df[output_cols]

    # Exporting to csv
    df.to_csv(f"coffee-corgis.csv", header=False, index=False)


if __name__ == '__main__':
    main()
