const SuperTitle = ({ text, extra, textColor }) => {
  return (
    <h1
      className={`${textColor} font-Lalezar leading-tight dark:text-white w-full text-2xl sm:text-lg md:text-xl lg:text-2xl xl:text-5xl 2xl:text-7xl ${extra} leading-6 m-0`}
    >
      {text}
    </h1>
  );
};

export default SuperTitle;
