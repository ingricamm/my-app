import "./style/homePage.css";
import Cards from "../Components/Cards";
import Description from "../Components/Description";
import React from "react";

function Homepage() {
  return (
    <>
      <div className="home-container">
        <div className="home-header-content">
          <div className="Autor">
            <h1>Doing</h1>
            Process Engineer/ Data Analytics
          </div>
        </div>

        <div className="home-main-content">
          <div className="main-content">
            <div>

            <div className="Photo-profile"></div>
            </div>
            <Description /> 
            <Cards />

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
         
        </div>
      </div>
    </>
  );
}

export default Homepage;
