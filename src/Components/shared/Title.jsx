const Title = ({ text, extra, textColor }) => {
  return (
    <h1
      className={`${textColor} font-LusitanaBold leading-[40px] w-full text-xl sm:text-lg: md:text-xl lg:text-5xl ${extra}`}
    >
      {text}
    </h1>
  );
};

export default Title;
