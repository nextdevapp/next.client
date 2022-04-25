import React from "react";
import StorefrontLayout from "../../components/layouts/StorefrontLayout";
import ProductDetail from "../../components/products/ProductDetail";
const ProductPage = () => {
  return (
    <div>
      <ProductDetail></ProductDetail>
    </div>
  );
};
ProductPage.layout = StorefrontLayout;
export default ProductPage;
