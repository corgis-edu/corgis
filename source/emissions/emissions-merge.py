# -*- coding: utf-8 -*-
"""
Created on Fri Jun 21 12:54:22 2019

@author: kafura
"""
import csv

# MAKE SURE THAT THE COUNTRY NAMES ARE AS GIVEN IN THE FOLLOWING LIST

countries = [
       'Afghanistan', 'Albania', 'Algeria', 'Angola', 'Anguilla', 'Antigua and Barbuda',
       'Argentina', 'Armenia', 'Australia', 'Austria', 'Azerbaijan',
       'Bahamas','Bahrain','Bangladesh', 'Barbados', 'Belarus', 'Belgium',
       'Belize', 'Benin', 'Bermuda', 'Bhutan', 'Bolivia',
       'Bosnia and Herzegovina', 'Botswana', 'Brazil', 'Brunei',
       'Bulgaria', 'Burkina Faso', 'Burundi', 'Cambodia',
       'Cameroon', 'Canada', 'Cape Verde', 'Cayman Islands', 'Central African Republic', 
       'Chad', 'Chile', 'China', 'Colombia', 'Comoros', 
       'Democratic Republic of the Congo', 'Congo', 'Costa Rica', 
       'Cote d\'Ivoire', 'Croatia', 'Cuba', 'Cyprus', 'Czechia', 
       'Denmark',  'Djibouti', 'Dominica', 'Dominican Republic', 
       'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 
       'Estonia', 'Ethiopia',
       'Fiji', 'Finland', 'France and Monaco', 'French Polynesia', 
       'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana',
       'Greece', 'Greenland', 'Grenada', 'Guatemala', 'Guinea', 'Guinea-Bissau','Guyana',
       'Haiti', 'Honduras', 'Hong Kong', 'Hungary', 
       'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 
       'Israel and Palestine, State of', 'Italy', 
       'Jamaica', 'Japan', 'Jordan', 
       'Kazakhstan', 'Kenya', 'Kiribati', 'North Korea',
       'South Korea', 'Kuwait', 'Kyrgyzstan', 
       'Laos', 'Latvia', 'Lebanon', 'Lesotho', 
       'Liberia', 'Libya', 'Lithuania', 'Luxembourg', 
       'Macao', 'Macedonia', 'Madagascar', 'Malawi', 
       'Malaysia', 'Maldives', 'Mali', 'Malta', 'Mauritania', 'Mauritius', 'Mexico', 
       'Moldova', 'Mongolia', 'Morocco', 'Mozambique', 'Myanmar', 
       'Namibia', 'Nepal', 'Netherlands', 'New Caledonia', 'New Zealand', 
       'Nicaragua', 'Niger', 'Nigeria', 'Norway', 
       'Oman',
       'Pakistan', 'Palau', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru',
       'Philippines', 'Poland', 'Portugal', 'Puerto Rico', 
       'Qatar', 
       'Romania', 'Russia', 'Rwanda',
       'Saint Kitts and Nevis', 'Saint Lucia', 
       'Saint Vincent and the Grenadines',
       'Samoa', 'Sao Tome and Principe', 'Saudi Arabia', 'Senegal', 
       'Serbia and Montenegro', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 
       'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa', 'Spain and Andorra', 
       'Sri Lanka', 'Sudan and South Sudan', 'Suriname', 'Swaziland', 'Sweden',
       'Switzerland and Liechtenstein', 'Syria', 
       'Taiwan', 'Tajikistan', 'Tanzania',
       'Thailand', 'Timor-Leste', 'Togo', 'Tonga', 'Trinidad and Tobago', 
       'Tunisia', 'Turkey', 'Turkmenistan', 'Turks and Caicos Islands',
       'Uganda', 'Ukraine', 'United Arab Emirates', 
       'United Kingdom',
       'United States', 'Uruguay', 'Uzbekistan', 
       'Vanuatu', 'Venezuela', 'Viet Nam', 'Virgin Islands',
       'Yemen', 
       'Zambia', 'Zimbabwe'
     ]

     
number_of_countries = len(countries)
number_of_years = 2012 - 1970 + 1
     
GHG_table =  [ []* 12 for i in range(number_of_countries * number_of_years)]




# add country and year information in columns 0, 1

for country in countries:
    for year in range(number_of_years):
        try: 
            GHG_table[countries.index(country)*number_of_years + year].append(country)
            GHG_table[countries.index(country)*number_of_years + year].append(1970+year)
        except:
            ValueError: print('data for ' + country + ' not added.')

# create reader for emissions data
        
emissions_data_file_name = "./raw/EDGARv432_GHG_total_emissions_1970-2012.csv"
emissions_data_file = open(emissions_data_file_name, 'r', newline='\n')
emissions_reader = csv.reader(emissions_data_file)


# skip header information
for header_row in range(6):
    next(emissions_reader)
        
# add emissions data in columns 2,3,4    
for data in emissions_reader:
    country   = data[1]
    substance = data[2]
    
    for year in range(number_of_years):
        try:
            row = (countries.index(country) * number_of_years) + year
            GHG_table[row].append(data[3 + year])
        except ValueError: 
            pass

emissions_data_file.close()

# add sector data in columns 5,6,7,8, and 9
        
sector_data_file_name = "./raw/EDGARv5.0_FT2017_fossil_CO2_booklet2018.csv"
sector_data_file = open(sector_data_file_name, 'r', newline='\n')
sector_reader = csv.reader(sector_data_file)

# skip header information
next(sector_reader)

for data in sector_reader:
    country   = data[1]
    sector = data[0]
    
    for year in range(number_of_years):
        try:
            row = (countries.index(country) * number_of_years) + year
            GHG_table[row].append(data[2 + year])
        except ValueError: 
            pass
   
sector_data_file.close()

# add per capita emission data in column 10

percapita_data_file_name = "./raw/EDGARv432_GHG_per_capita_emissions_1970-2012.csv"
percapita_data_file = open(percapita_data_file_name, 'r', newline='\n')
percapita_reader = csv.reader(percapita_data_file)

# skip header information

for header_row in range(6):
    next(percapita_reader)

for data in percapita_reader:
    country   = data[1]
    
    for year in range(number_of_years):
        try:
            row = (countries.index(country) * number_of_years) + year
            GHG_table[row].append(data[3 + year])
        except ValueError: 
            pass
            
percapita_data_file.close()

# add per GDP emission data in column 11

pergdp_data_file_name = "./raw/EDGARv432_GHG_per_GDP_emissions_1970-2012.csv"
pergdp_data_file = open(pergdp_data_file_name, 'r', newline='\n')
pergdp_reader = csv.reader(pergdp_data_file)

# skip header information

for header_row in range(6):
    next(pergdp_reader)

for data in pergdp_reader:
    country   = data[1]
    
    for year in range(number_of_years):
        try:
            row = (countries.index(country) * number_of_years) + year
            GHG_table[row].append(data[3 + year])
        except ValueError: 
            pass
            
pergdp_data_file.close()

# replace all NULL by 0
for row in range(number_of_countries * number_of_years):
    data_row = GHG_table[row]
    for i in range(12):
        if data_row[i] == 'NULL':
            data_row[i] = 0
            
# write complete GHG table   
            
emissions_file_name = "emissions-corgis.csv"
emissions_file = open(emissions_file_name, 'w', newline='\n')
data_writer = csv.writer(emissions_file)      
      
for row in range(number_of_countries * number_of_years):
    data_writer.writerow(GHG_table[row])
            

emissions_file.close()       