# -*- coding: utf-8 -*-
"""
Created on Thu Jun 27 13:12:03 2019

@author: kafura
"""

import csv

# get keys to extract from the data file

key_data_file_name = './raw/cancer-keys.csv'
key_data_file = open(key_data_file_name, 'r', newline = '\n')
key_reader = csv.reader(key_data_file)

keys = []
for key in key_reader:
    if key[0]:
        keys.append(key[0].strip())
        
key_data_file.close()

cancer_data_file_name = "./raw/cancer-data.csv"
cancer_data_file = open(cancer_data_file_name, 'r', newline='\n')
cancer_reader = csv.reader(cancer_data_file)

corgis_data_file_name = "cancer-corgis.csv"
corgis_data_file = open(corgis_data_file_name, 'w', newline='\n')
corgis_writer= csv.writer(corgis_data_file)

# skip label row
next(cancer_reader)

# get all key names
key_names = next(cancer_reader)

for row in cancer_reader:
    outrow = []
    for key_name, item in zip(key_names, row):
        if key_name in keys:
            outrow.append(item if item else 0)
    if outrow[0] != "Puerto Rico":
        corgis_writer.writerow(outrow)
    
cancer_data_file.close()
corgis_data_file.close()