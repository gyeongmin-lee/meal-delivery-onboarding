import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Meal } from "../api/MealsApi";

interface CartItem {
  id: number;
  meal: Meal;
  quantity: number;
}

const initialState: CartItem[] = [];

const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addMealToCart(
      state,
      { payload }: PayloadAction<{ meal: Meal; quantity: number }>
    ) {
      if (state.some((item) => item.id === payload.meal.id)) return state;
      return [
        ...state,
        {
          id: payload.meal.id,
          meal: payload.meal,
          quantity: payload.quantity,
        },
      ];
    },
    removeMealFromCart(state, { payload }: PayloadAction<Number>) {
      return state.filter((item) => item.id !== payload);
    },
    incrementMeal(state, { payload }: PayloadAction<number>) {
      return state.map((item) => {
        if (payload === item.id)
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        return item;
      });
    },
    decrementMeal(state, { payload }: PayloadAction<number>) {
      return state.map((item) => {
        if (payload === item.id)
          return {
            ...item,
            quantity: item.quantity - 1,
          };
        return item;
      });
    },
  },
});

export const {
  addMealToCart,
  decrementMeal,
  incrementMeal,
  removeMealFromCart,
} = cart.actions;

export default cart.reducer;
