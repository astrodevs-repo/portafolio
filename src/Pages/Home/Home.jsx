import About from "../../Components/About/About";
import Header from "../../Components/Header/Header";
import Team from "../../Components/Home/team/Team";
import Footer from "../../Components/Footer/Footer";
import StepList from "../../Components/Home/Steper";
import ClientsSection from "../../Components/Home/ClientsSection/ClientsSection";
import Servicios from "../../Components/Home/Servicios/Servicios";

import { motion } from "framer-motion";
import { useState } from "react";

const Home = () => {
  const [currentStep, setCurrentStep] = useState("1");

  const handleStepChange = (step) => setCurrentStep(step);
  return (
    <motion.main
      className="main__container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <Header index={"home"} onObserver={handleStepChange} currentStep={currentStep} />
      <About index={"aboutus"} onObserver={handleStepChange} currentStep={currentStep} />
      <Servicios index={"quienessomos"} onObserver={handleStepChange} currentStep={currentStep} />
      <ClientsSection index={"skills"} onObserver={handleStepChange} currentStep={currentStep} />
      <StepList
        index={"comotrabajamos"}
        onObserver={handleStepChange}
        currentStepAnother={currentStep}
      />
      <Team index={"team"} onObserver={handleStepChange} currentStep={currentStep} />
      <Footer index={"contact.anos"} onObserver={handleStepChange} currentStep={currentStep} />
    </motion.main>
  );
};

export default Home;
