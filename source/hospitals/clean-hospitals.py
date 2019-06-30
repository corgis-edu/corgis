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
    
def cap_names(name):
    names = name.split(' ')
    if len(names) == 1:
        return name.capitalize()
    else:
        for i in range(len(names)):
            names[i] = names[i].capitalize()
        return " ".join(names)  
    
def hospital_type(kind):
    if "Government" in kind:
        return "Government"
    elif "Private" in kind:
        return "Private"
    elif "Proprietary" in kind:
        return "Proprietary"
    elif "Church" in kind:
            return "Church"
    else: 
        return "Unknown"
    
def rating(phrase):
    if "Above" in phrase:
        return "Above"
    elif "Same" in phrase:
        return "Same"
    elif "Below" in phrase:
        return "Below"
    else:
        return("None")
        
def in_dollars(cost):
    if "Not" in cost:
        return 0
    else:
        return int(cost.replace("$","").replace(",",""))
    
def indicators(row):
    cost = in_dollars(row[12])
    description = row[18].split(" ")
    if "Not" in description[0]:
        quality = "Unknown"
        value   = "Unknown"
    else: 
        quality = str(description[0].capitalize())
        value   = str(description[3].capitalize())
    return cost, quality, value    

geninfo_file    = open("Hospital General Information.csv", "r", newline='\n')
payment_file    = open("Payment and Value of Care - Hospital.csv", "r", newline='\n')
corgis_file     = open("hospital-corgis.csv", "w", newline='\n')

geninfo_reader = csv.reader(geninfo_file)
payment_reader = csv.reader(payment_file)
writer         = csv.writer(corgis_file)

geninfo_header = next(geninfo_reader)  # Ignore
payment_header = next(payment_reader)  # Ignore

# columns to extract from the input file
#                          inrow       outrow
geninfo_id                 =  0   
geninfo_name               =  1    # 0
geninfo_city               =  3    # 1
geninfo_state              =  4    # 2
geninfo_type               =  9    # 3
geninfo_rating             = 12    # 4
geninfo_mortality          = 14    # 5
geninfo_safety             = 16    # 6
geninfo_readmission        = 18    # 7
geninfo_experience         = 20    # 8
geninfo_effectiveness      = 22    # 9
geninfo_timeliness         = 24    # 10
geninfo_imaging            = 26    # 11

payinfo_id                 = 0
payinfo_cost               = 12    #12
payinfo_value              = 18

outrow = [None] * 24
rows = 0


for inrow in geninfo_reader:
    if len(inrow) != 0:            # check for non-empty input row
        try: 
            
            provider_id = int(inrow[geninfo_id])  # used to match against payment and value data
            
            # Hospital
            
            outrow[0] = str(cap_names(inrow[geninfo_name]))     if inrow[geninfo_name] else None
            outrow[1] = str(cap_names(inrow[geninfo_city]))     if inrow[geninfo_city] else None 
            outrow[2] = str(inrow[geninfo_state])               if inrow[geninfo_state] else None 
            outrow[3] = str(hospital_type(inrow[geninfo_type])) if inrow[geninfo_type] else None
                  
            # Rating Overeall
            
            outrow[4] = int(inrow[geninfo_rating])             if not ("Not" in inrow[geninfo_rating]) else -1
                             
           # Comparison to National Averages
           
            outrow[5] = str(rating(inrow[geninfo_mortality]))     if inrow[geninfo_mortality] else None
            outrow[6] = str(rating(inrow[geninfo_safety]))        if inrow[geninfo_safety] else None
            outrow[7] = str(rating(inrow[geninfo_readmission]))   if inrow[geninfo_readmission] else None
            outrow[8] = str(rating(inrow[geninfo_experience]))    if inrow[geninfo_experience] else None
            outrow[9] = str(rating(inrow[geninfo_effectiveness])) if inrow[geninfo_effectiveness] else None
            outrow[10] = str(rating(inrow[geninfo_timeliness]))   if inrow[geninfo_timeliness] else None
            outrow[11] = str(rating(inrow[geninfo_imaging]))      if inrow[geninfo_imaging] else None
    
    
           # Procedures - Cost and Value of Four Standard Care Situations
           
           #Heart Attack
            pvrow = next(payment_reader)       
            if provider_id == int(pvrow[payinfo_id]):   # check that records are for same hospital
               outrow[12], outrow[13], outrow[14] = indicators(pvrow) 
            else:
               pass
           
            # Heart Failure
            pvrow = next(payment_reader)       
            if provider_id == int(pvrow[payinfo_id]):   
                outrow[15], outrow[16], outrow[17] = indicators(pvrow) 
            else:
               pass
           
            #Pneumonia
            pvrow = next(payment_reader)       
            if provider_id == int(pvrow[payinfo_id]):
                outrow[18], outrow[19], outrow[20] = indicators(pvrow) 
            else:
               pass
           
            # Hip-Knee 
            pvrow = next(payment_reader)       
            if provider_id == int(pvrow[payinfo_id]):   
                outrow[21], outrow[22], outrow[23] = indicators(pvrow) 
            else:
               pass
            
            if has_all_data(outrow):
                writer.writerow(outrow)
                rows = rows + 1
            
        except:
            pass
       
geninfo_file.close()
payment_file.close()
corgis_file.close()

print(rows)
   
