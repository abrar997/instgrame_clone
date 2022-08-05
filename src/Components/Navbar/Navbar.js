import React, { useContext, useEffect } from "react";
// icons
import {
  FaSistrix,
  FaTelegramPlane,
  FaRegCompass,
  FaRegHeart,
} from "react-icons/fa";

import { MdHome } from "react-icons/md";
import { ContextProvider } from "../../Global/Context";

const Navbar = () => {
  // data by context api
  const { user, model, openModel, loader, logout } =
    useContext(ContextProvider);

  // for open model when clock onn register  / login
  const openForms = () => {
    openModel();
  };

  const userLogout = () => {
    logout();
  };
  const checkUser = () => {
    return !loader ? (
      !loader && user ? (
        <li  className="log-out">
          {user.displayName} / <span onClick={userLogout}>logout</span>
        </li>
      ) : (
        <li className="login-register"  onClick={openForms}>Register / Login </li>
      )
    ) : (
      "...."
    );
  };

  return (
    <div className="">
      <div className="navbars ">
        {/* logo */}
        <div className="navabr_first col-lg-3">
          <div className="navbar-first-logo">
            <img className="logo-images" src={"/images/logo-insta.png"} />
          </div>
        </div>

        {/* search input */}
        <div className="navbar-middle col-lg-4">
          <div className="navbar_middle-search">
            <input type="text" className="navabr_search" placeholder="Search" />
            <FaSistrix className="searchIcon" />
          </div>
        </div>

        {/*icons  */}
        <div className="navbar-last col-lg-5">
          <ul>
            <li>
              <MdHome className=" navbar_icons" />
            </li>
            <li>
              <FaTelegramPlane className=" navbar_icons" />
            </li>
            <li>
              <FaRegCompass className=" navbar_icons" />
            </li>
            <li>
              <FaRegHeart className=" navbar_icons" />
            </li>
            {checkUser()}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
