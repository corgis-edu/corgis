import pandas as pd
from pandas.api.types import is_string_dtype

final_df = pd.read_csv("./raw/county-demographics-raw.csv", thousands = ',')
selected_column = ["Persons 65 years and over, percent","Persons under 18 years, percent","Persons under 5 years, percent","Bachelor's degree or higher, percent of persons age 25 years+, 2015-2019","High school graduate or higher, percent of persons age 25 years+, 2015-2019","Total nonemployer establishments, 2018","American Indian and Alaska Native alone, percent","Asian alone, percent","Black or African American alone, percent","Hispanic or Latino, percent","Native Hawaiian and Other Pacific Islander alone, percent","Two or More Races, percent","White alone, percent","White alone, not Hispanic or Latino, percent","Owner-occupied housing unit rate, 2015-2019","Households, 2015-2019","Housing units,  July 1, 2019,  (V2019)","Median value of owner-occupied housing units, 2015-2019","Persons per household, 2015-2019","Median household income (in 2019 dollars), 2015-2019","Per capita income in past 12 months (in 2019 dollars), 2015-2019","Persons in poverty, percent","Building permits, 2020","Foreign born persons, percent, 2015-2019","Land area in square miles, 2010","Language other than English spoken at home, percent of persons age 5 years+, 2015-2019","Living in same house 1 year ago, percent of persons age 1 year+, 2015-2019","Total manufacturers shipments, 2012 ($1,000)","Mean travel time to work (minutes), workers age 16 years+, 2015-2019","Female persons, percent","Veterans, 2015-2019","Population, Census, April 1, 2010","Population, Census, April 1, 2020","Population, percent change - April 1, 2010 (estimates base) to July 1, 2019,  (V2019)","Population per square mile, 2010","Total accommodation and food services sales, 2012 ($1,000)","Total retail sales, 2012 ($1,000)","Total retail sales per capita, 2012","All firms, 2012","Women-owned firms, 2012","Men-owned firms, 2012","Total employment, 2019","Minority-owned firms, 2012","Nonminority-owned firms, 2012","Veteran-owned firms, 2012","Nonveteran-owned firms, 2012"]
selected_column_df = pd.DataFrame({'col' : selected_column})
final_df_selected = pd.merge(final_df, selected_column_df, left_on = "Fact", right_on = "col")
del final_df_selected['col']
final_df_selected.set_index('Fact', inplace = True, drop = True)
final_df_selected = final_df_selected.T

county_list = final_df_selected.index.tolist()

only_county_list = []
#only_state_list = [] 

for county in county_list :
	only_county_list.append(county.split(',')[0])
	#only_state_list.append(county.split(',')[1].replace(' ', ''))

final_df_selected['county'] = only_county_list
#final_df_selected['state'] = only_state_list

state_info = pd.read_csv("./raw/state_county.csv")
del state_info["fips"]

final_df_selected_with_state_code = pd.merge(state_info, final_df_selected, right_on = "county", left_on = "name")
del final_df_selected_with_state_code["State"]
final_df_selected_with_state_code = final_df_selected_with_state_code.sort_values(by=['name', 'state'])
del final_df_selected_with_state_code['county']

column_list = final_df_selected_with_state_code.columns.tolist()
column_list.remove('name')
column_list.remove('state')

for col in column_list :
	if (is_string_dtype(final_df_selected_with_state_code[col])) :
		final_df_selected_with_state_code[col] = final_df_selected_with_state_code[col].str.replace('$', '')
		final_df_selected_with_state_code[col] = final_df_selected_with_state_code[col].str.replace('F', '0')
		final_df_selected_with_state_code[col] = final_df_selected_with_state_code[col].str.replace('D', '-1')
		final_df_selected_with_state_code[col] = final_df_selected_with_state_code[col].str.replace('N', '-1')
		final_df_selected_with_state_code[col] = final_df_selected_with_state_code[col].str.replace('X', '-1')
		final_df_selected_with_state_code[col] = final_df_selected_with_state_code[col].str.replace('%', '')
		final_df_selected_with_state_code[col] = final_df_selected_with_state_code[col].str.replace('Z', '0')
		final_df_selected_with_state_code[col] = final_df_selected_with_state_code[col].str.replace(',', '')
		final_df_selected_with_state_code[col] = final_df_selected_with_state_code[col].str.replace('-', '-1')
		final_df_selected_with_state_code[col] = final_df_selected_with_state_code[col].str.replace('0-11', '-1')

final_df_selected_with_state_code.to_csv("county-demographics-corgis.csv", mode = "w", index = False, header = None)