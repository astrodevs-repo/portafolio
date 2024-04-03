import { useState, useEffect } from "react";
import ButtonWithoutBorder from "./Buttons/ButtonWithoutBorder";
import { motion } from "framer-motion";

const Carousel = ({ items }) => {
  const [index, setIndex] = useState(0);

  const goToNext = () => {
    setIndex((prevIndex) => (prevIndex === items.data.length - 1 ? 0 : prevIndex + 1));
  };

  const goToPrevious = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? items.data.length - 1 : prevIndex - 1));
  };

  useEffect(() => {
    const interval = setInterval(goToNext, 15000);
    return () => clearInterval(interval);
  }, [index]); // Dependencia index para reiniciar el intervalo

  return (
    <div className="relative w-[90%] min-h-[500px] flex  justify-center items-center">
      <div className="overflow-hidden">
        <div className="w-full h-full flex justify-center items-center">
          {items.data.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }} // Opacidad inicial
              animate={{ opacity: i === index ? 1 : 0 }} // Opacidad animada al cambiar de elemento
              transition={{ duration: 1 }} // Duración de la transición
              className={`w-full h-full flex flex-col justify-center items-start absolute top-0 left-0`}
            >
              <h1 className="text-4xl text-white">{item.title}</h1>
              <p className="text-xl text-white w-1/2">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 right-0 w-full flex justify-between items-center ">
        <div className="block">
          {" "}
          <button
            onClick={goToPrevious}
            className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-white focus:outline-none  rounded-lg border border-white hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Prev
          </button>
          <button
            onClick={goToNext}
            className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-white focus:outline-none  rounded-lg border border-white hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Next
          </button>
        </div>
        <ButtonWithoutBorder text={"ver mas"} link={items.href} />
      </div>
    </div>
  );
};

export default Carousel;
