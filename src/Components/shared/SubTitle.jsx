import React from "react";

const SubTitle = React.memo(function SubTitle({ text, extra, textColor, position, font }) {
  return (
    <h1
      className={`${textColor ? textColor : "text-blackCeniza"} ${
        font ? font : "font-Poppins"
      }  dark:text-white text-2xl sm:text-sm md:text-2xl lg:text-lg xl:text-xl 2xl:text-3xl 3xl:text-3xl leading-normal ${position}  ${extra} leading-5 m-0`}
    >
      {text}
    </h1>
  );
});

export default SubTitle;
