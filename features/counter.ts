import { createSlice } from "@reduxjs/toolkit";

interface CounterState {
  value: number;
}
const initialState: CounterState = {
  value: 0,
};

export const counter = createSlice({
  name: "counter",
  initialState,
  reducers: {
    changeTab: (state: { value: any }, action: { payload: any }) => {
      state.value = action.payload;
    },
  },
});
export const { changeTab } = counter.actions;
export default counter.reducer;
