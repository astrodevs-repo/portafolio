const TextFooter = ({ textColor, extra, content }) => {
  return (
    <p
      className={`${
        textColor ? textColor : "text-blackCeniza"
      } font-Poppins leading-[40px] dark:text-white w-full text-sm sm:text-xs: md:text-sx lg:text-sm xl:text-sm 2xl:text-sm ${extra} leading-5`}
    >
      {content}
    </p>
  );
};

export default TextFooter;
