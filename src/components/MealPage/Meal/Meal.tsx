import React, { FC, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Meal as MealObj } from "../../../api/MealsApi";
import { RootState } from "../../../redux";
import {
  addMealToCart,
  decrementMeal,
  incrementMeal,
  removeMealFromCart,
} from "../../../redux/CartSlice";
import { Counter } from "../../common/Counter/Counter";
import "./Meal.scss";

interface MealProps {
  meal: MealObj;
}

export const Meal: FC<MealProps> = ({ meal }) => {
  const cart = useSelector((root: RootState) => root.cart);
  const dispatch = useDispatch();

  const isInCart = cart.find((item) => item.id === meal.id);
  const cartQuantity =
    isInCart && cart.find((item) => item.id === meal.id)?.quantity;

  const counterValue = cartQuantity ?? 1;

  const increment = () => {
    dispatch(incrementMeal(meal.id));
  };

  const decrement = () => {
    if (cartQuantity && cartQuantity > 1) dispatch(decrementMeal(meal.id));
    else dispatch(removeMealFromCart(meal.id));
  };

  const addMeal = useCallback(() => {
    !isInCart &&
      dispatch(
        addMealToCart({
          meal: meal,
          quantity: 1,
        })
      );
  }, [dispatch, isInCart, meal]);

  return (
    <div className="meal">
      <img src={meal.src} alt={meal.title} className="meal-img" />
      <div className="meal-body">
        <div className="meal-title">{meal.title}</div>
        <div className="meal-nutrients">
          <div className="meal-nutrients-group">
            <div className="meal-nutrients-group-title">Cal</div>
            <div className="meal-nutrients-group-content">
              {meal.nutrient.calories}
            </div>
          </div>
          <div className="meal-nutrients-group">
            <div className="meal-nutrients-group-title">Protein</div>
            <div className="meal-nutrients-group-content">
              {meal.nutrient.protein}
            </div>
          </div>
          <div className="meal-nutrients-group">
            <div className="meal-nutrients-group-title">Carbs</div>
            <div className="meal-nutrients-group-content">
              {meal.nutrient.carbs}
            </div>
          </div>
          <div className="meal-nutrients-group">
            <div className="meal-nutrients-group-title">Fats</div>
            <div className="meal-nutrients-group-content">
              {meal.nutrient.fats}
            </div>
          </div>
        </div>
        <div className="meal-footer">
          {isInCart && (
            <Counter
              value={counterValue}
              onDecrement={decrement}
              customClassName="meal-footer-counter"
            />
          )}
          <button
            className="meal-footer-btn"
            onClick={isInCart ? increment : addMeal}
          >
            <span className="meal-footer-btn-icon">+</span>{" "}
            {isInCart ? "Add Another" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
};
