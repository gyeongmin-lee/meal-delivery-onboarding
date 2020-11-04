import axios from "axios";

const DEMO_MEAL_URL =
  "https://temp-fresh-meal-plan.s3.us-west-2.amazonaws.com/fresh-meals.json";

export interface MealGroup {
  title: string;
  description: string;
  items: Meal[];
}

interface MealObject {
  [key: string]: MealGroup;
}

const initialMealObject: MealObject = {
  Traditional: {
    title: "Traditional",
    description: "Well balanced with lean proteins, complex carbs, and veggies",
    items: [],
  },
  Paleo: {
    title: "Paleo",
    description:
      "Low in complex carbs, with lean proteins, veggies, nuts and seeds.",
    items: [],
  },
  Keto: {
    title: "Keto",
    description:
      "High in healthy fat, moderate protein, and low carbs, to force the body to utilize fat as energy instead of carbs.",
    items: [],
  },
};

export const initialMealGroupList = Object.values(initialMealObject);

export interface Meal {
  id: number;
  title: string;
  nutrient: {
    calories: string;
    protein: string;
    carbs: string;
    fats: string;
  };
  type: string;
  src: string;
}

const tranformMeal = (meal: any): Meal => {
  const nutrientString: string = meal.body_html;
  const nutrients = nutrientString
    .split(", ")
    .map((item) => item.split(" ")[0]);
  return {
    id: meal.id,
    title: meal.title,
    type: meal.tags,
    nutrient: {
      calories: nutrients[0],
      protein: nutrients[1],
      carbs: nutrients[2],
      fats: nutrients[3],
    },

    src: meal.images[0].src,
  };
};

export const getMealsService = async (): Promise<MealGroup[]> => {
  const res = await axios.get(DEMO_MEAL_URL);
  const meals: any[] = res.data.products;
  const mealObject = JSON.parse(JSON.stringify(initialMealObject));
  meals.forEach((meal) => {
    if (mealObject[meal.tags]) {
      mealObject[meal.tags].items = [
        ...mealObject[meal.tags].items,
        tranformMeal(meal),
      ];
    }
  });
  return Object.values(mealObject);
};
