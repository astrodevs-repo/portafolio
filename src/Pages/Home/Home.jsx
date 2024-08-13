import { useState } from "react";

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
// import PanelProyectos from "../../Components/PanelProjects/PanelProjects";

const Home = () => {
  const [currentStep, setCurrentStep] = useState("1");

  const handleStepChange = (step) => setCurrentStep(step);
  return (
    <>
      <Navbar />
      <SmokeBackground />
      <Header index={"home"} onObserver={handleStepChange} currentStep={currentStep} />
      <About index={"aboutus"} onObserver={handleStepChange} currentStep={currentStep} />
      <Servicios index={"quienessomos"} onObserver={handleStepChange} currentStep={currentStep} />
      <ClientsSection index={"skills"} onObserver={handleStepChange} currentStep={currentStep} />
      <StepList
        index={"comotrabajamos"}
        onObserver={handleStepChange}
        currentStepAnother={currentStep}
      />
      {/* <PanelProyectos index={"projects"} onObserver={handleStepChange} currentStep={currentStep} /> */}
      <Team index={"team"} onObserver={handleStepChange} currentStep={currentStep} />
      <Blog index={"blog"} onObserver={handleStepChange} currentStep={currentStep} />
      <section className="h-40"></section>
      <Footer index={"contactanos"} />
    </>
  );
};

export default Home;
