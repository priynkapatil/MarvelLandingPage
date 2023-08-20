import React from "react";
import keyConceptsImage from "../../assets/images/key-concepts.png";
import "./InfoCard.css";
import { concepts } from "./InfoCardData";

const InfoCard = () => {
  return (
    <div className="main-body-of-card">
      <header className="info-header">
        <img src={keyConceptsImage} alt="Medal badge with a star" />
        <h1>Key React Concepts</h1>
        <p>Selected key React concepts you should know about</p>
      </header>
      <ul id="concepts">
        {concepts.map((item) => (
          <li className="concept" key={item.title}>
            <img src={item.image} alt={item.title} />
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InfoCard;
