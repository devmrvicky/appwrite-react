import authReducer, {
  login,
  logout,
  toggleMenu,
  updateData,
} from "./authSlice";
import loadingReducer, { start, end } from "./loadingSlice";
import noteReducer, { add, addAllNotes } from "./noteSlice";

export {
  authReducer,
  loadingReducer,
  login,
  logout,
  toggleMenu,
  updateData,
  start,
  end,
  noteReducer,
  add,
  addAllNotes,
};
