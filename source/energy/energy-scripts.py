import pandas as pd 

data = pd.read_csv("./raw/complete_seds.csv")
selected_msn = ['CLPRB','CLCCB','DFCCB','GECCB','HYCCB','KSCCB','PACCB','NGCCB','SOCCB','WYCCB','WDCCB','CLEIB','DFEIB','NGEIB','WWEIB','CLICB','DFICB','GEICB','HYICB','KSICB','PAICB','NGICB','OPICB','SOICB','WYICB','WDICB','CLRFB','DFRFB','NGRFB','CLRCB','DFRCB','GERCB','KSRCB','PARCB','NGRCB','WDRCB','CLACB','DFACB','PAACB','NGACB','CLCCV','DFCCV','KSCCV','PACCV','NGCCV','CLEIV','DFEIV','NGEIV','CLICV','DFICV','KSICV','PAICV','NGICV','OPICV','CLRCV','DFRCV','KSRCV','PARCV','NGRCV','WDRCV','CLACV','DFACV','PAACV','NGACV','CLCCD','DFCCD','KSCCD','PACCD','NGCCD','CLEID','DFEID','NGEID','CLICD','DFICD','KSICD','PAICD','NGICD','OPICD','CLACD','DFACD','PAACD','NGACD']
#data = data[data["MSN"] == selected_msn]
#data.reset_index(inplace = True, drop = True)

state_code_df = pd.read_csv("./raw/state_code.csv")
state_list = state_code_df["st_code"].unique().tolist()

final_df = pd.DataFrame()
for state in state_list :
	state_data = data[data["StateCode"] == state]
	state_data.reset_index(inplace = True, drop = True)
	count = 0
	tmp_state_final = pd.DataFrame()
	#
	for msn in selected_msn :
		state_data_msn = state_data[state_data["MSN"] == msn]
		del state_data_msn["Data_Status"]
		del state_data_msn["MSN"]
		state_data_msn = state_data_msn.rename(columns = {"Data" : msn})
		state_data_msn.reset_index(inplace = True, drop = True)
		if (count == 0) :
			tmp_state_final = state_data_msn
		else :
			tmp_state_final = pd.merge(tmp_state_final, state_data_msn, how = 'outer')
		count += 1
	final_df = pd.concat([final_df, tmp_state_final], axis = 0)

final_df = pd.merge(state_code_df, final_df, left_on = "st_code", right_on = "StateCode")
del final_df["st_code"]
del final_df["StateCode"]
final_df.to_csv("energy-corgis.csv", mode = "w", index = False, na_rep = "0", header = False)