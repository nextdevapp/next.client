import { createSlice, Draft, PayloadAction } from "@reduxjs/toolkit";
import { Category, Brand, Price } from "../../types/Entities";
import { RootState } from "../../store/store";

type ProductFilterState = {
  categories: Category[];
  brand: Brand[];
  price: Price[];
};

const initialState: ProductFilterState = {
  categories: [] as Category[],
  brand: [] as Brand[],
  price: [] as Price[],
};

export const ProductFilterSlice = createSlice({
  name: "ProductFilter",
  initialState,
  reducers: {
    addCategory: (state, action: PayloadAction<Category>) => {
      state.categories.push(action.payload);
    },
    removeCategory: (state, action: PayloadAction<Category>) => {
      state.categories = state.categories.filter(function (el) {
        return el.id != action.payload.id;
      });
    },
    addBrand: (state, action: PayloadAction<Brand>) => {
      state.brand.push(action.payload);
    },
    removeBrand: (state, action: PayloadAction<Brand>) => {
      state.brand = state.brand.filter(function (el) {
        return el.id != action.payload.id;
      });
    },
    addPrice: (state, action: PayloadAction<Price>) => {
      state.price.push(action.payload);
    },
    removePrice: (state, action: PayloadAction<Price>) => {
      state.price = state.price.filter(function (el) {
        return el.id != action.payload.id;
      });
    },
  },
});

export const {
  addCategory,
  removeCategory,
  addBrand,
  removeBrand,
  addPrice,
  removePrice,
} = ProductFilterSlice.actions;

export default ProductFilterSlice.reducer;
