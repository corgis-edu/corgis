import pandas as pd

dirname = "./raw/"
#common_column_df = pd.read_csv("common_column_df.csv", index_col = 0)

#2012 - 2019
count = 0
for year in range(2012, 2020) :
	year_list = []
	filename = dirname + str(year) + "_ASFIN_State_Totals.xlsx"
	data = pd.read_excel(filename, index_col = 0)
	data = data.dropna(axis = 0)
	data = data.drop_duplicates(["United States", "Alabama", "Alaska"])
	data_index = data.index.tolist()
	#
	for i in range(len(data_index)) :
		data_index[i] = data_index[i].strip()
	#
	data.index = data_index
	data.index = data.index.str.upper()
	del data["United States"]
	data.columns = data.columns.str.upper()
	if count == 0 :
		common_column_df = pd.DataFrame({'col':data.index})
		common_column_df = common_column_df.dropna(axis = 0)
		common_column_df = common_column_df.drop_duplicates(['col'])
		common_column_df.set_index('col', inplace = True, drop = True)
	data = pd.merge(common_column_df, data, left_index = True, right_index = True, suffixes = ['', ''])
	data = data.T
	for i in range(len(data)) :
		year_list.append(year)
	data["year"] = year_list
	data = data.T
	if count == 0 :
		tmp_df_new_year = data
	else : 
		tmp_df_new_year = pd.merge(tmp_df_new_year , data, left_index = True, right_index = True)
	count += 1

tmp_df_new_year = tmp_df_new_year.T
del tmp_df_new_year["DIRECT EXPENDITURE"]
tmp_df_new_year = tmp_df_new_year.T

#2004-2011
tmp = {}
for year in range(4, 5) :
	year_list = []
	filename = dirname + "%02dstatess.xls" % year
	data = pd.read_excel(filename, header = None, na_values = '0')
	data.columns = data.loc[2]
	data = data.dropna(axis = 0)
	data = data.drop_duplicates(["UNITED STATES", "ALABAMA", "ALASKA"])
	data = data.drop([2])
	del data["UNITED STATES"]
	data.columns = data.columns.str.upper()
	data.set_index("ITEM", inplace = True, drop = True)
	data_index = data.index.tolist()
	for i in range(len(data_index)) :
		data_index[i] = data_index[i].replace('(1)', '').replace('Goverment', 'Govermental').strip()
		try :
			tmp[data_index[i].strip()] += 1
		except :  
			tmp[data_index[i].strip()] = 0
	data.index = data_index
	data.index = data.index.str.upper()
	data = pd.merge(common_column_df, data, left_index = True, right_index = True)
	data = data.T
	for i in range(len(data)) :
		year_list.append(2000 + year)
	data["year"] = year_list
	data = data.T
	tmp_df_new_year = pd.merge(tmp_df_new_year , data, left_index = True, right_index = True)

for year in range(2, 4) :
	year_list = []
	filename = dirname + "%02dstatess.xls" % year
	data = pd.read_excel(filename, header = None, na_values = '0')
	data.columns = data.loc[4]
	del data["Per Capita"]
	data.columns = data.loc[2]
	data = data.drop_duplicates(["UNITED STATES", "ALABAMA", "ALASKA"])
	data = data.dropna(axis = 0)
	data =  data.drop([2, 7])
	data.columns = data.columns.str.upper()
	del data["UNITED STATES"]
	data.set_index("ITEM", inplace = True, drop = True)
	data_index = data.index.tolist()
	for i in range(len(data_index)) :
		data_index[i] = data_index[i].replace('(1)', '').strip()
		try :
			tmp[data_index[i].strip()] += 1
		except :  
			tmp[data_index[i].strip()] = 0
	data.index = data_index
	data.index = data.index.str.upper()
	data = pd.merge(common_column_df, data, left_index = True, right_index = True)
	data = data.T
	for i in range(len(data)) :
		year_list.append(2000 + year)
	data["year"] = year_list
	data = data.T
	tmp_df_new_year = pd.merge(tmp_df_new_year , data, left_index = True, right_index = True)
	

