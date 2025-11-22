import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type CountryDrugClassMap = Record<
  string,
  Array<{
    type: string;
    mentions: number;
    sentiment?: { Positive?: number; Negative?: number; Neutral?: number };
  }>
>;

const initialState: CountryDrugClassMap = {};

const slice = createSlice({
  name: "countryDrugClass",
  initialState,
  reducers: {
    setCountryDrugClassMap(state, action: PayloadAction<CountryDrugClassMap>) {
      return { ...state, ...action.payload };
    },
    clearCountryDrugClassMap() {
      return {} as CountryDrugClassMap;
    },
  },
});

export const { setCountryDrugClassMap, clearCountryDrugClassMap } =
  slice.actions;
export default slice.reducer;
