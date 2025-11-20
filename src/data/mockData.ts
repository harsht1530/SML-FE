// Dummy data: patient journey stage sentiment remarks by stage and type
// Example: { [stage]: { [type]: { Positive: string[], Negative: string[], Neutral: string[] } } }


// Single object holding all metric counts
export const sampleMentionsCount = {
  countriesInScope: ["US", "Germany", "France", "Italy", "Spain", "UK"],
  asthmaSources: 52,

  totalAsthmaConversations: 582394,
  asthmaDrugMentions: " 123,340",
  biologicsDrugMentions: 40392,
};

// Dummy pie chart sentiment data
export const sentimentPieData = {'Positive': {'count': 34516, 'percentage': 27.98}, 'Negative': {'count': 72735, 'percentage': 58.97}, 'Neutral': {'count': 16089, 'percentage': 13.04}}

export const patientJourneyStageRemarks: Record<string, { Positive: string[]; Negative: string[]; Neutral: string[] }> = {
  "Access": {
    Positive: ["Treatment was easy to access.", "Coverage approval came quickly.", "Medication was available without delays.", "Support programs improved access.", "Local availability made treatment smooth."],
    Negative: ["Faced delays in getting the medication.", "Insurance restrictions limited access.", "Long waiting times caused frustration.", "Poor availability affected treatment.", "Access barriers made care difficult."],
    Neutral: ["Checked treatment availability.", "Waiting for access approval.", "Access process is ongoing.", "Coverage review is still pending.", "Evaluating access options."]
  },
  "Adherence": {
    Positive: ["Patient stayed consistent with treatment.", "Easy routine helped maintain adherence.", "Regular use improved control.", "Support programs boosted adherence.", "Clear instructions enhanced commitment."],
    Negative: ["Frequent missed doses affected control.", "Confusion about schedule reduced adherence.", "Side effects caused poor consistency.", "Complex dosing hurt adherence.", "Patient forgot doses regularly."],
    Neutral: ["Trying to follow the schedule.", "Sometimes misses doses.", "Tracking adherence patterns.", "Using reminders to stay consistent.", "Monitoring adherence with tools."]
  },
  "Affordability": {
    Positive: ["Treatment was affordable.", "Insurance reduced overall cost.", "Co-pay assistance eased burden.", "Biosimilar options saved money.", "Low cost improved treatment access."],
    Negative: ["Medication was too expensive.", "High out-of-pocket costs caused stress.", "Insurance did not fully cover treatment.", "Costs prevented continued therapy.", "Financial burden affected decision-making."],
    Neutral: ["Comparing cost options.", "Waiting for insurance estimate.", "Checking reimbursement status.", "Reviewing affordability programs.", "Evaluating cost before treatment."]
  },
  "Asthma Awareness": {
    Positive: ["Awareness helped early detection.", "Better understanding improved management.", "Education empowered patients.", "Awareness reduced fear of symptoms.", "Community programs increased knowledge."],
    Negative: ["Lack of awareness delayed diagnosis.", "Poor understanding led to confusion.", "Misinformation created fear.", "Limited awareness caused late care.", "Patients underestimated symptoms."],
    Neutral: ["Learning about asthma.", "Reading general awareness information.", "Attending awareness programs.", "Following basic educational content.", "Neutral understanding of disease."]
  },
  "Asthma Control Assessment": {
    Positive: ["Assessment showed good control.", "Scores improved after treatment.", "Patient maintained stable results.", "Regular checkups showed progress.", "Assessment confirmed better outcomes."],
    Negative: ["Assessment showed poor control.", "Scores worsened over time.", "Patient struggled despite treatment.", "Uncontrolled symptoms appeared in assessment.", "Results indicated need for stronger therapy."],
    Neutral: ["Assessment underway.", "Monitoring scores regularly.", "Awaiting evaluation results.", "Neutral assessment review.", "Following routine checkup."]
  },
  "Asthma Education": {
    Positive: ["Education improved understanding.", "Clear guidance empowered self-care.", "Training enhanced proper inhaler use.", "Workshops supported better control.", "Educational materials were helpful."],
    Negative: ["Lack of guidance caused confusion.", "Patient did not understand instructions.", "Poor education delayed proper care.", "Unclear teaching created uncertainty.", "Insufficient information caused misuse."],
    Neutral: ["Reading educational content.", "Attending informational sessions.", "Receiving routine guidance.", "Following general instructions.", "Neutral learning experience."]
  },
  "Asthma Management": {
    Positive: ["Management plan worked well.", "Routine improved stability.", "Patient followed a clear plan.", "Personalized management helped control symptoms.", "Doctor-guided management improved outcomes."],
    Negative: ["Too many medications caused confusion.", "Difficult to maintain routine.", "Management plan did not improve symptoms.", "Frequent changes frustrated the patient.", "Poor management led to flare-ups."],
    Neutral: ["Following routine management steps.", "Tracking symptoms daily.", "Considering adjustments in plan.", "Neutral about management changes.", "Monitoring response to treatment."]
  },
  "Biologic perception": {
    Positive: ["Biologic treatment greatly improved control.", "Patient felt relief using biologics.", "Biologic felt reliable and effective.", "Less dependency on inhalers after biologic.", "Symptoms improved significantly."],
    Negative: ["Concerned about side effects.", "Cost made biologics difficult to use.", "Worried about long-term impact.", "Limited access created frustration.", "Fear of injections reduced comfort."],
    Neutral: ["Learning about biologic therapy.", "Following doctor’s guidance.", "Waiting for approval.", "Neutral toward treatment option.", "Trying biologic for the first time."]
  },
  "Biologics": {
    Positive: ["Biologics improved symptom control.", "Reduced flare-ups significantly.", "Easy dosing supported long-term use.", "Biologics enhanced quality of life.", "Patient experienced fewer attacks."],
    Negative: ["High cost limited use.", "Approval delays affected treatment.", "Side effects caused discomfort.", "Difficult injection routine.", "Access challenges interrupted therapy."],
    Neutral: ["Starting biologic therapy.", "Awaiting doctor’s decision.", "Monitoring response to biologic.", "Following biologic schedule.", "Neutral experience so far."]
  },
  "Biologics Switching": {
    Positive: ["Switch improved symptom control.", "Transition to new biologic was smooth.", "Better relief after switching.", "Cost savings after switch.", "New biologic worked more effectively."],
    Negative: ["Symptoms worsened after switch.", "Confusion about switching.", "Fear of losing stability.", "Side effects appeared after change.", "Switch caused treatment anxiety."],
    Neutral: ["Recently switched biologic.", "Monitoring response post-switch.", "Neutral about early results.", "Following doctor’s switching plan.", "Routine transition underway."]
  },
  "Biomarker usage": {
    Positive: ["Biomarkers helped personalize treatment.", "Tests improved therapy selection.", "Results guided better decisions.", "Monitoring biomarkers improved outcomes.", "Biomarker testing reduced uncertainty."],
    Negative: ["Tests were expensive.", "Results were confusing.", "Limited access to biomarker testing.", "Unclear benefit from testing.", "Too many tests caused stress."],
    Neutral: ["Waiting for biomarker results.", "Doctor recommended a test.", "Reviewing biomarker options.", "Routine biomarker evaluation.", "Neutral response to testing."]
  },
  "Biosimilar perception": {
    Positive: ["Biosimilar worked as well as original.", "More affordable option.", "Safe and effective experience.", "Helped reduce treatment cost.", "Switch to biosimilar was smooth."],
    Negative: ["Patient felt unsure about quality.", "Fear of reduced effectiveness.", "Confusion about biosimilar differences.", "Concern about safety.", "Preference for the original brand."],
    Neutral: ["Learning about biosimilars.", "Waiting to see results.", "Doctor recommended biosimilar.", "Neutral expectations.", "Adjusting to new medication."]
  },
  "Clinical Guidelines": {
    Positive: ["Guidelines provided clear direction.", "Evidence-based approach improved care.", "Guideline-based treatment was effective.", "Clear protocols enhanced management.", "Updated guidelines improved outcomes."],
    Negative: ["Guidelines were hard to follow.", "Complex rules caused confusion.", "Outdated guidelines slowed care.", "Strict criteria limited treatment choice.", "Guideline gaps created uncertainty."],
    Neutral: ["Reviewing the guidelines.", "Following standard protocol.", "Neutral reference to recommendations.", "Assessing guideline updates.", "Routine guideline consultation."]
  },
  "Clinical Recommendation": {
    Positive: ["Recommendation improved treatment path.", "Doctor’s advice helped decision-making.", "Clinical suggestion enhanced control.", "Recommendation aligned with patient needs.", "Guided choice improved outcome."],
    Negative: ["Recommendation caused confusion.", "Advice did not match symptoms.", "Unclear recommendation created doubts.", "Poor guidance affected treatment.", "Disagreement with clinical advice."],
    Neutral: ["Received clinical recommendation.", "Considering doctor’s suggestion.", "Neutral response to consultation.", "Evaluating recommendation effect.", "Routine follow-up discussion."]
  },
  "Clinical guidance": {
    Positive: ["Guidance was clear and supportive.", "Doctor provided strong clinical clarity.", "Guidance improved treatment confidence.", "Effective direction enhanced outcomes.", "Clear instructions eased decision-making."],
    Negative: ["Guidance felt unclear.", "Inconsistent instructions caused confusion.", "Limited explanation hurt confidence.", "Clinical direction felt inadequate.", "Guidance failed to address concerns."],
    Neutral: ["Received clinical guidance.", "Neutral discussion with doctor.", "Reviewing guidance notes.", "Following routine instructions.", "General consultation provided."]
  },
  "Confusion": {
    Positive: ["Clarification resolved confusion.", "Support helped remove doubts.", "Doctor's explanation cleared concerns.", "Guidance simplified decision-making.", "Understanding improved after discussion."],
    Negative: ["Felt confused about treatment.", "Medication instructions unclear.", "Confused about next steps.", "Conflicted due to inconsistent info.", "Unclear guidance caused anxiety."],
    Neutral: ["Seeking clarification.", "Neutral about unclear instructions.", "Waiting for explanation.", "Trying to understand details.", "Processing confusing information."]
  },
  "Cost-effectiveness": {
    Positive: ["Treatment offered good value.", "Lower cost improved outcomes.", "Biosimilar provided strong savings.", "Cost-effective therapy worked well.", "Affordable option delivered good results."],
    Negative: ["Costs exceeded benefits.", "High price limited effectiveness.", "Not cost-effective for long-term use.", "Financial burden reduced value.", "Treatment was too costly for benefits."],
    Neutral: ["Evaluating cost vs benefit.", "Neutral review of treatment value.", "Waiting for cost analysis.", "Comparing cost-effectiveness options.", "Reviewing long-term financial impact."]
  },
  "Delivery Systems": {
    Positive: ["Device was easy to use.", "Smooth delivery improved inhalation.", "User-friendly system enhanced adherence.", "Delivery was consistent and reliable.", "Device improved treatment experience."],
    Negative: ["Device was confusing.", "Delivery felt inconsistent.", "Difficulty using inhaler.", "Poor device design caused issues.", "Delivery system led to missed doses."],
    Neutral: ["Trying new device.", "Neutral experience with system.", "Learning how to use the inhaler.", "Monitoring device performance.", "Following usage instructions."]
  },
  "Diagnosis": {
    Positive: ["Diagnosis was accurate and timely.", "Clear diagnosis improved planning.", "Early detection improved outcomes.", "Testing clarified the condition.", "Correct diagnosis brought relief."],
    Negative: ["Misdiagnosis delayed treatment.", "Late diagnosis caused worsening.", "Confusing results created stress.", "Unclear condition caused anxiety.", "Diagnostic error affected care."],
    Neutral: ["Awaiting test results.", "Undergoing evaluation.", "Neutral on diagnosis process.", "Routine testing done.", "Monitoring diagnostic updates."]
  },
  "Discontinuation": {
    Positive: ["Stopping medication improved comfort.", "Discontinuation led to fewer side effects.", "Switch after stopping helped control.", "Stopping treatment brought relief.", "Discontinuation improved overall balance."],
    Negative: ["Stopping treatment worsened symptoms.", "Discontinuation caused flare-ups.", "Fear after stopping medication.", "Unplanned stopping led to issues.", "Symptom rebound after discontinuation."],
    Neutral: ["Considering stopping treatment.", "Monitoring post-discontinuation.", "Neutral about stopping effects.", "Waiting for doctor guidance.", "Evaluating discontinuation impact."]
  },
  "Dosage": {
    Positive: ["Easy-to-follow dosing schedule.", "Correct dose improved symptoms.", "Convenient dosing supported adherence.", "Dose adjustments helped significantly.", "Simple routine improved outcome."],
    Negative: ["Dose was hard to remember.", "Frequent dosing caused fatigue.", "Wrong dose caused side effects.", "Confusing instructions created errors.", "Dosing schedule felt overwhelming."],
    Neutral: ["Following doctor’s dose plan.", "Neutral about dosing frequency.", "Waiting for dose adjustment.", "Monitoring response to dose.", "Routine dosage follow-up."]
  },
  "Drug Interactions": {
    Positive: ["No interaction concerns.", "Safe combination improved treatment.", "Doctor confirmed compatibility.", "No adverse interactions reported.", "Combination therapy worked well."],
    Negative: ["Drug interactions caused side effects.", "Worried about combination safety.", "Interaction issues affected therapy.", "Doctor warned about mixed medications.", "Severe symptoms linked to interactions."],
    Neutral: ["Checking drug compatibility.", "Reviewing potential interactions.", "Monitoring drug combinations.", "Neutral guidance from doctor.", "Awaiting interaction assessment."]
  },
  "Effectiveness": {
    Positive: ["Treatment worked very well.", "Symptoms improved significantly.", "Medication provided strong relief.", "Highly effective for control.", "Fast improvement reported."],
    Negative: ["Medication was not effective.", "Symptoms persisted despite treatment.", "Limited improvement seen.", "Effectiveness decreased over time.", "Poor results after long use."],
    Neutral: ["Monitoring effectiveness.", "Neutral response so far.", "Waiting to see full effects.", "Assessing treatment results.", "Slow but steady progress observed."]
  },
  "Efficacy": {
    Positive: ["Strong clinical efficacy observed.", "Great improvement in symptoms.", "High efficacy for severe cases.", "Consistent results in treatment.", "Patient reported excellent outcomes."],
    Negative: ["Low efficacy in real-world use.", "Inconsistent symptom improvement.", "Efficacy concerns after use.", "Not effective for this patient.", "Efficacy declined over time."],
    Neutral: ["Monitoring treatment efficacy.", "Neutral on observed results.", "Waiting for efficacy evaluation.", "Reviewing clinical responses.", "Standard efficacy assessment."]
  },
  "Emotion": {
    Positive: ["Feeling hopeful about treatment.", "Patient is relieved.", "Increased confidence in therapy.", "Optimistic about results.", "Feeling empowered by progress."],
    Negative: ["Frustrated with slow results.", "Fear of medication effects.", "Confused about symptoms.", "Anxiety about future treatment.", "Overwhelmed by condition."],
    Neutral: ["Emotionally neutral.", "Waiting to see emotional impact.", "Processing feelings.", "Monitoring emotional state.", "Observing emotional changes."]
  },
  "Generic drug perception": {
    Positive: ["Generic worked as well as brand.", "Affordable option helped adherence.", "Good relief with generic medication.", "Easy availability of generics.", "Effective and budget-friendly."],
    Negative: ["Felt generic was less effective.", "Confused by different device design.", "Concerns about drug quality.", "Side effects felt worse with generic.", "Preferred branded medication."],
    Neutral: ["Trying generic medication.", "Adjusting to device differences.", "Neutral experience so far.", "Following doctor’s switch recommendation.", "Awaiting long-term comparison."]
  },
  "Home administration": {
    Positive: ["Easy to administer at home.", "More convenient than clinic visits.", "Home dosing improved adherence.", "Comfortable using at home.", "Reduced travel burden."],
    Negative: ["Hard to administer correctly at home.", "Fear of doing it wrong.", "Cold storage was inconvenient.", "Missed doses at home.", "Stress before home injections."],
    Neutral: ["Learning home administration steps.", "Neutral experience so far.", "Following nurse instructions.", "Monitoring home injection routine.", "Waiting for first home dose."]
  },
  "Hope": {
    Positive: ["Feeling hopeful about treatment progress.", "Hope returned after symptom relief.", "Therapy sparked new optimism.", "Patient is hopeful for long-term control.", "Improvement encouraged strong hope."],
    Negative: ["Lack of hope due to poor results.", "Fear overshadowed hope.", "Losing hope after repeated failures.", "Uncertainty reduced optimism.", "Treatment setbacks lowered hope."],
    Neutral: ["Neutral about future outcomes.", "Monitoring recovery with cautious hope.", "Hope fluctuates.", "Waiting to see improvement.", "Observing progress neutrally."]
  },
  "Not Detected": {
    Positive: ["", "", "", "", ""],
    Negative: ["", "", "", "", ""],
    Neutral: ["", "", "", "", ""]
  },
  "Patient Advocacy Groups": {
    Positive: ["Advocacy improved patient awareness.", "Support groups boosted confidence.", "Educational initiatives helped patients.", "Campaigns enhanced understanding.", "Community support felt encouraging."],
    Negative: ["Limited resources affected guidance.", "Low engagement in programs.", "Lack of outreach created gaps.", "Confusion due to inconsistent messaging.", "Funding challenges reduced impact."],
    Neutral: ["Attending advocacy session.", "Neutral about group resources.", "Following educational materials.", "Observing group updates.", "Reviewing advocacy content."]
  },
  "Patient Satisfaction": {
    Positive: ["Patient highly satisfied with care.", "Treatment met expectations.", "Positive overall experience.", "Improvement increased satisfaction.", "Comfort and confidence restored."],
    Negative: ["Patient felt dissatisfied.", "Treatment did not meet expectations.", "Poor results reduced satisfaction.", "Frustration with care quality.", "Unsatisfied with treatment progress."],
    Neutral: ["Mixed satisfaction.", "Neutral reaction to treatment.", "Evaluating satisfaction level.", "Undecided about experience.", "Neither positive nor negative."]
  },
  "Perception": {
    Positive: ["Positive view of treatment.", "Perceived benefits increased trust.", "Good perception of therapy outcome.", "Clear information improved perception.", "Confidence shaped positive perception."],
    Negative: ["Negative view of medication.", "Poor perception due to side effects.", "Doubt lowered confidence.", "Misunderstandings affected perception.", "Unclear effects caused concern."],
    Neutral: ["Neutral perception.", "Still forming an opinion.", "Waiting for more clarity.", "Reviewing information neutrally.", "Monitoring early impressions."]
  },
  "Prescribing Patterns": {
    Positive: ["Prescription aligned with guidelines.", "Appropriate medication choice.", "Consistent prescribing improved outcomes.", "Evidence-based prescribing detected.", "Good prescribing pattern observed."],
    Negative: ["Inconsistent prescriptions.", "Non-guideline prescribing raised issues.", "Frequent changes confused the patient.", "Poor prescribing choice affected control.", "Overprescribing created problems."],
    Neutral: ["Following normal prescribing practice.", "Neutral pattern observed.", "Monitoring prescription trends.", "Routine prescribing noted.", "Standard treatment selection."]
  },
  "QoL": {
    Positive: ["Quality of life improved.", "Daily activity became easier.", "Better control enhanced QoL.", "Patient felt more energetic.", "Reduced symptoms improved comfort."],
    Negative: ["QoL worsened due to symptoms.", "Poor sleep affected life quality.", "Daily limitations increased.", "Symptoms disrupted routine.", "Lowered QoL due to poor control."],
    Neutral: ["Neutral impact on QoL.", "Monitoring daily comfort.", "Still adapting to symptoms.", "QoL stable without major change.", "Assessing life impact."]
  },
  "Quality of Life (QoL)": {
    Positive: ["Daily life significantly improved.", "Symptoms no longer interfere.", "Better mobility enhanced QoL.", "Living more comfortably now.", "Feeling healthier overall."],
    Negative: ["Daily life affected heavily.", "Constant symptoms lowered QoL.", "Struggling with daily tasks.", "Poor control reduced comfort.", "Difficult to maintain routine."],
    Neutral: ["QoL steady without major shift.", "Monitoring QoL changes.", "Waiting for improvement.", "Routine QoL assessment ongoing.", "Neutral effect so far."]
  },
  "Research": {
    Positive: ["New research encouraged optimism.", "Studies showed positive results.", "Research improved understanding.", "Advancements supported better care.", "Strong evidence increased trust."],
    Negative: ["Research lacked clarity.", "Conflicting studies caused doubt.", "Limited evidence reduced confidence.", "Research gaps created uncertainty.", "Unclear findings slowed decisions."],
    Neutral: ["Reviewing research updates.", "Neutral about study results.", "Awaiting more evidence.", "Monitoring ongoing research.", "Following general findings."]
  },
  "Safety": {
    Positive: ["Medication felt safe to use.", "Minimal side effects observed.", "Strong safety profile reported.", "Doctor reassured safety.", "Safe experience over time."],
    Negative: ["Concerns about side effects.", "Uncertainty about long-term safety.", "Worried after experiencing symptoms.", "Safety warnings caused fear.", "Doctor unclear about safety risks."],
    Neutral: ["Monitoring safety effects.", "Neutral safety observation.", "Waiting for more safety data.", "Tracking potential reactions.", "Routine safety evaluation."]
  },
  "Specialist Referral": {
    Positive: ["Specialist helped resolve issues.", "Referral improved diagnosis.", "Timely specialist visit boosted confidence.", "Specialist guidance enhanced treatment.", "Referral clarified next steps."],
    Negative: ["Referral took too long.", "Insurance denied referral.", "Hard to find a specialist.", "Delay worsened condition.", "Referral process was confusing."],
    Neutral: ["Waiting for referral appointment.", "Neutral about specialist visit.", "Following GP referral advice.", "Referral paperwork underway.", "Monitoring referral progress."]
  },
  "Symptoms": {
    Positive: ["Symptoms improved greatly.", "Breathing became easier.", "Fewer flare-ups reported.", "Symptom relief felt quickly.", "Stable symptoms over time."],
    Negative: ["Symptoms worsened.", "Persistent wheezing continued.", "Severe attacks returned.", "Breathing difficulty increased.", "No improvement in symptoms."],
    Neutral: ["Monitoring symptoms daily.", "Mild changes noticed.", "Neutral symptom pattern.", "Tracking symptom frequency.", "Awaiting treatment effect."]
  },
  "Technology Integration": {
    Positive: ["Tech tools improved tracking.", "Digital reminders boosted adherence.", "Apps simplified management.", "Monitoring devices enhanced control.", "Technology improved overall care."],
    Negative: ["Technology was hard to use.", "App glitches caused frustration.", "Poor integration reduced benefit.", "Devices were unreliable.", "Tech increased confusion."],
    Neutral: ["Trying new health app.", "Neutral experience with device.", "Learning tech features.", "Monitoring data through app.", "Setting up new device."]
  },
  "Treatment Information": {
    Positive: ["Clear information helped decisions.", "Detailed instructions improved understanding.", "Easy-to-read treatment guide.", "Good explanation from doctor.", "Helpful written materials."],
    Negative: ["Information was unclear.", "Lack of details caused confusion.", "Poor explanation from provider.", "Difficult to understand instructions.", "Confusing treatment descriptions."],
    Neutral: ["Reading treatment details.", "Neutral about provided information.", "Reviewing instructions.", "Following basic guidance.", "Waiting for clarification."]
  },
  "Treatment Tracking": {
    Positive: ["Tracking improved symptom awareness.", "Monitoring helped timely adjustments.", "Apps made tracking easier.", "Daily logs supported better decisions.", "Tracking improved adherence."],
    Negative: ["Tracking felt overwhelming.", "Difficult to record daily info.", "Missed logs reduced accuracy.", "Confusing tracking process.", "Too many tools caused frustration."],
    Neutral: ["Starting to track treatment.", "Neutral about tracking results.", "Monitoring progress routinely.", "Updating logs as needed.", "Using basic tracking methods."]
  }
};

 export const sampleAsthmaMentions =  123340;
