const Title = ({ text, extra, textColor }) => {
  return (
    <h1
      className={`${textColor} dark:text-white w-full text-4xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-6xl ${extra}  m-0`}
    >
      {text}
    </h1>
  );
};

export default Title;
