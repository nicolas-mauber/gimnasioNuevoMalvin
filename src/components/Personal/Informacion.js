import React from "react";
import "./Informacion.css";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import LocalPhoneIcon from '@material-ui/icons/LocalPhone';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';

const Informacion = () => {
  return (
    <div >
      <div className="container" id="personal" name='personal'>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Nuestra Filosofia</h5>
            <p className="card-text">
              Ser un centro de desarrollo
              integral, donde a través de la expresión corporal los adultos,
              niños y jóvenes logren un desarrollo tanto físico como socio
              afectivo y cognitivo.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Contacto</h5>
            <p className="card-text"><LocationOnIcon/>  Almeria 4619</p>
            <p> <LocalPhoneIcon/> 2613 3511</p>
            <p><AlternateEmailIcon/> nuevomalvin.gym@gmail.com</p>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Personal</h5>
            <p className="card-text">
              
              Las instalaciones cuentan con profesionales en el area.
              Entrenadores personales, maestros de artes marciales, maestras de
              danza y hasta taler de manualidades!
            </p>
          </div>
        </div>

        

      </div>

      <div className="contenedor-boton">
        <a href="#" className="btn btn-secondary">
          VER HORARIOS
        </a>
      </div>
      
    </div>
  );
};

export default Informacion;
