import React, { useState } from "react";
import { motion } from "framer-motion";
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
      title={"¿Por qué elegirnos?"}
      subtitle={
        "Creamos páginas web a medida y responsivas que se adaptan a todos los dispositivos, garantizando una experiencia fluida para tus usuarios y mejorando la interacción con tus clientes."
      }
      index={index}
      contentPosition="grid-cols-1 sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-4 justify-center flex flex-col gap-0 sm:flex md:grid w-full pt-0 sm:pt-5 md:pt-10 lg:pt-10 xl:pt-20 2xl:pt-20  3xl:pt-20 "
    >
      {servicios.map((servicio, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0.5, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: idx * 0.2 }}
          viewport={{ once: false }}
          className="p-2"
        >
          <Card
            index={idx}
            title={servicio.title}
            content={servicio.content}
            svg={servicio.svg}
            expanded={expandedIndex === idx}
            onExpand={handleExpand}
          />
        </motion.div>
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
