import React from "react";
import "./Navbar.css";
import malvin from "../../images/malvin.png";
import Button from "@material-ui/core/Button";
const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={malvin} className="logo" />

      <div className="botones">
        <Button
          id="scroll"
          variant="text"
          href="#galeria"
        >
          Galeria
        </Button>
        <Button
          id="scroll1"
          variant="text"
          href="#personal"
          className="mx-4"
        >
          Informacion
        </Button>

        <Button
          id="scroll2"
          variant="text"
          href="#contacto"
        >
          Contacto
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
