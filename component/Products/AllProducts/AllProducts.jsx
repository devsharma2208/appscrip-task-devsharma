"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Products.css";
import { FavoriteBorder } from "@mui/icons-material";

const AllProducts = () => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
      const res = await axios("https://fakestoreapi.com/products");
      console.log(res.data);
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="card-container">
      {data.map((item, index) => {
        return (
          <div className="card">
            <div>
              <img src={item.image} alt={item.id} />
            </div>
            <h5 className="title">{item.title.substring(0, 20)}...</h5>
            <div>
              <p className="des">{item.description.substring(0, 20)}...</p>
              <FavoriteBorder className="fav-icon" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AllProducts;
