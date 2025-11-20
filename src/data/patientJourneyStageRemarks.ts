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