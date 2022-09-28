import pandas as pd


def main():

    # Importing dataset
    dataset_name = 'emissions-data'
    df = pd.read_csv(f"{dataset_name}.csv")

    # Initial columns of interest
    target_cols = ["country", "year", "iso_code", "population", "gdp", "co2", "cement_co2", "coal_co2", "flaring_co2",
                   "gas_co2", "methane", "nitrous_oxide", "oil_co2", "share_global_cement_co2",
                   "share_global_co2", "share_global_coal_co2", "share_global_flaring_co2", "share_global_gas_co2",
                   "share_global_oil_co2"]

    # Removing years without n2o or methane data (after manual id)
    df = df[target_cols]
    df = df.loc[(df['year'] > 1991) & (df['year'] < 2019)]  # TODO - add GPD data from external dataset for 2019-2020

    # Normalizing based on number of nan entries
    df_ = df.notnull().astype('int')
    df_['country'] = df['country']
    df_ = df_.groupby(['country'], as_index=False).mean()

    # Thresholding based on GPD and various C02 metrics
    df_ = df_.loc[df_['gdp'] > 0.9]
    df_ = df_.loc[((df_['cement_co2'] > 0.75) |
                   (df_['coal_co2'] > 0.75) |
                   (df_['gas_co2'] > 0.75))]

    # Generic density check across remaining metrics
    df_ = df_[df_.iloc[:, 1:].mean(axis=1) > 0.85]

    # Un-squeezing country and replacing nans with 0
    df_final = df.loc[df["country"].isin(df_['country'])].fillna(0)

    # Calculating remaining co2 amount and replacing negative value with 0 # TODO - confirm if this is ok
    df_final['other_co2'] = df_final['co2'] - (df_final['oil_co2'] +
                                               df_final['gas_co2'] +
                                               df_final['coal_co2'] +
                                               df_final['cement_co2'] +
                                               df_final['flaring_co2'])
    df_final.loc[df_final['other_co2'] < 0, 'other_co2'] = 0

    # Reordering output columns
    output_col_ordered = ['year', 'country', 'iso_code', 'gdp', 'population', 'methane', 'nitrous_oxide', 'cement_co2',
                          'coal_co2', 'gas_co2', 'oil_co2', 'flaring_co2', 'other_co2', 'co2',
                          'share_global_cement_co2', 'share_global_coal_co2', 'share_global_gas_co2',
                          'share_global_oil_co2',
                          'share_global_flaring_co2', 'share_global_co2']
    df_final = df_final[output_col_ordered]

    # Exporting to csv
    df_final.to_csv("global-emissions-corgis.csv", header=False, index=False)


if __name__ == '__main__':
    main()
