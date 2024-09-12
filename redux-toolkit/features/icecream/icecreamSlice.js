const createSlice = require("@reduxjs/toolkit").createSlice;
const cakeActions = require("../cake/cakeSlice").cakeAction;

const initialState = {
  numOfIcecream: 20,
};

const IcreamSlice = createSlice({
  name: "icecream",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfIcecream--;
    },
    restock: (state, action) => {
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
    builder.addCase(cakeActions.ordered, (state) => {
      state.numOfIcecream--;
    });
  },
});

module.export = IcreamSlice.reducer;
module.export.icecreamActions = IcreamSlice.actions;
