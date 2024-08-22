import React from "react";
import "../Filter.css";
const FilterHeader = () => {
  return (
    <div>
      <div className="filters-con">
        <div className="content">
          <h3>3425 ITEMS</h3>
          <h4>HIDE FILTER</h4>
        </div>
        <div className="filt">
          <h4>FILTER</h4>
        </div>
        <div className="recommended">
          <div  className="lang">
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
    </div>
  );
};

export default FilterHeader;
