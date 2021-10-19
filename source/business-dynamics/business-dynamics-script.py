import pandas as pd

data = pd.read_csv("./raw/bds2018_st.csv")
state_data = pd.read_csv("./raw/state_number.csv")

data = pd.merge(state_data, data, left_on = "STATE_NUM", right_on = "st")
del data["STATE_NUM"]
del data["st"]

column_list =["STATE", "year", "denom", "firms", "net_job_creation","net_job_creation_rate","reallocation_rate", "estabs_entry","estabs_entry_rate","estabs_exit","estabs_exit_rate", "estabs", "firmdeath_firms","firmdeath_estabs","firmdeath_emp", "job_creation_births","job_creation_continuers", "job_creation","job_creation_rate", "job_creation_rate_births", "job_destruction_continuers", "job_destruction", "job_destruction_deaths", "job_destruction_rate", "job_destruction_rate_deaths"]

tmp_data = data[column_list]

tmp_data.to_csv("business-dynamics-corgis.csv", mode = "w", index = False, header = False)


