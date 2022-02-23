import React from "react";
import "./Footer.css";
import CopyrightIcon from "@material-ui/icons/Copyright";
import { Map } from "react-leaflet";
const Footer = () => {
  return (
    <div className="footer-container">
      <p>
        <CopyrightIcon /> Copyright Nicolas Mauber
      </p>

    </div>
  );
};

export default Footer;
