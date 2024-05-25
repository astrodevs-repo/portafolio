const Text = ({ textColor, extra, content }) => {
  return (
    <p
      className={`${
        textColor ? textColor : "text-blackCeniza"
      } font-Poppins leading-[40px] w-full text-sm sm:text-xs: md:text-sm lg:text-md xl:text-lg 2xl:text-lg ${extra} leading-6`}
    >
      {content}
    </p>
  );
};

export default Text;
