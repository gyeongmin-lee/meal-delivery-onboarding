import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { ReactElement, useCallback, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-scroll";
import Dropdown from "../../../components/Dropdown/Dropdown";
import MealCart from "../../../components/Meal/MealCart/MealCart";
import MealGroupComponent from "../../../components/Meal/MealGroup/MealGroup";
import NavBar from "../../../components/NavBar/NavBar";
import { getMealsService, Meal, MealGroup } from "../../../lib/MealsApi";
import {
  addMealsToCart,
  clearMealFromCart,
} from "../../../lib/redux/CartSlice";
import { filterMethods, FILTER_OPTIONS } from "../../../util/FilterUtils";
import { shuffle } from "../../../util/general";
import "./index.scss";

export const getServerSideProps: GetServerSideProps = async () => {
  const meals = await getMealsService();
  return {
    props: {
      meals,
    },
  };
};

const Page = ({ meals }: { meals: MealGroup[] }) => {
  const router = useRouter();
  const choose = (router.query?.choose as string) || "10";
  const mpw = parseInt(choose);

  let mealList: Meal[] = [];
  meals.forEach((mealGroup) => (mealList = [...mealList, ...mealGroup.items]));
  const recommendedMeals = shuffle(mealList);

  const dispatch = useDispatch();
  const chooseRecommended = useCallback(() => {
    dispatch(clearMealFromCart());
    dispatch(addMealsToCart(recommendedMeals.slice(0, mpw)));
  }, [dispatch, mpw, recommendedMeals]);

  const [filterValue, setFilterValue] = useState<FILTER_OPTIONS>(
    FILTER_OPTIONS.NONE
  );

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
                <MealGroupComponent
                  key={mealGroup.title}
                  mealGroup={mealGroup}
                />
              ))}
          </div>
        </div>
        <div className="mealpage-cart-wrapper">
          <MealCart mealsPerWeek={choose} />
        </div>
      </div>
    </div>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <div className="signup">
      <NavBar />
      {page}
    </div>
  );
};

export default Page;