// Dummy mapping: country to DrugClassData[]
export const countryDrugClassMap: Record<string, DrugClassData[]> = { 
  "France": [
    { type: "Symbicort (Budesonide , Formoterol)", mentions: 1729, sentiment: { Positive: 341, Negative: 1167, Neutral: 221 } },
    { type: "Albuterol (ProAir HFA, Ventolin HFA, Proventil)", mentions: 1066, sentiment: { Positive: 213, Negative: 826, Neutral: 27 } },
    { type: "Singulair (Montelukast)", mentions: 1029, sentiment: { Positive: 595, Negative: 368, Neutral: 66 } },
    { type: "AirDuo Digihaler (Fluticasone , Salmeterol)", mentions: 640, sentiment: { Positive: 234, Negative: 290, Neutral: 116 } },
    { type: "Nucala (Mepolizumab)", mentions: 369, sentiment: { Positive: 137, Negative: 135, Neutral: 97 } },
    { type: "Dulera (Mometasone + Formoterol)", mentions: 350, sentiment: { Positive: 99, Negative: 146, Neutral: 105 } },
    { type: "Xolair (Omalizumab)", mentions: 259, sentiment: { Positive: 177, Negative: 43, Neutral: 39 } },
    { type: "Dupixent (Dupilumab)", mentions: 246, sentiment: { Positive: 153, Negative: 53, Neutral: 40 } },
    { type: "Beclomethasone", mentions: 107, sentiment: { Positive: 51, Negative: 17, Neutral: 39 } },
    { type: "Breo Ellipta  (Fluticasone , Vilanterol)", mentions: 52, sentiment: { Positive: 23, Negative: 29, Neutral: 0 } },
    { type: "Fasenra (Benralizumab)", mentions: 40, sentiment: { Positive: 32, Negative: 0, Neutral: 8 } },
    { type: "Atrovent HFA (Ipratropium)", mentions: 38, sentiment: { Positive: 21, Negative: 10, Neutral: 7 } },
    { type: "Tezspire (Tezepelumab)", mentions: 31, sentiment: { Positive: 15, Negative: 9, Neutral: 7 } },
    { type: "Ciclesonide", mentions: 8, sentiment: { Positive: 8, Negative: 0, Neutral: 0 } },
    { type: "Advair Diskus", mentions: 7, sentiment: { Positive: 3, Negative: 4, Neutral: 0 } },
    { type: "Breo Ellipta (Fluticasone , Vilanterol)", mentions: 6, sentiment: { Positive: 0, Negative: 5, Neutral: 1 } },
    { type: "Advair Diskus (Fluticasone , Salmeterol)", mentions: 6, sentiment: { Positive: 0, Negative: 6, Neutral: 0 } },
    { type: "Accolate", mentions: 6, sentiment: { Positive: 3, Negative: 3, Neutral: 0 } },
    { type: "Fluticasone", mentions: 6, sentiment: { Positive: 0, Negative: 4, Neutral: 2 } },
    { type: "Cinqair", mentions: 3, sentiment: { Positive: 2, Negative: 0, Neutral: 1 } },
    { type: "Budesonide", mentions: 3, sentiment: { Positive: 0, Negative: 0, Neutral: 3 } },
    { type: "Advair Diskus (Fluticasone + Salmeterol)", mentions: 2, sentiment: { Positive: 0, Negative: 1, Neutral: 1 } },
    { type: "Dulera (Mometasone , Formoterol)", mentions: 2, sentiment: { Positive: 0, Negative: 0, Neutral: 2 } },
    { type: "Cinqair (Reslizumab)", mentions: 1, sentiment: { Positive: 0, Negative: 0, Neutral: 1 } }
  ],
  "Germany": [
    { type: "Albuterol (ProAir HFA, Ventolin HFA, Proventil)", mentions: 3189, sentiment: { Positive: 763, Negative: 2034, Neutral: 392 } },
    { type: "Singulair (Montelukast)", mentions: 1963, sentiment: { Positive: 603, Negative: 1110, Neutral: 250 } },
    { type: "Symbicort (Budesonide , Formoterol)", mentions: 1887, sentiment: { Positive: 697, Negative: 972, Neutral: 218 } },
    { type: "AirDuo Digihaler (Fluticasone , Salmeterol)", mentions: 1409, sentiment: { Positive: 273, Negative: 891, Neutral: 245 } },
    { type: "Dulera (Mometasone + Formoterol)", mentions: 828, sentiment: { Positive: 251, Negative: 426, Neutral: 151 } },
    { type: "Tezspire (Tezepelumab)", mentions: 644, sentiment: { Positive: 424, Negative: 210, Neutral: 10 } },
    { type: "Xolair (Omalizumab)", mentions: 579, sentiment: { Positive: 462, Negative: 79, Neutral: 38 } },
    { type: "Dupixent (Dupilumab)", mentions: 445, sentiment: { Positive: 206, Negative: 127, Neutral: 112 } },
    { type: "Nucala (Mepolizumab)", mentions: 390, sentiment: { Positive: 162, Negative: 158, Neutral: 70 } },
    { type: "Breo Ellipta  (Fluticasone , Vilanterol)", mentions: 121, sentiment: { Positive: 69, Negative: 46, Neutral: 6 } },
    { type: "Beclomethasone", mentions: 118, sentiment: { Positive: 80, Negative: 17, Neutral: 21 } },
    { type: "Atrovent HFA (Ipratropium)", mentions: 60, sentiment: { Positive: 28, Negative: 19, Neutral: 13 } },
    { type: "Ciclesonide", mentions: 57, sentiment: { Positive: 50, Negative: 0, Neutral: 7 } },
    { type: "Fasenra (Benralizumab)", mentions: 56, sentiment: { Positive: 38, Negative: 16, Neutral: 2 } },
    { type: "Spiriva Respimat", mentions: 28, sentiment: { Positive: 2, Negative: 25, Neutral: 1 } },
    { type: "Advair Diskus", mentions: 19, sentiment: { Positive: 4, Negative: 13, Neutral: 2 } },
    { type: "Cinqair", mentions: 15, sentiment: { Positive: 9, Negative: 0, Neutral: 6 } },
    { type: "Advair Diskus (Fluticasone + Salmeterol)", mentions: 13, sentiment: { Positive: 1, Negative: 2, Neutral: 10 } },
    { type: "Mometasone", mentions: 11, sentiment: { Positive: 9, Negative: 0, Neutral: 2 } },
    { type: "Breo Ellipta (Fluticasone , Vilanterol)", mentions: 10, sentiment: { Positive: 0, Negative: 0, Neutral: 10 } },
    { type: "Fluticasone", mentions: 9, sentiment: { Positive: 2, Negative: 1, Neutral: 6 } },
    { type: "Dulera (Mometasone , Formoterol)", mentions: 9, sentiment: { Positive: 2, Negative: 0, Neutral: 7 } },
    { type: "Accolate", mentions: 7, sentiment: { Positive: 4, Negative: 3, Neutral: 0 } },
    { type: "Budesonide", mentions: 5, sentiment: { Positive: 1, Negative: 0, Neutral: 4 } },
    { type: "Accolate (Zafirlukast)", mentions: 1, sentiment: { Positive: 0, Negative: 0, Neutral: 1 } }
  ],
  "Italy": [
    { type: "Symbicort (Budesonide , Formoterol)", mentions: 2182, sentiment: { Positive: 705, Negative: 1320, Neutral: 157 } },
    { type: "Albuterol (ProAir HFA, Ventolin HFA, Proventil)", mentions: 1973, sentiment: { Positive: 426, Negative: 1334, Neutral: 213 } },
    { type: "Singulair (Montelukast)", mentions: 1367, sentiment: { Positive: 370, Negative: 799, Neutral: 198 } },
    { type: "AirDuo Digihaler (Fluticasone , Salmeterol)", mentions: 979, sentiment: { Positive: 326, Negative: 460, Neutral: 193 } },
    { type: "Nucala (Mepolizumab)", mentions: 804, sentiment: { Positive: 519, Negative: 121, Neutral: 164 } },
    { type: "Xolair (Omalizumab)", mentions: 718, sentiment: { Positive: 587, Negative: 59, Neutral: 72 } },
    { type: "Dupixent (Dupilumab)", mentions: 568, sentiment: { Positive: 375, Negative: 123, Neutral: 70 } },
    { type: "Dulera (Mometasone + Formoterol)", mentions: 442, sentiment: { Positive: 162, Negative: 155, Neutral: 125 } },
    { type: "Beclomethasone", mentions: 338, sentiment: { Positive: 243, Negative: 16, Neutral: 79 } },
    { type: "Fasenra (Benralizumab)", mentions: 263, sentiment: { Positive: 239, Negative: 7, Neutral: 17 } },
    { type: "Tezspire (Tezepelumab)", mentions: 239, sentiment: { Positive: 115, Negative: 88, Neutral: 36 } },
    { type: "Breo Ellipta  (Fluticasone , Vilanterol)", mentions: 113, sentiment: { Positive: 43, Negative: 51, Neutral: 19 } },
    { type: "Atrovent HFA (Ipratropium)", mentions: 55, sentiment: { Positive: 13, Negative: 8, Neutral: 34 } },
    { type: "Advair Diskus", mentions: 29, sentiment: { Positive: 22, Negative: 7, Neutral: 0 } },
    { type: "Ciclesonide", mentions: 25, sentiment: { Positive: 23, Negative: 2, Neutral: 0 } },
    { type: "Accolate", mentions: 22, sentiment: { Positive: 21, Negative: 0, Neutral: 1 } },
    { type: "Cinqair", mentions: 12, sentiment: { Positive: 5, Negative: 0, Neutral: 7 } },
    { type: "Advair Diskus (Fluticasone + Salmeterol)", mentions: 4, sentiment: { Positive: 0, Negative: 0, Neutral: 4 } },
    { type: "Cinqair (Reslizumab)", mentions: 2, sentiment: { Positive: 0, Negative: 0, Neutral: 2 } },
    { type: "Dulera (Mometasone , Formoterol)", mentions: 2, sentiment: { Positive: 0, Negative: 0, Neutral: 2 } },
    { type: "Budesonide", mentions: 2, sentiment: { Positive: 1, Negative: 0, Neutral: 1 } },
    { type: "Fluticasone", mentions: 2, sentiment: { Positive: 0, Negative: 1, Neutral: 1 } },
    { type: "Breo Ellipta (Fluticasone , Vilanterol)", mentions: 2, sentiment: { Positive: 0, Negative: 1, Neutral: 1 } },
    { type: "Advair Diskus (Fluticasone , Salmeterol)", mentions: 1, sentiment: { Positive: 0, Negative: 1, Neutral: 0 } },
    { type: "Spiriva Respimat", mentions: 1, sentiment: { Positive: 1, Negative: 0, Neutral: 0 } }
  ],
  "ROW": [
    { type: "Singulair (Montelukast)", mentions: 3368, sentiment: { Positive: 649, Negative: 1895, Neutral: 824 } },
    { type: "Albuterol (ProAir HFA, Ventolin HFA, Proventil)", mentions: 2572, sentiment: { Positive: 507, Negative: 1929, Neutral: 136 } },
    { type: "Symbicort (Budesonide , Formoterol)", mentions: 1848, sentiment: { Positive: 428, Negative: 1071, Neutral: 349 } },
    { type: "Xolair (Omalizumab)", mentions: 795, sentiment: { Positive: 308, Negative: 376, Neutral: 111 } },
    { type: "Nucala (Mepolizumab)", mentions: 529, sentiment: { Positive: 228, Negative: 222, Neutral: 79 } },
    { type: "AirDuo Digihaler (Fluticasone , Salmeterol)", mentions: 398, sentiment: { Positive: 95, Negative: 227, Neutral: 76 } },
    { type: "Dupixent (Dupilumab)", mentions: 351, sentiment: { Positive: 163, Negative: 140, Neutral: 48 } },
    { type: "Spiriva Respimat", mentions: 304, sentiment: { Positive: 81, Negative: 149, Neutral: 74 } },
    { type: "Dulera (Mometasone , Formoterol)", mentions: 200, sentiment: { Positive: 76, Negative: 79, Neutral: 45 } },
    { type: "Fasenra (Benralizumab)", mentions: 178, sentiment: { Positive: 87, Negative: 66, Neutral: 25 } },
    { type: "Budesonide", mentions: 175, sentiment: { Positive: 74, Negative: 59, Neutral: 42 } },
    { type: "Tezspire (Tezepelumab)", mentions: 161, sentiment: { Positive: 67, Negative: 54, Neutral: 40 } },
    { type: "Advair Diskus (Fluticasone , Salmeterol)", mentions: 161, sentiment: { Positive: 66, Negative: 68, Neutral: 27 } },
    { type: "Dulera (Mometasone + Formoterol)", mentions: 145, sentiment: { Positive: 19, Negative: 116, Neutral: 10 } },
    { type: "Breo Ellipta (Fluticasone , Vilanterol)", mentions: 138, sentiment: { Positive: 46, Negative: 64, Neutral: 28 } },
    { type: "Fluticasone", mentions: 135, sentiment: { Positive: 47, Negative: 65, Neutral: 23 } },
    { type: "Beclomethasone", mentions: 99, sentiment: { Positive: 45, Negative: 37, Neutral: 17 } },
    { type: "Advair Diskus (Fluticasone + Salmeterol)", mentions: 75, sentiment: { Positive: 25, Negative: 38, Neutral: 12 } },
    { type: "Atrovent HFA (Ipratropium)", mentions: 59, sentiment: { Positive: 18, Negative: 20, Neutral: 21 } },
    { type: "Ciclesonide", mentions: 30, sentiment: { Positive: 4, Negative: 24, Neutral: 2 } },
    { type: "Breo Ellipta  (Fluticasone , Vilanterol)", mentions: 28, sentiment: { Positive: 16, Negative: 11, Neutral: 1 } },
    { type: "Cinqair (Reslizumab)", mentions: 26, sentiment: { Positive: 10, Negative: 1, Neutral: 15 } },
    { type: "Levalbuterol (Xopenex HFA)", mentions: 19, sentiment: { Positive: 6, Negative: 3, Neutral: 10 } },
    { type: "Mometasone", mentions: 18, sentiment: { Positive: 5, Negative: 2, Neutral: 11 } },
    { type: "Accolate (Zafirlukast)", mentions: 8, sentiment: { Positive: 3, Negative: 1, Neutral: 4 } },
    { type: "Cinqair", mentions: 4, sentiment: { Positive: 1, Negative: 3, Neutral: 0 } },
    { type: "Advair Diskus", mentions: 2, sentiment: { Positive: 0, Negative: 2, Neutral: 0 } },
    { type: "Accolate", mentions: 1, sentiment: { Positive: 0, Negative: 0, Neutral: 1 } }
  ],
  "Spain": [
    { type: "Albuterol (ProAir HFA, Ventolin HFA, Proventil)", mentions: 1822, sentiment: { Positive: 274, Negative: 1440, Neutral: 108 } },
    { type: "Singulair (Montelukast)", mentions: 774, sentiment: { Positive: 262, Negative: 416, Neutral: 96 } },
    { type: "AirDuo Digihaler (Fluticasone , Salmeterol)", mentions: 723, sentiment: { Positive: 186, Negative: 460, Neutral: 77 } },
    { type: "Symbicort (Budesonide , Formoterol)", mentions: 650, sentiment: { Positive: 84, Negative: 474, Neutral: 92 } },
    { type: "Nucala (Mepolizumab)", mentions: 371, sentiment: { Positive: 209, Negative: 69, Neutral: 93 } },
    { type: "Xolair (Omalizumab)", mentions: 355, sentiment: { Positive: 263, Negative: 35, Neutral: 57 } },
    { type: "Dulera (Mometasone + Formoterol)", mentions: 188, sentiment: { Positive: 83, Negative: 64, Neutral: 41 } },
    { type: "Dupixent (Dupilumab)", mentions: 184, sentiment: { Positive: 148, Negative: 15, Neutral: 21 } },
    { type: "Fasenra (Benralizumab)", mentions: 149, sentiment: { Positive: 126, Negative: 1, Neutral: 22 } },
    { type: "Tezspire (Tezepelumab)", mentions: 121, sentiment: { Positive: 40, Negative: 77, Neutral: 4 } },
    { type: "Advair Diskus", mentions: 38, sentiment: { Positive: 4, Negative: 31, Neutral: 3 } },
    { type: "Spiriva Respimat", mentions: 35, sentiment: { Positive: 1, Negative: 34, Neutral: 0 } },
    { type: "Atrovent HFA (Ipratropium)", mentions: 27, sentiment: { Positive: 3, Negative: 12, Neutral: 12 } },
    { type: "Beclomethasone", mentions: 25, sentiment: { Positive: 8, Negative: 2, Neutral: 15 } },
    { type: "Breo Ellipta  (Fluticasone , Vilanterol)", mentions: 22, sentiment: { Positive: 13, Negative: 9, Neutral: 0 } },
    { type: "Cinqair", mentions: 13, sentiment: { Positive: 11, Negative: 0, Neutral: 2 } },
    { type: "Advair Diskus (Fluticasone + Salmeterol)", mentions: 7, sentiment: { Positive: 0, Negative: 0, Neutral: 7 } },
    { type: "Fluticasone", mentions: 6, sentiment: { Positive: 0, Negative: 1, Neutral: 5 } },
    { type: "Breo Ellipta (Fluticasone , Vilanterol)", mentions: 6, sentiment: { Positive: 1, Negative: 0, Neutral: 5 } },
    { type: "Accolate", mentions: 5, sentiment: { Positive: 1, Negative: 4, Neutral: 0 } },
    { type: "Dulera (Mometasone , Formoterol)", mentions: 4, sentiment: { Positive: 2, Negative: 0, Neutral: 2 } },
    { type: "Ciclesonide", mentions: 4, sentiment: { Positive: 0, Negative: 0, Neutral: 4 } },
    { type: "Budesonide", mentions: 3, sentiment: { Positive: 1, Negative: 1, Neutral: 1 } },
    { type: "Cinqair (Reslizumab)", mentions: 2, sentiment: { Positive: 0, Negative: 1, Neutral: 1 } },
    { type: "Advair Diskus (Fluticasone , Salmeterol)", mentions: 2, sentiment: { Positive: 0, Negative: 2, Neutral: 0 } }
  ],
  "United Kingdom": [
    { type: "Singulair (Montelukast)", mentions: 10085, sentiment: { Positive: 2762, Negative: 5554, Neutral: 1769 } },
    { type: "Albuterol (ProAir HFA, Ventolin HFA, Proventil)", mentions: 7147, sentiment: { Positive: 1418, Negative: 5337, Neutral: 392 } },
    { type: "Symbicort (Budesonide , Formoterol)", mentions: 4964, sentiment: { Positive: 1122, Negative: 3370, Neutral: 472 } },
    { type: "AirDuo Digihaler (Fluticasone , Salmeterol)", mentions: 2864, sentiment: { Positive: 491, Negative: 1905, Neutral: 468 } },
    { type: "Dulera (Mometasone + Formoterol)", mentions: 1268, sentiment: { Positive: 400, Negative: 702, Neutral: 166 } },
    { type: "Xolair (Omalizumab)", mentions: 1181, sentiment: { Positive: 471, Negative: 537, Neutral: 173 } },
    { type: "Nucala (Mepolizumab)", mentions: 997, sentiment: { Positive: 383, Negative: 339, Neutral: 275 } },
    { type: "Tezspire (Tezepelumab)", mentions: 443, sentiment: { Positive: 287, Negative: 122, Neutral: 34 } },
    { type: "Dupixent (Dupilumab)", mentions: 411, sentiment: { Positive: 248, Negative: 134, Neutral: 29 } },
    { type: "Beclomethasone", mentions: 397, sentiment: { Positive: 100, Negative: 204, Neutral: 93 } },
    { type: "Fasenra (Benralizumab)", mentions: 354, sentiment: { Positive: 185, Negative: 126, Neutral: 43 } },
    { type: "Atrovent HFA (Ipratropium)", mentions: 326, sentiment: { Positive: 156, Negative: 90, Neutral: 80 } },
    { type: "Spiriva Respimat", mentions: 307, sentiment: { Positive: 104, Negative: 174, Neutral: 29 } },
    { type: "Advair Diskus", mentions: 163, sentiment: { Positive: 17, Negative: 99, Neutral: 47 } },
    { type: "Breo Ellipta  (Fluticasone , Vilanterol)", mentions: 98, sentiment: { Positive: 27, Negative: 53, Neutral: 18 } },
    { type: "Ciclesonide", mentions: 65, sentiment: { Positive: 33, Negative: 26, Neutral: 6 } },
    { type: "Accolate (Zafirlukast)", mentions: 36, sentiment: { Positive: 0, Negative: 30, Neutral: 6 } },
    { type: "Advair Diskus (Fluticasone + Salmeterol)", mentions: 33, sentiment: { Positive: 2, Negative: 3, Neutral: 28 } },
    { type: "Dulera (Mometasone , Formoterol)", mentions: 33, sentiment: { Positive: 1, Negative: 20, Neutral: 12 } },
    { type: "Cinqair", mentions: 28, sentiment: { Positive: 8, Negative: 10, Neutral: 10 } },
    { type: "Breo Ellipta (Fluticasone , Vilanterol)", mentions: 22, sentiment: { Positive: 1, Negative: 1, Neutral: 20 } },
    { type: "Fluticasone", mentions: 21, sentiment: { Positive: 0, Negative: 2, Neutral: 19 } },
    { type: "Accolate", mentions: 16, sentiment: { Positive: 8, Negative: 7, Neutral: 1 } },
    { type: "Budesonide", mentions: 9, sentiment: { Positive: 0, Negative: 0, Neutral: 9 } },
    { type: "Mometasone", mentions: 1, sentiment: { Positive: 0, Negative: 0, Neutral: 1 } },
    { type: "Levalbuterol (Xopenex HFA)", mentions: 1, sentiment: { Positive: 0, Negative: 1, Neutral: 0 } }
  ],
  "United States": [
    { type: "Albuterol (ProAir HFA, Ventolin HFA, Proventil)", mentions: 18498, sentiment: { Positive: 3169, Negative: 13375, Neutral: 1954 } },
    { type: "Singulair (Montelukast)", mentions: 12415, sentiment: { Positive: 3550, Negative: 7094, Neutral: 1771 } },
    { type: "Symbicort (Budesonide , Formoterol)", mentions: 5409, sentiment: { Positive: 1428, Negative: 3617, Neutral: 364 } },
    { type: "AirDuo Digihaler (Fluticasone , Salmeterol)", mentions: 3164, sentiment: { Positive: 465, Negative: 2343, Neutral: 356 } },
    { type: "Dulera (Mometasone + Formoterol)", mentions: 2563, sentiment: { Positive: 645, Negative: 1795, Neutral: 123 } },
    { type: "Nucala (Mepolizumab)", mentions: 1258, sentiment: { Positive: 458, Negative: 494, Neutral: 306 } },
    { type: "Dupixent (Dupilumab)", mentions: 789, sentiment: { Positive: 426, Negative: 284, Neutral: 79 } },
    { type: "Xolair (Omalizumab)", mentions: 507, sentiment: { Positive: 207, Negative: 158, Neutral: 142 } },
    { type: "Tezspire (Tezepelumab)", mentions: 430, sentiment: { Positive: 278, Negative: 127, Neutral: 25 } },
    { type: "Advair Diskus", mentions: 378, sentiment: { Positive: 38, Negative: 294, Neutral: 46 } },
    { type: "Breo Ellipta  (Fluticasone , Vilanterol)", mentions: 343, sentiment: { Positive: 62, Negative: 231, Neutral: 50 } },
    { type: "Atrovent HFA (Ipratropium)", mentions: 342, sentiment: { Positive: 136, Negative: 113, Neutral: 93 } },
    { type: "Beclomethasone", mentions: 253, sentiment: { Positive: 57, Negative: 146, Neutral: 50 } },
    { type: "Fasenra (Benralizumab)", mentions: 93, sentiment: { Positive: 41, Negative: 39, Neutral: 13 } },
    { type: "Advair Diskus (Fluticasone + Salmeterol)", mentions: 64, sentiment: { Positive: 5, Negative: 10, Neutral: 49 } },
    { type: "Breo Ellipta (Fluticasone , Vilanterol)", mentions: 60, sentiment: { Positive: 9, Negative: 6, Neutral: 45 } },
    { type: "Fluticasone", mentions: 56, sentiment: { Positive: 10, Negative: 5, Neutral: 41 } },
    { type: "Spiriva Respimat", mentions: 52, sentiment: { Positive: 19, Negative: 30, Neutral: 3 } },
    { type: "Ciclesonide", mentions: 39, sentiment: { Positive: 7, Negative: 25, Neutral: 7 } },
    { type: "Dulera (Mometasone , Formoterol)", mentions: 29, sentiment: { Positive: 5, Negative: 1, Neutral: 23 } },
    { type: "Accolate", mentions: 28, sentiment: { Positive: 20, Negative: 3, Neutral: 5 } },
    { type: "Budesonide", mentions: 24, sentiment: { Positive: 6, Negative: 3, Neutral: 15 } },
    { type: "Advair Diskus (Fluticasone , Salmeterol)", mentions: 22, sentiment: { Positive: 7, Negative: 2, Neutral: 13 } },
    { type: "Mometasone", mentions: 16, sentiment: { Positive: 4, Negative: 0, Neutral: 12 } },
    { type: "Accolate (Zafirlukast)", mentions: 12, sentiment: { Positive: 1, Negative: 3, Neutral: 8 } },
    { type: "Levalbuterol (Xopenex HFA)", mentions: 9, sentiment: { Positive: 2, Negative: 2, Neutral: 5 } },
    { type: "Cinqair", mentions: 8, sentiment: { Positive: 1, Negative: 6, Neutral: 1 } },
    { type: "Cinqair (Reslizumab)", mentions: 5, sentiment: { Positive: 0, Negative: 2, Neutral: 3 } }
  ]
};


