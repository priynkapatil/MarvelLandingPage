import React, { useState } from "react";
import { CardData } from "./CardData";
import './Accordions.css'
import Container from "../UI Card/Container";

const Accordions = () => {
  const [active, setActive] = useState(0);
  console.log(CardData);
  return (
    
    <Container>
    <section>
      {CardData.map((card, index) => (
        <article
          key={card.img}
          className={active === index ? "active" : ""}
          onClick={() => setActive(index)}
        >
          <img src={card.img} alt="img" />
          <div className="content">
            <span>photo_camera</span>
            <div>
              <h2>{card.header}</h2>
              <p>{card.text}</p>
            </div>
          </div>
        </article>
      ))}</section>
      </Container>
  );
};

export default Accordions;
