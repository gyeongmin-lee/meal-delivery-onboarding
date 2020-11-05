import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-scroll";
import { RootState } from "../../redux";
import { addMealsToCart, clearMealFromCart } from "../../redux/CartSlice";
import { getMeals, selectRandomMeals } from "../../redux/MealsSlice";
import { filterMethods, FILTER_OPTIONS } from "../../utill/FilterUtils";
import { Dropdown } from "../common/Dropdown/Dropdown";
import { MealCart } from "./MealCart/MealCart";
import { MealGroup } from "./MealGroup/MealGroup";
import "./MealPage.scss";

export const MealPage = () => {
  const dispatch = useDispatch();
  const { meals } = useSelector((state: RootState) => state.meals);
  const mpw = useSelector((state: RootState) => state.cart.mpw);
  const recommendedMeals = useSelector(selectRandomMeals);

  const [filterValue, setFilterValue] = useState<FILTER_OPTIONS>(
    FILTER_OPTIONS.NONE
  );

  useEffect(() => {
    dispatch(getMeals());
  }, [dispatch]);

  const chooseRecommended = useCallback(() => {
    if (!mpw) return;
    dispatch(clearMealFromCart());
    dispatch(addMealsToCart(recommendedMeals.slice(0, mpw)));
  }, [dispatch, mpw, recommendedMeals]);

  const filteredMeal = useMemo(() => {
    return meals && filterMethods[filterValue](meals);
  }, [filterValue, meals]);

  return (
    <div className="mealpage-wrapper">
      <div className="mealpage">
        <div className="mealpage-sidebar-wrapper">
          <div className="mealpage-sidebar">
            {meals &&
              meals.map((meal) => (
                <Link
                  className="mealpage-sidebar-item"
                  key={meal.title}
                  spy={true}
                  smooth={true}
                  activeClass="mealpage-sidebar-item--active"
                  to={meal.title}
                  duration={500}
                  offset={-216}
                >
                  {meal.title}
                </Link>
              ))}
          </div>
        </div>
        <div className="mealpage-items">
          <div className="mealpage-items-bar">
            <Dropdown
              options={[
                FILTER_OPTIONS.NONE,
                FILTER_OPTIONS.PROTEIN,
                FILTER_OPTIONS.CALORIE,
              ]}
              placeholder="Filter"
              value={
                filterValue === FILTER_OPTIONS.NONE ? "Filter" : filterValue
              }
              onChange={(arg) => setFilterValue(arg.value as FILTER_OPTIONS)}
            />
            <button
              className="mealpage-items-bar-btn"
              onClick={chooseRecommended}
            >
              <p className="mealpage-items-bar-btn-title">CHOOSE FOR ME</p>
              <p className="mealpage-items-bar-btn-subtitle">
                Based on Customer Favorites
              </p>
            </button>
          </div>
          <div className="mealpage-items-container">
            {filteredMeal &&
              filteredMeal.map((mealGroup) => (
                <MealGroup key={mealGroup.title} mealGroup={mealGroup} />
              ))}
          </div>
        </div>
        <div className="mealpage-cart-wrapper">
          <MealCart />
        </div>
      </div>
    </div>
  );
};
