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
      className="mb-2 text-gray-200 dark:text-gray-200 h-full"
      aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      {darkMode ? (
        <>
          <FiSun className="text-lg md:text-xl" />
          <span className="sr-only">Switch to light mode</span>
        </>
      ) : (
        <>
          <FiMoon className="text-lg md:text-xl" />
          <span className="sr-only">Switch to dark mode</span>
        </>
      )}
    </button>
  );
};

export default DarkModeToggle;
