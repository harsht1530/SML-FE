import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface DrugClassItem {
  type: string;
  mentions: number;
  sentiment?: { Positive?: number; Negative?: number; Neutral?: number };
}

const initialState: DrugClassItem[] = [];

const slice = createSlice({
  name: "drugClass",
  initialState,
  reducers: {
    setDrugClassSplit(state, action: PayloadAction<DrugClassItem[]>) {
      return action.payload;
    },
    clearDrugClassSplit() {
      return [] as DrugClassItem[];
    },
  },
});

export const { setDrugClassSplit, clearDrugClassSplit } = slice.actions;
export default slice.reducer;
