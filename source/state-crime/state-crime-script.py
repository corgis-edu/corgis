import os
import urllib
import shutil
import requests
import zipfile
from urllib import request
import pandas as pd

dir_path = os.path.dirname(os.path.realpath(__file__))

# The old data file is the only file we need to produce a new data file 
old_data = pd.read_csv(os.path.join(dir_path + "/raw/", 'state_crime.csv'))
raw_data_path = os.path.join(dir_path, 'raw data/')
zip_files_path = os.path.join(dir_path, 'zip files/')
files_to_use_path = os.path.join(raw_data_path, 'cius-data-tables-to-use')



# Create new folders if not existed in current directory
if not os.path.exists(raw_data_path):
    os.mkdir(raw_data_path)
if not os.path.exists(zip_files_path):
    os.mkdir(zip_files_path)
if not os.path.exists(files_to_use_path):
    os.mkdir(files_to_use_path)
    
columns = list(old_data.columns)
state_list = sorted(list(set(old_data.State)))
state_list.remove('United States')



# Retrieve the data from year 2013 to 2019 with https://ucr.fbi.gov/crime-in-the-u.s/ and obtain the data file we need
years = ['2013','2014','2015','2016','2017','2018','2019']

def download_url(url, save_path):
    user_agent = 'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.9.0.7) Gecko/2009021910 Firefox/3.0.7'
    # user_agent = 'Mozilla/5.0 (X11; U; Windows NT 5.1; en-US; rv:1.9.0.7) Gecko/2009021910 Firefox/3.0.7'
    headers={'User-Agent':user_agent,} 
    my_request = request.Request(url,None,headers)
    with request.urlopen(my_request) as rf:
        with open(save_path, 'wb') as wf:
            wf.write(rf.read())

# Check the following post if having ssl.SSLCertVerificationError with a mac
# Update Shell Profile and Install Certificates in your python
# https://stackoverflow.com/questions/50236117/scraping-ssl-certificate-verify-failed-error-for-http-en-wikipedia-org

pre_url = 'https://ucr.fbi.gov/crime-in-the-u.s/'
available_urls = {}

for year in years:
    save_path = os.path.join(zip_files_path, f'cius-{year}-data-tables.zip')
    url1 = f'{year}/crime-in-the-u.s.-{year}/downloads/cius-{year}-data-tables.zip'
    url2 = f'{year}/crime-in-the-u.s.-{year}/downloads/cius{year}datatables.zip'
    url3 = f'{year}/crime-in-the-u.s.-{year}/downloads/cius{year}datatables-1.zip' 
    url4 = f'{year}/crime-in-the-u.s.-{year}/resource-pages/downloads/cius{year}downloadablefiles.zip'
    url5 = f'{year}/crime-in-the-u.s.-{year}/resource-pages/downloads/cius{year}datatables.zip'
    attempts = 0
    downloaded = False
    urls = [url1, url2, url3, url4, url5]

    while attempts < 5 and not downloaded:
        try:
            download_url(pre_url + urls[attempts], save_path)
            downloaded = True
            available_urls[year] = pre_url + urls[attempts]
            print(f'cius-{year}-data-tables.zip downloaded')
        except urllib.error.HTTPError:
            attempts += 1
            pass
        
    if not downloaded:
        print(f'{year} not found')
        continue

    with zipfile.ZipFile(save_path, 'r') as zip_ref:
        zip_ref.extractall(os.path.join(raw_data_path, f'cius-{year}-data-tables/'))
        print(f'cius-{year}-data-tables unzipped')

for year in years[:3]:
    save_path = os.path.join(raw_data_path, f'cius-{year}-data-tables/CIUS{year}datatables.zip')
    with zipfile.ZipFile(save_path, 'r') as zip_ref:
        zip_ref.extractall(os.path.join(raw_data_path, f'cius-{year}-data-tables/CIUS{year}datatables/'))
        print(f'CIUS{year}datatables unzipped')


df_list = []
file_list = []
# 2013 ~ 2015
for year in years[:3]:
    file_dir = os.path.join(raw_data_path, f'cius-{year}-data-tables/CIUS{year}datatables/Table_5_Crime_in_the_United_States_by_State_{year}.xls')
    df = pd.read_excel(file_dir)
    file_list.append(file_dir) 
    df_list.append(df)



