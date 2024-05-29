import Inspector from "../shared/Inspector/Inspector";
import SubTitle from "../shared/SubTitle";
import { motion } from "framer-motion";

import s from "./header.module.scss";

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
      <main
        id="home"
        className={`h-screen bg-gradient-to-bl from-[#c5fcff] via-[#89b8ffcc] to-[#694fff] flex flex-col justify-center items-center`}
      >
        <div id="title" className="flex flex-col justify-center gap-10 sm:gap-20">
          <motion.p
            initial={{ opacity: 0, color: "rgba(255, 255, 255, 0)", y: -100 }}
            animate={
              index === currentStep ? { opacity: 1, color: "rgba(255, 255, 255, 1)", y: 20 } : {}
            }
            transition={{ duration: 1, ease: "easeInOut" }}
            className="flex flex-wrap px-20 sm:px-0  justify-center text-center items-center gap-2 text-5xl sm:text-lg md:text-xl lg:text-2xl xl:text-5xl 2xl:text-8xl"
          >
            NOSOTROS SOMOS
            {"  "}
            <strong style={gradientText}> NEURONS</strong>
            <br />
          </motion.p>
          <SubTitle text={"Una firma integral de soluciones digitales."} position={"text-center"} />
        </div>

        <div className={s.header__buttons}>
          <a href={"#quienessomos"}>
            <button className="font-Poppins">
              Nuestros Proyectos
              <img
                className={s.hoverimg}
                style={{ position: "absolute", right: "0.3vmax" }}
                src="src/assets/buttons/arrow.svg"
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
                src="src/assets/buttons/arrow.svg"
                alt=""
              />
            </button>
          </a>
        </div>
      </main>
    </Inspector>
  );
}

export default Header;
