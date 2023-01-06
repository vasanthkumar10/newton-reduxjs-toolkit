const createSlice = require("@reduxjs/toolkit").createSlice;

const initialState = {
  numOfCars: 10,
};

const carSlice = createSlice({
  name: "car",
  initialState,
  reducers: {
    buyCar: (state, action) => {
      state.numOfCars = state.numOfCars - 1;
    },
    sellCar: (state, action) => {
      state.numOfCars = state.numOfCars + action.payload;
    },
  },
});

module.exports = carSlice.reducer;
module.exports.carActions = carSlice.actions;
