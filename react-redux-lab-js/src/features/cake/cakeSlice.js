import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numOfCakes: 10,
};

export const cakeSlice = createSlice({
  name: "name",
  initialState,
  reducers: {
    orderCake: (state) => {
      state.numOfCakes -= 1;
    },
    restockCake: (state, action) => {
      state.numOfCakes += action.payload;
    },
  },
});

export const { orderCake, restockCake } = cakeSlice.actions;

export default cakeSlice.reducer;
