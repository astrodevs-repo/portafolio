import { useState, useEffect } from "react";
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
  }, [index]);

  return (
    <section className="flex flex-col justify-between h-fit items-end gap-10">
      <motion.div
        key={index}
        initial={{ x: "100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: "-100%", opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="min-h-[300px] w-full"
      >
        <h1 className="text-4xl text-white">{items.data[index].title}</h1>
        <p className="text-xl text-white w-full sm:w-3/4 md:w-3/4 lg:w-3/4">
          {items.data[index].description}
        </p>
      </motion.div>

      <div className="w-full flex justify-between items-center">
        <div className="flex sm:block ">
          {" "}
          <button
            onClick={goToPrevious}
            className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-white focus:outline-none rounded-lg border border-white hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Prev
          </button>
          <button
            onClick={goToNext}
            className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-white focus:outline-none rounded-lg border border-white hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Next
          </button>
        </div>
        {/* <ButtonWithoutBorder text={"ver mas"} link={items.href} /> */}
      </div>
    </section>
  );
};

export default Carousel;
