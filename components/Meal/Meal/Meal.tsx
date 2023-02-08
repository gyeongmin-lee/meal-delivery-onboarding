import Image from "next/image";
import { FC, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Meal as MealObj } from "../../../lib/MealsApi";
import { RootState } from "../../../lib/redux";
import {
  addMealToCart,
  decrementMeal,
  incrementMeal,
  removeMealFromCart,
} from "../../../lib/redux/CartSlice";
import Counter from "../../Counter/Counter";
import "./Meal.scss";

interface MealProps {
  meal: MealObj;
}

const Meal: FC<MealProps> = ({ meal }) => {
  const cart = useSelector((root: RootState) => root.cart);
  const dispatch = useDispatch();

  const isInCart = cart.items.find((item) => item.id === meal.id);
  const cartQuantity =
    isInCart && cart.items.find((item) => item.id === meal.id)?.quantity;

  const counterValue = cartQuantity ?? 1;

  const increment = useCallback(() => {
    dispatch(incrementMeal(meal.id));
  }, [dispatch, meal.id]);

  const decrement = useCallback(() => {
    if (cartQuantity && cartQuantity > 1) dispatch(decrementMeal(meal.id));
    else dispatch(removeMealFromCart(meal.id));
  }, [cartQuantity, dispatch, meal.id]);

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
      <Image
        width={200}
        height={200}
        src={meal.src}
        alt={meal.title}
        className="meal-img"
      />
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

export default Meal;