export interface SentimentData {
  Positive: number | string;
  Negative: number | string;
  Neutral: number | string;
}

export interface SourceData {
  type: string;
  mentions: number | string;
  sentiment: SentimentData;
}

export interface GeographyData {
  country: string;
  mentions: number | string;
  sentiment: SentimentData;
}

export interface StakeholderData {
  group: string;
  mentions: number | string;
  sentiment: SentimentData;
}

export interface DrugClassData {
  type: string;
  mentions: number | string;
  sentiment: SentimentData;
}

export interface PatientJourneyStage {
  stage: string;
  Positive: number;
  Negative: number;
  Neutral: number;
}


export interface DrugStakeholderData {
  drugName: string;
  attributes: StakeholderAttribute[];
}

export interface StakeholderAttribute {
  stakeholder: string;
  mentions: number;
  Positive: number;
  PositivePct: string;
  Negative: number;
  NegativePct: string;
  Neutral: number;
  NeutralPct: string;
}

export const sourceSplit: SourceData[] = [{'type': 'Event-Based Interactions', 'mentions': '29.0% (35715)', 'sentiment': {'Positive': '38.3% (13683)', 'Negative': '41.0% (14650)', 'Neutral': '20.7% (7382)'}}, {'type': 'Social Media Brainwaves', 'mentions': '71.0% (87625)', 'sentiment': {'Positive': '23.8% (20833)', 'Negative': '66.3% (58085)', 'Neutral': '9.9% (8707)'}}]
export const geographySplit: GeographyData[] = [
  { country: "United States", mentions: "38.0% (46820)", sentiment: { Positive: "23.6% (11056)", Negative: "64.5% (30208)", Neutral: "11.9% (5556)" } },
  { country: "United Kingdom", mentions: "25.3% (31234)", sentiment: { Positive: "26.3% (8224)", Negative: "60.3% (18846)", Neutral: "13.3% (4164)" } },
  { country: "Germany", mentions: "9.6% (11858)", sentiment: { Positive: "34.9% (4140)", Negative: "51.8% (6148)", Neutral: "13.2% (1570)" } },
  { country: "Italy", mentions: "8.2% (10122)", sentiment: { Positive: "41.5% (4196)", Negative: "45.0% (4550)", Neutral: "13.6% (1376)" } },
  { country: "France", mentions: "4.9% (5996)", sentiment: { Positive: "35.1% (2107)", Negative: "52.0% (3116)", Neutral: "12.9% (773)" } },
  { country: "Spain", mentions: "4.5% (5527)", sentiment: { Positive: "31.1% (1720)", Negative: "57.0% (3148)", Neutral: "11.9% (659)" } },
  { country: "ROW", mentions: "9.5% (11777)", sentiment: { Positive: "26.1% (3073)", Negative: "57.1% (6719)", Neutral: "16.9% (1985)" } },
]


