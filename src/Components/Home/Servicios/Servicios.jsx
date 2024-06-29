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
import Inspector from "../../shared/Inspector/Inspector";

const Servicios = ({ index, onObserver, currentStep }) => {
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
        "Aplicamos técnicas de Data Science y Data Analytics para extraer información valiosa de los datos y tomar decisiones informadas que impulsen el crecimiento de nuestros clientes.",
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
        "Ofrecemos servicios de mantenimiento continuo y soporte técnico para garantizar el rendimiento óptimo y la seguridad de los sitios web, aplicaciones móviles y las soluciones digitales en general.",
    },
    {
      title: "Blockchain",
      svg: icon7,
      content:
        "Implementamos soluciones basadas en tecnología Blockchain para garantizar la seguridad, la transparencia e integridad de los datos y las transacciones en línea.",
    },
    {
      title: "Google Ads y Posicionamiento SEO",
      svg: icon8,
      content:
        "Desarrollamos estrategias de Google Ads y SEO para aumentar la visibilidad y el tráfico orgánico de los sitios web y aplicaciones móviles, maximizando así el retorno de la inversión de nuestros clientes.",
    },
  ];

  return (
    <Inspector index={index} onObserver={onObserver}>
      <Section
        title={"Nuestros Servicios"}
        id={"quienessomos"}
        index={index}
        currentStep={currentStep}
        extra={"mt-[-200px]"}
      >
        <section className="grid grid-cols-1 sm:grid-cols-4 justify-center gap-5">
          {servicios.map((servicio, index) => (
            <Card key={index} {...servicio} />
          ))}
        </section>
      </Section>
    </Inspector>
  );
};

export default Servicios;

const Card = ({ title, content, svg }) => {
  return (
    <motion.article
      className="items-center flex justify-center max-w-full"
      whileHover={{ scale: 1.02 }}
    >
      <article className="relative bg-blackCeniza h-full w-full  rounded-3xl overflow-hidden flex flex-col justify-center items-center gap-10 px-20 py-10">
        <img src={svg} alt="" />
        <Text content={title} textColor={"text-white"} extra={"text-center"} />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 cursor-pointer hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-slate-600 to-blackCeniza bg-opacity-80 text-white text-center p-5">
          <p>{content}</p>
        </div>
      </article>
    </motion.article>
  );
};
