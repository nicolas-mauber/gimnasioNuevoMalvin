import React from "react";
import "./Horarios.css";
import horarios from "../../images/horarios.jpg";
const Horarios = () => {
  return (
    <div>
      <div className="contenedor-principal">
        <div className="title">
          <h2 className="texto">CONOCE NUESTRAS ACTIVIDADES</h2>
        </div>
        <div className="contenedor-foto-horarios">
          <img
            className="foto-horarios"
            src={horarios}
            alt="FOTO DE HORARIOS"
          />
        </div>
      </div>
    </div>
  );
};

export default Horarios;
