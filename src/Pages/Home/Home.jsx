import React, { useState } from "react";
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

import Counter from "../../Components/Home/Counter/Counter";
import SEO from "../../Components/shared/SEO/Seo";

const Home = () => {
  const [currentStep, setCurrentStep] = useState("1");
  const handleStepChange = (step) => setCurrentStep(step);

  return (
    <React.Fragment>
      <SEO
        title={"Neurons | Empresa de Desarrollo y Diseño Web Profesional"}
        description={
          "En Neurons, desarrollamos sitios web y soluciones digitales personalizados y profesionales para y empresa o negocio. Somos una empresa ubicada en Argentina ¡Descubre cómo podemos ayudarte a crecer en línea!"
        }
        image={""}
        url={`https://neurons.com.ar`}
        type=""
        siteName="Neurons"
      />
      <Navbar />
      <SmokeBackground />
      <Header index={"home"} />
      <About index={"aboutus"} onObserver={handleStepChange} currentStep={currentStep} />
      <Counter index={"counter"} onObserver={handleStepChange} currentStep={currentStep} />
      <Servicios index={"quienessomos"} onObserver={handleStepChange} currentStep={currentStep} />
      <ClientsSection index={"skills"} />
      <StepList index={"comotrabajamos"} />
      <Blog index={"blog"} currentStep={currentStep} onObserver={handleStepChange} />
      <Team index={"team"} />
      <Footer index={"contactanos"} />
    </React.Fragment>
  );
};

export default Home;
