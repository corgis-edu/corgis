import pandas as pd 

filename = "./raw/FoodAccessResearchAtlasData2019.csv"
data = pd.read_csv(filename, encoding = 'unicode_escape')

selected_columns = ["County", "Pop2010","State","NUMGQTRS","OHU2010","lahunv1","lahunvhalf","lahunv10","lahunv20","lakids1","lakidshalf","lakids10","lakids20","lalowi1","lalowihalf","lalowi10","lalowi20","lapop1","lapophalf","lapop10","lapop20","laseniors1","laseniorshalf","laseniors10","laseniors20"]
data = data[selected_columns]

final_df = pd.DataFrame()
county_list = data["County"].unique().tolist()
for county in county_list :
	tmp_data = data[data["County"] == county]
	tmp_data.reset_index(inplace = True, drop = True)
	#
	grouped = tmp_data.groupby(tmp_data['State'])
	tmp_data_sum_by_state = pd.DataFrame(grouped.sum())
	tmp_data_sum_by_state.reset_index(inplace = True)
	#
	column_county_list = []
	for i in range(len(tmp_data_sum_by_state)) :
		column_county_list.append(county)
	tmp_data_sum_by_state['County'] = column_county_list 
	final_df = pd.concat([final_df, tmp_data_sum_by_state], axis = 0)

final_df = final_df.sort_values(by=['State', 'County'])
final_df = final_df[selected_columns]
final_df.to_csv("food-access-corgis.csv", mode = "w", index = False, header = False)