import webbrowser
import pandas as pd 

state_df = pd.read_csv("states.csv")

i = 0
count = 0
base_url = url = "https://census.gov/quickfacts/fact/csv/"
for i in range(len(state_df)) :
	if count < 5 and i != (len(state_df)-1) :
		base_url += state_df["Abbreviation"][i] + ","
		count += 1
	elif count == 5 or i == (len(state_df)-1) :
		base_url += state_df["Abbreviation"][i] + "/PST045219"
		webbrowser.open(base_url)
		count = 0
		base_url = url = "https://census.gov/quickfacts/fact/csv/"

