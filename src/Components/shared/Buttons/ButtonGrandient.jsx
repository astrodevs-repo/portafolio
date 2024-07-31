const ButtonGrandient = ({ text, id }) => {
  return (
    <a href={id}>
      {" "}
      <button
        type="button"
        className="text-gray-900  focus:ring-4 focus:outline-none bg-Chicle dark:bg-violet-600 dark:text-white hover:bg-[#28ae9e] hover:text-white transition-all ease-in-out font-medium rounded-lg text-sm px-2 py-2 sm:px-5 sm:py-3 text-center"
      >
        {text}
      </button>
    </a>
  );
};

export default ButtonGrandient;
