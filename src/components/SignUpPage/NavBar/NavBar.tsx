import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import forwardArrow from "../../../icons/forward.svg";
import logo from "../../../logo.png";
import "./NavBar.scss";

export const NavBar = () => {
  const history = useHistory();

  const navigateHome = () => {
    history.push("/");
  };

  return (
    <div className="nav">
      <div className="nav-content">
        <img
          src={logo}
          onClick={navigateHome}
          alt="Logo"
          className="nav-content-img"
        />
        <div className="nav-content-step">
          <NavLink
            to="/signup/plan"
            activeClassName="nav-content-step-text--active"
            className="nav-content-step-text"
          >
            Plans
          </NavLink>
          <img src={forwardArrow} alt="" className="nav-content-step-arrow" />
          <NavLink
            to="/signup/meal/10"
            isActive={(_, { pathname }) => pathname.includes("signup/meal")}
            activeClassName="nav-content-step-text--active"
            className="nav-content-step-text"
          >
            Meals
          </NavLink>
          <img src={forwardArrow} alt="" className="nav-content-step-arrow" />
          <NavLink
            to="/signup/checkout"
            activeClassName="nav-content-step-text--active"
            className="nav-content-step-text"
          >
            Checkout
          </NavLink>
        </div>
      </div>
    </div>
  );
};
