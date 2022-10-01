import pandas as pd


def main():
    # Importing dataset
    dataset_name = 'monkeypox-data'
    df = pd.read_csv(f"{dataset_name}.csv")

    # Initial columns of interest
    target_cols = ["iso_code", "location", "date", "new_cases", "total_cases", "new_cases_per_million",
                   "total_cases_per_million",
                   "new_deaths", "total_deaths", "new_deaths_per_million", "total_deaths_per_million"]

    # No thresholding required, only simply replacement of nan values
    df = df[target_cols].fillna(0)

    # Split date into month, day, year columns
    df[['year', 'month', 'day']] = df['date'].str.split('-', expand=True)

    # Converting types
    df = df.astype({'month': 'int',
                    'day': 'int',
                    'year': 'int',
                    'new_cases': 'int',
                    'total_cases': 'int',
                    'total_deaths': 'int',
                    'new_deaths': 'int'})

    # Reordering columns
    output_cols = ["iso_code", "location", "date", 'year', 'month', 'day',
                   "new_cases", "total_cases", "new_cases_per_million", "total_cases_per_million",
                   "new_deaths", "total_deaths", "new_deaths_per_million", "total_deaths_per_million"]
    df = df[output_cols]

    # Exporting to csv
    df.to_csv("monkeypox-corgis.csv", header=False, index=False)


if __name__ == '__main__':
    main()
