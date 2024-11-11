import React from "react";

const Text = React.memo(function Text({ textColor, extra, content }) {
  // Función para transformar el texto entre ** en negrita o resaltado
  const formattedContent = content.split("**").map((part, index) => {
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
    <p
      className={`${
        textColor ? textColor : "text-blackCeniza"
      } font-Poppins text-sm sm:text-xs dark:text-white md:text-sm lg:text-md xl:text-md 2xl:text-md 3xl:text-xl leading-normal ${extra}`}
    >
      {formattedContent}
    </p>
  );
});

export default Text;
