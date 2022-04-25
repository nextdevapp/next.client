import type { NextPage } from "next";
import { FC } from "react";
import StorefrontLayout from "../components/layouts/StorefrontLayout";
import FeatureProducts from "../components/products/FeatureProducts";

const Home = () => {
  return <div>{/* <FeatureProducts></FeatureProducts> */}</div>;
};

Home.layout = StorefrontLayout;
export default Home;