export const stakeholderSplit: StakeholderData[] =[
  { group: "Patients", mentions: "85.6% (105596)", sentiment: { Positive: "24.7% (26100)", Negative: "63.9% (67428)", Neutral: "11.4% (12068)" } },
  { group: "Physicians", mentions: "9.8% (12111)", sentiment: { Positive: "61.2% (7411)", Negative: "12.7% (1537)", Neutral: "26.1% (3163)" } },
  { group: "Caregivers / Family", mentions: "3.4% (4240)", sentiment: { Positive: "11.3% (481)", Negative: "76.9% (3259)", Neutral: "11.8% (500)" } },
  { group: "Payers / Insurers", mentions: "0.8% (926)", sentiment: { Positive: "44.1% (408)", Negative: "33.8% (313)", Neutral: "22.1% (205)" } },
  { group: "Pharmacists", mentions: "0.3% (323)", sentiment: { Positive: "15.2% (49)", Negative: "54.5% (176)", Neutral: "30.3% (98)" } },
  { group: "Patient Advocacy Groups", mentions: "0.1% (138)", sentiment: { Positive: "48.6% (67)", Negative: "15.9% (22)", Neutral: "35.5% (49)" } }
];

// group is stakeholder group

export const drugClassSplit: DrugClassData[] = [
  { type: "Albuterol (ProAir HFA, Ventolin HFA, Proventil)", mentions: `${((36267 / sampleAsthmaMentions) * 100).toFixed(1)}% (36267)`, sentiment: { Positive: `${((6770 / 36267) * 100).toFixed(1)}% (6770)`, Negative: `${((26275 / 36267) * 100).toFixed(1)}% (26275)`, Neutral: `${((3222 / 36267) * 100).toFixed(1)}% (3222)` } },
  { type: "Singulair (Montelukast)", mentions: `${((31001 / sampleAsthmaMentions) * 100).toFixed(1)}% (31001)`, sentiment: { Positive: `${((8791 / 31001) * 100).toFixed(1)}% (8791)`, Negative: `${((17236 / 31001) * 100).toFixed(1)}% (17236)`, Neutral: `${((4974 / 31001) * 100).toFixed(1)}% (4974)` } },
  { type: "Symbicort (Budesonide , Formoterol)", mentions: `${((18669 / sampleAsthmaMentions) * 100).toFixed(1)}% (18669)`, sentiment: { Positive: `${((4805 / 18669) * 100).toFixed(1)}% (4805)`, Negative: `${((11991 / 18669) * 100).toFixed(1)}% (11991)`, Neutral: `${((1873 / 18669) * 100).toFixed(1)}% (1873)` } },
  { type: "AirDuo Digihaler (Fluticasone , Salmeterol)", mentions: `${((10177 / sampleAsthmaMentions) * 100).toFixed(1)}% (10177)`, sentiment: { Positive: `${((2070 / 10177) * 100).toFixed(1)}% (2070)`, Negative: `${((6576 / 10177) * 100).toFixed(1)}% (6576)`, Neutral: `${((1531 / 10177) * 100).toFixed(1)}% (1531)` } },
  { type: "Dulera (Mometasone + Formoterol)", mentions: `${((5784 / sampleAsthmaMentions) * 100).toFixed(1)}% (5784)`, sentiment: { Positive: `${((1659 / 5784) * 100).toFixed(1)}% (1659)`, Negative: `${((3404 / 5784) * 100).toFixed(1)}% (3404)`, Neutral: `${((721 / 5784) * 100).toFixed(1)}% (721)` } },
  { type: "Nucala (Mepolizumab)", mentions: `${((4718 / sampleAsthmaMentions) * 100).toFixed(1)}% (4718)`, sentiment: { Positive: `${((2096 / 4718) * 100).toFixed(1)}% (2096)`, Negative: `${((1538 / 4718) * 100).toFixed(1)}% (1538)`, Neutral: `${((1084 / 4718) * 100).toFixed(1)}% (1084)` } },
  { type: "Xolair (Omalizumab)", mentions: `${((4394 / sampleAsthmaMentions) * 100).toFixed(1)}% (4394)`, sentiment: { Positive: `${((2475 / 4394) * 100).toFixed(1)}% (2475)`, Negative: `${((1287 / 4394) * 100).toFixed(1)}% (1287)`, Neutral: `${((632 / 4394) * 100).toFixed(1)}% (632)` } },
  { type: "Dupixent (Dupilumab)", mentions: `${((2994 / sampleAsthmaMentions) * 100).toFixed(1)}% (2994)`, sentiment: { Positive: `${((1719 / 2994) * 100).toFixed(1)}% (1719)`, Negative: `${((876 / 2994) * 100).toFixed(1)}% (876)`, Neutral: `${((399 / 2994) * 100).toFixed(1)}% (399)` } },
  { type: "Tezspire (Tezepelumab)", mentions: `${((2069 / sampleAsthmaMentions) * 100).toFixed(1)}% (2069)`, sentiment: { Positive: `${((1226 / 2069) * 100).toFixed(1)}% (1226)`, Negative: `${((687 / 2069) * 100).toFixed(1)}% (687)`, Neutral: `${((156 / 2069) * 100).toFixed(1)}% (156)` } },
  { type: "Beclomethasone", mentions: `${((1337 / sampleAsthmaMentions) * 100).toFixed(1)}% (1337)`, sentiment: { Positive: `${((584 / 1337) * 100).toFixed(1)}% (584)`, Negative: `${((439 / 1337) * 100).toFixed(1)}% (439)`, Neutral: `${((314 / 1337) * 100).toFixed(1)}% (314)` } },
  { type: "Fasenra (Benralizumab)", mentions: `${((1133 / sampleAsthmaMentions) * 100).toFixed(1)}% (1133)`, sentiment: { Positive: `${((748 / 1133) * 100).toFixed(1)}% (748)`, Negative: `${((255 / 1133) * 100).toFixed(1)}% (255)`, Neutral: `${((130 / 1133) * 100).toFixed(1)}% (130)` } },
  { type: "Atrovent HFA (Ipratropium)", mentions: `${((907 / sampleAsthmaMentions) * 100).toFixed(1)}% (907)`, sentiment: { Positive: `${((375 / 907) * 100).toFixed(1)}% (375)`, Negative: `${((272 / 907) * 100).toFixed(1)}% (272)`, Neutral: `${((260 / 907) * 100).toFixed(1)}% (260)` } },
  { type: "Breo Ellipta  (Fluticasone , Vilanterol)", mentions: `${((777 / sampleAsthmaMentions) * 100).toFixed(1)}% (777)`, sentiment: { Positive: `${((253 / 777) * 100).toFixed(1)}% (253)`, Negative: `${((430 / 777) * 100).toFixed(1)}% (430)`, Neutral: `${((94 / 777) * 100).toFixed(1)}% (94)` } },
  { type: "Spiriva Respimat", mentions: `${((727 / sampleAsthmaMentions) * 100).toFixed(1)}% (727)`, sentiment: { Positive: `${((208 / 727) * 100).toFixed(1)}% (208)`, Negative: `${((412 / 727) * 100).toFixed(1)}% (412)`, Neutral: `${((107 / 727) * 100).toFixed(1)}% (107)` } },
  { type: "Advair Diskus", mentions: `${((636 / sampleAsthmaMentions) * 100).toFixed(1)}% (636)`, sentiment: { Positive: `${((88 / 636) * 100).toFixed(1)}% (88)`, Negative: `${((450 / 636) * 100).toFixed(1)}% (450)`, Neutral: `${((98 / 636) * 100).toFixed(1)}% (98)` } },
  { type: "Dulera (Mometasone , Formoterol)", mentions: `${((279 / sampleAsthmaMentions) * 100).toFixed(1)}% (279)`, sentiment: { Positive: `${((86 / 279) * 100).toFixed(1)}% (86)`, Negative: `${((100 / 279) * 100).toFixed(1)}% (100)`, Neutral: `${((93 / 279) * 100).toFixed(1)}% (93)` } },
  { type: "Breo Ellipta (Fluticasone , Vilanterol)", mentions: `${((244 / sampleAsthmaMentions) * 100).toFixed(1)}% (244)`, sentiment: { Positive: `${((57 / 244) * 100).toFixed(1)}% (57)`, Negative: `${((77 / 244) * 100).toFixed(1)}% (77)`, Neutral: `${((110 / 244) * 100).toFixed(1)}% (110)` } },
  { type: "Fluticasone", mentions: `${((235 / sampleAsthmaMentions) * 100).toFixed(1)}% (235)`, sentiment: { Positive: `${((59 / 235) * 100).toFixed(1)}% (59)`, Negative: `${((79 / 235) * 100).toFixed(1)}% (79)`, Neutral: `${((97 / 235) * 100).toFixed(1)}% (97)` } },
  { type: "Ciclesonide", mentions: `${((228 / sampleAsthmaMentions) * 100).toFixed(1)}% (228)`, sentiment: { Positive: `${((125 / 228) * 100).toFixed(1)}% (125)`, Negative: `${((77 / 228) * 100).toFixed(1)}% (77)`, Neutral: `${((26 / 228) * 100).toFixed(1)}% (26)` } },
  { type: "Budesonide", mentions: `${((221 / sampleAsthmaMentions) * 100).toFixed(1)}% (221)`, sentiment: { Positive: `${((83 / 221) * 100).toFixed(1)}% (83)`, Negative: `${((63 / 221) * 100).toFixed(1)}% (63)`, Neutral: `${((75 / 221) * 100).toFixed(1)}% (75)` } },
  { type: "Advair Diskus (Fluticasone + Salmeterol)", mentions: `${((198 / sampleAsthmaMentions) * 100).toFixed(1)}% (198)`, sentiment: { Positive: `${((33 / 198) * 100).toFixed(1)}% (33)`, Negative: `${((54 / 198) * 100).toFixed(1)}% (54)`, Neutral: `${((111 / 198) * 100).toFixed(1)}% (111)` } },
  { type: "Advair Diskus (Fluticasone , Salmeterol)", mentions: `${((192 / sampleAsthmaMentions) * 100).toFixed(1)}% (192)`, sentiment: { Positive: `${((73 / 192) * 100).toFixed(1)}% (73)`, Negative: `${((79 / 192) * 100).toFixed(1)}% (79)`, Neutral: `${((40 / 192) * 100).toFixed(1)}% (40)` } },
  { type: "Accolate", mentions: `${((85 / sampleAsthmaMentions) * 100).toFixed(1)}% (85)`, sentiment: { Positive: `${((57 / 85) * 100).toFixed(1)}% (57)`, Negative: `${((20 / 85) * 100).toFixed(1)}% (20)`, Neutral: `${((8 / 85) * 100).toFixed(1)}% (8)` } },
  { type: "Cinqair", mentions: `${((83 / sampleAsthmaMentions) * 100).toFixed(1)}% (83)`, sentiment: { Positive: `${((37 / 83) * 100).toFixed(1)}% (37)`, Negative: `${((19 / 83) * 100).toFixed(1)}% (19)`, Neutral: `${((27 / 83) * 100).toFixed(1)}% (27)` } },
  { type: "Accolate (Zafirlukast)", mentions: `${((57 / sampleAsthmaMentions) * 100).toFixed(1)}% (57)`, sentiment: { Positive: `${((4 / 57) * 100).toFixed(1)}% (4)`, Negative: `${((34 / 57) * 100).toFixed(1)}% (34)`, Neutral: `${((19 / 57) * 100).toFixed(1)}% (19)` } },
  { type: "Mometasone", mentions: `${((46 / sampleAsthmaMentions) * 100).toFixed(1)}% (46)`, sentiment: { Positive: `${((18 / 46) * 100).toFixed(1)}% (18)`, Negative: `${((2 / 46) * 100).toFixed(1)}% (2)`, Neutral: `${((26 / 46) * 100).toFixed(1)}% (26)` } },
  { type: "Cinqair (Reslizumab)", mentions: `${((36 / sampleAsthmaMentions) * 100).toFixed(1)}% (36)`, sentiment: { Positive: `${((10 / 36) * 100).toFixed(1)}% (10)`, Negative: `${((4 / 36) * 100).toFixed(1)}% (4)`, Neutral: `${((22 / 36) * 100).toFixed(1)}% (22)` } },
  { type: "Levalbuterol (Xopenex HFA)", mentions: `${((29 / sampleAsthmaMentions) * 100).toFixed(1)}% (29)`, sentiment: { Positive: `${((8 / 29) * 100).toFixed(1)}% (8)`, Negative: `${((6 / 29) * 100).toFixed(1)}% (6)`, Neutral: `${((15 / 29) * 100).toFixed(1)}% (15)` } },
];

