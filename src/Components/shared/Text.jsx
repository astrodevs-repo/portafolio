const Text = ({ textColor, extra, content }) => {
  return (
    <p
      className={`${textColor} font-Poppins leading-[40px] w-full text-sm sm:text-lg: md:text-xl lg:text-2xl ${extra}`}
    >
      {content}
    </p>
  );
};

export default Text;
