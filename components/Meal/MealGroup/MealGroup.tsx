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
        <div className="mealgroup__header">
          <div className="mealgroup__title">{title}</div>
          <div className="mealgroup__subtitle">{"this week's menu"}</div>
          <div className="mealgroup__description">{description}</div>
        </div>
        <div className="mealgroup__meals">
          {items.map((meal) => (
            <Meal key={meal.id} meal={meal} />
          ))}
        </div>
      </div>
    </Element>
  );
};

export default MealGroup;
