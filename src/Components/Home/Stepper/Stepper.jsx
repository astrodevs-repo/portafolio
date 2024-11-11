import React from "react";

import Section from "../../shared/Section/Section";
import ItemMobile from "./ItemMobile";

const Stepper = React.memo(function Stepper({ index }) {
  const steps = [
    {
      name: "1. Contacto inicial",
      index: "1",
    },
    {
      name: "2. Reunión Inicial y Análisis de Requerimientos",
      index: "2",
    },
    {
      name: "3. Diseño del Plan de Acción",
      index: "3",
    },
    {
      name: "4. Ejecución del Plan",
      index: "4",
    },
    {
      name: "5. Pruebas y Validación",
      index: "5",
    },
    {
      name: "6. Entrega del Proyecto",
      index: "6",
    },
    {
      name: "7. Mantenimiento y Mejoras",
      index: "7",
    },
  ];

  return (
    <Section
      title={"Como trabajamos en Neurons"}
      index={index}
      bg={"bg-transparent"}
      textColor={"text-white"}
      contentPosition={"pt-20 sm:pt-40 "}
    >
      {steps.map(({ name }, i) => (
        <ItemMobile length={steps.length} key={i} name={name} index={i} i={i} />
      ))}
    </Section>
  );
});

export default Stepper;
