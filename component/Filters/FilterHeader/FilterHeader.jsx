import React, { useState } from "react";
import "../Filter.css";

const FilterHeader = ({
  showFilter,
  setShowFilter,
  selectedCategory,
  setSelectedCategory,
}) => {
  const [showOverlay, setShowOverlay] = useState(false);

  const handleFilterClick = () => {
    setShowOverlay(true);
  };

  const handleCloseClick = () => {
    setShowOverlay(false);
  };

  const handleCheckboxChange = (category) => {
    setSelectedCategory(selectedCategory === category ? null : category);
    console.log(category);
    setShowOverlay(false);
  };

  return (
    <div>
      <div className="filters-con">
        <div className="content">
          <h3>20 ITEMS</h3>
          {showFilter ? (
            <h4 onClick={() => setShowFilter(false)}>HIDE FILTER</h4>
          ) : (
            <h4 onClick={() => setShowFilter(true)}>SHOW FILTER</h4>
          )}
        </div>
        <div className="filt">
          <h4 onClick={handleFilterClick}>FILTER</h4>
        </div>
        <div className="recommended">
          <div className="lang">
            <select name="value" id="value">
              <option value="recommended">RECOMMENDED</option>
              <option value="newest">NEWEST FIRST</option>
              <option value="popular">POPULAR</option>
              <option value="price">PRICE: HIGH TO LOW</option>
              <option value="low to high">PRICE: LOW TO HIGH</option>
            </select>
          </div>
        </div>
      </div>

      <div className={`overlay ${showOverlay ? "active" : ""}`}>
        <button className="overlay-close" onClick={handleCloseClick}>
          ✖
        </button>
        <div className="unselect-res">
          <span>IDEAL FOR</span>
          <div className="checkbox">
            <input
              type="checkbox"
              id="men"
              checked={selectedCategory === "men"}
              onChange={() => handleCheckboxChange("men")}
            />
            <label htmlFor="men">Men</label>
            <br />
            <input
              type="checkbox"
              id="women"
              checked={selectedCategory === "women"}
              onChange={() => handleCheckboxChange("women")}
              disabled
            />
            <label htmlFor="women">Women</label>
            <br />
            <input
              type="checkbox"
              id="kids"
              checked={selectedCategory === "kids"}
              onChange={() => handleCheckboxChange("kids")}
              disabled
            />
            <label htmlFor="kids">Baby & Kids</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterHeader;
