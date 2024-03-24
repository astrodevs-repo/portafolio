import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const ButtonWithoutBorder = ({ text, textColor, link }) => {
  return (
    <Link to={`/${link}`}>
      <button
        type="button"
        className="py-2.5 px-20 me-2 mb-2 text-sm font-medium text-white flex justify-center gap-2 items-center focus:outline-none"
      >
        <div className=" h-10 flex items-center">{text}</div>
        <div className=" h-10 flex items-center transition-transform transform-gpu hover:translate-x-1">
          <FaArrowRight style={{ color: textColor }} />
        </div>
      </button>
    </Link>
  );
};

ButtonWithoutBorder.propTypes = {
  text: PropTypes.node,
  textColor: PropTypes.node,
  link: PropTypes.node,
};

export default ButtonWithoutBorder;
