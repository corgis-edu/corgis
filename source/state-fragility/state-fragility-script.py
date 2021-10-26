import pandas as pd 

data = pd.read_csv("./raw/SFIv2018.csv")
data = data[["country","year","sfi","ecoeff","effect","poleff","seceff","soceff","ecoleg","legit","polleg","secleg","socleg"]]

data.to_csv("state-fragility-corgis.csv", mode = "w", index = False, header = False)