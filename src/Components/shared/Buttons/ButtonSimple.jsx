import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Text from "../Text";
import Loading from "../Loading/Loading";
import React, { useCallback } from "react";

const ButtonSimple = React.memo(function ButtonSimple({
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
  extra,
  type,
}) {
  const navigate = useNavigate();

  // Memoriza `handleClick` usando `useCallback`
  const handleClick = useCallback(() => {
    try {
      if (func) {
        func();
      }
      if (route) {
        navigate(route);
      }
    } catch (error) {
      console.error("Error en handleClick de ButtonSimple:", error);
    }
  }, [func, route, navigate]);

  return (
    <section className={`flex justify-${display} ${w}`}>
      <motion.button
        type={type || "button"}
        style={{ color: textColor }}
        onClick={handleClick}
        disabled={active}
        className={`${bg} ${extra} ${border} ${hover} ${
          active && "opacity-50 cursor-not-allowed"
        } ${w} bg-[#33aed6]  transition-shadow duration-700  shadow-lg shadow-blackCeniza hover:shadow-2xl hover:shadow-blackCeniza flex justify-center items-center gap-2 dark:bg-purple-600 dark:border-purple-600 dark:text-white py-2.5 px-5 me-2 mb-2 text-sm font-medium focus:outline-none rounded-lg border-[#33aed6] border-2 hover:bg-[#33aed6]/90 dark:hover:bg-purple-700/90 focus:z-10 focus:ring-4`}
      >
        {loader ? <Loading /> : <Text textColor={textColor} content={text} />}
      </motion.button>
    </section>
  );
});

export default ButtonSimple;
