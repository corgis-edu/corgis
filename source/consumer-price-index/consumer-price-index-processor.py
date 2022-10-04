import pandas as pd


def main():
    # Importing dataset
    dataset_name = 'consumer-price-index-data'
    df = pd.read_csv(f"{dataset_name}.csv")

    # Columns of interest
    target_cols = ['Year',
                   'Beef', 'Lamb', 'Pork',
                   'Coal', 'Natural gas', 'Petroleum',
                   'Corn', 'Rice', 'Rye', 'Wheat',
                   'Aluminum', 'Chromium', 'Copper', 'Lead', 'Manganese', 'Nickel',
                   'Steel', 'Tin', 'Zinc', 'Iron ore', 'Gold', 'Platinum', 'Silver',
                   'Cocoa', 'Coffee', 'Cotton', 'Cottonseed', 'Palm oil', 'Rubber', 'Sugar', 'Tea', 'Tobacco']

    # Threshold to year 1900 due to missing values
    df = df.loc[(df['Year'] >= 1900)]

    # Replacement of nan values
    df = df[target_cols].fillna(0)

    # Calculating averages based on categories
    df['Meat average'] = df[['Beef', 'Lamb', 'Pork']].mean(axis=1)
    df['Grain average'] = df[['Corn', 'Rice', 'Rye', 'Wheat']].mean(axis=1)
    df['Fuel average'] = df[['Coal', 'Natural gas', 'Petroleum']].mean(axis=1)
    df['Metal average'] = df[
        ['Aluminum', 'Chromium', 'Copper', 'Lead', 'Manganese', 'Nickel', 'Steel', 'Tin', 'Zinc', 'Iron ore', 'Gold',
         'Platinum', 'Silver']].mean(axis=1)
    df['Plant extract average'] = df[
        ['Cocoa', 'Coffee', 'Cotton', 'Cottonseed', 'Palm oil', 'Rubber', 'Sugar', 'Tea', 'Tobacco']].mean(axis=1)

    # Converting types
    df = df.astype({'Year': 'int'})

    # Reordering columns
    output_cols = ['Year',
                   'Beef', 'Lamb', 'Pork','Meat average',
                   'Coal', 'Natural gas', 'Petroleum', 'Fuel average',
                   'Corn', 'Rice', 'Rye', 'Wheat', 'Grain average',
                   'Aluminum', 'Chromium', 'Copper', 'Lead', 'Manganese', 'Nickel',
                   'Steel', 'Tin', 'Zinc', 'Iron ore', 'Gold', 'Platinum', 'Silver', 'Metal average',
                   'Cocoa', 'Coffee', 'Cotton', 'Cottonseed', 'Palm oil', 'Rubber', 'Sugar', 'Tea', 'Tobacco',
                   'Plant extract average']

    df = df[output_cols]

    # Exporting to csv
    df.to_csv("consumer-price-corgis.csv", header=False, index=False)


if __name__ == '__main__':
    main()
