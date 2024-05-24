import Section from "../../shared/Section/Section";

import Text from "../../shared/Text";
import { motion } from "framer-motion";

import icon1 from "/public/services/1.svg";
import icon2 from "/public/services/2.svg";
import icon3 from "/public/services/3.svg";
import icon4 from "/public/services/4.svg";
import icon5 from "/public/services/5.svg";
import icon6 from "/public/services/6.svg";
import icon7 from "/public/services/7.svg";
import icon8 from "/public/services/8.svg";
import { useState } from "react";
import ButtonSimple from "../../shared/Buttons/ButtonSimple";

const Servicios = () => {
  const [showMore, setShowMore] = useState(false);
  const servicios = [
    {
      title: "Desarrollo Aplicaciones Web",
      svg: icon1,
      content:
        "Creamos sitios web dinámicos, receptivos y optimizados para ofrecer una experiencia de usuario excepcional en todos los dispositivos.",
    },
    {
      title: "Desarrollo de Aplicaciones Móviles",
      svg: icon2,
      content:
        "Creamos aplicaciones móviles personalizadas para iOS y Android que ofrecen experiencias fluidas y atractivas para los usuarios, ampliando así el alcance y la interacción con la audiencia.",
    },
    {
      title: "Creación de Bases de Datos",
      svg: icon3,
      content:
        "Desarrollamos bases de datos robustas y escalables que permiten la gestión eficiente de la información y el acceso rápido a los datos críticos para el negocio.",
    },
    {
      title: "Data Science y Data Analytic",
      svg: icon4,
      content:
        "Aplicamos técnicas de data science y data analytics para extraer información valiosa de los datos y tomar decisiones informadas que impulsen el crecimiento de nuestros clientes.",
    },
    {
      title: "Diseño UX/UI",
      svg: icon5,
      content:
        "Diseñamos interfaces intuitivas y atractivas que maximizan la usabilidad y la interacción del usuario, utilizando herramientas como Figma para prototipado y diseño colaborativo.",
    },
    {
      title: "Mantenimiento y Soporte",
      svg: icon6,
      content:
        "frecemos servicios de mantenimiento continuo y soporte técnico para garantizar el rendimiento óptimo y la seguridad de los sitios web, aplicaciones móviles y las soluciones digitales en general.",
    },
    {
      title: "Blockchain",
      svg: icon7,
      content:
        "Implementamos soluciones basadas en tecnología blockchain para garantizar la seguridad, la transparencia y la integridad de los datos y las transacciones en línea.",
    },
    {
      title: "Google Ads y Posicionamiento SEO",
      svg: icon8,
      content:
        "Desarrollamos estrategias de Google Ads y SEO para aumentar la visibilidad y el tráfico orgánico de los sitios web y aplicaciones móviles, maximizando así el retorno de la inversión de nuestros clientes.",
    },
  ];

  const serviciosToShow = showMore ? servicios : servicios.slice(0, 6);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <Section title={"Nuestros Servicios"}>
      <section className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-10">
        {serviciosToShow.map((servicio, index) => (
          <Card key={index} {...servicio} />
        ))}
      </section>
      {!showMore && <ButtonSimple func={toggleShowMore} text={"Mostrar más"} bg={"bg-[#134EA7]"} />}
    </Section>
  );
};

export default Servicios;

const Card = ({ title, content, svg }) => {
  return (
    <motion.article className="items-center flex justify-center" whileHover={{ scale: 1.02 }}>
      <article className="relative bg-blackCeniza h-[380px] w-full mx-auto rounded-3xl overflow-hidden flex flex-col justify-center items-center gap-10">
        <img src={svg} alt="" />
        <Text content={title} textColor={"text-white"} extra={"text-center"} />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 cursor-pointer hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-80 text-white text-center p-5">
          <Text content={content} />
        </div>
      </article>
    </motion.article>
  );
};
