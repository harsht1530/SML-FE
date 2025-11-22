import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type PatientJourneyStage = {
  stage: string;
  Positive: number;
  Negative: number;
  Neutral: number;
};

const initialState: PatientJourneyStage[] = [];

const patientJourneySlice = createSlice({
  name: "patientJourney",
  initialState,
  reducers: {
    setPatientJourney(state, action: PayloadAction<PatientJourneyStage[]>) {
      return action.payload || [];
    },
    clearPatientJourney() {
      return [] as PatientJourneyStage[];
    },
  },
});

export const { setPatientJourney, clearPatientJourney } =
  patientJourneySlice.actions;
export default patientJourneySlice.reducer;
