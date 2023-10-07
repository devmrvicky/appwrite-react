import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const UserProfileSetting = () => {
  return <h1 className="text-2xl font-semibold p-3">User Profile setting</h1>;
};

const UserSetting = () => {
  return (
    <div className="flex h-full">
      <div className="left-side border-r w-1/4 h-full flex flex-col gap-3">
        <p className="text-2xl text-center p-3 border-b">Setting</p>
        <div className="text-lg flex hover:bg-zinc-100/50">
          <NavLink
            to="profile"
            className={({ isActive }) =>
              isActive
                ? `px-4 py-1 bg-zinc-100/50 cursor-pointer w-full`
                : "px-4 py-1 cursor-pointer w-full"
            }
          >
            Profile
          </NavLink>
        </div>
        <div className="text-lg flex hover:bg-zinc-100/50">
          <NavLink
            to="account"
            className={({ isActive }) =>
              isActive
                ? `px-4 py-1 bg-zinc-100/50 cursor-pointer w-full`
                : "px-4 py-1 cursor-pointer w-full"
            }
          >
            Account
          </NavLink>
        </div>
      </div>
      <div className="right-side w-3/4 h-full">
        <Outlet />
      </div>
    </div>
  );
};

export { UserProfileSetting };
export default UserSetting;
