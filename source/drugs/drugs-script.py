import pandas as pd
import os
os.chdir(os.path.dirname(os.path.abspath(__file__)))

data = pd.read_csv("./raw/drugs.csv")
is_state = data["state"] > 0
state_data = data[is_state]
is_agegrp = (state_data["agegrp"] > 0) & (state_data["agegrp"] < 4)
state_data = state_data[is_agegrp]
is_pyear = state_data["pyear"] > 2
state_data = state_data[is_pyear]
state_data = state_data[state_data["pyearnm"] != "2010-2011 (published)"]


state_data.reset_index(inplace = True, drop = True)
outname_list = state_data[state_data["pyear"] == 3]['outname'].unique().tolist() 
outname_list.remove("serious psychological distress in the past year, long form")
#outname_list.remove("underage alcohol use in the past month")
#outname_list.remove("underage binge alcohol use in the past month")

state = []
year = []
population = {}
population[1] = []
population[2] = []
population[3] = []

dict_list = {}
for outname in outname_list :
	dict_list[outname] = {}
	dict_list[outname]["total"] = {}
	dict_list[outname]["rate"] = {}
	dict_list[outname]["total"][1] = []
	dict_list[outname]["total"][2] = []
	dict_list[outname]["total"][3] = []
	dict_list[outname]["rate"][1] = []
	dict_list[outname]["rate"][2] = []
	dict_list[outname]["rate"][3] = []

count = 0
for i in range(len(state_data)) :
	tmp_outname = state_data["outname"][i]
	tmp_agegrp = int(state_data["agegrp"][i])
	tmp_total = state_data["est_total"][i]
	tmp_rate = state_data["BSAE"][i]
	tmp_population = state_data["pop"][i]
	#
	try : 
		dict_list[tmp_outname]["total"][tmp_agegrp].append(tmp_total)
	except :
		continue
	dict_list[tmp_outname]["rate"][tmp_agegrp].append(tmp_total)
	population[tmp_agegrp].append(tmp_population)
	if count == 0 : 
		year.append(1998 + state_data["pyear"][i])
		state.append(state_data["stname"][i])
	#
	count +=1
	if count == 3 :
		count = 0

final_outname_list = []
for i in outname_list :
	for j in range(1,4) :
		if len(dict_list[i]["total"][j]) == 867 : #918
			if i not in final_outname_list :
				final_outname_list.append(i)

##########################
outname_list = final_outname_list

state = []
year = []
population = {}
population[1] = []
population[2] = []
population[3] = []

dict_list = {}
for outname in outname_list :
	dict_list[outname] = {}
	dict_list[outname]["total"] = {}
	dict_list[outname]["rate"] = {}
	dict_list[outname]["total"][1] = []
	dict_list[outname]["total"][2] = []
	dict_list[outname]["total"][3] = []
	dict_list[outname]["rate"][1] = []
	dict_list[outname]["rate"][2] = []
	dict_list[outname]["rate"][3] = []

past_state = ""
pop_count = 0
for i in range(len(state_data)) : #len(state_data)
	tmp_outname = state_data["outname"][i]
	tmp_agegrp = int(state_data["agegrp"][i])
	tmp_total = int(state_data["est_total"][i])
	tmp_rate = state_data["BSAE"][i]
	tmp_state = state_data["stname"][i]
	tmp_population = state_data["pop"][i]
	#
	try : 
		dict_list[tmp_outname]["total"][tmp_agegrp].append(tmp_total)
	except :
		continue
	dict_list[tmp_outname]["rate"][tmp_agegrp].append(tmp_rate * 1000)
	#if pop_count < 4 :
	#	population[tmp_agegrp].append(tmp_population)
	#	pop_count += 1
	if past_state != tmp_state : 
		year.append(int(state_data["pyearnm"][i][0:4]))
		state.append(state_data["stname"][i])
		population[1].append(state_data["pop"][i])
		population[2].append(state_data["pop"][i+1])
		population[3].append(state_data["pop"][i+2])
		pop_count = 0
	past_state = tmp_state

#population[1].pop()
#population[2].pop()
#population[3].pop()

final_df = pd.DataFrame()
final_df["state"] = state
final_df["year"] = year 
final_df["Population.12-17"] = population[1]
final_df["Population.18-25"] = population[2]
final_df["Population.26+"] = population[3]

final_df["Population.12-17"] = final_df["Population.12-17"].astype("int")
final_df["Population.18-25"] = final_df["Population.18-25"].astype("int")
final_df["Population.26+"] = final_df["Population.26+"].astype("int")

for outname in outname_list :
	final_df["Total." + outname + ".12-17"] = dict_list[outname]["total"][1]
	final_df["Total." + outname + ".18-25"] = dict_list[outname]["total"][2]
	final_df["Total." + outname + ".26+"] = dict_list[outname]["total"][3]
	final_df["Rate." + outname + ".12-17"] = dict_list[outname]["rate"][1]
	final_df["Rate." + outname + ".18-25"] = dict_list[outname]["rate"][2]
	final_df["Rate." + outname + ".26+"] = dict_list[outname]["rate"][3]

final_df.to_csv("drugs-corgis.csv", mode = "w", index = False, header = None)
final_df.to_csv("drugs-corgis_with_header.csv", mode = "w", index = False)