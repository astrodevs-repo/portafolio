const Title = ({ text, extra, textColor }) => {
  return (
    <h1
      className={`${textColor} font-LusitanaBold leading-tight w-full text-xl sm:text-lg md:text-xl lg:text-5xl xl:text-6xl 2xl:text-7xl ${extra}`}
    >
      {text}
    </h1>
  );
};

export default Title;
