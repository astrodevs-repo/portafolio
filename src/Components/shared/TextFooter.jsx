import React from "react";

const TextFooter = React.memo(function TextFooter({ textColor, extra, content }) {
  return (
    <li
      className={`${
        textColor ? textColor : "text-blackCeniza"
      } font-Poppins leading-[40px] dark:text-white w-full text-sm sm:text-xs: md:text-sx lg:text-sm xl:text-sm 2xl:text-sm ${extra} leading-5`}
    >
      {content}
    </li>
  );
});

export default TextFooter;
