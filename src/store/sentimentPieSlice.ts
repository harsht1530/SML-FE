import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface SentimentPieData {
  Positive: { count: number; percentage: number };
  Negative: { count: number; percentage: number };
  Neutral: { count: number; percentage: number };
}

const initialState: SentimentPieData = {
  Positive: { count: 0, percentage: 0 },
  Negative: { count: 0, percentage: 0 },
  Neutral: { count: 0, percentage: 0 },
};

const sentimentPieSlice = createSlice({
  name: "sentimentPieData",
  initialState,
  reducers: {
    setSentimentPieData(state, action: PayloadAction<SentimentPieData>) {
      return action.payload || initialState;
    },
    clearSentimentPieData() {
      return initialState;
    },
  },
});

export const { setSentimentPieData, clearSentimentPieData } = sentimentPieSlice.actions;
export default sentimentPieSlice.reducer;
