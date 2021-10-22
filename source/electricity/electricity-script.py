# -*- coding: utf-8 -*-
"""
Created on Thu Jun 27 13:12:03 2019
Edited on Tue Sep 07 15:15 2021 by Joung Min Choi

@author: kafura
"""

import csv

def type_gen_data(data):
    data[1] = int(data[1])  # utility number
    for item in range(6,len(data)-1):
        if data[item] == '.':
            data[item] = '0'
        data[item] = float(data[item].replace(',', ''))
    return(data)    
    
def type_dis_data(data):
    for item in range(len(data)):
        if data[item] == '.':
            data[item] = '0'
        data[item] = float(data[item].replace(',', ''))  
    return(data)    

generation_data_file_name = "./raw/Operational_Data_2019.csv" #Electricity-Generation.csv
generation_data_file = open(generation_data_file_name, 'r', newline='\n')
generation_reader = csv.reader(generation_data_file)

distribution_data_file_name = "./raw/Sales_Ult_Cust_2019.csv" #Electricity-Distribution.csv
distribution_data_file = open(distribution_data_file_name, 'r', newline='\n')
distribution_reader= csv.reader(distribution_data_file)

# skip label rows in both files
for skip in range(0,3):
    next(generation_reader)
    next(distribution_reader)

withheld   = '88888'
adjustment = '99999'

generation_utility_numbers = set()
for grow in generation_reader:
    if grow[1] != withheld:
        generation_utility_numbers.add(int(grow[1]))
      


distribution_utility_numbers = set()
for drow in distribution_reader:
    if not drow[1] in [withheld, adjustment, '', ' ',None]:
        distribution_utility_numbers.add(int(drow[1]))
      
        
utility_numbers = generation_utility_numbers & distribution_utility_numbers

# reset readers
generation_data_file.seek(0)
distribution_data_file.seek(0)
# skip label rows in both files
for skip in range(0,3):
    next(generation_reader)
    next(distribution_reader)


generation_data = {}
for row in generation_reader:
    util_number = int(row[1])
    if util_number in utility_numbers:
        row_data = type_gen_data(row)
        used_data = row_data[1:5] + row_data[6:10] + [row_data[12]+row_data[15]+row_data[16]] +row_data[17:-1]
        generation_data[util_number] = used_data


distribution_data = {}
for row in distribution_reader:
    util_number = int(row[1]) if row[1] else 0
    if util_number in utility_numbers:
        if not util_number in distribution_data:
            distribution_data[util_number] = type_dis_data(row[9:])
        else:
            new_data = type_dis_data(row[9:])
            for item in range(len(new_data)):
                distribution_data[util_number][item] = distribution_data[util_number][item] \
                                                       + new_data[item]                                                     
                                                       
generation_data_file.close()
distribution_data_file.close()

# combine generation and distribution data

corgis_data_file_name = "electricity.csv"
corgis_data_file = open(corgis_data_file_name, 'w', newline='\n')
corgis_writer = csv.writer(corgis_data_file)

utilities = list(utility_numbers)
utilities.sort()

for util_id in utilities:
    outrow = generation_data[util_id] + distribution_data[util_id]
    corgis_writer.writerow(outrow)
    
corgis_data_file.close()    