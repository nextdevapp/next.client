import React from "react";
import StorefrontLayout from "../components/layouts/StorefrontLayout";
import ProductFilter from "../components/filters/ProductFilter";
import ProductList from "../components/products/ProductList";

const Shop = () => {
  return (
    <div>
      <div className="grid grid-cols-5 gap-3">
        <div className="bg-white-100">
          <ProductFilter />
        </div>
        <div className="bg-white-100 col-span-4">
          <ProductList />
        </div>
      </div>
    </div>
  );
};
Shop.layout = StorefrontLayout;
export default Shop;
