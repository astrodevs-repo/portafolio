import React from "react";

const SubTitle = React.memo(function SubTitle({ text, extra, textColor, position, font }) {
  const formattedContent = text.split("**").map((part, index) => {
    if (index % 2 === 1) {
      // Si la parte está entre **, la hacemos en negrita o resaltado
      return (
        <span key={index} style={{ fontWeight: "bold" }}>
          {part}
        </span>
      );
    }
    return part; // De lo contrario, mostramos el texto tal cual
  });

  return (
    <h1
      className={`${textColor ? textColor : "text-blackCeniza"} ${
        font ? font : "font-Poppins"
      }  dark:text-white text-2xl sm:text-sm md:text-2xl lg:text-lg xl:text-xl 2xl:text-3xl 3xl:text-3xl leading-normal ${position}  ${extra} leading-5 m-0`}
    >
      {formattedContent}
    </h1>
  );
});

export default SubTitle;
