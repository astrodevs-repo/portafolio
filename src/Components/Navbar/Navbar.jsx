import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ButtonGrandient from "../shared/Buttons/ButtonGrandient";
import Logo from "../shared/Logo";
import DrawerNavigation from "../shared/drawer/Drawer";
import { useLocation } from "react-router-dom";
import DarkModeToggle from "../shared/DarkModeToggle/DarkModeToggle";
import { navItems } from "../../data/data";
import { scrollToSection } from "../../utils/functions";

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [activeSection, setActiveSection] = useState("home");

  const [navbarBackground, setNavbarBackground] = useState(false);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setPrevScrollPos(currentScrollPos);

    // Check if the user has scrolled down
    if (currentScrollPos > 0) {
      setNavbarBackground(true);
    } else {
      setNavbarBackground(false);
    }

    const sections = document.querySelectorAll("section[id]");
    let activeSectionFound = false;
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (currentScrollPos >= sectionTop && currentScrollPos < sectionTop + sectionHeight) {
        setActiveSection(section.getAttribute("id"));
        activeSectionFound = true;
      }
    });

    if (!activeSectionFound) {
      setActiveSection("home");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  const location = useLocation();

  useEffect(() => {
    console.log("Current pathname:", location.pathname);
  }, [location.pathname]);

  return (
    <motion.nav
      className={`fixed w-full z-20 top-0 start-0 flex justify-between px-3 sm:px-10 md:px-5 lg:px-20 gap-5 items-center py-2 ${
        navbarBackground ? "bg-[#e9eeff] dark:bg-gray-800" : "dark:bg-transparent bg-translate"
      } transition-colors duration-1000`}
    >
      <Logo link={"home"} />

      <ul className="md:hidden lg:flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg sm:gap-5 md:gap-5 lg:gap-10 md:flex-row md:mt-0 md:border-0 hidden ">
        {navItems.map(({ id, label }) => (
          <li key={label}>
            {/**
             *  ${
                activeSection === id
                  ? "text-[#2FE3CE]"
                  : `${
                      navbarBackground
                        ? "text-blackCeniza dark:text-[#ffffff] hover:text-[#2FE3CE] focus:text-[#2FE3CE]"
                        : "text-blackCeniza dark:text-[#ffffff] hover:text-[#2FE3CE] focus:text-[#2FE3CE]"
                    } `
              }
             */}
            <p onClick={() => scrollToSection(id)} className={`block rounded cursor-pointer`}>
              {label}
            </p>
          </li>
        ))}
      </ul>
      <div className="flex gap-5 items-center justify-center h-full ">
        <ButtonGrandient id={"contactanos"} text={"Contactanos"} />
        <DarkModeToggle />
        <DrawerNavigation />
      </div>
    </motion.nav>
  );
};

export default Navbar;
