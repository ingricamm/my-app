import "./style/Cards.css";
import repositoryLinks from "../Repository-links";
import Card from "./Card";
import React from 'react';

function Cards() {
  return (
    <>
    <div>
      <h2>Repository</h2>
      <div className="card-panel">
        
        <ul className="Cards ">
          {repositoryLinks.map((card) => (
            <li key={repositoryLinks.id}>
              {" "}
              <Card
                nombre={card.name}
                image={card.image}
                detalle={card.description}
                />
            </li>
          ))}
        </ul>
      </div>
          </div>
    </>
  );
}

export default Cards;
