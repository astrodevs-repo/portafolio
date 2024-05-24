import "./style.css";
import ItemMobile from "./ItemMobile";
import { useState } from "react";
import Section from "../shared/Section/Section";

function StepList() {
  const [currentStep, setCurrentStep] = useState("1");

  const handleStepChange = (step) => setCurrentStep(step);

  const steps = [
    {
      name: "1",
      index: "1",
    },
    {
      name: "2",
      index: "2",
    },
    {
      name: "3",
      index: "3",
    },
    {
      name: "4",
      index: "4",
    },
    {
      name: "5",
      index: "5",
    },
    {
      name: "6",
      index: "6",
    },
    {
      name: "7",
      index: "7",
    },
  ];

  return (
    <Section title={"Service"} bg={"bg-transparent"} textColor={"text-white"}>
      <section className="mt-40 ">
        {steps.map(({ name, index }, i) => (
          <ItemMobile
            currentStep={currentStep}
            key={i}
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
