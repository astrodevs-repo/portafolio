import Container from "../../Components/Container/Container";

import { motion } from "framer-motion";
import MovingTextJ from "../../Components/TeamAttachment/MovingTextJ";
import FormAttachment from "../../Components/TeamAttachment/FormTeamAttachment";
import NavbarGoBack from "../../Components/shared/NavbarGoBack";
const TeamAttachment = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 3 }}
      className="flex flex-col gap-0 z-40"
    >
      <NavbarGoBack />

      <Container>
        <MovingTextJ
          items={[
            { name: "Innovación", color: "bg-red-500" },
            { name: "Compromiso", color: "bg-yellow-500" },
            { name: "Sostenibilidad", color: "bg-green-500" },
            { name: "Excelencia", color: "bg-blue-500" },
            { name: "Visión Global", color: "bg-pink-500" },
          ]}
          extra="py-5"
          transitionTime={8000} // Adjust the transition time as needed
        />

        {/* <Title extra={"font-Baskerville text-center"} text={"Queremos conocerte"} /> */}

        {/* <SubTitle
          text={
            "En Neurons, nuestro equipo está formado por profesionales apasionados y dedicados que trabajan juntos para crear soluciones innovadoras. Creemos en la colaboración, el aprendizaje continuo y el desarrollo de habilidades. Si te unes a nosotros, formarás parte de un entorno dinámico donde tu voz será escuchada y tu crecimiento profesional será apoyado. ¡Estamos emocionados de conocerte y explorar cómo puedes contribuir a nuestro éxito!"
          }
          extra={"text-start sm:text-center"}
        /> */}
      </Container>
      {/* <ParallaxText items={itemsTeam} baseVelocity={-1} direction={1} extra={""} /> */}
      <FormAttachment />
    </motion.section>
  );
};

export default TeamAttachment;
