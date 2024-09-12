const createSlice = require("@reduxjs/toolkit").createSlice;

const initialState = {
  numOfCakes: 10,
};

const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfCakes--;
    },
    restock: (state, action) => {
      state.numOfCakes += action.payload;
    },
  },
});

module.export = cakeSlice.reducer;
module.export.cakeActions = cakeSlice.actions;
