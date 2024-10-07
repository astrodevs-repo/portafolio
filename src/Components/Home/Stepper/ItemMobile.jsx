import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Content from "./Content";
const ItemMobile = React.memo(function ItemMobile({
  name,
  index,
  i,
  onObserver,
  currentStep,
  length,
}) {
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
  }, [index]);

  return (
    <article
      className={`relative flex justify-center ${
        i === length - 1 ? "" : "divide-x-4 divide-blackCeniza dark:divide-gray-400"
      } ${parseInt(currentStep) >= parseInt(index) && i != length - 1 && "divide-x-4"} `}
      ref={ref}
    >
      <section className={``}>
        {/** circle */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: parseInt(currentStep) >= parseInt(index) ? 1 : 1,
            y: parseInt(currentStep) >= parseInt(index) ? 0 : 20,
          }}
          transition={{ duration: 0.5 }}
          className={`bg-blackCeniza dark:bg-gray-400 h-5 w-5 rounded-full absolute -top-5 -left-2 `}
        ></motion.div>
        {/** circle */}

        <span
          className={`border-l-5  ${
            parseInt(currentStep) >= parseInt(index) &&
            "bg-blackCeniza dark:bg-gray-400 opacity-20 w-10 h-10 absolute -top-[30px] left-[-18px] rounded-full"
          }`}
        ></span>
      </section>

      <Content currentStep={currentStep} i={i} index={index} name={name} sections={sections} />
    </article>
  );
});

export default ItemMobile;

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
