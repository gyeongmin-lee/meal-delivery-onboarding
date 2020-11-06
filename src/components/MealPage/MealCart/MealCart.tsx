import classNames from "classnames";
import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { RootState } from "../../../redux";
import {
  clearMealFromCart,
  initializeCart,
  selectItemCount,
  selectSubtotal,
} from "../../../redux/CartSlice";
import { MealCartItem } from "../MealCartItem/MealCartItem";
import "./MealCart.scss";

export const MealCart = () => {
  const dispatch = useDispatch();
  const { mpw: mealsPerWeek } = useParams<{ mpw: string }>();
  const history = useHistory();

  const { items, mpw } = useSelector((root: RootState) => root.cart);
  const itemCount = useSelector(selectItemCount);
  const subTotal = useSelector(selectSubtotal);
  const isEnoughItemsInCart = mpw && itemCount >= mpw;

  useEffect(() => {
    dispatch(initializeCart(parseInt(mealsPerWeek)));
  }, [dispatch, mealsPerWeek]);

  const clearMeal = useCallback(() => {
    dispatch(clearMealFromCart());
  }, [dispatch]);

  const navigateToCheckout = () => history.push("/signup/checkout");

  return (
    <div className="mealcart">
      <div className="mealcart-header">
        <h1 className="mealcart-header-title">Cart</h1>
        <button className="mealcart-header-clear" onClick={clearMeal}>
          Clear All
        </button>
      </div>
      <div className="mealcart-items">
        {items.map((cartItem) => (
          <MealCartItem cartItem={cartItem} key={cartItem.id} />
        ))}
      </div>
      <div className="mealcart-info">
        <div className="mealcart-info-count">{itemCount} Items</div>
        <div className="mealcart-info-subtotal">
          Subtotal:{" "}
          <span className="mealcart-info-subtotal-value">${subTotal}</span>
        </div>
      </div>
      <button
        className={classNames("mealcart-btn", {
          "mealcart-btn--disabled": !isEnoughItemsInCart,
        })}
        onClick={isEnoughItemsInCart ? navigateToCheckout : undefined}
      >
        {isEnoughItemsInCart
          ? "Continue"
          : `Select ${(mpw ?? 0) - itemCount} More to Continue`}
      </button>
    </div>
  );
};