for year in range(0, 2) :
	year_list = []
	filename = dirname + "%02dstatess.xls" % year
	data = pd.read_excel(filename, header = None, na_values = '-')
	data.columns = data.loc[4]
	del data["Percent"]
	del data["Per Capita"]
	data.columns = data.loc[2]
	data =  data.drop([2, 7, 8])
	data = data.dropna(axis = 0)
	data.columns = data.columns.str.upper()
	data = data.drop_duplicates(["UNITED STATES", "ALABAMA", "ALASKA"])
	del data["UNITED STATES"]
	data.set_index("ITEM", inplace = True, drop = True)
	data_index = data.index.tolist()
	for i in range(len(data_index)) :
		data_index[i] = data_index[i].replace('(1)', '').strip()
		try :
			tmp[data_index[i].strip()] += 1
		except :  
			tmp[data_index[i].strip()] = 0
	data.index = data_index
	data.index = data.index.str.upper()
	data = pd.merge(common_column_df, data, left_index = True, right_index = True)
	data = data.T
	for i in range(len(data)) :
		year_list.append(2000 + year)
	data["year"] = year_list
	data = data.T
	tmp_df_new_year = pd.merge(tmp_df_new_year , data, left_index = True, right_index = True)

#1999
filename = dirname + "99statess.csv"
data = pd.read_csv(filename, header = None, na_values = '-')
del data[1]
del data[2]
data = data.drop([0,1, 3, 6, 7, 8, 9])
data.columns = data.loc[4]
del data["Percent"]
del data["Per Capita"]
data = data.drop([11])
data = data.dropna(axis = 0)
data.columns = data.loc[2]
data = data.drop([2])
data.columns = data.columns.str.upper()
data = data.drop_duplicates(["ALABAMA", "ALASKA", "ARIZONA"])
for state in data.columns.tolist()[1:] :
	data[state] = data[state].str.replace(pat=',', repl='')
data.set_index("ITEM", inplace = True, drop = True)
data_index = data.index.tolist()
for i in range(len(data_index)) :
	data_index[i] = data_index[i].replace('(1)', '').strip()
data.index = data_index
data.index = data.index.str.upper()
data = data.T
data = data.astype(float)
year_list = []
for i in range(len(data)) :
	year_list.append(1999)
data["year"] = year_list
data = data.T
tmp_df_new_year = pd.merge(tmp_df_new_year, data, left_index = True, right_index = True)

#1998
filename = dirname + "98statess.csv"
data = pd.read_csv(filename, header = None, na_values = '-')
data = data[:56]
data = data.drop([0,1,2,4])
for i in range(52,len(data.columns)) :
	del data[i]
data.columns = data.loc[3]
data.columns = data.columns.str.upper()
data = data.drop([3,5])
data = data.dropna(axis = 0)
data = data.drop_duplicates(["ALABAMA", "ALASKA", "ARIZONA"])
for state in data.columns.tolist()[1:] :
	data[state] = data[state].str.replace(pat=',', repl='')
data.set_index(data.iloc[:,0], inplace = True, drop = True)
data = data.iloc[:,1:]
data_index = data.index.tolist()
for i in range(len(data_index)) :
	data_index[i] = data_index[i].replace('(1)', '').strip()
data.index = data_index
data.index = data.index.str.upper()
data = data.T
data = data.astype(float)
year_list = []
for i in range(len(data)) :
	year_list.append(1998)
data["year"] = year_list
data = data.T
tmp_df_new_year = pd.merge(tmp_df_new_year, data, left_index = True, right_index = True)

#1997-96
for year in range(96, 98) :
	filename = dirname + "%02dstatess.xls" % year
	data = pd.read_excel(filename, header = None, na_values = '-')
	data = data.drop([0, 1, 2])
	data.columns = data.loc[3]
	data = data.drop([3])
	del data["Percent"]
	del data["Per"]
	for i in range(4, 60) :
		data = data.drop([i])
	data.reset_index(inplace = True, drop = True)

	for i in range(0,50) :
		tmp_state_df = data[i*54:(i+1)*54]
		tmp_state_df.columns = ["index", tmp_state_df.iloc[0][0]]
		tmp_state_df = tmp_state_df.dropna(axis = 0)
		if i == 0 :
			tmp_state_all_df = tmp_state_df
		else :
			tmp_state_all_df = pd.merge(tmp_state_all_df, tmp_state_df)

	data = tmp_state_all_df
	data.columns = data.columns.str.upper()
	data = data.drop_duplicates(["ALABAMA", "ALASKA", "ARIZONA"])
	data.set_index("INDEX", inplace = True, drop = True)
	data_index = data.index.tolist()
	for i in range(len(data_index)) :
		data_index[i] = data_index[i].replace('(1)', '').strip()
	data.index = data_index
	data.index = data.index.str.upper()
	data = data.T
	data = data.astype(float)
	year_list = []
	for i in range(len(data)) :
		year_list.append(1900 + year)
	data["year"] = year_list
	data = data.T
	tmp_df_new_year = pd.merge(tmp_df_new_year, data, left_index = True, right_index = True)

