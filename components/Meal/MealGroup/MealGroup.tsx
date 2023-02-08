import { FC } from "react";
import { Element } from "react-scroll";
import { MealGroup as MealGroupInterface } from "../../../lib/MealsApi";
import Meal from "../Meal/Meal";
import "./MealGroup.scss";

interface MealGroupProps {
  mealGroup: MealGroupInterface;
}

const MealGroup: FC<MealGroupProps> = ({ mealGroup }) => {
  const { title, description, items } = mealGroup;

  return (
    <Element name={title}>
      <div className="mealgroup">
        <div className="mealgroup-header">
          <div className="mealgroup-header-title">{title}</div>
          <div className="mealgroup-header-subtitle">this week's menu</div>
          <div className="mealgroup-header-description">{description}</div>
        </div>
        <div className="mealgroup-meals">
          {items.map((meal) => (
            <Meal key={meal.id} meal={meal} />
          ))}
        </div>
      </div>
    </Element>
  );
};

export default MealGroup;
