import React, { useState } from "react";
import { motion } from "framer-motion";
import Section from "../../shared/Section/Section";
import Card from "./Card";
import CardAccordion from "./CardAccordion";
import { servicios } from "../../../data/Home";
import Inspector from "../../shared/Inspector/Inspector";

const Servicios = React.memo(function Servicios({ index, currentStep, onObserver }) {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <Inspector index={index} onObserver={onObserver}>
      <Section
        currentStep={currentStep}
        title={"Nuestros Servicios"}
        id={"quienessomos"}
        index={index}
        extra={""}
        contentPosition="grid-cols-1 sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-4 justify-center flex flex-col gap-4 sm:flex md:grid w-full"
      >
        {servicios.map((servicio, idx) => {
          if (index === currentStep) {
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.2 }} // Retraso basado en el índice
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
            );
          }
          return null;
        })}

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
    </Inspector>
  );
});

export default Servicios;
