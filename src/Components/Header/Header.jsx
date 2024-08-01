import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Inspector from "../shared/Inspector/Inspector";
import arrow from "../../../public/arrow.svg";
import { IoIosArrowDown } from "react-icons/io";
import ButtonSimple from "../shared/Buttons/ButtonSimple";

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
      <motion.section
        animate={homeControls}
        initial={{ opacity: 1 }}
        id="home"
        className={`min-h-screen bg-gradient-to-bl from-[#c5fcff] via-[#89b8ffe8] to-[#694fff] dark:from-[#001f3fd7] dark:via-[#266cb3dd] dark:to-[#7f7fcc68] flex flex-col gap-10 justify-center sm:justify-center items-center relative`}
      >
        <motion.p
          initial={{ opacity: 0, color: "rgba(255, 255, 255, 0)", y: -100 }}
          animate={{ opacity: 1, color: "rgba(255, 255, 255, 1)", y: 20 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="flex flex-wrap sm:px-0 justify-center text-center items-center gap-2 text-4xl sm:text-lg md:text-5xl lg:text-5xl xl:text-5xl 2xl:text-6xl "
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
                  className="text-2xl sm:text-3xl font-Baskerville text-center"
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
                  className="text-2xl sm:text-3xl font-Baskerville  text-center"
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
            </div>
          ))}
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-2 sm:gap-10">
          <a href={"#quienessomos"} className="flex justify-center w-full">
            <ButtonSimple
              text={"Nuestros Servicios"}
              img={arrow}
              bg={"bg-[#e9eeff]"}
              extra={"hover:shadow-2xl  hover:shadow-[#89b8ffee] dark:hover:shadow-[#001f3fa0]"}
            />
          </a>
          <a href={"#aboutus"} className="flex justify-center w-full">
            <ButtonSimple
              text={"Quienes somos"}
              img={arrow}
              bg={"bg-[#e9eeff]"}
              extra={"hover:shadow-2xl  hover:shadow-[#89b8ffee] dark:hover:shadow-[#001f3fa0]"}
            />
          </a>
        </section>

        {showArrow && (
          <motion.button
            onClick={handleArrowClick}
            whileHover={{ rotate: 360 }}
            animate={controls}
            whileTap={{ scale: 0.9 }}
            style={{
              position: "absolute",
              bottom: "10px",
              left: "50%",
            }}
          >
            <IoIosArrowDown size={60} className="text-blackCeniza dark:text-white hidden sm:flex" />
          </motion.button>
        )}
      </motion.section>
    </Inspector>
  );
}

export default Header;
