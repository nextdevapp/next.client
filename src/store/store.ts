import { configureStore } from "@reduxjs/toolkit";
import ProductFilterReducer from "../features/products/ProductFilterSlice";

export const store = configureStore({
  reducer: {
    ProductFilter: ProductFilterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;