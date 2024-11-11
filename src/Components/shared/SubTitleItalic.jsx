import React from "react";

const SubTitleItalic = React.memo(function SubTitleItalic({ text, extra, textColor, position }) {
  return (
    <h1
      className={`${
        textColor ? textColor : "text-blackCeniza"
      }  dark:text-white font-Baskerville leading-[40px] w-full text-xl sm:text-sm md:text-2xl lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-4xl ${position}  ${extra} leading-5 m-0`}
    >
      {text}
    </h1>
  );
});

export default SubTitleItalic;
