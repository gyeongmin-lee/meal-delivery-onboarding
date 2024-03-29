import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from ".";
import { Meal } from "../MealsApi";

interface PlanPrice {
  [key: string]: number;
}

export const planPrice: PlanPrice = {
  6: 11.99,
  10: 10.99,
  14: 9.99,
};

const ADDON_PRICE = 9.95;

export interface CartItem {
  id: number;
  meal: Meal;
  quantity: number;
}

export interface CartState {
  items: CartItem[];
  mpw: number | null;
}

const initialState: CartState = {
  items: [],
  mpw: null,
};

const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    initializeCart(state, { payload }: PayloadAction<number>) {
      return {
        ...state,
        mpw: payload,
      };
    },
    addMealsToCart(state, { payload }: PayloadAction<Meal[]>) {
      return {
        ...state,
        items: payload.map((item) => ({
          id: item.id,
          meal: item,
          quantity: 1,
        })),
      };
    },
    addMealToCart(
      state,
      { payload }: PayloadAction<{ meal: Meal; quantity: number }>
    ) {
      if (state.items.some((item) => item.id === payload.meal.id)) return state;
      return {
        ...state,
        items: [
          ...state.items,
          {
            id: payload.meal.id,
            meal: payload.meal,
            quantity: payload.quantity,
          },
        ],
      };
    },
    removeMealFromCart(state, { payload }: PayloadAction<Number>) {
      return {
        ...state,
        items: state.items.filter((item) => item.id !== payload),
      };
    },
    incrementMeal(state, { payload }: PayloadAction<number>) {
      return {
        ...state,
        items: state.items.map((item) => {
          if (payload === item.id)
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          return item;
        }),
      };
    },
    decrementMeal(state, { payload }: PayloadAction<number>) {
      return {
        ...state,
        items: state.items.map((item) => {
          if (payload === item.id)
            return {
              ...item,
              quantity: item.quantity - 1,
            };
          return item;
        }),
      };
    },
    clearMealFromCart(state) {
      return {
        ...state,
        items: [],
      };
    },
  },
});

const selectItemCountFromState = (state: RootState) => {
  let itemCount = 0;
  state.cart.items.forEach((item) => (itemCount += item.quantity));
  return itemCount;
};

export const selectItemCount = createSelector(
  selectItemCountFromState,
  (num) => num
);

export const selectSubtotal = createSelector(
  selectItemCountFromState,
  (state: RootState) => state.cart.mpw,
  (itemCount: number, mpw: number | null) => {
    if (!mpw || itemCount === 0) return "0.00";
    const price = planPrice[mpw];
    const subTotal =
      itemCount - mpw > 0
        ? mpw * price + (itemCount - mpw) * ADDON_PRICE
        : itemCount * price;
    return subTotal.toFixed(2);
  }
);

export const selectPlanPrice = createSelector(
  selectItemCountFromState,
  (state: RootState) => state.cart.mpw,
  (itemCount: number, mpw: number | null) => {
    if (!mpw || itemCount === 0) return "0.00";
    const price = planPrice[mpw];
    const priceFromPlan = mpw * price;
    return priceFromPlan.toFixed(2);
  }
);

export const selectAddOnPrice = createSelector(
  selectItemCountFromState,
  (state: RootState) => state.cart.mpw,
  (itemCount: number, mpw: number | null) => {
    if (!mpw || itemCount === 0) return "0.00";
    if (itemCount - mpw <= 0) return "0.00";
    const addonPrice = (itemCount - mpw) * ADDON_PRICE;
    return addonPrice.toFixed(2);
  }
);

export const {
  addMealToCart,
  addMealsToCart,
  decrementMeal,
  incrementMeal,
  removeMealFromCart,
  clearMealFromCart,
  initializeCart,
} = cart.actions;

export default cart.reducer;
