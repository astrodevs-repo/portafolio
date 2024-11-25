import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ReactLenis } from "lenis/dist/lenis-react";
import Footer from "../Components/Footer/Footer";
import { useLang } from "../context/useLang";

const Layout = ({ children }) => {
  const data = useLang();
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
        className="fixed bottom-10 right-0"
        style={{
          zIndex: "1000",
        }}
      >
        <img
          src="https://i.pinimg.com/originals/16/71/c0/1671c09a32f98796ede36fabfab4dee7.png"
          alt=""
          className="w-24 h-24 sm:w-32 sm:h-32"
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
      <Footer {...data?.footer} />
    </section>
  );
};

export default Layout;
