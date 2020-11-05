import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk, RootState } from ".";
import {
  getMealsService,
  initialMealGroupList,
  Meal,
  MealGroup,
} from "../api/MealsApi";

interface MealsState {
  meals: MealGroup[] | null;
  isLoading: boolean;
  isError: boolean;
}

const initialState: MealsState = {
  meals: initialMealGroupList,
  isLoading: false,
  isError: false,
};

const meals = createSlice({
  name: "meals",
  initialState,
  reducers: {
    getMealsStart(state) {
      state.isLoading = true;
    },
    getMealsSuccess(state, { payload }: PayloadAction<MealGroup[]>) {
      state.meals = payload;
      state.isLoading = false;
      state.isError = false;
    },
    getMealsFailed(state) {
      state.isLoading = false;
      state.isError = true;
    },
  },
});

export const { getMealsFailed, getMealsStart, getMealsSuccess } = meals.actions;

export const getMeals = (): AppThunk => async (dispatch) => {
  try {
    dispatch(getMealsStart());
    const meals = await getMealsService();
    dispatch(getMealsSuccess(meals));
  } catch (err) {
    console.error(err);
    dispatch(getMealsFailed());
  }
};

export const selectRandomMeals = createSelector<
  RootState,
  MealGroup[] | null,
  Meal[]
>(
  (state) => state.meals.meals,
  (meals) => {
    if (!meals) return [];
    let mealList: Meal[] = [];
    meals.forEach((mealGroup) => {
      mealList = [...mealList, ...mealGroup.items];
    });
    return mealList.sort((a, b) => a.id - b.id);
  }
);

export default meals.reducer;
