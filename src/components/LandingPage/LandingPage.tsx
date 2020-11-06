import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../../logo.png";
import { RootState } from "../../redux";
import { setEmail, setZip } from "../../redux/OrderSlice";
import "./LandingPage.scss";

export const LandingPage = () => {
  const dispatch = useDispatch();
  const { email, zip } = useSelector((state: RootState) => state.order);

  return (
    <div className="landing">
      <div className="landing-navbar">
        <img className="landing-navbar-img" src={logo} alt="logo" />
        <button className="landing-navbar-btn">The Plans</button>
        <button className="landing-navbar-btn">The Food</button>
        <button className="landing-navbar-btn">How It Works</button>
        <div className="landing-navbar-user">
          <button className="landing-navbar-user-btn landing-navbar-user-btn--primary">
            Continue Sign Up
          </button>
          <button className="landing-navbar-user-btn landing-navbar-user-btn--secondary">
            My Account
          </button>
        </div>
      </div>
      <div className="landing-container">
        <div className="landing-container-form">
          <div className="landing-container-form-box">
            <h1 className="landing-container-form-box-header1">
              Delicously healthy prepared meals
            </h1>
            <h1 className="landing-container-form-box-header2">
              Delivered
              <br /> Right to Your Door
            </h1>
            <input
              placeholder="Email Address"
              className="landing-container-form-box-input"
              type="text"
              value={email}
              name="email"
              onChange={(e) => dispatch(setEmail(e.target.value))}
            />
            <input
              placeholder="Zip Code"
              className="landing-container-form-box-input"
              type="text"
              value={zip}
              autoComplete="postal-code"
              onChange={(e) => dispatch(setZip(e.target.value))}
            />
            <Link to="/signup/plan">
              <button className="landing-container-form-box-btn">
                Get Started
              </button>
            </Link>
            <p className="landing-container-form-box-text">
              Already have an account?{" "}
              <a
                className="landing-container-form-box-link"
                href="http://google.com"
              >
                Login
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
