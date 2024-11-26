import { useState, useEffect } from "react";
import { MdOutlineMenu } from "react-icons/md";
import { scrollToSection } from "../../../utils/functions";
import { useLang } from "../../../context/useLang";
import { motion } from "framer-motion";

const DrawerNavigation = ({ itemsNavbar }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, changeLanguage } = useLang();

  const handleOutsideClick = (event) => {
    const drawer = document.getElementById("drawer-navigation");
    if (drawer && !drawer.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div className="flex justify-center items-center">
      <button
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(!isOpen);
        }}
        className="sm:flex md:flex lg:hidden flex justify-center items-center text-[30px] text-white dark:text-white sm:text-[35px] "
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        <MdOutlineMenu />
        <span className="sr-only">{isOpen ? "Close menu" : "Open menu"}</span>
      </button>
      {isOpen && (
        <div
          id="drawer-navigation"
          className={`fixed w-[80%] sm:w-[30%] md:w-[50%] top-0 right-0 z-40 h-screen overflow-y-auto transition-transform transition-opacity duration-300 ease-in-out ${
            isOpen
              ? "animate__animated animate__slideInRight"
              : "transform translate-x-full opacity-0"
          } bg-blackCeniza w-80`}
          tabIndex="-1"
          aria-labelledby="drawer-navigation-label"
        >
          <h5
            id="drawer-navigation-label"
            className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400 p-3"
          >
            Menu
          </h5>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-controls="drawer-navigation"
            className="text-gray-400 bg-transparent hover:bg-[#4A5171] rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close menu</span>
          </button>
          <div className="py-4 overflow-y-auto">
            <ul className="space-y-2 font-medium">
              {itemsNavbar.map(({ id, label }) => (
                <li
                  key={id}
                  onClick={() => {
                    setIsOpen(!isOpen);
                    scrollToSection(id);
                  }}
                  className="block py-2 px-3 rounded text-white hover:bg-[#4A5171] dark:text-white dark:hover:bg-gray-700"
                >
                  {label}
                </li>
              ))}
            </ul>
          </div>

          <button
            type="button"
            className={`flex items-center justify-between w-full p-5 font-medium rtl:text-right text-white hover:bg-[#4A5171] gap-3 ${
              language === "en" && "border-b-2 border-BlueNeurons"
            }`}
            onClick={() => changeLanguage("en")}
          >
            <img src={`/navbar/en.svg`} alt="language" className="max-w-5 object-contain min-h-5" />
            English
          </button>
          <button
            type="button"
            className={`flex items-center justify-between w-full p-5 font-medium rtl:text-right text-white hover:bg-[#4A5171] gap-3 ${
              language === "es" && "border-b-2 border-BlueNeurons "
            }`}
            onClick={() => changeLanguage("es")}
          >
            <img src={`/navbar/es.svg`} alt="language" className="max-w-5 object-contain min-h-5" />
            Español
          </button>
        </div>
      )}
    </div>
  );
};

export default DrawerNavigation;
