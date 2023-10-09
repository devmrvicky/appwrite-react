import { configureStore } from "@reduxjs/toolkit";
import { authReducer, loadingReducer, noteReducer } from "../features";

const store = configureStore({
  reducer: {
    auth: authReducer,
    loading: loadingReducer,
    notes: noteReducer,
  },
});

export default store;
