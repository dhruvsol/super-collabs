import { createSlice } from "@reduxjs/toolkit";
import { useAppSelector } from "../store/hooks";
import { RootState } from "../store/store";

interface CounterState {
  value: number;
  addressKey: string;
}
const initialState: CounterState = {
  value: 0,
  addressKey: "",
};

export const counter = createSlice({
  name: "counter",
  initialState,
  reducers: {
    changeTab: (state: { value: any }, action: { payload: any }) => {
      state.value = action.payload;
    },
    setAddress: (state: { addressKey: any }, action: { payload: any }) => {
      state.addressKey = action.payload;
    },
  },
});
export const addressKey = (state: RootState) => state.Counter.addressKey;
export const { changeTab, setAddress } = counter.actions;
export default counter.reducer;
