# -*- coding: utf-8 -*-
"""
Created on Sat Jun  1 09:04:25 2019

@author: kafura
"""

import csv

def has_all_data(row):
    for item in row:
        if item == None:
            return(False)
    return(True)
    
def cap_each(name):
    names = name.split(' ')
    if len(names) == 1:
        return name.capitalize()
    else:
        for i in range(len(names)):
            names[i] = names[i].capitalize()
        return " ".join(names)  
    
original = open("raw/Wind-Turbine-Original.csv", "r", newline='')
processed = open("wind-turbines-corgis.csv", "w", newline='\n')

reader = csv.reader(original)
writer = csv.writer(processed)

header = next(reader)

# columns to extract from the input file
state = 4
county = 5
year = 8
num_turbines = 9
proj_capacity = 10     # in MW
turbine_cap = 13       # in KW
hub_height = 14        # in meters
rotor_diam = 15
swept_area = 16
total_height = 17
longitude = 22
latitude = 23

outrow = [None] * 12

for inrow in reader:
        
    outrow[0] = str(inrow[state])            if inrow[state]         else None
    outrow[1] = str(cap_each(inrow[county])) if inrow[county]        else None
    outrow[2] = int(inrow[year])             if inrow[year]          else None
    outrow[3] = int(inrow[turbine_cap])      if inrow[turbine_cap]   else None
    outrow[4] = float(inrow[hub_height])     if inrow[hub_height]    else None
    outrow[5] = float(inrow[rotor_diam])     if inrow[rotor_diam]    else None
    outrow[6] = float(inrow[swept_area])     if inrow[swept_area]    else None
    outrow[7] = float(inrow[total_height])   if inrow[total_height]  else None
    outrow[8] = float(inrow[proj_capacity])  if inrow[proj_capacity] else None
    outrow[9] = int(inrow[num_turbines])     if inrow[num_turbines]  else None
    outrow[10] = float(inrow[longitude])     if inrow[longitude]     else None
    outrow[11] = float(inrow[latitude])      if inrow[latitude]      else None

    if has_all_data(outrow):
        writer.writerow(outrow)

original.close()
processed.close()
   
