import pandas as pd 
import datetime

data = pd.read_csv("./raw/data_gov_bldg_rexus.csv")
selected_column_list = ["Construction Date","Owned/Leased","Total Parking Spaces","Bldg Status","Property Type","Congressional District","Location Code","Region Code","ABA Accessibility Flag ","Bldg ANSI Usable","Bldg City","Bldg County","Bldg Address1","Bldg State","Bldg Zip"]

data = data[selected_column_list]
date_converted_list = []

for i in range(len(data)) :
	if data["Construction Date"][i] == 0 or data["Construction Date"][i] == '0' :
		date_converted_list.append(0)
	elif '-' in data["Construction Date"][i] :
		date_list = data["Construction Date"][i].split('-')
		datetime_obj = datetime.datetime.strptime(date_list[1], "%b")
		month = datetime_obj.month
		tmp_date = date_list[2] + "." + str(month) + "." + str(int(date_list[0]))
		date_converted_list.append(tmp_date)
	elif '.' in data["Construction Date"][i] :
		date_list = data["Construction Date"][i].split('.')
		if int(date_list[2]) <= 21 :
			year = str(int(date_list[2]) + 2000)
		else :
			year = str(int(date_list[2]) + 1900)
		datetime_obj = datetime.datetime.strptime(date_list[1], "%b")
		month = datetime_obj.month
		tmp_date = year + "." + str(month) + "." + str(int(date_list[0]))
		date_converted_list.append(tmp_date)

data["Construction Date"] = date_converted_list

data.to_csv("real-estate-corgis.csv", mode = "w", index = False, header = False)