import React, { useState } from "react";
import Container from "../../Components/Container/Container";
import Section from "../../Components/shared/Section/Section";
import SubTitle from "../../Components/shared/SubTitle";
import Title from "../../Components/shared/Title";
import "./style.css";

const Team = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleItemClick = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  return (
    <Section>
      <Container>
        <div className="h-full">
          <Title text={"Our team"} />
          <br />
          <SubTitle text={"lorenmnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn"} />
        </div>

        <section className="game-section">
          <h2 className="line-title">trending games</h2>
          <div className="owl-carousel custom-carousel owl-theme">
            {[
              {
                title: "Dota 2",
                description: "Dota 2 is a multiplayer online battle arena by Valve...",
              } /* Add more game objects here */,
            ].map((game, index) => (
              <div
                className={`item ${index === activeIndex ? "active" : ""}`}
                key={index}
                onClick={() => handleItemClick(index)}
              >
                <div className="item-desc">
                  <h3>{game.title}</h3>
                  <p>{game.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </Container>
    </Section>
  );
};

export default Team;
