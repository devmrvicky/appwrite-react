import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout as authLogout, start, end, toggleMenu } from "../../features";
import { NavLink, useNavigate } from "react-router-dom";
import authService from "../../appwrite/authService";

const AuthorMenu = () => {
  const { status } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const menus = [
    {
      item: "Login",
      path: "/login",
      status: !status,
    },
    {
      item: "Signup",
      path: "/signup",
      status: !status,
    },
    {
      item: "User setting",
      path: "/user-setting",
      status: status,
    },
  ];

  const hideMenus = () => {
    dispatch(toggleMenu(false));
  };

  const logout = async () => {
    try {
      dispatch(start());
      const deleteSession = await authService.logout();
      console.log(deleteSession);
      if (deleteSession) {
        dispatch(authLogout());
        navigate("/");
      }
    } catch (error) {
      console.log("logout " + error.message);
    } finally {
      dispatch(end());
    }
  };

  return (
    <div
      className="fixed w-full h-full top-0 left-0 overflow-hidden "
      onClick={hideMenus}
    >
      <div className="border p-2 bg-white shadow-md flex flex-col rounded gap-2 absolute top-14 w-56 right-2">
        {menus.map(
          (menu) =>
            menu.status && (
              <button key={menu.item} className="flex">
                <NavLink
                  to={menu.path}
                  className={({ isActive }) =>
                    isActive
                      ? `px-4 py-2 text-left hover:bg-zinc-50 w-full bg-zinc-100/50 cursor-pointer`
                      : "px-4 py-2 text-left hover:bg-zinc-50 w-full cursor-pointer"
                  }
                >
                  {menu.item}
                </NavLink>
              </button>
            )
        )}
        {status && (
          <button
            onClick={logout}
            className="px-4 py-2 text-left hover:bg-zinc-50 w-full cursor-pointer"
          >
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default AuthorMenu;
