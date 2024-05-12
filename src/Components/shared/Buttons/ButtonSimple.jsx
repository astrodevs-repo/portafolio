import { Link } from "react-router-dom";

const ButtonSimple = ({ text, textColor, link, border, display }) => {
  return (
    <section className={`flex justify-${display}`}>
      <Link to={`/${link}`}>
        <button
          type="button"
          style={{ color: textColor }}
          className={`py-2.5 px-20 me-2 mb-2 text-sm font-medium text-white focus:outline-none  rounded-lg border ${border} hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100  `}
        >
          {text}
        </button>
      </Link>
    </section>
  );
};

export default ButtonSimple;
