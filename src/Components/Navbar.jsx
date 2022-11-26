import "./style/navBar.css";
import Searchbox from "./Searchbox";

import { Link } from "react-router-dom";
import React, {useEffect,useState} from "react";



function Navbar() {
/* PARA DISEÑO RESPONSIVE  */

const [toggleMenu, setToggleMenu] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

/* Muestra o esconde el fondo de la pantalla de acuerdo al estado del boton*/
  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
    if (!toggleMenu == true ){
      document.querySelector(".home-container").classList.add("open")}
      else{
      document.querySelector(".home-container").classList.remove("open")
    } 
    
  }



/*toma el tamaño de  la pantalla */
  useEffect(() => {

    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', changeWidth);
    
   

    return () => {
        window.removeEventListener('resize', changeWidth);
   
        
    }

  }, [])

  return (
    <>
      <div className="navBar">
        <Link to="/" className="logo" onClick={toggleNav}>
          Home
        </Link>
        <nav className="App-Navbar">
        {(toggleMenu || screenWidth > 600) && (
          <ul>
            <li><Searchbox />  </li>
            <li><Link className="About" to="/about" onClick={toggleNav}> about </Link></li>
            <li><a href="/blog"> blog</a></li>
            <li> <a href="/Repository" onClick={toggleNav}> Repository</a> </li>
            <li> <a href="/contact" onClick={toggleNav}> Contact</a> </li>
          </ul>
        )}
          <button className="burger-Btn" onClick={toggleNav}><i className="fa fa-bars"></i>
          </button>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
