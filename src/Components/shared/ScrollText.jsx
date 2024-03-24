import React, { useState, useEffect } from "react";
import ButtonSimple from "./Buttons/ButtonSimple";
import ButtonWithoutBorder from "./Buttons/ButtonWithoutBorder";

const Carousel = ({ items }) => {
  const [index, setIndex] = useState(0);

  const goToNext = () => {
    setIndex((prevIndex) => (prevIndex === items.data.length - 1 ? 0 : prevIndex + 1));
  };

  const goToPrevious = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? items.data.length - 1 : prevIndex - 1));
  };

  useEffect(() => {
    const interval = setInterval(goToNext, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-[90%] min-h-[500px] flex justify-center items-center">
      <div className="overflow-hidden">
        <div className="w-full h-full flex justify-center items-center">
          {items.data.map((item, i) => (
            <div
              key={i}
              className={`w-full h-full flex flex-col justify-center items-start ${
                i === index ? "block slide-in" : "hidden"
              } absolute top-0 left-0`}
            >
              <h1 className="text-4xl text-white">{item.title}</h1>
              <p className="text-xl text-white">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 right-0 flex justify-end items-end">
        {/* <button
          onClick={goToPrevious}
          className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none  rounded-lg border border-gray-800 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          Prev
        </button>

        <button
          onClick={goToNext}
          className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none  rounded-lg border border-gray-800 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          Next
        </button> */}
        <ButtonWithoutBorder text={"ver mas"} link={items.href} />
      </div>
    </div>
  );
};

export default Carousel;
