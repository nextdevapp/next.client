import React from "react";
import CategoryList from "./CategoryList";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import FilterView from "./FilterView";
import BrandList from "./BrandList";
import PriceList from "./PriceList";

const ProductFilter = () => {
  const productFilters = useSelector((state: RootState) => state.ProductFilter);

  return (
    <div>
      <div className="border-b border-gray-200 p-3">
        <FilterView />
      </div>
      <div className="border-b border-gray-200 p-3">
        <CategoryList Categories={productFilters.categories} />
      </div>
      <div className="border-b border-gray-200 p-3 mt-5">
        <BrandList Brands={productFilters.brand} />
      </div>
      <div className="border-b border-gray-200 p-3 mt-5">
        <PriceList Prices={productFilters.price} />
      </div>
    </div>
  );
};

export default ProductFilter;
