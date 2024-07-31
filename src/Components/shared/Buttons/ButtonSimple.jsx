import { useNavigate } from "react-router-dom";
import Text from "../Text";

const ButtonSimple = ({
  text,
  textColor,
  border,
  display,
  func,
  w,
  loader,
  bg,
  hover,
  active,
  route,
  img,
  extra,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (func) {
      func();
    }
    if (route) {
      navigate(route);
    }
  };

  return (
    <section className={`flex justify-${display} ${w}`}>
      <button
        type="button"
        style={{ color: textColor }}
        onClick={handleClick}
        disabled={active}
        className={`${bg} ${extra}  flex justify-center items-center gap-2 dark:bg-blackCeniza dark:border-blackCeniza dark:text-white py-2.5 px-5 me-2 mb-2 text-sm font-medium text-white focus:outline-none rounded-lg  ${border}  ${hover} focus:z-10 focus:ring-4  transition-all duration-300 ${
          active && "opacity-50 cursor-not-allowed"
        }  ${w}`}
      >
        <Text content={loader ? "enviando..." : text} />
        <img
          src={img}
          alt=""
          className={`${
            img ? " flex bg-Chicle dark:bg-violet-600 p-2 rounded-full w-8 h-8" : "hidden"
          }`}
        />
      </button>
    </section>
  );
};

export default ButtonSimple;
