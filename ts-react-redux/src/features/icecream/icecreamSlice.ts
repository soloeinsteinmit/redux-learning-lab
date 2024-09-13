import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { orderCake as cakeOrdered } from "../cake/cakeSlice";

export interface IcecreamShop {
  numOfIcecream: number;
}
const initialState: IcecreamShop = {
  numOfIcecream: 20,
};

export const icecreamSlice = createSlice({
  name: "icecream",
  initialState,
  reducers: {
    orderIcecream: (state) => {
      state.numOfIcecream--;
    },
    restockIcecream: (state, action: PayloadAction<number>) => {
      state.numOfIcecream += action.payload;
    },
  },
  // extra reducers helps respond to other state actions
  //   first approach
  //   extraReducers: {
  //     ["cake/ordered"]: (state, action) => {
  //       state.numOfIcecream--;
  //     },
  //   },

  //   second
  extraReducers: (builder) => {
    builder.addCase(cakeOrdered, (state) => {
      state.numOfIcecream--;
    });
  },
});

export const { orderIcecream, restockIcecream } = icecreamSlice.actions;
export default icecreamSlice.reducer;
