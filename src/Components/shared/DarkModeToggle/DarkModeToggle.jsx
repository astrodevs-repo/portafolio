import useDarkMode from "../../../hooks/useDarkMode";
import { FiMoon, FiSun } from "react-icons/fi";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useDarkMode();

  const handleToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <button
      onClick={handleToggle}
      className="h-10 px-5 sm:px-5 md:px-10 lg:px-0 text-gray-200 dark:text-gray-200  flex justify-center items-center"
      aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      {darkMode ? (
        <>
          <FiSun className="text-2xl md:text-xl" />
          <span className="sr-only">Switch to light mode</span>
        </>
      ) : (
        <>
          <FiMoon className="text-2xl md:text-xl" />
          <span className="sr-only">Switch to dark mode</span>
        </>
      )}
    </button>
  );
};

export default DarkModeToggle;
