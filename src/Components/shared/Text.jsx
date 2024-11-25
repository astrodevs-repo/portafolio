import React from "react";

const Text = React.memo(function Text({ textColor, extra, content }) {
  return (
    <p
      className={`${
        textColor ? textColor : "text-blackCeniza"
      } font-Poppins text-lg sm:text-xs dark:text-white md:text-sm lg:text-md xl:text-md 2xl:text-lg 3xl:text-xl leading-normal ${extra}`}
    >
      {content}
    </p>
  );
});

export default Text;
