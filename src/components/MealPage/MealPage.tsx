import classNames from "classnames";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux";
import { getMeals } from "../../redux/MealsSlice";
import { Dropdown } from "../common/Dropdown/Dropdown";
import { MealGroup } from "./MealGroup/MealGroup";
import "./MealPage.scss";

export const MealPage = () => {
  const dispatch = useDispatch();
  const { meals } = useSelector((state: RootState) => state.meals);

  useEffect(() => {
    dispatch(getMeals());
  }, [dispatch]);

  return (
    <div className="mealpage-wrapper">
      <div className="mealpage">
        <div className="mealpage-sidebar-wrapper">
          <div className="mealpage-sidebar">
            <a
              className={classNames(
                "mealpage-sidebar-item",
                "mealpage-sidebar-item--active"
              )}
              href="#sample"
            >
              Traditional
            </a>
            <a className="mealpage-sidebar-item" href="#sample">
              Keto
            </a>
            <a className="mealpage-sidebar-item" href="#sample">
              Paleo
            </a>
          </div>
        </div>
        <div className="mealpage-items">
          <div className="mealpage-items-bar">
            <Dropdown
              options={["None", "High Protein", "Low Calorie"]}
              placeholder="Filter"
            />
            <button className="mealpage-items-bar-btn">
              <p className="mealpage-items-bar-btn-title">CHOOSE FOR ME</p>
              <p className="mealpage-items-bar-btn-subtitle">
                Based on Customer Favorites
              </p>
            </button>
          </div>
          <div className="mealpage-items-container">
            {meals &&
              meals.map((mealGroup) => (
                <MealGroup key={mealGroup.title} mealGroup={mealGroup} />
              ))}
          </div>
        </div>
        <div className="mealpage-cart-wrapper">
          <div className="mealpage-cart">
            <div className="mealpage-cart-header">
              <h1 className="mealpage-cart-header-title">Cart</h1>
              <button className="mealpage-cart-header-clear">Clear All</button>
            </div>
            <div className="mealpage-cart-items"></div>
            <div className="mealpage-cart-info">
              <div className="mealpage-cart-info-count">6 Items</div>
              <div className="mealpage-cart-info-subtotal">
                Subtotal:{" "}
                <span className="mealpage-cart-info-subtotal-value">
                  $63.99
                </span>
              </div>
            </div>
            <button className="mealpage-cart-btn">Continue</button>
          </div>
        </div>
      </div>
    </div>
  );
};
