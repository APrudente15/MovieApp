import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import allReducers from "./reducer";

const store = configureStore({
  reducer: allReducers,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger)
});

export default store;
