import React, { lazy, Suspense, useCallback, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { scrollToSection } from "../../utils/functions";
import SkeletonText from "../shared/Skeleton/Text";
import LangDropdown from "../shared/LangDropdown";

const Logo = lazy(() => import("../shared/Logo"));
const TextNavbar = lazy(() => import("../shared/TextNavBar"));
const DrawerNavigation = lazy(() => import("../shared/drawer/Drawer"));
const DarkModeToggle = lazy(() => import("../shared/DarkModeToggle/DarkModeToggle"));

const Navbar = React.memo(function Navbar({ itemsNavbar }) {
  const [isVisible, setIsVisible] = useState(true);
  const [alert, setAlert] = useState(true);
  const [rotate, setRotate] = useState(false);
  const [hasRotated, setHasRotated] = useState(false); // Nuevo estado para saber si ya giró

  const controls = useAnimation();
  let lastScrollY = window.scrollY;

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 50) {
      setIsVisible(false);
    } else if (currentScrollY < lastScrollY) {
      setIsVisible(true);
    }
    if (currentScrollY > lastScrollY && currentScrollY > 50) {
      setAlert(false);
    } else if (currentScrollY < 150) {
      setAlert(true);
    }
    lastScrollY = currentScrollY;
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      controls.start({ y: "0%", transition: { duration: 0.3 } });
    } else {
      controls.start({ y: "-100%", transition: { duration: 0.3 } });
    }
  }, [isVisible, controls]);

  useEffect(() => {
    // Crear el IntersectionObserver
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasRotated) {
            setRotate(true); // Girar solo la primera vez que se ve
            setHasRotated(true); // Marcar que ya giró
          }
        });
      },
      { threshold: 0.5 } // Ejecutar cuando al menos el 50% del logo esté visible
    );

    // Observar el logo
    const logoElement = document.getElementById("logo");
    if (logoElement) {
      observer.observe(logoElement);
    }

    // Limpiar el observador al desmontar el componente
    return () => {
      if (logoElement) {
        observer.unobserve(logoElement);
      }
    };
  }, [hasRotated]);

  const handleLogoClick = () => {
    setRotate((prev) => !prev); // Cambiar el estado de rotación al hacer clic
  };

  return (
    <motion.nav
      className={`fixed w-full z-20 top-0 start-0 shadow-BlueNeurons/30 dark:shadow-dark-BlueNeurons/10 shadow-lg transition-colors duration-300 ${
        isVisible ? "bg-blackCeniza dark:bg-blackCeniza" : "bg-transparent"
      }`}
      animate={controls}
      initial={{ y: "0%" }}
    >
      <section
        className={`w-full hidden h-5 flex items-center justify-start bg-Chicle py-5 px-3 sm:px-10 md:px-5 lg:px-20 ${
          alert === false ? "hidden" : ""
        }`}
      >
        <h1 className="font-Poppins">
          Si ya eres nuestro cliente, podes fijarte el estado de tu proyecto e interactuar con
          nosotros con tu id de cliente{" "}
          <motion.a
            href="/seguimiento"
            className="text-white bg-blue-500 p-1 rounded-md px-2 font-Baskerville font-bold"
            whileHover={{
              scale: 1.05,
              backgroundColor: "#4A90E2",
              color: "#FFD700",
              transition: { duration: 0.3 },
            }}
          >
            aquí
          </motion.a>
        </h1>
      </section>
      <section className="flex justify-between px-3 sm:px-10 md:px-5 lg:px-20 gap-5 items-center py-2">
        <Suspense fallback={<section className="w-10 h-10 rounded-full bg-BlueNeurons"></section>}>
          <motion.div
            id="logo" // Añadir un id para que el IntersectionObserver lo encuentre
            animate={{ rotate: rotate ? 360 : 0 }}
            transition={{ duration: 1 }}
            onClick={handleLogoClick}
          >
            <Logo link={"inicio"} />
          </motion.div>
        </Suspense>
        <Suspense
          fallback={<SkeletonText height={"h-2"} width={"w-10"} extra={"hidden sm:flex"} />}
        >
          <ul className="md:hidden lg:flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg sm:gap-5 md:gap-5 lg:gap-10 md:flex-row md:mt-0 md:border-0 hidden">
            {itemsNavbar?.map(({ id, label }) => (
              <TextNavbar key={label} content={label} func={() => scrollToSection(id)} />
            ))}
          </ul>
        </Suspense>
        <Suspense fallback={<SkeletonText height={"h-5"} width={"w-10"} extra={"rounded-xl"} />}>
          <section className="flex gap-2 items-center justify-center h-full ">
            <DarkModeToggle />
            <DrawerNavigation itemsNavbar={itemsNavbar} />
            <LangDropdown />
          </section>
        </Suspense>
      </section>
    </motion.nav>
  );
});

export default Navbar;
