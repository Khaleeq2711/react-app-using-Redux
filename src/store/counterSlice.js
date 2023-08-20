import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState: { counter: 0, showCounter: true },
    reducers: {
      increment(state, action) {
        state.counter = state.counter + action.payload;
      },
      decrement(state, action) {
        state.counter = state.counter - action.payload;
      },
      reset(state) {
        state.counter = 0;
        state.showCounter = true;
      },
      toggle(state) {
        state.showCounter = !state.showCounter;
      },
    },
  });

  export default counterSlice;