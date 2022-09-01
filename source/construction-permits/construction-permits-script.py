import pandas as pd 
import datetime

dirname = "./raw/"
units_column_list = ["Number of Permits.1 unit", "Number of Permits.2 unit", "Number of Permits.3-4 unit", "Number of Permits.5+ unit"]
valuations_column_list = ["Valuations.1 unit", "Valuations.2 units", "Valuations.3-4 units", "Valuations.5+ units"]

final_dict = pd.DataFrame()

for year in range(2015, 2020) : #2020
	for month in range(1,13) :
		if (year == 2019) and (month == 11) :
			break

		units_filename = "tb2u" + str(year) + "%02d.csv" % month
		valuations_filename = "tb2v" + str(year) + "%02d.csv" % month
		#
		units_data = pd.read_csv(dirname + units_filename, header = None, index_col = 0)
		valuations_data = pd.read_csv(dirname + valuations_filename, header = None, index_col = 0)
		#
		del units_data[1]
		del units_data[6]
		del valuations_data[1]

		units_data.columns = units_column_list
		valuations_data.columns = valuations_column_list
		#
		units_and_valuations_data = pd.merge(units_data, valuations_data, left_index = True, right_index = True)
		#
		period_full_list = []
		period_month_list = []
		period_month_name_list = []
		period_year_list = []
		tmp_date = datetime.datetime(year, month, 1)
		tmp_full = tmp_date.strftime("%b") + "." + str(year-2000)
		tmp_month = month
		tmp_month_name = tmp_date.strftime("%B")
		tmp_year = year
		for i in range(len(units_and_valuations_data)) :
			period_full_list.append(tmp_full)
			period_month_list.append(tmp_month)
			period_month_name_list.append(tmp_month_name)
			period_year_list.append(tmp_year)
		#
		units_and_valuations_data["Period.full"] = period_full_list
		units_and_valuations_data["Period.month"] = period_month_list
		units_and_valuations_data["Period.month name"] = period_month_name_list
		units_and_valuations_data["Period.year"] = period_year_list
		final_dict = pd.concat([final_dict, units_and_valuations_data], axis = 0)

dirname = "./raw/"
statemonthly_columns = units_column_list + valuations_column_list

statemonthly_dict = pd.DataFrame()
for year in range(2019, 2021) :
	for month in range(1,13) :
		if (year == 2019) and (month < 11) :
			continue
		if (year == 2021) and (month > 7) :
			break
		filename = dirname + "statemonthly_" + str(year) + "%02d_v2.csv" % month 
		statemonthly_data = pd.read_csv(filename, index_col = 0)
		statemonthly_data.columns = statemonthly_columns
		#
		period_full_list = []
		period_month_list = []
		period_month_name_list = []
		period_year_list = []
		tmp_date = datetime.datetime(year, month, 1)
		tmp_full = tmp_date.strftime("%b") + "." + str(year-2000)
		tmp_month = month
		tmp_month_name = tmp_date.strftime("%B")
		tmp_year = year
		for i in range(len(statemonthly_data)) :
			period_full_list.append(tmp_full)
			period_month_list.append(tmp_month)
			period_month_name_list.append(tmp_month_name)
			period_year_list.append(tmp_year)
		#
		statemonthly_data["Period.full"] = period_full_list
		statemonthly_data["Period.month"] = period_month_list
		statemonthly_data["Period.month name"] = period_month_name_list
		statemonthly_data["Period.year"] = period_year_list
		statemonthly_dict = pd.concat([statemonthly_dict, statemonthly_data], axis = 0)

final_dict2 = pd.concat([final_dict, statemonthly_dict], axis = 0)
final_column_list = units_column_list + ["Period.full", "Period.month", "Period.month name", "Period.year"] + valuations_column_list
final_dict2 = final_dict2[final_column_list]

original_corgis_data = pd.read_csv("./raw/construction-permits-corgis_original.csv", header = None, index_col = 0)
original_corgis_data.columns = final_column_list

period_full_list = []
for i in range(len(original_corgis_data)) :
	tmp = original_corgis_data["Period.full"][i]
	year = int(tmp.split('/')[0])
	month = int(tmp.split('/')[1])
	tmp_date = datetime.datetime(year, month, 1)
	tmp_full = tmp_date.strftime("%b") + ".%02d" % (year-2000)
	period_full_list.append(tmp_full)
original_corgis_data["Period.full"] = period_full_list

final_corgis_data = pd.concat([original_corgis_data, final_dict2], axis = 0)
final_corgis_data.to_csv("construction-permits-corgis-updated.csv", mode = "w", index = True, header = None)

print("Generated new csv")