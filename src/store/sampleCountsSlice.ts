import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface SampleCountsState {
  countriesInScope?: string[];
  asthmaSources?: number;
  totalAsthmaConversations?: number;
  asthmaDrugMentions?: string | number;
  biologicsDrugMentions?: number | string;
}

const initialState: SampleCountsState = {};

const slice = createSlice({
  name: "sampleCounts",
  initialState,
  reducers: {
    setSampleCounts(state, action: PayloadAction<SampleCountsState>) {
      return { ...state, ...action.payload };
    },
    clearSampleCounts() {
      return {} as SampleCountsState;
    },
  },
});

export const { setSampleCounts, clearSampleCounts } = slice.actions;
export default slice.reducer;
