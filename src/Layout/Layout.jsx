import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ReactLenis } from "lenis/dist/lenis-react";
import { useLang } from "../context/useLang";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Layout = ({ children }) => {
  const data = useLang();

  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    // Escuchar el scroll para ocultar el botón
    const handleScroll = () => {
      if (window.scrollY > 50) {
        // Cambia 50 por el valor que necesites
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!data) {
    return <div>Loading...</div>; // Display loading state until data is available
  }
  return (
    <section style={{ position: "relative" }}>
      <ReactLenis
        root
        options={{
          lerp: 0.05,
        }}
      >
        {children}
      </ReactLenis>

      <a
        href="https://wa.me/+5492612336104"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-0 right-0"
        style={{
          zIndex: "1000",
        }}
      >
        <motion.section
          className="relative"
          initial={{ opacity: 0 }} // Empieza invisible
          animate={{ opacity: 1 }} // Se anima a aparecer
          transition={{ duration: 0.5 }}
        >
          <motion.img
            src="https://i.pinimg.com/originals/16/71/c0/1671c09a32f98796ede36fabfab4dee7.png"
            alt="Notification"
            className="w-24 h-24 sm:w-32 sm:h-32"
            initial={{ scale: 0 }} // Comienza pequeño
            animate={{ scale: 1 }} // Se anima a su tamaño original
            transition={{ duration: 0.5 }}
          />
          <span className="sr-only">Notifications</span>

          <motion.div
            className="absolute top-5 left-5 inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full dark:border-gray-900"
            initial={{ scale: 0 }} // Comienza pequeño
            animate={{ scale: 1 }} // Se anima a su tamaño original
            transition={{
              duration: 0.5,
              delay: 5, // Aparece después de 5 segundos
            }}
          >
            1
          </motion.div>

          {isVisible && (
            <motion.div
              className="absolute bottom-10 right-28 transform -translate-x-full p-2 bg-white text-black rounded-md hidden sm:flex min-w-fit md:min-w-72"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="block">Escribenos acá, somos Neurons</span>
            </motion.div>
          )}
        </motion.section>
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
