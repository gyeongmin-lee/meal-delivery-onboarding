import React, { FC } from "react";
import { Meal as MealObj } from "../../../api/MealsApi";
import "./Meal.scss";

interface MealProps {
  meal: MealObj;
}

export const Meal: FC<MealProps> = ({ meal }) => {
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
      </div>
      <div className="meal-footer"></div>
    </div>
  );
};
