import React, { useState } from "react";
import Section from "../../shared/Section/Section";
import Card from "./Card";
import CardAccordion from "./CardAccordion";

import { servicios } from "../../../data/Home";

const Servicios = React.memo(function Servicios({ index }) {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <Section
      title={"Nuestros Servicios"}
      id={"quienessomos"}
      index={index}
      extra={""}
      contentPosition={
        "grid-cols-1 sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-4 justify-center  flex flex-col gap-4 sm:flex md:grid w-full "
      }
    >
      {servicios.map((servicio, index) => (
        <Card
          key={index}
          index={index}
          title={servicio.title}
          content={servicio.content}
          svg={servicio.svg}
          expanded={expandedIndex === index}
          onExpand={handleExpand}
        />
      ))}
      {servicios.map((servicio, index) => (
        <CardAccordion
          key={index}
          index={index}
          title={servicio.title}
          content={servicio.content}
          svg={servicio.svg}
          expanded={expandedIndex === index}
          onExpand={handleExpand}
        />
      ))}
    </Section>
  );
});

export default Servicios;
