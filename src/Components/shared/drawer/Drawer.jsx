import { useState, useEffect } from "react";
import { MdOutlineMenu } from "react-icons/md";

const DrawerNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

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
  const navItems = [
    { id: "#aboutus", label: "Quienes somos" },
    { id: "#quienessomos", label: "Servicios" },
    { id: "#comotrabajamos", label: "Como trabajamos" },
    { id: "#team", label: "Nuestro equipo" },
    { id: "#contactanosform", label: "Contactanos" },
  ];

  return (
    <div className=" flex justify-center items-center">
      <button
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(!isOpen);
        }}
        className="sm:hidden flex justify-center items-center text-[25px] text-white sm:text-[40px]"
      >
        <MdOutlineMenu />
      </button>
      {isOpen && (
        <div
          id="drawer-navigation"
          className={`fixed w-[80%] sm:w-[30%] top-0 left-0 z-40 h-screen  overflow-y-auto transition-transform  ${
            isOpen ? "animate__animated animate__slideInLeft" : "-translate-x-full"
          } bg-blackCeniza w-64`}
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
              {navItems.map(({ id, label }) => (
                <li key={id}>
                  <a
                    href={id}
                    onClick={() => {
                      setIsOpen(!isOpen);
                    }}
                    className="block py-2 px-3 rounded text-white hover:bg-[#4A5171] dark:text-white dark:hover:bg-gray-700"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default DrawerNavigation;
