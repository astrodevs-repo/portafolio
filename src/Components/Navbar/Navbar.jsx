import React, { lazy, Suspense, useCallback, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { scrollToSection } from "../../utils/functions";
import SkeletonText from "../shared/Skeleton/Text";

const Logo = lazy(() => import("../shared/Logo"));
const TextNavbar = lazy(() => import("../shared/TextNavBar"));
const DrawerNavigation = lazy(() => import("../shared/drawer/Drawer"));
const DarkModeToggle = lazy(() => import("../shared/DarkModeToggle/DarkModeToggle"));

const Navbar = React.memo(function Navbar({ itemsNavbar }) {
  const [isVisible, setIsVisible] = useState(true);
  const controls = useAnimation();
  let lastScrollY = window.scrollY;

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 50) {
      setIsVisible(false);
    } else if (currentScrollY < lastScrollY) {
      setIsVisible(true);
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

  return (
    <motion.nav
      className={`fixed w-full z-20 top-0 start-0 flex justify-between  shadow-BlueNeurons/30 dark:shadow-dark-BlueNeurons/10 shadow-lg px-3 sm:px-10 md:px-5 lg:px-20 gap-5 items-center py-2 transition-colors duration-300 ${
        isVisible ? "bg-blackCeniza dark:bg-blackCeniza" : "bg-transparent"
      }`}
      animate={controls}
      initial={{ y: "0%" }}
    >
      <Suspense fallback={<section className="w-10 h-10 rounded-full bg-BlueNeurons"></section>}>
        <Logo link={"home"} />
      </Suspense>
      <Suspense fallback={<SkeletonText height={"h-2"} width={"w-10"} extra={"hidden sm:flex"} />}>
        <ul className="md:hidden lg:flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg sm:gap-5 md:gap-5 lg:gap-10 md:flex-row md:mt-0 md:border-0 hidden">
          {itemsNavbar?.map(({ id, label }) => (
            <TextNavbar key={label} content={label} func={() => scrollToSection(id)} />
          ))}
        </ul>
      </Suspense>
      <Suspense fallback={<SkeletonText height={"h-5"} width={"w-10"} extra={"rounded-xl"} />}>
        <section className="flex gap-5 items-center justify-center h-full">
          {/* <ButtonGrandient id={"contactanos"} text={"Contactanos"} /> */}
          <DarkModeToggle />
          <DrawerNavigation itemsNavbar={itemsNavbar} />
        </section>
      </Suspense>
    </motion.nav>
  );
});

export default Navbar;
