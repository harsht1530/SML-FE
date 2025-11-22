import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type SentimentData = {
  Positive: number | string;
  Negative: number | string;
  Neutral: number | string;
};

export type SourceData = {
  type: string;
  mentions: number | string;
  sentiment: SentimentData;
};

const initialState: SourceData[] = [];

const sourceSplitSlice = createSlice({
  name: "sourceSplit",
  initialState,
  reducers: {
    setSourceSplit(state, action: PayloadAction<SourceData[]>) {
      return action.payload || [];
    },
    clearSourceSplit() {
      return [] as SourceData[];
    },
  },
});

export const { setSourceSplit, clearSourceSplit } = sourceSplitSlice.actions;
export default sourceSplitSlice.reducer;
