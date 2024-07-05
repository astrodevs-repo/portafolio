const SubTitle = ({ text, extra, textColor, position }) => {
  return (
    <h1
      className={`${textColor} text-blackCeniza font-extrabold font-Poppins leading-[40px] w-full text-lg sm:text-sm md:text-2xl lg:text-lg xl:text-xl 2xl:text-2xl ${position}  ${extra} leading-5 m-0`}
    >
      {text}
    </h1>
  );
};

export default SubTitle;
