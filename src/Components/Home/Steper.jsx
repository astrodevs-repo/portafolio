import "./style.css";
import ItemMobile from "./ItemMobile";
import { useState } from "react";
import Section from "../shared/Section/Section";

function StepList() {
  const [currentStep, setCurrentStep] = useState("1");

  const handleStepChange = (step) => setCurrentStep(step);

  const steps = [
    {
      name: "step 1",
      index: "1",
    },
    {
      name: "step 2",
      index: "2",
    },
    {
      name: "step 3",
      index: "3",
    },
    {
      name: "step 4",
      index: "4",
    },
  ];

  return (
    <Section title={"Service"}>
      <section className="mt-40">
        {steps.map(({ name, index }, i) => (
          <ItemMobile
            currentStep={currentStep}
            key={name}
            name={name}
            index={index}
            i={i}
            onObserver={handleStepChange}
          />
        ))}
      </section>
    </Section>
  );
}

export default StepList;
