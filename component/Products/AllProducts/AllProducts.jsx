"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Products.css";
import { FavoriteBorder } from "@mui/icons-material";
import FavoriteIcon from "@mui/icons-material/Favorite";

const AllProducts = ({ selectedCategory, setSelectedCategory }) => {
  const [data, setData] = useState([]);
  const [favoriteCard, setFavoriteCard] = useState([]);

  const handleFavoriteToggle = (id) => {
    setFavoriteCard((prevFavorites) =>
      prevFavorites.includes(id)
        ? prevFavorites.filter((favoriteId) => favoriteId !== id)
        : [...prevFavorites, id]
    );
  };
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
  const filteredData = selectedCategory
    ? data.filter(
        (item) => item.title.substring(0, 3).toLowerCase() === selectedCategory
      )
    : data;

  return (
    <div className="card-container">
      {filteredData.map((item, index) => (
        <div className="card" key={item.id}>
          <div>
            <img src={item.image} alt={item.id} />
          </div>
          <h5 className="title">{item.title.substring(0, 20)}...</h5>
          <div>
            <p className="des">{item.description.substring(0, 15)}...</p>
            {favoriteCard.includes(item.id) ? (
              <FavoriteIcon
                className="fav-icon-full"
                onClick={() => handleFavoriteToggle(item.id)}
              />
            ) : (
              <FavoriteBorder
                className="fav-icon"
                onClick={() => handleFavoriteToggle(item.id)}
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllProducts;
