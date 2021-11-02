import pandas as pd
data = pd.read_csv("./raw/2017-2018 FNDDS At A Glance - FNDDS Nutrient Values.csv")

selected_col = ['Main food description','Food code','Carotene, alpha (mcg)','Carotene, beta (mcg)','Cryptoxanthin, beta (mcg)','Carbohydrate (g)','Cholesterol (mg)','Choline, total (mg)','Fiber, total dietary (g)','Lutein + zeaxanthin (mcg)','Lycopene (mcg)','Niacin (mg)','Protein (g)','Retinol (mcg)','Riboflavin (mg)','Selenium (mcg)','Sugars, total (g)','Thiamin (mg)','Water (g)','Fatty acids, total monounsaturated (g)','Fatty acids, total polyunsaturated (g)','Fatty acids, total saturated (g)','Total Fat (g)','Calcium (mg)','Copper (mg)','Iron (mg)','Magnesium (mg)','Phosphorus (mg)','Potassium (mg)','Sodium (mg)','Zinc (mg)','Vitamin A, RAE (mcg_RAE)','Vitamin B-12 (mcg)','Vitamin B-6 (mg)','Vitamin C (mg)','Vitamin E (alpha-tocopherol) (mg)','Vitamin K (phylloquinone) (mcg)']
selected_col_df = data[selected_col]

category_list = []
for i in range(len(selected_col_df)) :
	category_list.append(selected_col_df["Main food description"][i].split(',')[0])

selected_col_df['Category'] = category_list
selected_col = ['Category', 'Main food description','Food code','Carotene, alpha (mcg)','Carotene, beta (mcg)','Cryptoxanthin, beta (mcg)','Carbohydrate (g)','Cholesterol (mg)','Choline, total (mg)','Fiber, total dietary (g)','Lutein + zeaxanthin (mcg)','Lycopene (mcg)','Niacin (mg)','Protein (g)','Retinol (mcg)','Riboflavin (mg)','Selenium (mcg)','Sugars, total (g)','Thiamin (mg)','Water (g)','Fatty acids, total monounsaturated (g)','Fatty acids, total polyunsaturated (g)','Fatty acids, total saturated (g)','Total Fat (g)','Calcium (mg)','Copper (mg)','Iron (mg)','Magnesium (mg)','Phosphorus (mg)','Potassium (mg)','Sodium (mg)','Zinc (mg)','Vitamin A, RAE (mcg_RAE)','Vitamin B-12 (mcg)','Vitamin B-6 (mg)','Vitamin C (mg)','Vitamin E (alpha-tocopherol) (mg)','Vitamin K (phylloquinone) (mcg)']
selected_col_df = selected_col_df[selected_col]

selected_col_df = selected_col_df.dropna(axis = 0)
selected_col_df.to_csv("food-corgis.csv", mode = "w", index = False, header = None)