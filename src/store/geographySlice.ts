import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type SentimentData = {
  Positive: number | string;
  Negative: number | string;
  Neutral: number | string;
};

export type GeographyData = {
  country: string;
  mentions: number | string;
  sentiment: SentimentData;
};

const initialState: GeographyData[] = [];

const geographySlice = createSlice({
  name: "geographySplit",
  initialState,
  reducers: {
    setGeographySplit(state, action: PayloadAction<GeographyData[]>) {
      return action.payload || [];
    },
    clearGeographySplit() {
      return [] as GeographyData[];
    },
  },
});

export const { setGeographySplit, clearGeographySplit } =
  geographySlice.actions;
export default geographySlice.reducer;
