import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ButtonGrandient from "../shared/Buttons/ButtonGrandient";
import Logo from "../shared/Logo";
import DrawerNavigation from "../shared/drawer/Drawer";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);

  const [activeSection, setActiveSection] = useState("home");
  const [loaded, setLoaded] = useState(false);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setPrevScrollPos(currentScrollPos);

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

  useEffect(() => {
    setLoaded(true);
  }, []);

  const navItems = [
    { id: "#aboutus", label: "Quienes somos" },
    { id: "#quienessomos", label: "Servicios" },
    { id: "#comotrabajamos", label: "Como trabajamos" },
    { id: "#team", label: "Nuestro equipo" },
    { id: "#team", label: "Trabaja con nosotros" },
  ];
  const location = useLocation();

  useEffect(() => {
    console.log("Current pathname:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      {loaded && (
        <motion.nav
          className={`fixed w-full z-20 top-0  start-0  flex justify-between px-3 sm:px-10 md:px-5 lg:px-20  gap-5 items-center py-2 bg-blackCeniza`}
        >
          <Logo />

          <ul className="md:hidden lg:flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg sm:gap-5 md:gap-5 lg:gap-10 md:flex-row md:mt-0 md:border-0 hidden ">
            {navItems.map(({ id, label }) => (
              <li key={label}>
                <a
                  href={id}
                  className={`block  rounded ${
                    activeSection === id ? "text-blackCeniza" : "text-white hover:text-[#2FE3CE]"
                  }`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex gap-5 ">
            <ButtonGrandient id={"/#contactanos"} text={"Contactanos"} />
            <DrawerNavigation />
          </div>
        </motion.nav>
      )}
    </>
  );
};

export default Navbar;
