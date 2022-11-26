import "./style/homePage.css";
import Cards from "../Components/Cards";
import Contact from "../Components/formContact";
import Description from "../Components/Description";
import React from "react";

function Homepage() {
  return (
    <>
      <div className="home-container">
        <div className="home-header-content">
          <div className="Autor">
            <h2>Carolina Mosquera Moreno</h2>
            Process Engineer/ Data Analytics
          </div>
        </div>

        <div className="home-main-content">
          <div className="main-content">
            <div className="Photo-profile"></div>
            <Description />
            <Cards />
            <Contact />
          </div>
        </div>

        <div className="home-footer-content">
          <ul>
            <li>
              <i className="fa fa-twitter"> </i>
            </li>
            <li>
              <i className="fa fa-linkedin"></i>
            </li>
            <li>
              <i className="fa fa-github"></i>
            </li>
          </ul>
          <div className="App-footer-content">terminos y condiciones</div>
        </div>
      </div>
    </>
  );
}

export default Homepage;
