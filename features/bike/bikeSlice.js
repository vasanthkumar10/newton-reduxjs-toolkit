const createSlice = require("@reduxjs/toolkit").createSlice;

const initialState = {
  numOfBikes: 20,
};

const bikeSlice = createSlice({
  name: "bike",
  initialState,
  reducers: {
    buyBike: (state, action) => {
      state.numOfBikes = state.numOfBikes - 1;
    },
    sellBike: (state, action) => {
      state.numOfBikes = state.numOfBikes + action.payload;
    },
  },
});

module.exports = bikeSlice.reducer;
module.exports.bikeActions = bikeSlice.actions;
