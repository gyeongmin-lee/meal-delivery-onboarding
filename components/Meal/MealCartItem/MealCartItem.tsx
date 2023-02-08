import Image from "next/image";
import { FC, useCallback } from "react";
import { useDispatch } from "react-redux";
import {
  CartItem,
  decrementMeal,
  incrementMeal,
  removeMealFromCart,
} from "../../../lib/redux/CartSlice";
import Counter from "../../Counter/Counter";
import "./MealCartItem.scss";

interface MealCartItemProps {
  cartItem: CartItem;
}

const MealCartItem: FC<MealCartItemProps> = ({ cartItem }) => {
  const { id, meal, quantity } = cartItem;
  const dispatch = useDispatch();

  const increment = useCallback(
    () => dispatch(incrementMeal(id)),
    [dispatch, id]
  );

  const decrement = useCallback(() => {
    if (quantity > 1) dispatch(decrementMeal(meal.id));
    else dispatch(removeMealFromCart(meal.id));
  }, [dispatch, meal.id, quantity]);

  return (
    <div className="mealcartitem">
      <Image
        width={60}
        height={60}
        src={meal.src}
        alt={meal.title}
        className="mealcartitem-img"
      />
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

export default MealCartItem;
