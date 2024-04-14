import PropTypes from "prop-types";
import { CiLinkedin } from "react-icons/ci";

const CardTeam = ({ name, img, rol }) => {
  return (
    <div className="w-full max-w-sm bg-white  dark:bg-gray-800 dark:border-gray-700">
      <div className="flex flex-col items-center pb-10">
        <img className="w-80 h-80 mb-3 rounded-full" src={img} alt="Bonnie image" />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{name}</h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">{rol}</span>
        <div className="flex mt-4 md:mt-6">
          {/* Espacios para enlaces a redes sociales */}
          <a
            href="#"
            className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white  text-gray-600  mx-1"
            aria-label="Facebook"
          >
            <CiLinkedin size={25} />
          </a>
        </div>
      </div>
    </div>
  );
};

CardTeam.propTypes = {
  name: PropTypes.node,
  img: PropTypes.node,
  rol: PropTypes.node,
};
export default CardTeam;
