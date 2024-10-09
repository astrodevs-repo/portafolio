import React from "react";

import Section from "../../shared/Section/Section";
import CountUp from "../../shared/CountUp/CountUp";
import { counterData } from "../../../data/Home";
import Inspector from "../../shared/Inspector/Inspector";

const Counter = React.memo(function Counter({ currentStep, onObserver, index }) {
  return (
    <Inspector index={index} onObserver={onObserver}>
      <Section
        currentStep={currentStep}
        onObserver={onObserver}
        index={index}
        contentPosition={"grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-20"}
      >
        {counterData.map(({ value, label, description }, index) => (
          <CountUp
            end={value}
            duration={1}
            key={index}
            label={label}
            description={description}
            currentStep={currentStep}
          />
        ))}
      </Section>
    </Inspector>
  );
});

export default Counter;
