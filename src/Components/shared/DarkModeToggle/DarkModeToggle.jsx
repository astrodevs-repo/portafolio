import useDarkMode from "../../../hooks/useDarkMode";
import { FiMoon, FiSun } from "react-icons/fi";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useDarkMode();

  const handleToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <button onClick={handleToggle} className=" mb-2 text-gray-800 dark:text-gray-200 h-full ">
      {darkMode ? (
        <FiSun className="text-lg md:text-xl" />
      ) : (
        <FiMoon className="text-lg md:text-xl" />
      )}
    </button>
  );
};

export default DarkModeToggle;
