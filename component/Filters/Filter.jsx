"use client";
import React, { useState } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
const Filter = ({ selectedCategory, setSelectedCategory }) => {
  const [showMenFilter, setShowMenFilter] = useState(false);

  const handleCheckboxChange = (category) => {
    setSelectedCategory(selectedCategory === category ? null : category);
    console.log(category);
  };
  return (
    <div className="filter-content">
      <div>
        <input type="checkbox" name="customize" id="customize" value="" />
        <label htmlFor="customize">CUSTOMIZBLE</label>
      </div>
      <div className="filter-dropdown">
        <div>
          <div
            className="arrow"
            onClick={() => setShowMenFilter((old) => !old)}
          >
            <h5>IDEAL FOR</h5>
            {showMenFilter ? (
              <KeyboardArrowUpIcon />
            ) : (
              <KeyboardArrowDownIcon />
            )}
          </div>

          <p>All</p>
        </div>
        {showMenFilter && (
          <div className="unselect">
            <span>Unselect all</span>
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
        )}
      </div>
      <div className="filter-dropdown disabled">
        <div>
          <div className="arrow">
            <h5>IDEAL FOR</h5>
            {/* <KeyboardArrowUpIcon/> */}
            <KeyboardArrowDownIcon />
          </div>

          <p>All</p>
        </div>
      </div>
      <div className="filter-dropdown disabled">
        <div>
          <div className="arrow">
            <h5>IDEAL FOR</h5>
            {/* <KeyboardArrowUpIcon/> */}
            <KeyboardArrowDownIcon />
          </div>

          <p>All</p>
        </div>
      </div>

      <div className="filter-dropdown disabled">
        <div>
          <div className="arrow">
            <h5>IDEAL FOR</h5>
            {/* <KeyboardArrowUpIcon/> */}
            <KeyboardArrowDownIcon />
          </div>

          <p>All</p>
        </div>
      </div>
      <div className="filter-dropdown disabled">
        <div>
          <div className="arrow">
            <h5>IDEAL FOR</h5>
            {/* <KeyboardArrowUpIcon/> */}
            <KeyboardArrowDownIcon />
          </div>

          <p>All</p>
        </div>
      </div>
      <div className="filter-dropdown disabled">
        <div>
          <div className="arrow">
            <h5>IDEAL FOR</h5>
            {/* <KeyboardArrowUpIcon/> */}
            <KeyboardArrowDownIcon />
          </div>

          <p>All</p>
        </div>
      </div>
      <div className="filter-dropdown disabled">
        <div>
          <div className="arrow">
            <h5>IDEAL FOR</h5>
            {/* <KeyboardArrowUpIcon/> */}
            <KeyboardArrowDownIcon />
          </div>

          <p>All</p>
        </div>
      </div>
    </div>
  );
};

export default Filter;
