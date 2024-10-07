import React, { useEffect, useState } from "react";
import SubTitle from "../SubTitle";
import Text from "../Text";

const CountUp = ({ end, duration, currentStep, description, label }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
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
  }, [currentStep]);

  return (
    <section className="flex flex-col gap-5">
      <React.Fragment>
        <h1
          className={`text-Chicle  dark:text-violet-600 font-Baskerville leading-[40px] w-full text-4xl sm:text-sm md:text-4xl lg:text-4 xl:text-5xl 2xl:text-6xl  m-0`}
        >
          +{count}
        </h1>

        <SubTitle text={label} extra={"font-extrabold ml-5"} />
      </React.Fragment>
      <Text content={description} extra={"text-bold"} />
    </section>
  );
};
export default CountUp;
