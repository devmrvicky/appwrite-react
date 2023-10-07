import React, { useState } from "react";
import { FaUserCircle, FaRegUserCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import AuthorMenu from "./AuthorMenu";
import { toggleMenu } from "../../features";

const AuthorIcon = () => {
  const { status, userData, menuOpen } = useSelector((store) => store.auth);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggleMenu(true));
  };

  return (
    <div className="flex items-center gap-3 relative">
      {status ? (
        <>
          <span className="text-[24px]">{userData.name}</span>
          <FaUserCircle
            className="text-[40px] border-4 rounded-full cursor-pointer active:scale-90 transition-all"
            onClick={handleClick}
          />
        </>
      ) : (
        <FaRegUserCircle
          className="text-[32px] cursor-pointer active:scale-90 transition-all"
          onClick={handleClick}
        />
      )}
      {menuOpen && <AuthorMenu />}
    </div>
  );
};

export default AuthorIcon;
