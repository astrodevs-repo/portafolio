import React, { useEffect } from "react";
import Header from "../../Components/Home/Header/Header";
import Navbar from "../../Components/Navbar/Navbar";
import SEO from "../../Components/shared/SEO/Seo";
import About from "../../Components/About/About";
import Team from "../../Components/Home/team/Team";
import StepList from "../../Components/Home/Stepper/Stepper";
import ClientsSection from "../../Components/Home/SkillsSection/SkillsSection";
import Counter from "../../Components/Home/Counter/Counter";
import BackToTopButton from "../../Components/shared/BackTotopButtom";
import Servicios from "../../Components/Home/Servicios/Servicios";
import { useLang } from "../../context/useLang";
import Footer from "../../Components/Footer/Footer";
import useScrollSpy from "../../hooks/useScrollSpy"; // Importamos el hook

function Home() {
  const { data } = useLang(); // Destructure to get data
  // Definir los IDs de las secciones que quieres rastrear
  const sectionIds = [
    "back",
    "inicio",
    "estadisticas",
    "quienessomos",
    "porqueelegirnos",
    "comotrabajamos",
    "herramientas",
    "equipo",
  ];

  // Usamos el hook useScrollSpy de manera consistente
  const { activeSection } = useScrollSpy(sectionIds);
  useEffect(() => {
    if (activeSection) {
      // Actualizar la URL con la sección activa
      window.history.replaceState(null, "", `#${activeSection}`);
    }
  }, [activeSection]);

  if (!data) {
    return <div>Loading...</div>; // Display loading state until data is available
  }

  return (
    <React.Fragment>
      <SEO
        title={"Neurons | Agencia de Desarrollo y Diseño Web Profesionales"}
        description={
          "En Neurons, desarrollamos sitios web y soluciones digitales personalizados y profesionales para cualquier empresa o negocio. ¡Descubre cómo podemos ayudarte a crecer en línea!"
        }
        image={""}
        url={`https://neurons.com.ar`}
        type=""
        siteName="Neurons"
      />
      <Navbar {...data?.navbar} />
      <section id="back" className="h-2 w-full"></section>
      <Header id="inicio" {...data?.home?.sections?.section_1} form={data?.footer?.form} />
      <Counter id="estadisticas" {...data?.home?.sections?.section_2} />
      <About id="quienessomos" {...data?.home?.sections?.section_3} />
      <Servicios id="porqueelegirnos" {...data?.home?.sections?.section_4} />
      <StepList id="comotrabajamos" {...data?.home?.sections?.section_5} />
      <ClientsSection id="herramientas" {...data?.home?.sections?.section_6} />
      <Team id="equipo" {...data?.home?.sections?.section_8} />

      <BackToTopButton />
      <Footer {...data?.footer} />
    </React.Fragment>
  );
}

export default Home;
