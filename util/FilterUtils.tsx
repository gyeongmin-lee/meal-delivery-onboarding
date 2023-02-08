import { MealGroup } from "../lib/MealsApi";

export enum FILTER_OPTIONS {
  NONE = "None",
  PROTEIN = "High Protein",
  CALORIE = "Low Calorie",
}

export const filterMethods = {
  [FILTER_OPTIONS.NONE]: (meals: MealGroup[]) => meals,
  [FILTER_OPTIONS.PROTEIN]: (meals: MealGroup[]) => {
    return meals.map((mealGroup) => ({
      ...mealGroup,
      items: mealGroup.items.filter(
        (item) => parseInt(item.nutrient.protein) > 30
      ),
    }));
  },
  [FILTER_OPTIONS.CALORIE]: (meals: MealGroup[]) => {
    return meals.map((mealGroup) => ({
      ...mealGroup,
      items: mealGroup.items.filter(
        (item) => parseInt(item.nutrient.calories) < 350
      ),
    }));
  },
};