export const patientJourney: PatientJourneyStage[] = [
  { stage: "Access", Positive: 12.0, Negative: 81.0, Neutral: 7.0 },

  { stage: "Adherence", Positive: 23.0, Negative: 54.0, Neutral: 23.0 },

  { stage: "Affordability", Positive: 23.0, Negative: 73.0, Neutral: 4.0 },

  // QoL group: QoL + Quality of Life + Effectiveness/Efficacy/QoL
  { stage: "Quality of Life (QoL)", Positive: 58.33, Negative: 7.0, Neutral: 34.67 },

  // Clinical guidelines + Clinical guidance + Clinical recommendation
  { stage: "Clinical Guidelines", Positive: 0, Negative: 0, Neutral: 100 },

  // Effectiveness group: Effectiveness + Efficacy
  { stage: "Effectiveness / Efficacy", Positive: 24.5, Negative: 70.5, Neutral: 5 },

  { stage: "Asthma Awareness", Positive: 46.0, Negative: 31.0, Neutral: 23.0 },
  { stage: "Asthma Control Assessment", Positive: 100.0, Negative: 0, Neutral: 0 },
  { stage: "Asthma Education", Positive: 24.0, Negative: 21.0, Neutral: 54.0 },
  { stage: "Asthma Management", Positive: 0, Negative: 0, Neutral: 100.0 },

  // Biologics + Biologic perception + Biologics switching
  { stage: "Biologics", Positive: 15.67, Negative: 26.33, Neutral: 57.67 },

  // Biomarker
  { stage: "Biomarker usage", Positive: 33.0, Negative: 7.0, Neutral: 60.0 },

  // Confusion
  { stage: "Confusion", Positive: 0, Negative: 82.0, Neutral: 18.0 },

  // Cost + Cost-effectiveness
  { stage: "Cost", Positive: 57.0, Negative: 30.0, Neutral: 13.0 },

  // Delivery
  { stage: "Delivery Systems", Positive: 100.0, Negative: 0, Neutral: 0 },

  // Diagnosis
  { stage: "Diagnosis", Positive: 6.0, Negative: 67.0, Neutral: 27.0 },

  // Discontinuation
  { stage: "Discontinuation", Positive: 0, Negative: 0, Neutral: 100.0 },

  // Dosage
  { stage: "Dosage", Positive: 14.0, Negative: 50.0, Neutral: 36.0 },

  // Drug interactions
  { stage: "Drug Interactions", Positive: 0, Negative: 0, Neutral: 100.0 },

  // Emotion + Hope
  { stage: "Emotion", Positive: 63.5, Negative: 28.5, Neutral: 8 },

  // Perception + Generic drug perception
  { stage: "Perception", Positive: 8.0, Negative: 16.0, Neutral: 78.0 },

  // Home Admin
  { stage: "Home administration", Positive: 62.0, Negative: 33.0, Neutral: 4.0 },

  // Patient Satisfaction
  { stage: "Patient Satisfaction", Positive: 100.0, Negative: 0, Neutral: 0 },

  // Prescribing patterns
  { stage: "Prescribing Patterns", Positive: 0, Negative: 0, Neutral: 100.0 },

  // Research
  { stage: "Research", Positive: 0, Negative: 0, Neutral: 100.0 },

  // Safety
  { stage: "Safety", Positive: 12.0, Negative: 81.0, Neutral: 6.0 },

  // Specialist Referral
  { stage: "Specialist Referral", Positive: 32.0, Negative: 36.0, Neutral: 32.0 },

  // Symptoms
  { stage: "Symptoms", Positive: 16.0, Negative: 60.0, Neutral: 25.0 },

  // Technology Integration + Treatment Tracking
  { stage: "Technology Integration", Positive: 50.0, Negative: 0, Neutral: 50.0 },

  // Treatment Info (standalone)
  { stage: "Treatment Information", Positive: 0, Negative: 0, Neutral: 100.0 },

];


