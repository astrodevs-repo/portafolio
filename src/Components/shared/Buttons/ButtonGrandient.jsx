import { scrollToSection } from "../../../utils/functions";

const ButtonGrandient = ({ text, id }) => {
  return (
    <button
      type="button"
      onClick={() => scrollToSection(id)}
      className="text-white bg-gradient-to-r from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:text-white dark:bg-gradient-to-r dark:from-cyan-500 dark:to-blue-500 dark:hover:bg-gradient-to-bl dark:focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
    >
      {text}
    </button>
  );
};

export default ButtonGrandient;
