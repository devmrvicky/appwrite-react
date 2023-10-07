import React, { useEffect, useState } from "react";
import { Nav, Loading, Footer } from "./components";
import { Outlet, useNavigate } from "react-router-dom";
import authService from "./appwrite/authService";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, toggleMenu } from "./features";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const isWorking = useSelector((store) => store.loading.loading);
  // const {menuOpen} = useSelector((store) => store.auth);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("from app.jsx useEffect hook");
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
    dispatch(toggleMenu(false));
  }, [navigate]);

  return !isLoading ? (
    <div>
      <Nav />
      <main className="w-full min-h-screen h-screen">
        <Outlet />
        {isWorking && <Loading />}
      </main>
      <Footer />
    </div>
  ) : null;
};

export default App;
