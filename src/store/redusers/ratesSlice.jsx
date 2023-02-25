import { createSlice } from "@reduxjs/toolkit";
import { rateApi } from "./rateApi";

const initialState = {
  allRates: [],
}

const rateSlice = createSlice({
  name: 'rates',
  initialState,
  reducers:{ 

  },
  extraReducers(builder) {
    builder
      .addMatcher(rateApi.endpoints.getRates.matchFulfilled, (state, { payload }) => {
        state.allRates = payload;
      })
  },
})

export const {
} = rateSlice.actions
export const rateReducer = rateSlice.reducer  