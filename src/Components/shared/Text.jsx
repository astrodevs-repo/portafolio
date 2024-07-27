const Text = ({ textColor, extra, content }) => {
  return (
    <p
      style={{ lineHeight: "1.5rem" }}
      className={`${
        textColor ? textColor : "text-blackCeniza"
      } font-Poppins text-sm sm:text-xs md:text-sm lg:text-md xl:text-lg 2xl:text-lg ${extra}`}
    >
      {content}
    </p>
  );
};

export default Text;
