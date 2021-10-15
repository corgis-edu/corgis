import pandas as pd 
import os
import glob

final_dict = {}

#AIDS related deaths
files = glob.glob("./AIDS-related deaths*.csv")
files_dict = {}
subject_list = ["AIDS orphans", "All adults", "All ages", "Children", "Female adults", "Male adults"]

for file in files :
	base = os.path.basename(file)
	filename = os.path.splitext(base)[0] + os.path.splitext(base)[1]
	for subject in subject_list :
		if subject in filename :
			files_dict[subject] = filename

year_list = []
for i in range(1990, 2021) :
	year_list.append(str(i))

count = 0 
for subject in subject_list :
	data = pd.read_csv(files_dict[subject], na_values = '... ', index_col = 0)
	data = data.T
	del data["Global"]
	data = data.T
	#
	column_name = data.columns.tolist()
	#
	for i in range(len(column_name)) :
		column_name[i] = column_name[i].replace(" ", "")
	#
	data.columns = column_name
	data_only_year = data[year_list]
	year_column = []
	tmp_column = pd.Series()
	#
	for i in range(1990, 2021) :
		for j in range(len(data_only_year)) :
			year_column.append(i)
		tmp_column = pd.concat([tmp_column, data_only_year[str(i)].str.replace(" ", "")], axis = 0)
	#
	if count == 0 :
		final_dict["year"] = year_column
		count = 1
	final_dict["AIDS-Related Deaths." + subject] = tmp_column


#HIV Prevalence
files = glob.glob("./People living with HIV_HIV Prevalence*.csv")
files_dict = {}
subject_list = ["Adults", "Young males", "Young females"]

for file in files :
	base = os.path.basename(file)
	filename = os.path.splitext(base)[0] + os.path.splitext(base)[1]
	for subject in subject_list :
		if subject in filename :
			files_dict[subject] = filename

year_list = []
for i in range(1990, 2021) :
	year_list.append(str(i))

count = 0 
for subject in subject_list :
	data = pd.read_csv(files_dict[subject], na_values = '... ', index_col = 0)
	data = data.T
	del data["Global"]
	data = data.T
	#
	column_name = data.columns.tolist()
	#
	for i in range(len(column_name)) :
		column_name[i] = column_name[i].replace(" ", "")
	#
	data.columns = column_name
	data_only_year = data[year_list]
	year_column = []
	tmp_column = pd.Series()
	#
	for i in range(1990, 2021) :
		for j in range(len(data_only_year)) :
			year_column.append(i)
		tmp_column = pd.concat([tmp_column, data_only_year[str(i)].str.replace(" ", "")], axis = 0)
	#
	if count == 0 :
		final_dict["year"] = year_column
		count = 1
	final_dict["HIV Prevalence." + subject] = tmp_column


#New HIV infections
files = glob.glob("./New HIV infections_New HIV infections*.csv")
files_dict = {}
subject_list = ["All adults (15-49)", "Male adults", "Female adults", "Children", "All ages", "All adults (15+)"]

for file in files :
	base = os.path.basename(file)
	filename = os.path.splitext(base)[0] + os.path.splitext(base)[1]
	for subject in subject_list :
		if subject in filename :
			files_dict[subject] = filename

year_list = []
for i in range(1990, 2021) :
	year_list.append(str(i))

count = 0 
for subject in subject_list :
	data = pd.read_csv(files_dict[subject], na_values = '... ', index_col = 0)
	data = data.T
	del data["Global"]
	data = data.T
	#
	column_name = data.columns.tolist()
	#
	for i in range(len(column_name)) :
		column_name[i] = column_name[i].replace(" ", "")
	#
	data.columns = column_name
	data_only_year = data[year_list]
	year_column = []
	tmp_column = pd.Series()
	#
	for i in range(1990, 2021) :
		for j in range(len(data_only_year)) :
			year_column.append(i)
		tmp_column = pd.concat([tmp_column, data_only_year[str(i)].str.replace(" ", "")], axis = 0)
	#
	if count == 0 :
		final_dict["year"] = year_column
		count = 1
	final_dict["New HIV Infections." + subject] = tmp_column


files = glob.glob("./New HIV infections_HIV incidence*.csv")
files_dict = {}
subject_list = ["Adults"]

for file in files :
	base = os.path.basename(file)
	filename = os.path.splitext(base)[0] + os.path.splitext(base)[1]
	for subject in subject_list :
		if subject in filename :
			files_dict[subject] = filename

year_list = []
for i in range(1990, 2021) :
	year_list.append(str(i))

count = 0 
for subject in subject_list :
	data = pd.read_csv(files_dict[subject], na_values = '... ', index_col = 0)
	data = data.T
	del data["Global"]
	data = data.T
	#
	column_name = data.columns.tolist()
	#
	for i in range(len(column_name)) :
		column_name[i] = column_name[i].replace(" ", "")
	#
	data.columns = column_name
	data_only_year = data[year_list]
	year_column = []
	tmp_column = pd.Series()
	#
	for i in range(1990, 2021) :
		for j in range(len(data_only_year)) :
			year_column.append(i)
		tmp_column = pd.concat([tmp_column, data_only_year[str(i)].str.replace(" ", "")], axis = 0)
	#
	if count == 0 :
		final_dict["year"] = year_column
		count = 1
	final_dict["New HIV Infections.Incidence Rate Among " + subject] = tmp_column


#People living with HIV
files = glob.glob("./People living with HIV_People living with HIV*.csv")
files_dict = {}
subject_list = ["All ages", "Male adults", "Female adults", "Children", "All adults"]

for file in files :
	base = os.path.basename(file)
	filename = os.path.splitext(base)[0] + os.path.splitext(base)[1]
	for subject in subject_list :
		if subject in filename :
			files_dict[subject] = filename

year_list = []
for i in range(1990, 2021) :
	year_list.append(str(i))

count = 0 
for subject in subject_list :
	data = pd.read_csv(files_dict[subject], na_values = '... ', index_col = 0)
	data = data.T
	del data["Global"]
	data = data.T
	#
	column_name = data.columns.tolist()
	#
	for i in range(len(column_name)) :
		column_name[i] = column_name[i].replace(" ", "")
	#
	data.columns = column_name
	data_only_year = data[year_list]
	year_column = []
	tmp_column = pd.Series()
	#
	for i in range(1990, 2021) :
		for j in range(len(data_only_year)) :
			year_column.append(i)
		tmp_column = pd.concat([tmp_column, data_only_year[str(i)].str.replace(" ", "")], axis = 0)
	#
	if count == 0 :
		final_dict["year"] = year_column
		count = 1
	final_dict["People Living with HIV." + subject] = tmp_column

final_df = pd.DataFrame(final_dict)
final_df = final_df.dropna(axis = 0)
final_df.reset_index(inplace = True)
final_df = final_df.rename(columns={'index' : 'country'})

columns = final_df.columns.tolist()
columns.remove('country')
columns.remove('year')

for col in columns :
	tmp = []
	for i in range(len(final_df)) :
		tmp.append(final_df[col][i].replace('<', ''))
	final_df[col] = tmp

#final_df.to_csv("aids.csv", mode = "w", index = False)
final_df.to_csv("aids-corgis.csv", mode = "w", index = False, header = None)