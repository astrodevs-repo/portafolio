import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import { motion } from "framer-motion";
import { scrollToSection } from "../../utils/functions";

const BackToTopButton = React.memo(function Navbar({ currentStep }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (currentStep === "blog") {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [currentStep]);

  return (
    <motion.button
      onClick={() => scrollToSection("home")}
      className="fixed bottom-14 left-5 p-4 border-2 border-white text-black rounded-full shadow-lg z-40"
      initial={{ opacity: 0, y: 50, rotate: 180 }}
      animate={{
        opacity: visible ? 1 : 0,
        y: visible ? 0 : 50,
        rotate: visible ? 0 : 180,
      }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      <FaArrowUp size={24} />
      <span className="sr-only"> come back to the top</span>
    </motion.button>
  );
});

export default BackToTopButton;