export const drugStakeholderData: DrugStakeholderData[] = [
  {
    drugName: "Albuterol (ProAir HFA, Ventolin HFA, Proventil)",
    attributes: [
      { stakeholder: "Patients", mentions: 30766, Positive: 5692, PositivePct: "18.5%", Negative: 22406, NegativePct: "72.8%", Neutral: 2639, NeutralPct: "8.6%" },
      { stakeholder: "Caregivers / Family", mentions: 1827, Positive: 218, PositivePct: "11.9%", Negative: 1389, NegativePct: "76.0%", Neutral: 220, NeutralPct: "12.0%" },
      { stakeholder: "Physicians", mentions: 822, Positive: 259, PositivePct: "31.5%", Negative: 342, NegativePct: "41.6%", Neutral: 221, NeutralPct: "26.9%" },
      { stakeholder: "Payers / Insurers", mentions: 117, Positive: 91, PositivePct: "77.8%", Negative: 24, NegativePct: "20.5%", Neutral: 2, NeutralPct: "1.7%" },
      { stakeholder: "Pharmacists", mentions: 78, Positive: 27, PositivePct: "34.6%", Negative: 46, NegativePct: "59.0%", Neutral: 5, NeutralPct: "6.4%" }
    ]
  },
  {
    drugName: "Singulair (Montelukast)",
    attributes: [
      { stakeholder: "Patients", mentions: 27501, Positive: 7318, PositivePct: "26.6%", Negative: 15610, NegativePct: "56.8%", Neutral: 4385, NeutralPct: "15.9%" },
      { stakeholder: "Caregivers / Family", mentions: 1232, Positive: 90, PositivePct: "7.3%", Negative: 981, NegativePct: "79.6%", Neutral: 158, NeutralPct: "12.8%" },
      { stakeholder: "Physicians", mentions: 724, Positive: 273, PositivePct: "37.7%", Negative: 180, NegativePct: "24.9%", Neutral: 260, NeutralPct: "35.9%" },
      { stakeholder: "Not Detected", mentions: 350, Positive: 0, PositivePct: "0.0%", Negative: 3, NegativePct: "0.9%", Neutral: 17, NeutralPct: "4.9%" },
      { stakeholder: "Pharmacists", mentions: 62, Positive: 3, PositivePct: "4.8%", Negative: 57, NegativePct: "91.9%", Neutral: 2, NeutralPct: "3.2%" }
    ]
  },
  {
    drugName: "Symbicort (Budesonide , Formoterol)",
    attributes: [
      { stakeholder: "Patients", mentions: 17210, Positive: 4355, PositivePct: "25.3%", Negative: 11327, NegativePct: "65.8%", Neutral: 1470, NeutralPct: "8.5%" },
      { stakeholder: "Caregivers / Family", mentions: 373, Positive: 19, PositivePct: "5.1%", Negative: 278, NegativePct: "74.5%", Neutral: 75, NeutralPct: "20.1%" },
      { stakeholder: "Physicians", mentions: 343, Positive: 182, PositivePct: "53.1%", Negative: 38, NegativePct: "11.1%", Neutral: 123, NeutralPct: "35.9%" },
      { stakeholder: "Not Detected", mentions: 172, Positive: 0, PositivePct: "0.0%", Negative: 0, NegativePct: "0.0%", Neutral: 7, NeutralPct: "4.1%" },
      { stakeholder: "Pharmacists", mentions: 80, Positive: 9, PositivePct: "11.3%", Negative: 43, NegativePct: "53.8%", Neutral: 28, NeutralPct: "35.0%" },
      { stakeholder: "Payers / Insurers", mentions: 68, Positive: 40, PositivePct: "58.8%", Negative: 28, NegativePct: "41.2%", Neutral: 0, NeutralPct: "0.0%" }
    ]
  },
  {
    drugName: "AirDuo Digihaler (Fluticasone , Salmeterol)",
    attributes: [
      { stakeholder: "Patients", mentions: 7401, Positive: 1091, PositivePct: "14.7%", Negative: 5610, NegativePct: "75.8%", Neutral: 679, NeutralPct: "9.2%" },
      { stakeholder: "Physicians", mentions: 2069, Positive: 794, PositivePct: "38.4%", Negative: 423, NegativePct: "20.4%", Neutral: 852, NeutralPct: "41.2%" },
      { stakeholder: "Caregivers / Family", mentions: 315, Positive: 3, PositivePct: "1.0%", Negative: 297, NegativePct: "94.3%", Neutral: 15, NeutralPct: "4.8%" },
      { stakeholder: "Payers / Insurers", mentions: 311, Positive: 97, PositivePct: "31.2%", Negative: 152, NegativePct: "48.9%", Neutral: 62, NeutralPct: "19.9%" },
      { stakeholder: "Not Detected", mentions: 114, Positive: 0, PositivePct: "0.0%", Negative: 0, NegativePct: "0.0%", Neutral: 5, NeutralPct: "4.4%" }
    ]
  },
  {
    drugName: "Dulera (Mometasone + Formoterol)",
    attributes: [
      { stakeholder: "Patients", mentions: 4771, Positive: 1116, PositivePct: "23.4%", Negative: 3243, NegativePct: "68.0%", Neutral: 405, NeutralPct: "8.5%" },
      { stakeholder: "Physicians", mentions: 767, Positive: 439, PositivePct: "57.2%", Negative: 71, NegativePct: "9.3%", Neutral: 257, NeutralPct: "33.5%" },
      { stakeholder: "Not Detected", mentions: 147, Positive: 0, PositivePct: "0.0%", Negative: 0, NegativePct: "0.0%", Neutral: 42, NeutralPct: "28.6%" },
      { stakeholder: "Caregivers / Family", mentions: 128, Positive: 49, PositivePct: "38.3%", Negative: 79, NegativePct: "61.7%", Neutral: 0, NeutralPct: "0.0%" },
      { stakeholder: "Payers / Insurers", mentions: 96, Positive: 56, PositivePct: "58.3%", Negative: 14, NegativePct: "14.6%", Neutral: 26, NeutralPct: "27.1%" }
    ]
  },
  {
    drugName: "Nucala (Mepolizumab)",
    attributes: [
      { stakeholder: "Patients", mentions: 2808, Positive: 971, PositivePct: "34.6%", Negative: 1253, NegativePct: "44.6%", Neutral: 574, NeutralPct: "20.4%" },
      { stakeholder: "Physicians", mentions: 1616, Positive: 1011, PositivePct: "62.6%", Negative: 153, NegativePct: "9.5%", Neutral: 451, NeutralPct: "27.9%" },
      { stakeholder: "Payers / Insurers", mentions: 78, Positive: 29, PositivePct: "37.2%", Negative: 37, NegativePct: "47.4%", Neutral: 12, NeutralPct: "15.4%" }
    ]
  },
  {
    drugName: "Xolair (Omalizumab)",
    attributes: [
      { stakeholder: "Patients", mentions: 2326, Positive: 937, PositivePct: "40.3%", Negative: 1101, NegativePct: "47.3%", Neutral: 265, NeutralPct: "11.4%" },
      { stakeholder: "Physicians", mentions: 1483, Positive: 1149, PositivePct: "77.5%", Negative: 85, NegativePct: "5.7%", Neutral: 249, NeutralPct: "16.8%" },
      { stakeholder: "Not Detected", mentions: 246, Positive: 0, PositivePct: "0.0%", Negative: 0, NegativePct: "0.0%", Neutral: 4, NeutralPct: "1.6%" },
      { stakeholder: "Payers / Insurers", mentions: 125, Positive: 46, PositivePct: "36.8%", Negative: 31, NegativePct: "24.8%", Neutral: 48, NeutralPct: "38.4%" }
    ]
  },
  {
    drugName: "Dupixent (Dupilumab)",
    attributes: [
      { stakeholder: "Patients", mentions: 1778, Positive: 837, PositivePct: "47.1%", Negative: 703, NegativePct: "39.5%", Neutral: 238, NeutralPct: "13.4%" },
      { stakeholder: "Physicians", mentions: 895, Positive: 717, PositivePct: "80.1%", Negative: 69, NegativePct: "7.7%", Neutral: 109, NeutralPct: "12.2%" }
    ]
  },
  {
    drugName: "Tezspire (Tezepelumab)",
    attributes: [
      { stakeholder: "Patients", mentions: 1749, Positive: 955, PositivePct: "54.6%", Negative: 667, NegativePct: "38.1%", Neutral: 121, NeutralPct: "6.9%" },
      { stakeholder: "Physicians", mentions: 232, Positive: 217, PositivePct: "93.5%", Negative: 2, NegativePct: "0.9%", Neutral: 13, NeutralPct: "5.6%" }
    ]
  },
  {
    drugName: "Breo Ellipta  (Fluticasone , Vilanterol)",
    attributes: [
      { stakeholder: "Patients", mentions: 726, Positive: 237, PositivePct: "32.6%", Negative: 401, NegativePct: "55.2%", Neutral: 88, NeutralPct: "12.1%" }
    ]
  },
  {
    drugName: "Spiriva Respimat",
    attributes: [
      { stakeholder: "Patients", mentions: 716, Positive: 200, PositivePct: "27.9%", Negative: 410, NegativePct: "57.3%", Neutral: 103, NeutralPct: "14.4%" }
    ]
  },
  {
    drugName: "Beclomethasone",
    attributes: [
      { stakeholder: "Physicians", mentions: 673, Positive: 440, PositivePct: "65.4%", Negative: 50, NegativePct: "7.4%", Neutral: 183, NeutralPct: "27.2%" },
      { stakeholder: "Patients", mentions: 567, Positive: 113, PositivePct: "19.9%", Negative: 347, NegativePct: "61.2%", Neutral: 106, NeutralPct: "18.7%" }
    ]
  },
  {
    drugName: "Advair Diskus",
    attributes: [
      { stakeholder: "Patients", mentions: 605, Positive: 88, PositivePct: "14.5%", Negative: 419, NegativePct: "69.3%", Neutral: 98, NeutralPct: "16.2%" }
    ]
  },
  {
    drugName: "Atrovent HFA (Ipratropium)",
    attributes: [
      { stakeholder: "Patients", mentions: 597, Positive: 246, PositivePct: "41.2%", Negative: 231, NegativePct: "38.7%", Neutral: 119, NeutralPct: "19.9%" },
      { stakeholder: "Physicians", mentions: 271, Positive: 104, PositivePct: "38.4%", Negative: 39, NegativePct: "14.4%", Neutral: 128, NeutralPct: "47.2%" },
      { stakeholder: "Not Detected", mentions: 90, Positive: 0, PositivePct: "0.0%", Negative: 0, NegativePct: "0.0%", Neutral: 5, NeutralPct: "5.6%" }
    ]
  },
  {
    drugName: "Fasenra (Benralizumab)",
    attributes: [
      { stakeholder: "Patients", mentions: 563, Positive: 281, PositivePct: "49.9%", Negative: 226, NegativePct: "40.1%", Neutral: 51, NeutralPct: "9.1%" },
      { stakeholder: "Physicians", mentions: 444, Positive: 404, PositivePct: "91.0%", Negative: 1, NegativePct: "0.2%", Neutral: 39, NeutralPct: "8.8%" }
    ]
  },
  {
    drugName: "Ciclesonide",
    attributes: [
      { stakeholder: "Patients", mentions: 122, Positive: 36, PositivePct: "29.5%", Negative: 74, NegativePct: "60.7%", Neutral: 12, NeutralPct: "9.8%" },
      { stakeholder: "Physicians", mentions: 98, Positive: 87, PositivePct: "88.8%", Negative: 0, NegativePct: "0.0%", Neutral: 11, NeutralPct: "11.2%" }
    ]
  },
  {
    drugName: "Accolate",
    attributes: [
      { stakeholder: "Physicians", mentions: 58, Positive: 41, PositivePct: "70.7%", Negative: 12, NegativePct: "20.7%", Neutral: 5, NeutralPct: "8.6%" }
    ]
  }
];


export const keyInsights = {
  painPoints: [
    "Delayed diagnosis is a major concern, with patients reporting multiple visits before proper diagnosis",
    "Treatment escalation often needed, indicating unmet needs in initial therapy",
    "Switching driven by insurance rather than clinical need causes frustration",
    "Cost barriers prevent access to biologics for many patients"
  ],
  unmetNeeds: [
    "Better early detection and awareness programs needed",
    "More affordable biologic options for patients",
    "Simplified treatment regimens to improve adherence",
    "Patient education on symptom recognition and management"
  ],
  opportunities: [
    "Digital health tools for symptom monitoring and early intervention",
    "Patient support programs to improve adherence and persistence",
    "Real-world evidence generation to support treatment pathways",
    "Biosimilars and generic options to improve access"
  ]
};
