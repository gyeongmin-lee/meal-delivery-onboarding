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
        className="meal__img"
      />
      <div className="meal__body">
        <div className="meal__title">{meal.title}</div>
        <div className="meal__nutrients">
          <div className="meal__nutrients-group">
            <div className="meal__nutrients-title">Cal</div>
            <div>{meal.nutrient.calories}</div>
          </div>
          <div className="meal__nutrients-group">
            <div className="meal__nutrients-title">Protein</div>
            <div>{meal.nutrient.protein}</div>
          </div>
          <div className="meal__nutrients-group">
            <div className="meal__nutrients-title">Carbs</div>
            <div>{meal.nutrient.carbs}</div>
          </div>
          <div className="meal__nutrients-group">
            <div className="meal__nutrients-title">Fats</div>
            <div>{meal.nutrient.fats}</div>
          </div>
        </div>
        <div className="meal__footer">
          {isInCart && (
            <Counter
              value={counterValue}
              onDecrement={decrement}
              customClassName="meal__counter"
            />
          )}
          <button
            className="meal__btn"
            onClick={isInCart ? increment : addMeal}
          >
            <span className="meal__icon">+</span>{" "}
            {isInCart ? "Add Another" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Meal;
