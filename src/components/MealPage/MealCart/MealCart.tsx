import React from "react";
import "./MealCart.scss";

export const MealCart = () => {
  return (
    <div className="mealcart">
      <div className="mealcart-header">
        <h1 className="mealcart-header-title">Cart</h1>
        <button className="mealcart-header-clear">Clear All</button>
      </div>
      <div className="mealcart-items"></div>
      <div className="mealcart-info">
        <div className="mealcart-info-count">6 Items</div>
        <div className="mealcart-info-subtotal">
          Subtotal: <span className="mealcart-info-subtotal-value">$63.99</span>
        </div>
      </div>
      <button className="mealcart-btn">Continue</button>
    </div>
  );
};
