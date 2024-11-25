import { useState } from "react";
import { motion } from "framer-motion";
import Section from "../../shared/Section/Section";
import Card from "./Card";
import CardAccordion from "./CardAccordion";
import { servicios } from "../../../data/Home";
import Text from "../../shared/Text";

function Servicios({ index }) {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <Section
      title={"¿Por qué elegirnos?"}
      subtitle={" "}
      index={index}
      contentPosition="grid-cols-1 sm:grid-cols-4 md:grid-cols-1 lg:grid-cols-4 justify-center flex flex-col gap-0 sm:flex md:grid w-full pt-0 sm:pt-0 md:pt-10 lg:pt-10 xl:pt-10 2xl:pt-20  3xl:pt-20 "
    >
      <Text
        content={
          "Elegir a Neurons, es optar por una agencia de diseño y desarrollo que se especializa en crear soluciones digitales personalizadas. Que van desde el diseño web profesional o diseño web para empresas ofreciéndote páginas modernas, responsivas y optimizadas para destacar tu negocio en línea, hasta ayudándote a construir plataformas eCommerce que impulsan tus ventas a través del posicionamiento SEO, tambien manejando áreas como la Data Science y Data Analytics. Escogernos significa confiar en un equipo que entiende tus necesidades, prioriza tus objetivos y te acompaña para llevar tu negocio al siguiente nivel con tecnología innovadora y un diseño estratégico."
        }
        extra={"col-span-4 md:col-span-1 pb-10 font-Baskerville text-blackCeniza"}
      />
      <Text
        content={"En Neurons te ofrecemos los siguientes servicios:"}
        extra={"col-span-4  md:col-span-1 pb-0 font-Baskerville text-blackCeniza md:pb-20"}
      />
      {servicios.map((servicio, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0.5, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: idx * 0.2 }}
          viewport={{ once: false }}
          className="p-2 hidden lg:flex"
        >
          <Card
            index={idx}
            title={servicio.title}
            content={servicio.content}
            svg={servicio.svg}
            expanded={expandedIndex === idx}
            onExpand={handleExpand}
            bg={servicio.bg}
          />
        </motion.div>
      ))}

      {servicios.map((servicio, index) => (
        <CardAccordion
          key={index}
          index={index}
          title={servicio.title}
          content={servicio.content}
          svg={servicio.svg}
          expanded={expandedIndex === index}
          onExpand={handleExpand}
        />
      ))}
    </Section>
  );
}

export default Servicios;
