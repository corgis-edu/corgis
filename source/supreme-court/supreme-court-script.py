import pandas as pd 
import re

data = pd.read_csv("./raw/supreme_court - supreme_court.csv")
rm_column_list = ['caseOriginState', 'caseSourceState', 'dateRearg', 'petitionerState', 'respondentState', 'lawMinor', 'authorityDecision2', 'adminActionState', 'lawSupp', 'dateArgument']
for column in rm_column_list :
	del data[column]

#adminAction
adminAction = pd.read_csv("./raw/adminAction.csv")
data["adminAction"] = data["adminAction"].fillna(118)
data = pd.merge(data, adminAction, left_on = "adminAction", right_on = "adminActionId")
del data["adminAction"]

#lawType
data["lawType"] = data["lawType"].fillna(10)
lawType = pd.read_csv("./raw/lawType.csv")
data = pd.merge(data, lawType, left_on = "lawType", right_on = "lawTypeId")
del data["lawType"]

#majOpinWriter
varJustices = pd.read_csv("./raw/varJustices.csv")
data["majOpinWriter"] = data["majOpinWriter"].fillna(117)
data = pd.merge(data, varJustices, left_on = "majOpinWriter", right_on = "varJusticesId")
del data["majOpinWriter"]
data = data.rename(columns = {"varJusticesId" : "majOpinWriterId", "varJusticesStr" : "majOpinWriterStr"})

#majOpinAssigner
data["majOpinAssigner"] = data["majOpinAssigner"].fillna(117)
data = pd.merge(data, varJustices, left_on = "majOpinAssigner", right_on = "varJusticesId")
del data["majOpinAssigner"]
data = data.rename(columns = {"varJusticesId" : "majOpinAssignerId", "varJusticesStr" : "majOpinAssignerStr"})

#decisionDirection
varDecisionDirection = pd.read_csv("./raw/varDecisionDirection.csv")
data["decisionDirection"] = data["decisionDirection"].fillna(3)
data = pd.merge(data, varDecisionDirection, left_on = "decisionDirection", right_on = "varDecisionDirectionId")
del data["varDecisionDirectionId"]
del data["decisionDirection"]
data = data.rename(columns = {"varDecisionDirectionStr" : "decisionDirection"})

#jurisdiction
varJurisdiction = pd.read_csv("./raw/varJurisdiction.csv")
data["jurisdiction"] = data["jurisdiction"].fillna(15)
data = pd.merge(data, varJurisdiction, left_on = "jurisdiction", right_on = "varJurisdictionId")
del data["varJurisdictionId"]
del data["jurisdiction"]
data = data.rename(columns={"varJurisdictionStr" : "jurisdiction"})

#decisionType
varDecisionType = pd.read_csv("./raw/varDecisionType.csv")
data["decisionType"] = data["decisionType"].fillna(9)
data = pd.merge(data, varDecisionType, left_on = "decisionType", right_on = "varDecisionTypeId")
del data["varDecisionTypeId"]
del data["decisionType"]
data = data.rename(columns={"varDecisionTypeStr" : "decisionType"})

#declarationUncon
varDeclarationUncon = pd.read_csv("./raw/varDeclarationUncon.csv")
data["declarationUncon"] = data["declarationUncon"].fillna(5)
data = pd.merge(data, varDeclarationUncon, left_on = "declarationUncon", right_on = "varDeclarationUnconId")
del data["declarationUncon"]
del data["varDeclarationUnconId"]
data = data.rename(columns={"varDeclarationUnconStr" : "declarationUncon"})

#partyWinning
varPartyWinning = pd.read_csv("./raw/varPartyWinning.csv")
data["partyWinning"] = data["partyWinning"].fillna(3)
data = pd.merge(data, varPartyWinning, left_on = "partyWinning", right_on = "varPartyWinningId")
del data["partyWinning"]
del data["varPartyWinningId"]
data = data.rename(columns={"varPartyWinningStr" : "partyWinning"})

