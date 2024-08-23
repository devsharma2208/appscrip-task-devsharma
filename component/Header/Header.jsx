import React, { useState } from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import PermContactCalendarOutlinedIcon from "@mui/icons-material/PermContactCalendarOutlined";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="header-container">
        <div className="logoCon">
          <MenuIcon className="menu" onClick={toggleMenu} />
          <img
            className="header-logo"
            src="https://static.vecteezy.com/system/resources/previews/019/766/253/non_2x/ashok-chakra-logo-ashok-chakra-icon-transparent-free-png.png"
            alt="logo"
          />
        </div>
        <div className="logo">
          <h1>LOGO</h1>
        </div>
        <div className="icons">
          <div>
            <SearchIcon />
          </div>
          <div>
            <FavoriteBorderIcon />
          </div>
          <div>
            <WorkOutlineIcon />
          </div>
          <div className="contact-icon">
            <PermContactCalendarOutlinedIcon />
          </div>
          <div className="option">
            <select name="lang" id="lang" className="lang">
              <option value="english">ENG</option>
              <option value="hindi">HIN</option>
            </select>
          </div>
        </div>
      </div>
      <div className={`menu-overlay ${menuOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={toggleMenu}>X</button>
        <div className="menu-items">
          <h4>SHOP</h4>
          <h4>SKILLS</h4>
          <h4>STORIES</h4>
          <h4>ABOUT</h4>
          <h4>CONTACT US</h4>
        </div>
      </div>
      <div className="nav-content">
        <h4>SHOP</h4>
        <h4>SKILLS</h4>
        <h4>STORIES</h4>
        <h4>ABOUT</h4>
        <h4>CONTACT US</h4>
      </div>
      <div className="home">
        <h5>HOME |</h5>
        <h5>SHOP</h5>
      </div>
    </>
  );
};

export default Header;
