import PropTypes from "prop-types";

const ButtonGrandient = ({ text, id }) => {
  return (
    <button
      type="button"
      className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
    >
      <a href={id}>{text}</a>
    </button>
  );
};
ButtonGrandient.propTypes = {
  text: PropTypes.node,
  id: PropTypes.node,
};
export default ButtonGrandient;
