import React, { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import SubTitle from "../SubTitle";
import Text from "../Text";

const CountUp = React.memo(function CountUp({ end, duration, description, label }) {
  const [count, setCount] = useState(0);
  const [isCounting, setIsCounting] = useState(false);

  // Definir funciones con useCallback
  const handleViewportEnter = useCallback(() => setIsCounting(true), []);
  const handleViewportLeave = useCallback(() => setIsCounting(false), []);

  useEffect(() => {
    if (!isCounting) return;

    let start = 0;
    const stepTime = Math.abs(Math.floor((duration * 1000) / end));
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isCounting, duration, end]);

  return (
    <motion.section
      className="flex flex-col gap-5"
      onViewportEnter={handleViewportEnter}
      onViewportLeave={handleViewportLeave}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <React.Fragment>
        <h1
          className={`text-Chicle dark:text-violet-600 font-Baskerville leading-[40px] w-full text-4xl sm:text-sm md:text-4xl lg:text-4 xl:text-5xl 2xl:text-6xl m-0`}
        >
          +{count}
        </h1>

        <SubTitle text={label} extra={"font-extrabold ml-5"} />
      </React.Fragment>
      <Text content={description} extra={"text-bold"} />
    </motion.section>
  );
});

export default CountUp;
