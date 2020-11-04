import {
  Action,
  combineReducers,
  configureStore,
  ThunkAction,
} from "@reduxjs/toolkit";
import mealsReducer from "./MealsSlice";

const rootReducer = combineReducers({
  meals: mealsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;

export const store = configureStore({
  reducer: rootReducer,
});
