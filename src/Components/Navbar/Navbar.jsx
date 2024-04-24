import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ButtonGrandient from "../shared/Buttons/ButtonGrandient";
import Logo from "../shared/Logo";
import DrawerNavigation from "../shared/drawer/Drawer";

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);
  const [activeSection, setActiveSection] = useState("home");
  const [loaded, setLoaded] = useState(false);
  const [scrolledDown, setScrolledDown] = useState(false);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);

    if (currentScrollPos > 20) {
      setScrolledDown(true);
    } else {
      setScrolledDown(false);
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

  useEffect(() => {
    setLoaded(true);
  }, []);

  const navItems = [
    { id: "/", label: "Home" },
    { id: "#about", label: "About" },
    { id: "#valores", label: "Valores" },
    { id: "#servicios", label: "Services" },
    { id: "/team", label: "Team" },
    { id: "/projects", label: "Projects" },
  ];

  return (
    <>
      {loaded && (
        <motion.nav
          initial={{ y: -100 }}
          animate={{ y: visible ? 0 : -10 }}
          exit={{ y: -100 }}
          transition={{ type: "spring", damping: 20, stiffness: 100 }}
          className={`fixed w-full z-20 top-0 start-0 transition-all duration-300 ease-in-out ${
            activeSection !== "home" || scrolledDown ? "bg-white" : "bg-transparent"
          }`}
        >
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="#home" className="flex items-center space-x-3 rtl:space-x-reverse">
              <Logo />
            </a>
            <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
              <ButtonGrandient
                id={"https://forms.office.com/r/LA0vfN3Rd9"}
                target="_blank"
                rel="noopener noreferrer"
                text={"Contact Us"}
              />
              <DrawerNavigation />
            </div>
            <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
              <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
                {navItems.map(({ id, label }) => (
                  <li key={id}>
                    {/* <Link
                      to={`${id}`} */}

                    <a
                      href={id}
                      className={`block py-2 px-3 rounded ${
                        activeSection === id
                          ? "text-white bg-blue-700"
                          : "text-gray-900 hover:bg-gray-100"
                      }`}
                    >
                      {label}
                    </a>
                    {/* </Link> */}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.nav>
      )}
    </>
  );
};

export default Navbar;
