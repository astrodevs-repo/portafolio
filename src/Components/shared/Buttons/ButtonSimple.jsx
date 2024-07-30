import { useNavigate } from "react-router-dom";

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
        className={`${bg} py-2.5 px-5 me-2 mb-2 text-sm font-medium text-white focus:outline-none rounded-lg  ${border}  ${hover} focus:z-10 focus:ring-4  transition-all duration-300 ${
          active && "opacity-50 cursor-not-allowed"
        }  ${w}`}
      >
        {loader ? "enviando..." : text}
      </button>
    </section>
  );
};

export default ButtonSimple;
