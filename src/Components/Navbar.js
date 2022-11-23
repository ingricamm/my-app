import React from "react";
import { Link } from "react-router-dom"


function Navbar() {
    return (
      <div className="navBar">
            <nav className="App-Navbar">
                <ul>
                  <li> <button className="search-Btn" ><i className="fa fa-search" ></i></button></li>
                <li> <Link className="About" to="/about">about</Link> </li> 
                  <li><a href='/blog'> blog</a></li>
                  <li><a href='/Repository'> Repository</a></li>
                  <li><a href='/contact'> Contact</a></li>
                </ul>
            </nav>
               
      </div>
    );
  }
  
  export default Navbar;