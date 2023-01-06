const configureStore = require("@reduxjs/toolkit").configureStore;
const carReducer = require("../features/car/carSlice");
const bikeReducer = require("../features/bike/bikeSlice");
const userReducer = require("../features/user/userSlice");

const reduxLogger = require("redux-logger");
const logger = reduxLogger.createLogger();

const store = configureStore({
  reducer: {
    car: carReducer,
    bike: bikeReducer,
    user: userReducer,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

module.exports = store;
