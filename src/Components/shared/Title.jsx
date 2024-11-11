import React from "react";

const Title = React.memo(function Title({ text, extra, textColor }) {
  return (
    <h1
      className={`${textColor} dark:text-white opacity-80 w-full text-4xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-6xl 3xl:text-8xl ${extra}  m-0`}
    >
      {text}
    </h1>
  );
});

export default Title;
