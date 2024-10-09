const TextNavbar = ({ textColor, extra, content, func }) => {
  return (
    <li
      onClick={func}
      className={`${
        textColor ? textColor : "text-blackCeniza"
      } font-Poppins leading-[40px] dark:text-white w-full text-sm sm:text-xs: md:text-sx lg:text-sm xl:text-sm 2xl:text-sm ${extra} leading-5 cursor-pointer min-w-40`}
    >
      {content}
    </li>
  );
};

export default TextNavbar;