import "./style/navBar.css";
import logo from "./img/Logo-nombre.png";
import Searchbox from "./Searchbox";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

function Navbar() {
  /* PARA DISEÑO RESPONSIVE  */

  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  /* Muestra o esconde el fondo de la pantalla de acuerdo al estado del boton*/
  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };
  /*Cerrar  responsive navbar con un click en home  */
  const cerrarNav = () => {
    setToggleMenu(false);
  };
  /*toma el tamaño de  la pantalla */
  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <>
      <div className="navBar">
        <Link to="/" className="logo" onClick={cerrarNav}>
          <img src={logo} />
        </Link>
        <nav className="App-Navbar">
          {(toggleMenu || screenWidth > 600) && (
            <ul>
              <li>
                <Searchbox />{" "}
              </li>
              <li>
                <Link to="/about" className="nav-link" onClick={toggleNav}>
                  {" "}
                  Acerca{" "}
                </Link>
              </li>
              <li>
                <Link to="/blog" className="nav-nav-link" onClick={toggleNav}>
                  {" "}
                  blogs
                </Link>
              </li>
              <li>
                {" "}
                <Link to="/Repository" className="nav-link" onClick={toggleNav}>
                  {" "}
                  Repositorio
                </Link>{" "}
              </li>
              <li>
                {" "}
                <Link to="/contact" className="nav-link" onClick={toggleNav}>
                  {" "}
                  Contacto
                </Link>{" "}
              </li>
            </ul>
          )}
          <button className="burger-Btn" onClick={toggleNav}>
            <i className="fa fa-bars"></i>
          </button>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
