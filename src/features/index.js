import authReducer, {
  login,
  logout,
  toggleMenu,
  updateData,
} from "./authSlice";
import loadingReducer, { start, end } from "./loadingSlice";

export {
  authReducer,
  loadingReducer,
  login,
  logout,
  toggleMenu,
  updateData,
  start,
  end,
};
