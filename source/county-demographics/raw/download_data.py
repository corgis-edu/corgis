import webbrowser
import pandas as pd
import time
import os
import shutil
import glob
from pandas.api.types import is_string_dtype

##Please modify the download_dir and current_date
download_dir = "/Users/miniymay/Downloads/"
current_date = "Oct-21-2021"

county_df = pd.read_csv("./state_county.csv",encoding='cp1252')
state_list = county_df["State"].unique().tolist()

for state in state_list :
	tmp_state_df = county_df[county_df["State"] == state]
	tmp_state_df.reset_index(inplace = True, drop = True)
	count = 0
	base_url = url = "https://census.gov/quickfacts/fact/csv/"
	for i in range(len(tmp_state_df)) :
		county_name = tmp_state_df["name"][i].lower().replace(' ', '').replace('.', '')
		state_name = tmp_state_df["State"][i].lower().replace(' ', '').replace('.', '')
		fullname = county_name + state_name
		if count < 5 and i != (len(tmp_state_df)-1) :
			base_url += fullname + ","
			count += 1
		elif count == 5 or i == (len(tmp_state_df)-1) :
			base_url += fullname + "/PST045219"
			print(base_url)
			webbrowser.open(base_url)
			time.sleep(1)
			count = 0
			base_url = "https://census.gov/quickfacts/fact/csv/"
	time.sleep(3)
	os.mkdir(download_dir + state)
	filelists = glob.glob(download_dir + "QuickFacts " + current_date + "*.csv")
	for file in filelists :
		shutil.move(file, download_dir + state)
	shutil.move(download_dir + state, './')
	#time.sleep()


state_list = ['Alabama', 'Alaska']
final_df = pd.DataFrame()
i = 0
for state in state_list :
	dirname = "./" + state + "/"
	filelists = os.listdir(dirname)
	for file in filelists :
		tmp_county_df = pd.read_csv(dirname + file)
		columns = tmp_county_df.columns
		for col in columns :
			if "Value Note" in col :
				del tmp_county_df[col]
		del tmp_county_df["Fact Note"]
		tmp_county_df = tmp_county_df.dropna(axis = 0)
		if i == 0 :
			final_df = tmp_county_df
		else :
			final_df = pd.merge(final_df, tmp_county_df)
		i += 1

final_df.to_csv("county-demographics-raw.csv", mode = "w", index = False)