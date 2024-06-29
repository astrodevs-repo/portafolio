import Inspector from "../shared/Inspector/Inspector";
import { motion } from "framer-motion";

import s from "./header.module.scss";
import arrow from "../../../public/arrow.svg"

function Header({ index, onObserver, currentStep }) {
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
  return (
    <Inspector index={index} onObserver={onObserver}>
      <section
        id="home"
        className={`min-h-screen bg-gradient-to-bl from-[#c5fcff] via-[#89b8ffcc] to-[#694fff] flex flex-col justify-center sm:justify-center`}
      >
        <div id="title" className="flex flex-col justify-center gap-10 sm:gap-10">
          <motion.p
            initial={{ opacity: 0, color: "rgba(255, 255, 255, 0)", y: -100 }}
            animate={
              index === currentStep ? { opacity: 1, color: "rgba(255, 255, 255, 1)", y: 20 } : {}
            }
            transition={{ duration: 1, ease: "easeInOut" }}
            className="flex flex-wrap  sm:px-0  justify-center text-center items-center gap-2 text-4xl sm:text-lg md:text-5xl lg:text-5xl xl:text-5xl 2xl:text-6xl"
          >
            NOSOTROS
            <span>SOMOS</span>
            {"  "}
            <strong style={gradientText} className="font-LusitanaBold mt-2">
              {" "}
              NEURONS
            </strong>
            <br />
          </motion.p>
          <section className="flex flex-wrap justify-center px-8 sm:px-0">
            {["Una firma integral de soluciones digitales."].map((phrase, phraseIndex) => (
              <div key={phraseIndex} className="flex flex-wrap justify-center">
                {phrase.split("").map((letter, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="text-2xl sm:text-3xl font-Poppins font-extrabold  text-center"
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
      </section>
    </Inspector>
  );
}

export default Header;
