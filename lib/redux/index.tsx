import {
  Action,
  combineReducers,
  configureStore,
  EnhancedStore,
  ThunkAction,
} from "@reduxjs/toolkit";
import { Persistor, persistStore } from "redux-persist";
import cartReducer from "./CartSlice";
import orderReducer from "./OrderSlice";

const rootReducer = combineReducers({
  cart: cartReducer,
  order: orderReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;

export const store = configureStore({
  reducer: rootReducer,
});

interface PersistedStore extends EnhancedStore {
  __PERSISTOR?: Persistor;
}

export const useStore = () => {
  let store: PersistedStore;

  const isClient = typeof window !== "undefined";

  if (isClient) {
    const { persistReducer } = require("redux-persist");
    const storage = require("redux-persist/lib/storage").default;

    const persistConfig = {
      key: "root",
      storage,
    };

    store = configureStore({
      reducer: persistReducer(persistConfig, rootReducer),
    });

    store.__PERSISTOR = persistStore(store);
  } else {
    store = configureStore({
      reducer: rootReducer,
    });
  }

  return store;
};
