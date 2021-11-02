import pandas as pd 

#food-ingredient-nutrient
data = pd.read_csv("./raw/2017-2018 FNDDS At A Glance - Ingredient Nutrient Values.csv")

del data["Nutrient code"]
del data["Nutrient value source"]
del data["FDC ID"]
del data["Derivation code"]
del data["SR AddMod year"]
del data["Foundation year acquired"]

selected_col = ['Carotene, alpha','Carotene, beta','Cryptoxanthin, beta','Carbohydrate','Cholesterol','Choline, total','Fiber, total dietary','Lutein + zeaxanthin','Lycopene','Niacin','Protein','Retinol','Riboflavin','Selenium','Sugars, total','Thiamin','Water','Fatty acids, total monounsaturated','Fatty acids, total polyunsaturated','Fatty acids, total saturated','Total Fat','Calcium','Copper','Iron','Magnesium','Phosphorus','Potassium','Sodium','Zinc','Vitamin A, RAE','Vitamin B-12','Vitamin B-6','Vitamin C','Vitamin E (alpha-tocopherol)','Vitamin K (phylloquinone)']
selected_col_df = pd.DataFrame({"Nutrient description" : selected_col})

filtered_data = pd.merge(data, selected_col_df)
filtered_data = filtered_data.sort_values(by=['Ingredient code'])
filtered_data.reset_index(inplace = True, drop = True)

nutrient_dict = {}
for nutrient in selected_col :
	nutrient_dict[nutrient] = []

ingredient_code_list = []
ingredient_description_list = []
category_list = []

for i in range(len(filtered_data)) :
	if (i == 0) or (filtered_data["Ingredient code"][i] != tmp_code) :
		tmp_code = filtered_data["Ingredient code"][i]
		tmp_category = filtered_data["Ingredient description"][i].split(',')[0]
		tmp_description = filtered_data["Ingredient description"][i]
		ingredient_code_list.append(tmp_code)
		ingredient_description_list.append(tmp_description)
		category_list.append(tmp_category)
	nutrient_dict[filtered_data["Nutrient description"][i]].append(filtered_data["Nutrient value"][i])

final_df = pd.DataFrame({"category" : category_list, "description" : ingredient_description_list, "number" : ingredient_code_list})

for col in selected_col :
	final_df[col] = nutrient_dict[col]

final_df = final_df.dropna(axis = 0)
final_df["Carotene, alpha"] = final_df["Carotene, alpha"].astype(int)
final_df["Carotene, beta"] = final_df["Carotene, beta"].astype(int)
final_df["Cryptoxanthin, beta"] = final_df["Cryptoxanthin, beta"].astype(int)
final_df["Cholesterol"] = final_df["Cholesterol"].astype(int)
final_df["Lutein + zeaxanthin"] = final_df["Lutein + zeaxanthin"].astype(int)
final_df["Lycopene"] = final_df["Lycopene"].astype(int)
final_df["Retinol"] = final_df["Retinol"].astype(int)
final_df["Calcium"] = final_df["Calcium"].astype(int)
final_df["Magnesium"] = final_df["Magnesium"].astype(int)
final_df["Phosphorus"] = final_df["Phosphorus"].astype(int)
final_df["Potassium"] = final_df["Potassium"].astype(int)
final_df["Sodium"] = final_df["Sodium"].astype(int)
final_df["Vitamin A, RAE"] = final_df["Vitamin A, RAE"].astype(int)


final_df.to_csv("ingredients-corgis.csv", mode = "w", index = False, header = None)
