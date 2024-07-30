import ItemMobile from "./ItemMobile";
import { useState } from "react";
import Section from "../shared/Section/Section";
import Inspector from "../shared/Inspector/Inspector";

function StepList({ index, onObserver }) {
  const [currentStep, setCurrentStep] = useState("1");

  const handleStepChange = (step) => setCurrentStep(step);

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
    <Inspector index={index} onObserver={onObserver}>
      <Section
        title={"Como trabajamos en Neurons"}
        id={"comotrabajamos"}
        bg={"bg-transparent"}
        textColor={"text-white"}
      >
        <section className="mt-20 px-0">
          {steps.map(({ name, index }, i) => (
            <ItemMobile
              currentStep={currentStep}
              length={steps.length}
              key={i}
              name={name}
              index={index}
              i={i}
              onObserver={handleStepChange}
            />
          ))}
        </section>
      </Section>
    </Inspector>
  );
}

export default StepList;
