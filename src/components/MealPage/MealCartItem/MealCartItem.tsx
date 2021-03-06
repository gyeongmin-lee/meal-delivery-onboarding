import React, { FC, useCallback } from "react";
import { useDispatch } from "react-redux";
import {
  CartItem,
  decrementMeal,
  incrementMeal,
  removeMealFromCart,
} from "../../../redux/CartSlice";
import { Counter } from "../../common/Counter/Counter";
import "./MealCartItem.scss";

interface MealCartItemProps {
  cartItem: CartItem;
}

export const MealCartItem: FC<MealCartItemProps> = ({ cartItem }) => {
  const { id, meal, quantity } = cartItem;
  const dispatch = useDispatch();

  const increment = useCallback(() => dispatch(incrementMeal(id)), [
    dispatch,
    id,
  ]);

  const decrement = useCallback(() => {
    if (quantity > 1) dispatch(decrementMeal(meal.id));
    else dispatch(removeMealFromCart(meal.id));
  }, [dispatch, meal.id, quantity]);

  return (
    <div className="mealcartitem">
      <img src={meal.src} alt={meal.title} className="mealcartitem-img" />
      <div className="mealcartitem-body">
        <div className="mealcartitem-body-header">{meal.title}</div>
        <Counter
          customClassName="mealcartitem-body-counter"
          value={quantity}
          onDecrement={decrement}
          onIncrement={increment}
        />
      </div>
    </div>
  );
};
