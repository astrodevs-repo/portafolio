import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ReactLenis } from "lenis/dist/lenis-react";
import Footer from "../Components/Footer/Footer";
import { IoLogoWhatsapp } from "react-icons/io";

const Layout = ({ children }) => {
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
        className="fixed bottom-10 right-2 "
        style={{
          zIndex: "1000",
        }}
      >
        <IoLogoWhatsapp size={50} className="text-[#25d366]" />
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
      <Footer />
    </section>
  );
};

export default Layout;
