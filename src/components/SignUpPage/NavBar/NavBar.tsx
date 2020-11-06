import classnames from "classnames";
import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import forwardArrow from "../../../icons/forward.svg";
import logo from "../../../logo.png";
import "./NavBar.scss";

export const NavBar = () => {
  const location = useLocation();
  const pathNames = location?.pathname?.split("/");
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
          <div
            className={classnames("nav-content-step-text", {
              "nav-content-step-text--active": pathNames.includes("plan"),
            })}
          >
            Plans
          </div>
          <img src={forwardArrow} alt="" className="nav-content-step-arrow" />
          <div
            className={classnames("nav-content-step-text", {
              "nav-content-step-text--active": pathNames.includes("meal"),
            })}
          >
            Meals
          </div>
          <img src={forwardArrow} alt="" className="nav-content-step-arrow" />
          <div
            className={classnames("nav-content-step-text", {
              "nav-content-step-text--active": pathNames.includes("checkout"),
            })}
          >
            Checkout
          </div>
        </div>
      </div>
    </div>
  );
};