#1992-1995
for year in range(92, 96) :
	filename = dirname + "%02dstates.xls" % year
	data = pd.read_excel(filename, header = None, na_values = '-')
	del data[1]
	data.columns = data.loc[3]
	del data["Percent"]
	del data["Per"]
	data = data.drop([0, 1, 2, 3])
	data.reset_index(inplace = True, drop = True)

	for i in range(0,50) :
		if i >=5 and i <= 7 :
			tmp_state_df = data[i*57-2:(i+1)*57]
		else :
			tmp_state_df = data[i*57:(i+1)*57]
		tmp_state_df.columns = ["index", tmp_state_df.iloc[0][0]]
		tmp_state_df = tmp_state_df.dropna(axis = 0)
		if i == 0 :
			tmp_state_all_df = tmp_state_df
		else :
			tmp_state_all_df = pd.merge(tmp_state_all_df, tmp_state_df)

	data = tmp_state_all_df
	data.columns = data.columns.str.upper()
	data = data.drop_duplicates(["ALABAMA", "ALASKA", "ARIZONA"])
	data.set_index("INDEX", inplace = True, drop = True)
	data_index = data.index.tolist()
	for i in range(len(data_index)) :
		data_index[i] = data_index[i].replace('(1)', '').strip()
	data.index = data_index
	data.index = data.index.str.upper()
	data = data.T
	data = data.astype(float)
	year_list = []
	for i in range(len(data)) :
		year_list.append(1900 + year)
	data["year"] = year_list
	data = data.T
	tmp_df_new_year = pd.merge(tmp_df_new_year, data, left_index = True, right_index = True)

columns = tmp_df_new_year.columns
tmp_columns = []
for col in columns :
	tmp_columns.append(col.split('_')[0])

tmp_df_new_year.columns = tmp_columns
tmp_df_new_year = tmp_df_new_year.T
tmp_df_new_year_col = tmp_df_new_year.columns.tolist()
tmp_df_new_year_col.remove('year')
tmp_df_new_year_col = ['year'] + tmp_df_new_year_col
tmp_df_new_year = tmp_df_new_year[tmp_df_new_year_col]

tmp_df_new_year.reset_index(inplace = True)
tmp_df_new_year = tmp_df_new_year.sort_values(by=['index', 'year'])
sorted_column_list = ['index', 'year','CAPITAL OUTLAY','TOTAL REVENUE','TOTAL EXPENDITURE','GENERAL EXPENDITURE','GENERAL REVENUE','INSURANCE TRUST REVENUE','INTERGOVERNMENTAL REVENUE','LICENSE TAXES','SELECTIVE SALES','TAXES','CORRECTION','EDUCATION','ASSISTANCE AND SUBSIDIES','CASH AND SECURITY HOLDINGS','HEALTH','INTERGOVERNMENTAL EXPENDITURE','OTHER AND UNALLOCABLE','NATURAL RESOURCES','CURRENT OPERATION','PUBLIC WELFARE','PARKS AND RECREATION','HIGHWAYS','DEBT AT END OF FISCAL YEAR','INSURANCE BENEFITS AND REPAYMENTS','INTEREST ON DEBT','INTEREST ON GENERAL DEBT','MISCELLANEOUS GENERAL REVENUE','OTHER TAXES','POLICE PROTECTION']

tmp_df_new_year = tmp_df_new_year[sorted_column_list]
#tmp_df_new_year.to_csv("finance-corgis_header.csv", mode = "w", index = False)
tmp_df_new_year.to_csv("finance-corgis.csv", mode = "w", index = False, header = False)
