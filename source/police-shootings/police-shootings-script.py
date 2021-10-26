# -*- coding: utf-8 -*-
"""
Created on Thu Sep 20 11:28:53 2018

@author: kafura
"""

import csv 
    
with open('raw/fatal-police-shootings-data.csv', 'r') as ifile:
    with open('police-shootings-corgis.csv', 'w', encoding='utf-8',
              newline='') as ofile:
        reader = csv.reader(ifile)
        writer = csv.writer(ofile, quotechar = '"',
                            quoting=csv.QUOTE_NONNUMERIC,
                            lineterminator='\n')
        
        namerow = next(reader)
        outrow = [None] * 16
        
        for inrow in reader:
            # row[0] is an id field and ignored
                
            # Person properties
            outrow[0] = str(inrow[1]) if inrow[1] != "" else "Unknown"  # name
            outrow[1] = int(inrow[5]) if inrow[5] != '' else 0 # age
                
            gender = {"M" : "Male", "F":"Female"}
                
            outrow[2] = gender.get(inrow[6], "Unknown")
                
            race = {"A": "Asian", "B" : "African American",
                    "W" : "White", "H" : "Hispanic",
                    "N": "Native American", "O": "Other"}
                
            outrow[3] = race.get(inrow[7], "Unknown") # race
                
            # Incident properties
            year, month, day = inrow[2].split('.')
            outrow[4] = int(month)
            outrow[5] = int(day)
            outrow[6] = int(year)
            outrow[7] = "{}/{:0>2}/{:0>2}".format(year, month, day)
            outrow[8] = str(inrow[8])  # city
            outrow[9] = str(inrow[9])  # state
                
            # Factors properties
            outrow[10]  = str(inrow[4]) if inrow[4] != "" else "unknown" # armed
            outrow[11] = bool(inrow[10]) # sign of mental illness
            outrow[12] = str(inrow[11]) if inrow[11] != "" else "unknown"# threat level
            outrow[13] = str(inrow[12]) if inrow[12] != "" else "unknown"# flee
                
            # Shooting properties
            outrow[14] = str(inrow[3]) # manner of death
            outrow[15] = bool(inrow[13]) # body camera
            
            writer.writerow(outrow)