# Collecting all the data files to use and restore them in one folder

# 2016
file_dir = os.path.join(raw_data_path, f'cius-2016-data-tables/Table_3_Crime_in_the_United_States_by_State_2016.xls')
df = pd.read_excel(file_dir)
file_list.append(file_dir)
df_list.append(df)


# 2017 ~ 2018
for year in years[4:-1]:
    file_dir = os.path.join(raw_data_path, f'cius-{year}-data-tables/Table_5_Crime_in_the_United_States_by_State_{year}.xls')
    df = pd.read_excel(file_dir)
    file_list.append(file_dir)
    df_list.append(df)

# 2019
file_dir = os.path.join(raw_data_path, f'cius-2019-data-tables/Data Tables/Table_5_Crime_in_the_United_States_by_State_2019.xls')
df = pd.read_excel(file_dir)
file_list.append(file_dir)
df_list.append(df)

# copy the files
for file_dir in file_list:
    filename = file_dir.split('/')[-1]
    shutil.copy(file_dir, os.path.join(files_to_use_path, f'{filename}'))



## Processing the data

df_list2 = [table.reset_index(drop=True) for table in df_list]
processed_df = []
n = len(state_list)

for i in range(len(years)):
    data = df_list2[i]
    year = years[i]
    
    if year == '2016':
        k = 1
    else:
        k = 0
        
    df_p = pd.DataFrame(columns=columns)
    df_p['Year'] = [year] * n
    df_p['State'] = state_list
    idx = 0
    to_skip = False
    
    united_states_population=0 
    united_states_totals_property_all=0
    united_states_totals_property_burglary=0
    united_states_totals_property_larceny=0
    united_states_totals_property_motor=0
    
    united_states_totals_violent_all=0
    united_states_totals_violent_assault=0
    united_states_totals_violent_murder=0
    united_states_totals_violent_rape=0
    united_states_totals_violent_robbery=0
    
    for j in range(data.shape[0]):
        if data.iloc[j,1] == 'Total':
            if to_skip:
                continue # Skipping Puerto Rico
            to_skip = True 
            
        if data.iloc[j,1] == 'State Total' or data.iloc[j,1] == 'Total':
            data_population = data.iloc[j,3]
            data_totals_property_all = data.iloc[j,9+k]
            data_totals_property_burglary =  data.iloc[j,10+k]
            data_totals_property_larceny =  data.iloc[j,11+k]
            data_totals_property_motor =  data.iloc[j,12+k]
            
            data_totals_violent_all = data.iloc[j,4]
            data_totals_violent_assault = data.iloc[j,8+k]
            data_totals_violent_murder = data.iloc[j,5]
            data_totals_violent_rape = data.iloc[j,6]
            data_totals_violent_robbery = data.iloc[j,7+k]
            
            
            united_states_population += data_population
            
            united_states_totals_property_all += data_totals_property_all
            united_states_totals_property_burglary += data_totals_property_burglary
            united_states_totals_property_larceny += data_totals_property_larceny
            united_states_totals_property_motor += data_totals_property_motor

            united_states_totals_violent_all += data_totals_violent_all
            united_states_totals_violent_assault += data_totals_violent_assault
            united_states_totals_violent_murder += data_totals_violent_murder
            united_states_totals_violent_rape += data_totals_violent_rape
            united_states_totals_violent_robbery += data_totals_violent_robbery
            
            
            df_p.loc[idx, 'Data.Population'] = data_population
            
            df_p.loc[idx, 'Data.Totals.Property.All'] = data_totals_property_all
            df_p.loc[idx, 'Data.Totals.Property.Burglary'] = data_totals_property_burglary
            df_p.loc[idx, 'Data.Totals.Property.Larceny'] = data_totals_property_larceny
            df_p.loc[idx, 'Data.Totals.Property.Motor'] = data_totals_property_motor

            df_p.loc[idx, 'Data.Totals.Violent.All'] = data_totals_violent_all
            df_p.loc[idx, 'Data.Totals.Violent.Assault'] = data_totals_violent_assault
            df_p.loc[idx, 'Data.Totals.Violent.Murder'] = data_totals_violent_murder
            df_p.loc[idx, 'Data.Totals.Violent.Rape'] = data_totals_violent_rape
            df_p.loc[idx, 'Data.Totals.Violent.Robbery'] = data_totals_violent_robbery

            
            df_p.loc[idx, 'Data.Rates.Property.All'] = data.iloc[j+1,9+k]
            df_p.loc[idx, 'Data.Rates.Property.Burglary'] = data.iloc[j+1,10+k]
            df_p.loc[idx, 'Data.Rates.Property.Larceny'] = data.iloc[j+1,11+k]
            df_p.loc[idx, 'Data.Rates.Property.Motor'] = data.iloc[j+1,12+k]

            df_p.loc[idx, 'Data.Rates.Violent.All'] = data.iloc[j+1,4]
            df_p.loc[idx, 'Data.Rates.Violent.Assault'] = data.iloc[j+1,8+k]
            df_p.loc[idx, 'Data.Rates.Violent.Murder'] = data.iloc[j+1,5]
            df_p.loc[idx, 'Data.Rates.Violent.Rape'] = data.iloc[j+1,6]
            df_p.loc[idx, 'Data.Rates.Violent.Robbery'] = data.iloc[j+1,7+k]

            idx+=1
            
    df_p.loc[idx, 'Year'] = year
    df_p.loc[idx, 'State'] = 'United States'
    
    df_p.loc[idx, 'Data.Population'] = united_states_population
    df_p.loc[idx, 'Data.Totals.Property.All'] = united_states_totals_property_all
    df_p.loc[idx, 'Data.Totals.Property.Burglary'] = united_states_totals_property_burglary
    df_p.loc[idx, 'Data.Totals.Property.Larceny'] = united_states_totals_property_larceny
    df_p.loc[idx, 'Data.Totals.Property.Motor'] = united_states_totals_property_motor

    df_p.loc[idx, 'Data.Totals.Violent.All'] = united_states_totals_violent_all
    df_p.loc[idx, 'Data.Totals.Violent.Assault'] = united_states_totals_violent_assault
    df_p.loc[idx, 'Data.Totals.Violent.Murder'] = united_states_totals_violent_murder
    df_p.loc[idx, 'Data.Totals.Violent.Rape'] = united_states_totals_violent_rape
    df_p.loc[idx, 'Data.Totals.Violent.Robbery'] = united_states_totals_violent_robbery
    
    df_p.loc[idx, 'Data.Rates.Property.All'] = round(united_states_totals_property_all / united_states_population * 10**5, 1)
    df_p.loc[idx, 'Data.Rates.Property.Burglary'] = round(united_states_totals_property_burglary / united_states_population * 10**5, 1)
    df_p.loc[idx, 'Data.Rates.Property.Larceny'] = round(united_states_totals_property_larceny / united_states_population * 10**5, 1)
    df_p.loc[idx, 'Data.Rates.Property.Motor'] = round(united_states_totals_property_motor / united_states_population * 10**5, 1)

    df_p.loc[idx, 'Data.Rates.Violent.All'] = round(united_states_totals_violent_all / united_states_population * 10**5, 1)
    df_p.loc[idx, 'Data.Rates.Violent.Assault'] = round(united_states_totals_violent_assault / united_states_population * 10**5, 1)
    df_p.loc[idx, 'Data.Rates.Violent.Murder'] = round(united_states_totals_violent_murder / united_states_population * 10**5, 1)
    df_p.loc[idx, 'Data.Rates.Violent.Rape'] = round(united_states_totals_violent_rape / united_states_population * 10**5, 1)
    df_p.loc[idx, 'Data.Rates.Violent.Robbery'] = round(united_states_totals_violent_robbery / united_states_population * 10**5, 1)

    processed_df.append(df_p)


## Combining and print out the data
updated_df = [old_data] + processed_df
new_data = pd.concat(updated_df).reset_index(drop=True)
new_data = new_data.sort_values(by=['State','Year']).reset_index(drop=True)
new_data.to_csv(os.path.join(dir_path, 'state-crime-corgis.csv'), index=False, header = None)
