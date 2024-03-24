import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ButtonSimple = ({ text, textColor, link }) => {
  return (
    <Link to={`/${link}`}>
      <button
        type="button"
        style={{ color: textColor }}
        className="py-2.5 px-20 me-2 mb-2 text-sm font-medium text-white focus:outline-none  rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
      >
        {text}
      </button>
    </Link>
  );
};
ButtonSimple.propTypes = {
  text: PropTypes.node,
  textColor: PropTypes.node,
  link: PropTypes.node,
};

export default ButtonSimple;
