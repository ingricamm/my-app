import "./style/Cards.css";
import repositoryLinks from "../Repository-links";
import Card from "./Card";
import React from 'react';

function Cards() {
  return (
    <>
      <div className="card-panel">
        <h2>Repository</h2>
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
    </>
  );
}

export default Cards;
