import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from ".";
import {
  getMealsService,
  initialMealGroupList,
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

export default meals.reducer;
