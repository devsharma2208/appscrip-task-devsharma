import React from "react";
import AllProducts from "./AllProducts/AllProducts";
import "./Products.css";
import Filter from "../Filters/Filter";
const Products = () => {
  return (
    <div className="products">
      <Filter />
      <AllProducts />
    </div>
  );
};

export default Products;
