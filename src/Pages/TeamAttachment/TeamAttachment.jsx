import { useEffect } from "react";
import Container from "../../Components/Container/Container";
import SubTitle from "../../Components/shared/SubTitle";
import MovingText from "../../Components/shared/velocity/Velocity";
import { itemsTeam } from "../../data/Home";
import { motion } from "framer-motion";
import NavbarGoBack from "../../../NavbarGoBack";
import MovingTextJ from "../../Components/TeamAttachment/MovingTextJ";
import FormAttachment from "../../Components/TeamAttachment/FormTeamAttachment";
import Title from "../../Components/shared/Title";
import useForm from "../../hooks/useForm";
const TeamAttachment = () => {
  const { sended } = useForm();
  console.log("first", sended);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

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
        <MovingText
          right={"0%"}
          left={"-100%"}
          items={itemsTeam}
          extra={
            "max-w-[250px] min-w-[250px] max-h-[300px] min-h-[300px] sm:max-w-[400px] sm:min-w-[400px] sm:max-h-[500px] sm:min-h-[500px] rounded-lg flex sm:hidden"
          }
        />
        <Title extra={"font-Baskerville text-center"} text={"Queremos conocerte"} />

        <SubTitle
          text={
            "En Neurons, nuestro equipo está formado por profesionales apasionados y dedicados que trabajan juntos para crear soluciones innovadoras. Creemos en la colaboración, el aprendizaje continuo y el desarrollo de habilidades. Si te unes a nosotros, formarás parte de un entorno dinámico donde tu voz será escuchada y tu crecimiento profesional será apoyado. ¡Estamos emocionados de conocerte y explorar cómo puedes contribuir a nuestro éxito!"
          }
          extra={"text-start sm:text-center"}
        />
      </Container>
      <MovingText
        right={"0%"}
        left={"-100%"}
        items={itemsTeam}
        extra={
          "max-w-[250px] min-w-[250px] max-h-[300px] min-h-[300px] sm:max-w-[400px] sm:min-w-[400px] sm:max-h-[500px] sm:min-h-[500px] rounded-lg hidden sm:flex "
        }
      />
      <FormAttachment />
    </motion.section>
  );
};

export default TeamAttachment;
