import {
  Action,
  combineReducers,
  configureStore,
  ThunkAction,
} from "@reduxjs/toolkit";
import cartReducer from "./CartSlice";
import mealsReducer from "./MealsSlice";

const rootReducer = combineReducers({
  meals: mealsReducer,
  cart: cartReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;

export const store = configureStore({
  reducer: rootReducer,
});
