import React, { useEffect, useState } from "react";
import { Nav } from "./components";
import { Outlet } from "react-router-dom";
import authService from "./appwrite/authService";
import { useDispatch } from "react-redux";
import { login } from "./features/authSlice";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getUser()
      .then((res) => {
        if (res) {
          dispatch(login(res));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  });

  return !isLoading ? (
    <div>
      <Nav />
      <Outlet />
    </div>
  ) : null;
};

export default App;
