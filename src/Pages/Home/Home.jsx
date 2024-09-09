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
import Container from "../../Components/Container/Container";
import Title from "../../Components/shared/Title";
import SubTitle from "../../Components/shared/SubTitle";
const Home = () => {
  const [currentStep, setCurrentStep] = useState("1");

  const handleStepChange = (step) => setCurrentStep(step);
  return (
    <>
      <Navbar />
      <SmokeBackground />
      <Header index={"home"} onObserver={handleStepChange} currentStep={currentStep} />
      <Counter />

      <AboutExample />

      {/* <About index={"aboutus"} onObserver={handleStepChange} currentStep={currentStep} /> */}
      <Servicios index={"quienessomos"} onObserver={handleStepChange} currentStep={currentStep} />
      <ClientsSection index={"skills"} onObserver={handleStepChange} currentStep={currentStep} />
      <StepList
        index={"comotrabajamos"}
        onObserver={handleStepChange}
        currentStepAnother={currentStep}
      />
      <Team index={"team"} onObserver={handleStepChange} currentStep={currentStep} />
      <Blog index={"blog"} onObserver={handleStepChange} currentStep={currentStep} />
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
    <Container>
      <section className="flex justify-around gap-20">
        {data.map(({ value, label, description }, index) => (
          <CountUp end={value} duration={1} key={index} label={label} description={description} />
        ))}
      </section>
    </Container>
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
          className={`text-Chicle  dark:text-white font-Baskerville leading-[40px] w-full text-lg sm:text-sm md:text-2xl lg:text-lg xl:text-xl 2xl:text-6xl  m-0`}
        >
          +{count}
        </h1>

        <Text content={label} extra={"font-extrabold ml-5"} />
      </section>
      <Text content={description} extra={"text-bold"} />
    </section>
  );
};

const AboutExample = () => {
  return (
    <Container>
      <section className="grid grid-cols-4 gap-10">
        <section className="col-span-1 bg-transparent flex-col gap-5 bg-blackCeniza  rounded-xl flex justify-center items-center">
          <Text
            content={
              "Nos enorgullece ofrecer servicios que van desde el diseño y desarrollo web hasta la gestión y análisis de datos, además de incursionar en tecnologías disruptivas como la Blockchain. En Neurons, transformamos ideas en experiencias digitales extraordinarias que impulsan el éxito de nuestros clientes en línea."
            }
            textColor={"text-blackCeniza "}
            w={"w-3/4"}
            extra={"text-start"}
          />
        </section>
        <section className=" border-2 border-blackCeniza p-5 rounded-md">
          {" "}
          <SubTitle
            text={"Visión"}
            position={"text-center "}
            font={"font-Baskerville font-extrabold"}
          />
          <Text
            content={
              "En Neurons, visualizamos un presente donde la innovación digital es accesible y poderosa para todos. Nos esforzamos por ser líderes en la transformación digital, creando soluciones que no solo resuelven desafíos, sino que también inspiran y conectan."
            }
            extra={"text-start"}
          />
        </section>
        <section className="border-2 border-blackCeniza p-5 rounded-md">
          {" "}
          <SubTitle
            font={"font-Baskerville font-extrabold"}
            text={"Misión"}
            position={"text-center"}
          />
          <Text
            content={
              "Nuestra misión es impulsar el éxito de nuestros clientes en el mundo digital mediante la creación de experiencias innovadoras y estratégicas. Desde el desarrollo web hasta la analítica de datos, nos esforzamos por comprender las necesidades únicas de cada cliente y ofrecer soluciones personalizadas"
            }
            extra={"text-start"}
          />
        </section>
        <section className="border-2 border-blackCeniza p-5 rounded-md">
          {" "}
          <SubTitle
            font={"font-Baskerville font-extrabold"}
            text={"¿Por qué elegirnos?"}
            position={"text-center"}
          />
          <Text
            content={
              "Elegir Neurons significa optar por un socio comprometido con la excelencia y la innovación continua. Estamos aquí para transformar su visión digital en realidad, asegurando que cada interacción con nosotros supere sus expectativas y contribuya al éxito sostenible de su negocio."
            }
            extra={"text-start"}
          />
        </section>
      </section>
    </Container>
  );
};
