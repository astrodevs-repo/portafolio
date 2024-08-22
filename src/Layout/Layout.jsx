import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { FaArrowUp } from "react-icons/fa";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Layout = ({ children }) => {
  const [showButton, setShowButton] = useState(true); // Inicialmente es true

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Check initial position on mount
    handleScroll();

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
    <section style={{ position: "relative" }}>
      <motion.section
        className="z-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 3 }}
      >
        {children}
      </motion.section>

      {showButton && (
        <motion.button
          animate={{ y: -50 }}
          transition={{ ease: "easeOut", duration: 2 }}
          onClick={scrollToTop}
          className="fixed bottom-10 left-5"
          style={{
            zIndex: "1000",
          }}
        >
          <FaArrowUp className="text-gray-500" />
        </motion.button>
      )}

      <a
        href="https://wa.me/+5492612336104"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-10 right-2 "
        style={{
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
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition="Bounce" // Corrige la propiedad de transición
      />
    </section>
  );
};

export default Layout;
