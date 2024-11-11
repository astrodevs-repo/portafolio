import React from "react";

const Text = React.memo(function Text({ textColor, extra, content }) {
  return (
    <p
      style={{ lineHeight: "2rem" }}
      className={`${
        textColor ? textColor : "text-blackCeniza"
      } font-Poppins text-sm sm:text-xs dark:text-white md:text-sm lg:text-md xl:text-md 2xl:text-md 3xl:text-2xl ${extra}`}
    >
      {content}
    </p>
  );
});

export default Text;
