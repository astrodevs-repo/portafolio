import React from "react";
import Header from "../../Components/Home/Header/Header";
import Navbar from "../../Components/Navbar/Navbar";
import SEO from "../../Components/shared/SEO/Seo";
import About from "../../Components/About/About";
import Team from "../../Components/Home/team/Team";
import StepList from "../../Components/Home/Stepper/Stepper";
import ClientsSection from "../../Components/Home/SkillsSection/SkillsSection";
//import Blog from "../../Components/Home/Blog/Blog"; // Si necesitas el componente Blog, descomenta esta línea
import Counter from "../../Components/Home/Counter/Counter";
import BackToTopButton from "../../Components/shared/BackTotopButtom";
import Servicios from "../../Components/Home/Servicios/Servicios";
import { useLang } from "../../context/useLang";
import Footer from "../../Components/Footer/Footer";

function Home() {
  const { data } = useLang(); // Destructure to get data

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

      <Header {...data?.home?.sections?.section_1} form={data?.footer?.form} />
      <Counter {...data?.home?.sections?.section_2} />
      <About {...data?.home?.sections?.section_3} />
      <Servicios {...data?.home?.sections?.section_4} />
      <StepList {...data?.home?.sections?.section_5} />
      <ClientsSection {...data?.home?.sections?.section_6} />

      {/* <Blog {...data?.home?.sections?.section_7} /> */}

      <Team {...data?.home?.sections?.section_8} />
      <BackToTopButton />
      <Footer {...data?.footer} />
    </React.Fragment>
  );
}

export default Home;
