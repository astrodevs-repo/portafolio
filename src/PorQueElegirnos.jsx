import React from "react";
import Section from "./Components/shared/Section/Section";
import Title from "./Components/shared/Title";
import Text from "./Components/shared/Text";

const PorQueElegirnos = () => {
  return (
    <Section title={"Por qué elegirnos"}>
      <section className="grid grid-cols-4">
        <article>
          <Title text={"title"} />
          <Text content={"body"} />
        </article>
        <article>
          <Title text={"title"} />
          <Text content={"body"} />
        </article>
        <article>
          <Title text={"title"} />
          <Text content={"body"} />
        </article>
        <article>
          <Title text={"title"} />
          <Text content={"body"} />
        </article>
      </section>
    </Section>
  );
};

export default PorQueElegirnos;
