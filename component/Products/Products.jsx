"use client";
import React, { useState } from "react";
import AllProducts from "./AllProducts/AllProducts";
import "./Products.css";
import Filter from "../Filters/Filter";
const Products = ({ showFilter }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  return (
    <div className={`${showFilter ? "products" : "product"}`}>
      {showFilter && (
        <Filter
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      )}
      <AllProducts
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
    </div>
  );
};

export default Products;
