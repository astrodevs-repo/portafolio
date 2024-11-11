import React from "react";
import About from "../../Components/About/About";
import Header from "../../Components/Home/Header/Header";
import Team from "../../Components/Home/team/Team";
import StepList from "../../Components/Home/Stepper/Stepper";
import ClientsSection from "../../Components/Home/SkillsSection/SkillsSection";
import Servicios from "../../Components/Home/Servicios/Servicios";
import Blog from "../../Components/Home/Blog/Blog";
import Navbar from "../../Components/Navbar/Navbar";
import SmokeBackground from "../../Components/shared/Smoked/Smoked";
import SEO from "../../Components/shared/SEO/Seo";
import BackToTopButton from "../../Components/shared/BackTotopButtom";
import Counter from "../../Components/Home/Counter/Counter";

const Home = React.memo(function Home() {
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
      <Counter index={"counter"} />
      <About index={"aboutus"} />
      <Servicios index={"quienessomos"} />
      <StepList index={"comotrabajamos"} />
      <ClientsSection index={"skills"} />

      <Blog index={"blog"} />
      <Team index={"team"} />
      <BackToTopButton />
    </React.Fragment>
  );
});

export default Home;
