import { Button } from "@material-ui/core";
import React from "react";
import "./Mapa.css";
import emailjs from "emailjs-com";

const Map = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mu14cft",
        "template_8bfrw4d",
        e.target,
        "user_DRPNJo9q8a31r0bkFlFHM"
      )
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err));
  }

  return (
    <div className="principal-container" id="contacto">
      <section className="section pb-5">
        <h2 className="section-heading h1 pt-4">Contactanos</h2>

        <div className="row">
          <form
            className="col-lg-5 mb- contedor-contacto"
            onSubmit={sendEmail}
          >
            {/* Compienzoi de foprmulario */}
            <div className="card">
              <div className="card-body">
                <div className="md-form form-style">
                  <i className="fas fa-user prefix grey-text"></i>

                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nombre"
                    name="name"
                    required
                  />
                </div>

                <div className="md-form">
                  <i className="fas fa-envelope prefix grey-text"></i>

                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    name="user_email"
                    required
                  />
                </div>

                <div className="md-form ingreso-texto">
                  <i className="fas fa-pencil-alt prefix grey-text"></i>
                  <label placeholder="Consulta"></label>
                  <textarea
                    className="form-control md-textarea"
                    rows="3"
                    name="message"
                    placeholder="Ingrese su consulta"
                    required
                  ></textarea>
                </div>

                <input
                  className="submit-button bg-primary"
                  type="submit"
                  value="Enviar"
                />
              </div>
            </div>
          </form>

          <div className="col-lg-7">
            <div
              id="map-container-google-11"
              className="z-depth-1-half map-container-6 "
              style={{ height: "400px" }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13089.936642385048!2d-56.1087691!3d-34.8942975!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc75d6003fffdc65c!2sClub%20Nuevo%20Malvin!5e0!3m2!1ses!2suy!4v1645630470263!5m2!1ses!2suy"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                frameBorder="0"
                style={{ border: 0 }}
                className="fondo"
                allowFullScreen
              ></iframe>
            </div>

            <br />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Map;
