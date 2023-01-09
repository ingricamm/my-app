import "./style/navBar.css";
import logo from "./img/Logo-nombre.png";
import Searchbox from "./Searchbox";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

function Navbar() {
  /* PARA DISEÑO RESPONSIVE  */

<<<<<<< HEAD
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
=======
const [toggleMenu, setToggleMenu] = useState(false)
const [screenWidth, setScreenWidth] = useState(window.innerWidth)

>>>>>>> 0ff3f70d9655847f8d265b2fe75adfc7e8cbfbf8

  /* Muestra o esconde el fondo de la pantalla de acuerdo al estado del boton*/
  const toggleNav = () => {
<<<<<<< HEAD
    setToggleMenu(!toggleMenu);
  };
  /*Cerrar  responsive navbar con un click en home  */
  const cerrarNav = () => {
    setToggleMenu(false);
  };
  /*toma el tamaño de  la pantalla */
=======
    setToggleMenu(!toggleMenu)
    
  }
/*Cerrar  responsive navbar con un click en home  */
const cerrarNav = () => {
  setToggleMenu(false)
  
}
/*toma el tamaño de  la pantalla */
>>>>>>> 0ff3f70d9655847f8d265b2fe75adfc7e8cbfbf8
  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
<<<<<<< HEAD
    };
=======
      
    }
>>>>>>> 0ff3f70d9655847f8d265b2fe75adfc7e8cbfbf8

    window.addEventListener("resize", changeWidth);

    return () => {
<<<<<<< HEAD
      window.removeEventListener("resize", changeWidth);
    };
  }, []);
=======
        window.removeEventListener('resize', changeWidth);
       
        
    }

  }, [])
>>>>>>> 0ff3f70d9655847f8d265b2fe75adfc7e8cbfbf8

  return (
    <>
      <div className="navBar">
        <Link to="/" className="logo" onClick={cerrarNav}>
<<<<<<< HEAD
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
=======
          Home
        </Link>
        <nav className="App-Navbar">
        {(toggleMenu || screenWidth > 600) && (
          <ul>
            <li><Searchbox />  </li>
            <li><Link  to="/about" className="nav-link" onClick={toggleNav}> Acerca </Link></li>
            <li><Link to="/blog" className="nav-nav-link"> blog</Link></li>
            <li> <Link to="/Repository" className="nav-link" onClick={toggleNav}> Repositorio</Link> </li>
            <li> <Link to="/contact" className="nav-link" onClick={toggleNav}> Contacto</Link> </li>
          </ul>
        )}
          <button className="burger-Btn" onClick={toggleNav}><i className="fa fa-bars"></i>
>>>>>>> 0ff3f70d9655847f8d265b2fe75adfc7e8cbfbf8
          </button>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
