import { motion } from "framer-motion";
import { FiMoon, FiSun } from "react-icons/fi";
import useDarkMode from "../../../hooks/useDarkMode";

const TOGGLE_CLASSES =
  "text-sm font-medium flex items-center gap-2 px-3 md:pl-3 md:pr-3.5 py-3 md:py-1.5 transition-colors relative z-10";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useDarkMode();
  return (
    <div className={`grid place-content-center px-4 transition-colors `}>
      <SliderToggle selected={darkMode} setSelected={setDarkMode} />
    </div>
  );
};

const SliderToggle = ({ selected, setSelected }) => {
  return (
    <div className="relative flex w-fit items-center rounded-full">
      <button
        className={`${TOGGLE_CLASSES} ${selected === "light" ? "text-blackCeniza" : "text-white "}`}
        onClick={() => setSelected(!selected)}
      >
        <FiSun className="relative z-10 text-lg md:text-sm" />
      </button>
      <button
        className={`${TOGGLE_CLASSES} ${selected === "dark" ? "text-white" : "text-blackCeniza"}`}
        onClick={() => {
          setSelected("dark");
        }}
      >
        <FiMoon className="relative z-10 text-lg md:text-sm" />
      </button>
      <div
        className={`absolute inset-0 z-0 flex ${
          selected === "dark" ? "justify-end" : "justify-start"
        }`}
      >
        <motion.span
          layout
          transition={{ type: "spring", damping: 15, stiffness: 250 }}
          className="h-full w-1/2 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600"
        />
      </div>
    </div>
  );
};

export default DarkModeToggle;
