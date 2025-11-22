import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type SentimentData = {
  Positive: number | string;
  Negative: number | string;
  Neutral: number | string;
};

export type StakeholderData = {
  group: string;
  mentions: number | string;
  sentiment: SentimentData;
};

const initialState: StakeholderData[] = [];

const stakeholderSlice = createSlice({
  name: "stakeholderSplit",
  initialState,
  reducers: {
    setStakeholderSplit(state, action: PayloadAction<StakeholderData[]>) {
      return action.payload || [];
    },
    clearStakeholderSplit() {
      return [] as StakeholderData[];
    },
  },
});

export const { setStakeholderSplit, clearStakeholderSplit } =
  stakeholderSlice.actions;
export default stakeholderSlice.reducer;
