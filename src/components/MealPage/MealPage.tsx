import classNames from "classnames";
import React from "react";
import { Dropdown } from "../common/Dropdown/Dropdown";
import "./MealPage.scss";

export const MealPage = () => {
  return (
    <div className="meal-wrapper">
      <div className="meal">
        <div className="meal-sidebar-wrapper">
          <div className="meal-sidebar">
            <a
              className={classNames(
                "meal-sidebar-item",
                "meal-sidebar-item--active"
              )}
              href="#sample"
            >
              Traditional
            </a>
            <a className="meal-sidebar-item" href="#sample">
              Keto
            </a>
            <a className="meal-sidebar-item" href="#sample">
              Paleo
            </a>
          </div>
        </div>
        <div className="meal-items">
          <div className="meal-items-bar">
            <Dropdown
              options={["None", "High Protein", "Low Calorie"]}
              placeholder="Filter"
            />
            <button className="meal-items-bar-btn">
              <p className="meal-items-bar-btn-title">CHOOSE FOR ME</p>
              <p className="meal-items-bar-btn-subtitle">
                Based on Customer Favorites
              </p>
            </button>
          </div>
          <div className="meal-items-container">HELLO</div>
        </div>
        <div className="meal-cart-wrapper">
          <div className="meal-cart">
            <div className="meal-cart-header">
              <h1 className="meal-cart-header-title">Cart</h1>
              <button className="meal-cart-header-clear">Clear All</button>
            </div>
            <div className="meal-cart-items"></div>
            <div className="meal-cart-info">
              <div className="meal-cart-info-count">6 Items</div>
              <div className="meal-cart-info-subtotal">
                Subtotal:{" "}
                <span className="meal-cart-info-subtotal-value">$63.99</span>
              </div>
            </div>
            <button className="meal-cart-btn">Continue</button>
          </div>
        </div>
      </div>
    </div>
  );
};
