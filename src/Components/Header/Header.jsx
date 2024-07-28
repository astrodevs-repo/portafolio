import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Inspector from "../shared/Inspector/Inspector";
import s from "./header.module.scss";
import arrow from "../../../public/arrow.svg";
import { IoIosArrowDown } from "react-icons/io";

function Header({ index, onObserver }) {
  const [scrollY, setScrollY] = useState(0);
  const [showArrow, setShowArrow] = useState(true);
  const homeControls = useAnimation();
  const headerControls = useAnimation();
  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const homeOpacity = 1 - Math.min(scrollY / 300, 1);

    const headerOpacity = Math.min(scrollY / 300, 1);
    const headerY = Math.min(scrollY / 100, 1) * 50;

    homeControls.start({ opacity: homeOpacity });
    headerControls.start({ opacity: headerOpacity, y: -headerY });

    if (scrollY > 100) {
      setShowArrow(false);
    } else {
      setShowArrow(true);
    }
  }, [scrollY, homeControls, headerControls]);

  const scrollToAboutUs = () => {
    const aboutUsSection = document.getElementById("aboutus");
    if (aboutUsSection) {
      aboutUsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleArrowClick = () => {
    scrollToAboutUs();
    setShowArrow(false);
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
  const controls = useAnimation();

  useEffect(() => {
    const interval = setInterval(() => {
      controls.start({ scale: [1, 1.1, 1] });
    }, 3000);

    return () => clearInterval(interval);
  }, [controls]);

  return (
    <Inspector index={index} onObserver={onObserver}>
      <section className="">
        <motion.section
          animate={homeControls}
          initial={{ opacity: 1 }}
          id="home"
          className={`min-h-screen bg-gradient-to-bl from-[#c5fcff] via-[#89b8ffcc] to-[#694fff] flex flex-col justify-center sm:justify-center relative`}
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
            <a href={"#aboutus"}>
              <button className="font-Poppins">
                Quienes somos
                <img
                  className={s.hoverimg}
                  style={{ position: "absolute", right: "0.3vmax" }}
                  src={arrow}
                  alt=""
                />
              </button>
            </a>
          </div>

          {showArrow && (
            <motion.button
              onClick={handleArrowClick}
              className=""
              whileHover={{ rotate: 360 }}
              animate={controls}
              whileTap={{ scale: 0.9 }}
              style={{
                position: "absolute",
                bottom: "10px",
                left: "50%",
              }}
            >
              <IoIosArrowDown size={60} className="text-blackCeniza" />
            </motion.button>
          )}
        </motion.section>
      </section>
    </Inspector>
  );
}

export default Header;
