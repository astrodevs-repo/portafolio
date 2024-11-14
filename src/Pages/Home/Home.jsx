import React from "react";
import Header from "../../Components/Home/Header/Header";
import Navbar from "../../Components/Navbar/Navbar";
import SEO from "../../Components/shared/SEO/Seo";

import { lazy, Suspense } from "react";

// Cargar los componentes de manera diferida
const About = lazy(() => import("../../Components/About/About"));
const Team = lazy(() => import("../../Components/Home/team/Team"));
const StepList = lazy(() => import("../../Components/Home/Stepper/Stepper"));
const ClientsSection = lazy(() => import("../../Components/Home/SkillsSection/SkillsSection"));
const Blog = lazy(() => import("../../Components/Home/Blog/Blog"));
const Counter = lazy(() => import("../../Components/Home/Counter/Counter"));
const BackToTopButton = lazy(() => import("../../Components/shared/BackTotopButtom"));
const Servicios = lazy(() => import("../../Components/Home/Servicios/Servicios"));

function Home() {
  return (
    <React.Fragment>
      <SEO
        title={"Neurons | Empresa de Desarrollo y Diseño Web Profesional"}
        description={
          "En Neurons, desarrollamos sitios web y soluciones digitales personalizados y profesionales para cualquier empresa o negocio. ¡Descubre cómo podemos ayudarte a crecer en línea!"
        }
        image={""}
        url={`https://neurons.com.ar`}
        type=""
        siteName="Neurons"
      />
      <Navbar />
      <Header index={"home"} />
      <Suspense fallback={<div>Cargando contador...</div>}>
        <Counter index={"counter"} />
      </Suspense>
      <Suspense fallback={<div>Cargando sobre nosotros...</div>}>
        <About index={"aboutus"} />
      </Suspense>
      <Suspense fallback={<div>Cargando servicios...</div>}>
        <Servicios index={"quienessomos"} />
      </Suspense>
      <Suspense fallback={<div>Cargando pasos...</div>}>
        <StepList index={"comotrabajamos"} />
      </Suspense>
      <Suspense fallback={<div>Cargando habilidades...</div>}>
        <ClientsSection index={"skills"} />
      </Suspense>
      <Suspense fallback={<div>Cargando blog...</div>}>
        <Blog index={"blog"} />
      </Suspense>
      <Suspense fallback={<div>Cargando equipo...</div>}>
        <Team index={"team"} />
      </Suspense>
      <Suspense fallback={<div>Cargando botón...</div>}>
        <BackToTopButton />
      </Suspense>
    </React.Fragment>
  );
}

export default Home;
