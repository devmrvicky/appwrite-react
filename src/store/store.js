import { configureStore } from "@reduxjs/toolkit";
import { authReducer, loadingReducer } from "../features";

const store = configureStore({
  reducer: {
    auth: authReducer,
    loading: loadingReducer,
  },
});

export default store;
