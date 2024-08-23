import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div>
          <h4>BE THE FIRST TO KNOW</h4>
          <p>Sign up for updates from matta muse</p>
          <div className="inp-con">
            <div>
              <input
                type="text"
                placeholder="Enter your e-mail"
                className="email"
              />
            </div>
            <div>
              <input type="button" value="SUBSCRIBE" className="subscribe" />
            </div>
          </div>
        </div>
        <div className="contact">
          <h3>CONTACT US</h3>
          <div>
            <p>+91 256874136</p>
            <p>acb@gmail.com</p>
          </div>
        </div>
      </div>
      <div>
        <div className="last-content">
          <div>
            <h3>metta muse</h3>
            <p>About us</p>
            <p>Stories</p>
            <p>Contact us</p>
            <p>EU Compliances Docs</p>
          </div>
          <div>
            <h3>QUICK LINKS</h3>
            <p>Orders & Shipping</p>
            <p>Join & Login</p>
            <p>Payment & Pricing</p>
            <p>FAQs</p>
          </div>
        </div>
        <div className="followUs">
          <h3>FOLLOW US</h3>
          <div>
            <InstagramIcon />
            <LinkedInIcon />
          </div>
        </div>
      </div>
      <div className="copyRight">
        Copyright &copy; 2024 mattamuse. All rights reversed
      </div>
    </div>
  );
};

export default Footer;
