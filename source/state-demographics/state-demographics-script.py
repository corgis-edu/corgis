import pandas as pd 

filename = "./raw/QuickFacts Oct-29-2021"

for i in range(0, 9) :
	if i == 0 :
		datafile = filename + ".csv"
	else :
		datafile = filename + " (" + str(i) + ").csv"
	data = pd.read_csv(datafile, thousands = ',')
	del data["Fact Note"]
	colnames = data.columns.tolist()
	for col in colnames :
		if "Value Note" in col :
			del data[col]
	for j in range(61,83) :
		data = data.drop([j])
	#
	if i == 0 :
		tmp = data 
	else :
		tmp = pd.merge(tmp, data)

tmp.set_index("Fact", inplace = True, drop = True)
tmp = tmp.T 

column_list = tmp.columns.tolist()
for col in column_list :
	tmp[col] = tmp[col].str.replace('$', '')
	tmp[col] = tmp[col].str.replace('F', '0')
	tmp[col] = tmp[col].str.replace('D', '-1')
	tmp[col] = tmp[col].str.replace('N', '-1')
	tmp[col] = tmp[col].str.replace('X', '-1')
	tmp[col] = tmp[col].str.replace('%', '')
	tmp[col] = tmp[col].str.replace('Z', '0')
	tmp[col] = tmp[col].str.replace(',', '')
	tmp[col] = tmp[col].str.replace('-', '-1')
	tmp[col] = tmp[col].str.replace('0-11', '-1')

del tmp["Population estimates, July 1, 2019,  (V2019)"]
del tmp["Population estimates base, April 1, 2010,  (V2019)"]
del tmp["Median selected monthly owner costs -with a mortgage, 2015-2019"]
del tmp["Median selected monthly owner costs -without a mortgage, 2015-2019"]
del tmp["Median gross rent, 2015-2019"]
del tmp["Building permits, 2020"]
del tmp["In civilian labor force, total, percent of population age 16 years+, 2015-2019"]
del tmp["In civilian labor force, female, percent of population age 16 years+, 2015-2019"]
del tmp["Total health care and social assistance receipts/revenue, 2012 ($1,000)"]
del tmp["Total retail sales per capita, 2012"]
del tmp ["Total employer establishments, 2019"]
del tmp["Total employment, 2019"]
del tmp["Total annual payroll, 2019 ($1,000)"]
del tmp["Total employment, percent change, 2018-2019"]

tmp.to_csv("state-demographics-corgis.csv", mode = "w", index = True, header = None)