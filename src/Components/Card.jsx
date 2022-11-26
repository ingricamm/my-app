import "./style/card.css"
import React from 'react';

function Card(card) {
  return (
    <div className="card-container">
      <div className="card">
        
      <div className="card-media">
        <img src={card.image} className="image" alt="excel" />
      </div>
      <div className="card-header">
        <a href="/product/">{card.nombre}</a>
      </div>
      <p className="description">{card.detalle}</p>
    </div>
  </div>
  );
}

export default Card;
