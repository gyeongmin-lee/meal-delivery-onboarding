import classNames from "classnames";
import Link from "next/link";
import { useCallback, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../lib/redux";
import {
  clearMealFromCart,
  initializeCart,
  selectItemCount,
  selectSubtotal,
} from "../../../lib/redux/CartSlice";
import MealCartItem from "../MealCartItem/MealCartItem";
import "./MealCart.scss";

const MealCart = ({ mealsPerWeek }: { mealsPerWeek: string }) => {
  const dispatch = useDispatch();

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

  const submitBtn = useMemo(
    () => (
      <button
        className={classNames("mealcart__btn", {
          "mealcart__btn--disabled": !isEnoughItemsInCart,
        })}
      >
        {isEnoughItemsInCart
          ? "Continue"
          : `Select ${(mpw ?? 0) - itemCount} More to Continue`}
      </button>
    ),
    [isEnoughItemsInCart, itemCount, mpw]
  );

  return (
    <div className="mealcart">
      <div className="mealcart__header">
        <h1 className="mealcart__title">Cart</h1>
        <button className="mealcart__clear" onClick={clearMeal}>
          Clear All
        </button>
      </div>
      <div className="mealcart__items">
        {items.map((cartItem) => (
          <MealCartItem cartItem={cartItem} key={cartItem.id} />
        ))}
      </div>
      <div className="mealcart__info">
        <div className="mealcart__count">{itemCount} Items</div>
        <div className="mealcart__subtotal">
          Subtotal:{" "}
          <span className="mealcart__info-subtotal-value">${subTotal}</span>
        </div>
      </div>
      {isEnoughItemsInCart ? (
        <Link passHref href="/signup/checkout">
          {submitBtn}
        </Link>
      ) : (
        submitBtn
      )}
    </div>
  );
};

export default MealCart;
