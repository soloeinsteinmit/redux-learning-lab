import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CakeStore {
  numOfCakes: number;
}

const initialState: CakeStore = {
  numOfCakes: 10,
};

export const cakeSlice = createSlice({
  name: "name",
  initialState,
  reducers: {
    orderCake: (state) => {
      state.numOfCakes -= 1;
    },
    restockCake: (state, action: PayloadAction<number>) => {
      state.numOfCakes += action.payload;
    },
  },
});

export const { orderCake, restockCake } = cakeSlice.actions;

export default cakeSlice.reducer;
