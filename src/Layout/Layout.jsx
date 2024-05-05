import { useEffect, useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import { motion } from "framer-motion";

import { FaArrowUp } from "react-icons/fa";

const Layout = ({ children }) => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div style={{ position: "relative" }}>
      <Navbar />
      {children}

      {showButton && (
        <motion.button
          animate={{ y: -50 }}
          transition={{ ease: "easeOut", duration: 2 }}
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: "20px",
            left: "20px",
            zIndex: "1000",
          }}
        >
          <FaArrowUp className="text-gray-500" />
        </motion.button>
      )}

      <a
        href="https://wa.me/tunumero"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          zIndex: "1000",
        }}
      >
        <img
          src="https://static.vecteezy.com/system/resources/previews/018/930/748/non_2x/whatsapp-logo-whatsapp-icon-whatsapp-transparent-free-png.png"
          alt="WhatsApp"
          width="100"
          height="100"
        />
      </a>
    </div>
  );
};

export default Layout;
