import "./style/formcontact.css";
import React from "react";
import Paises from "../Paises";
import "./style/intlTelInput.css";

function Contact() {
  return (
    <div className="App-form">
      <form className="form">
        <h2>Contáctame</h2>

        <ul className="form-container">
          <li>
            <label htmlFor="name">Nombre Completo</label>
            <input
              type="name"
              name="name"
              id="name"
              required
            ></input>
          </li>
          <li>
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              name="email"
              id="email"
              
              maxLength="254"
              pattern="^[\w]{1,}[\w.+-]{0,}@[\w-]{2,}([.][a-zA-Z]{2,}|[.][\w-]{2,}[.][a-zA-Z]{2,})$"
              required
            ></input>
          </li>
          <li>
            <label htmlFor="telefono">Telefono</label>
            <div className="telefono">
              <select name="select">
                {Paises.map((Paises) => (
                  <option key={Paises.phone_code}>
                    {Paises.nombre} (+ {Paises.phone_code})
                  </option>
                ))}
              </select>
              <input id="phone" type="tel" name="phone" />
            </div>
          </li>

          <li>
            <label htmlFor="mensaje">Menssage</label>
            <textarea
              type="text"
              id="text"
              name="text"
              placeholder="Escribe tu mensaje"
              required
            ></textarea>
          </li>
          <li>
            <label htmlFor="archivo">adjuntar archivo</label>
            <input type="file" name="file" id="file"></input>
          </li>          
        </ul>
        <button type="submit" className="buttonSend">
          Enviar
        </button>
      </form>
    </div>
  );
}
export default Contact;
