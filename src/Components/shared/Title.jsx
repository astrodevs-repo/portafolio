import React from "react";

const Title = React.memo(function Title({ text, extra, textColor }) {
  const formattedContent = text?.split("**").map((part, index) => {
    if (index % 2 === 1) {
      return (
        <span
          key={index}
          className="font-extrabold bg-gradient-to-r from-[#5720c5] via-[#2563eb] to-[#2e68e5] bg-clip-text text-transparent"
        >
          {part}
        </span>
      );
    }
    return part;
  });

  return (
    <h1
      className={`${textColor} dark:text-white opacity-80 w-full text-4xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-6xl 3xl:text-7xl ${extra} m-0 leading-normal`}
    >
      {formattedContent}
    </h1>
  );
});

export default Title;
