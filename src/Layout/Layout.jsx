import { useEffect, useState } from "react";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import PropTypes from "prop-types";
import { FaArrowUp } from "react-icons/fa";

const Layout = ({ children }) => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    // Función que maneja el evento de desplazamiento
    const handleScroll = () => {
      // Verifica si la posición de desplazamiento es mayor que 400px
      if (window.scrollY > 400) {
        setShowButton(true); // Muestra el botón
      } else {
        setShowButton(false); // Oculta el botón
      }
    };

    // Agrega un event listener para el evento de desplazamiento
    window.addEventListener("scroll", handleScroll);

    // Limpia el event listener cuando el componente se desmonta
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Función para manejar el clic en el botón
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Desplazamiento suave
    });
  };

  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <Navbar />
      {children}
      <Footer id={"footer"} />
      {/* Botón para ir arriba */}
      {showButton && (
        <button
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: "20px",
            left: "20px",
            zIndex: "1000",
          }}
        >
          <FaArrowUp className="text-gray-500" />
        </button>
      )}
      {/* Botón de WhatsApp */}
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

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
