import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const ButtonWithoutBorder = ({ text, textColor, link }) => {
  return (
    <Link to={`/${link}`}>
      <button
        type="button"
        className={`py-2.5 sm:px-20 md:px-2 lg:px-2 px-5 me-2 mb-2 text-sm font-medium {textColor} flex justify-center gap-2 items-center focus:outline-none`}
      >
        <p className=" h-10 flex items-center">{text}</p>

        <FaArrowRight
          style={{ color: textColor }}
          className=" h-10 flex items-center transition-transform transform-gpu hover:translate-x-1"
        />
      </button>
    </Link>
  );
};

export default ButtonWithoutBorder;
