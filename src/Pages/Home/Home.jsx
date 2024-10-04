import { useState, Suspense, lazy } from "react";
import Loading from "../../Components/shared/Loading/Loading";

const About = lazy(() => import("../../Components/About/About"));
const Header = lazy(() => import("../../Components/Home/Header/Header"));
const Team = lazy(() => import("../../Components/Home/team/Team"));
const Footer = lazy(() => import("../../Components/Footer/Footer"));
const StepList = lazy(() => import("../../Components/Home/Stepper/Stepper"));
const ClientsSection = lazy(() => import("../../Components/Home/SkillsSection/SkillsSection"));
const Servicios = lazy(() => import("../../Components/Home/Servicios/Servicios"));
const Blog = lazy(() => import("../../Components/Home/Blog/Blog"));
const Navbar = lazy(() => import("../../Components/Navbar/Navbar"));
const SmokeBackground = lazy(() => import("../../Components/shared/Smoked/Smoked"));
const ProgressBar = lazy(() => import("../../Components/shared/ProgressBar/ProgressBar"));
const Counter = lazy(() => import("../../Components/Home/Counter/Counter"));

const Home = () => {
  const [currentStep, setCurrentStep] = useState("1");
  const handleStepChange = (step) => setCurrentStep(step);

  return (
    <>
      <Suspense
        fallback={
          <section className="w-screen h-screen flex justify-center items-center">
            <Loading />
          </section>
        }
      >
        <Navbar />
        <ProgressBar />
        <SmokeBackground />
        <Header index={"home"} onObserver={handleStepChange} currentStep={currentStep} />
        <About index={"aboutus"} onObserver={handleStepChange} currentStep={currentStep} />
        <Counter index={"counter"} onObserver={handleStepChange} currentStep={currentStep} />
        <Servicios index={"quienessomos"} onObserver={handleStepChange} currentStep={currentStep} />
        <ClientsSection index={"skills"} onObserver={handleStepChange} currentStep={currentStep} />
        <StepList
          index={"comotrabajamos"}
          onObserver={handleStepChange}
          currentStepAnother={currentStep}
        />
        <Blog index={"blog"} onObserver={handleStepChange} currentStep={currentStep} />
        <Team index={"team"} onObserver={handleStepChange} currentStep={currentStep} />
        <Footer index={"contactanos"} onObserver={handleStepChange} currentStep={currentStep} />
      </Suspense>
    </>
  );
};

export default Home;
