import React from "react";
import Section from "../../shared/Section/Section";
import CountUp from "../../shared/CountUp/CountUp";
import { counterData } from "../../../data/Home";

const Counter = React.memo(function Counter({ index }) {
  return (
    <Section
      index={index}
      bg={"bg-white dark:bg-blackCeniza"}
      contentPosition={"grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-20"}
    >
      {counterData.map(({ value, label, description }, index) => (
        <CountUp end={value} duration={1} key={index} label={label} description={description} />
      ))}
    </Section>
  );
});

export default Counter;
