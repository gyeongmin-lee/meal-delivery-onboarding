import React from "react";
import forwardArrow from "../../../icons/forward.svg";
import logo from "../../../logo.png";
import "./NavBar.scss";

export const NavBar = () => {
  return (
    <div className="nav">
      <div className="nav-content">
        <img src={logo} alt="Logo" className="nav-content-img" />
        <div className="nav-content-step">
          <div className="nav-content-step-text nav-content-step-text--active">
            Plans
          </div>
          <img src={forwardArrow} alt="" className="nav-content-step-arrow" />
          <div className="nav-content-step-text">Meals</div>
          <img src={forwardArrow} alt="" className="nav-content-step-arrow" />
          <div className="nav-content-step-text">Checkout</div>
        </div>
      </div>
    </div>
  );
};
