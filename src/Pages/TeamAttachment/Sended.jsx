import { useEffect, useState } from "react";
import Container from "../../Components/Container/Container";
import SubTitle from "../../Components/shared/SubTitle";
import { motion } from "framer-motion";
import Title from "../../Components/shared/Title";
import { FaCheck } from "react-icons/fa";
import ScrollToTop from "../../Components/shared/ScrollTop/ScrollTop";
import NavbarGoBack from "../../Components/shared/NavbarGoBack";
const Sended = () => {
  const [animationState, setAnimationState] = useState("initial");

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    // Cambia el estado de animación después de 3 segundos
    const timer = setTimeout(() => setAnimationState("spin"), 800);
    return () => clearTimeout(timer);
  }, []);
  return (
    <ScrollToTop>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 3 }}
        className="flex flex-col gap-0 z-40"
      >
        <NavbarGoBack />
        <Container>
          <section className="w-full flex justify-center">
            <motion.article
              className="w-20 h-20 bg-green-700 flex justify-center items-center rounded-full"
              initial={{ opacity: 1, scale: 0.8 }}
              animate={animationState === "initial" ? { opacity: 1, scale: 1 } : { rotate: 360 }}
              transition={{ duration: animationState === "initial" ? 3 : 1, ease: "easeOut" }}
            >
              <FaCheck className="text-white" size={25} />
            </motion.article>
          </section>

          <Title
            extra={"font-Baskerville text-center"}
            text={"¡Gracias por enviar tu currículum!"}
          />

          <SubTitle
            text={
              "Hemos recibido tu currículum y lo revisaremos a la brevedad. Nos pondremos en contacto contigo si tu perfil se ajusta a nuestras necesidades. ¡Gracias por tu interés en ser parte de nuestro equipo!"
            }
            extra={"text-center sm:text-center"}
          />
        </Container>
      </motion.section>
    </ScrollToTop>
  );
};

export default Sended;
