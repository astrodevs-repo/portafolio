import { useEffect, useState } from "react";
import ButtonGrandient from "../shared/Buttons/ButtonGrandient";
import Logo from "../shared/Logo";

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);
  const [activeSection, setActiveSection] = useState("home");

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);

    // Determinar la sección visible actualmente
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

    // Si ninguna sección está activa, establecerla como "home"
    if (!activeSectionFound) {
      setActiveSection("home");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  // Array de elementos del navbar
  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "valores", label: "Valores" },
    { id: "servicios", label: "Servicios" },
    { id: "team", label: "Team" },
  ];

  return (
    <nav
      className={`fixed w-full z-20 top-0 start-0 transition-all duration-300 ease-in-out ${
        activeSection !== "home" ? "bg-white" : "bg-transparent"
      } ${visible ? "" : "-translate-y-full"}`}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#home" className="flex items-center space-x-3 rtl:space-x-reverse">
          <Logo />
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <ButtonGrandient id={"#footer"} text={"Contact Us"} />
        </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {navItems.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={`block py-2 px-3 rounded ${
                    activeSection === id
                      ? "text-white bg-blue-700"
                      : "text-gray-900 hover:bg-gray-100"
                  }`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
