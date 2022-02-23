import React from "react";
import "./Navbar.css";
import malvin from "../../images/malvin.png";
import DirectionsRunIcon from "@material-ui/icons/DirectionsRun";
import Button from "@material-ui/core/Button";
const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={malvin} className="logo" />

      <div>
        <Button
          className="color"
          variant="text"
          color="primary"
          endIcon={<DirectionsRunIcon color="secondary"/>}
        >
          Veni a conocer el mejor gimnasio del barrio
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
