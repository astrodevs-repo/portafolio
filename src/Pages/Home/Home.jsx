import { useEffect, useState } from "react";

import About from "../../Components/About/About";
import Header from "../../Components/Home/Header/Header";
import Team from "../../Components/Home/team/Team";
import Footer from "../../Components/Footer/Footer";
import StepList from "../../Components/Home/Stepper/Stepper";
import ClientsSection from "../../Components/Home/SkillsSection/SkillsSection";
import Servicios from "../../Components/Home/Servicios/Servicios";
import Blog from "../../Components/Home/Blog/Blog";
import Navbar from "../../Components/Navbar/Navbar";
import SmokeBackground from "../../Components/shared/Smoked/Smoked";
import Text from "../../Components/shared/Text";

import SubTitle from "../../Components/shared/SubTitle";
import Section from "../../Components/shared/Section/Section";
const Home = () => {
  const [currentStep, setCurrentStep] = useState("1");

  const handleStepChange = (step) => setCurrentStep(step);
  return (
    <>
      <Navbar />
      <SmokeBackground />
      <Header index={"home"} onObserver={handleStepChange} currentStep={currentStep} />

      <About index={"aboutus"} onObserver={handleStepChange} currentStep={currentStep} />
      <Counter />

      <Servicios index={"quienessomos"} onObserver={handleStepChange} currentStep={currentStep} />
      <ClientsSection index={"skills"} onObserver={handleStepChange} currentStep={currentStep} />
      <StepList
        index={"comotrabajamos"}
        onObserver={handleStepChange}
        currentStepAnother={currentStep}
      />

      <Blog index={"blog"} onObserver={handleStepChange} currentStep={currentStep} />
      <Team index={"team"} onObserver={handleStepChange} currentStep={currentStep} />
      <section className="h-40"></section>
      <Footer index={"contactanos"} />
    </>
  );
};

export default Home;

const Counter = () => {
  const data = [
    {
      label: "Equipo especializado",
      value: 200,
      description:
        "Contamos con un equipo especializado para poder alcanzar los objetivos con múltiples habilidades. Cada proyecto es un nuevo desafío que resolvemos de manera creativa y funcional.",
    },
    {
      label: "Países",
      value: 9,
      description:
        "Ser nómades es trabajar a nivel global, investigando y analizando cada coyuntura cultural para convertirnos en auténticos locales en la comunicación hacia la audiencia.",
    },
    {
      label: "Clientes satisfechos",
      value: 95,
      description:
        "Nuestros clientes confían en nosotros bajo la premisa de que cada uno es diferente, por lo que necesitan una estrategia personalizada desde la creatividad hasta la gestión.",
    },
  ];
  return (
    <Section>
      <section className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-20">
        {data.map(({ value, label, description }, index) => (
          <CountUp end={value} duration={1} key={index} label={label} description={description} />
        ))}
      </section>
    </Section>
  );
};

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
      <section>
        <h1
          className={`text-Chicle  dark:text-violet-600 font-Baskerville leading-[40px] w-full text-4xl sm:text-sm md:text-4xl lg:text-4 xl:text-5xl 2xl:text-6xl  m-0`}
        >
          +{count}
        </h1>

        <SubTitle text={label} extra={"font-extrabold ml-5"} />
      </section>
      <Text content={description} extra={"text-bold"} />
    </section>
  );
};
