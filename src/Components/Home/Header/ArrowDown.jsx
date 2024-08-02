import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { motion } from "framer-motion";

const ArrowDown = () => {
  const [showArrow, setShowArrow] = useState(true);
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
  return (
    <>
      {showArrow && (
        <motion.button
          onClick={handleArrowClick}
          whileHover={{ rotate: 360 }}
          whileTap={{ scale: 0.9 }}
          style={{
            position: "absolute",
            bottom: "10px",
            left: "48%",
          }}
        >
          <IoIosArrowDown size={60} className="text-blackCeniza dark:text-white hidden sm:flex" />
        </motion.button>
      )}
    </>
  );
};

export default ArrowDown;
