import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ReactLenis } from "lenis/dist/lenis-react";
import Footer from "../Components/Footer/Footer";

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
      <Footer />
    </section>
  );
};

export default Layout;
