const Title = ({ text, extra, textColor }) => {
  return (
    <h1
      className={`${textColor} font-LusitanaBold leading-tight w-full text-2xl sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl ${extra} leading-6 m-0`}
    >
      {text}
    </h1>
  );
};

export default Title;
