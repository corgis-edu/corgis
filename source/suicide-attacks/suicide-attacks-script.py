import pandas as pd 

# All index should be event_id
dsat_claims = pd.read_csv("./raw/dsat_claims.csv", encoding='cp1252')
dsat_attackers = pd.read_csv("./raw/dsat_attackers.csv", encoding='cp1252')
dsat_attacks = pd.read_csv("./raw/dsat_attacks.csv", encoding='cp1252')

dsat_claims = dsat_claims[['event_id','group_name','claim']]
dsat_attackers = dsat_attackers[["event_id", "gender"]]
dsat_attacks = dsat_attacks[['event_id','status','ct_sources','event_date','date_year','date_month','date_day','wounded_low','wounded_high','killed_low','killed_high','killed_low_civilian','killed_high_civilian','killed_low_political','killed_high_political','killed_low_security','killed_high_security','ct_belt_bomb','ct_truck_bomb','ct_car_bomb','ct_weapon_oth','ct_weapon_unk','weapon_txt','Region','Subregion','admin0_txt','admin1_txt','city_txt','aimpoint_desc','latitude','longitude','target_desc','tt1_txt','tt_natl_txt','ct_attackers','ct_attackers_fem','ct_attackers_mal','ct_attackers_unk']]

dsat_all = pd.merge(dsat_claims, dsat_attacks)
dsat_all = pd.merge(dsat_all, dsat_attackers)

dsat_all = dsat_all.dropna(axis = 0)
del dsat_all["event_id"]
del dsat_all["event_date"]

#final_column_list = ["group_name", "age_time_death", "date_day","date_month","date_year","killed_high","wounded_high","tt_natl_txt","aimpoint_desc","target_desc","tt1_txt","weapon_txt", "birth_admin0_txt", "birth_year", "gender"]
#dsat_all = dsat_all[final_column_list]

dsat_all.to_csv("suicide-attacks-corgis.csv", mode = "w", index = False, header = False)