#issueArea
varIssuesAreas = pd.read_csv("./raw/varIssuesAreas.csv")
data["issueArea"] = data["issueArea"].fillna(15)
data = pd.merge(data, varIssuesAreas, left_on = "issueArea", right_on = "varIssuesAreasId")
del data["varIssuesAreasId"]
del data["issueArea"]
data = data.rename(columns={"varIssuesAreasStr" : "issueArea"})

#issue
varIssues = pd.read_csv("./raw/varIssues.csv")
data["issue"] = data["issue"].fillna(0)
data = pd.merge(data, varIssues, left_on = "issue", right_on = "varIssuesId")
del data["issue"]

#lcDispositionDirection
data["lcDispositionDirection"] = data["lcDispositionDirection"].fillna(3)
data = pd.merge(data, varDecisionDirection, left_on = "lcDispositionDirection", right_on = "varDecisionDirectionId")
del data["varDecisionDirectionId"]
del data["lcDispositionDirection"]
data = data.rename(columns = {"varDecisionDirectionStr" : "lcDispositionDirection"})

#lcDisposition
varCaseDispositionLc = pd.read_csv("./raw/varCaseDispositionLc.csv")
data["lcDisposition"] = data["lcDisposition"].fillna(13)
data = pd.merge(data, varCaseDispositionLc, left_on = "lcDisposition", right_on = "varCaseDispositionLcId")
del data["lcDisposition"]
del data["varCaseDispositionLcId"]
data = data.rename(columns = {"varCaseDispositionLcStr" : "lcDisposition"})

#certReason
varCertReason = pd.read_csv("./raw/varCertReason.csv")
data["certReason"] = data["certReason"].fillna(14)
data = pd.merge(data, varCertReason, left_on = "certReason", right_on = "varCertReasonId")
del data["certReason"]
del data["varCertReasonId"]
data = data.rename(columns = {"varCertReasonStr" : "certReason"})

#naturalCourt
naturalCourtPeriod = []
for i in range(len(data)) :
	naturalCourtPeriod.append(data["naturalCourt"][i]%100)
data["naturalCourtPeriod"] = naturalCourtPeriod

#caseOrigin
varCaseSources = pd.read_csv("./raw/varCaseSources.csv")
data["caseOrigin"] = data["caseOrigin"].fillna(0)
data = pd.merge(data, varCaseSources, left_on = "caseOrigin", right_on = "varCaseSourcesId")
del data["caseOrigin"]
data = data.rename(columns = {"varCaseSourcesStr" : "caseOriginStr", "varCaseSourcesId" : "caseOriginId"})

data["caseSource"] = data["caseSource"].fillna(0)
data = pd.merge(data, varCaseSources, left_on = "caseSource", right_on = "varCaseSourcesId")
del data["caseSource"]
data = data.rename(columns={"varCaseSourcesId" : "caseSourceId", "varCaseSourcesStr" : "caseSourceStr"})

#petitioner
varParties = pd.read_csv("./raw/varParties.csv")
data["petitioner"] = data["petitioner"].fillna(0)
data = pd.merge(data, varParties, left_on = "petitioner", right_on = "varPartiesId")
del data["petitioner"]
data = data.rename(columns={"varPartiesId" : "petitionerId", "varPartiesStr" : "petitionerStr"})

data["respondent"] = data["respondent"].fillna(0)
data = pd.merge(data, varParties, left_on = "respondent", right_on = "varPartiesId")
del data["respondent"]
data = data.rename(columns={"varPartiesId" : "respondentId", "varPartiesStr" : "respondentStr"})

#caseDisposition
varCaseDispositionSc = pd.read_csv("./raw/varCaseDispositionSc.csv")
data["caseDisposition"] = data["caseDisposition"].fillna(12)
data = pd.merge(data, varCaseDispositionSc, left_on = "caseDisposition", right_on = "varCaseDispositionScId")
del data["varCaseDispositionScId"]
del data["caseDisposition"]
data = data.rename(columns={"varCaseDispositionScStr" : "caseDisposition"})

