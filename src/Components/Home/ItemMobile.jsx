import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Text from "../shared/Text";

const ItemMobile = ({ name, index, i, onObserver, currentStep }) => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) onObserver(index);
        });
      },
      { threshold: 0, rootMargin: "-50% 0% -50% 0%" }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  return (
    <article className="step" ref={ref}>
      <section className={`v-stepper `}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: parseInt(currentStep) >= parseInt(index) ? 1 : 1,
            y: parseInt(currentStep) >= parseInt(index) ? 0 : 20,
          }}
          transition={{ duration: 0.5 }}
          className={`circle${index}  ${parseInt(currentStep) >= parseInt(index) && "active"}`}
        >
          <span className="steper-count"></span>
        </motion.div>
        <motion.div
          ref={ref}
          initial={{ opacity: 20, y: 20 }}
          animate={{
            opacity: parseInt(currentStep) >= parseInt(index) ? 1 : 0,
            y: parseInt(currentStep) >= parseInt(index) ? 0 : 20,
            scale: parseInt(currentStep) >= parseInt(index) ? 1.3 : 1,
          }}
          transition={{ duration: 0.5 }}
          className={`circlefade  ${parseInt(currentStep) >= parseInt(index) && "activefade"}`}
        >
          <span className="steper-count"></span>
        </motion.div>

        <span
          className={`line  ${parseInt(currentStep) >= parseInt(index) && "activeLine"}`}
        ></span>
      </section>

      <Content currentStep={currentStep} i={i} index={index} name={name} />
    </article>
  );
};

export default ItemMobile;

const Content = ({ currentStep, index, i, name }) => {
  return (
    <section className="w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 pb-20">
      <motion.p
        initial={{ opacity: 20, y: 20 }}
        animate={{
          opacity: parseInt(currentStep) >= parseInt(index) ? 1 : 0,
          y: parseInt(currentStep) >= parseInt(index) ? 0 : 5,
          scale: parseInt(currentStep) >= parseInt(index) ? 1.1 : 1,
        }}
        transition={{ duration: 0.5 }}
        className="text-xs sm:text-xs md:text-lg lg:text-2xl  w-3/4  mt-3 ml-8 sm:ml-20 text-black font-Poppins uppercase hidden sm:flex"
      >
        {name}
      </motion.p>
      <motion.section
        initial={{ opacity: 20, y: 20 }}
        animate={{
          opacity: parseInt(currentStep) >= parseInt(index) ? 1 : 0,
          y: parseInt(currentStep) >= parseInt(index) ? 0 : 5,
          scale: parseInt(currentStep) >= parseInt(index) ? 1.1 : 1,
        }}
        transition={{ duration: 0.5 }}
        className="flex flex-col pl-20 pr-5 col-span-2 h-full py-1 text-justify"
      >
        <Text content={sections[i]?.subTitle} />
      </motion.section>
    </section>
  );
};

const sections = [
  {
    title: "Contacto Inicial",
    subTitle:
      "Nos contactas a través de nuestra WEB, WhatsApp o redes sociales. Recibimos tu solicitud y registramos toda la información relevante en nuestro sistema de gestión de proyectos.",
    img: "roadmap1",
    index: "1",
  },
  {
    title: "Reunión Inicial y Análisis de Requerimientos",
    subTitle:
      "Nuestro equipo especializado te contactará para agendar una videollamada y discutir cómo Neurons te puede ayudar. Durante la videollamada, recopilamos todos los requisitos del proyecto y documentamos detalladamente las especificaciones y objetivos. Esto se convierte en el documento de requisitos que guiará todo el proyecto.",
    img: "roadmap2",
    index: "2",
  },
  {
    title: "Diseño del Plan de Acción",
    subTitle:
      "Neurons genera un plan de acción para establecer plazos, aciertos y desaciertos de tus requerimientos. Elaboramos un diseño detallado del sistema, incluyendo arquitectura, componentes, interfaces y algoritmos. Este diseño es revisado y aprobado antes de avanzar.",
    img: "roadmap3",
    index: "3",
  },
  {
    title: "Ejecución del Plan",
    subTitle:
      "Ejecución del plan de acción con plazos establecidos, donde te mostraremos nuestros avances. Desarrollamos el sistema siguiendo el diseño aprobado, implementando cada componente de manera secuencial. Este proceso incluye desarrollo de código, integración de componentes y preparación para pruebas.",
    img: "roadmap4",
    index: "4",
  },
  {
    title: "Pruebas y Validación",
    subTitle:
      "Puesta en producción para recibir tu feedback. Realizamos pruebas exhaustivas para garantizar que el sistema cumple con todos los requisitos especificados. Estas pruebas incluyen pruebas unitarias, de integración, de sistema y de aceptación por el usuario.",
    img: "roadmap5",
    index: "5",
  },
  {
    title: "Entrega del Proyecto",
    subTitle:
      "Una vez que el sistema ha pasado todas las pruebas, se entrega el proyecto completo al cliente. Esta entrega incluye toda la documentación necesaria y una capacitación si es requerida.",
    img: "roadmap6",
    index: "6",
  },
  {
    title: "Mantenimiento y Mejoras",
    subTitle:
      "Después de la entrega, proporcionamos soporte para el mantenimiento y cualquier mejora necesaria. Esto incluye corrección de errores, actualizaciones y mejoras basadas en nuevas necesidades del cliente.",
    img: "roadmap6",
    index: "6",
  },
];
