// import { createStore, combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import formSlice from "./formSlice";
// import {composeWithDevTools} from 'redux-devtools-extensinpm start

//Can also Export action.type and use it..so that you can't Mess...

//counterSlice.js

//formSlice.jss

export const store = configureStore({
  reducer: {
    counterReducer: counterSlice.reducer,
    formReducer: formSlice.reducer,
  },
});

export const counterActions = counterSlice.actions;
export const formActions = formSlice.actions;
// const counterSubscriber = () => {
//   const latestState = store.getState();
//   console.log(latestState);
// };

// store.subscribe(counterSubscriber);

// export default store;

//another way..........without using redux toolkit....

// const counterReducer = (state = { counter: 0, showCounter: true }, action) => {
//   if (action.type === "INCRESE") {
//     // state.counter++;  Wrong...Should Never Change the State..
//     return {
//       counter: state.counter + action.payload,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === "DECRESE") {
//     return {
//       counter: state.counter - action.payload,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === "RESET") {
//     return { counter: 0, showCounter: true };
//   }
//   if (action.type === "TOGGLE") {
//     return { counter: state.counter, showCounter: !state.showCounter };
//   }
//   return state;
// };

// export const store = createStore(
//   combineReducers({
//     counterReducer: counterReducer,
//   })
// );
