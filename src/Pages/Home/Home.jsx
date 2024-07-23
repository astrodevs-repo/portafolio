import About from "../../Components/About/About";
import Header from "../../Components/Header/Header";
import Team from "../../Components/Home/team/Team";
import Footer from "../../Components/Footer/Footer";
import StepList from "../../Components/Home/Steper";
import ClientsSection from "../../Components/Home/ClientsSection/ClientsSection";
import Servicios from "../../Components/Home/Servicios/Servicios";
import { motion } from "framer-motion";
import { useState } from "react";
import Blog from "../../Components/Home/Blog/Blog";

import Navbar from "../../Components/Navbar/Navbar";
import PanelProyectos from "../../Components/PanelProjects/PanelProjects";
import SmokeBackground from "../../Components/shared/Smoked/Smoked";

const Home = () => {
  const [currentStep, setCurrentStep] = useState("1");

  const handleStepChange = (step) => setCurrentStep(step);
  return (
    <motion.main
      className="z-40"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <Navbar />
      <SmokeBackgroundz/>
      <Header index={"home"} onObserver={handleStepChange} currentStep={currentStep} />

      <About index={"aboutus"} onObserver={handleStepChange} currentStep={currentStep} />

      <Servicios index={"quienessomos"} onObserver={handleStepChange} currentStep={currentStep} />

      <ClientsSection index={"skills"} onObserver={handleStepChange} currentStep={currentStep} />
      <StepList
        index={"comotrabajamos"}
        onObserver={handleStepChange}
        currentStepAnother={currentStep}
      />
      <PanelProyectos index={"proyectos"} onObserver={handleStepChange} currentStep={currentStep} />
      <Blog index={"blog"} onObserver={handleStepChange} currentStep={currentStep} />

      <Team index={"team"} onObserver={handleStepChange} currentStep={currentStep} />

      <section className="h-40"></section>

      <Footer index={"contact.anos"} onObserver={handleStepChange} currentStep={currentStep} />
    </motion.main>
  );
};

export default Home;
