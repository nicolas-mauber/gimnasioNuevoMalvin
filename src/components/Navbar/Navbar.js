import React from "react";
import "./Navbar.css";
import malvin from "../../images/malvin.png";
import Button from "@material-ui/core/Button";
const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={malvin} className="logo" />

      <div className="scroll ">
        <Button className="scroll mx-4 bg-secondary" variant="text" href="#personal">
          Informacion
        </Button>

        <Button className="scroll mx-4 bg-secondary" variant="text" href="#contacto">
          Contacto
        </Button>

        <Button className="scroll mx-4 bg-secondary" variant="text" href="#galeria">
          Galeria
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
