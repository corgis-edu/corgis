# -*- coding: utf-8 -*-
"""
Created on Thu Jun 27 13:12:03 2019

@author: kafura
"""

import csv

year_range = 2019 - 1999 + 1
column_start = 2

# initialize opiod data with the year field

opioid_data = []
for year in range(1999, 2020):
    opioid_data.append([year])
    
# rows to extract for the number of deaths measure

number_rows_used = [8, 11, 14, 23, 26, 35]

opioid_number_data_file_name = "./raw/Number_OD_Deaths.csv"
opioid_number_data_file = open(opioid_number_data_file_name, 'r', newline='\n', encoding = "ISO-8859-1")
opioid_number_reader = csv.reader(opioid_number_data_file)

row_number = 1
for row in opioid_number_reader:
    if row_number in number_rows_used:
        for year in range(year_range):
            opioid_data[year].append(row[column_start + year].replace(',',''))
    row_number = row_number + 1

# add rate and demographic (gender, race, and area) data
   
opioid_demographic_data_file_name = "./raw/Rate_OD_by_Demographics.csv"
opioid_demographic_data_file = open(opioid_demographic_data_file_name, 'r', newline='\n', encoding = "ISO-8859-1")
opioid_demographic_reader = csv.reader(opioid_demographic_data_file)

# need rows fro the demographic data are: 8-67 except 15-16,18-19 and 21,22

deleted_row_list = [12, 13, 15, 16, 18, 19, 21, 22, 24, 25, 39, 47, 49, 55, 57, 63]

row_number = 1
for row in opioid_demographic_reader:
    if row_number in range(8,66) and not(row_number in deleted_row_list): #15,16,18,19, 21,22
        for year in range(year_range):
            opioid_data[year].append(row[column_start + year])
    row_number = row_number + 1
    
# write corgis data file
    
corgis_data_file_name = "opioids-corgis.csv"
corgis_data_file = open(corgis_data_file_name, 'w', newline='\n')
corgis_writer= csv.writer(corgis_data_file)

for year in range(year_range):
    corgis_writer.writerow(opioid_data[year])   
    
# opiod_data_file.close()
corgis_data_file.close()