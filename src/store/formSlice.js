import { createSlice } from "@reduxjs/toolkit";


const formSlice = createSlice({
    name: "form",
    initialState: { authentication: false },
    reducers: {
      login(state) {state.authentication=true},
      logout(state){state.authentication= false}
    },
  });

  export default formSlice;