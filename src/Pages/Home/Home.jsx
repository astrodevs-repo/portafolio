import React, { useState, Suspense, lazy } from "react";
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
const Counter = lazy(() => import("../../Components/Home/Counter/Counter"));
const SEO = lazy(() => import("../../Components/shared/SEO/Seo"));
const BackToTopButton = lazy(() => import("../../Components/shared/BackTotopButtom"));

const Home = () => {
  const [currentStep, setCurrentStep] = useState("1");
  const handleStepChange = (step) => setCurrentStep(step);

  return (
    <React.Fragment>
      <Suspense
        fallback={
          <section className="h-screen w-full flex justify-center items-center">
            <Loading />
          </section>
        }
      >
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
        <BackToTopButton currentStep={currentStep} />
      </Suspense>
    </React.Fragment>
  );
};

export default Home;
