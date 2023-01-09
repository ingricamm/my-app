import React from 'react'
import "../Components/style/grid-style.css";

function Blogs() {
  return (
    <div>
    <div className="wrapper">
      <div className="home-hero">
        <div className="feature">
          <h3>We like balloons</h3>
          <p>You can find all kinds of balloon related things here.</p>
        </div>
        <div className="special">
          <h3>Special Shapes</h3>
          <p>Why are some of them so scary looking?</p>
        </div>
        <div className="amazing">
          <h3>10 things you discover when taking a balloon ride.</h3>
          <p>Number 8 will AMAZE you.</p>
        </div>
        <div className="news">
          <h3>Angry people at balloon fiestas</h3>
          <p>Hot air balloons. A bit weather sensitive. </p>
        </div>
        <div className="photos">
          <h3>Balloon photos</h3>
          <p>I have quite a few.</p>
        </div>
        <div className="cta">
          <p>Contactame para mas información </p>
          <a className="spam-button" href="/contact">
            Contacto
          </a>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Blogs