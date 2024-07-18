import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Inspector from "../shared/Inspector/Inspector";
import s from "./header.module.scss";
import arrow from "../../../public/arrow.svg";
import Title from "../shared/Title";
import SubTitle from "../shared/SubTitle";
import Text from "../shared/Text";
import About from "../About/About";

function Header({ index, onObserver }) {
  const [scrollY, setScrollY] = useState(0);

  // Controladores de animación de framer-motion para las secciones
  const homeControls = useAnimation();
  const headerControls = useAnimation();

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    // Escucha el evento de desplazamiento
    window.addEventListener("scroll", handleScroll);

    // Limpia el event listener cuando el componente se desmonte
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Calcula la opacidad para la sección "home"
    const homeOpacity = 1 - Math.min(scrollY / 300, 1);

    // Calcula la opacidad y desplazamiento para la sección "header"
    const headerOpacity = Math.min(scrollY / 300, 1);
    const headerY = Math.min(scrollY / 100, 1) * 50; // Ajusta el valor 50 según sea necesario

    // Inicia las animaciones
    homeControls.start({ opacity: homeOpacity });
    headerControls.start({ opacity: headerOpacity, y: -headerY });
  }, [scrollY, homeControls, headerControls]);

  const scrollToAboutUs = () => {
    const aboutUsSection = document.getElementById("aboutus");
    if (aboutUsSection) {
      aboutUsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const gradientText = {
    backgroundImage: "linear-gradient(to right, #8B5CF6, #6366F1)",
    WebkitBackgroundClip: "text",
    color: "transparent",
  };

  const firstPhrase = "Una firma integral de ";
  const secondPhrase = "soluciones digitales.";

  const calculateTotalDelay = (phrase) => {
    return phrase.length * 0.05;
  };

  const firstPhraseDelay = calculateTotalDelay(firstPhrase);

  return (
    <Inspector index={index} onObserver={onObserver}>
      <section className="relative">
        <motion.section
          animate={homeControls}
          initial={{ opacity: 1 }}
          id="home"
          className={`min-h-screen bg-gradient-to-bl from-[#c5fcff] via-[#89b8ffcc] to-[#694fff] flex flex-col justify-center sm:justify-center`}
        >
          <div id="title" className="flex flex-col justify-center gap-10 sm:gap-10">
            <motion.p
              initial={{ opacity: 0, color: "rgba(255, 255, 255, 0)", y: -100 }}
              animate={{ opacity: 1, color: "rgba(255, 255, 255, 1)", y: 20 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="flex flex-wrap sm:px-0 justify-center text-center items-center gap-2 text-4xl sm:text-lg md:text-5xl lg:text-5xl xl:text-5xl 2xl:text-6xl"
            >
              Nosotros
              <span>somos</span>
              {"  "}
              <strong style={gradientText} className="font-LusitanaBold mt-2">
                {" "}
                Neurons
              </strong>
              <br />
            </motion.p>
            <section className="flex flex-wrap justify-center px-12 sm:px-0">
              {[firstPhrase].map((phrase, phraseIndex) => (
                <div key={phraseIndex} className="flex flex-wrap justify-center">
                  {phrase.split("").map((letter, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="text-2xl sm:text-3xl font-Baskerville font-extrabold text-center"
                    >
                      {letter === " " ? "\u00A0" : letter}
                    </motion.span>
                  ))}
                </div>
              ))}
              {[secondPhrase].map((phrase, phraseIndex) => (
                <div key={phraseIndex} className="flex flex-wrap justify-center">
                  {phrase.split("").map((letter, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: firstPhraseDelay + index * 0.05 }}
                      className="text-2xl sm:text-3xl font-Baskerville font-extrabold text-center"
                    >
                      {letter === " " ? "\u00A0" : letter}
                    </motion.span>
                  ))}
                </div>
              ))}
            </section>
          </div>

          <div className={s.header__buttons}>
            <a href={"#quienessomos"}>
              <button className="font-Poppins">
                Nuestros Servicios
                <img
                  className={s.hoverimg}
                  style={{ position: "absolute", right: "0.3vmax" }}
                  src={arrow}
                  alt=""
                />
              </button>
            </a>
            <a href="#aboutus">
              <button onClick={scrollToAboutUs}>
                Quienes Somos
                <img
                  className={s.hoverimg}
                  style={{ position: "absolute", right: "0.3vmax" }}
                  src={arrow}
                  alt=""
                />
              </button>
            </a>
          </div>
        </motion.section>
        <motion.section
          id="header"
          className="top-3/4 absolute w-full flex justify-center"
          animate={headerControls}
          initial={{ opacity: 1, y: 0 }}
        >
          <About />
        </motion.section>
      </section>
    </Inspector>
  );
}

export default Header;
