const store = require("./app/store");
const carActions = require("./features/car/carSlice").carActions;
const bikeActions = require("./features/bike/bikeSlice").bikeActions;
const fetchUsers = require("./features/user/userSlice").fetchUsers;

console.log("Initial state -> ", store.getState());
store.subscribe(() => {
  //   console.log("Updated state is ", store.getState());
});

store.dispatch(fetchUsers());

store.dispatch(carActions.buyCar());
store.dispatch(carActions.buyCar());
store.dispatch(carActions.buyCar());
store.dispatch(carActions.sellCar(2));

store.dispatch(bikeActions.buyBike());
store.dispatch(bikeActions.buyBike());
store.dispatch(bikeActions.buyBike());
store.dispatch(bikeActions.sellBike(3));