#usCite
data["usCite"] = data["usCite"].fillna("unspecified")
data["sctCite"] = data["sctCite"].fillna("unspecified")
data["ledCite"] = data["ledCite"].fillna("unspecified")
data["lexisCite"] = data["lexisCite"].fillna("unspecified")

data = data.dropna(axis = 0)
data.reset_index(inplace = True, drop = True)

#three judge dc
tmp_bool = []
for i in range(len(data)) :
	if data["threeJudgeFdc"][i] == 0 :
		tmp_bool.append(False)
	else :
		tmp_bool.append(True)
data["threeJudgeFdc"] = tmp_bool

#decisionDirectionDissent
tmp_bool = []
for i in range(len(data)) :
	if data["decisionDirectionDissent"][i] == 0 :
		tmp_bool.append(False)
	else :
		tmp_bool.append(True)
data["decisionDirectionDissent"] = tmp_bool

#precedentAlteration
tmp_bool = []
for i in range(len(data)) :
	if data["precedentAlteration"][i] == 0 :
		tmp_bool.append(False)
	else :
		tmp_bool.append(True)
data["precedentAlteration"] = tmp_bool

#lcDisagreement
tmp_bool = []
for i in range(len(data)) :
	if data["lcDisagreement"][i] == 0 :
		tmp_bool.append(False)
	else :
		tmp_bool.append(True)
data["lcDisagreement"] = tmp_bool

#splitVote
tmp_bool = []
for i in range(len(data)) :
	if data["splitVote"][i] == 1 :
		tmp_bool.append(False)
	else :
		tmp_bool.append(True)
data["splitVote"] = tmp_bool

#voteUnclear
tmp_bool = []
for i in range(len(data)) :
	if data["voteUnclear"][i] == 0 :
		tmp_bool.append(False)
	else :
		tmp_bool.append(True)
data["voteUnclear"] = tmp_bool

#caseDispositionUnusual
tmp_bool = []
for i in range(len(data)) :
	if data["caseDispositionUnusual"][i] == 0 :
		tmp_bool.append(False)
	else :
		tmp_bool.append(True)
data["caseDispositionUnusual"] = tmp_bool

#dateDecision
dateDecision_day = []
dateDecision_month = [] 
dateDecision_year = []

for i in range(len(data)) :
	tmp_date = data["dateDecision"][i].split('/')
	dateDecision_day.append(tmp_date[1])
	dateDecision_month.append(tmp_date[0])
	dateDecision_year.append(tmp_date[2])
data["dateDecisionDay"] = dateDecision_day
data["dateDecisionMonth"] = dateDecision_month
data["dateDecisionYear"] = dateDecision_year

#docket
docket_list = []
for i in range(len(data)) :
	if '-' in data["docket"][i] :
		tmp = data["docket"][i].split('-')[0]
	else :
		tmp = re.sub(r'[^0-9]', '', data["docket"][i])
	docket_list.append(tmp)
data["docket"] = docket_list

column_order = ['threeJudgeFdc','docket','caseName','ledCite','lexisCite','sctCite','usCite','authorityDecision1','decisionDirection','decisionDirectionDissent','jurisdiction','precedentAlteration','term','decisionType','declarationUncon','partyWinning','caseId','caseIssuesId','docketId','voteId','issueArea','varIssuesId','varIssuesStr','lawTypeId','lawTypeStr','lcDispositionDirection','lcDisagreement','lcDisposition','certReason','chief','naturalCourt','naturalCourtPeriod','caseOriginId','caseOriginStr','caseSourceId','caseSourceStr','majVotes','minVotes','splitVote','voteUnclear','petitionerStr','petitionerId','respondentStr','respondentId','adminActionStr','adminActionId','caseDisposition','caseDispositionUnusual','dateDecisionDay','dateDecision','dateDecisionMonth','dateDecisionYear','majOpinAssignerId','majOpinAssignerStr','majOpinWriterId','majOpinWriterStr']
final_df = data[column_order]

final_df = final_df[final_df["docket"] != 'A']
final_df = final_df[final_df['docket'] != '']
final_df.to_csv("supreme-court-corgis.csv", mode = "w", index = False, header = False)