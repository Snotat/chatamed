import React from "react";
import { FaFacebook, FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../styles/footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer_top">
        <FaFacebook className="foot_icon" />
        <FaTwitter className="foot_icon" />
        <FaInstagramSquare className="foot_icon" />
      </div>
      <div className="footer_mid">
        <Link to="/">Term of Service</Link>
        <Link to="/">Privacy Policy</Link>
      </div>
      <div className="footer_bottom">&copy; Chatamed 2024</div>
    </div>
  );
}

export default Footer;
